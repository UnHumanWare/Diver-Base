import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const useCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const querySnapshot = await getDocs(collection(db, 'cards'));
            const cardsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCards(cardsData);
        };

        fetchCards();
    }, []);

    return cards;
};
