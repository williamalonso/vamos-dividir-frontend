describe('Exemplo de teste no Next.js com Cypress e TypeScript', () => {

  it('deve carregar a página inicial', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Hello World!');
  });

  it('deve clicar no botão de login', () => {
    // Va para a página inicial
    cy.visit('http://localhost:3000');
    // Verifique e clique na âncora "Ir para Login"
    cy.get('a').contains('Ir para Login').click();
    // Verifique se a URL mudou para a página de login
    cy.url().should('include', '/login');
  });

  it('deve clicar no botão de home', () => {
    // Va para a página inicial
    cy.visit('http://localhost:3000');
    // Verifique e clique na âncora "Ir para Home"
    cy.get('a').contains('Ir para Home').click();
    // Verifique se a URL mudou para a página inicial
    cy.url().should('include', '/home');
  });
});
