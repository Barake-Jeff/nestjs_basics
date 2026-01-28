import { MinLength, IsEnum } from "class-validator";

export class CreateProductDto {
  @MinLength(3)
  name: string;

  @IsEnum(['women', 'men'], { message: 'Invalid category'})
  category: 'women' | 'men';
}
