export class Menu {
  items: MenuItem[] = [];
  heading?: string;


  constructor(items: MenuItem[], heading?: string) {
    this.items = items
    this.heading = heading
  }

}

export class MenuItem {
  href?: string;
  value: string | any;
  icon?: string;
  children?: MenuItem[];

  constructor(
    value: string | any,
    href?: string,
    icon?: string,
    children?: MenuItem[]
  ) {
    this.href = href
    this.value = value
    this.icon = icon
    this.children = children
  }


  isCurrentTab(justStartWith?: boolean): boolean {
    if (justStartWith) {
      return location.pathname.toLowerCase().startsWith(this.href!.toLowerCase(), 1);
    }
    return location.pathname.substr(1).toLowerCase() === this.href!.toLowerCase();
  }

  rediect(): void {
    location.replace(this.href!)
  }
}
