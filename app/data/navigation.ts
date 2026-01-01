export interface NavItem {
  title: string;
  icon?: string;
  to?: string;
  children?: NavItem[];
}
export const navigationItem: NavItem[] = [
  {
    title: "Products",
    icon: "mdi-shopping-outline",
    to: "/",
    children: [{ title: "New product" }, { title: "List product", to: "" }],
  },
  { title: "blog", icon: "mdi-post-outline" },
];
