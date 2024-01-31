    const form = document.querySelector('form')
    const aInput = document.getElementById("numA")
    const bInput = document.getElementById("numB")
    const submitButton = document.getElementById("submit-button")

    submitButton.addEventListener("click", function() {
        if (aInput.value && bInput.value) {
        if (parseInt(bInput.value) > parseInt(aInput.value)) {
            alert("Parabéns! O segundo número é maior que o primeiro.");
        } else {
            alert("Infelizmente o segundo número é menor que o primeiro. Tente novamente!");
        }
        } else {
        alert("Por favor, preencha todos os campos.");
        }
    });
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });