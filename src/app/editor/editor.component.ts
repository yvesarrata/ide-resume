import { Component } from '@angular/core';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { basicSetup } from '@codemirror/basic-setup';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  ngAfterViewInit() {
    const customTheme = EditorView.theme(
      {
        '&': {
          color: '#333', // Default text color
          backgroundColor: '#f5f5f5', // Background color
        },
        '.cm-content': {
          caretColor: '#000', // Caret color
        },
        '.cm-gutters': {
          backgroundColor: '#f5f5f5', // Gutter background color
          color: '#aaa', // Gutter text color
          border: 'none', // Remove default border
        },
        // Add more styles as needed...
      },
      { dark: false }
    );

    const state = EditorState.create({
      doc: 'Your sample resume code here...',
      extensions: [basicSetup, customTheme],
    });

    const view = new EditorView({
      state,
      parent: document.getElementById('editor') as HTMLElement,
    });
  }
}
