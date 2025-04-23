class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  exibirPerfil() {
    const container = document.getElementById("perfil");
    const texto = `Nome: ${this.nome}\nEmail: ${this.email}`;

    if (container) {
      container.innerHTML += `<p>${texto.replace(/\n/g, "</p><p>")}</p>`;
    } else {
      console.log(texto);
    }
  }
}
