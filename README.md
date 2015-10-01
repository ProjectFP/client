# Project FP

Client proof of concept

1. Pull down repo
2. npm install
3. Install ionic cli globally if not already done (npm install -g ionic)
4. Install cordova cli globall if not already done (npm install -g cordova)
5. bower install
6. Install plugins
'''
* cordova plugin add com.ionic.keyboard
* cordova plugin add org.apache.cordova.camera
* cordova plugin add org.apache.cordova.console
* cordova plugin add org.apache.cordova.device
* cordova plugin add org.apache.cordova.inappbrowser
* ionic plugin add https://github.com/phonegap-build/PushPlugin.git
'''
7. Download Phonegap Developer App onto your phone (http://app.phonegap.com/)
8. Update the ip address in starterServices.js to your local ip address and then start node server (nodemon server.js)
9. Add the ios platform to the project (ionic platform add ios)
10. Start ionic ios server (ionic run ios -l -c -s)
11. Connect to ios server from Phonegap Developer App
12. In the app, press on 'Take a Picture'
13. Use direction buttons to move the image around. The image within the blue box will be the cropped picture
14. Press on 'Crop' to crop the image within the blue box
15. Image will be adjusted by camanjs before uploaded to the server and saved as crop.png in the repo's root

16. Run gulp (gulp) to build. This will generate content into the www/ server