import SiderBar from "../../../modules/home/containers/siderbar/SiderBar";
import './defaultLayout.css'
import HomeLayout from "./HomeLayout";

const DefaultLayout = () => {
    return(
        <div className="default-layout">
            <div className="siderbar">
                <SiderBar />
            </div>
            <div className="homelayout">
                <HomeLayout />
            </div>
      </div>  
    );
}

export default DefaultLayout;