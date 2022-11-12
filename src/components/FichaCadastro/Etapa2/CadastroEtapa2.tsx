
import { useContext } from 'react';
import { avaliacao } from '../../../api';
import FormularioContext from '../../../hooks/FormularioContext';
import styles from './styles.module.scss';

export const CadastroEtapa2 = () => {

  const { queixaData, handleUpdateForm } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.divTitulo}>
          <div><span>Problema comportamental</span></div>
          <div><span>Avaliação</span></div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Agressividade (relatar no verso tipo de situação em que a agressividade está presente)</span></div>
          <div>
            <select
              name="agressividade"
              value={queixaData.agressividade ? queixaData.agressividade : 'Selecione'}
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
          <div><span>Apatia desinteresse (relatar no verso tipo de situação e onde se apresenta).</span></div>
          <div>
            <select
              name="apatia"
              value={queixaData.apatia ? queixaData.apatia : 'Selecione'}
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
          <div><span>Falta de atenção”desligado”</span></div>
          <div>
            <select
              name="falta_atencao"
              value={queixaData.falta_atencao ? queixaData.falta_atencao : 'Selecione'}
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
          <div><span>Agitação/Hiperatividade</span></div>
          <div>
            <select
              name="agitacao"
              value={queixaData.agitacao ? queixaData.agitacao : 'Selecione'}
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