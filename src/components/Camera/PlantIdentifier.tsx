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
    axios
      .get(`https://plantify-backend-n824.onrender.com/api/genus/${encodeURIComponent(genus)}`)
      .then((response) => {
        const matched = response.data?.plant;
        if (matched) {
          console.log("✅ Found matching plant:", response.data);
          onPlantMatched(response.data);
        } else {
          console.warn("❗ No match found for genus:", genus);
          onPlantMatched(null);
        }
      })
      .catch((error) => {
        console.error('❌ Error matching genus:', error);
        onPlantMatched(null);
      });
  } else {
    console.warn("❗ No genus found in API response.");
    onPlantMatched(null);
  }
}, [genus]);

  return null;
};

export default PlantIdentifier;