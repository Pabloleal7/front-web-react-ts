import  mainImage from "../../assets/images/main-image.svg";
import ButtonIcon from "../../components/ButonIcon";
import Navbar from '../../components/Navbar';
import './styles.css'

function Home() {
  
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div>
            <h1>Conheça o melhor catalogo de produtos</h1>
            <p>Ajudaremos voce a encontrar os melhores produtos disponiveis no mercado.</p>
            </div>
            <ButtonIcon/>
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
