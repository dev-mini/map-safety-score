export interface iCategoryReqData {
  statusCode: number;
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
}
