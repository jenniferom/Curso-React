import HomeContainer from "../../../modules/home/containers/homecontainer/HomeContainer";
import RelevantInfo from "../../../modules/home/containers/relevantinfo/RelevantInfo";
import './homeLayout.css'

const HomeLayout =() => {
    return (
        <div className="home-layout">
            <div className="homecontainer">
                <HomeContainer />
            </div>
            <div className="relevantinfo">
                <RelevantInfo />
            </div>
        </div>
    );
}

export default HomeLayout;