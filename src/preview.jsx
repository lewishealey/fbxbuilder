var React = require('react');

// Block types
var Top = require('./top');
var Footer = require('./footer');
var PreviewCard = require('./previewcard');

module.exports = React.createClass({
  getInitialState: function() {
    return {
        loaded: false
    }
  },
  componentDidMount: function() {
    this.setState({ loaded: true });

  },
  renderCards: function() {

    if(this.state.loaded && this.props.config.data && this.props.config.data.cards) {
      return(
        <div>
          <Top header={this.props.config.data.header} />
          {this.props.config.data.cards.map(function(card, i) {
            return <PreviewCard key={i} card={card} />
          }.bind(this))}
          <Footer />
        </div>
      );

    } else {
      return <h4>Add a card to get started</h4>
    }

  },
  render: function() {
        return (
            <center>

                {this.renderCards()}

            </center>
        );
    }
});
