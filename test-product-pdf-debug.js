// Product PDF Addition Debug Test Script
require('dotenv').config();

async function testProductPdfAddition() {
    console.log('🔍 Testing Product PDF Addition Functionality...\n');
    
    // Test data that should work
    const testProductData = {
        name: 'Test Product with PDF',
        description: 'This is a test product with a PDF catalog for debugging purposes',
        price: 150.00,
        gstRate: 18,
        skus: ['TEST-PDF-001', 'TEST-PDF-002'],
        catalogueUrl: '', // Optional field
        cataloguePdf: {
            url: 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovT3V0bGluZXMgMiAwIFIvUGFnZXMgMyAwIFI+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvT3V0bGluZXMvQ291bnQgMD4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovQ291bnQgMQovS2lkcyBbIDQgMCBSIF0KPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA1IDAgUgovUHJvY1NldCBbL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSV0KPj4KL01lZGlhQm94IFsgMCAwIDU5NS4yNzYgODQxLjg5XQovQ29udGVudHMgNiAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9MZW5ndGggNjgKPj4Kc3RyZWFtCkJULy9GMSAxMiBUZgozNi44NTA0IDc5My4xNjU0IFRkCihIZWxsbywgd29ybGQhKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA3CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMDY0IDAwMDAwIG4gCjAwMDAwMDAxMTMgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzE5IDAwMDAwIG4gCjAwMDAwMDA0MDkgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA3Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0NzQKJSVFT0YK',
            fileName: 'test-catalog.pdf',
            filePath: 'catalogs/test-catalog.pdf',
            uploadedAt: new Date().toISOString(),
            base64Data: 'JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovT3V0bGluZXMgMiAwIFIvUGFnZXMgMyAwIFI+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvT3V0bGluZXMvQ291bnQgMD4+CmVuZG9iagozIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovQ291bnQgMQovS2lkcyBbIDQgMCBSIF0KPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA1IDAgUgovUHJvY1NldCBbL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSV0KPj4KL01lZGlhQm94IFsgMCAwIDU5NS4yNzYgODQxLjg5XQovQ29udGVudHMgNiAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9MZW5ndGggNjgKPj4Kc3RyZWFtCkJULy9GMSAxMiBUZgozNi44NTA0IDc5My4xNjU0IFRkCihIZWxsbywgd29ybGQhKSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA3CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMDY0IDAwMDAwIG4gCjAwMDAwMDAxMTMgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzE5IDAwMDAwIG4gCjAwMDAwMDA0MDkgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA3Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0NzQKJSVFT0YK'
        }
    };
    
    console.log('📋 Test Product Data:');
    console.log(JSON.stringify(testProductData, null, 2));
    
    // Simulate FormData creation (like the frontend does)
    const formData = new FormData();
    Object.entries(testProductData).forEach(([key, value]) => {
        if (key === 'skus' || key === 'cataloguePdf') {
            formData.append(key, JSON.stringify(value));
        } else if (value !== undefined && value !== '') {
            formData.append(key, String(value));
        }
    });
    
    console.log('\n🧪 Testing Form Data Processing...');
    
    // Test the validation schema
    const { z } = require('zod');
    
    const ProductSchema = z.object({
        name: z.string().min(3, { message: 'Product name must be at least 3 characters.' }),
        description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
        price: z.coerce.number().min(0, { message: 'Price must be a positive number.' }),
        gstRate: z.coerce.number().min(0).max(100),
        skus: z.array(z.string()).optional(),
        catalogueUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
        cataloguePdf: z.object({
            url: z.string(),
            fileName: z.string(),
            filePath: z.string(),
            uploadedAt: z.string(),
            base64Data: z.string(),
        }).optional(),
    });
    
    // Extract data like the action does
    const skusJSON = formData.get('skus');
    const skus = skusJSON ? JSON.parse(skusJSON) : [];
    const cataloguePdfJSON = formData.get('cataloguePdf');
    const cataloguePdf = cataloguePdfJSON ? JSON.parse(cataloguePdfJSON) : undefined;
    
    const validationData = {
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        gstRate: formData.get('gstRate'),
        skus: skus,
        catalogueUrl: formData.get('catalogueUrl') || '',
        cataloguePdf: cataloguePdf,
    };
    
    console.log('📝 Data for validation:');
    console.log(JSON.stringify(validationData, null, 2));
    
    const validatedFields = ProductSchema.safeParse(validationData);
    
    if (!validatedFields.success) {
        console.log('❌ Validation Failed:');
        console.log('Errors:', validatedFields.error.flatten().fieldErrors);
        return;
    }
    
    console.log('✅ Validation Passed!');
    console.log('Validated data:', JSON.stringify(validatedFields.data, null, 2));
    
    // Test Firebase connection
    console.log('\n🔥 Testing Firebase Connection...');
    
    try {
        const { initializeApp, getApps } = require('firebase/app');
        const { getFirestore } = require('firebase/firestore');
        
        const firebaseConfig = {
            apiKey: "AIzaSyCjA4ek_FRNB61JM7xrYAT3s1eoL94qhnE",
            authDomain: "studio-5063047183-aa053.firebaseapp.com",
            projectId: "studio-5063047183-aa053",
            storageBucket: "studio-5063047183-aa053.firebasestorage.app",
            messagingSenderId: "311176415853",
            appId: "1:311176415853:web:52798531c528415cf94d64"
        };
        
        let app;
        if (getApps().length === 0) {
            app = initializeApp(firebaseConfig);
        } else {
            app = getApps()[0];
        }
        
        const db = getFirestore(app);
        console.log('✅ Firebase connection successful!');
        
        // Test Firestore write permissions
        console.log('\n📝 Testing Firestore Write Permissions...');
        const { collection, addDoc } = require('firebase/firestore');
        
        try {
            // Try to add a test document to products collection
            const testDoc = {
                ...validatedFields.data,
                isActive: true,
                stockQuantity: 100,
                minStockLevel: 10,
                createdAt: new Date().toISOString()
            };
            
            console.log('Attempting to write to Firestore...');
            const docRef = await addDoc(collection(db, 'products'), testDoc);
            console.log('✅ Successfully wrote to Firestore! Document ID:', docRef.id);
            
            // Clean up - delete the test document
            const { deleteDoc, doc } = require('firebase/firestore');
            await deleteDoc(doc(db, 'products', docRef.id));
            console.log('🧹 Test document cleaned up');
            
        } catch (firestoreError) {
            console.log('❌ Firestore Write Error:');
            console.log('Error code:', firestoreError.code);
            console.log('Error message:', firestoreError.message);
            
            if (firestoreError.code === 'permission-denied') {
                console.log('\n💡 This suggests Firestore security rules are blocking the write.');
                console.log('Check your Firestore security rules in Firebase Console.');
            }
        }
        
    } catch (firebaseError) {
        console.log('❌ Firebase Connection Error:');
        console.log(firebaseError.message);
    }
    
    console.log('\n📋 Troubleshooting Checklist:');
    console.log('1. ✅ Form validation - Check if this passes');
    console.log('2. 🔥 Firebase connection - Check if this works');
    console.log('3. 📝 Firestore permissions - Check security rules');
    console.log('4. 🔐 Authentication - Make sure user is logged in');
    console.log('5. 🌐 Network - Check internet connection');
}

testProductPdfAddition().catch(console.error);
