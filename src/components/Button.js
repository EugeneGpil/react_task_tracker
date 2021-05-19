import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        className='btn'
        style={{ backgroundColor: color }}
        onClick={ onClick }
      >
        { text }
      </button>      
    </div>
  )
}

export default Button

Button.defaultProps = {
  color: 'steelblue',
  text: 'button',
  onClick: () => {
    console.log('clicked')
  }
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
