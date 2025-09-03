import { FC } from 'react';
import { useCards } from '@entities/card/model/useCards';
import { BaseCard } from '@shared/ui/base-card';
import { CardsGrid } from '@pages/dashboard';

const Dashboard: FC = () => {

  const cards = useCards();

  if (cards === null) {
    return <div>Загрузка...</div>
  }

  return (
    <>
    {cards.length <= 0 ? <div>
      Карточек нет
    </div> : (
        <CardsGrid>
            {cards.map(card => (
                <BaseCard 
                  title={card.title} 
                  description={card.description}
                  inputField={card.inputField}
                  buttonGroup={card.buttonGroup} 
                  key={card.title}
                />
          ))}
        </CardsGrid>
    )}
      
    </>
  )
}

export default Dashboard;

