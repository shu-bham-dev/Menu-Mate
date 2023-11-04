import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuDto } from './dto/menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenu: MenuDto) {
    return this.menuService.create(createMenu);
  }

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const restaurant = this.menuService.findById(id);
    return restaurant;
  }

  @Get('restaurant/:id')
  findByResturantId(@Param('id') id: string) {
    const restaurant = this.menuService.findByResturantId(id);
    return restaurant;
  }
}
