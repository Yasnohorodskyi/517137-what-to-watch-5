import Header from "../../commons/sections/header/header";
import BreadCrumbs from "../../commons/breadcrumbs/breadcrumbs";
import addReviewScreenProp from "./add-review-screen.prop";
import ReviewForm from "../../commons/review-form/review-form.connect";
import withReviewForm from "../../../hocs/with-review-form/with-review-form";

const ReviewFormWithReviewForm = withReviewForm(ReviewForm);

const AddReviewScreen = (props) => {

  const {
    film
  } = props;

  const {
    id,
    background_image: backgroundImage,
    background_color: backgroundColor,
    name,
    poster_image: poster,
  } = film;

  return (
    <section
      className="movie-card movie-card--full"
      style={{
        backgroundColor,
      }}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header >
          <BreadCrumbs id={id} name={name}/>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWithReviewForm id={id}/>
      </div>
    </section>
  );
};

AddReviewScreen.propTypes = addReviewScreenProp;

export default AddReviewScreen;
