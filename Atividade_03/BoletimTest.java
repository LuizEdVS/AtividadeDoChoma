package br.edu.ifpr.boletim;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class BoletimTest {

    @Test
    void deveAprovarAluno() {
        Boletim boletim = new Boletim();

        String resultado = boletim.verificarSituacao(8);

        assertEquals("APROVADO", resultado);
    }

    @Test
    void deveAprovarAlunoComMediaSete() {
        Boletim boletim = new Boletim();

        String resultado = boletim.verificarSituacao(7);

        assertEquals("APROVADO", resultado);
    }

    @Test
    void deveFicarEmRecuperacao() {
        Boletim boletim = new Boletim();

        String resultado = boletim.verificarSituacao(5);

        assertEquals("RECUPERACAO", resultado);
    }

    @Test
    void deveFicarEmRecuperacaoComMediaQuatro() {
        Boletim boletim = new Boletim();

        String resultado = boletim.verificarSituacao(4);

        assertEquals("RECUPERACAO", resultado);
    }

    @Test
    void deveReprovarAluno() {
        Boletim boletim = new Boletim();

        String resultado = boletim.verificarSituacao(3);

        assertEquals("REPROVADO", resultado);
    }

    @Test
    void deveCalcularMedia() {
        Boletim boletim = new Boletim();

        double resultado = boletim.calcularMedia(8, 6);

        assertEquals(7, resultado, 0.0001);
    }

    @Test
    void deveCalcularMediaComDecimal() {
        Boletim boletim = new Boletim();

        double resultado = boletim.calcularMedia(8, 7);

        assertEquals(7.5, resultado, 0.0001);
    }

    @Test
    void deveContarAprovados() {
        Boletim boletim = new Boletim();

        double[] medias = {8, 5, 7, 3, 9};

        int resultado = boletim.contarAprovados(medias);

        assertEquals(3, resultado);
    }

    @Test
    void deveRetornarZeroQuandoArrayVazio() {
        Boletim boletim = new Boletim();

        double[] medias = {};

        int resultado = boletim.contarAprovados(medias);

        assertEquals(0, resultado);
    }

    @Test
    void deveContarUmAprovado() {
        Boletim boletim = new Boletim();

        double[] medias = {7};

        int resultado = boletim.contarAprovados(medias);

        assertEquals(1, resultado);
    }
}

class ParticipacaoTest {

    @Test
    void deveGanharTresPontos() {
        Participacao participacao = new Participacao();

        int resultado = participacao.calcularPontos(true, true);

        assertEquals(3, resultado);
    }

    @Test
    void deveGanharDoisPontos() {
        Participacao participacao = new Participacao();

        int resultado = participacao.calcularPontos(true, false);

        assertEquals(2, resultado);
    }

    @Test
    void deveGanharUmPonto() {
        Participacao participacao = new Participacao();

        int resultado = participacao.calcularPontos(false, true);

        assertEquals(1, resultado);
    }

    @Test
    void deveGanharZeroPontos() {
        Participacao participacao = new Participacao();

        int resultado = participacao.calcularPontos(false, false);

        assertEquals(0, resultado);
    }
}
