/**
 * Created by yidi.zhao on 2017/12/4.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Reverse } from '../../components/index';
import * as countState from '../../actions/countState'
const mapStateToProps = (state) => {
    return {
        countState: state.countState
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(countState, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Reverse)