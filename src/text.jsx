var React = require('react');

module.exports = React.createClass({
        render: function() {

          return <table border="0" cellPadding="0" cellSpacing="0" width="100%">
    <tr>
        <td bgcolor="#EFEFEF" style={{backgroundColor: "#EFEFEF",padding: "0px 15px 30px 15px"}} className="text-padding">
            <div align="center" style={{textAlign: "center"}}>
                <table border="0" cellPadding="0" cellSpacing="0" width="600" className="wrapper">
                    <tr>
                        <td>
                            <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                                <tr>
                                    <td width="600" className="text" align="center" style={{textAlign: "center", fontFamily: "Arial, sans-serif", color: "#343434", fontSize: "18px", position: "relative", lineHeight: "1"}}>
                                        {this.props.inputs[0].title}

                                        {this.props.showOrder && 
                                            <div className="order-block">{this.props.order}</div>
                                        }
                                        
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