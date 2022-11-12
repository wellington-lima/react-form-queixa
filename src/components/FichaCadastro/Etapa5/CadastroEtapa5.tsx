import { useContext } from 'react';
import FormularioContext from '../../../hooks/FormularioContext';
import styles from './styles.module.scss';

export const CadastroEtapa5 = () => {

  const { queixaData, handleUpdateForm } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>

        <div className={styles.rowQuestao}>
          <div><span>Participação da família na escola (reunião, eventos, processos educativos e etc)?</span></div>
          <div>
            <textarea rows={8} cols={10}
              name="participacao_familia"
              value={queixaData.participacao_familia || ''}
              onChange={handleUpdateForm}
              placeholder="Descreva"
            />
          </div>
        </div>

        <div className={styles.rowQuestao}>
          <div><span>Relação da família com a equipe escola (professor, coordenador, diretor e etc.) ?</span></div>
          <div>
            <textarea rows={8} cols={10}
              name="relacao_familia"
              value={queixaData.relacao_familia || ''}
              onChange={handleUpdateForm}
              placeholder="Descreva"
            />
          </div>
        </div>
      </div>
    </>
  )
}