import { connect } from 'react-redux';
import App from '../components/App';
import { getSunData, getLocalInfo } from '../actions/index'

const mapStateToProps = state => {
  return {
    sunData: state.sunReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSunData: () => {
      dispatch(getSunData());
    },
    getLocalInfo: () => {
      dispatch(getLocalInfo());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
