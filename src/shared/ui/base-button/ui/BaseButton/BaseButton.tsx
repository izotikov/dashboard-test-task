import { FC } from "react";
import styles from './BaseButton.module.css';

interface BaseButtonProps {
    text: string;
}

const BaseButton: FC<BaseButtonProps> = ({text}) => {
  return (
    <button className={styles.button}>
        {text}
    </button>
  )
}

export default BaseButton;