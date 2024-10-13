import { useState } from "react";
import Button from "../../../../core/components/button/Button";
import PostAvatarUser from "../Post/PostAvatarUser/PostAvatarUser";
import Avatar from '../../../../core/images/avatar-user.jpg'
import './new-post.css'

const NewPost = () => {
    const [title, setTitle] = useState("");
    return (
        <div className="seccion-new-post">
            <div className="seccion-avatar">
                <PostAvatarUser urlImage={Avatar} />
            </div>
            <div className="seccion-post">
                <div className="seccion-placeholder">
                    {title}
                    <input
                        type="text"
                        placeholder="¡¿Qué está pasando?!"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="seccion-botones">
                    <div className="seccion-adjuntos">
                        botones
                    </div>
                    <div className="seccion-button">
                        <Button onClick={()=>alert("Click")} text="Post" disabled />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPost;
