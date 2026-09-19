# Casos de Teste – Sistema de Reserva de Salas

## Caso de Teste 01 – Reservar uma sala disponível

**Requisito:** RF-01

**Objetivo:** Verificar se é possível reservar uma sala disponível para uma turma compatível.

**Passos:**

1. Entrar no sistema.
2. Escolher uma sala disponível.
3. Informar a turma.
4. Informar a data e horário.
5. Confirmar a reserva.

**Resultado esperado:**  
O sistema deve realizar a reserva e mostrar uma mensagem informando que ela foi realizada com sucesso.

---

## Caso de Teste 02 – Tentar reservar uma sala já ocupada

**Requisito:** RF-02

**Objetivo:** Verificar se o sistema impede duas reservas na mesma sala e horário.

**Passos:**

1. Escolher uma sala que já possui uma reserva.
2. Informar o mesmo dia e horário da reserva existente.
3. Tentar confirmar a nova reserva.

**Resultado esperado:**  
O sistema deve impedir a reserva e informar que a sala já está ocupada naquele horário.

---

## Caso de Teste 03 – Turma maior que a capacidade da sala

**Requisito:** RF-03

**Objetivo:** Verificar se o sistema impede uma reserva quando a turma é maior que a capacidade da sala.

**Exemplo:** Sala com capacidade para 30 pessoas e turma com 40 alunos.

**Passos:**

1. Escolher uma sala com capacidade para 30 pessoas.
2. Selecionar uma turma com 40 alunos.
3. Tentar realizar a reserva.

**Resultado esperado:**  
O sistema deve impedir a reserva e informar que a capacidade da sala é insuficiente.

---

## Caso de Teste 04 – Reservar uma sala em manutenção

**Requisito:** RF-04

**Objetivo:** Verificar se uma sala em manutenção fica bloqueada para reservas.

**Passos:**

1. Escolher uma sala marcada como em manutenção.
2. Informar uma data e horário.
3. Tentar realizar a reserva.

**Resultado esperado:**  
O sistema não deve permitir a reserva da sala.

---

## Caso de Teste 05 – Reserva dentro do horário permitido

**Requisito:** RF-05

**Objetivo:** Verificar se o sistema aceita reservas entre 07h30 e 22h30.

**Exemplo:** Reserva das 10h às 11h.

**Passos:**

1. Escolher uma sala disponível.
2. Informar o horário das 10h às 11h.
3. Confirmar a reserva.

**Resultado esperado:**  
A reserva deve ser aceita, caso a sala esteja disponível.

---

## Caso de Teste 06 – Reserva fora do horário permitido

**Requisito:** RF-05

**Objetivo:** Verificar se o sistema impede reservas fora do horário permitido.

**Exemplo:** Reserva para 23h.

**Passos:**

1. Escolher uma sala.
2. Informar um horário fora do período permitido.
3. Tentar confirmar a reserva.

**Resultado esperado:**  
O sistema deve impedir a reserva e informar que o horário permitido é entre 07h30 e 22h30.

---

## Caso de Teste 07 – Professor tentando alterar reserva de outro professor

**Requisito:** RF-06

**Objetivo:** Verificar se um professor consegue alterar a reserva de outro professor.

**Passos:**

1. Entrar no sistema como professor.
2. Abrir uma reserva feita por outro professor.
3. Tentar mudar o horário ou a sala.

**Resultado esperado:**  
O sistema deve bloquear a alteração, pois um professor não pode alterar a reserva de outro professor.

---

## Caso de Teste 08 – Coordenação alterando reserva de um professor

**Requisito:** RF-06

**Objetivo:** Verificar se a coordenação pode alterar a reserva de outro professor.

**Passos:**

1. Entrar no sistema com o perfil de coordenação.
2. Abrir a reserva de um professor.
3. Alterar o horário da reserva.
4. Salvar.

**Resultado esperado:**  
O sistema deve permitir a alteração.

---

## Caso de Teste 09 – Cancelamento de uma reserva

**Requisito:** RF-07

**Objetivo:** Verificar se o cancelamento libera o horário da sala.

**Passos:**

1. Abrir uma reserva existente.
2. Escolher a opção de cancelar.
3. Confirmar o cancelamento.
4. Consultar novamente o horário.

**Resultado esperado:**  
A reserva deve ser cancelada, o horário deve ficar disponível novamente e o cancelamento deve ficar registrado no histórico.

---

## Caso de Teste 10 – Notificação após alteração

**Requisito:** RF-08

**Objetivo:** Verificar se uma alteração gera uma notificação.

**Passos:**

1. Abrir uma reserva.
2. Alterar o horário.
3. Salvar a alteração.

**Resultado esperado:**  
O sistema deve realizar a alteração e enviar uma notificação informando a mudança.

---

## Caso de Teste 11 – Notificação após cancelamento

**Requisito:** RF-08

**Objetivo:** Verificar se o cancelamento de uma reserva gera uma notificação.

**Passos:**

1. Abrir uma reserva.
2. Cancelar a reserva.
3. Confirmar o cancelamento.

**Resultado esperado:**  
O sistema deve cancelar a reserva e gerar uma notificação sobre o cancelamento.

---

## Caso de Teste 12 – Tempo da busca

**Requisito:** RNF-01

**Objetivo:** Verificar se a busca de salas é rápida.

**Passos:**

1. Entrar na tela de busca.
2. Pesquisar uma sala ou horário disponível.
3. Observar o tempo da resposta.

**Resultado esperado:**  
O resultado da busca deve aparecer em no máximo 2 segundos.

---

## Caso de Teste 13 – Registro de auditoria

**Requisito:** RNF-02

**Objetivo:** Verificar se as operações realizadas ficam registradas.

**Passos:**

1. Criar uma reserva.
2. Alterar a reserva.
3. Cancelar a reserva.
4. Consultar o histórico.

**Resultado esperado:**  
O sistema deve possuir registros das operações realizadas, mostrando informações como usuário, ação e data.

---

## Caso de Teste 14 – Acesso a unidade não autorizada

**Requisito:** RNF-03

**Objetivo:** Verificar se o usuário consegue acessar somente as unidades em que possui autorização.

**Passos:**

1. Entrar no sistema com um usuário autorizado apenas para uma unidade.
2. Tentar acessar as salas de outra unidade.

**Resultado esperado:**  
O sistema deve impedir o acesso às unidades para as quais o usuário não possui autorização.

---

## Conclusão

Com esses testes é possível verificar as principais funções do sistema de reserva de salas.

Os testes verificam principalmente os problemas mais importantes do sistema, como conflito de horários, capacidade das salas, permissões dos usuários, cancelamentos, notificações e segurança de acesso.
