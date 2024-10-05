import PostMetadata from '../../components/Post/PostMetadata/PostMetadata';
import './homecontainer.css';

const HomeContainer = () => {
    return(
        <div className="home-container">
            <PostMetadata
                createdAt="2024-09-23 12:00:00"
                fullName="Jennita"
                username="@jenniferortiz_m"
                verified
            />
        </div>
    );
}
export default HomeContainer;