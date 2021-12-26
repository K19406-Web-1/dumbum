import { Product, ProductType } from "./product";

export enum categories { 'Cơm cháy', 'Da chiên', 'Đồ chay', 'Hải sản khô', 'Kẹo mứt', 'Thịt sấy khô' };
export enum types { 'Nổi bật', 'Khuyến mãi', 'Bán chạy', 'Tất cả' };

export async function loadProducts(category: categories, type: types = types['Tất cả']): Promise<Product[]> {
  return await fetch(`assets/data/${categories[category]}.json`)
    .then(response => response.json().then(
      async data => {
        if (type === types['Tất cả']) {
          return data;
        }

        let products: Product[] = [];
        let namesByType = await getProductNameByCategoryAndType(category, type);
        (data as Product[]).forEach(item => {
          if (namesByType!.includes(item.name)) {
            products.push(item);
          }
        })
        return products;
      }
    ));
}

async function getProductNameByCategoryAndType(category: categories, type: types) {
  return await fetch(`assets/data/Phân loại.json`)
    .then(response => response.json()
      .then(
        data => {
          let productNames = (data as ProductType[])[category];
          switch (types[type]) {
            case 'Nổi bật':
              return productNames.highlights;
            case 'Khuyến mãi':
              return productNames.promotions;
            case 'Bán chạy':
              return productNames.bestSeller;
            default:
              return undefined;
          }
        }
      ));
}

/**
 * @param productName Name of the product
 * @return Product if found, otherwise null
 */
export async function loadProductByName(productName: string) {
  productName = productName.toLowerCase();
  let product: Product | undefined;
  let productCategory: categories;
  for (const category in categories) {
    if (!isNaN(Number(category))) {
      await loadProducts(category as unknown as categories)
        .then(products => {
          products
            .forEach(item => {
              if (item.name.toLowerCase() === productName) {
                product = item;
                productCategory = categories[category] as unknown as categories;
                return;
              }
            });
        });
      if (product) {
        return {
          product: product,
          category: productCategory!
        };
      }
    }
  }

  return null;
}
