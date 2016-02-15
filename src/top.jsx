var React = require('react');

module.exports = React.createClass({
        render: function() {

          return (

            <table border="0" cellPadding="0" cellSpacing="0" width="100%">
              <tr>
                  <td bgcolor="#333333" style={{ backgroundColor: "#333333" }}>
                      <div align="center" style={{ padding: "0px 15px 0px 15px", textAlign: "center" }}>
                          <table border="0" cellPadding="0" cellSpacing="0" width="600" className="wrapper" style={{ margin: "0 auto"}}>
                              <tr>
                                  <td style={{ padding: "20px 0px 30px 0px" }} className="logo">
                                      <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                          <tr>
                                              <td bgcolor="#333333" width="200" align="center" style={{ textAlign: "center" }}>
                                                  <a href="http://www.firebox.com" target="_blank">
                                                      <img alt="Logo" src="http://www.firebox.com/firebox.png" width="200" height="25" border="0" />
                                                  </a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td bgcolor="#333333" width="600" align="center" className="header" style={{ fontWeight: "bold", fontFamily: "'Arial', sans-serif", color: "#fff", paddingTop: "25px", fontSize: "42px", lineHeight: "1", textAlign: "center"}}>
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
        
        );
        
        }

      }); 
