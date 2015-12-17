var React = require('react');

module.exports = React.createClass({
    onHeaderChange: function(inputField, event) {
        this.props.onHeaderChange(inputField, event.target.value);
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
          <label>Name</label>
          <input type="text" className="form-control" defaultValue={this.props.data.name} onChange={this.onHeaderChange.bind(this, "name")} />

          <label>ITC ID</label>
          <input type="text" className="form-control" defaultValue={this.props.data.itc} onChange={this.onHeaderChange.bind(this, "itc")} />

          <label>Analytics</label>
          <input type="text" className="form-control" defaultValue={this.props.data.analytics} onChange={this.onHeaderChange.bind(this, "campaign")} />

          <label>Brief</label>
          <textarea type="text" className="form-control" defaultValue={this.props.data.brief} onChange={this.onHeaderChange.bind(this, "brief")} />
        </div>

          </div>
        </div>
        );

    }

});