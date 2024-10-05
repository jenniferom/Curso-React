import Elemento from "./Elemento";
import './siderbar.css';
import ListaElementos from "./ListaElementos";
import Button from "../../../../core/components/button/Button";
import PostAvatarUser from "../../components/Post/PostAvatarUser/PostAvatarUser";
import Logo from '../../../../core/images/x-logo.png';
import Avatar from '../../../../core/images/avatar-user.jpg';


const SiderBar = () => {
    return (
        <div >
            <div className="x-icono">
                <img src={Logo} alt="Logo de X" />
                <a href="/" />
            </div>
            <nav>
                {ListaElementos.map((item, index) =>(
                    <Elemento href={item.href} icon={item.icon} text={item.text} key={index}/>
                ))}
            </nav>
            <Button onClick={()=>alert('New POST')} text="POST"/>
            <div className="userprofile">
                <div className="userprofile-avatar">
                <PostAvatarUser urlImage={Avatar}/>
                </div>
                <div className="userprofile-username">
                    b
                </div>
                <div className="userprofile-logo">
                    c
                </div>
            </div>
        </div>
    );
}

export default SiderBar;