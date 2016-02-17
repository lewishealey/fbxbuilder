var React = require('react');
var Card = require('./card');

module.exports = React.createClass({
    getInitialState: function() {
      return {
          loaded: false
      }
    },
    componentDidMount: function() {
      this.setState({ loaded: true });
    },
    onSelectCard: function(e) {
      e.preventDefault();
      this.props.onSelectCard(this.props.mastercard);
    },
    render: function() {
          if(this.props.mastercard) {
            //console.log(this.props.mastercard);
          };
        return (
                  <div className={"row card-select " + (this.props.id == 0 ? "row--first" : null)}>

                    <div className="column">
                      {this.props.mastercard ? this.props.mastercard.name : null}
                    </div>

                    <div className="column column--align-right">
                      <a href="#" onClick={this.onSelectCard}>
                        Select
                      </a>
                    </div>

                  </div>



          )



    }

});
