import {connect} from 'react-redux';
import Regions from './Regions';
import {getAllRegions} from '../../../redux/selectors/regions';
import {getAllSubregions} from '../../../redux/selectors/subregions';
import {getAllCountries} from '../../../redux/selectors/countries';

const mapStateToProps = state => ({
  regions: getAllRegions(state),
  subregions: getAllSubregions(state),
  countries: getAllCountries(state),
});

export default connect(mapStateToProps)(Regions);
