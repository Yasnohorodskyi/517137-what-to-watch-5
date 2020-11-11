const tabsOverviewProps = {
  film: PropTypes.shape({
    rating: PropTypes.shape({
      value: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired
    }).isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    poll: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired
  }).isRequired
};

export default tabsOverviewProps;
