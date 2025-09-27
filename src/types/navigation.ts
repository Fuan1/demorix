export type NavigationItem = {
  id: string;
  title: string;
  path: string;
  description?: string;
};

export type NavigationCategory = {
  id: string;
  title: string;
  items: NavigationItem[];
};
