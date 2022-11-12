import { useContext } from 'react';
import { avaliacao } from '../../../api';
import FormularioContext from '../../../hooks/FormularioContext';
import styles from './styles.module.scss';

export const CadastroEtapa3 = () => {
  const { queixaData, handleUpdateForm } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.divTitulo}>
          <div><span>Dificuldade de aprendizagem</span></div>
          <div><span>Avaliação</span></div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Dificuldade na Leitura de textos simples</span></div>
          <div>
            <select
              name="leitura"
              value={queixaData.leitura ? queixaData.leitura : 'Selecione'}
              onChange={handleUpdateForm}
            >
              <option disabled>Selecione</option>

              {avaliacao.map(opcao => (
                <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>
              ))
              }

            </select>
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Dificuldades na Escrita</span></div>
          <div>
            <select
              name="escrita"
              value={queixaData.escrita ? queixaData.escrita : 'Selecione'}
              onChange={handleUpdateForm}
            >
              <option disabled>Selecione</option>

              {avaliacao.map(opcao => (
                <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>
              ))
              }

            </select>
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Dificuldade na Compreensão de textos simples</span></div>
          <div>
            <select
              name="compreensao_texto"
              value={queixaData.compreensao_texto ? queixaData.compreensao_texto : 'Selecione'}
              onChange={handleUpdateForm}
            >
              <option disabled>Selecione</option>

              {avaliacao.map(opcao => (
                <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>
              ))
              }
            </select>
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Dificuldade com repertório numérico</span></div>
          <div>
            <select
              name="repertorio_numerico"
              value={queixaData.repertorio_numerico ? queixaData.repertorio_numerico : 'Selecione'}
              onChange={handleUpdateForm}
            >
              <option disabled>Selecione</option>

              {avaliacao.map(opcao => (
                <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>
              ))
              }
            </select>
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Dificuldade com Cálculo Simples</span></div>
          <div>
            <select
              name="calculo"
              value={queixaData.calculo ? queixaData.calculo : 'Selecione'}
              onChange={handleUpdateForm}
            >
              <option disabled>Selecione</option>

              {avaliacao.map(opcao => (
                <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>
              ))
              }
            </select>
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Dificuldade de Memorização</span></div>
          <div>
            <select
              name="memorizacao"
              value={queixaData.memorizacao ? queixaData.memorizacao : 'Selecione'}
              onChange={handleUpdateForm}
            >
              <option disabled>Selecione</option>

              {avaliacao.map(opcao => (
                <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>
              ))
              }
            </select>
          </div>
        </div>
      </div>
    </>
  )
}