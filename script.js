function confirmDate() {
    const datePicker = document.getElementById('datePicker');
    const selectedDate = datePicker.value;

    if (selectedDate) {
        document.querySelector('.container').classList.add('hidden');
        document.getElementById('confirmation').classList.remove('hidden');
    } else {
        alert('Por favor, elige una fecha.');
    }
}

function noThanks() {
    const button = document.querySelector('button[onclick="noThanks()"]');
    moveButtonRandomly(button);
}

function moveButtonRandomly(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    const maxLeft = containerRect.width - button.offsetWidth;
    const maxTop = containerRect.height - button.offsetHeight;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    button.style.position = 'absolute';
    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
}

function selectImage(element) {
    // Remover la clase 'selected' de cualquier otra imagen previamente seleccionada
    const previouslySelected = document.querySelector('.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    // Añadir la clase 'selected' a la imagen actual
    element.classList.add('selected');

    // Redirigir después de una pequeña demora para dar tiempo a que se vea el efecto
    setTimeout(() => {
        window.location.href = 'calendar.html';
    }, 500);
}
