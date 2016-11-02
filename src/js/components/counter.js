var React = require('react');

var Counter = React.createClass({

	render: function (){
		// var str = 'I love tacos';
		//retun jsx
		return <p>{this.props.phrase}</p>;
	}
});

module.exports = Counter;

