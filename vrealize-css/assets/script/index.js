// console.log(window)
// alert("ola mundo")
// const menuEl = document.getElementById('menu')
// const linksEls = document.getElementsByTagName('a')
// const postsEls = document.getElementsByClassName('post')
// const headerButtomEl = document.querySelector('#header bottom')
// const paragraphsEls = document.querySelectorAll('.post p')

// console.log(menuEl)
// console.log(linksEl)
// console.log(postsEls)
// console.log(headerButtomElEls)
// console.log(paragraphsEls)
// console.log()

// const contentEl = document.querySelector("main#content");

// const posts

// const posts = [
//     {
//         id:'1',
//         title: "Bem-vindo à VRealize!",
//         content: `  
//                 <p>
//                     Nossa missão é levar a Realidade Virtual ao próximo nível, oferecendo soluções imersivas para
//                     empresas e consumidores. Desenvolvemos projetos inovadores que integram hardware e software de
//                     última geração para criar experiências mais realistas e interativas.
//                 </p>
//                 <p>
//                     <strong>O que fazemos?</strong><br>
//                     - Criação de ambientes virtuais para educação e entretenimento.<br>
//                     - Desenvolvimento de aplicativos interativos que ampliam o engajamento do usuário.
//                 </p>
//                 <p>
//                     <strong>Visão de Futuro:</strong><br>
//                     Acreditamos que a Realidade Virtual será o principal vetor de inovação em diversas áreas, como
//                     saúde, indústria, educação e entretenimento. Por isso, investimos continuamente em pesquisa e
//                     desenvolvimento para manter nossa posição de vanguarda tecnológica.
//                 </p>
//         `,
//     },
//     {
//         id:'2',
//         title: "Capacitação Profissional em Ambientes Virtuais",
//         content: `
//                 <p>
//                     A Realidade Virtual (VR) vem se destacando como uma solução de treinamento eficiente em diversos
//                     setores profissionais. Em vez de apenas ler manuais ou assistir a vídeos instrutivos, equipes
//                     podem vivenciar situações reais em um ambiente seguro e controlado. Isso permite a identificação
//                     imediata de erros e a prática repetitiva de procedimentos críticos.
//                 </p>
//                 <p>
//                     <strong>Por que investir em treinamento VR?</strong><br>
//                     • <em>Redução de custos:</em> você diminui despesas com deslocamento, hospedagem e equipamentos
//                     físicos. Os treinamentos podem ser atualizados com mais facilidade, já que não é necessário criar
//                     material didático físico ou alugar espaços.<br>
//                     • <em>Realismo e segurança:</em> em situações de risco ou emergência, é possível simular cenários
//                     extremos sem expor as pessoas a perigos reais, acelerando a curva de aprendizagem.<br>
//                     • <em>Maior engajamento:</em> a experiência interativa mantém os participantes mais atentos e
//                     motivados a aprender, resultando em maior retenção de conhecimento.
//                 </p>
//                 <p>
//                     <strong>Visão de Futuro:</strong><br>
//                     A tendência é que as corporações adotem cada vez mais plataformas virtuais personalizadas,
//                     incorporando Inteligência Artificial para analisar o desempenho individual de cada participante.
//                     Em breve, será comum que os colaboradores tenham acesso a treinamentos contínuos em VR,
//                     atualizando-se de forma dinâmica conforme novas tecnologias e processos surgem no mercado.
//                 </p>
//         `,
//     },
//     {
//         id:'3',
//         title: "Marketing e Branding no Mundo Virtual",
//         content: `
//                 <p>
//                     O Marketing em Realidade Virtual está redefinindo a maneira como as marcas se conectam com seu
//                     público-alvo. Por meio de experiências imersivas, é possível gerar lembranças mais fortes e
//                     estabelecer uma conexão emocional com o consumidor. Em vez de uma simples apresentação de produto,
//                     o cliente pode “entrar” em uma narrativa, explorando diferentes cenários e funcionalidades de forma
//                     interativa.
//                 </p>
//                 <p>
//                     <strong>Estratégias que vêm se destacando:</strong><br>
//                     • <em>Showrooms virtuais:</em> empresas de varejo e automotivas permitem ao consumidor
//                     “experimentar”
//                     produtos sem sair de casa, configurando itens e visualizando detalhes em 360°.<br>
//                     • <em>Eventos e feiras digitais:</em> marcas criam ambientes virtuais para lançar produtos,
//                     permitindo que pessoas do mundo todo participem sem limitações geográficas.<br>
//                     • <em>Conteúdos patrocinados interativos:</em> a imersão torna a publicidade mais atrativa,
//                     aumentando a taxa de conversão e melhorando a percepção de valor.
//                 </p>
//                 <p>
//                     <strong>Visão de Futuro:</strong><br>
//                     A expectativa é de que, com a popularização dos dispositivos de VR e o aprimoramento das conexões
//                     de internet (5G, 6G e além), as empresas passem a investir cada vez mais em ambientes virtuais
//                     personalizados. As campanhas publicitárias vão buscar não apenas impactar, mas envolver o usuário
//                     em experiências sensoriais completas, mudando para sempre o conceito de marketing e propaganda.
//                 </p>
//         `,
//     },
// ];

// function addPost(post) {
//     const articleEl = document.createElement("article");
//     // articleEl.classList.add = ("post");
//     articleEl.className = "post";
//     const headerEl = document.createElement("header");
//     headerEl.className = "post-header";
//     const postContentEl = document.createElement("selection");
//     postContentEl.className = "post-header";

//     articleEl.appendChild(headerEl);
//     articleEl.appendChild(postContentEl);
//     contentEl.appendChild(articleEl)

// }

// addPost(posts[0])

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuButton.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu nav ul li a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 600) {
      menu.classList.remove('active');
      menuButton.classList.remove('active');
    }
  });
});


const posts = [
    {
      title: "Capacitação Profissional em Ambientes Virtuais",
      image: "./assets/images/trabalhoVr.jpeg",
      alt: "Treinamento em Realidade Virtual",
      content: `<p>A Realidade Virtual (VR) vem se destacando como uma solução de treinamento eficiente em diversos setores profissionais. Em vez de apenas ler manuais ou assistir a vídeos instrutivos, equipes podem vivenciar situações reais em um ambiente seguro e controlado. Isso permite a identificação imediata de erros e a prática repetitiva de procedimentos críticos.</p>
      <p><strong>Por que investir em treinamento VR?</strong><br>
      • <em>Redução de custos:</em> você diminui despesas com deslocamento, hospedagem e equipamentos físicos.<br>
      • <em>Realismo e segurança:</em> é possível simular cenários extremos sem expor as pessoas a perigos reais.<br>
      • <em>Maior engajamento:</em> a experiência interativa resulta em maior retenção de conhecimento.</p>
      <p><strong>Visão de Futuro:</strong><br>
      Empresas passarão a oferecer treinamentos contínuos em VR, atualizando-se conforme novas tecnologias surgem.</p>`
    },
    {
      title: "Marketing e Branding no Mundo Virtual",
      image: "./assets/images/marketingVr.jpeg",
      alt: "Estratégias de Marketing em VR",
      content: `<p>O Marketing em VR está redefinindo a conexão das marcas com seu público. Experiências imersivas geram lembranças fortes e uma conexão emocional com o consumidor.</p>
      <p><strong>Estratégias em destaque:</strong><br>
      • <em>Showrooms virtuais</em> para experimentar produtos.<br>
      • <em>Eventos digitais</em> que eliminam barreiras geográficas.<br>
      • <em>Conteúdos interativos</em> que aumentam a conversão.</p>
      <p><strong>Visão de Futuro:</strong><br>
      As campanhas publicitárias passarão a envolver o usuário em experiências sensoriais completas.</p>`
    },
    {
      title: "Games e Entretenimento: A Nova Fronteira da Imersão",
      image: "./assets/images/jogosVr.webp",
      alt: "Jogos em Realidade Virtual",
      content: `<p>A possibilidade de “entrar” na história de um jogo redefine o conceito de diversão. Os controles avançados traduzem movimentos reais para ações no ambiente virtual.</p>
      <p><strong>Destaques:</strong><br>
      • <em>Imersão total</em> com campo de visão em 360°.<br>
      • <em>Jogabilidade inovadora</em> com movimentos reais.<br>
      • <em>Interação social</em> que aproxima jogadores globalmente.</p>
      <p><strong>Visão de Futuro:</strong><br>
      Novas tecnologias, como haptic feedback, prometem tornar a experiência ainda mais realista.</p>`
    },
    {
      title: "Saúde e Reabilitação com Realidade Virtual",
      image: "./assets/images/saudeVr.webp",
      alt: "Reabilitação em Realidade Virtual",
      content: `<p>A VR transforma a área da saúde, oferecendo alternativas terapêuticas inovadoras. Pacientes realizam exercícios em ambientes digitais que estimulam a interação.</p>
      <p><strong>Aplicações:</strong><br>
      • <em>Fisioterapia</em> com simulações de exercícios.<br>
      • <em>Tratamento de fobias</em> em ambientes controlados.<br>
      • <em>Treinamento profissional</em> com modelos virtuais.</p>
      <p><strong>Visão de Futuro:</strong><br>
      A VR se tornará parte essencial dos tratamentos, tornando a medicina mais acessível e personalizada.</p>`
    }
  ];
  
  const container = document.getElementById('posts-container');
  posts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'post';
    article.innerHTML = `
      <header><h2>${post.title}</h2></header>
      <div class="image-placeholder">
        <img src="${post.image}" alt="${post.alt}">
      </div>
      <section>${post.content}</section>
    `;
    container.appendChild(article);
  });
  
