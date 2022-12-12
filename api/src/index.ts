import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import { Product } from './app/models/Product';

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0')
  .then(() => {
    const app = express();
    const PORT = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());

    app.use(router);

    app.listen(PORT, () => {
      // Product.deleteOne({ _id: '638ec0ded9d55c982286e5e6'});
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Error on connecting to mongoDB'));
