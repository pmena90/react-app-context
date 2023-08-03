import Pagetitle from "../PageTitle";
import LatestGamesCard from "./LatestGamesCard";

const Home = () => {

    return (
        <div className="container">
            <div className="row">
                <Pagetitle title={'Dashboard'} />
            </div>
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <LatestGamesCard />
                </div>
                <div className="col-lg-6 mb-5">
                    <LatestGamesCard />
                </div>
                <div className="col-lg-6 mb-5">
                    <LatestGamesCard />
                </div>
            </div>
        </div>
    )
}

export default Home;