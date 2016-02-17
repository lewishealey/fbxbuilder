var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
        loaded: false
    }
  },
  componentDidMount: function() {
    this.setState({ loaded: true });
  },
  render: function() {
    console.log(this.props.card);
        return (
            <center>

                {this.renderCards()}

            </center>
        );
    },
    renderCards: function() {

      // Get style of input
      if(this.props.card.input.style) {
        var style = this.props.card.input.style;
      } else {
        var style = null;
      }

      // Get margin of input
      if(this.props.card.margin) {
        var margin = {
          paddingTop: this.props.card.margin.paddingTop,
          paddingBottom: this.props.card.margin.paddingBottom,
          paddinLeft: "15px",
          paddingRight: "15px"
        };
      } else {
        var margin = null;
      }

      var title = {
        fontFamily: "Arial, sans-serif",
        color: this.props.card.input.style.color,
        fontSize: "18px",
        lineHeight: "1"
      }

      // Text Top
      if(this.props.card.type == "text") {

        return <table border="0" cellPadding="0" cellSpacing="0" width="100%">
            <tr>
                <td bgcolor="#F6F6F6" style={margin} className="smaller-padding">
                    <div align="center">
                        <table border="0" cellPadding="0" cellSpacing="0" width="600" className="wrapper">
                            <tr>
                                <td>
                                    <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                        <tr>
                                            <td width="600" className="text" align="center" style={title}>
                                                Pebble Time Smartwatch and new products this week
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>

      }

    }
});
