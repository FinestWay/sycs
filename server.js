const divs = document.querySelectorAll('.content')
const se = document.getElementById('se')

se.addEventListener('click', () => {
  
})

divs.forEach(div => {
  div.addEventListener('click', () => {
    const id = div.id;
    fetch(`${id}.txt`)
      .then(response => response.text())
      .then(text => {
        div.textContent = text;

        divs.forEach(otherDiv => {
          if (otherDiv !== div) {
            otherDiv.style.display = 'none'
          }
        });
      })
      .catch(error => console.error('Error fetching the file:', error))
  })
})


