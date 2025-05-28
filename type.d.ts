interface IProduct {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  category: string;
  brand: string;
  meta: {
    createdAt: string;
    updatedAt: string;
  };
}

interface IProductRes {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}
