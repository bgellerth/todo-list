const input = document.getElementById("add-item-text");
const list = document.querySelector('#todo-list');
const button = document.getElementById("add-item-button");

button.addEventListener('click', () => {
    const li = document.createElement("li");

    li.classList.add('list-item');
    li.innerHTML = `
        <i class="bi bi-circle item-icon"></i>
        <i class="bi bi-check-circle item-icon"></i>
        <span class="item-label" >${input.value}</span>
        <a class="close-button"><i class="bi bi-x"></i></a>
    `;

    if (input.value === '') {
        alert("You must write something!");
    } else {
        list.appendChild(li);
    }
    input.value = "";
});

document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains("list-item")) {
        e.target.classList.toggle('checked');
    }

    if (e.target && e.target.classList.contains("close-button")) {
        e.target.parentElement.remove();
    }
});