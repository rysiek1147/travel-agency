import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTag, removeTag, changeDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addTag: tag => dispatch(addTag(tag)),
  removeTag: index => dispatch(removeTag(index)),
  changeDuration: (type, value) => dispatch(changeDuration({type: type, value: value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
