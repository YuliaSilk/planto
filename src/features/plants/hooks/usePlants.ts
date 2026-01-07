'use client'
import { useEffect, useState } from "react";
import { getPlants } from "@/features/plants/api/api";
import { Plant } from "@/features/plants/types/plant";

export const usePlants = () => {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {   
        const fetchPlants = async () => {
            try {
                const plants = await getPlants();
                setPlants(plants);
            } catch (err) {
                console.error("Error fetching plants:", err);
                setError("Failed to load plants.");
            } finally {
                setLoading(false);      

   
        }
    };

    fetchPlants();
}, []);

return { plants, loading, error };
};

export default usePlants;