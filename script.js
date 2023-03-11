fetch('https://upadhayay.github.io/db.json')
  .then(response => response.json())
  .then(data => {
    // Get the array of paper titles
    const paperTitles = data.books.map(paper => paper.title);
    
    // Print the array to the HTML page
    const paperTitlesDiv = document.getElementById('yash');
    paperTitlesDiv.innerText = paperTitles.join(', ')});