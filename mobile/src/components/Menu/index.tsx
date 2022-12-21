import { useState } from 'react';
import { FlatList } from 'react-native';

import { ProductProps } from '../../types/Product';
import { ProductModal } from '../ProductModal';
import { ProductImage, Product, ProductDetails, Separator, AddToCardButton } from './styles';
import { Text } from '../Text';

import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

interface MenuProps {
  onAddToCart: (product: ProductProps) => void;
  products: ProductProps[];
}

export function Menu({ onAddToCart, products } :MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);

  function handleOpenModal(product: ProductProps) {
    setSelectedProduct(product);
    setIsModalVisible(true);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        style={{ marginTop: 32, paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        data={products}
        keyExtractor={product => product._id}
        renderItem={({item: product}) => (
          <Product onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.1.6:3001/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>{product.description}</Text>
              <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCardButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCardButton>
          </Product>
        )}
      />
    </>
  );
}
