# Welcome 👋

## Setting up the front end 

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

Press `j` to open up the Native dev tools (debugger), `w` for the web app version. 
We will be using Expo Go for development for now. 

## Troubleshooting 

### Failed to download remote update 

If you are unable to run the app using the Expo Go QR Code and encounter an error like:

`Java.io.IOException: Failed to download remote update`, you can try again using a wired connection, or run  
```bash
npx expo start --tunnel 
```
Alternative solutions (if `--tunnel` does not work):
1. Disable Windows Defender firewall if you are on Windows:

- Ensure both devices are on the same network 
- In the terminal when you run `npx expo start` command, below the QR code you will see a message that displays `Metro waiting on exp://192.168.XX.XXX:PORT#`. Which is the IP:Port# being used to by expo. Keep this port # in mind.
- Type and go to `Windows Security(looks like a blue shield)` in your Search Bar
- Click on `Network Protection` > `Advanced Settings` > `Inbound Rules` > `New Rule` > `Port` > `TCP` > `Specific Port`
- Find the port # that is used by Expo
- Allow the connection and leave all checked 
- Add Name/Description 

2. Reinstall Expo app, restart computer and connection 

- If there are any issues on Arch Linux, please lmk.

### SDK version 
- This app should be using Expo SDK 52, the newest version compatible with Expo Go. Install the latest version of Expo if it does not work:

### npx expo start does not work; EPERM issue 
- This means that expo is not able to update and edit your `.gitignore` when you run `npx expo start` inside client. To fix this, allow expo to overwrite changes inside your `.gitignore`, and make sure you have the proper permissions for the file.
- On Windows: right click on `.gitignore` inside File Explorer, `Properties` -> `Security` -> Make sure user has full control permissions, grant yourself full permissions if not.
- Then run `npx expo start --clear` to clear cache.

```bash
npm install expo@latest
```
in the root directory.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.


