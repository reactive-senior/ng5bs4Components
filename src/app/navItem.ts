export class NavItem {
  displayText: string;
  routerLink: string;
  displayIcon: string;
  children: NavItem[];
  constructor(text:string, router:string, icon:string, children:NavItem[]) {
    this.displayText = text;
    this.routerLink = router;
    this.displayIcon = icon;
    this.children = children;
  }
}