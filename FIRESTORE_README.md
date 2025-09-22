# Firestore Database Implementation

This project includes a comprehensive Firestore database implementation with TypeScript support, React hooks, and example components.

## 🚀 Features

- **Complete Firebase/Firestore Setup**: Pre-configured with your Firebase project
- **TypeScript Support**: Fully typed interfaces and services
- **Generic CRUD Operations**: Reusable service classes for all collections
- **React Hooks**: Custom hooks for easy integration with React components
- **Real-time Updates**: Live data synchronization with Firestore
- **Pagination Support**: Built-in pagination for large datasets
- **Batch Operations**: Efficient bulk operations
- **Transaction Support**: ACID transactions for complex operations
- **Search Functionality**: Basic search implementation
- **Example Components**: Ready-to-use React components

## 📁 File Structure

```
src/
├── lib/
│   ├── firebase.ts                 # Firebase configuration and initialization
│   ├── firestore-types.ts          # TypeScript interfaces for collections
│   ├── firestore-service.ts        # Generic Firestore service class
│   └── firestore-collections.ts    # Specific service instances
├── hooks/
│   └── use-firestore.ts            # React hooks for Firestore operations
└── components/
    └── firestore-examples.tsx      # Example React components
```

## 🛠️ Setup

### 1. Firebase Configuration

The Firebase configuration is already set up in `src/lib/firebase.ts` with your project credentials:

```typescript
const firebaseConfig = {
  apiKey: "AIzaSyCjA4ek_FRNB61JM7xrYAT3s1eoL94qhnE",
  authDomain: "studio-5063047183-aa053.firebaseapp.com",
  projectId: "studio-5063047183-aa053",
  storageBucket: "studio-5063047183-aa053.firebasestorage.app",
  messagingSenderId: "311176415853",
  appId: "1:311176415853:web:52798531c528415cf94d64"
};
```

### 2. Environment Variables (Optional)

Create a `.env.local` file for additional configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCjA4ek_FRNB61JM7xrYAT3s1eoL94qhnE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=studio-5063047183-aa053.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=studio-5063047183-aa053
```

## 📚 Usage Examples

### Basic CRUD Operations

```typescript
import { usersService } from '@/lib/firestore-collections';

// Create a new user
const userId = await usersService.create({
  email: 'user@example.com',
  displayName: 'John Doe',
  role: 'user',
  isActive: true
});

// Get a user by ID
const user = await usersService.getById(userId);

// Update a user
await usersService.update(userId, {
  displayName: 'Jane Doe',
  isActive: false
});

// Delete a user
await usersService.delete(userId);
```

### Using React Hooks

```typescript
import { useCollection, useDocument, useFirestoreCRUD } from '@/hooks/use-firestore';
import { usersService } from '@/lib/firestore-collections';

function UserComponent() {
  // Get all active users with real-time updates
  const { documents: users, loading, error } = useCollection(usersService, {
    where: [{ field: 'isActive', operator: '==', value: true }],
    orderBy: { field: 'createdAt', direction: 'desc' }
  });

  // CRUD operations
  const { create, update, remove } = useFirestoreCRUD(usersService);

  // Create new user
  const handleCreateUser = async () => {
    await create({
      email: 'new@example.com',
      displayName: 'New User',
      role: 'user',
      isActive: true
    });
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {users.map(user => (
        <div key={user.id}>{user.displayName}</div>
      ))}
      <button onClick={handleCreateUser}>Add User</button>
    </div>
  );
}
```

### Real-time Data

```typescript
import { useEffect } from 'react';
import { usersService } from '@/lib/firestore-collections';

function RealTimeUsers() {
  useEffect(() => {
    // Listen to real-time updates
    const unsubscribe = usersService.onCollectionSnapshot(
      { where: [{ field: 'isActive', operator: '==', value: true }] },
      (users) => {
        console.log('Users updated:', users);
      }
    );

    return () => unsubscribe();
  }, []);

  return <div>Check console for real-time updates</div>;
}
```

### Pagination

```typescript
import { usePaginatedCollection } from '@/hooks/use-firestore';
import { productsService } from '@/lib/firestore-collections';

function ProductList() {
  const {
    data: products,
    loading,
    hasMore,
    loadMore
  } = usePaginatedCollection(productsService, 10, {
    where: [{ field: 'inStock', operator: '==', value: true }]
  });

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
      {hasMore && (
        <button onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}
```

### Batch Operations

```typescript
import { usersService } from '@/lib/firestore-collections';

// Batch create, update, and delete operations
await usersService.batchWrite([
  {
    type: 'create',
    id: 'user1',
    data: { email: 'user1@example.com', displayName: 'User 1', role: 'user', isActive: true }
  },
  {
    type: 'update',
    id: 'user2',
    data: { displayName: 'Updated Name' }
  },
  {
    type: 'delete',
    id: 'user3'
  }
]);
```

### Transactions

```typescript
import { usersService } from '@/lib/firestore-collections';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Transfer points between users
await usersService.runTransaction(async (transaction) => {
  const fromUserRef = doc(db, 'users', 'fromUserId');
  const toUserRef = doc(db, 'users', 'toUserId');
  
  const fromUserDoc = await transaction.get(fromUserRef);
  const toUserDoc = await transaction.get(toUserRef);
  
  if (!fromUserDoc.exists() || !toUserDoc.exists()) {
    throw new Error('Users not found');
  }
  
  const fromUserPoints = fromUserDoc.data().points || 0;
  const toUserPoints = toUserDoc.data().points || 0;
  const transferAmount = 100;
  
  if (fromUserPoints < transferAmount) {
    throw new Error('Insufficient points');
  }
  
  transaction.update(fromUserRef, { points: fromUserPoints - transferAmount });
  transaction.update(toUserRef, { points: toUserPoints + transferAmount });
});
```

## 🔧 Available Services

### Pre-configured Services

- `usersService` - User management
- `productsService` - Product catalog
- `ordersService` - Order management
- `blogPostsService` - Blog posts
- `commentsService` - Comments

### Extended Services with Business Logic

- `UserService` - Additional user-specific methods
- `ProductService` - Product search and inventory management
- `OrderService` - Order status tracking
- `BlogPostService` - Publishing and view tracking
- `CommentService` - Comment moderation

## 🎨 Example Components

The `firestore-examples.tsx` file includes several ready-to-use components:

- `UserListExample` - Display list of users with real-time updates
- `UserProfileExample` - User profile with edit functionality
- `ProductCatalogExample` - Paginated product catalog
- `CreateBlogPostExample` - Form to create new blog posts
- `FirestoreDashboardExample` - Real-time dashboard with multiple collections

## 🔒 Security Rules

Make sure to set up proper Firestore security rules in the Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Products are readable by all, writable by admins only
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Orders are readable/writable by the user who created them
    match /orders/{orderId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
  }
}
```

## 🚀 Getting Started

1. Import the services you need:
```typescript
import { usersService, productsService } from '@/lib/firestore-collections';
```

2. Use React hooks in your components:
```typescript
import { useCollection, useFirestoreCRUD } from '@/hooks/use-firestore';
```

3. Check the example components for implementation patterns:
```typescript
import { UserListExample, ProductCatalogExample } from '@/components/firestore-examples';
```

## 📝 TypeScript Interfaces

All collections use strongly-typed interfaces:

- `User` - User accounts and profiles
- `Product` - Product catalog items
- `Order` - Customer orders
- `BlogPost` - Blog content
- `Comment` - User comments

You can extend these interfaces or create new ones for your specific needs.

## 🔄 Real-time Updates

All hooks support real-time updates by default. Data automatically syncs when changes occur in Firestore, providing a seamless user experience.

## 📊 Performance Tips

1. **Use pagination** for large datasets
2. **Implement proper indexing** in Firestore Console
3. **Use batch operations** for multiple writes
4. **Optimize queries** with proper where clauses
5. **Consider offline persistence** for better UX

## 🐛 Error Handling

All services include comprehensive error handling. Errors are logged to the console and can be caught in your components using the error states provided by the hooks.

## 🔧 Customization

You can easily extend the existing services or create new ones:

```typescript
export class CustomService extends FirestoreService<CustomType> {
  constructor() {
    super('customCollection');
  }

  async customMethod() {
    // Your custom logic here
  }
}
```

This implementation provides a solid foundation for any Firestore-based application with TypeScript and React!
