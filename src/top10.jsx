var React = require('react');

module.exports = React.createClass({
        render: function () {

            return <div>
            {this.props.inputs.map(function(input, i) {

              return  <table border="0" cellPadding="0" cellSpacing="0" width="100%">
<tbody>
    <tr>
        <td bgcolor="#EFEFEF" align="center" style={{padding: "0px 15px 30px 15px",textAlign: "center", position: "relative"}} className="section-padding">

            <table border="0" cellPadding="0" cellSpacing="0" width="600" className="responsive-table">
            <tbody>
                <tr>
                    <td>
                    <table border="0" cellPadding="0" cellSpacing="0" width="600" className="responsive-table">
                    <tbody>
                        <tr>
                            <td align="center" valign="top" width="246" className="templateColumnContainer">
                                <table border="0" cellPadding="10" cellSpacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td valign="top" className="leftColumnContent" style={{padding: "0"}}>
                                            <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td align="left" width="35" bgcolor="#E4A706" valign="middle" style={{color: this.props.inputs[0].btnfcolour, backgroundColor: this.props.inputs[0].btncolour, fontFamily: "Arial, sans-serif", fontSize: "24px", textAlign: "center", position: "relative"}}>
                                                        {i + 1}

                                                        {this.props.showOrder && 
                                                            <div className="order-block">{this.props.order}</div>
                                                        }

                                                    </td>
                                                    <td align="left" bgcolor="#FFFFFF" width="210" valign="middle">
                                                        <a href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} target="_blank">
                                                            <img src={this.props.inputs[0].productid ? "http://media.firebox.com/pic/p" + this.props.inputs[0].productid + "_column_grid_8.jpg" : this.props.inputs[0].image} width="210" height="210" style={{display: "block", color: "#666666", fontFamily: "Arial, sans-serif", fontSize: "13px", width: "210px", height: "210px"}} alt="Fluid images" border="0" className="img-max" />
                                                        </a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td align="center" valign="top" width="354" className="templateColumnContainer">
                                <table border="0" cellPadding="10" cellSpacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td valign="top" className="rightColumnContent" style={{padding: "0", backgroundColor: "#FFFFFF"}} height="210">
                                            <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                                            <tbody>
                                                <tr>
                                                   <td align="center" style={{padding: "30px 10px 20px 10px", fontFamily: "Arial, sans-serif", color: "#343434", fontSize: "14px", backgroundColor: "#FFFFFF", lineHeight: "20px"}} bgcolor="#FFFFFF" height="160" valign="top"><span className="appleBody">
                                                   <h3 style={{fontFamily: "Arial, sans-serif", color: "#333333", fontSize: "18px", fontWeight: "bold", padding: "0 0 15px 0", margin: "0"}} bgcolor="#FFFFFF">{input.productname}</h3>
                                                        <p style={{margin: "0 0 10px 0"}}>{input.text}</p>
                                                        <p style={{margin: "0 0 15px 0"}}>{input.productprice}</p>
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
               
}.bind(this))}

</div>

    }
});