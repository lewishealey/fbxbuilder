var React = require('react');

module.exports = React.createClass({
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
    render: function() {
        return (
            <div className="sidebar__flex">

            <div className="sidebar__card">
                <div className="sidebar__card-title">
              <h4>{this.props.data.name}</h4>
              <div className="clearboth"></div>
            </div>

        <div className="sidebar__card-content">
          <label>Header Title</label>
          <input type="text" className="form-control" defaultValue={this.props.data.htitle} onChange={this.onHeaderChange.bind(this, "htitle")} />

          <label>Header Bg colour</label>
          <input type="text" className="form-control" defaultValue={this.props.data.hbgcolour} onChange={this.onHeaderChange.bind(this, "hbgcolour")} />

          <label>Header Font colour</label>
          <input type="text" className="form-control" defaultValue={this.props.data.hfcolour} onChange={this.onHeaderChange.bind(this, "hfcolour")} />
          </div>

      </div>

            {this.props.data.blocks.map(function(block, blockIndex) {

              return(
              <div className="sidebar__card">
                <div className="sidebar__card-title">
              <h4>{blockIndex} <button type="button" className="btn btn-delete" onClick={this.onDeleteClick.bind(this, blockIndex)}>X</button> {block.title}</h4>
              <div className="clearboth"></div>
            </div>

                {block.inputs.map(function(input, inputIndex) {

                  return (
                      <div className="sidebar__card-content">

                          {/* Text Block */}
                          { block.type == "text" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">
                                    
                                      <div className="col-md-12">
                                        <label>Title Text (or used for alt)</label>
                                        <input type="text" className="form-control" defaultValue={input.title} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "title")} />
                                      </div>

                                    </div>
                                  </div>
                              </div>

                            }

                          {/* Text Top Block */}
                          { block.type == "textop" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">

                                      <div className="col-md-12">
                                        <p>Light/Dark logo</p>
                                        <a className="btn btn-primary" onClick={this.props.toggleLogo}>Toggle light/dark logo</a>
                                      </div>
                                    
                                      <div className="col-md-12">
                                        <label>Title Text (or used for alt)</label>
                                        <input type="text" className="form-control" defaultValue={input.title} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "title")} />
                                      </div>

                                    </div>
                                  </div>
                              </div>

                            }

                          {/* Link Block */}
                          { block.type == "link" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">
                                    
                                      <div className="col-md-12">
                                        <label>Title Text (or used for alt)</label>
                                        <input type="text" className="form-control" defaultValue={input.title} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "title")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Link</label>
                                        <input type="text" className="form-control" defaultValue={input.link} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "link")} />
                                      </div>

                                    </div>
                                  </div>
                              </div>

                            }

                          {/* Slice Block */}
                          { block.type == "slice" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">

                                      <div className="col-md-12">
                                        <label>Image url</label>
                                        <input type="text" className="form-control" defaultValue={input.image} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "image")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Link</label>
                                        <input type="text" className="form-control" defaultValue={input.link} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "link")} />
                                      </div>
                                    
                                      <div className="col-md-12">
                                        <label>Alt text</label>
                                        <input type="text" className="form-control" defaultValue={input.title} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "title")} />
                                      </div>

                                    </div>
                                  </div>
                              </div>

                            }

                          {/* Slice Block */}
                          { block.type == "sliceend" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">

                                      <div className="col-md-12">
                                        <label>Image url</label>
                                        <input type="text" className="form-control" defaultValue={input.image} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "image")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Link</label>
                                        <input type="text" className="form-control" defaultValue={input.link} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "link")} />
                                      </div>
                                    
                                      <div className="col-md-12">
                                        <label>Alt text</label>
                                        <input type="text" className="form-control" defaultValue={input.title} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "title")} />
                                      </div>

                                    </div>
                                  </div>
                              </div>

                            }

                          {/* Hero */}
                          { block.type == "hero" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">

                                      <div className="col-md-12">
                                        <label>Title Text (or used for alt)</label>
                                        <input type="text" className="form-control" defaultValue={input.title} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "title")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Text</label>
                                          <p><textarea type="text" className="form-control" defaultValue={input.text} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "text")} /></p>
                                      </div>

                                      <div className="col-md-12">
                                        <label>Image url</label>
                                        <input type="text" className="form-control" defaultValue={input.image} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "image")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Link</label>
                                        <input type="text" className="form-control" defaultValue={input.link} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "link")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Product ID</label>
                                        <input type="text" className="form-control" defaultValue={input.productid} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "productid")} />
                                      </div>

                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Colour</div>
                                      </div>

                                      <div className="col-md-6">
                                        <label>Bg Colour</label>
                                        <input type="text" className="form-control" defaultValue={input.bgcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "bgcolour")} />
                                      </div>
                                      
                                      <div className="col-md-6">
                                        <label>Font Colour</label>
                                          <input type="text" className="form-control" defaultValue={input.fcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "fcolour")} />
                                      </div>
                                      
                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Button Style</div>
                                      </div>
                                    
                                    <div className="col-md-6">
                                      <label>Btn bg colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btncolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btncolour")} />
                                    </div>

                                    <div className="col-md-6">
                                      <label>Btn text colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btnfcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btnfcolour")} />
                                    </div>

                                    </div>
                                  </div>
                              </div>

                            }

                          {/* Column */}
                          { block.type == "column" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">
                                    
                                      <div className="col-md-12">
                                        <label>Product ID</label>
                                        <input type="text" className="form-control" defaultValue={input.productid} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "productid")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Title Text (or used for alt)</label>
                                        <input type="text" className="form-control" defaultValue={input.title} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "title")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Text</label>
                                          <p><textarea type="text" className="form-control" defaultValue={input.text} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "text")} /></p>
                                      </div>

                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Colour</div>
                                      </div>

                                      <div className="col-md-6">
                                        <label>Bg Colour</label>
                                        <input type="text" className="form-control" defaultValue={input.bgcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "bgcolour")} />
                                      </div>
                                      
                                      <div className="col-md-6">
                                        <label>Font Colour</label>
                                          <input type="text" className="form-control" defaultValue={input.fcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "fcolour")} />
                                      </div>
                                      
                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Button Style</div>
                                      </div>
                                    
                                    <div className="col-md-6">
                                      <label>Btn bg colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btncolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btncolour")} />
                                    </div>

                                    <div className="col-md-6">
                                      <label>Btn text colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btnfcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btnfcolour")} />
                                    </div>

                                    </div>
                                  </div>
                              </div>

                            }


                          {/* Top10 Block */}
                          { block.type == "top10" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">
                                    
                                      <div className="col-md-12">
                                        <label>Product ID</label>
                                        <input type="text" className="form-control" defaultValue={input.productid} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "productid")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Text</label>
                                          <p><textarea type="text" className="form-control" defaultValue={input.text} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "text")} /></p>
                                      </div>

                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Number Style</div>
                                      </div>

                                      <div className="col-md-6">
                                        <label>Bg Colour</label>
                                        <input type="text" className="form-control" defaultValue={input.bgcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "bgcolour")} />
                                      </div>
                                      
                                      <div className="col-md-6">
                                        <label>Font Colour</label>
                                          <input type="text" className="form-control" defaultValue={input.fcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "fcolour")} />
                                      </div>
                                      
                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Button Style</div>
                                      </div>
                                    
                                    <div className="col-md-6">
                                      <label>Btn bg colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btncolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btncolour")} />
                                    </div>

                                    <div className="col-md-6">
                                      <label>Btn text colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btnfcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btnfcolour")} />
                                    </div>

                                    </div>
                                  </div>
                              </div>

                            }


                          {/* Product Left */}
                          { block.type == "productleft" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">
                                    
                                      <div className="col-md-12">
                                        <label>Product ID</label>
                                        <input type="text" className="form-control" defaultValue={input.productid} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "productid")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Text</label>
                                          <p><textarea type="text" className="form-control" defaultValue={input.text} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "text")} /></p>
                                      </div>

                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Number Style</div>
                                      </div>

                                      <div className="col-md-6">
                                        <label>Bg Colour</label>
                                        <input type="text" className="form-control" defaultValue={input.bgcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "bgcolour")} />
                                      </div>
                                      
                                      <div className="col-md-6">
                                        <label>Font Colour</label>
                                          <input type="text" className="form-control" defaultValue={input.fcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "fcolour")} />
                                      </div>
                                      
                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Button Style</div>
                                      </div>
                                    
                                    <div className="col-md-6">
                                      <label>Btn bg colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btncolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btncolour")} />
                                    </div>

                                    <div className="col-md-6">
                                      <label>Btn text colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btnfcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btnfcolour")} />
                                    </div>

                                    </div>
                                  </div>
                              </div>

                            }

                          {/* Product Right */}
                          { block.type == "productright" && 
                            <div className="panel panel-default">
                              <div className="panel-heading">Editable fields</div>
                                <div className="panel-body">
                                    <div className="row">
                                    
                                      <div className="col-md-12">
                                        <label>Product ID</label>
                                        <input type="text" className="form-control" defaultValue={input.productid} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "productid")} />
                                      </div>

                                      <div className="col-md-12">
                                        <label>Text</label>
                                          <p><textarea type="text" className="form-control" defaultValue={input.text} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "text")} /></p>
                                      </div>

                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Number Style</div>
                                      </div>

                                      <div className="col-md-6">
                                        <label>Bg Colour</label>
                                        <input type="text" className="form-control" defaultValue={input.bgcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "bgcolour")} />
                                      </div>
                                      
                                      <div className="col-md-6">
                                        <label>Font Colour</label>
                                          <input type="text" className="form-control" defaultValue={input.fcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "fcolour")} />
                                      </div>
                                      
                                      <div className="col-md-12">
                                        <div className="panel-sub-heading">Button Style</div>
                                      </div>
                                    
                                    <div className="col-md-6">
                                      <label>Btn bg colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btncolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btncolour")} />
                                    </div>

                                    <div className="col-md-6">
                                      <label>Btn text colour</label>
                                      <input type="text" className="form-control" defaultValue={input.btnfcolour} onChange={this.onInputChange.bind(this, blockIndex, inputIndex, "btnfcolour")} />
                                    </div>

                                    </div>
                                  </div>
                              </div>

                            }



                      </div>
                        
                        );

                    }.bind(this))}

                </div>
                );

            }.bind(this))}
        </div>
        );

    }

});