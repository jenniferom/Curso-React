import './elemento.css';

type ElementoProps = {
    href: any;
    text: string;
    icon: React.ElementType;
}
const Elemento: React.FC<ElementoProps> = ({ href, text, icon: Icon}) => {
    

    return(
        <a href={href} className="elemento" >
           <div className="elemento-icono">
                <Icon />
            </div>
            <div className="elemento-nombre">
                {text}
            </div> 
        </a>
    );
}

export default Elemento;