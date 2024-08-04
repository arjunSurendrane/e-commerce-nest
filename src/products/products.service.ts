import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from './interface/product.interface';
import { CustomException } from 'src/custom.exception';

type QueryType = {
  limit: number;
  skip: number;
  search: string;
};

function getAllQueryValidation(query) {
  const { limit = 10, skip = 0, search } = query;
  const isSkipNaN = Number.isNaN(Number(skip));
  const isLimitNaN = Number.isNaN(Number(limit));
  if (isLimitNaN || isSkipNaN) {
    throw new CustomException('Invalid filter value');
  }
  return { limit: limit || 10, skip: skip || 0, search: search };
}

function preparingFilterOptions({ search }) {
  let filterOptions = {};
  if (search) {
    const serarchRegex = new RegExp(search, 'i');
    filterOptions = {
      productName: { $regex: serarchRegex },
    };
  }
  return filterOptions;
}

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<IProduct>) {}

  findAll(query: QueryType) {
    console.log('query result in findAll service: ', query);
    const { limit, skip, search } = getAllQueryValidation(query);
    const filterOptions = preparingFilterOptions({ search });
    return this.productModel.find(filterOptions).skip(skip).limit(limit);
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }
}
