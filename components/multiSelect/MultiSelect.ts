export declare module IMultiSelect {
  interface Item {
    id: number;
    name: string;
    image?: string;
    episode: string[];
  }

  interface Props {
    items?: Item[];
    loading?: boolean;
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
  }
}
