import { useParams } from "react-router-dom";
import { SelectAllProducts } from "../../../../feature/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "styled-components";
import "../../../animation.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDescription from "./ProductDescription";
function Detail(): JSX.Element {
  interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  }
  interface ISetting {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
  }

  const settings: ISetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { id }: any = useParams();
  const products = useSelector(SelectAllProducts);
  const idNumber: number = parseInt(id, 10);

  const matchedProduct = products.find(
    (product: Product) => product.id === idNumber
  );

  return (
    <Container className="fade-left">
      <ImageContainer>
        <Slider {...settings}>
          <ImageContainer>
            <img src={matchedProduct.image} alt={matchedProduct.title} />
          </ImageContainer>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </ImageContainer>
      <Content>
        <ProductDescription matchedProduct={matchedProduct} />
      </Content>
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  margin-top: 50px;
  display: flex;

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  max-width: 100%;
  height: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-top: 15px;
  padding-left: 50px;
  img {
    max-width: 100%;
    height: auto;
    max-height: 500px;
  }

  @media (min-width: 768px) {
    max-width: 70%;
    padding-left: 100px;
  }
`;

const Content = styled.div`
  margin-right: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  margin-top: 60px;
  color: #333;
`;
