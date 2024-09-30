import './button.css';

type ButtonProps = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, disabled}) => {
    const getName =() =>{
        return text.toUpperCase();
    }

    return (
        <button 
            onClick={onClick} 
            disabled={disabled} 
            className='bt'
            >
            {getName()}
        </button>
    );
}

export default Button;