import { Product } from "./product";

export enum categories { 'Cơm cháy', 'Da chiên', 'Đồ chay', 'Hải sản khô', 'Kẹo mứt', 'Thịt sấy khô' };
export enum types { 'Nổi bật', 'Khuyến mãi', 'Bán chạy', 'Tất cả' };

export async function loadProducts(category: categories, type: types = types["Tất cả"]): Promise<Product[]> {
  return await fetch(`assets/data/${categories[category]}.json`)
    .then(response => response.json().then(data => data as Product[]));
}

/**
 * @param productName Name of the product
 * @return Product if found, otherwise null
 */
export async function loadProduct(productName: string): Promise<Product | null> {
  let product: Product | null = null;
  for (const category in categories) {
    if (!isNaN(Number(category))) {
      product = await loadProducts(category as unknown as categories)
        .then(products => {
          let result: Product | null = null;
          products
            .forEach(item => {
              if (item.name === productName) {
                result = item;
              }
            });
          return result;
        });
      if (product) {
        return product;
      }
    }
  }
  return product;
}
