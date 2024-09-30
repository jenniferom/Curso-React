import './elemento.css';

type ElementoProps = {
    href: any;
    text: string;
    icon: React.ElementType;
}
const Elemento: React.FC<ElementoProps> = ({ href, text, icon: Icon}) => {
    const getName = () => {
        return text;
    }
    return(
        <a href='{template}' className="elemento" >
            <div >
                <div className="elemento-seccion">
                    <div className="elemento-icono">
                        <Icon />
                    </div>
                    <div className="elemento-nombre">
                        {getName()}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Elemento;