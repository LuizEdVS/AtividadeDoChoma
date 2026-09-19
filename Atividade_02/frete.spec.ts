import { test, expect } from '@playwright/test';

const casos = [
  {
    cep: '81234567',
    valor: '100',
    esperado: 'Frete: R$ 15,00',
    valido: true,
    classe: 'CEP iniciado por 8'
  },
  {
    cep: '12345678',
    valor: '100',
    esperado: 'Frete: R$ 25,00',
    valido: true,
    classe: 'demais CEPs'
  },
  {
    cep: '12345678',
    valor: '199,99',
    esperado: 'Frete: R$ 25,00',
    valido: true,
    classe: 'abaixo do limite de frete grátis'
  },
  {
    cep: '12345678',
    valor: '200,00',
    esperado: 'Frete grátis',
    valido: true,
    classe: 'limite do frete grátis'
  },
  {
    cep: '81234567',
    valor: '200,01',
    esperado: 'Frete grátis',
    valido: true,
    classe: 'acima do limite de frete grátis'
  },
  {
    cep: '1234567',
    valor: '100',
    esperado: 'Dados inválidos',
    valido: false,
    classe: 'CEP com 7 dígitos'
  },
  {
    cep: '123456789',
    valor: '100',
    esperado: 'Dados inválidos',
    valido: false,
    classe: 'CEP com 9 dígitos'
  },
  {
    cep: '1234ABCD',
    valor: '100',
    esperado: 'Dados inválidos',
    valido: false,
    classe: 'CEP com letras'
  },
  {
    cep: '12345678',
    valor: '0',
    esperado: 'Dados inválidos',
    valido: false,
    classe: 'valor zero'
  },
  {
    cep: '12345678',
    valor: '-1',
    esperado: 'Dados inválidos',
    valido: false,
    classe: 'valor negativo'
  },
  {
    cep: '12345678',
    valor: '100,999',
    esperado: 'Dados inválidos',
    valido: false,
    classe: 'valor com mais de duas casas decimais'
  }
];

for (const caso of casos) {
  test(`frete - ${caso.classe}`, async ({ page }) => {
    await page.goto('/frete');

    await page.getByLabel('CEP').fill(caso.cep);
    await page.getByLabel('Valor do pedido').fill(caso.valor);
    await page.getByRole('button', { name: 'Calcular frete' }).click();

    const resultado = page.locator('#resultado');

    await expect(resultado).toBeVisible();
    await expect(resultado).toHaveText(caso.esperado);
    await expect(resultado).toHaveAttribute(
      'role',
      caso.valido ? 'status' : 'alert'
    );
  });
}
