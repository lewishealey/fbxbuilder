var React = require('react');

module.exports = React.createClass({
        render: function () {

            var buttonStyle = {
                display: "inline-block",
                padding: "10px 30px",
                backgroundColor: this.props.inputs[0].btncolour,
                color: this.props.inputs[0].btnfcolour,
                borderRadius: "2px",
                textDecoration: "none",
                margin: "0"
            };


            return <center><table border="0" cellPadding="0" cellSpacing="0" width="100%"> 
    <tr>
        <td bgcolor="#EFEFEF" align="center" style={{padding: "0px 15px 30px 15px", textAlign: "center"}} className="section-padding">
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
                                                        <td align="center" valign="middle" style={{position: "relative"}} >
                                                            <a href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} target="_blank">
                                                                <img src={this.props.inputs[0].productid ? "http://media.firebox.com/pic/p"+ this.props.inputs[0].productid +"_column_grid_8.jpg" : this.props.inputs[0].image} width="600" height="600" title={this.props.inputs[0].title} alt={this.props.inputs[0].title} style={{display: "block", color: "#666666", textAlign: "center", backgroundColor: "#FFF", fontFamily: "Helvetica, arial, sans-serif", fontSize: "13px", width: "600px", height: "600px"}} border="0" className="img-max" />

                                                                {this.props.showOrder && 
                                                                    <div className="order-block">{this.props.order}</div>
                                                                }
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr> 
                                                        <td align="center" style={{padding: "15px 15px 0 15px", fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: this.props.inputs[0].bgcolour, color: this.props.inputs[0].fcolour, fontSize: "24px", fontWeight: "bold"}}>{this.props.inputs[0].title ? this.props.inputs[0].title : this.props.inputs[0].productname}</td>
                                                    </tr>
                                                    <tr>
                                                       <td align="center" style={{padding: "5px 10px 20px 10px", fontFamily: "Arial, sans-serif", textAlign: "center", backgroundColor: this.props.inputs[0].bgcolour, color: this.props.inputs[0].fcolour, fontSize: "14px", lineHeight: "20px"}}><span className="appleBody">
                                                            <p style={{margin: "0 0 10px 0"}}>{this.props.inputs[0].text}</p>
                                                            <p style={{margin: "0 0 15px 0"}}>{this.props.inputs[0].productprice}</p>
                                                        <a href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} style={buttonStyle}>BUY NOW</a>
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
</table></center>

        }
      });