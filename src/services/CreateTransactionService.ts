import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';


import AppError from '../errors/AppError';

import { getCustomRepository, getRepository } from 'typeorm';
import Category from '../models/Category';

interface Request {
  title: string;

  type: 'income' | 'outcome';

  value: number;

  category: string;
}
class CreateTransactionService {
  public async execute({title, type, value, category}:Request): Promise<Transaction> {
    // TODO
    const transactionRepository = getCustomRepository(TransactionsRepository);


    const {total} = await transactionRepository.getBalance();
    if(type === "outcome" && total < value){
      throw new AppError("You do not have enought balance");
    }
    if(!['income', 'outcome'].includes(type)){
      throw new AppError("Transaction type is invalid");
    }

    const categoryRepository = getRepository(Category);


    let transactionCategory = await categoryRepository.findOne({
      where:{
        title: category
      }
    });
    if(!transactionCategory) {
      transactionCategory = categoryRepository.create({
        title: category
      });

      await categoryRepository.save(transactionCategory);
    }

    const transaction = transactionRepository.create({
        title,
        type,
        value,
        category: transactionCategory,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
