import path from 'node:path';
import http from 'node:http';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import { Server } from 'socket.io';
import { Category } from './app/models/Category';
import { Product } from './app/models/Product';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0')
  .then(async () => {
    const PORT = 3001;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());

    app.use(router);

    // await Category.deleteOne({ _id: '63a339e53e569c9b205bc3c6' });
    // await Category.create({ name: 'Pizzas', icon: '🍕' });
    // await Product.deleteOne({ _id: '63a34471c7f8969714609ed0' });

    // const productCategory = await Category.findOne({ name: 'Bebidas' });
    // if (productCategory) {
    //   await Product.create({
    //     category: productCategory,
    //     name: 'Suco de Laranja',
    //     description: 'Para quem não quer sair da dieta',
    //     imagePath: 'suco-de-laranja.png',
    //     price: 6,
    //   });
    // }

    // const items = await Product.find();
    // console.log(items);

    server.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Error on connecting to mongoDB'));
