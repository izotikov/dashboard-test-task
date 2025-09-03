import { FC, HTMLInputTypeAttribute } from "react";
import styles from './BaseInput.module.css';

interface BaseInputProps {
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    className?: string;
}

const BaseInput: FC<BaseInputProps> = ({type = 'text', placeholder = 'Введите ваш текст...', className}) => {
  return (
    <input className={[styles.input, className].join(' ')} type={type} placeholder={placeholder}/>
  )
}

export default BaseInput