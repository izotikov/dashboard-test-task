import { FC } from 'react';
import styles from './BaseCard.module.css';
import { BaseButton } from '@shared/ui/base-button';
import { BaseInput } from '@shared/ui/base-input';

export interface BaseCardProps {
    title: string;
    description?: string;
    inputField?: boolean;
    buttonGroup?: {name: string, keyId: number}[];
}

const BaseCard: FC<BaseCardProps> = ({ 
    title, 
    description, 
    inputField, 
    buttonGroup,
}) => {
  return (
    <div className={styles.card} >
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        {inputField && <BaseInput type="text" className={styles.cardInput}/>}
        {buttonGroup && (
            <div className={styles.buttonGroup}>
                {buttonGroup.map(button => (
                  <BaseButton text={button.name} key={button.keyId}/>
                ))}
            </div>
          
        )
      }
    </div>
  );
};

export default BaseCard;