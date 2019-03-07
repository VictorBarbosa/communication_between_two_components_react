import * as React from 'react';
export default class ComponentB extends React.Component {
 
  render() {
    return (
      <div style={{ background: 'red' }}>
        <span>Component B:</span>
        <input type="text"
        onChange={(e)=>
          e.preventDefault()
        
      }
        
        value={this.props.valueFromOut} />
      </div>
    );
  }
}
