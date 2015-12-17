var React = require('react');

module.exports = React.createClass({
        render: function() {
          var componentStyle = {
            textAlign: "center",
            color: this.props.hfcolour,
            backgroundColor: this.props.hbgcolour,
            fontFamily: "'sofia_pro_regular', Arial, sans-serif",
            padding: "30px 15px",
            lineHeight: "1",
            fontSize: "42px",
            fontWeight: "bold",
            wordWrap: "break-word"
          };

          var headerStyle = {
            textAlign: "center",
            color: this.props.hfcolour,
            backgroundColor: this.props.hbgcolour,
            fontFamily: "'sofia_pro_regular', Arial, sans-serif",
            padding: "15px 15px",
            margin: "0px",
            lineHeight: "1"
          };

          return <table className="top" cellSpacing="0" cellPadding="0" width="100%">
                    <tbody>
                      <tr>
                        <td style={headerStyle}>
                          <center>
                            <table className="wrapper" width="600">
                              <tbody>
                                <tr>
                                  <td>
                                    <center>
                                      <img src={this.props.toggleLogo ? "http://www.firebox.com/firebox-light.png" : "http://www.firebox.com/firebox.png"} className="logo" width="200"/>
                                    </center>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={componentStyle}>
                                    {this.props.htitle}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </center>
                        </td>
                      </tr>
                    </tbody>
                  </table>
        }

      }); 
