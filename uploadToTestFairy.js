const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

// Sauce Labs API endpoint for TestFairy upload
const API_URL = 'https://upload.testfairy.com/api/upload';//'https://api.testfairy.com/v1/upload'; 

// Replace with your Sauce Labs API key
const API_KEY = '98f029d755660818a5882c9b8d8987597cf583ab';//'2bd31ac6-4202-463e-b376-a7dbbea02c2d'; // Keep this safe!

// The path to the APK file you want to upload
const apkFilePath = path.resolve(__dirname, 'android/app/build/outputs/apk/release/app-release.apk');// 'path/to/your/app.apk'); 
// android/app/build/outputs/apk/release/app-release.apk
// Function to upload the APK to Sauce Labs TestFairy
async function uploadAPK() {
  // Make sure the APK file exists
  if (!fs.existsSync(apkFilePath)) {
    console.error('APK file does not exist at the specified path.');
    process.exit(1);
  }

  const form = new FormData();
  form.append('file', fs.createReadStream(apkFilePath)); // Attach the APK file
  form.append('api_key', API_KEY); // Add your Sauce Labs API key
  form.append('app_type', 'android'); // Specify app type as Android
  
  try {
    const response = await axios.post(API_URL, form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    if (response.status === 200) {
      console.log('APK uploaded successfully!');
      console.log('TestFairy URL:', console.log(response.data));
    } else {
      console.error('Failed to upload APK:', response.status, response.data);
      process.exit(1);
    }
  } catch (error) {
    console.error('Error uploading APK:', error);
    process.exit(1);
  }
}

// Run the upload function
uploadAPK();
