import { useMemo } from 'react';
import './button.css';

type ButtonProps = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: "primary" | "secundary";
}

const Button: React.FC<ButtonProps> = ({ onClick, text, disabled, variant}) => {
    const getName =() =>{
        return text.toUpperCase();
    }
    const variantClass = useMemo(()=>{
        switch (variant) {
            case "primary":
                return "bt-primary";
            case "secundary":
                return "bt-secundary";
            default:
                return "bt-primary";
        }
    }, [variant])

    return (
        <button 
            onClick={onClick} 
            disabled={disabled} 
            className={`bt ${variantClass}`}
            >
            {getName()}
        </button>
    );
}

export default Button;