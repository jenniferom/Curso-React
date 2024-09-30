import Elemento from "./Elemento";
import './siderbar.css';
import { VscHome, VscSearch, VscBell, VscMail, VscChip, VscBookmark, VscOrganization, VscAccount, VscEllipsis } from 'react-icons/vsc';


const SiderBar = () => {
    return (
        <>
            <div className="siderbar">
                <div className="siderbar-seccion">
                    <div className="x-icono">
                        X
                    </div>
                    <nav className="lista-elementos">
                        <Elemento href="/#" icon={VscHome} text="Inicio" />
                        <Elemento href="/#" icon={VscSearch} text="Explorar" />
                        <Elemento href="/#" icon={VscBell} text="Notificaciones" />
                        <Elemento href="/#" icon={VscMail} text="Mensajes" />
                        <Elemento href="/#" icon={VscChip} text="Grok" />
                        <Elemento href="/#" icon={VscBookmark} text="Guardados" />
                        <Elemento href="/#" icon={VscOrganization} text="Comunidades" />
                        <Elemento href="/#" icon={VscAccount} text="Perfil" />
                        <Elemento href="/#" icon={VscEllipsis} text="Más opciones" />
                    </nav>
                    <div className="userprofile">
                        <div className="userprofile-seccion">
                            <button>
                                <div className="userprofile-avatar">
                                    a
                                </div>
                                <div className="userprofile-username">
                                    b
                                </div>
                                <div className="userprofile-logo">
                                    c
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default SiderBar;