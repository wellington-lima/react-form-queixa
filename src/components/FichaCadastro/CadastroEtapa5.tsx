import { useContext } from 'react';
import FormularioContext from '../../hooks/FormularioContext';
import styles from './Styles.module.scss';

export const CadastroEtapa5 = () => {

  const { queixaData, handleUpdateForm } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>
        <div className={ styles.containerEtapa5}>
          <span>Participação da família na escola (reunião, eventos, processos educativos e etc)?</span>
          <textarea rows={ 8 } cols={ 10 }
            name="participacao_familia"
            value={queixaData.participacao_familia || ''}
            onChange={ handleUpdateForm }
            placeholder="Descreva"
          />
        </div>

        <div className={ styles.containerEtapa5}>
          <span>Relação da família com a equipe escola (professor, coordenador, diretor e etc.) ?</span>
          <textarea rows={ 8 } cols={ 10 }
            name="relacao_familia"
            value={queixaData.relacao_familia || ''}
            onChange={ handleUpdateForm }
            placeholder="Descreva"
          />
        </div>
      </div>
    </>
  )
}