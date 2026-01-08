import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
  writeBatch,
  runTransaction,
  serverTimestamp,
  Timestamp,
  DocumentReference,
  Query,
  QuerySnapshot,
  DocumentSnapshot,
  Unsubscribe,
  WhereFilterOp
} from "firebase/firestore";
import { db } from "./firebase";
import { FirestoreDocument, QueryOptions, PaginationResult } from "./firestore-types";

/**
 * Generic Firestore service class for CRUD operations
 */
// Recursively remove undefined values from an object/array structure so
// Firestore never receives unsupported undefined values at any depth.
function deepClean<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => deepClean(item)) as any;
  }
  if (value && typeof value === 'object') {
    const result: any = {};
    Object.entries(value as any).forEach(([key, v]) => {
      if (v !== undefined) {
        result[key] = deepClean(v as any);
      }
    });
    return result;
  }
  return value;
}

export class FirestoreService<T extends FirestoreDocument> {
  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  /**
   * Create a new document
   */
  async create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      // Remove undefined values as Firestore doesn't accept them
      const cleanData: any = {};
      for (const [key, value] of Object.entries(data)) {
        if (value !== undefined) {
          cleanData[key] = value;
        }
      }
      
      const docData = {
        ...cleanData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      
      const docRef = await addDoc(collection(db, this.collectionName), docData);
      return docRef.id;
    } catch (error) {
      console.error(`Error creating document in ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Create a document with a specific ID
   */
  async createWithId(id: string, data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
    try {
      // Remove undefined values as Firestore doesn't accept them
      const cleanData: any = {};
      for (const [key, value] of Object.entries(data)) {
        if (value !== undefined) {
          cleanData[key] = value;
        }
      }
      
      const docData = {
        ...cleanData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      
      const docRef = doc(db, this.collectionName, id);
      await setDoc(docRef, docData);
    } catch (error) {
      console.error(`Error creating document with ID ${id} in ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Get a document by ID
   */
  async getById(id: string): Promise<T | null> {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as T;
      }
      
      return null;
    } catch (error) {
      console.error(`Error getting document ${id} from ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Get all documents
   */
  async getAll(): Promise<T[]> {
    try {
      const querySnapshot = await getDocs(collection(db, this.collectionName));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as T[];
    } catch (error) {
      console.error(`Error getting all documents from ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Get documents with query options
   */
  async getWithQuery(options: QueryOptions = {}): Promise<T[]> {
    try {
      let q = collection(db, this.collectionName) as Query;

      // Apply where conditions
      if (options.where) {
        options.where.forEach(condition => {
          q = query(q, where(condition.field, condition.operator as WhereFilterOp, condition.value));
        });
      }

      // Apply ordering
      if (options.orderBy) {
        q = query(q, orderBy(options.orderBy.field, options.orderBy.direction));
      }

      // Apply limit
      if (options.limit) {
        q = query(q, limit(options.limit));
      }

      // Apply pagination
      if (options.startAfter) {
        q = query(q, startAfter(options.startAfter));
      }

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as T[];
    } catch (error) {
      console.error(`Error querying documents from ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Get paginated results
   */
async getPaginated(
  options: QueryOptions & { pageSize: number }
): Promise<PaginationResult<T>> {
  try {
    let q = collection(db, this.collectionName) as Query;

    // where
    if (options.where) {
      options.where.forEach(cond => {
        q = query(q, where(cond.field, cond.operator as any, cond.value));
      });
    }

    // orderBy
    if (options.orderBy) {
      q = query(q, orderBy(options.orderBy.field, options.orderBy.direction));
    }

    // cursor
    if (options.startAfter) {
      q = query(q, startAfter(options.startAfter));
    }

    // limit
    q = query(q, limit(options.pageSize));

    const snapshot = await getDocs(q);

    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as T[];

    return {
      data,
      hasMore: snapshot.docs.length === options.pageSize,
      lastDoc:
        snapshot.docs.length > 0
          ? snapshot.docs[snapshot.docs.length - 1] // ✅ DocumentSnapshot
          : null,
    };
  } catch (e) {
    console.error("Pagination error:", e);
    throw e;
  }
}



  /**
   * Update a document
   */
  async update(id: string, data: Partial<Omit<T, 'id' | 'createdAt'>>): Promise<void> {
    try {
      const docRef = doc(db, this.collectionName, id);
      
      // Remove undefined values as Firestore doesn't accept them, including
      // nested undefined fields inside objects/arrays.
      const cleaned = deepClean(data) as any;

      const updateData = {
        ...cleaned,
        updatedAt: serverTimestamp(),
      };
      
      await updateDoc(docRef, updateData);
    } catch (error) {
      console.error(`Error updating document ${id} in ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Delete a document
   */
  async delete(id: string): Promise<void> {
    try {
      const docRef = doc(db, this.collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error(`Error deleting document ${id} from ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Delete multiple documents
   */
  async deleteMultiple(ids: string[]): Promise<void> {
    try {
      const batch = writeBatch(db);
      
      ids.forEach(id => {
        const docRef = doc(db, this.collectionName, id);
        batch.delete(docRef);
      });
      
      await batch.commit();
    } catch (error) {
      console.error(`Error deleting multiple documents from ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Listen to real-time updates for a document
   */
  onDocumentSnapshot(id: string, callback: (doc: T | null) => void): Unsubscribe {
    const docRef = doc(db, this.collectionName, id);
    
    return onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const document = {
          id: docSnap.id,
          ...docSnap.data(),
        } as T;
        callback(document);
      } else {
        callback(null);
      }
    }, (error) => {
      console.error(`Error listening to document ${id} in ${this.collectionName}:`, error);
    });
  }

  /**
   * Listen to real-time updates for a collection
   */
  onCollectionSnapshot(options: QueryOptions = {}, callback: (docs: T[]) => void): Unsubscribe {
    let q = collection(db, this.collectionName) as Query;

    // Apply query options (similar to getWithQuery)
    if (options.where) {
      options.where.forEach(condition => {
        q = query(q, where(condition.field, condition.operator as WhereFilterOp, condition.value));
      });
    }

    if (options.orderBy) {
      q = query(q, orderBy(options.orderBy.field, options.orderBy.direction));
    }

    if (options.limit) {
      q = query(q, limit(options.limit));
    }

    return onSnapshot(q, (querySnapshot) => {
      const documents = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as T[];
      callback(documents);
    }, (error) => {
      console.error(`Error listening to collection ${this.collectionName}:`, error);
    });
  }

  /**
   * Batch write operations
   */
  async batchWrite(operations: Array<{
    type: 'create' | 'update' | 'delete';
    id?: string;
    data?: Partial<T>;
  }>): Promise<void> {
    try {
      const batch = writeBatch(db);

      operations.forEach(operation => {
        switch (operation.type) {
          case 'create':
            if (operation.id && operation.data) {
              const docRef = doc(db, this.collectionName, operation.id);
              batch.set(docRef, {
                ...operation.data,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
              });
            }
            break;
          case 'update':
            if (operation.id && operation.data) {
              const docRef = doc(db, this.collectionName, operation.id);
              batch.update(docRef, {
                ...operation.data,
                updatedAt: serverTimestamp(),
              });
            }
            break;
          case 'delete':
            if (operation.id) {
              const docRef = doc(db, this.collectionName, operation.id);
              batch.delete(docRef);
            }
            break;
        }
      });

      await batch.commit();
    } catch (error) {
      console.error(`Error performing batch operations on ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Transaction example
   */
  async runTransaction<R>(
    updateFunction: (transaction: any) => Promise<R>
  ): Promise<R> {
    try {
      return await runTransaction(db, updateFunction);
    } catch (error) {
      console.error(`Error running transaction on ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Count documents (Note: This is an expensive operation for large collections)
   */
  async count(options: QueryOptions = {}): Promise<number> {
    try {
      const documents = await this.getWithQuery(options);
      return documents.length;
    } catch (error) {
      console.error(`Error counting documents in ${this.collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Check if document exists
   */
  async exists(id: string): Promise<boolean> {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);
      return docSnap.exists();
    } catch (error) {
      console.error(`Error checking if document ${id} exists in ${this.collectionName}:`, error);
      throw error;
    }
  }
}

// Utility functions
export const createTimestamp = () => Timestamp.now();
export const serverTime = () => serverTimestamp();

// Helper function to convert Firestore timestamp to Date
export const timestampToDate = (timestamp: Timestamp): Date => {
  return timestamp.toDate();
};

// Helper function to format timestamp
export const formatTimestamp = (timestamp: Timestamp, locale = 'en-US'): string => {
  return timestamp.toDate().toLocaleDateString(locale);
};

// Currency-specific functions
import { Currency, COLLECTIONS } from './business-types';

export async function getAllCurrencies(): Promise<Currency[]> {
  const snapshot = await getDocs(collection(db, COLLECTIONS.CURRENCIES));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Currency));
}

export async function getActiveCurrencies(): Promise<Currency[]> {
  const q = query(
    collection(db, COLLECTIONS.CURRENCIES),
    orderBy('code', 'asc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Currency));
}

export async function getCurrencyById(id: string): Promise<Currency | null> {
  const docRef = doc(db, COLLECTIONS.CURRENCIES, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Currency;
  }
  return null;
}

export async function addCurrency(currencyData: Omit<Currency, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTIONS.CURRENCIES), {
    ...currencyData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return docRef.id;
}

export async function updateCurrency(id: string, currencyData: Partial<Currency>): Promise<void> {
  const docRef = doc(db, COLLECTIONS.CURRENCIES, id);
  await updateDoc(docRef, {
    ...currencyData,
    updatedAt: serverTimestamp()
  });
}

export async function deleteCurrency(id: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.CURRENCIES, id);
  await deleteDoc(docRef);
}
