import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import { requireAdminFromRequest } from '@/lib/server-auth';
import { recomputeDashboardSnapshot } from '@/lib/dashboard-recompute';

export async function POST(req: NextRequest) {
  try {
    await requireAdminFromRequest(req);

    const snapshot = await recomputeDashboardSnapshot();

    await adminDb.collection('stats').doc('dashboard').set(snapshot, { merge: false });

    return NextResponse.json({ success: true, stats: snapshot });
  } catch (error: any) {
    console.error('Failed to rebuild dashboard:', error);

    const message =
      error?.message === 'UNAUTHENTICATED' || error?.message === 'FORBIDDEN'
        ? 'FORBIDDEN'
        : 'INTERNAL_ERROR';

    const status = message === 'FORBIDDEN' ? 403 : 500;

    return NextResponse.json({ error: message }, { status });
  }
}
