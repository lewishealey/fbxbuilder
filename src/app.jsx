var React = require('react');
var Jquery = require('jquery');

// Inputs & previews
var Cards = require('./cards');
var Preview = require('./preview');
var BriefPanel = require('./briefpanel');
var Add = require('./add');
var Tab = require('./tab');

// Templates
var colours = {"red":"#EF353D","cyan":"#7EC0BF","gold":"#E4A706","Turqouise":"#23AE8F","green":"#53A270","grey":"#585858","charcoal":"#343434","off-grey":"#908B80","black":"#000","white":"#FFF","facebook" : "#3B5998","secure" : "#8EE797","friend" : "#C6F0F4"};
var data = {"id":"01","name":"First Newsletter","type":"newsletter","itc":"000","analytics":"HELLO","brief":"Write your brief here...","htitle":"Pebble Time Smartwatch and new products this week","hfcolour":"#FFF","hbgcolour":"#343434","alt_logo":false,"blocks":[{"title":"Header Text","type":"textop","inputs":[{"bgcolour":"#EFEFEF","fcolour":"#343434","btncolour":"","btnfcolour":"","image":"","title":"Free UK Delivery for orders over £50","text":"","link":"","productid":"","productname":"","productprice":"","productlink":""}]},{"title":"Align left","type":"productleft","inputs":[{"bgcolour":"#FFFFFF","fcolour":"#343434","btncolour":"#343434","btnfcolour":"#FFFFFF","image":"","title":"","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a mi consequat, eleifend felis eget, placerat enim","link":"","productid":"7418","productname":"Middle Class Problems","productprice":"£9.99","productlink":"http://www.firebox.com/product/7418/"}]},{"title":"Top 10","type":"top10","inputs":[{"bgcolour":"#E5A800","fcolour":"#343434","btncolour":"#343434","btnfcolour":"#FFFFFF","image":"http://media.firebox.com/pic/p7418_column_grid_12.jpg","title":"","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a mi consequat.","link":"","productid":"7418","productname":"Middle Class Problems","productprice":"£9.99","productlink":"http://www.firebox.com/product/7418/"}]},{"title":"Hero","type":"hero","inputs":[{"order":"3","bgcolour":"#FFFFFF","fcolour":"#343434","btncolour":"#343434","btnfcolour":"#FFFFFF","image":"http://media.firebox.com/i/home/feature/2x2/naga_vodka.jpg","title":"Lorem ipsum dolor sit amet","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a mi consequat, eleifend felis eget, placerat enim","link":"http://www.firebox.com","productid":"","productname":"","productprice":"","productlink":""}]},{"title":"Link","type":"link","inputs":[{"order":"4","bgcolour":"#EFEFEF","fcolour":"#343434","btncolour":"","btnfcolour":"","image":"","title":"Lorem ipsum dolor sit amet","text":"","link":"http://www.firebox.com","productid":"","productname":"","productprice":"","productlink":""}]},{"title":"Declaration","type":"text","inputs":[{"order":"5","bgcolour":"#EFEFEF","fcolour":"#343434","btncolour":"","btnfcolour":"","image":"","title":"Lorem ipsum dolor sit amet","text":"","link":"","productid":"","productname":"","productprice":"","productlink":""}]},{"title":"Product row","type":"column","inputs":[{"order":"5","bgcolour":"#FFFFFF","fcolour":"#343434","btncolour":"#343434","btnfcolour":"#FFFFFF","image":"","title":"","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","link":"","productid":"7260","productname":"BB8","productprice":"£109.99","productlink":"http://www.firebox.com/product/7260/"},{"order":"6","bgcolour":"#FFFFFF","fcolour":"#343434","btncolour":"#343434","btnfcolour":"#FFFFFF","image":"","title":"","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","link":"","productid":"7260","productname":"BB8","productprice":"£109.99","productlink":"http://www.firebox.com/product/7260/"}]},{"title":"Slice","type":"slice","inputs":[{"order":"7","bgcolour":"","fcolour":"","btncolour":"","btnfcolour":"","image":"http://media.firebox.com/i/home/feature/2x2/naga_vodka.jpg","title":"","text":"","link":"http://www.firebox.com","productid":"","productname":"","productprice":"","productlink":""}]},{"title":"Slice End","type":"sliceend","inputs":[{"order":"8","bgcolour":"","fcolour":"","btncolour":"","btnfcolour":"","image":"http://media.firebox.com/i/home/feature/2x2/naga_vodka.jpg","title":"","text":"","link":"http://www.firebox.com","productid":"","productname":"","productprice":"","productlink":""}]}]};
var tabs = {"tab":[{"icon":"content_paste","name":"Brief"},{"icon":"dehaze","name":"Inputs"},{"icon":"code","name":"Code"},{"icon":"crop_original","name":"Templates"},{"icon":"add_box","name":"Add"},{"icon":"save","name":"Save"}]};
var templates = {"templates":[{"name":"Solus","data":"solus","description":"Solus template to promote a single product.","image":""},{"name":"Danger Zone","data":"danger","description":"If a product is in high stock, show reviews and social","image":""}]};


// Main component, receives the json from the server
var Builder = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      tabs: this.props.tabs,
      colourScheme: false,
      currentTab: 4,
      currentOrder: 1,
      showOrder: false,
      showToolbar: true,
      config: false
    };
  },

  // When component update, update the textearea with new syntax
  componentDidUpdate: function() {

    //Get dynamic html
    // var html = React.renderToStaticMarkup(<PreviewPanel data={this.state.data} />);

    //Opening and closing styles and tags
    // html = header + html + footer;

    //Insert all html into textarea
    // document.getElementById("syntax").innerHTML = html;

    // Will now push to PHP rather than react due to responsive emails

  },
  componentDidMount: function() {

      // Get JSON file
      Jquery.getJSON("/json/config.json", function(result){
        this.setState({ config: result });
      }.bind(this))
      .error(function() { console.log("error getting config JSON"); });

  },
  //On change data in inputs on InputPanel component
  onDataChange: function(blockIndex, inputIndex, inputField, inputValue) {

    //Get current data
    var data = this.state.data;

    //Find the exact part of the JSON/array and replace
    data.blocks[blockIndex].inputs[inputIndex][inputField] = inputValue;

    //Set new state and cause re-render
    this.setState({ data: data });
  },

  //Delete a input block
  onDeleteClick: function(blockIndex) {

    //Get current data
    var data = this.state.data;

    //Delete
    delete data.blocks[blockIndex];
    this.setState({ data: data});

  },
  onHeaderChange: function(inputField, inputValue) {

    // Changing the headers rather than blocks
    var config = this.state.config;

    config.data[inputField] = inputValue;

    // Set new data after changes
    this.setState({
      config: config
    });

  },
  onLogoChange: function() {
    var logo = this.state.toggleLogo;

    this.setState({
      toggleLogo: ! logo
    });

  },
  handleCurrentOrder: function(event) {
    // Allows you to change placement order
    this.setState({ currentOrder: event.target.value });
  },
  handleToggle: function() {
    // Turn the toolabr on and off to test responsive
    this.setState({
      showToolbar: ! this.state.showToolbar
    });
  },
  handleAddBlock: function(type) {
    var data = this.state.data;
    var order = this.state.currentOrder;

    if(type == "hero") {
      data.blocks.splice(order,0, hero);
    }
    if(type == "link") {
      data.blocks.splice(order,0, link);
    }
    if(type == "column") {
      data.blocks.splice(order,0, column);
    }
    if(type == "top10") {
      data.blocks.splice(order,0, top10);
    }
    if(type == "slice") {
      data.blocks.splice(order,0, slice);
    }
    if(type == "sliceend") {
      data.blocks.splice(order,0, sliceend);
    }
    if(type == "text") {
      data.blocks.splice(order,0, text);
    }
    if(type == "feature") {
      data.blocks.splice(order,0, feature);
    }
    if(type == "productleft") {
      data.blocks.splice(order,0, productleft);
    }
    if(type == "productright") {
      data.blocks.splice(order,0, productright);
    }

    this.setState({ data: data });

  },
  handleTemplate: function(name) {

    var data = this.state.data;

    if(name == "solus") {
        data.blocks = solus.blocks;
    }

    this.setState({ data: data });
  },
  handleSend: function() {

  },
  handleSave: function() {
    // Save data into database
    console.log(data);
  },
  handleTab: function(i, name, icon) {

    this.setState({
        currentTab: i
    });

  },
  handleCard: function(card) {
    var config = this.state.config;

    if(config.data.cards) {
      config.data.cards.splice(1,0, card);
    } else {
      config.data.cards = [];
      config.data.cards.push(card);
      //console.log(card);
    }

    this.setState({
        config: config
    });


  },
  render: function () {

      return (
          <div>
            {this.state.showToolbar &&
              [<div className="options" >

                {this.props.tabs.tab.map(function(tab, i) {
                    return <Tab handleTab={this.handleTab} key={i} no={i} name={tab.name} icon={tab.icon} tab={this.state.currentTab} />
                }.bind(this))}

              </div>,

              <div className={"sidebar " + ((this.state.currentTab == 0)? 'active' : '')}>
                <BriefPanel data={this.state.data} config={this.state.config} onDataChange={this.onDataChange} onHeaderChange={this.onHeaderChange} />
              </div>,

              <div className={"sidebar " + ((this.state.currentTab == 1) ? 'active' : '')}>
                <Cards data={this.state.data} config={this.state.config} onDataChange={this.onDataChange} onDeleteClick={this.onDeleteClick} onHeaderChange={this.onHeaderChange} toggleLogo={this.onLogoChange}/>
              </div>,

              <div className={"colour-scheme " + ((this.state.currentTab == 2) ? 'active' : '')}  id="colour-scheme">
                <span className="colour-scheme__colour red">Red #EF353D</span>
                <span className="colour-scheme__colour cyan">Cyan #7EC0BF</span>
                <span className="colour-scheme__colour gold">Gold #E4A706</span>
                <span className="colour-scheme__colour turquoise">Turqouise #23AE8f</span>
                <span className="colour-scheme__colour green">Green #53A270</span>
                <span className="colour-scheme__colour grey">Grey #585858</span>
                <span className="colour-scheme__colour charcoal">Charcoal #343434</span>
                <span className="colour-scheme__colour off-grey">Off Grey #908B80</span>
                <span className="colour-scheme__colour black">Black #000000</span>
                <span className="colour-scheme__colour white">White #FFFFFF</span>
                <span className="colour-scheme__colour facebook">Facebook #3B5998</span>
                <span className="colour-scheme__colour secure">Secure #8EE797</span>
                <span className="colour-scheme__colour paypal">Friend #C6F0F4</span>
              </div>,

              <div className={"sidebar " + ((this.state.currentTab == 3) ? 'active' : '')}>
                <h4>Select a template</h4>
                <button onClick={this.handleTemplate.bind(this, "solus")}>Solus</button>
              </div>,

              <div className={"sidebar " + ((this.state.currentTab == 4) ? 'active' : '')}>
                <div className="sidebar__card">
                    <div className="sidebar__card-title">
                      <h4>Add a new block</h4>
                      <input type="text" className="form-control" defaultValue={this.state.currentOrder} onChange={this.handleCurrentOrder} />
                    </div>
                </div>,

                <div className="options-add">
                  <div className="sidebar__flex">
                    <div className="sidebar__card">
                      {this.state.config &&
                        this.state.config.mastercards.map(function(card, i) {
                            return <Add mastercard={card} key={i} id={i} onSelectCard={this.handleCard}/>
                        }.bind(this))
                      }
                    </div>
                  </div>
                </div>,

              </div>

            ]}

            <div className="toggle-toolbar">
              <a className="btn btn-primary" onClick={this.handleToggle}>
                Toggle
              </a>
            </div>

            <div className={this.state.showToolbar ? "preview-panel toggle" : "preview-panel" }>
                <Preview config={this.state.config} showOrder={this.state.showOrder} toggleLogo={this.state.toggleLogo} />
            </div>

          </div>
      );
  }
});

React.render(<Builder data={data} tabs={tabs} />, document.getElementById("builder"));
