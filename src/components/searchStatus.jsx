import PropTypes from "prop-types"

const SearchStatus = ({ number }) => {
  if (
    (number === 2 ||
      number === 3 ||
      number === 4 ||
      number % 10 === 2 ||
      number % 10 === 3 ||
      number % 10 === 4) &&
    number !== 12 &&
    number !== 13 &&
    number !== 14
  ) {
    return `${number} человека тусанет с тобой сегодня`
  }
  if (number === 0) {
    return "Никто не тусанет с тобой"
  }
  return `${number} человек тусанет с тобой сегодня`
}
SearchStatus.propTypes = {
  number: PropTypes.number.isRequired
}

export default SearchStatus
