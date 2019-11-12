import FroalaEditorFunctionality from './FroalaEditorFunctionality';
import React from 'react';

export default class FroalaEditorA extends FroalaEditorFunctionality {

  render () {
    return (
      <a ref={el => this.el = el}>{this.props.children}</a>
    );
  }
}