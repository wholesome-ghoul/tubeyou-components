import { BaseProps, Grid } from "../utils";

type Props = BaseProps & {
  children: React.ReactNode;
  grid?: Grid | string;
  noGrid?: boolean;
};

export default Props;
