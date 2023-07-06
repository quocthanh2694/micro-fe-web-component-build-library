import { memo } from "react";
import "./styles.scss";
import Image from "../Image";
const LoadingImg = require("src/assets/images/loading.gif").default;

interface Props {}

const Loading = ({}: Props) => {
  return <Image src={LoadingImg} width="40px" height="40px" />;
};

export default memo(Loading);
