const App = () => {
  return (
    <div>
      <h4 class="title">PLANO DE ENSINO</h4>
      <TableMaterias />
      <Ementa />
      <Lists />
      <Procedimentos />
      <Recursos />
      <Bibliografia />
      <Notas />
    </div>
  );
}

const TableMaterias = () => {
  return (
    <div>
      <table>
        <tr>
          <td><b>CURSO(S)</b></td>
          <td>
            <b>
              1904 - Ciência da Computação <br></br>
              1902 - Tecnologia em Análise e Desenvolvimento de Sistemas <br></br>
              1905 - Engenharia de Computação <br></br>
              1906 - Engenharia de Software <br></br>
              1907 - Sistemas de Informação <br></br>
            </b>
          </td>
        </tr>

        <tr>
          <td><b>PROFESSOR/A:</b></td>
          <td><b>Ricardo Masao Kondo</b></td>
        </tr>

        <tr>
          <td><b>NOME DA DISCIPLINA:</b></td>
          <td><b>Programação para Web</b></td>
        </tr>

        <tr>
          <td><b>CÓDIGO DA DISCIPLINA:</b></td>
          <td><b>1919.000.414-5</b></td>
        </tr>

        <tr>
          <td><b>CH PRESENCIAL:</b></td>
          <td><b>64</b></td>
        </tr>

        <tr>
          <td><b>CH A DISTÂNCIA:</b></td>
          <td><b>4</b></td>
        </tr>
      </table>
    </div>
  );
}

const Lists = () => {
  return (
    <div>
      <h4>PROGRAMA:</h4>    
      <h5>Tópico I: Introdução à Programação para Web</h5> 
      <ul>
        ➔ Conceitos Gerais e Histórico; <br></br>
        ➔ Definição de Hipertexto, Multimídia e Hipermídia; <br></br>
        ➔ Caracterização de hipermídia e multimídia, com suas diferenciações, aplicações, pontos fortes e fracos; <br></br>
        ➔ Fundamentos de nós, ligações, atributos, estruturas, interação com o usuário. <br></br>
      </ul>
      <h5>Tópico II: Engenharia Web</h5> 
      <ul>
        ➔ Padrões Web; <br></br>
        ➔ Interação Humano Computador na Web; <br></br>
        ➔ Usabilidade na Web. <br></br>
      </ul>
      
      <h5>Tópico III: Linguagens de Marcação</h5>
      <ul>
        ➔ HTML e CSS; <br></br>
        ➔ Semântica e Design Tableless; <br></br>
        ➔ Design responsivo e experiência do usuário; <br></br>
        ➔ XML e XHTML; <br></br>
        ➔ DTD e XSD;  <br></br>
        ➔ HTML5;  <br></br>
        ➔ Frameworks.  <br></br>
      </ul>
    
      <h5>Tópico IV: Linguagens de Script para Documentos Web</h5>
      <ul>
        ➔ JavaScript e Introdução à Programação Funcional; <br></br>
        ➔ HTML DOM; <br></br>
        ➔ JSON e Ajax; <br></br>
        ➔ Frameworks. <br></br>
      </ul>
      <h5>Tópico V: Introdução a Arquitetura de Software</h5>
      <ul>
        ➔ Padrão Arquitetural em 3 Camadas; <br></br>
        ➔ MVC e suas derivações. <br></br>
        Tópico VI: Introdução à Linguagens de Programação Web <br></br>
        ➔ Estado da arte; <br></br>
        ➔ Principais linguagens de programação Web <br></br>
      </ul>
      <h5>Tópico VII: PHP</h5>
      <ul>
        ➔ A linguagem PHP; <br></br>
        ➔ Orientação a Objetos em PHP <br></br>
        ➔ Acesso a banco de dados; <br></br>
        ➔ Frameworks. <br></br>
      </ul>
      <h5>Tópico VIII: Introdução à Web Services e Arquitetura Orientada a Serviços</h5>
      <ul>
        ➔ O que são Web Services; <br></br>
        ➔ Arquitetura orientada a serviços; <br></br>
      </ul>
      <h5>Tópicos Especiais:</h5>
      <ul>
        ➔ Java para web <br></br>
        ➔ JavaScript no lado servidor com NodeJS <br></br>
        ➔ Otimização para motores de busca (SEO) <br></br>
      </ul>
      <hr></hr>
    </div>
  );
}

const Ementa = () => {
  return (
    <div>
      <div>
        <h4>EMENTA:</h4>
        <p>
          Introdução à Programação para Web. Introdução a arquitetura cliente servidor. Revisão dos protocolos utilizados para a
          Web. Linguagens de marcação. Interfaces de usuário: estilização, usabilidade e acessibilidade, design responsivo.
          Padrões para interoperabilidade de dados. Introdução a Arquitetura de Software e estilos arquiteturais mais usados na
          Web. Prática em programação web.
        </p>
        <hr></hr>
      </div>
      <div>
        <h4>OBJETIVO:</h4>
        <p>
          Propiciar o contato dos alunos com os aspectos relacionados à criação e produção de aplicações Web. Fornecer uma
          visão geral das atividades, técnicas, métodos e ferramentas relacionados ao projeto de aplicações Web. Fornecer
          fundamentos de hipermídia: nós, ligações, atributos, estruturas, e interação com o usuário. Apresentar os conceitos,
          tecnologias e plataformas básicas necessárias para o desenvolvimento de sistemas e aplicações Web. Conhecer as
          linguagens de programação Web e aprender as suas filosofias. Conhecer padrões e arquiteturas.
        </p>
        <hr></hr>
      </div>
    </div>
  )
}

const Procedimentos = () => {
  return (
    <div>
      <h4>PROCEDIMENTOS:</h4>
      <p>
        <b>Metodologia da oferta:</b> A disciplina é de 64 horas ofertadas de forma presencial e com 4 horas ofertadas de forma EaD
        com o apoio de ferramentas virtuais de suporte ao aprendizado, como o Ambiente Virtual de Aprendizagem (AVA), para
        compartilhamento e realização de atividades. O plano de ensino, cronograma de aulas, atividades e materiais para
        estudo serão disponibilizados no ambiente virtual. O acesso ao AVA é realizado com passaporte institucional pelo
        endereço <a href="https://ava.ufms.br/.">https://ava.ufms.br/.</a>
      </p>
      <p>
        * Atividades EaD (4h teóricas): Elaboração e apresentação de atividades a serem desenvolvidas pelos alunos.
      </p>
      <p>
        <b>Material Didático:</b> O Material Didático da disciplina será organizado no AVA de acordo com os Tópicos e suas
        respectivas unidades de conteúdo.
      </p>
      <p>
        <b>Tutorial EaD:</b> o acompanhamento das atividades a distância será realizado principalmente no AVA, contudo canais de
        comunicação complementares podem ser disponibilizados à critério do professor.
      </p>
      <p>
        <b>Estratégias didáticas:</b> A disciplina será ministrada com as seguintes estratégias didáticas, organizadas em momentos
        (reuniões), de acordo com o cronograma da disciplina:
        <ul>
          - Aulas dialogadas. <br></br>
          - Sala de aula invertida. <br></br>
          - Discussões em grupo e fóruns online. <br></br>
          - Desenvolvimento de atividades individuais e em grupo: fóruns, questionários, elaboração de instrumentos de
          observação e projeto. <br></br>
        </ul>
      </p>
      <hr></hr>
    </div>
  )
}

const Recursos = () => {
  return (
    <div>
      <p>
        <h4>RECURSOS:</h4>
        <ul>
          - Ambiente Virtual de Aprendizagem – AVA <br></br>
          - Biblioteca Virtual do AVA <br></br>
          - Fórum <br></br>
          - Wiki <br></br>
          - Atividades de envio de arquivo <br></br>
          - Chats on line <br></br>
          - Artigos científicos <br></br>
          - e-books <br></br>
        </ul>
      </p>
      <hr></hr>
    </div>
  )
}

const Bibliografia = () => {
  return (
    <div>
      <h4>BIBLIOGRAFIA</h4>
      <p>
        <b>Bibliografia Básica:</b>
        <p>
          SEBESTA, ROBERT W. Conceitos de Linguagens de Programação. 9. Ed. Porto Alegre, Rs: Bookman, 2011. 792 P.
          Isbn 9788577807918.
        </p>
        <p>
          PRESSMAN, ROGER S.; LOWE, DAVID BRIAN. Engenharia Web. Rio de Janeiro, Rj: Ltc, 2009. Xiii, 416 P. Isbn
          978-85-216-1696-2.
        </p>
        <p>
          TERUEL, EVANDRO CARLOS. Html 5 Guia Prático. 2. São Paulo Erica 2014 1 Recurso Online. Isbn 9788536519296.
        </p>
        <p>
          BASS, LEN; CLEMENTS, PAUL; KAZMAN, RICK. Software Architecture In Practice. 3Rd Ed. Upper Saddle River, N.j.:
          Addison-wesley, C2013. Xix, 589 P. (Sei Series In Software Engineering). Isbn 9780321815736.
        </p>
        <p>
          BOOCH, GRADY; RUMBAUGH, JAMES; JACOBSON, IVAR. Uml: Guia do Usuário. 2. Ed., Totalmente Rev. e Atual. Rio
          de Janeiro, Rj: Elsevier, 2012. Xxvii, 521 P. Isbn 9788535217841.
        </p>
      </p>
      <p>
        <b>Bibliografia complementar</b>
        <p>
          MILETTO, EVANDRO MANARA; BERTAGNOLLI, SILVIA DE CASTRO (ORG.). Desenvolvimento de Software Ii:
          Introdução ao Desenvolvimento Web com Html, Css, Javascript e Php. Porto Alegre, Rs: Bookman, 2014. X, 266 P. Isbn
          9788582601952.
        </p>
        <p> 
          MACHADO, RODRIGO PRESTES. Desenvolvimento de Software, V.3 Programação de Sistemas Web Orientada a
          Objetos em Java. Porto Alegre Bookman 2016 1 Recurso Online (Tekne). Isbn 9788582603710.
          ALVES, WILLIAM PEREIRA. Java para Web Desenvolvimento de Aplicações. São Paulo Erica 2015 1 Recurso Online
          Isbn 9788536519357.
        </p>
        <p>
          FLANAGAN, DAVID. Javascript o Guia Definitivo. 6. Porto Alegre Bookman 2014 1 Recurso Online Isbn
          9788565837484.
          ROSSI, GUSTAVO et al. Web Engineering: Modelling And Implementing Web Applications. London, Gb: Springer,
          2008-2010. 461 P. (Human-computer Interaction Series). Isbn 978-1-84996-677-1.
        </p>
      </p>
      <hr></hr>
    </div>
  )
}

const Notas = () => {
  return (
    <div>
      <div>
        <h4>AVALIAÇÃO:</h4>
        <p>
          A avaliação será realizada por meio de exercícios avaliativos individuais, provas conceituais, desenvolvimento de uma
          aplicação usando os conceitos aprendidos durante a disciplina e do próprio curso e elaboração e apresentação de
          seminários. Adicionalmente, outras atividades podem ser utilizadas como estratégias de recuperação e/ou
          complementação. 
        </p>
        <p>
          Para o correto desenvolvimento das atividades será necessária a instalação de ferramentas automatizadas e o
          desenvolvimento de aplicações.
        </p>
        <p>
          O Ambiente Virtual de Aprendizagem (AVA) será o principal canal de comunicação e avisos. Além disso, todas
          atividades serão configuradas neste ambiente e os feedbacks serão disponibilizados inicialmente nas respectivas
          atividades e posteriormente lançadas no SISCAD.
        </p>
        <p>
          Estas serão realizadas principalmente nas dependências da unidade (laboratórios) podendo, à critério do professor,
          serem desenvolvidas à distância e submetidas no mesmo ambiente.
          Nas atividades indicadas como avaliativas a nota será condicionada à realização e submissão das atividades no AVA.
        </p>
        <hr></hr>
      </div>

      <div>
        <h4>Organização e Cálculo das Notas </h4> <br></br>  
        <p>
        <b>EA (Exercícios Avaliativos)</b> - Atividade semanais a serem realizadas individualmente e submetidas no AVA.
        </p>
        <p>
          <b>Prova 1 (P1)</b> – Prova escrita abordando os tópicos I a V (prevista para 28/04/2023).
        </p>
        <p>
          <b>Prova 1 (P1)</b> – Prova escrita abordando, principalmente, demais tópicos. Ressaltando que o conteúdo é cumulativo e
          conceitos apresentados nos tópicos anteriores são partes essenciais para os tópicos subsequentes (prevista para
          26/06/2023).
        </p>
        <p>
          <b>TP (Trabalho Prático)</b> - Aplicação Web a ser desenvolvida com entregas parciais ao longo do semestre e a ser
          apresentada ao final do semestre.
        </p>
        <p class="media-p">
          <br></br> <b> MA (Média de Aproveitamento) = </b> (2*EA + 4*TP + 2*P1 + 2*P2) / 10 <br></br>
        </p>
    
        <p>
          No caso de não alcançar a média de aproveitamento 6,0 (seis), o acadêmico (a) poderá realizar a avaliação substitutiva,
          na qual será incluída todo o conteúdo do semestre. A <b>PO (Prova Optativa) substituirá a menor nota obtida nas
          provas (i.e., P1 e P2) e está prevista para 30/06/2023.</b>
        </p>
    
        <h4>Atividade Pedagógica de Recuperação de Desempenho em Avaliações:</h4>
        <p>
          Leituras complementares e estudos dirigidos serão propostos aos acadêmicos que apresentarem dificuldade nas
          avaliações. As atividades serão supervisionadas pelo professor e poderão ser de forma individual ou em grupo.
        </p>
      </div>
    </div>
  )
}

export default App;
