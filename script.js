
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#infi-list');
  let itemCount = 0;

  function addItems(n = 1) {
    for (let i = 0; i < n; i++) {
      itemCount++;
      const li = document.createElement('li');
      li.className = 'box';
      li.innerText = `item ${itemCount}`;
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
