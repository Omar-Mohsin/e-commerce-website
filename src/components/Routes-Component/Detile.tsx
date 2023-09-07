import { useParams } from 'react-router-dom';
import { SelectAllCard } from '../../feature/card/cardSlice';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { addItem } from '../../feature/cart/cartsSlice';
import '../animation.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Detail()  : JSX.Element {


  interface Product {
    id :  number , 
    title : string , 
    description :  string , 
    image : string , 
    price : number,

  }
  interface ISetting {
    dots : boolean, 
    infinite : boolean,
    speed : number, 
    slidesToShow : number , 
    slidesToScroll : number , 
  }


  const settings : ISetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  

  

  const dispatch = useDispatch();
  const { id } : any = useParams();
  const cards = useSelector(SelectAllCard);
  const idNumber : number = parseInt(id, 10);

  const matchedCard = cards.find((card:Product) => card.id === idNumber);

  const onAddHandler = (matchedCard :Product)=>{
    dispatch(addItem(matchedCard));

  }

  return (
    <Container className="fade-left">
    <ImageContainer>
      <Slider {...settings}>
        <ImageContainer>
          <img src={matchedCard.image} alt={matchedCard.title} />
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
        <div >
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </ImageContainer>
    <Content>
      <Title>{matchedCard.title}</Title>
      <Description>{matchedCard.description}</Description>
      <Price>${matchedCard.price}</Price>
      <AddToCartButton onClick={() => onAddHandler(matchedCard)}>ADD TO CART</AddToCartButton>
    </Content>
  </Container>
  );
}

export default Detail;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const ImageContainer = styled.div`
  max-width: 70%;
  height : auto;
  text-align: center;
  align-items:center;
  justify-content :center;
  padding-left : 100px;
  margin-left : 20px;
  margin-top : 25px;
  img{
    width : 500px;
    height: 500px;
  }
 
`;

const Content = styled.div`
margin-right  : 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  color: #333;
`;

const Title = styled.h4`
  font-size: 24px;
  color: #176B87; /* Orange color for title */
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 24px;
  color: #ff5733; /* Teal color for price */
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #176B87; /* Orange color for button */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fff; /* Lighter orange on hover */
    color: #000;
  }
`;