import { BaseCardProps } from "@shared/ui/base-card";
import { useEffect, useState } from "react";
import { getCardsFromServer } from "@entities/card/model/api";


export function useCards() {
    const [cards, setCards] = useState<BaseCardProps[] | null>(null);

    // Симуляция запроса к API за актуальным списком карточек при монтировании компонента
    useEffect(() => {
        const fetchData = async () => {
            const apiRequest = await getCardsFromServer();
            setCards(apiRequest);
        }

        fetchData();
    }, [])

    return cards;
}