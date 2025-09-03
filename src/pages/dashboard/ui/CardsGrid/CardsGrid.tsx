import { FC, ReactNode } from "react";
import styles from './CardsGrid.module.css';

interface CardGridProps {
  children: ReactNode;
}

const CardsGrid: FC<CardGridProps> = ({children}) => {

  return (
    <div className={styles.grid}>
        {children}
    </div>
  )
}

export default CardsGrid;