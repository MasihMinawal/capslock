import styled from 'styled-components/macro'
import MiniCard from './MiniCard'
import { options } from '../material/data/fussballData.js'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function FussballResults() {
  return (

        <OptionsWrapper>
          {options.map(
            ({
              cardLink,
              cardImage,
              cardImageAltText,
              cardTitle,
              price,
              place,
              dates,
            }) => (
                <MiniCard
                  cardLink={cardLink}
                  cardImage={cardImage}
                  cardImageAltText={cardImageAltText}
                  cardTitle={cardTitle}
                  price={price}
                  place={place}
                  dates={dates}
                />
            )
          )}
        </OptionsWrapper>
  )
}

const OptionsWrapper = styled.section``
