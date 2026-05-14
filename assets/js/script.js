registrarPet = document.getElementsById('registrarPet');
inputEsp = document.getElementById('inputEsp');
especiePet = inputEsp.value;

adotarPet = document.getElementById('adotarPet');
nomePet = document.getElementById('nomePet');

registrarPet.addEventListener('click', function () {
    Swal.fire('Sucesso!', `O(a) ${especiePet} foi registrado com sucesso.`, 'success');
});

adotarPet.addEventListener('click', function () {
    Swal.fire('Sucesso!', `O(a) ${especiePet} foi registrado com sucesso.`, 'success');
});

adotarPet.addEventListener('click', function () {
    Swal.fire({
        title: 'Você tem certeza que deseja adotar este pet?',
        text: "Esta ação é irreversível!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim, prosseguir!',
        cancelButtonText: 'Cancelar'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Sucesso!', `Você adotou o ${nomePet}.`, 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Adoção Cancelada', 'A adoção foi cancelada.', 'error');
        }
    });
});