import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';

import dynamic from 'next/dynamic';
import React from 'react';

const FroalaEditor = dynamic(() => import('../../lib/FroalaEditor'), { ssr: false });

const Basic = () => (
  <FroalaEditor
    tag="textarea"
    config={{
      pluginsEnabled: ['align', 'link'],
      language: 'ro',
      events: {
        initialized: function(e) {
          var editor = this;
          console.log('initialized', editor, e);
        },
      },
    }}
  />
)

export default Basic;
