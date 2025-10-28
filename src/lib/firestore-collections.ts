import { FirestoreService } from './firestore-service';
import { User, Product, Order, BlogPost, Comment } from './firestore-types';

// Create service instances for different collections
export const usersService = new FirestoreService<User>('users');
export const productsService = new FirestoreService<Product>('products');
export const ordersService = new FirestoreService<Order>('orders');
export const blogPostsService = new FirestoreService<BlogPost>('blogPosts');
export const commentsService = new FirestoreService<Comment>('comments');

// Collection names constants
export const COLLECTIONS = {
  USERS: 'users',
  PRODUCTS: 'products',
  ORDERS: 'orders',
  BLOG_POSTS: 'blogPosts',
  COMMENTS: 'comments',
} as const;

// Extended service classes with specific business logic
export class UserService extends FirestoreService<User> {
  constructor() {
    super(COLLECTIONS.USERS);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const users = await this.getWithQuery({
      where: [{ field: 'email', operator: '==', value: email }],
      limit: 1
    });
    return users.length > 0 ? users[0] : null;
  }

  async getActiveUsers(): Promise<User[]> {
    return this.getWithQuery({
      where: [{ field: 'isActive', operator: '==', value: true }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
  }

  async updateLastLogin(userId: string): Promise<void> {
    await this.update(userId, {
      lastLoginAt: new Date() as any
    });
  }
}

export class ProductService extends FirestoreService<Product> {
  constructor() {
    super(COLLECTIONS.PRODUCTS);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.getWithQuery({
      where: [{ field: 'category', operator: '==', value: category }],
      orderBy: { field: 'name', direction: 'asc' }
    });
  }

  async getInStockProducts(): Promise<Product[]> {
    return this.getWithQuery({
      where: [{ field: 'inStock', operator: '==', value: true }],
      orderBy: { field: 'name', direction: 'asc' }
    });
  }

  async searchProducts(searchTerm: string): Promise<Product[]> {
    // Note: Firestore doesn't support full-text search natively
    // This is a simple implementation - consider using Algolia or similar for better search
    const products = await this.getAll();
    const term = searchTerm.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(term) ||
      (product.tags || []).some(tag => tag.toLowerCase().includes(term))
    );
  }

  async updateStock(productId: string, quantity: number): Promise<void> {
    const product = await this.getById(productId);
    if (product) {
      await this.update(productId, {
        stockQuantity: quantity,
        inStock: quantity > 0
      });
    }
  }
}

export class OrderService extends FirestoreService<Order> {
  constructor() {
    super(COLLECTIONS.ORDERS);
  }

  async getOrdersByUser(userId: string): Promise<Order[]> {
    return this.getWithQuery({
      where: [{ field: 'userId', operator: '==', value: userId }],
      orderBy: { field: 'orderDate', direction: 'desc' }
    });
  }

  async getOrdersByStatus(status: Order['status']): Promise<Order[]> {
    return this.getWithQuery({
      where: [{ field: 'status', operator: '==', value: status }],
      orderBy: { field: 'orderDate', direction: 'desc' }
    });
  }

  async updateOrderStatus(orderId: string, status: Order['status']): Promise<void> {
    await this.update(orderId, { status });
  }

  async getRecentOrders(limit: number = 10): Promise<Order[]> {
    return this.getWithQuery({
      orderBy: { field: 'orderDate', direction: 'desc' },
      limit
    });
  }
}

export class BlogPostService extends FirestoreService<BlogPost> {
  constructor() {
    super(COLLECTIONS.BLOG_POSTS);
  }

  async getPublishedPosts(): Promise<BlogPost[]> {
    return this.getWithQuery({
      where: [{ field: 'isPublished', operator: '==', value: true }],
      orderBy: { field: 'publishedAt', direction: 'desc' }
    });
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await this.getWithQuery({
      where: [{ field: 'slug', operator: '==', value: slug }],
      limit: 1
    });
    return posts.length > 0 ? posts[0] : null;
  }

  async getPostsByAuthor(authorId: string): Promise<BlogPost[]> {
    return this.getWithQuery({
      where: [{ field: 'authorId', operator: '==', value: authorId }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
  }

  async getPostsByTag(tag: string): Promise<BlogPost[]> {
    return this.getWithQuery({
      where: [{ field: 'tags', operator: 'array-contains', value: tag }],
      orderBy: { field: 'publishedAt', direction: 'desc' }
    });
  }

  async incrementViewCount(postId: string): Promise<void> {
    const post = await this.getById(postId);
    if (post) {
      await this.update(postId, {
        viewCount: (post.viewCount || 0) + 1
      });
    }
  }
}

export class CommentService extends FirestoreService<Comment> {
  constructor() {
    super(COLLECTIONS.COMMENTS);
  }

  async getCommentsByPost(postId: string): Promise<Comment[]> {
    return this.getWithQuery({
      where: [
        { field: 'postId', operator: '==', value: postId },
        { field: 'isApproved', operator: '==', value: true }
      ],
      orderBy: { field: 'createdAt', direction: 'asc' }
    });
  }

  async getPendingComments(): Promise<Comment[]> {
    return this.getWithQuery({
      where: [{ field: 'isApproved', operator: '==', value: false }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
  }

  async approveComment(commentId: string): Promise<void> {
    await this.update(commentId, { isApproved: true });
  }

  async getCommentsByAuthor(authorId: string): Promise<Comment[]> {
    return this.getWithQuery({
      where: [{ field: 'authorId', operator: '==', value: authorId }],
      orderBy: { field: 'createdAt', direction: 'desc' }
    });
  }
}

// Create instances of extended services
export const userService = new UserService();
export const productService = new ProductService();
export const orderService = new OrderService();
export const blogPostService = new BlogPostService();
export const commentService = new CommentService();
