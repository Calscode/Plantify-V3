import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

type UserContextType = {
  username: string;
  setUsername: (name: string) => void;
  userId: number | null;
  loginAsGuest: () => void;
  likedPlantIds: number[];
  likedPlants: any[];
  toggleLikePlant: (plantId: number) => void;
  fetchLikedPlants: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState<number | null>(null);
  const [likedPlantIds, setLikedPlantIds] = useState<number[]>([]);
  const [likedPlants, setLikedPlants] = useState<any[]>([]);

const fetchLikedPlants = async () => {
  if (!userId) return;
  try {
    const res = await axios.get(`https://plantify-backend-n824.onrender.com/api/liked_plants/${userId}`);
    const plants = res.data.liked_plants;
    setLikedPlants(plants);
    const ids = plants.map((item: any) => item.plant_id);
    setLikedPlantIds(ids);
  } catch (err) {
    console.error("Error fetching liked plants:", err);
  }
};

const toggleLikePlant = async (plantId: number) => {
  if (!userId) return;
  const isLiked = likedPlantIds.includes(plantId);

  try {
    if (isLiked) {
      
      const res = await axios.get(`https://plantify-backend-n824.onrender.com/api/liked_plants/${userId}`);
      const match = res.data.find((p: any) => p.plant_id === plantId);
      await axios.delete(`https://plantify-backend-n824.onrender.com/api/liked_plants/${match.liked_plant_id}`);
      setLikedPlantIds(prev => prev.filter(id => id !== plantId));
    } else {
      await axios.post(`https://plantify-backend-n824.onrender.com/api/liked_plants`, {
        user_id: userId,
        plant_id: plantId,
      });
      setLikedPlantIds(prev => [...prev, plantId]);
    }
  } catch (err) {
    console.error("Error toggling like:", err);
  }
};


  const loginAsGuest = () => {
    setUsername('Guest');
    setUserId(1); 
  };

  return (
    <UserContext.Provider  value={{
    username,
    setUsername,
    userId,
    loginAsGuest,
    likedPlantIds,
    toggleLikePlant,
    fetchLikedPlants,
    likedPlants
  }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
