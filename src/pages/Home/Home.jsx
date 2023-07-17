import BannerImage from "../../components/BannerImage/BannerImage";
import HomeCardList from "../../components/HomeCardList/HomeCardList";

function Home() {
    return (
        <div>
            <BannerImage page="/" pageName="home" />
            <HomeCardList />
        </div>
    );
}

export default Home;
