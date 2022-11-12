import { useContext } from 'react';
import FormularioContext from '../../hooks/FormularioContext';
import styles from './Styles.module.scss';

export const CadastroEtapa6 = () => {
  
  const { queixaData, handleUpdateForm } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>
        <div className={ styles.containerEtapa5}>
          <span>Observações complementares do professor</span>
          <textarea rows={8} cols={10}
            name="obs_professor"
            value={queixaData.obs_professor || ''}
            onChange={ handleUpdateForm }
            placeholder="Descreva"
          />
        </div>

        <div className={ styles.containerEtapa5}>
          <span>Outras Observações da Escola</span>
          <textarea rows={8} cols={10}
            name="obs_escola"
            value={queixaData.obs_escola || ''}
            onChange={ handleUpdateForm }
            placeholder="Descreva"
          />
        </div>
      </div>
    </>
  )
}