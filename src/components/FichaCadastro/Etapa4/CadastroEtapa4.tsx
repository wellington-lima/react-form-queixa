import { useContext } from 'react';
import FormularioContext from '../../../hooks/FormularioContext';
import styles from './styles.module.scss';

export const CadastroEtapa4 = () => {

  const { queixaData, handleUpdateForm } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.divTitulo}>
          <div><span>Dificuldade de linguagem oral</span></div>
          <div><span>Avaliação</span></div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Quais são as trocas na fala?</span></div>
          <div>
            <input
              type="text"
              name="troca_fala"
              value={queixaData.troca_fala || ""}
              onChange={handleUpdateForm}
            />
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>A fala impacta na compreensão do professor e demais alunos?</span></div>
          <div>
            <input
              type="text"
              name="impacto_fala"
              value={queixaData.impacto_fala || ""}
              onChange={handleUpdateForm}
            />
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Quais as trocas na escrita?</span></div>
          <div>
            <input
              type="text"
              name="troca_escrita"
              value={queixaData.troca_escrita || ""}
              onChange={handleUpdateForm}
            />
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Adições de letras na escrita? Quais? Ex: Ventilador/Ventitilador</span></div>
          <div>
            <input
              type="text"
              name="adicao_letra"
              value={queixaData.adicao_letra || ""}
              onChange={handleUpdateForm}
            />
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Omissões de letras na escrita? Quais? Ex: Cadeira/cadera</span></div>
          <div>
            <input
              type="text"
              name="omissao_letra"
              value={queixaData.omissao_letra || ""}
              onChange={handleUpdateForm}
            />
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Ouve bem, compreende o que é dito?</span></div>
          <div>
            <input
              type="text"
              name="audicao_compreensao"
              value={queixaData.audicao_compreensao || ""}
              onChange={handleUpdateForm}
            />
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Vai bem nas atividades da escola?</span></div>
          <div>
            <input
              type="text"
              name="atividades"
              value={queixaData.atividades || ""}
              onChange={handleUpdateForm}
            />
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Houve alguma medida tomada por parte da escola? Quais?</span></div>
          <div>
            <input
              type="text"
              name="medida_escola"
              value={queixaData.medida_escola || ""}
              onChange={handleUpdateForm}
            />
          </div>
        </div>
      </div>
    </>
  )
}