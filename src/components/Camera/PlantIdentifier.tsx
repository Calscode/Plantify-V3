import React, { useEffect } from 'react';
import axios from 'axios';

type PlantIdentifierProps = {
  apiResponse: any;
  onPlantMatched: (plant: any) => void;
};

const PlantIdentifier = ({ apiResponse, onPlantMatched }: PlantIdentifierProps) => {
  const genus = apiResponse?.species?.genus?.scientificNameWithoutAuthor;

  useEffect(() => {
    if (genus) {
      axios.get(`https://plantify-backend-n824.onrender.com/api/genus/${encodeURIComponent(genus)}`)
        .then((response) => {
          console.log("✅ Found matching plant:", response.data);
          onPlantMatched(response.data);
        })
        .catch((error) => {
          console.error('❌ Error matching genus:', error);
        });
    }
  }, [genus]);

  return null;
};

export default PlantIdentifier;