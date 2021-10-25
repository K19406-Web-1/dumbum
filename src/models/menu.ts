export class Menu {
  items: MenuItem[] = []

  constructor(items: MenuItem[]) {
    this.items = items;
  }

}

export class MenuItem {
  href?: string;
  name!: string;
  icon?: string;
  children?: MenuItem[];

  constructor(name: string, href?: string, icon?: string, children?: MenuItem[]) {
    this.href = href;
    this.name = name;
    this.icon = icon;
    this.children = children;

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
