# Employee Management Testing Guide

## Quick Test Checklist

Use this guide to verify that the employee creation and Firebase Auth integration is working correctly.

## Prerequisites

1. **Environment Variables Set**: Ensure all required Firebase environment variables are configured in `.env`
2. **Development Server Running**: `npm run dev` on port 9002
3. **Test Email Access**: Use an email address you can access for testing

## Test Scenarios

### ✅ Test 1: Successful Employee Creation

**Steps:**
1. Navigate to `http://localhost:9002/employees`
2. Click **"Add Employee"** button
3. Fill out the form with test data:
   ```
   Full Name: Test Employee
   Email: test.employee@yourdomain.com
   Phone: 1234567890
   Role: [Select any available role]
   Department: [Select any available department]
   Address: 123 Test Street, Test City
   ```
4. Click **"Add Employee"**

**Expected Results:**
- ✅ Success toast appears: "Successfully added employee Test Employee. Password reset email has been sent to test.employee@yourdomain.com."
- ✅ Console shows: "✅ EMPLOYEE CREATED: Test Employee"
- ✅ Console shows: "📨 Password reset email sent successfully!"
- ✅ Employee appears in the employees list
- ✅ Test email receives password reset email

### ✅ Test 2: Email Failure Fallback

**Steps:**
1. Temporarily remove `FIREBASE_WEB_API_KEY` from `.env`
2. Restart development server
3. Try adding another employee

**Expected Results:**
- ✅ Employee still created in database
- ✅ Console shows manual reset link
- ✅ Toast shows: "Email sending failed - please share the reset link manually"

### ✅ Test 3: Duplicate Email Handling

**Steps:**
1. Try adding an employee with the same email as Test 1

**Expected Results:**
- ❌ Error toast appears: "An account with this email already exists."
- ❌ Employee is not duplicated in the system

### ✅ Test 4: Missing Firebase Configuration

**Steps:**
1. Temporarily remove Firebase Admin environment variables
2. Restart development server
3. Try adding an employee

**Expected Results:**
- ✅ Employee added to database only
- ⚠️ Warning message about missing Firebase configuration
- ❌ No Firebase Auth account created

## Email Testing

### Check Email Delivery

1. **Check Inbox**: Look for password reset email
2. **Check Spam**: Firebase emails sometimes go to spam initially
3. **Email Content**: Should contain password reset link
4. **Link Testing**: Click the link to verify it works

### Email Template Verification

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Navigate to Authentication → Templates
3. Check password reset template customization
4. Verify sender name and branding

## Console Monitoring

### Successful Creation Logs
```
================================================================================
✅ EMPLOYEE CREATED: Test Employee
📧 Email: test.employee@yourdomain.com
📨 Password reset email sent successfully!
📬 Email will be delivered by Firebase Auth
================================================================================
```

### Email Failure Logs
```
================================================================================
✅ EMPLOYEE CREATED: Test Employee
📧 Email: test.employee@yourdomain.com
❌ Email sending failed: [Error message]
🔗 Manual Reset Link: https://studio-5063047183-aa053.firebaseapp.com/__/auth/action?mode=resetPassword&oobCode=...
📝 Please share this link with the employee
================================================================================
```

## Firebase Console Verification

### Check User Creation
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Navigate to Authentication → Users
3. Verify new user appears with correct email and display name
4. Check that email is not verified initially

### Check Email Logs
1. In Firebase Console, go to Authentication → Templates
2. Check email delivery logs (if available)
3. Monitor for any delivery failures

## Employee Login Testing

### Test Employee Login Flow
1. **Employee receives email** with password reset link
2. **Employee clicks link** → redirected to Firebase password reset page
3. **Employee sets password** → creates secure password
4. **Employee goes to login page** → `http://localhost:9002/auth/login`
5. **Employee logs in** → uses email and new password
6. **Verify access** → employee can access the application

## Troubleshooting Common Issues

### Issue: "Firebase Admin not configured"
**Solution**: Check that all Firebase Admin environment variables are set correctly

### Issue: "FIREBASE_WEB_API_KEY not configured"
**Solution**: Add the Web API Key to your `.env` file

### Issue: Email not received
**Solutions**:
- Check spam folder
- Verify email address is correct
- Check Firebase Console for delivery status
- Use manual reset link from console

### Issue: "Service account object must contain..."
**Solution**: Verify Firebase private key is properly formatted with `\n` line breaks

### Issue: Password reset link doesn't work
**Solution**: 
- Check that `NEXT_PUBLIC_APP_URL` is set correctly
- Verify Firebase project configuration
- Ensure authorized domains are configured

## Performance Testing

### Load Testing
1. Try adding multiple employees quickly
2. Verify all accounts are created successfully
3. Check for any rate limiting issues

### Error Recovery Testing
1. Simulate network failures during employee creation
2. Verify graceful error handling
3. Test retry mechanisms

## Production Readiness Checklist

Before deploying to production:

- [ ] All environment variables configured on production server
- [ ] `NEXT_PUBLIC_APP_URL` points to production domain
- [ ] Firebase authorized domains include production domain
- [ ] Email templates customized with production branding
- [ ] Service account has minimal required permissions
- [ ] Error monitoring set up for employee creation failures
- [ ] Email delivery monitoring configured

## Test Data Cleanup

After testing:
1. Delete test employees from Firebase Auth Console
2. Remove test employee records from database
3. Clear any test data from local storage

This testing guide ensures your employee management system with Firebase Auth integration is working correctly and ready for production use.
