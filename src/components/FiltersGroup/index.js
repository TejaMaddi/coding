import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props

      const onClickItem = () => {
        changeCategory(category.categoryId)
      }
      const isActive = category.categoryId === activeCategoryId
      const className = isActive
        ? 'category-name active-category'
        : 'category-name'

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickItem}
        >
          <p className={className}>{category.name}</p>
        </li>
      )
    })
  }

  const renderRatingsList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props

      const onClickRating = () => {
        changeRating(rating.ratingId)
      }
      const ratingClassName =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRating}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const {searchInput} = props
  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="input-element"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
      <div className="categoryoptions-container">
        <h1 className="category-heading">Category</h1>
        <ul className="categories-list">{renderCategoriesList()}</ul>
        <h1 className="category-heading">Rating</h1>
        <ul className="ratings-list">{renderRatingsList()}</ul>
      </div>
      <button type="button" onClick={clearFilters} className="filters-reset">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
