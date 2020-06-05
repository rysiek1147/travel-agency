import {connect} from 'react-redux';
import Trips from './Trips';
import {getFilteredTrips} from '../../../redux/selectors/trips';

const mapStateToProps = state => ({
  trips: getFilteredTrips(state),
});

export default connect(mapStateToProps)(Trips);
