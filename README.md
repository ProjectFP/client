# Project FP

Client proof of concept

1. Pull down repo
2. npm install
3. Install ionic cli globally if not already done (npm install -g ionic)
4. bower install
5. Install plugins
	cordova plugin add com.ionic.keyboard
	cordova plugin add org.apache.cordova.camera
	cordova plugin add org.apache.cordova.console
	cordova plugin add org.apache.cordova.device
6. Download Phonegap Developer App onto your phone (http://app.phonegap.com/)
7. Start node server (nodemon server.js)
8. Start ionic ios server (ionic run ios -l -c -s)
9. Connect to ios server from Phonegap Developer App
10. In the app, press on 'Take a Picture'
11. Use direction buttons to move the image around. The image within the blue box will be the cropped picture
12. Press on 'Crop' to crop the image within the blue box
13. Image will be adjusted by camanjs before uploaded to the server and saved as crop.png in the repo's root