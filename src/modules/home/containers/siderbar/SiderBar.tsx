import Elemento from "./Elemento";
import './siderbar.css';
import ListaElementos from "./ListaElementos";
import Button from "../../../../core/components/button/Button";
import PostAvatarUser from "../../components/Post/PostAvatarUser/PostAvatarUser";
import Logo from '../../../../core/images/x-logo.png';
import Avatar from '../../../../core/images/avatar-user.jpg';
import DataUser from "../../components/Post/PostMetadata/DataUser";
import {VscEllipsis} from 'react-icons/vsc';



const SiderBar = () => {
    return (
        <div >
            <div >
                <div className="x-icono">
                    <img src={Logo} alt="Logo de X" />
                    <a href="/" />
                </div>
                <nav className="lista-elemetos">
                    {ListaElementos.map((item, index) =>(
                        <Elemento href={item.href} icon={item.icon} text={item.text} key={index}/>
                    ))}
                </nav>
                <Button onClick={()=>alert('New POST')} text="POST"/>
                
            </div>
            <div className="userprofile">
                <div className="userprofile-avatar">
                <PostAvatarUser urlImage={Avatar}/>
                </div>
                <div className="userprofile-username">
                    <DataUser fullName="Jennita" username="@jenniferortiz_m"/>
                </div>
                <div className="userprofile-logo">
                    <VscEllipsis />
                </div>
            </div>
        </div>
    );
}

export default SiderBar;