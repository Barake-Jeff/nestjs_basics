import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products = [
    { id: 0, name: 'Cerav', category: 'women' },
    { id: 1, name: 'Nivea Men', category: 'men' },
  ];

  getProducts(category?: 'women' | 'men') {
    if (category) {
      return this.products.filter((product) => product.category === category);
    }

    return this.products;
  }

  getProduct(id: number) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new Error('product not found');
    }

    return product;
  }

  createProduct(createProductDto: CreateProductDto) {
    const newProduct = {
      ...createProductDto,
      id: Date.now(),
    };
    this.products.push(newProduct);

    return newProduct;
  }

  updateProduct(id: number, updateProductDto: UpdateProductDto) {
    this.products = this.products.map((product) => {
      if (product.id === id) {
        return { ...product, ...updateProductDto };
      }

      return product;
    });

    return this.getProduct(id);
  }

  removeProduct(id: number) {
    const toBeremoved = this.getProduct(id);

    this.products = this.products.filter((products) => products.id !== id);

    return toBeremoved;
  }
}
