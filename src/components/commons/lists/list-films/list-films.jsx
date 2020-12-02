import FilmCard from "../../film-card/film-card";
import listFilmsProp from "./list-films.prop";
import withHover from "../../../../hocs/with-hover/with-hover";

const FilmCardWithHover = withHover(FilmCard);

const ListFilms = (props) => {
  const {films, activeNumberOfFilms} = props;
  return (
    <>
      <div className="catalog__movies-list">
        {
          films.slice(0, activeNumberOfFilms).map((film, i) => (
            <FilmCardWithHover
              key={`${i}-${film.name}`}
              film={film}
            />

          ))}
      </div>
    </>
  );
};

ListFilms.propTypes = listFilmsProp;

export default ListFilms;
