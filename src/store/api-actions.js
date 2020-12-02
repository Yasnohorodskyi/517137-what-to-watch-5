import {setFilms, setPromoFilm, requiredAuthorization, redirectToRoute, loadFilmComments, updateFilm, loadUserData} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../consts";
import {toggleFavoriteStatus} from "../utils/common";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(setFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS_PROMO)
    .then(({data}) => dispatch(setPromoFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(loadUserData(data)))
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((user) => dispatch(loadUserData(user)))
    .then(() => dispatch(requiredAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const addReview = (filmId, {reviewRating, reviewText}, error) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + filmId, {rating: reviewRating, comment: reviewText})
    .then(() => dispatch(redirectToRoute(AppRoute.FILMS + filmId)))
    .catch((err) => {
      if (err) {
        dispatch(error);
      }
    })
);

export const changeFilmStatus = (filmId, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE + filmId}/${toggleFavoriteStatus(status)}`)
    .then(({data}) => dispatch(updateFilm(data)))
);


export const fetchFilmComments = (filmId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS + filmId}`)
    .then(({data}) => dispatch(loadFilmComments(data)))
);
