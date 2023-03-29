const editor = document.getElementById('editor');

editor.addEventListener('keydown', (event) => {
    // Check if Enter key is pressed
    if (event.keyCode === 13) {
        // Prevent default behavior (inserting a line break)
        event.preventDefault();

        // Get the text entered by the user
        const text = editor.innerText;

        // Do something with the text (e.g., send it to a server, display it on the page, etc.)
        console.log(text);

        // Clear the editor
        editor.innerText = '';
    }
});

window.addEventListener('load', () => {
    editor.focus();
  });




