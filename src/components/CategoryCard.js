import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function CategoryCard({
  id,
  categoryIcon,
  categoryTitle,
  categoryIconAltText,
}) {
  return (
    <Card key={id}>
      <Wrapper>
        <Icon src={categoryIcon} alt={categoryIconAltText} />
        <Category>{categoryTitle}</Category>
      </Wrapper>
    </Card>
  )
}

CategoryCard.protoTypes = {
  id: PropTypes.string,
  categoryIcon: PropTypes.string,
  categoryIconAltText: PropTypes.string,
  categoryTitle: PropTypes.string,
}

const Card = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 150px;
  width: 150px;
  background-color: #3296a8;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  border: 0;
`

const Icon = styled.img`
  width: 50px;
  height: auto;
`

const Wrapper = styled.div`
  display: block;
  text-align: center;
`

const Category = styled.h2`
  font-size: 14px;
`
