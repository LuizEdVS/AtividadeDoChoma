Nó 1: Início e desconto = 0  
Nó 2: valor >= 500?  
Nó 3: desconto = 10  
Nó 4: clienteVip?  
Nó 5: desconto += 5  
Nó 6: !pagamentoAprovado?  
Nó 7: return "PAGAMENTO RECUSADO"  
Nó 8: Calcula valorFinal e retorna "PEDIDO APROVADO"  
Nó 9: Fim

1. valor >= 500
2. clienteVip
3. !pagamentoAprovado

```text
            [1] Início
                 |
                 v
        [2] valor >= 500?
           /           \
        Sim             Não
         |               |
         v               |
 [3] desconto = 10       |
         \               /
          v             v
         [4] clienteVip?
           /          \
        Sim            Não
         |              |
         v              |
 [5] desconto += 5      |
         \              /
          v            v
 [6] !pagamentoAprovado?
          /          \
       Sim            Não
        |              |
        v              v
[7] PAGAMENTO      [8] calcula
    RECUSADO           valorFinal
        |              |
        \              /
         v            v
             [9] Fim
```

O return "PAGAMENTO RECUSADO" encerra o método antes do cálculo do valor final.

N = 9

E = 11

V(G) = E - N + 2
V(G) = 11 - 9 + 2
V(G) = 4

V(G) = decisões + 1
V(G) = 3 + 1
V(G) = 4

Complexidade ciclomática = 4

Caminho 1
1 → 2(Não) → 4(Não) → 6(Sim) → 7 → 9

Entradas:

valor = 100
clienteVip = false
pagamentoAprovado = false

Resultado:

PAGAMENTO RECUSADO

Caminho 2

1 → 2(Não) → 4(Não) → 6(Não) → 8 → 9

Entradas:

valor = 100
clienteVip = false
pagamentoAprovado = true

Desconto:

0%

Resultado:

PEDIDO APROVADO: 100.0

Caminho 3

1 → 2(Sim) → 3 → 4(Não) → 6(Não) → 8 → 9

Entradas:

valor = 500
clienteVip = false
pagamentoAprovado = true

Desconto:

10%

Cálculo:

500 - 50 = 450

Resultado:

PEDIDO APROVADO: 450.0

Caminho 4

1 → 2(Não) → 4(Sim) → 5 → 6(Não) → 8 → 9

Entradas:

valor = 100
clienteVip = true
pagamentoAprovado = true

Desconto:

5%

Cálculo:

100 - 5 = 95

Resultado:

PEDIDO APROVADO: 95.0

Quantas combinações são possíveis?

Como existem três condições com duas possibilidades cada:
2 × 2 × 2 = 8 combinações

O número de combinações é igual à complexidade ciclomática?
Não. Existem 8 combinações possíveis, mas a complexidade ciclomática é 4.

Como o return altera o gráfico?
Quando o pagamento não é aprovado, o método retorna imediatamente "PAGAMENTO RECUSADO" e não executa os próximos comandos.

É possível calcular valorFinal com pagamento recusado?
Não. O return encerra o método antes desse cálculo.

1. Blocos básicos

Nó 1: Início, alertas = 0 e i = 0  
Nó 2: i < temperaturas.length?  
Nó 3: temperaturas[i] < 0?  
Nó 4: alertas += 2  
Nó 5: temperaturas[i] > 35?  
Nó 6: alertas++  
Nó 7: i++  
Nó 8: return alertas  
Nó 9: Fim

Existem três decisões:

1. i < temperaturas.length
2. temperaturas[i] < 0
3. temperaturas[i] > 35

```text
            [1] Início
                |
                v
     [2] i < temperaturas.length?
          /                \
       Sim                  Não
        |                    |
        v                    v
 [3] temperatura < 0?   [8] return alertas
      /          \              |
    Sim           Não           v
     |             |          [9] Fim
     v             v
[4] alertas += 2 [5] temperatura > 35?
     |           /             \
     |         Sim              Não
     |          |                |
     |          v                |
     |     [6] alertas++         |
     |          |                |
     \----------+----------------/
                |
                v
             [7] i++
                |
                v
         volta para [2]
```

N = 9
E = 11

V(G) = E - N + 2
V(G) = 11 - 9 + 2
V(G) = 4

V(G) = decisões + 1
V(G) = 3 + 1
V(G) = 4

Caminho 1 — vetor vazio
Entrada:
new double[] {}

Caminho:
1 → 2(Não) → 8 → 9

Resultado:
0

O laço não executa nenhuma vez.

Caminho 2 — temperatura negativa
Entrada:
new double[] {-5}

Caminho:
1 → 2(Sim) → 3(Sim) → 4 → 7 → 2(Não) → 8 → 9

Resultado:
2

Caminho 3 — temperatura acima de 35
Entrada:
new double[] {36}

Caminho:
1 → 2(Sim) → 3(Não) → 5(Sim) → 6 → 7 → 2(Não) → 8 → 9

Resultado:
1

Caminho 4 — temperatura normal
Entrada:
new double[] {20}

Caminho:
1 → 2(Sim) → 3(Não) → 5(Não) → 7 → 2(Não) → 8 → 9

Resultado:
0

Para testar o limite inferior:
new double[] {0}

Resultado:
0
O valor 0 não é menor que zero.

Para testar o limite superior:
new double[] {35}

Resultado:
0
O valor 35 não é maior que 35.

Com:
new double[] {36}

Resultado:
1

Um vetor com várias temperaturas percorre um único caminho?
Não exatamente. Durante uma execução, o programa pode repetir várias vezes a parte interna do grafo por causa do while.

Qual entrada permite sair sem acessar nenhuma posição do vetor?
new double[] {}

Como o tamanho é zero, a condição do while é falsa logo no começo.

O que os valores 0 e 35 testam?
Eles verificam as fronteiras das condições:
temperatura < 0
temperatura > 35
O valor 0 ainda é considerado normal e o valor 35 também.

Por que o else if é uma nova decisão?
Porque ele possui duas possibilidades próprias:
temperatura > 35 → verdadeiro
temperatura > 35 → falso
Por isso precisa aparecer como outro nó de decisão no gráfico.

Por que o retorno do laço precisa aparecer no CFG?
Porque após executar i++, o programa volta para verificar novamente a condição do while.
Esse retorno mostra que o bloco pode ser executado várias vezes.
