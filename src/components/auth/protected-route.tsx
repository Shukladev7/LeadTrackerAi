'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getRedirectPath } from '@/lib/auth-utils';
import { Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireEmailVerification?: boolean;
}

export function ProtectedRoute({ 
  children, 
  requireEmailVerification = false 
}: ProtectedRouteProps) {
  const { user, loading, sendVerificationEmail } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      const redirectPath = getRedirectPath(pathname);
      router.push(redirectPath);
    }
  }, [user, loading, router, pathname]);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated, don't render anything (redirect will happen)
  if (!user) {
    return null;
  }

  // If email verification is required but user's email is not verified
  if (requireEmailVerification && !user.emailVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-6">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Email Verification Required</h2>
            <p className="text-muted-foreground mt-2">
              Please verify your email address to continue using the application.
            </p>
          </div>
          
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              We've sent a verification email to <strong>{user.email}</strong>. 
              Please check your inbox and click the verification link.
            </AlertDescription>
          </Alert>

          <div className="space-y-3">
            <Button 
              onClick={sendVerificationEmail} 
              className="w-full"
              variant="outline"
            >
              Resend Verification Email
            </Button>
            <Button 
              onClick={() => window.location.reload()} 
              className="w-full"
            >
              I've Verified My Email
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // User is authenticated and email is verified (if required)
  return <>{children}</>;
}
