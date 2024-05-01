function toggleCodeEditor(language) {
    let codeEditors = document.querySelectorAll('.code-editor');
    codeEditors.forEach(function(editor) {
        if (editor.classList.contains(language + '-editor')) {
            editor.classList.toggle('active');
        } else {
            editor.classList.remove('active');
        }
    });
}

function runCode() {
    let htmlCode = document.getElementById('html-input').value;
    let cssCode = document.getElementById('css-input').value;
    let jsCode = document.getElementById('js-input').value;
    var iframe = document.getElementById('output-frame');
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var code = `<html>
                    <head>
                     <meta charset="UTF-8">
                     <style>${cssCode}</style>
                    </head>
                    <body>
                        ${htmlCode}
                        <script>${jsCode}</script>
                    </body>
                </html>`;
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();
}