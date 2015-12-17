var React = require('react');

module.exports = React.createClass({
        render: function() {

          return <table border="0" cellPadding="0" cellSpacing="0" width="100%">
    <tr>
        <td bgcolor="#EFEFEF" align="center" className="slice-padding" style={{padding: "0px 15px 30px 15px"}} >
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
                                                        <td align="center" bgcolor="#FFFFFF" valign="middle" style={{ backgroundColor: "#FFFFFF", position: "relative"}}>
                                                            <a href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} target="_blank">
                                                                <img src={this.props.inputs[0].image} width="600" style={{display: "block", color: "#666666", fontFamily: "Arial, sans-serif", fontSize: "13px", width: "600px"}} alt={this.props.inputs[0].title} title={this.props.inputs[0].title} border="0" className="img-max" />

                                                                {this.props.showOrder && 
                                                                    <div className="order-block">{this.props.order}</div>
                                                                }

                                                            </a>
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