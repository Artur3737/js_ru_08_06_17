import React, { Component as ReactComponent } from 'react';

export default (OriginalComponent) => class WrapperComponent extends ReactComponent {
  state = {
    openItemId: null
  };
  
  toggleOpenItem = openItemId => ev => {
    this.setState({
      openItemId: openItemId === this.state.openItemId ? null : openItemId
    })
  };
  
  render() {
    return <OriginalComponent {...this.props} openItemId={this.state.openItemId}
                              toggleOpenItem={this.toggleOpenItem} />
    }
}