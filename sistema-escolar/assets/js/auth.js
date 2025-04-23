const usuarios = [
  new Aluno("Ana Silva", "ana.silva@alpar.com.br", "senha1", "A1"),
  new Aluno("Bruno Souza", "bruno.souza@alpar.com.br", "senha2", "A1"),
  new Aluno("Carla Oliveira", "carla.oliveira@alpar.com.br", "senha3", "A2"),
  new Aluno("Daniel Costa", "daniel.costa@alpar.com.br", "senha4", "A2"),
  new Aluno("Elaine Pereira", "elaine.pereira@alpar.com.br", "senha5", "B1"),

  new Professor("Carlos Reis", "carlos.reis@alpar.com", "senha6", ["Matemática", "Física"]),
  new Professor("Diana Luz", "diana.luz@alpar.com", "senha7", ["História", "Geografia"]),
  new Professor("Eduardo Lima", "eduardo.lima@alpar.com", "senha8", ["Química", "Biologia"]),
  new Professor("Fernanda Alves", "fernanda.alves@alpar.com", "senha9", ["Português", "Literatura"]),
  new Professor("Gabriel Rocha", "gabriel.rocha@alpar.com", "senha10", ["Artes", "Sociologia"])
];

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const erroEl = document.getElementById("error");

  const user = usuarios.find(u => u.email === email && u.senha === senha);

  if (user) {
    const payload = {
      tipo: user instanceof Aluno ? "aluno" : "professor",
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      turma: user instanceof Aluno ? user.turma : undefined,
      materias: user instanceof Professor ? user.materias : undefined
    };

    localStorage.setItem("usuarioLogado", JSON.stringify(payload));
    window.location.href = "profile.html";
  } else {
    erroEl.textContent = "Email ou senha incorretos.";
  }
});

console.log("=== Teste de exibirPerfil no console ===");
new Aluno("Pedro Teste", "p@t.com", "t1", "1C").exibirPerfil();
new Professor("Maria Teste", "m@t.com", "t2", ["Química"]).exibirPerfil();
