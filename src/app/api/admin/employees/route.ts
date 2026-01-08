import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';
import { requireAdminFromRequest } from '@/lib/server-auth';

interface CreateEmployeePayload {
  name: string;
  email: string;
  role: string;
  phone?: string;
  department?: string;
  address?: string;
}

export async function POST(req: NextRequest) {
  try {
    const adminUser = await requireAdminFromRequest(req);

    const body = (await req.json()) as Partial<CreateEmployeePayload>;
    const { name, email, role, phone, department, address } = body;

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, role' },
        { status: 400 },
      );
    }

    // Prevent duplicate users by email in Auth
    try {
      await adminAuth.getUserByEmail(email);
      return NextResponse.json(
        { error: 'A user with this email already exists' },
        { status: 409 },
      );
    } catch {
      // getUserByEmail throws if user does not exist -> OK to proceed
    }

    // Create Auth user without password; user will set it via password reset flow
    const userRecord = await adminAuth.createUser({
      email,
      displayName: name,
      emailVerified: false,
      disabled: false,
    });

    // Optionally set custom claims for quick role checks
    await adminAuth.setCustomUserClaims(userRecord.uid, { role });

    const nowIso = new Date().toISOString();

    // Create matching employee document in Firestore
    const employeeDoc = {
      uid: userRecord.uid,
      name,
      email,
      phone: phone || '',
      role,
      department: department || '',
      address: address || '',
      createdAt: nowIso,
      createdBy: adminUser.uid,
    };

    await adminDb.collection('employees').doc(userRecord.uid).set(employeeDoc, { merge: true });

    return NextResponse.json(
      {
        success: true,
        uid: userRecord.uid,
        email,
        employee: employeeDoc,
      },
      { status: 201 },
    );
  } catch (err: any) {
    console.error('Admin create employee error:', err);

    if (err?.message === 'UNAUTHENTICATED') {
      return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
    }

    if (err?.message === 'FORBIDDEN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
