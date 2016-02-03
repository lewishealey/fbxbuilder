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
              <h4>Newsletter {this.props.config.data ? this.props.config.data.id : null} </h4>
            </div>


        <div className="sidebar__card-content">

          <div className="panel panel-default">
              <div className="panel-heading">Edit your fields now</div>
                <div className="panel-body">
                    <div className="row">

                      {this.props.config.data &&
                    
                        <div className="col-md-12">

                          <label>Name</label>
                          <input type="text" className="form-control" defaultValue={this.props.config.data.name ? this.props.config.data.name : "Enter newsletter name"} onChange={this.onHeaderChange.bind(this, "name")} />

                          <label>ITC ID</label>
                          <input type="text" className="form-control" defaultValue={this.props.config.data.itc ? this.props.config.data.itc : "Enter ITC"} onChange={this.onHeaderChange.bind(this, "itc")} />

                          <label>Brief</label>
                          <textarea type="text" className="form-control" defaultValue={this.props.config.data.brief ? this.props.config.data.brief : "Enter your  brief"} onChange={this.onHeaderChange.bind(this, "brief")} rows="10" />
                        
                        </div>

                      }

                      <div className="col-md-12">

                        <p><button className="btn btn-primary">Save</button></p>

                      </div>

                      <div className="col-md-12">
                        <p><strong>Note:</strong></p>
                        <p>After you have saved you brief, feel free to choose your template. Make sure it is the right one though as changing will clear information</p>
                      </div>

                    </div>
                  </div>
              </div>

          </div>

          </div>
        </div>
        );

    }

});