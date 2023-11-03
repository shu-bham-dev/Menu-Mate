import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenu: any) {
    // return this.menuService.create(createRestaurant);
  }

  @Get()
  findAll() {
    // return this.restaurantsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    // const restaurant = this.restaurantsService.findById(id);
    // return restaurant;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // const updatedRestaurant = this.restaurantsService.update(id, payload);
    // return updatedRestaurant;
  }
}