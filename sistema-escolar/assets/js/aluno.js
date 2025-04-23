class Aluno extends Usuario {
  constructor(nome, email, senha, turma) {
    super(nome, email, senha);
    this.turma = turma;
  }

  exibirPerfil() {
    super.exibirPerfil();

    const container = document.getElementById("perfil");
    const infoTurma = `Turma: ${this.turma}`;

    if (container) {
      container.innerHTML += `<p>${infoTurma}</p>`;
    } else {
      console.log(infoTurma);
    }
  }
}
