var React = require('react');

// Block types
var Top = require('./top');
var Hero = require('./hero');
var Text = require('./text');
var TextTop = require('./textop');
var Column = require('./column');
var Top10 = require('./top10');
var Link = require('./link');
var Slice = require('./slice');
var SliceEnd = require('./sliceend');
var Feature = require('./feature');
var ProductLeft = require('./productleft');
var Footer = require('./footer');

module.exports = React.createClass({
    render: function() {
        return (
            <center>
                <div id="headerTable">
                    <Top htitle={this.props.data.htitle} hfcolour={this.props.data.hfcolour} hbgcolour={this.props.data.hbgcolour} />
                </div>
                <table border="0" cellPadding="0" cellSpacing="0" width="600" className="wrapper">
                <tbody>
                    <tr>
                        <td align="center" className="section-padding">
                            <table border="0" cellPadding="0" cellSpacing="0" width="600" className="wrapper">
                            <tbody>
                                <tr>
                                    <td>
                                        <div id="bodyTable">
                                            {this.props.data.blocks.map(function(block, i) {

                                                // Top of the newsletter
                                                if(block.type == "top") {
                                                  return <Top key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Hero header section
                                                if(block.type == "text") {
                                                  return <Text key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Top text welcome message, position: "relative"
                                                if(block.type == "textop") {
                                                  return <TextTop key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Plain centered text
                                                if(block.type == "hero") {
                                                  return <Hero key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Hyperlink
                                                if(block.type == "link") { 
                                                  return <Link key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Top 10 row
                                                if(block.type == "top10") {
                                                  return <Top10 key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Product Left
                                                if(block.type == "productleft") {
                                                  return <ProductLeft key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Slice
                                                if(block.type == "slice") {
                                                  return <Slice key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Slice End
                                                if(block.type == "sliceend") {
                                                  return <SliceEnd key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Feature
                                                if(block.type == "feature") {
                                                  return <Feature key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                }

                                                // Responsive two column grid
                                                if(block.type == "column") {
                                                  return <Column key={i} {...block} itc={this.props.data.itc} campaign={this.props.data.analytics} order={i} id={this.props.data.id} showOrder={this.props.showOrder} />
                                                                    
                                                }

                                            }.bind(this))}
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Footer />
            </center>
        );
    }
});