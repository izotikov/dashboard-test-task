import { cardsArray } from "@shared/api/mocks/mock";
import { BaseCardProps } from "@shared/ui/base-card";

// Имитация запроса к серверу
export const getCardsFromServer = () => {
    return new Promise<BaseCardProps[]>((resolve) => {
        setTimeout(() => {
            resolve(cardsArray);
        }, 1000);
    })
    
}