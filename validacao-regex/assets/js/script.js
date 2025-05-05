const regexNome  = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const regexCpf   = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const form     = document.getElementById('formValida');
const inpNome  = document.getElementById('nome');
const inpEmail = document.getElementById('email');
const inpCpf   = document.getElementById('cpf');
const msgNome  = document.getElementById('msgNome');
const msgEmail = document.getElementById('msgEmail');
const msgCpf   = document.getElementById('msgCpf');

form.addEventListener('submit', e => {
  e.preventDefault();
  const vNome  = validaCampo(inpNome,  regexNome,  msgNome);
  const vEmail = validaCampo(inpEmail, regexEmail, msgEmail);
  const vCpf   = validaCampo(inpCpf,   regexCpf,   msgCpf);
  if (vNome && vEmail && vCpf) {
    alert('Todos os campos estão válidos!');
  }
});

function validaCampo(input, regex, msgEl) {
  const ok = regex.test(input.value.trim());
  input.classList.toggle('is-valid', ok);
  input.classList.toggle('is-invalid', !ok);
  msgEl.textContent = ok ? 'Válido ✓' : 'Inválido ✗';
  msgEl.classList.toggle('text-success', ok);
  msgEl.classList.toggle('text-danger', !ok);
  return ok;
}
