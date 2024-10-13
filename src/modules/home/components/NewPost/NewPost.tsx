/*import { NewPostDTO } from "../../types/post";*/
import './new-post.css'

import Button from "../../../../core/components/button/Button";
import PostAvatarUser from "../Post/PostAvatarUser/PostAvatarUser";
import Avatar from '../../../../core/images/avatar-user.jpg'

const NewPost = () => {
    /*const {
        register,
        formState: { errors },
      } = useFormContext<NewPostDTO>();*/
    return (
        <div className="seccion-new-post">
            <div className="seccion-avatar">
                <PostAvatarUser urlImage={Avatar} />
            </div>
            <div className="seccion-post">
                <div className="new-post-header">
                    <select className="visibility-select" /*{...register("visibility")}*/>
                        <option value="everyone">Everyone</option>
                        <option value="followers">Followers</option>
                        <option value="mentioned">Mentioned Only</option>
                    </select>
                    {errors["visibility"] ? (
                        <span
                            style={{
                                color: "red",
                            }}
                            >
                            {errors["visibility"].message}
                        </span>
                    ) : null}
                </div>
                <textarea
                    className="seccion-placeholder"
                    placeholder="¡¿Qué está pasando?!"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="seccion-botones">
                    <div className="seccion-adjuntos">
                        <i className="icon-img">🖼️</i>
                        <i className="icon-gif">GIF</i>
                        <i className="icon-poll">📊</i>
                        <i className="icon-emoji">😊</i>
                        <i className="icon-schedule">📅</i>
                        <i className="icon-location">📍</i>
                    </div>
                    <div className="seccion-button">
                        <Button onClick={()=>alert("Click")} text="Post" disabled variant="secundary"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPost;
