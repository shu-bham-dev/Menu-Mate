import { Injectable } from '@nestjs/common';
import { MenuDto } from './dto/menu.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel('Menu')
    private readonly MenuModel,
  ) {}
  async create(createMenu: MenuDto) {
    const menu = new this.MenuModel(createMenu);
    return menu.save();
  }

  async findAll() {
    const menu = this.MenuModel.find();
    return menu;
  }

  async findById(id: string) {
    const menu = this.MenuModel.findById(id);
    return menu;
  }

  async findByResturantId(id: string) {
    const menuByResturantId = this.MenuModel.find({ restaurantId: id });
    return menuByResturantId;
  }
}
