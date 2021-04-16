describe('Cadastrar usuário', () => {
    it('Acessar tela de cadastro', () => {
        cy.visit('http://localhost:4200/cadastrar');
    });

    it('Input focado', () => {
        cy.focused('have.id', 'nome');
    })
})