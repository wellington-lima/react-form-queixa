import { useContext } from 'react';
import { avaliacao } from '../../api';
import FormularioContext from '../../hooks/FormularioContext';
import styles from './Styles.module.scss';

export const CadastroEtapa3 = () => {
  const { queixaData, handleUpdateForm } = useContext(FormularioContext);

  return (
    <>
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>2 - Dificuldade de aprendizagem</th>
              <th>Avaliação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Dificuldade na Leitura de textos simples
              </td>
              <td>
                <select 
                  name="leitura"
                  value={ queixaData.leitura ? queixaData.leitura : 'Selecione' }
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
                Dificuldades na Escrita
              </td>
              <td>
                <select 
                  name="escrita"
                  value={ queixaData.escrita ? queixaData.escrita : 'Selecione' }
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
                Dificuldade na Compreensão de textos simples
              </td>
              <td>
                <select 
                  name="compreensao_texto"
                  value={ queixaData.compreensao_texto ? queixaData.compreensao_texto : 'Selecione' }
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
                Dificuldade com repertório numérico
              </td>
              <td>
                <select 
                  name="repertorio_numerico"
                  value={ queixaData.repertorio_numerico ? queixaData.repertorio_numerico : 'Selecione' }
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
                Dificuldade com Cálculo Simples
              </td>
              <td>
                <select 
                  name="calculo"
                  value={ queixaData.calculo ? queixaData.calculo : 'Selecione' }
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
                Dificuldade de Memorização
              </td>
              <td>
                <select 
                  name="memorizacao"
                  value={ queixaData.memorizacao ? queixaData.memorizacao : 'Selecione' }
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