class Professor extends Usuario {
  constructor(nome, email, senha, materias) {
    super(nome, email, senha);
    this.materias = materias;
  }

  exibirPerfil() {
    super.exibirPerfil();

    const container = document.getElementById("perfil");
    const lista = this.materias.join(", ");
    const infoMat = `Matérias: ${lista}`;

    if (container) {
      container.innerHTML += `<p>${infoMat}</p>`;
    } else {
      console.log(infoMat);
    }
  }
}
