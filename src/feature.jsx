var React = require('react');
module.exports = React.createClass({
        render: function() {
          return <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td bgcolor="#EFEFEF" align="center" style={{padding: "0px 15px 30px 15px", backgroundColor: "#EFEFEF"}} className="section-padding">
            <table border="0" cellPadding="0" cellSpacing="0" width="600" className="responsive-table">
                <tr>
                    <td>
                        <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" className="mobile-wrapper">

                                    <table cellPadding="0" cellSpacing="0" border="0" width="100%" align="left" className="responsive-table">
                                        <tr>
                                            <td>
                                                <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="center" style={{padding: "15px 30px 0 30px", fontFamily: "Arial, sans-serif", color: "#333333", fontSize: "24px", fontWeight: "bold", backgroundColor: "#FFFFFF", textAlign: "center", position: "relative"}} bgcolor="#FFFFFF">
                                                            {this.props.inputs[0].title}

                                                            {this.props.showOrder && 
                                                                <div className="order-block">{this.props.order}</div>
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                       <td align="center" style={{padding: "5px 10px 20px 10px", fontFamily: "Arial, sans-serif", color: "#666666", fontSize: "14px", lineHeight: "20px", backgroundColor: "#FFFFFF", textAlign: "center"}} bgcolor="#FFFFFF"><span className="appleBody">   
                                                       {this.props.inputs.map(function(input, inputIndex) {
                                                            return <p style={{margin: "0 0 10px 0"}}>{input.title}</p>
                                                        }.bind(this))}
                                                            <p style={{padding: "15px 0 15px 0", margin: "0"}}>£Price</p>
                                                        <a href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} style={{display: "inline-block", padding: "10px 30px", backgroundColor: "#343434", color: "#fff", borderRadius: "2px", textDecoration: "none", margin: "0"}}>BUY NOW</a>
                                                        </span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
        }

      });