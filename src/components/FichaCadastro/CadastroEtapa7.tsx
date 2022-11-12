import { useContext } from 'react';
import FormularioContext from '../../hooks/FormularioContext';
import { descricaoProblema, descricaoHipoteseEscrita, descricaoAvaliacao } from '../../api';
import { dataPadraoBr } from '../../utils/FuncoesData';

import styles from './Styles.module.scss';

export const CadastroEtapa7 = () => {

  const { queixaData } = useContext(FormularioContext);
  const dataCadastro = new Date(queixaData.data);
  

  return (
    <>
      <div className={ styles.container }>
        <div className={ styles.sessaoConfirmacao }>Confirme as informações antes de salvar</div>
        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Data:&nbsp;</span>
          <span>{ dataPadraoBr(queixaData.data.toString()) } </span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Escola:&nbsp;</span>
          <span>{ queixaData.escola }</span>
        </div>
        
        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Professor:&nbsp;</span>
          <span>{ queixaData.professor }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Aluno:&nbsp;</span>
          <span>{ queixaData.aluno }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Ciclo:&nbsp;</span>
          <span>{ queixaData.ano }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Idade:&nbsp;</span>
          <span>{ queixaData.idade } anos</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Turno:&nbsp;</span>
          <span>{ queixaData.turno }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Retido:&nbsp;</span>
          <span>{ queixaData.retido }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Principal problema:&nbsp;</span>
          <span>{ queixaData.problema ? descricaoProblema(queixaData.problema) : '' }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Hipótese de Escrita:&nbsp;</span>
          <span>{ queixaData.hipotese_escrita ? descricaoHipoteseEscrita(queixaData.hipotese_escrita) : '' }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Possui diagnóstico médico:&nbsp;</span>
          <span>{ queixaData.diagnostico == "1" ? "Sim" : "Não" }</span>
        </div>

        { queixaData.diagnostico &&
          <div className={ styles.linhaConfirmacao }>
            <span className={ styles.label }>Diagnóstico médico, psicológico:&nbsp;</span>
            <span>{ queixaData.desc_diagnostico }</span>
          </div>
        }

        <div className={ styles.sessaoConfirmacao }>Problema Comportamental</div>
        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Agressividade :&nbsp;</span>
          <span>{ queixaData.agressividade ? descricaoAvaliacao(queixaData.agressividade) : '' }</span>
        </div>        

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Apatia, desinteresse:&nbsp;</span>
          <span>{ queixaData.apatia ? descricaoAvaliacao(queixaData.apatia): '' }</span>
        </div>
        
        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Falta de atencao:&nbsp;</span>
          <span>{ queixaData.falta_atencao ? descricaoAvaliacao(queixaData.falta_atencao) : '' }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Agitação/Hiperatividade:&nbsp;</span>
          <span>{ queixaData.falta_atencao ? descricaoAvaliacao(queixaData.falta_atencao) : '' }</span>
        </div>

        <div className={ styles.sessaoConfirmacao }>Dificuldade de aprendizagem</div>
        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Dificuldade na leitura de texto simples:&nbsp;</span>
          <span>{ queixaData.leitura ? descricaoAvaliacao(queixaData.leitura) : '' }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Dificuldades na Escrita:&nbsp;</span>
          <span>{ queixaData.escrita ? descricaoAvaliacao(queixaData.escrita) : '' }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Dificuldade na Compreensão de textos simples:&nbsp;</span>
          <span>{ queixaData.compreensao_texto ? descricaoAvaliacao(queixaData.compreensao_texto) : '' }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Dificuldade com repertório numérico:&nbsp;</span>
          <span>{ queixaData.repertorio_numerico ? descricaoAvaliacao(queixaData.repertorio_numerico) : '' }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Dificuldade com Cálculo Simples:&nbsp;</span>
          <span>{ queixaData.calculo ? descricaoAvaliacao(queixaData.calculo) : '' }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Dificuldade de Memorização:&nbsp;</span>
          <span>{ queixaData.memorizacao ? descricaoAvaliacao(queixaData.memorizacao) : '' }</span>
        </div>

        <div className={ styles.sessaoConfirmacao }>Dificuldade de linguagem oral</div>
        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Quais são as trocas na fala?&nbsp;</span>
          <span>{ queixaData.troca_fala }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>A fala impacta na compreensão do professor e demais alunos?&nbsp;</span>
          <span>{ queixaData.impacto_fala }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Quais as trocas na escrita?&nbsp;</span>
          <span>{ queixaData.troca_escrita }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Adições de letras na escrita? Quais?&nbsp;</span>
          <span>{ queixaData.adicao_letra }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Omissões de letras na escrita? Quais?&nbsp;</span>
          <span>{ queixaData.omissao_letra }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Ouve bem, compreende o que é dito?&nbsp;</span>
          <span>{ queixaData.audicao_compreensao }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Vai bem nas atividades da escola?&nbsp;</span>
          <span>{ queixaData.atividades }</span>
        </div>

        <div className={ styles.linhaConfirmacao }>
          <span className={ styles.label }>Houve alguma medida tomada por parte da escola?  Quais?&nbsp;</span>
          <span>{ queixaData.medida_escola }</span>
        </div>

        <div className={ styles.sessaoConfirmacao }>
          <p>Participação da família na escola (reunião, eventos, processos educativos e etc)?</p>
        </div>
        <div className={ styles.spanTextarea }>
          <span>{ queixaData.participacao_familia }</span>
        </div>

        <div className={ styles.sessaoConfirmacao }>
          <p>Relação da família com a equipe escola (professor, coordenador, diretor e etc.)?</p>
        </div>
        <div className={ styles.spanTextarea }>
          <span>{ queixaData.relacao_familia }</span>
        </div>

        <div className={ styles.sessaoConfirmacao }>Observações complementares do Professor</div>
        <div className={ styles.spanTextarea }>
          <span>{ queixaData.obs_professor }</span>
        </div>

        <div className={ styles.sessaoConfirmacao }>Outras observações da escola</div>
        <div className={ styles.spanTextarea }>
          <span>{ queixaData.obs_escola }</span>
        </div>
      </div>
    </>
  )
}