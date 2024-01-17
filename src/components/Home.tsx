import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  stock: number;
  category:string;
}

const Home = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (url: string) => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      setProducts((prev) => [...prev, ...data.products]);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts("https://dummyjson.com/products");
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products
          .filter((e) => e.category === "smartphones")
          .map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
              </Link>
            </div>
          ))}
      </div>
      {loading && <Loading/>}
    </div>
  );
};

export default Home;
