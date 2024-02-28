function countWords() {
    let text = document.getElementById(
     'textArea').value;
    let wordCount = 0;
   
    if (text.trim() === '') {
     wordCount = 0;
    } else {
     wordCount = text.trim().split(/s+/)
      .length;
    }
   
    document.getElementById('wordCount')
     .textContent = 'Word count: ' +
     wordCount;
   }