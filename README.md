
# 🌿 Plantify V3

**Plantify** is a React Native mobile app for plant lovers. Its core feature is plant identification via camera. Users can also explore a “Plant of the Day”, save favorites, and manage a watering journal.

---

## 📱 Features

- **🌱 Plant Identification**: Snap photos to identify plants or browse plant details.
- **🌼 Plant of the Day**: Daily featured plant displayed on the Home screen.
- **❤️ Likes & Favorites**: Like any plant with a single tap.
- **👤 User Profile**: Upload an avatar and view liked plants.
- **🪴 Watering Journal**: Log and track plant care schedules and notes.
- **☁️ Weather Widget**: Displays current local weather on the Home screen.
- **🧠 Quiz**: Fun plant quiz with unique questions each session.

---

## 🛠️ Tech Stack

- **Frontend**: React Native + Expo
- **State Management & Navigation**: React Context API & React Navigation (Native Stack)
- **Backend**: Node.js / Express.js (TypeScript)
- **Database**: PostgreSQL
- **Tools & Libraries**:
  - Axios – for API requests
  - `expo-image-picker` – for avatar uploads
  - `expo-vector-icons` – icons
  - `SafeAreaView` – UI safety across devices

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v16+)
- Expo CLI:  
  ```bash
  npm install -g expo-cli
  ```
- Backend running at:  
  `https://plantify-backend-n824.onrender.com/`

### 🧰 Installation & Run

```bash
git clone https://github.com/Calscode/Plantify-V3.git
cd Plantify-V3
npm install
npx expo start
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── PlantOnloadScreen.tsx
│   ├── PlantDetailScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── WeatherBox.tsx
│   ├── QuizButton.tsx
│   └── ...
├── screens/
│   ├── LoginScreen.tsx
│   ├── Home.tsx
│   ├── Discovery.tsx
│   ├── HintsScreen.tsx
│   ├── Journal.tsx
│   └── ...
├── UserContext.tsx
└── App.tsx
```

---

## 🔄 API Endpoints

The backend provides endpoints for managing plants, likes, journals, and user data.

**Plants**
- `GET /api/plants` — Retrieve all plants

**Liked Plants**
- `GET /api/liked_plants/:user_id` — Get user’s liked plants
- `POST /api/liked_plants` — Like a plant
- `DELETE /api/liked_plants/:liked_plant_id` — Remove a liked plant

**Journals**
- `POST /api/journals` — Add a journal entry
- `DELETE /api/journals/:journal_entry_id` — Delete a journal entry

**Users**
- `POST /api/users` — Sign up
- `GET /api/users/guest` — Guest login

---

## 🎯 User Flow

1. **Login or Guest Access**  
   → `UserContext` stores `userId`, `username`.

2. **Home Screen**  
   - Displays “Plant of the Day” via `<PlantOnloadScreen />`  
   - Shows weather widget and quiz button

3. **Plant Details**  
   - Tap a plant card to view details  
   - ❤️ Tap to like/unlike a plant

4. **Profile Screen**  
   - Displays liked plants  
   - Allows avatar upload

5. **Journal Screen**  
   - Add/edit watering logs and care notes

---

## 🤝 Contribute

We welcome contributions! Here's how:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request


---

## ✨ Screenshots

<!-- Add screenshots here if available -->
<!-- Update tomorrow -->
