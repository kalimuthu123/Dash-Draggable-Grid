import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import RGL, { WidthProvider ,Responsive } from "react-grid-layout";
import "../assets/dragdash.css"

const ReactGridLayout = WidthProvider(Responsive);

/**
  * GridComponent is an dash component.
 * It takes a property, `id`, and children to
 * displays it.
 */
export default class DashDraggableGrid extends Component {
	
	constructor(props) {
        super(props);

        const layout = this.generateLayout();
        this.makeditable();
        this.state = { 
           layout
           };
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
        this.onLayoutChange = this.onLayoutChange.bind(this);
    }
	
	componentWillMount() {
        this.setState({ layout : this.props.position }); 
        this.makeditable();       
    }
	
	onLayoutChange(layout) {
      this.setState({ layout : layout });
      this.props.setProps({ position: this.state.layout })
    }
	
	 makeditable() {
      if(this.props.editable)
           {
              console.log(this.props.editable,"edit now")
              this.props.setProps({ isDraggable : true ,isResizable : true });
           }
      else {
              this.props.setProps({ isDraggable : false ,isResizable : false });
          }
    }
	
	generateLayout() {
        const p = this.props;
		let childrenlayout = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
        return _.map((childrenlayout), function(item, i) {
          const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
          return {
			x: i * 2,
            y: 0,
            w: 2,
            h: 2,
            i: ( typeof item.key  !== "undefined") ? item.key.toString() : 'test'
          };
        });
      }
	
	
	componentWillReceiveProps(nextProps) { // your code here
        //console.log("nextProps", nextProps);
        if (nextProps.editable){
            this.props.setProps({ isDraggable : true ,isResizable : true });
        }
        else{
           this.props.setProps({ isDraggable : false ,isResizable : false });
        }
    }
	  
	onBreakpointChange(breakpoint, cols) {
        this.setState({
          breakpoint: breakpoint,
          cols: cols
        });
    }
	
    render() {
        const {id, children, position, setProps , editable } = this.props;
        let childrenlayout = Array.isArray(children) ? children : [children];
        let myAttr = {'grid-position': JSON.stringify(this.state.layout) }
        return (
            <div id={id} {...myAttr}  >
                    <ReactGridLayout
                        {...this.props}
                        useCSSTransforms={true}
                        layout={this.state.layout}
                        onBreakpointChange={this.onBreakpointChange}
                        onLayoutChange={this.onLayoutChange}     
                      >
                      {childrenlayout.map((child, index) => (<div key={child.key}>{child}</div>))}
                    </ReactGridLayout>
            </div>
        );
    }
}

DashDraggableGrid.defaultProps = {
	className: "layout",
    items: 50,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 30,
    // This turns off compaction so you can place items wherever.
    verticalCompact: false,
    isDraggable : false,
    isResizable : false,
    // This turns off rearrangement so items will not be pushed arround.
    preventCollision: true
};

DashDraggableGrid.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string,
	
	/**
    * The children components displayed inside the grid.
    */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    
	/**
    * The editing property displayed inside the grid.
    */
    editable :PropTypes.bool,

    /**
     * The layout of the  components displayed inside the grid.
     */
    position : PropTypes.array,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
