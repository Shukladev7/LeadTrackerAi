import { NextRequest } from 'next/server';
import { adminAuth, adminDb } from './firebase-admin';

export interface AuthenticatedUser {
  uid: string;
  email?: string;
  role?: string;
  rawToken: any;
}

function extractBearerToken(req: NextRequest): string | null {
  const authHeader = req.headers.get('authorization') || req.headers.get('Authorization');
  if (!authHeader) return null;
  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) return null;
  return token;
}

export async function verifyIdTokenFromRequest(req: NextRequest): Promise<AuthenticatedUser> {
  const token = extractBearerToken(req);
  if (!token) {
    throw new Error('UNAUTHENTICATED');
  }

  const decoded = await adminAuth.verifyIdToken(token);
  return {
    uid: decoded.uid,
    email: decoded.email,
    role: (decoded as any).role,
    rawToken: decoded,
  };
}

export async function requireAdminFromRequest(req: NextRequest): Promise<AuthenticatedUser> {
  const user = await verifyIdTokenFromRequest(req);

  // First, trust custom claims if present
  if (user.role === 'Admin') {
    return user;
  }

  // Fallback: look up employee document by email and check role field.
  // Existing employees are keyed by random IDs, not necessarily by auth uid.
  if (!user.email) {
    throw new Error('FORBIDDEN');
  }

  const employeesRef = adminDb.collection('employees');
  const querySnap = await employeesRef.where('email', '==', user.email).limit(1).get();

  if (querySnap.empty) {
    throw new Error('FORBIDDEN');
  }

  const snap = querySnap.docs[0];
  const data = snap.data() as { role?: string } | undefined;

  if (!data?.role || data.role !== 'Admin') {
    throw new Error('FORBIDDEN');
  }

  return { ...user, role: data.role };
}
