import { useContext } from 'react';
import FormularioContext from '../../hooks/FormularioContext';
import { problemas } from '../../api';
import styles from './Styles.module.scss';

export const CadastroEtapa7 = () => {

  const { queixaData } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>
        <div className={ styles.sessaoConfirmacao }>Confirme os dados</div>
        <div>
          <span>Data:&nbsp;</span>
          <span>{ queixaData.data.toString() }</span>
        </div>

        <div>
          <span>Escola:&nbsp;</span>
          <span>{ queixaData.escola }</span>
        </div>
        
        <div>
          <span>Professor:&nbsp;</span>
          <span>{ queixaData.professor }</span>
        </div>

        <div>
          <span>Aluno:&nbsp;</span>
          <span>{ queixaData.aluno }</span>
        </div>

        <div>
          <span>Ciclo:&nbsp;</span>
          <span>{ queixaData.ano }</span>
        </div>

        <div>
          <span>Idade:&nbsp;</span>
          <span>{ queixaData.idade }</span>
        </div>

        <div>
          <span>Turno:&nbsp;</span>
          <span>{ queixaData.turno }</span>
        </div>

        <div>
          <span>Retido:&nbsp;</span>
          <span>{ queixaData.retido }</span>
        </div>

        <div>
          <span>Principal problema:&nbsp;</span>
          <span>{ queixaData.problema }</span>
        </div>

        <div>
          <span>Hipótese de Escrita:&nbsp;</span>
          <span>{ queixaData.hipotese_escrita }</span>
        </div>

        <div>
          <span>Possui diagnóstico médico:&nbsp;</span>
          <span>{ queixaData.diagnostico }</span>
        </div>

        { queixaData.diagnostico &&
          <div>
            <span>Diagnóstico médico, psicológico:&nbsp;</span>
            <span>{ queixaData.desc_diagnostico }</span>
          </div>
        }

        <hr />
        <div className={ styles.sessaoConfirmacao }>Problema Comportamental</div>
        <div>
          <span>Agressividade :&nbsp;</span>
          <span>{ queixaData.agressividade }</span>
        </div>        

        <div>
          <span>Apatia, desinteresse:&nbsp;</span>
          <span>{ queixaData.apatia }</span>
        </div>
        
        <div>
          <span>Falta de atencao:&nbsp;</span>
          <span>{ queixaData.falta_atencao }</span>
        </div>

        <div>
          <span>Agitação/Hiperatividade:&nbsp;</span>
          <span>{ queixaData.falta_atencao }</span>
        </div>

        <hr />
        <div className={ styles.sessaoConfirmacao }>Dificuldade de aprendizagem</div>
        <div>
          <span>Dificuldade na leitura de texto simples:&nbsp;</span>
          <span>{ queixaData.leitura }</span>
        </div>

        <div>
          <span>Dificuldades na Escrita:&nbsp;</span>
          <span>{ queixaData.escrita }</span>
        </div>

        <div>
          <span>Dificuldade na Compreensão de textos simples:&nbsp;</span>
          <span>{ queixaData.compreensao_texto }</span>
        </div>

        <div>
          <span>Dificuldade com repertório numérico:&nbsp;</span>
          <span>{ queixaData.repertorio_numerico }</span>
        </div>

        <div>
          <span>Dificuldade com Cálculo Simples:&nbsp;</span>
          <span>{ queixaData.calculo }</span>
        </div>

        <div>
          <span>Dificuldade de Memorização:&nbsp;</span>
          <span>{ queixaData.memorizacao }</span>
        </div>

        <hr />
        <div className={ styles.sessaoConfirmacao }>Dificuldade de linguagem oral</div>
        <div>
          <span>Quais são as trocas na fala?&nbsp;</span>
          <span>{ queixaData.troca_fala }</span>
        </div>

        <div>
          <span>A fala impacta na compreensão do professor e demais alunos?&nbsp;</span>
          <span>{ queixaData.impacto_fala }</span>
        </div>

        <div>
          <span>Quais as trocas na escrita?&nbsp;</span>
          <span>{ queixaData.troca_escrita }</span>
        </div>

        <div>
          <span>Adições de letras na escrita? Quais?&nbsp;</span>
          <span>{ queixaData.adicao_letra }</span>
        </div>

        <div>
          <span>Omissões de letras na escrita? Quais?&nbsp;</span>
          <span>{ queixaData.omissao_letra }</span>
        </div>

        <div>
          <span>Ouve bem, compreende o que é dito?&nbsp;</span>
          <span>{ queixaData.audicao_compreensao }</span>
        </div>

        <div>
          <span>Vai bem nas atividades da escola?&nbsp;</span>
          <span>{ queixaData.atividades }</span>
        </div>

        <div>
          <span>Houve alguma medida tomada por parte da escola?  Quais?&nbsp;</span>
          <span>{ queixaData.medida_escola }</span>
        </div>

        <hr />
        <div className={ styles.sessaoConfirmacao }>Relação família/escola</div>
        <div>
          <span>Participação da família na escola (reunião, eventos, processos educativos e etc)?&nbsp;</span>
          <span>{ queixaData.participacao_familia }</span>
        </div>

        <div>
          <span>Relação da família com a equipe escola (professor, coordenador, diretor e etc.)?&nbsp;</span>
          <span>{ queixaData.relacao_familia }</span>
        </div>

        <hr />
        <div className={ styles.sessaoConfirmacao }>Observações complementares do Professor</div>
        <div>
          <span>{ queixaData.obs_professor }</span>
        </div>

        <div className={ styles.sessaoConfirmacao }>Outras observações da escola</div>
        <div>
          <span>{ queixaData.obs_escola }</span>
        </div>
      </div>
    </>
  )
}