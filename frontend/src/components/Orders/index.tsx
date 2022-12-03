import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: '1',
    status: 'DONE',
    table: '123',
    products: [
      {
        _id: '1',
        quantity: 3,
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '13453435435.png',
          price: 40
        }
      }
    ]
  },
  {
    _id: '2',
    status: 'WAITING',
    table: '123',
    products: [
      {
        _id: '2',
        quantity: 2,
        product: {
          name: 'Coca Cola',
          imagePath: '1345343543e.png',
          price: 7
        }
      }
    ]
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de Espera"
        orders={orders}
      />

      <OrdersBoard
        icon="👨🏼‍🍳"
        title="Em Preparação"
        orders={[]}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
