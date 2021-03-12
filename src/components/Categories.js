import styled from 'styled-components/macro'
import CategoryCard from './CategoryCard'
import { sports } from '../material/data/categoryData.js'

export default function Categories() {
  return (
    <CategoriesWrapper>
      {sports.map(
        ({ id, categoryTitle, categoryIcon, categoryIconAltText }) => (
          <CategoryCard
            id={id}
            categoryTitle={categoryTitle}
            categoryIcon={categoryIcon}
            categoryIconAltText={categoryIconAltText}
          />
        )
      )}
    </CategoriesWrapper>
  )
}

const CategoriesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 10px;
`