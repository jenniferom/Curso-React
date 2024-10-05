import './navbar-button.css';

type Props = {
    text: string;
    
}

const NavbarButton:React.FC<Props> = ({text}) => {
    
    return (
        <button className="navbar-button">{text}</button>
    );
}

export default NavbarButton