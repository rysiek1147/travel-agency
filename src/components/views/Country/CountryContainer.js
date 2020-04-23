import {connect} from 'react-redux';
import Country from './Country';
import { getCountryByCode } from '../../../redux/countriesRedux';
import { getTripsForCountry } from '../../../redux/tripsRedux';

const mapStateToProps = (state, props) => {
  const country = getCountryByCode(state, props.match.params.id);
  const trips = getTripsForCountry(state, props.match.params.id);

  return {
    ...country,
    trips,
  };
};

export default connect(mapStateToProps)(Country);