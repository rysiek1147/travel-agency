export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    const {from} = filters.duration;
    const {to} = filters.duration;
    output = output.filter(trip => trip.days >= from && trip.days<= to);
  }

  // TODO - filter by tags
  if(filters.tags.length){
    const {tags} = filters;
    
    output = output.filter(trip => {
      return trip.tags.some(tag => tags.some(el => el === tag));
    });
  }
  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id === tripId);

  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(({county: {code}}) => code === countryCode);

  return filtered.length ? filtered : [{error: true}];
};