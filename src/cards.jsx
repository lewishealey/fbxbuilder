var React = require('react');
var Card = require('./card');

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
    renderCards: function() {

    },  
    render: function() {
            if(this.props.config) {
              console.log(this.props.config);
            };
        return (
            <div className="sidebar__flex">

              <div className="sidebar__card">
                  <div className="sidebar__card-title">
                    <h4>{this.props.config? this.props.config.data.name : ''}</h4>
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

              {this.props.config &&
                this.props.config.data.cards.map(function(card, i) {
                   return <Card card={card} i={i} key={i} onDataChange={this.onDataChange} onDeleteClick={this.onDeleteClick} onHeaderChange={this.onHeaderChange} toggleLogo={this.onLogoChange}/>
                })
              }

            </div>

          )

            

    }

});