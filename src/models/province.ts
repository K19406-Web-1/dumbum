const API_PATH = 'https://provinces.open-api.vn/api';

export async function getProvinces(): Promise<Location[]> {
  return await fetch(API_PATH + '/p')
    .then(response => response.json())
    .then(data => [...data]
      .map(province => ({
        name: province.name,
        code: province.code
      })));
}

export async function getDistricts(provinceCode: number): Promise<Location[]> {
  return await fetch(API_PATH + `/p/${provinceCode}?depth=2`)
    .then(response => response.json())
    .then(data => {
      console.log(API_PATH + `/p/${provinceCode}?depth=2`)
      console.log(data)
      return [...data.districts]
      .map(district => ({
        name: district.name,
        code: district.code
      }))
    });
}

export interface Location {
  name: string,
  code: number
}
