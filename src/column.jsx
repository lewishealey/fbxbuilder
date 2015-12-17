var React = require('react');

module.exports = React.createClass({
        render: function () {
              var buttonStyle = {
                display: "inline-block",
                padding: "10px 30px",
                backgroundColor: this.props.inputs[0].bgcolour,
                color: "#fff",
                borderRadius: "2px",
                textDecoration: "none",
                margin: "10px 0 0 0"
              }

              var productImage1 = "http://media.firebox.com/pic/p"+ this.props.inputs[0].productid +"_column_grid_8.jpg";
              var productImage2 = "http://media.firebox.com/pic/p"+ this.props.inputs[1].productid +"_column_grid_8.jpg";

              return <table border="0" cellPadding="0" cellSpacing="0" width="100%">
<tbody>
    <tr>
        <td bgcolor="#EFEFEF" align="center" style={{padding: "0px 15px 30px 15px", backgroundColor:"#EFEFEF"}} className="section-padding">
            <table border="0" cellPadding="0" cellSpacing="0" width="600" className="responsive-table">
            <tbody>
                <tr>
                    <td>
                    <table border="0" cellPadding="0" cellSpacing="0" width="600" className="responsive-table">
                    <tbody>
                        <tr>
                            <td align="center" valign="top" width="50%" className="templateColumnContainer" cellPadding="0" cellSpacing="0" style={{padding: "0px"}}>
                                <table border="0" cellPadding="10" cellSpacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td valign="top" className="leftColumnContent" style={{padding: "0 15px 0 0"}}>
                                            <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td align="center" bgcolor="#F5F7FA" valign="middle" style={{backgroundColor: "#F5F7FA", textAlign: "center", position: "relative"}}>
                                                            <a href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} target="_blank">
                                                                <img src={productImage1} width="285" height="285" style={{display: "block", color: this.props.inputs[0].fcolour, fontFamily: "Helvetica, Arial, sans-serif", fontSize: "13px", width: "285px", height: "285px"}} alt={this.props.inputs[0].text} title={this.props.inputs[0].text} border="0" className="img-max" />
                                                                
                                                                {this.props.showOrder && 
                                                                    <div className="order-block">{this.props.order}</div>
                                                                }

                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center" style={{padding: "15px 0 0 0", fontFamily: "Arial, sans-serif", color: this.props.inputs[0].fcolour, fontSize: "18px", fontWeight: "bold", backgroundColor: this.props.inputs[0].bgcolour, textAlign: "center"}}>
                                                        {this.props.inputs[0].title ? this.props.inputs[0].title : this.props.inputs[0].productname}</td>
                                                    </tr>
                                                    <tr>
                                                       <td align="center" style={{padding: "5px 10px 20px 10px", fontFamily: "Arial, sans-serif", color: this.props.inputs[0].fcolour, fontSize: "14px", lineHeight: "20px", backgroundColor: this.props.inputs[0].bgcolour, textAlign: "center"}}><span className="appleBody">
                                                            <p style={{margin: "0 0 10px 0"}}>{this.props.inputs[0].text}</p>
                                                            <p style={{margin: "0 0 15px 0"}}>{this.props.inputs[0].productprice}</p>
                                                        <a href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} style={{display: "inline-block", padding: "10px 30px", backgroundColor: this.props.inputs[0].btncolour, color: this.props.inputs[0].btnfcolour, borderRadius: "2px", textDecoration: "none", margin: "0"}}>BUY NOW</a>
                                                        </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>

                            <td align="center" valign="top" width="50%" className="templateColumnContainer" cellPadding="0" cellSpacing="0" style={{padding: "0px"}}>
                                <table border="0" cellPadding="10" cellSpacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td valign="top" className="rightColumnContent" style={{padding: "0 0 0 15px"}}>
                                            <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td align="center" bgcolor="#F5F7FA" valign="middle" style={{backgroundColor: "#F5F7FA", textAlign: "center"}}><a href={this.props.inputs[1].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} target="_blank"><img src={productImage2} width="285" height="285" style={{display: "block", color: this.props.inputs[1].fcolour, fontFamily: "Helvetica, Arial, sans-serif", fontSize: "13px", width: "285px", height: "285px"}} alt={this.props.inputs[1].text} title={this.props.inputs[1].text} border="0" className="img-max" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center" style={{padding: "15px 0 0 0", fontFamily: "Arial, sans-serif", color: this.props.inputs[1].fcolour, fontSize: "18px", fontWeight: "bold", backgroundColor: this.props.inputs[1].bgcolour, textAlign: "center"}}>
                                                        {this.props.inputs[1].title ? this.props.inputs[1].title : this.props.inputs[1].productname}</td>
                                                    </tr>
                                                    <tr>
                                                       <td align="center" style={{padding: "5px 10px 20px 10px", fontFamily: "Arial, sans-serif", color: this.props.inputs[1].fcolour, fontSize: "14px", lineHeight: "20px", backgroundColor: this.props.inputs[1].bgcolour, textAlign: "center"}}><span className="appleBody">
                                                            <p style={{margin: "0 0 10px 0"}}>{this.props.inputs[1].text}</p>
                                                            <p style={{margin: "0 0 15px 0"}}>{this.props.inputs[1].productprice}</p>
                                                        <a href={this.props.inputs[1].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} style={{display: "inline-block", padding: "10px 30px", backgroundColor: this.props.inputs[1].btncolour, color: this.props.inputs[1].btnfcolour, borderRadius: "2px", textDecoration: "none", margin: "0"}}>BUY NOW</a>
                                                        </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                              </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
            }

      });