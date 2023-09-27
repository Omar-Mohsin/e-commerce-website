export interface Setting {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}
