import PropTypes from 'prop-types'
import Card from './Card'

const Cards = ({data}) => {
  return (
    <div className='grid grid-cols-3 gap-2 place-content-center mt-7'>
        {data.map( card => (
            <Card key={card.propertyid} data={card}/>
        ))}
    </div>
  )
}

Cards.propTypes = {
    data: PropTypes.array.isRequired,
}
export default Cards