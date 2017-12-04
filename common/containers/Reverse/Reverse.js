/**
 * Created by yidi.zhao on 2017/12/4.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Reverse } from '../../components/index';
import * as reverse from '../../actions/reverse'
const mapStateToProps = (state) => {
    return {
        reverseState: state.reverse
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(reverse, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Reverse)