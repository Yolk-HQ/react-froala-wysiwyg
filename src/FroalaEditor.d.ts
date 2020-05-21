import * as React from 'react';

export type ToolbarTextButton =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikeThrough'
  | 'subscript'
  | 'superscript'
  | 'fontFamily'
  | 'fontSize'
  | 'textColor'
  | 'backgroundColor'
  | 'inlineClass'
  | 'inlineStyle'
  | 'clearFormatting';

export type ToolbarParagraphButton =
  | 'alignLeft'
  | 'alignCenter'
  | 'formatOLSimple'
  | 'alignRight'
  | 'alignJustify'
  | 'formatOL'
  | 'formatUL'
  | 'paragraphFormat'
  | 'paragraphStyle'
  | 'lineHeight'
  | 'outdent'
  | 'indent'
  | 'quote';

export type ToolbarRichButton =
  | 'insertLink'
  | 'insertImage'
  | 'insertVideo'
  | 'insertTable'
  | 'emoticons'
  | 'fontAwesome'
  | 'specialCharacters'
  | 'embedly'
  | 'insertFile'
  | 'insertHR';

export type ToolbarMiscButton =
  | 'undo'
  | 'redo'
  | 'fullscreen'
  | 'print'
  | 'getPDF'
  | 'spellChecker'
  | 'selectAll'
  | 'html'
  | 'help';

export type ToolbarButton =
  | ToolbarTextButton
  | ToolbarParagraphButton
  | ToolbarRichButton
  | ToolbarMiscButton
  | '|';

interface ToolbarButtonsGroup {
  buttons: ToolbarButton[];
  align: 'left' | 'right';
  buttonsVisible: number;
}

interface FullToolbarButtons {
  moreText: ToolbarButtonsGroup;
  moreParagraph: ToolbarButtonsGroup;
  moreRich: ToolbarButtonsGroup;
  moreMisc: ToolbarButtonsGroup;
}

type FroalaErrorHandler = (error: any, response: any) => void;

interface FroalaEvent {
  which: number;
}

export interface Config {
  key: string;
  [key: string]: any;
  events: {
    initialized(): void;
    'image.error': FroalaErrorHandler | undefined;
    'video.error': FroalaErrorHandler | undefined;
    'file.error': FroalaErrorHandler | undefined;
    edit?: {
      off(): void;
    };
    el?: any;
    keydown?: any;
    events?: any;
    popups?: any;
    $?: any;
  };
  toolbarButtons?: FullToolbarButtons | ToolbarButton[];
}

export interface FroalaEditorProps {
  tag?: string;
  config?: Config;
  model?: string | object | null;
  onModelChange?: object;
  onManualControllerReady?: object;
}

export default class FroalaEditor extends React.Component<FroalaEditorProps> {
  destroy(): void;
  getEditor(): any;
  initialize(): object;
}
