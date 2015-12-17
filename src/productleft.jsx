var React = require('react');

module.exports = React.createClass({
        render: function () {

            return <div><table border="0" cellPadding="0" cellSpacing="0" width="100%">
<tbody>
    <tr>
        <td align="center" style={{padding: "0px 15px 0px 15px", backgroundColor: this.props.inputs[0].bgcolour, color: this.props.inputs[0].fcolour}} className="section-padding">
            <table border="0" cellPadding="0" cellSpacing="0" width="648" className="responsive-table">
            <tbody>
                <tr>
                    <td>
                    <table border="0" cellPadding="0" cellSpacing="0" width="648" className="responsive-table">
                    <tbody>
                        <tr>
                            <td align="center" valign="top" width="402" className="templateColumnContainer" style={{padding: "0"}}>
                                <table border="0" cellPadding="0" cellSpacing="0" width="100%" height="246">
                                <tbody>
                                    <tr>
                                        <td valign="top" className="leftRow" style={{padding: "0 0 30px 0"}} height="246">
                                            <table cellPadding="0" cellSpacing="0" border="0" width="100%" height="246">
                                            <tbody>
                                                <tr>
                                                   <td align="center" style={{padding: "0px 15px 0px 15px", fontFamily: "Arial, sans-serif", color: this.props.inputs[0].fcolour, fontSize: "14px", lineHeight: "20px", backgroundColor: this.props.inputs[0].bgcolour}} height="246" valign="middle"><span className="appleBody">
                                                   <a style="text-decoration:none;" target="_blank" href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order}>
                                                        <h3 style={{fontFamily: "Arial, sans-serif", color: this.props.inputs[0].fcolour, backgroundColor: this.props.inputs[0].bgcolour, fontSize: "20px", fontWeight: "bold", padding: "0 0 15px 0", margin: "0"}}>
                                                            {this.props.inputs[0].title ? this.props.inputs[0].title : this.props.inputs[0].productname}
                                                        </h3> 
                                                   </a>
                                                    <a style="text-decoration:none;" target="_blank" href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order}>
                                                        <p style={{margin: "0 0 10px 0", fontSize: "13px", color: this.props.inputs[0].fcolour}}>
                                                            {this.props.inputs[0].text}
                                                        </p>
                                                    </a>
                                                    <a style="text-decoration:none;" target="_blank" href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order}>
                                                        <p style={{margin: "0 0 15px 0", fontSize: "18px", color: this.props.inputs[0].fcolour}}>
                                                            {input.productprice}
                                                            </p>
                                                    </a>
                                                    <a target="_blank" href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} style={{display: "inline-block", padding: "10px 30px", backgroundColor: "#343434", color: "#fff", borderRadius: "2px", textDecoration: "none", margin: "0"}} >
                                                        BUY NOW</a>
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

                            <td align="center" valign="top" width="246" className="templateColumnContainer" style={{padding: "0"}}>
                                <table border="0" cellpadding="10" cellspacing="0" width="100%" height="246">
                                    <tbody>
                                        <tr>
                                            <td valign="top" className="leftColumnContent" style={{padding: "0 0 30px 0"}}>
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" height="246">
                                                <tbody>
                                                    <tr>
                                                        <td align="left" width="246" valign="middle" style={{backgroundColor: "#F5F7FA", position: "relative"}}>
                                                            <a style="text-decoration:none;" target="_blank" href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order}>
                                                                <img src={this.props.inputs[0].productid ? "http://media.firebox.com/pic/p" + this.props.inputs[0].productid + "_column_grid_8.jpg" : this.props.inputs[0].image} width="246" height="246" style={{display: "block", color: "#666666", fontFamily: "Arial, sans-serif", fontSize: "13px", width: "246px", height: "246px"}} alt={this.props.inputs[0].title ? this.props.inputs[0].title : this.props.inputs[0].productname} title={this.props.inputs[0].title ? this.props.inputs[0].title : this.props.inputs[0].productname} border="0" className="img-max" />
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
</div>

    }
});