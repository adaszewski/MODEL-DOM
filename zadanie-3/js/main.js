const setBackground = () => {
    let p1 = document.querySelector('.pierwszy');
    let p2 = document.querySelector('.drugi');

    p1.classList.toggle('tlo-red');
    p2.classList.toggle('tlo-yellow');

}

let btnZmienTlo = document.getElementById('zmien-tlo');

btnZmienTlo.addEventListener('click', setBackground);