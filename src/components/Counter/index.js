import { connect } from 'react-redux'
import Counter from './Counter'
import { increment, decrement } from '../../actions/Counter'
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
  const {counter} = state
  return {value: counter.value}
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement()),
    goToHomePage: () => dispatch(push('/'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)