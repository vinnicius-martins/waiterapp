import { FlatList, TouchableOpacity } from 'react-native';
import { products } from '../../mocks/products';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import { ProductImage, Product, ProductDetails, Separator, AddToCardButton } from './styles';

export function Menu() {
  return (
    <FlatList
      style={{ marginTop: 32, paddingHorizontal: 24 }}
      ItemSeparatorComponent={Separator}
      data={products}
      keyExtractor={product => product._id}
      renderItem={({item: product}) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://192.168.1.5:3001/uploads/${product.imagePath}`,
            }}
          />
          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text size={14} color="#666" style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCardButton>
            <PlusCircle />
          </AddToCardButton>
        </Product>
      )}
    />
  );
}
