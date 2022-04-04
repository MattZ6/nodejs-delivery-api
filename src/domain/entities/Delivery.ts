export type Delivery = {
  id: string;
  item_name: string;
  client_id: string;
  deliveryman_id?: string | null;
  created_at: Date;
  end_at?: Date | null;
};
