import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Counter } from '../../components/index'
import * as CounterActions from '../../actions/counter'
const mapStateToProps = (state) => {
    return {
        counterState: state.counter
    }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
