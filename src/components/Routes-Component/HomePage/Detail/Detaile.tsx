import { useParams } from "react-router-dom";
import { SelectAllProducts } from "../../../../feature/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "styled-components";
import "../../../animation.scss";
import Slider from "react-slick";
import { Product, Setting } from "../../../Types/Types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDescription from "./ProductDescription";
function Detail(): JSX.Element {
  const settings: Setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { id }: any = useParams();
  const products = useSelector(SelectAllProducts);
  const productId: number = parseInt(id, 10);

  const matchedProduct = products.find(
    (product: Product) => product.id === productId
  );

  return (
    <Container className="fade-left">
      <ImageContainer>
        <Slider {...settings}>
          <ImageContainer>
            <img src={matchedProduct.image} alt={matchedProduct.title} />
          </ImageContainer>
          <img src={"https://placehold.co/600x400"}></img>
          <div>
            <img src={"https://placehold.co/600x400"}></img>
          </div>
          <div>
            <img src={"https://placehold.co/600x400"}></img>
          </div>
          <div>
            <img src={"https://placehold.co/600x400"}></img>
          </div>
          <div>
            <img src={"https://placehold.co/600x400"}></img>
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
    margin-left: 40px;
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
