describe("Cadastrar usuário", () => {
  const nome = "Nome";
  const sobrenome = "Sobrenome";
  const email = "email@dominio.com";
  const foto = "http://site.jpeg";
  const senha = "123456";

  beforeEach(() => {
    cy.visit("/cadastrar");
  });

  it('Input com "focus" quando acessa a tela de cadastro', () => {
    cy.focused().should("have.id", "nome");
  });

  it("Form com e-mail inválido", () => {
    cy.get("#nome").type(nome).should("have.value", nome);
    cy.get("#sobrenome").type(sobrenome).should("have.value", sobrenome);
    cy.get("#email").type("email").should("have.value", "email");
    cy.get("#foto").type(foto).should("have.value", foto);
    cy.get("#senha").type(senha).should("have.value", senha);
    cy.get("#confirmarSenha")
      .type(senha)
      .should("have.value", senha)
      .type("{enter}");

    cy.get(".alert").should("contain.text", "E-mail inválido.");
  });

  it("Form com foto inválida", () => {
    cy.get("#nome").type(nome).should("have.value", nome);
    cy.get("#sobrenome").type(sobrenome).should("have.value", sobrenome);
    cy.get("#email").type(email).should("have.value", email);
    cy.get("#foto").type("foto").should("have.value", "foto");
    cy.get("#senha").type(senha).should("have.value", senha);
    cy.get("#confirmarSenha")
      .type(senha)
      .should("have.value", senha)
      .type("{enter}");

    cy.get(".alert").should(
      "contain.text",
      "Link de imagem deve ser um link direto de uma imagem JPEG, JPG, GIF ou PNG"
    );
  });

  it("Senha diferente de confirmar senha", () => {
    cy.get("#nome").type(nome).should("have.value", nome);
    cy.get("#sobrenome").type(sobrenome).should("have.value", sobrenome);
    cy.get("#email").type(email).should("have.value", email);
    cy.get("#foto").type(foto).should("have.value", foto);
    cy.get("#senha").type(senha).should("have.value", senha);
    cy.get("#confirmarSenha")
      .type("senha")
      .should("have.value", "senha")
      .type("{enter}");

    cy.get(".alert").should(
      "contain.text",
      `Os campos de "senha" e "confirmar senha" devem ser iguais!`
    );
  });

  it("Cadastrar usuário correto", () => {
    cy.get("#nome").type(nome).should("have.value", nome);
    cy.get("#sobrenome").type(sobrenome).should("have.value", sobrenome);
    cy.get("#email").type(email).should("have.value", email);
    cy.get("#foto").type(foto).should("have.value", foto);
    cy.get("#senha").type(senha).should("have.value", senha);
    cy.get("#confirmarSenha")
      .type(senha)
      .should("have.value", senha)
      .type("{enter}");

    cy.get(".alert").should(
      "contain.text",
      `Seja bem-vindo(a), você é um amante da natureza!`
    );
  });

});
