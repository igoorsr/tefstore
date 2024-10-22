import productsServices from "../../services/products";
import { useEffect, useState } from "react";
import Loading from "../loading/page";
import ProductCard from "../../components/productCard/productCard";
import styles from "./page.module.css";
import ProductPopup from "../../components/productPopup/productPopup";
import { useCartContext } from "../../contexts/useCartContext";

export default function Products() {
  const {
    getAvailableProducts,
    productsList,
    productsLoading,
    refetchProducts,
  } = productsServices();
  const [productSelected, setProductSelected] = useState(null);
  const { addToCart } = useCartContext();

  useEffect(() => {
    if (refetchProducts) {
      getAvailableProducts();
    }
  }, [refetchProducts]);

  const handleProductSelected = (product) => {
    setProductSelected(product);
  };

  const handleClosePopup = () => {
    setProductSelected(null);
  };

  const handleAddToCart = (itemToAdd) => {
    addToCart(itemToAdd);
    handleClosePopup();
  };

  if (productsLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        {productsList.map((product) => (
          <div
            key={product._id}
            className={styles.cardContainer}
            onClick={() => {
              handleProductSelected(product);
            }}
          >
            <ProductCard productData={product} />
          </div>
        ))}
      </div>

      {productSelected && (
        <ProductPopup
          productData={productSelected}
          onClose={handleClosePopup}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}
