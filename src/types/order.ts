interface IMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  isAvaliable: string;
}

interface ICard {
  menuItemId?: string;
  quantity: number;
  notes?: string;
  menuItem?: IMenu;
  name?: string;
}

interface IOrder {
  id: string;
  customer_name: string;
  table_number: number;
  cart: ICard[];
  status: "PENDING" | "PROCESSING" | "COMPLETE";
  total: number;
}

export type { IOrder, ICard, IMenu };
