import  mainImage from "../../assets/images/main-image.svg";
import Navbar from "../../components/Navbar";


function Home() {
  
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Conheça o mehlor catalogo de produtos</h1>
          </div>
          <div className="home-image-container">
           <img src={mainImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
