# Rick and Morty App

Rick and Morty App is a mobile application that allows users to explore information about characters from the popular animated TV show "Rick and Morty". Users can view details such as character names, images, status, species, type, gender, and last known location.

This project was developed as a learning experience for mobile app development using React Native and Firebase. It was created as a requirement for the "Mobile App Development" course at Universidad Catolica Argentina.

## Features

- Character Listing: Users can browse and view a list of Rick and Morty characters.
- Character Details: Users can tap on a character to view more detailed information.
- Saved Characters: Users can save their favorite characters for quick access.
- Real-time Updates: The app utilizes Firebase's real-time database to provide live updates on character data.
- Character Filtering: Users can apply filters to the character list to narrow down their search based on status, species, type, and gender.

## Technologies Used

- React Native: A JavaScript framework for building mobile applications.
- Firebase: A cloud-based platform for developing mobile and web applications.

## Installation and Usage

1. Clone the repository: `git clone https://github.com/your-username/rick-and-morty-app.git`
2. Install dependencies: Navigate to the project directory and run `npm install` to install the required dependencies.
3. Configure Firebase:
   - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
   - In the Firebase project, create a new Firebase Realtime Database.
   - Copy the Firebase configuration object (containing API keys and other credentials).
   - Create a new file `firebaseConfig.js` in the project's root directory.
   - Paste the Firebase configuration object into `firebaseConfig.js` and export it as a module.
4. Run the app:
   - For iOS:
     - Run `npm start` or `expo start` to start the application.
     - Open the Expo Go app on your iOS device.
     - Scan the QR code displayed in the terminal or Expo Dev Tools.
     - The app will be launched on your iOS device.
   - For Android:
     - Run `npm start` or `expo start` to start the application.
     - Open the Expo Go app on your Android device.
     - Scan the QR code displayed in the terminal or Expo Dev Tools.
     - The app will be launched on your Android device.
5. Launch on simulator/emulator:
   - For iOS: Run `npm run ios` or `expo start --ios` to launch the app on the iOS simulator.
   - For Android: Run `npm run android` or `expo start --android` to launch the app on the Android emulator.

## Contributing

Contributions are welcome! If you would like to contribute to the Rick and Morty App, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes.

## Authors

- Mateo Macagni Diaz
  - Email: mateomacagnidiaz@gmail.com
  - GitHub: [mateomacagni](https://github.com/mttdiazz)

- Pedro Ortiz de Guinea
  - Email: peportizdg@gmail.com
  - GitHub: [peportizdg](https://github.com/peportizdg)

## Notes

This project is a rough version and was our first experience with mobile app development. It may contain limitations, bugs, or incomplete features. Please consider this when exploring the code or using the application.

