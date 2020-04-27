import React from 'react';
import pricing from '../../../data/pricing.json';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import {Row, Col} from 'react-flexbox-grid';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const orderValidate = (options, elements) => {
  let fieldDisabled = false;
  elements.forEach(element => {
    if(!options[element].length)
      fieldDisabled = true;
  });
  return fieldDisabled;
};

const sendOrder = (id, name, country, options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripId: id,
    tripName: name,
    country: country.alpha3Code,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({id, name, country, tripCost, options, setOrderOption}) => (
  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
      <Button onClick={() => sendOrder(id, name, country, options, tripCost)} disabled={orderValidate(options, ['name', 'contact'])}>Order now!</Button>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.object,
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;