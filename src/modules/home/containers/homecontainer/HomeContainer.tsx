import NewPost from '../../components/NewPost/NewPost';
import './homecontainer.css';
import Navbar from './Navbar';

const HomeContainer = () => {
    
    return(
        <div className="home-container">
            <div className='navbar-home'>
                <Navbar />
            </div>
            <div className='new-post-home'>
                <NewPost/>
            </div>
            <div>
                lista de post
                
            </div>
        </div>
    );
}
export default HomeContainer;