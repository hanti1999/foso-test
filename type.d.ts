interface IProduct {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

interface IProductRes {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}
