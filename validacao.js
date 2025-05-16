document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-reserva');
  const inputData = document.getElementById('data-nascimento');
  const erroIdade = document.getElementById('erro-idade');

  form.addEventListener('submit', function (e) {
    const dataNascimento = new Date(inputData.value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    const dia = hoje.getDate() - dataNascimento.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
      idade--;
    }

    if (idade < 18) {
      e.preventDefault(); 
      erroIdade.textContent = 'Você deve ter pelo menos 18 anos para fazer uma reserva.';
    } else {
      erroIdade.textContent = '';
    }
  });
});
