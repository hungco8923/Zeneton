import Hero from "../resources/video/Hero-video.mp4";
import JungKook1 from "../resources/img/JungKook-1.webp";
import JungKook2 from "../resources/img/JungKook-2.jpg";
import JungKook3 from "../resources/img/JungKook-3.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero-section">
        <video src={Hero} autoPlay muted loop />
      </div>
      <div className="home__test">
        <div className="home__test__left">
          <img src={JungKook3} alt="" />
        </div>
        <div className="home__test__right">
          <img src={JungKook2} alt="" />
          <img src={JungKook1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
