export class Menu {
  items: MenuItem[] = [];
  heading?: string;


  constructor(items: MenuItem[], heading?: string, itemOption?: MenuItemIsCurrentOptions) {
    this.items = items
    this.heading = heading
    if (itemOption) {
      items.forEach(item => item.option = itemOption);
    }
  }
}

export class MenuItem {
  href?: string;
  value: string | any;
  icon?: string;
  children?: MenuItem[];
  /**Cách xác định @function isCurrentTab */
  option?: MenuItemIsCurrentOptions;

  constructor(
    value: string | any,
    href?: string,
    icon?: string,
    children?: MenuItem[],
    option?: MenuItemIsCurrentOptions
  ) {
    this.href = href
    this.value = value
    this.icon = icon
    this.children = children
  }


  isCurrentTab(): boolean {
    switch (this.option) {
      case MenuItemIsCurrentOptions.full:
        return (location.pathname + location.search).toLowerCase().startsWith(this.href!.toLowerCase(), 1);
      case MenuItemIsCurrentOptions.include:
        return location.href.toLowerCase().includes(this.href!.toLowerCase());
      case MenuItemIsCurrentOptions.search:
        return this.href!.slice(this.href!.indexOf('?')) === location.search.toLowerCase();
      case MenuItemIsCurrentOptions.subSearch:
        let result = false;
        new URLSearchParams(location.search).forEach((param, keyParam) => {
          new URLSearchParams(this.href!.slice(this.href!.indexOf('?'))).forEach((childParam, keyChildParam) => {
            if ((param === childParam) && (keyParam === keyChildParam)) {
              result = true;
            }
          })
        })
        return result;
      default:
        return (location.pathname + location.search).toLowerCase().startsWith(this.href!.toLowerCase(), 1);
    }
  }

  rediect(): void {
    location.replace(this.href!)
  }
}

export enum MenuItemIsCurrentOptions { 'full', 'include', 'search', 'subSearch' };
