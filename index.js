var button = document.getElementById('read_button')

button.addEventListener('click', function(){
    var card = document.querySelector('.card')

    card.classList.toggle('active')


    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = 'ler menos';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'ler mais';
})