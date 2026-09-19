import { test, expect } from '@playwright/test';

const casos = [
  {
    senha: 'Abcdefg1',
    confirmacao: 'Abcdefg1',
    esperado: 'Senha cadastrada',
    valido: true,
    classe: 'limite mínimo de 8 caracteres'
  },
  {
    senha: 'Abcdefgh1',
    confirmacao: 'Abcdefgh1',
    esperado: 'Senha cadastrada',
    valido: true,
    classe: 'senha válida'
  },
  {
    senha: 'Abcdefghijklmnopqrs1',
    confirmacao: 'Abcdefghijklmnopqrs1',
    esperado: 'Senha cadastrada',
    valido: true,
    classe: 'limite máximo de 20 caracteres'
  },
  {
    senha: 'Abcdef1',
    confirmacao: 'Abcdef1',
    esperado: 'Senha fora do padrão',
    valido: false,
    classe: '7 caracteres - abaixo do mínimo'
  },
  {
    senha: 'Abcdefghijklmnopqrst1',
    confirmacao: 'Abcdefghijklmnopqrst1',
    esperado: 'Senha fora do padrão',
    valido: false,
    classe: '21 caracteres - acima do máximo'
  },
  {
    senha: 'abcdefg1',
    confirmacao: 'abcdefg1',
    esperado: 'Senha fora do padrão',
    valido: false,
    classe: 'sem letra maiúscula'
  },
  {
    senha: 'ABCDEFG1',
    confirmacao: 'ABCDEFG1',
    esperado: 'Senha fora do padrão',
    valido: false,
    classe: 'sem letra minúscula'
  },
  {
    senha: 'Abcdefgh',
    confirmacao: 'Abcdefgh',
    esperado: 'Senha fora do padrão',
    valido: false,
    classe: 'sem número'
  },
  {
    senha: 'Abc def1',
    confirmacao: 'Abc def1',
    esperado: 'Senha fora do padrão',
    valido: false,
    classe: 'senha com espaço'
  },
  {
    senha: 'Abcdefg1',
    confirmacao: 'Abcdefg2',
    esperado: 'As senhas não coincidem',
    valido: false,
    classe: 'confirmação diferente'
  },
  {
    senha: '',
    confirmacao: '',
    esperado: 'Senha fora do padrão',
    valido: false,
    classe: 'senha vazia'
  }
];

for (const caso of casos) {
  test(`senha - ${caso.classe}`, async ({ page }) => {
    await page.goto('/senha');

    await page.getByLabel('Nova senha').fill(caso.senha);
    await page.getByLabel('Confirmar senha').fill(caso.confirmacao);
    await page.getByRole('button', { name: 'Cadastrar senha' }).click();

    const resultado = page.locator('#resultado');

    await expect(resultado).toBeVisible();
    await expect(resultado).toHaveText(caso.esperado);
    await expect(resultado).toHaveAttribute(
      'role',
      caso.valido ? 'status' : 'alert'
    );
  });
}
