import Carousel from "react-bootstrap/Carousel";
import "../Stylesheets/Carousel.css";

const Car = ({ Page_Image, Page_Title, Page_Subtitle }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="image-container">
          <div className="overlay"></div>
          <img
            className="d-block"
            src={Page_Image}
            alt=""
            style={{
              width: "100%",
              height: "800px",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </div>
        <Carousel.Caption>
          <h3>{Page_Title}</h3>
          <p>{Page_Subtitle}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Car;