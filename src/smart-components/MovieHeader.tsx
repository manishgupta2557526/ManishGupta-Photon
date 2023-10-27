import { FC } from "react";
import { useSelector } from "react-redux";

import Header from "../components/atoms/Header";
import { RootState } from "../redux/store";

const MovieHeader: FC<{}> = () => {
  const pageTitle = useSelector((state: RootState) => state.pageTitle);
  return (
    <>
      <Header pageTitle={pageTitle} />
    </>
  );
};

export default MovieHeader;
