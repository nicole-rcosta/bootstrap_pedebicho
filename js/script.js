registrarPet = document.getElementById('registrarPet');
adotarPet = document.querySelectorAll('.adotarPet');
contatarAgencia = document.getElementById('contatarAgencia');

registrarPet.addEventListener('click', function () {
    Swal.fire('Sucesso!', `O animal foi registrado com sucesso.`, 'success');
});

adotarPet.addEventListener('click', function () {
    Swal.fire({
        title: 'Você tem certeza que deseja adotar este pet?',
        text: "Esta ação é irreversível!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim, adotar!',
        cancelButtonText: 'Cancelar'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Adoção bem-sucedida!', `Olá Mamãe ou Papai de Pet, você acabou de adotar um animal!.`, 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Adoção Cancelada', 'Que pena, você cancelou a adoção!.', 'error');
        }
    });
});

// adotarPet.addEventListener('click', function () {
//     Swal.mixin({
//         customClass: {
//             confirmButton: "btn btn-success",
//             cancelButton: "btn btn-danger"
//         },
//         buttonsStyling: false
//     });
//     swalWithBootstrapButtons.fire({
//         title: "Você tem certeza que deseja adotar este pet?",
//         text: "Esta ação é irreversível.",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonText: "Sim, adotar!",
//         cancelButtonText: "Não, cancelar!",
//         reverseButtons: true
//     }).then((result) => {
//         if (result.isConfirmed) swalWithBootstrapButtons.fire({
//             title: "Adoção bem-sucedida!",
//             text: "Olá Mamãe ou Papai de Pet, você acabou de adotar um animal!",
//             icon: "success"
//         });
//         else if (result.dismiss === Swal.DismissReason.cancel) swalWithBootstrapButtons.fire({
//             title: "Adoção Cancelada!",
//             text: "Que pena, você cancelou a adoção!",
//             icon: "error"
//         });
//     });
// });