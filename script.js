const livePreviewFrame = document.getElementById('live-preview');
const htmlEditor = document.getElementById('html');
const cssEditor = document.getElementById('css');
const jsEditor = document.getElementById('js');

function initializeLivePreview() {
  livePreviewFrame.contentWindow.document.body.innerHTML = '';
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', 'live-preview-style');
  livePreviewFrame.contentWindow.document.head.appendChild(styleElement);

  const pagedJsScript = document.createElement('script');
  pagedJsScript.src = 'https://unpkg.com/pagedjs/dist/paged.legacy.polyfill.js';
  livePreviewFrame.contentWindow.document.head.appendChild(pagedJsScript);
}

function updateLiveHTMLPreview(codeEditors) {
  livePreviewFrame.contentWindow.document.body.innerHTML = codeEditors.html.getValue();
}