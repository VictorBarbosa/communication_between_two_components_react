import * as React from 'react';

export default class ComponentA extends React.Component {
 
  InternalFunction(event) {
    return event.target.value;
  }

  render() {
    return (
      <div style={{ background: 'blue' }}>
        <span>Component A:</span>
        <input
          onKeyUp={event =>
            this.props.ExternalFunction(this.InternalFunction(event))
          }
        />
      </div>
    );
  }
}
