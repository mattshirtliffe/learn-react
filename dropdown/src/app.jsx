var React = require('react')
var ReactDOM = require('react-dom')
var Dropdown = require('./dropdown')


var options = {
  title: 'Choose a dessert',
  items: ['a','b','c','d','Cream Pie']
};

// render react class
var element = React.createElement(Dropdown, options);

// where to place the element in dom
// put into page
ReactDOM.render(element, document.querySelector('.container'));
