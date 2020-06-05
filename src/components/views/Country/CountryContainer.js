import {connect} from 'react-redux';
import Country from './Country';
import {getCountryByCode} from '../../../redux/selectors/countries';
import {getTripsForCountry} from '../../../redux/selectors/trips';

const mapStateToProps = (state, props) => {
  const country = getCountryByCode(state, props.match.params.id);
  const trips = getTripsForCountry(state, props.match.params.id);

  return {
    ...country,
    trips,
  };
};

export default connect(mapStateToProps)(Country);
