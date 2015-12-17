var React = require('react');

module.exports = React.createClass({
        render: function() {

          return <table border="0" cellPadding="0" cellSpacing="0" width="100%">
    <tr>
        <td bgcolor="#EFEFEF" style={{padding: "0px 15px 30px 15px"}} className="link-padding">
            <div align="center">
                <table border="0" cellPadding="0" cellSpacing="0" width="600" className="wrapper">
                    <tr>
                        <td className="link">
                            <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                <tr>
                                    <td width="600" align="center" style={{fontFamily: "Arial, sans-serif", color: this.props.inputs[0].fcolour, backgroundColor: this.props.inputs[0].bgcolour, padding: "15px", fontSize: "18px", textAlign: "center", lineHeight: "1", border: "1px solid #ccc", position: "relative"}}>
                                        <span className="appleBody">
                                            <a href={this.props.inputs[0].link + "?itc=" + this.props.itc + "&utm_source=newsletter&utm_medium=email&utm_campaign=" + this.props.campaign + "&src_t=nwt&src_id=" + this.props.id + "&via=NL_row&NL_pos=" + this.props.order} style={{color: this.props.inputs[0].fcolour}}>
                                                {this.props.inputs[0].title}

                                                {this.props.showOrder && 
                                                    <div className="order-block">{this.props.order}</div>
                                                }

                                            </a>
                                        </span>
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

      });