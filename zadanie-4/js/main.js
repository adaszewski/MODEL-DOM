const wyslijFormularz = (event) => {
    event.preventDefault();

    let imie = document.querySelector('[name="fname"]');
    let nazwisko = document.querySelector('[name="lname"]');

    console.log(`Imie: ${imie.value}, Nazwisko: ${nazwisko.value}`);
}

let form = document.getElementById('form');

form.addEventListener('submit', wyslijFormularz);