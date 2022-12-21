import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Product.deleteOne({ _id: id });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
