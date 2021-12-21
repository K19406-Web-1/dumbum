import { Product } from "./product";

export enum categories { 'Cơm cháy', 'Da chiên', 'Đồ chay', 'Hải sản khô', 'Kẹo mứt', 'Thịt sấy khô' };
export enum types { 'Nổi bật', 'Khuyến mãi', 'Bán chạy', 'Tất cả' };

export async function loadProducts(category: categories, type: types = types["Tất cả"]): Promise<Product[]> {
  return await fetch(`assets/data/${categories[category]}.json`)
    .then(response => response.json().then(data => data as Product[]));
}
