export interface ResourceLink {
  name: string;
  url: string;
}

export interface ResourceItem {
  name: string;
  url: string;
  description: string;
}

export interface ResourceCategory {
  title: string;
  items: ResourceItem[];
}

export interface ReactNativeStarter {
  title: string;
  subtitle: string;
  code: string;
  description: string;
  instruction: string;
  links: ResourceLink[];
}

export interface ResourcesData {
  reactNative: ReactNativeStarter;
  categories: ResourceCategory[];
}
