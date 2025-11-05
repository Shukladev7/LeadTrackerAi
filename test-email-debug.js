// Email Debug Test Script
require('dotenv').config();

async function testEmailConfiguration() {
    console.log('🔍 Testing Firebase Email Configuration...\n');
    
    // Check environment variables
    console.log('📋 Environment Variables Check:');
    const requiredVars = [
        'FIREBASE_PROJECT_ID',
        'FIREBASE_PRIVATE_KEY',
        'FIREBASE_CLIENT_EMAIL',
        'FIREBASE_WEB_API_KEY'
    ];
    
    const missingVars = [];
    requiredVars.forEach(varName => {
        const value = process.env[varName];
        if (value) {
            console.log(`✅ ${varName}: ${varName === 'FIREBASE_PRIVATE_KEY' ? '[REDACTED]' : value.substring(0, 20)}...`);
        } else {
            console.log(`❌ ${varName}: NOT SET`);
            missingVars.push(varName);
        }
    });
    
    if (missingVars.length > 0) {
        console.log(`\n🚨 Missing required environment variables: ${missingVars.join(', ')}`);
        console.log('Please add these to your .env file');
        return;
    }
    
    console.log('\n🧪 Testing Firebase Auth REST API...');
    
    try {
        const testEmail = 'test@example.com'; // Use a test email
        const webApiKey = process.env.FIREBASE_WEB_API_KEY;
        
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${webApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                requestType: 'PASSWORD_RESET',
                email: testEmail,
                continueUrl: 'http://localhost:9002/auth/login',
            }),
        });
        
        const responseData = await response.json();
        
        if (response.ok) {
            console.log('✅ Firebase Auth REST API is working!');
            console.log('📧 Email would be sent successfully');
        } else {
            console.log('❌ Firebase Auth REST API Error:');
            console.log('Status:', response.status);
            console.log('Error:', responseData);
            
            if (responseData.error?.message?.includes('EMAIL_NOT_FOUND')) {
                console.log('\n💡 This is expected for test email - the API is working correctly');
                console.log('The error means the email doesn\'t exist in Firebase Auth, which is normal');
            }
        }
    } catch (error) {
        console.log('❌ Network Error:', error.message);
    }
    
    console.log('\n📝 Next Steps:');
    console.log('1. Check if the employee email exists in Firebase Auth Console');
    console.log('2. Check spam/junk folder for the email');
    console.log('3. Try with a different email address');
    console.log('4. Check Firebase Console for email delivery logs');
}

testEmailConfiguration().catch(console.error);
