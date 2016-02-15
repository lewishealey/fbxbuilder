var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            tab: 1,
            debug: false
        }
    },
    onInputChange: function(blockIndex, inputIndex, inputField, event) {
        this.props.onDataChange(blockIndex, inputIndex, inputField, event.target.value);
    },
    onIDChange: function(blockIndex, inputIndex, inputField, event) {
        this.props.onIDChange(blockIndex, inputIndex, inputField, event.target.value);
    },
    onHeaderChange: function(inputField, event) {
        this.props.onHeaderChange(inputField, event.target.value);
    },
    onDeleteClick: function(blockIndex) {
      this.props.onDeleteClick(blockIndex);
    },
    tabSelect: function(no) {
        this.setState({ tab: no });
    },
    render: function() {
        return (
            <div className="sidebar__card">

                <div className="sidebar__card-title">
                    <h4><button type="button" className="btn btn-delete" onClick={this.onHeaderChange.bind(this, "toggle")}>X</button> {this.props.card.name}
                    <div className="clearboth"></div>
                    </h4>
                </div>

                {this.props.card.inputs.map(function(input, i) {
                    return (
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-tabs">
                                    <a href="#" onClick={this.tabSelect.bind(this,"1")} className={"panel-tabs__tab " + (this.state.tab == 1 ? "active" : "")}>Main</a>
                                    <a href="#" onClick={this.tabSelect.bind(this,"2")} className={"panel-tabs__tab " + (this.state.tab == 2 ? "active" : "")}>Style</a>
                                    <a href="#" onClick={this.tabSelect.bind(this,"3")} className={"panel-tabs__tab " + (this.state.tab == 3 ? "active" : "")}>CTA</a>
                                    <a href="#" onClick={this.tabSelect.bind(this,"4")} className={"panel-tabs__tab " + (this.state.tab == 4 ? "active" : "")}>Media</a>
                                </div>
                            </div>
                                    <div className="panel-body">
                                        <div className="row">

                                            {this.state.tab == 1 &&

                                                <div>

                                                    <div className="col-md-12">
                                                        <label>Product ID</label>
                                                        <input type="text" className="form-control" defaultValue={input.product.id} onChange={this.onInputChange.bind(this, this.props.i, i, "product.id")} />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <label>Title Text (or used for alt)</label>
                                                        <input type="text" className="form-control" defaultValue={input.desc} onChange={this.onInputChange.bind(this, this.props.i, i, "title")} />
                                                    </div>

                                                </div>

                                            }

                                            {(this.state.tab == 2 && input.style) &&

                                                <div>

                                                    <div className="col-md-6">
                                                      <label>Bg colour</label>
                                                      <input type="text" className="form-control" defaultValue={input.style.bg_colour} onChange={this.onInputChange.bind(this, this.props.i, i, "btncolour")} />
                                                    </div>

                                                    <div className="col-md-6">
                                                      <label>Text colour</label>
                                                      <input type="text" className="form-control" defaultValue={input.style.font_colour} onChange={this.onInputChange.bind(this, this.props.i, i, "btnfcolour")} />
                                                    </div>

                                                </div>

                                            }

                                            {(this.state.tab == 3 && input.cta) &&

                                                <div>

                                                    <div className="col-md-12">
                                                      <label>CTA text</label>
                                                      <input type="text" className="form-control" defaultValue={input.cta.text} onChange={this.onInputChange.bind(this, this.props.i, i, "btncolour")} />
                                                    </div>

                                                    <div className="col-md-6">
                                                      <label>CTA bg colour</label>
                                                      <input type="text" className="form-control" defaultValue={input.cta.bg_colour} onChange={this.onInputChange.bind(this, this.props.i, i, "btncolour")} />
                                                    </div>

                                                    <div className="col-md-6">
                                                      <label>CTA font colour</label>
                                                      <input type="text" className="form-control" defaultValue={input.cta.font_colour} onChange={this.onInputChange.bind(this, this.props.i, i, "btnfcolour")} />
                                                    </div>

                                                </div>

                                            }

                                            {this.state.debug &&
                                              <div className="col-md-12">
                                                <h3>Debug</h3>

                                                  {input.cta &&
                                                      <div>
                                                            <p>CTA bg colour: {input.cta.bg_colour ? input.cta.bg_colour : "no"}</p>
                                                            <p>CTA font colour: {input.cta.font_colour ? input.cta.font_colour : "no"}</p>
                                                            <p>CTA text: {input.cta.text ? input.cta.text : "no"}</p>
                                                      </div>
                                                  }

                                                  <p>Title: {input.title ? input.title : "false"}</p>
                                                  <p>Desc: {input.desc ? input.desc : "no"}</p>
                                                  <p>Link: {input.link ? input.link : "false"}</p>

                                                  {input.discount &&
                                                      <div>
                                                        <p>Discount code: {input.discount.code ? input.discount.code : "no"}</p>
                                                        <p>Discount title: {input.discount.title ? input.discount.title : "no"}</p>
                                                      </div>
                                                  }

                                                  {input.features &&
                                                    <div>
                                                      Features: {input.features ? input.features : "no"}
                                                    </div>
                                                  }

                                                  {input.media &&
                                                    <div>
                                                      <p>Media: {input.media.media ? input.media.media : "no"}</p>
                                                      <p>Media link: {input.media.link ? input.media.link : "no"}</p>
                                                    </div>
                                                  }

                                                  {input.product &&
                                                    <div>
                                                      <p>Product ID: {input.product.id ? input.product.id : "no"}</p>
                                                    </div>
                                                  }

                                                  {input.margin &&
                                                    <div>
                                                      <p>Margin top: {input.margin.top ? input.margin.top : "no"}</p>
                                                      <p>Margin bottom: {input.margin.bottom ? input.margin.bottom : "no"}</p>
                                                    </div>
                                                  }

                                                  {input.style &&
                                                    <div>
                                                      <p>Style bg colour: {input.style.bg_colour ? input.style.bg_colour : "no"}</p>
                                                      <p>Style font colour: {input.style.font_colour ? input.style.font_colour : "no"}</p>
                                                    </div>
                                                  }

                                                  {input.text_media &&
                                                    <div>
                                                      <p>Link: {input.text_media.media ? input.text_media.media : "no"}</p>
                                                      <p>Media: {input.text_media.link ? input.text_media.link : "no"}</p>
                                                    </div>
                                                  }

                                                </div>

                                              }

                                        </div>
                                </div>
                        </div>
                    )
                }.bind(this))}

            </div>

        )

    }

});
