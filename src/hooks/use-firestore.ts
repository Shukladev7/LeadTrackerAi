import { useState, useEffect, useCallback,useRef } from 'react';
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


export function usePaginatedCollection<T>(
  service: any,
  pageSize: number,
  options: any
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const pageCursors = useRef<Map<number, any>>(new Map());

  const loadPage = useCallback(
    async (page: number) => {
      if (loading) return;

      setLoading(true);
      try {
        const cursor = page === 1 ? null : pageCursors.current.get(page - 1);

        const res = await service.getPaginated({
          ...options,
          pageSize,
          startAfter: cursor ?? undefined,
        });

        setData(res.data);

        if (res.lastDoc) {
          pageCursors.current.set(page, res.lastDoc);
        }

        setHasMore(res.hasMore);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    },
    [service, pageSize, options, loading]
  );

  const reset = useCallback(() => {
    pageCursors.current.clear();
    setData([]);
    setHasMore(true);
  }, []);

  return {
    data,
    loading,
    error,
    hasMore,
    loadPage,
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
