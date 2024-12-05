document.addEventListener('DOMContentLoaded', fetchItems);

function fetchItems() {
  fetch('/api/items')
    .then((res) => res.json())
    .then((items) => {
      const itemsDiv = document.getElementById('items');
      itemsDiv.innerHTML = items.map(item => `<p>${item.name}</p>`).join('');
    })
    .catch((err) => console.error(err));
}

function openForm() {
  alert('Form to Add/Edit/Delete Items will appear here.');
}
