export class CreateRestaurantDto {
  name: string;
  contact: string;
  email?: string;
  address: string;
  city: string;
  state: string;
  logoURL?: string;
}

export class UpdateRestaurantDto {
  name?: string;
  contact?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  logoURL?: string;
}
