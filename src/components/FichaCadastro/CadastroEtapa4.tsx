import { useContext } from 'react';
import FormularioContext from '../../hooks/FormularioContext';
import styles from './Styles.module.scss';

export const CadastroEtapa4 = () => {
  
  const { queixaData, handleUpdateForm } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>
        <table className={ styles.table4 }>

          <colgroup>
            <col style={{ width: '45%' }} />
            <col style={{ width: '55%' }} />
          </colgroup>
          
          <thead>
            <tr>
              <th>3 - Dificuldade de linguagem oral</th>
              <th>Descreva</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Quais são as trocas na fala?
              </td>
              <td className={ styles.colAvaliacao }>
                <input 
                  type="text"
                  name="troca_fala"
                  value={ queixaData.troca_fala || "" }
                  onChange={ handleUpdateForm } 
                />
              </td>
            </tr>
           
            <tr>
              <td>
                A fala impacta na compreensão do professor e demais alunos?
              </td>
              <td className={ styles.colAvaliacao }>
                <input
                  type="text"
                  name="impacto_fala"
                  value={ queixaData.impacto_fala || "" }
                  onChange={ handleUpdateForm }   
                />
              </td>
            </tr>
            
            <tr>
              <td>
                Quais as trocas na escrita?
              </td>
              <td className={ styles.colAvaliacao }>
                <input
                  type="text"
                  name="troca_escrita"
                  value={ queixaData.troca_escrita || "" }
                  onChange={ handleUpdateForm }   
                />
              </td>
            </tr>
            
            <tr>
              <td>
                Adições de letras na escrita? Quais? Ex: Ventilador/Ventitilador
              </td>
              <td className={ styles.colAvaliacao }>
                <input
                  type="text"
                  name="adicao_letra"
                  value={ queixaData.adicao_letra || "" }
                  onChange={ handleUpdateForm }   
                />
              </td>
            </tr>

            <tr>
              <td>
                Omissões de letras na escrita? Quais? Ex: Cadeira/cadera
              </td>
              <td className={ styles.colAvaliacao }>
                <input
                  type="text"
                  name="omissao_letra"
                  value={ queixaData.omissao_letra || "" }
                  onChange={ handleUpdateForm }   
                />
              </td>
            </tr>
            
            <tr>
              <td>
                Ouve bem, compreende o que é dito?
              </td>
              <td className={ styles.colAvaliacao }>
                <input
                  type="text"
                  name="audicao_compreensao"
                  value={ queixaData.audicao_compreensao || "" }
                  onChange={ handleUpdateForm }   
                />
              </td>
            </tr>

            <tr>
              <td>
                Vai bem nas atividades da escola?
              </td>
              <td className={ styles.colAvaliacao }>
                <input
                  type="text"
                  name="atividades"
                  value={ queixaData.atividades || "" }
                  onChange={ handleUpdateForm }   
                />
              </td>
            </tr>
            
            <tr>
              <td>
                Houve alguma medida tomada por parte da escola?  Quais?
              </td>
              <td className={ styles.colAvaliacao }>
                <input
                  type="text"
                  name="medida_escola"
                  value={ queixaData.medida_escola || "" }
                  onChange={ handleUpdateForm }   
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
        </div>
      </div>
    </>
  )
}