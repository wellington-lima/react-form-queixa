
import { useContext } from 'react';
import { avaliacao } from '../../api';
import FormularioContext from '../../hooks/FormularioContext';
import styles from './Styles.module.scss';

export const CadastroEtapa2 = () => {

  const { queixaData, handleUpdateForm } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>1 - Problema comportamental</th>
              <th>Avaliação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Agressividade (relatar no verso  tipo de situação em que a agressividade está presente)
              </td>
              <td>
                <select 
                  name="agressividade"
                  value={ queixaData.agressividade ? queixaData.agressividade : 'Selecione' }
                  onChange={ handleUpdateForm }
                >
                  <option disabled>Selecione</option>

                  { avaliacao.map(opcao => (
                      <option key={ opcao.id } value={ opcao.id }>{ opcao.nome }</option>
                    ))
                  }

                </select>
              </td>
            </tr>
           
            <tr>
              <td>
                Apatia desinteresse (relatar no verso tipo de situação e onde se apresenta).
              </td>
              <td>
                <select 
                  name="apatia"
                  value={ queixaData.apatia ? queixaData.apatia : 'Selecione' }
                  onChange={ handleUpdateForm }
                >
                  <option disabled>Selecione</option>

                  { avaliacao.map(opcao => (
                      <option key={ opcao.id } value={ opcao.id }>{ opcao.nome }</option>
                    ))
                  }

                </select>
              </td>
            </tr>
            
            <tr>
              <td>
                Falta de atenção”desligado”
              </td>
              <td>
                <select 
                  name="falta_atencao"
                  value={ queixaData.falta_atencao ? queixaData.falta_atencao : 'Selecione' }
                  onChange={ handleUpdateForm }
                >
                  <option disabled>Selecione</option>

                  { avaliacao.map(opcao => (
                      <option key={ opcao.id } value={ opcao.id }>{ opcao.nome }</option>
                    ))
                  }
                </select>
              </td>
            </tr>
            
            <tr>
              <td>
                Agitação/Hiperatividade
              </td>
              <td>
                <select 
                  name="agitacao"
                  value={ queixaData.agitacao ? queixaData.agitacao : 'Selecione' }
                  onChange={ handleUpdateForm }
                >
                  <option disabled>Selecione</option>

                  { avaliacao.map(opcao => (
                      <option key={ opcao.id } value={ opcao.id }>{ opcao.nome }</option>
                    ))
                  }
                </select>
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