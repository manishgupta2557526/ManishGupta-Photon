import { FC } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../redux/actions";

import List from "../components/molecules/List";

type MovieData = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};

type MovieListProps = {
  movieListData: MovieData[];
  onItemSelected: Function;
  selectedMovieId: string;
  movieMap: Record<string, any>;
};

const MovieList: FC<MovieListProps> = ({
  movieListData,
  onItemSelected,
  selectedMovieId,
  movieMap
}) => {
  const dispatch = useDispatch();
  const onMovieSelected = (movieId: string) => {
    onItemSelected(movieId);
    dispatch(setPageTitle(movieMap[movieId].title));
  };

  return (
    <>
      <List
        dataList={movieListData}
        onItemSelected={onMovieSelected}
        selectedItemId={selectedMovieId}
      />
    </>
  );
};

export default MovieList;
