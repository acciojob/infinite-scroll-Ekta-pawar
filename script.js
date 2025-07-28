
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#infi-list');
 

  function addItems() {
    for (let i = 1; i < 18; i++) {
     
      const li = document.createElement('li');
      li.className = 'box';
      li.innerText = `item ${[i]}`;
      list.appendChild(li);
    }
  }

  // Start with ~10 items
  addItems(10);

  list.addEventListener('scroll', () => {
    const { scrollTop, clientHeight, scrollHeight } = list;

    // Detect scrolling to bottom (or near it)
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      addItems(2);
    }
  });
});
