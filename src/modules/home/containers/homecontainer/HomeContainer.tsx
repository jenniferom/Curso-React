import NewPost from '../../components/NewPost/NewPost';
import PostAvatarUser from '../../components/Post/PostAvatarUser/PostAvatarUser';
import './homecontainer.css';
import Avatar from '../../../../core/images/avatar-user.jpg'
import Navbar from './Navbar';

const HomeContainer = () => {
    return(
        <div className="home-container">
            <div className='navbar-home'>
                <Navbar />
            </div>
            <div>
                <NewPost/>
            </div>
            <div>
                lista de post
                <PostAvatarUser urlImage={Avatar} />
            </div>
        </div>
    );
}
export default HomeContainer;