class MenuListDto {
  category: string;
  name: string;
  description: string;
  isVeg: boolean;
  price: number;
  image: string;
}

export class MenuDto {
  menuList: MenuListDto[];
  restaurantId: string;
}
