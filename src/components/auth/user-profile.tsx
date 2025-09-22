'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2, User, Mail, Shield, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
import { getInitials, formatLastLogin } from '@/lib/auth-utils';

export function UserProfile() {
  const { 
    user, 
    updateUserProfile, 
    sendVerificationEmail, 
    changePassword,
    logout,
    isEmailVerified 
  } = useAuth();
  
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  
  const [loading, setLoading] = useState({
    profile: false,
    password: false,
    verification: false,
  });
  
  const [messages, setMessages] = useState({
    profile: '',
    password: '',
    verification: '',
  });

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName.trim()) return;
    
    setLoading(prev => ({ ...prev, profile: true }));
    setMessages(prev => ({ ...prev, profile: '' }));
    
    try {
      await updateUserProfile(displayName);
      setMessages(prev => ({ ...prev, profile: 'Profile updated successfully!' }));
    } catch (error: any) {
      setMessages(prev => ({ ...prev, profile: error.message }));
    } finally {
      setLoading(prev => ({ ...prev, profile: false }));
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessages(prev => ({ ...prev, password: 'Passwords do not match' }));
      return;
    }
    
    if (newPassword.length < 6) {
      setMessages(prev => ({ ...prev, password: 'Password must be at least 6 characters' }));
      return;
    }
    
    setLoading(prev => ({ ...prev, password: true }));
    setMessages(prev => ({ ...prev, password: '' }));
    
    try {
      await changePassword(currentPassword, newPassword);
      setMessages(prev => ({ ...prev, password: 'Password changed successfully!' }));
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      setMessages(prev => ({ ...prev, password: error.message }));
    } finally {
      setLoading(prev => ({ ...prev, password: false }));
    }
  };

  const handleSendVerification = async () => {
    setLoading(prev => ({ ...prev, verification: true }));
    setMessages(prev => ({ ...prev, verification: '' }));
    
    try {
      await sendVerificationEmail();
      setMessages(prev => ({ ...prev, verification: 'Verification email sent!' }));
    } catch (error: any) {
      setMessages(prev => ({ ...prev, verification: error.message }));
    } finally {
      setLoading(prev => ({ ...prev, verification: false }));
    }
  };

  if (!user) return null;

  return (
    <div className="space-y-6">
      {/* Profile Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Information
          </CardTitle>
          <CardDescription>
            Manage your account details and preferences
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.photoURL || ''} alt={user.displayName || ''} />
              <AvatarFallback className="text-lg">
                {getInitials(user.displayName)}
              </AvatarFallback>
            </Avatar>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">
                  {user.displayName || 'No name set'}
                </h3>
                {isEmailVerified ? (
                  <Badge variant="secondary" className="text-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Unverified
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {user.email}
              </p>
              
              <p className="text-xs text-muted-foreground">
                Last login: {formatLastLogin(user.metadata.lastSignInTime || null)}
              </p>
            </div>
          </div>
          
          {!isEmailVerified && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>Your email address is not verified.</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleSendVerification}
                  disabled={loading.verification}
                >
                  {loading.verification ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    'Send Verification'
                  )}
                </Button>
              </AlertDescription>
            </Alert>
          )}
          
          {messages.verification && (
            <Alert>
              <AlertDescription>{messages.verification}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Update Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Update Profile</CardTitle>
          <CardDescription>
            Change your display name and other profile information
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            {messages.profile && (
              <Alert variant={messages.profile.includes('successfully') ? 'default' : 'destructive'}>
                <AlertDescription>{messages.profile}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your display name"
                disabled={loading.profile}
              />
            </div>
            
            <Button type="submit" disabled={loading.profile || !displayName.trim()}>
              {loading.profile ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                'Update Profile'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Change Password
          </CardTitle>
          <CardDescription>
            Update your password to keep your account secure
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleChangePassword} className="space-y-4">
            {messages.password && (
              <Alert variant={messages.password.includes('successfully') ? 'default' : 'destructive'}>
                <AlertDescription>{messages.password}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPasswords ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  disabled={loading.password}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPasswords(!showPasswords)}
                >
                  {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type={showPasswords ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                disabled={loading.password}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type={showPasswords ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                disabled={loading.password}
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={loading.password || !currentPassword || !newPassword || !confirmPassword}
            >
              {loading.password ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Changing Password...
                </>
              ) : (
                'Change Password'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
          <CardDescription>
            Manage your account settings
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Button variant="destructive" onClick={logout}>
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
