import { useState, useEffect, useCallback } from 'react';
import { Unsubscribe } from 'firebase/firestore';
import { FirestoreService } from '../lib/firestore-service';
import { FirestoreDocument, QueryOptions, PaginationResult } from '../lib/firestore-types';

// Hook for fetching a single document
export function useDocument<T extends FirestoreDocument>(
  service: FirestoreService<T>,
  id: string | null
) {
  const [document, setDocument] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setDocument(null);
      setLoading(false);
      return;
    }

    let unsubscribe: Unsubscribe;

    const fetchDocument = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use real-time listener
        unsubscribe = service.onDocumentSnapshot(id, (doc) => {
          setDocument(doc);
          setLoading(false);
        });
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchDocument();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [service, id]);

  return { document, loading, error };
}

// Hook for fetching multiple documents
export function useCollection<T extends FirestoreDocument>(
  service: FirestoreService<T>,
  options: QueryOptions = {},
  realTime: boolean = true
) {
  const [documents, setDocuments] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let unsubscribe: Unsubscribe;

    const fetchDocuments = async () => {
      try {
        setLoading(true);
        setError(null);

        if (realTime) {
          // Use real-time listener
          unsubscribe = service.onCollectionSnapshot(options, (docs) => {
            setDocuments(docs);
            setLoading(false);
          });
        } else {
          // One-time fetch
          const docs = await service.getWithQuery(options);
          setDocuments(docs);
          setLoading(false);
        }
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchDocuments();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [service, JSON.stringify(options), realTime]);

  return { documents, loading, error };
}

// Hook for paginated data
export function usePaginatedCollection<T extends FirestoreDocument>(
  service: FirestoreService<T>,
  pageSize: number,
  options: QueryOptions = {}
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [lastDoc, setLastDoc] = useState<any>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      setError(null);

      const queryOptions = {
        ...options,
        startAfter: lastDoc,
      };

      const result = await service.getPaginated({ ...queryOptions, pageSize });
      
      setData(prev => [...prev, ...result.data]);
      setHasMore(result.hasMore);
      setLastDoc(result.lastDoc);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [service, pageSize, options, lastDoc, loading, hasMore]);

  const reset = useCallback(() => {
    setData([]);
    setLastDoc(null);
    setHasMore(true);
    setError(null);
  }, []);

  // Load initial data
  useEffect(() => {
    reset();
    loadMore();
  }, [service, pageSize, JSON.stringify(options)]);

  return {
    data,
    loading,
    error,
    hasMore,
    loadMore,
    reset,
  };
}

// Hook for CRUD operations
export function useFirestoreCRUD<T extends FirestoreDocument>(
  service: FirestoreService<T>
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const create = useCallback(async (data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      setLoading(true);
      setError(null);
      const id = await service.create(data);
      return id;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [service]);

  const update = useCallback(async (id: string, data: Partial<Omit<T, 'id' | 'createdAt'>>) => {
    try {
      setLoading(true);
      setError(null);
      await service.update(id, data);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [service]);

  const remove = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      await service.delete(id);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [service]);

  const batchOperations = useCallback(async (operations: Array<{
    type: 'create' | 'update' | 'delete';
    id?: string;
    data?: Partial<T>;
  }>) => {
    try {
      setLoading(true);
      setError(null);
      await service.batchWrite(operations);
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [service]);

  return {
    create,
    update,
    remove,
    batchOperations,
    loading,
    error,
  };
}

// Hook for search functionality
export function useFirestoreSearch<T extends FirestoreDocument>(
  service: FirestoreService<T>,
  searchFunction: (query: string) => Promise<T[]>
) {
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const searchResults = await searchFunction(query);
      setResults(searchResults);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [searchFunction]);

  const clearResults = useCallback(() => {
    setResults([]);
    setError(null);
  }, []);

  return {
    results,
    loading,
    error,
    search,
    clearResults,
  };
}

// Hook for real-time document count
export function useDocumentCount<T extends FirestoreDocument>(
  service: FirestoreService<T>,
  options: QueryOptions = {}
) {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let unsubscribe: Unsubscribe;

    const fetchCount = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use real-time listener to track count changes
        unsubscribe = service.onCollectionSnapshot(options, (docs) => {
          setCount(docs.length);
          setLoading(false);
        });
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchCount();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [service, JSON.stringify(options)]);

  return { count, loading, error };
}
