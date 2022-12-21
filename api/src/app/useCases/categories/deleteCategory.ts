import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Category.deleteOne({ _id: id });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
