# Plano de Teste – Sistema de Reserva de Salas

## 1. Objetivo

O objetivo dos testes é verificar se o sistema de reserva de salas funciona corretamente, principalmente na criação, alteração e cancelamento das reservas.

Também será verificado se o sistema impede conflitos de horário, reservas em salas pequenas para a quantidade de alunos, uso de salas em manutenção e alterações feitas por pessoas sem permissão.

## 2. O que será testado

Serão testadas as seguintes funções:

- Reserva de uma sala disponível;
- Conflito de horários;
- Capacidade da sala;
- Sala em manutenção;
- Horário permitido para reservas;
- Permissão para alterar reservas;
- Cancelamento de reservas;
- Envio de notificações;
- Tempo de resposta da busca;
- Registro das operações realizadas;
- Acesso somente às unidades permitidas.

## 3. Principais riscos

Os principais problemas que podem acontecer são:

- Duas turmas reservarem a mesma sala no mesmo horário;
- Uma turma maior que a capacidade da sala;
- Um professor alterar a reserva de outro professor;
- O sistema não enviar notificação após uma alteração ou cancelamento.

## 4. Ambiente de teste

Os testes podem ser feitos em um computador com acesso ao sistema de reserva de salas, utilizando usuários com diferentes perfis, como professor e coordenação.

## 5. Critério para considerar o teste aprovado

O teste será considerado aprovado quando o sistema apresentar o resultado esperado.

Se o sistema permitir alguma ação que deveria ser bloqueada ou não realizar uma função prevista, o teste será considerado reprovado.

## 6. Requisitos que serão verificados

### Requisitos Funcionais

- RF-01: Reservar sala disponível para turma compatível;
- RF-02: Impedir sobreposição na mesma sala;
- RF-03: Impedir turma maior que a capacidade;
- RF-04: Bloquear sala em manutenção;
- RF-05: Permitir reservas entre 07h30 e 22h30;
- RF-06: Somente a coordenação pode alterar a reserva de outro professor;
- RF-07: Cancelamento libera o horário e gera registro no histórico;
- RF-08: Alteração ou cancelamento gera notificação.

### Requisitos Não Funcionais

- RNF-01: A busca deve responder em até 2 segundos;
- RNF-02: As operações devem possuir trilha de auditoria;
- RNF-03: O acesso deve ser limitado às unidades autorizadas.

## 7. Conclusão

O plano de teste tem como objetivo verificar se as principais funções do sistema estão funcionando de acordo com os requisitos.

Os testes mais importantes são os relacionados a conflito de horários, capacidade das salas, permissões dos usuários e notificações, pois esses problemas podem prejudicar o funcionamento do sistema.
