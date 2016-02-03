var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
      return {
      	active: false
      }
    },
    handleClick: function() {
		
			this.setState({
		    	active: !this.state.active
		    });

    	this.props.handleTab(this.props.no, this.props.name, this.props.icon);

    },
    render: function() {
        return ( <button className={"options__item " + (this.state.active ? 'active' : '')} onClick={this.handleClick}>
                    <span className="options__item-tooltip">{this.props.name}</span>
                    <i className="material-icons">{this.props.icon}</i>
                 </button>
        );

    }

});