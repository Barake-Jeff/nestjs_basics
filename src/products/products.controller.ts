import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productservice: ProductsService) {}
  // GET/products?type=women --> []\
  @Get()
  getproducts(@Query('category') category: 'women' | 'men') {
    return this.productservice.getProducts(category);
  }
  // GET /products/id --> { ... }
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productservice.getProduct(+id);
  }
  // POST /products --> { ... }
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productservice.createProduct(createProductDto);
  }

  // PUT /products/id --> { ... }
  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productservice.updateProduct(+id, updateProductDto);
  }
  // DELETE /products/id --> { ... }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productservice.removeProduct(+id);
  }
}
