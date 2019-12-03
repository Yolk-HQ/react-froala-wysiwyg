import FroalaEditorFunctionality from './FroalaEditorFunctionality';
import React from 'react';

export default class FroalaEditorInput extends FroalaEditorFunctionality {

  render () {
    return (
      <input ref={el => this.el = el}/>
    );
  }
}