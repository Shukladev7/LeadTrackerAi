import { Timestamp } from "firebase/firestore";

// Base interface for all Firestore documents
export interface FirestoreDocument {
  id?: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Example User interface
export interface User extends FirestoreDocument {
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'admin' | 'user' | 'moderator';
  isActive: boolean;
  lastLoginAt?: Timestamp;
  preferences?: {
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  };
}

// Example Product interface
export interface Product extends FirestoreDocument {
  name: string;
  price: number;
  category: string;
  imageUrls: string[];
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  rating?: number;
  reviewCount?: number;
}

// Example Order interface
export interface Order extends FirestoreDocument {
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: string;
  orderDate: Timestamp;
  estimatedDelivery?: Timestamp;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Example Blog Post interface
export interface BlogPost extends FirestoreDocument {
  title: string;
  content: string;
  excerpt: string;
  authorId: string;
  authorName: string;
  slug: string;
  tags: string[];
  categories: string[];
  featuredImage?: string;
  isPublished: boolean;
  publishedAt?: Timestamp;
  viewCount: number;
  likeCount: number;
}

// Example Comment interface
export interface Comment extends FirestoreDocument {
  postId: string;
  authorId: string;
  authorName: string;
  content: string;
  parentCommentId?: string; // For nested comments
  isApproved: boolean;
  likeCount: number;
}

// Generic query options for Firestore operations
export interface QueryOptions {
  limit?: number;
  orderBy?: {
    field: string;
    direction: 'asc' | 'desc';
  };
  where?: {
    field: string;
    operator: '==' | '!=' | '<' | '<=' | '>' | '>=' | 'array-contains' | 'array-contains-any' | 'in' | 'not-in';
    value: any;
  }[];
  startAfter?: any;
}

// Pagination interface
export interface PaginationResult<T> {
  data: T[];
  hasMore: boolean;
  lastDoc?: any;
  total?: number;
}
