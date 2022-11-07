import styles from './FichaCadastro.module.scss';
import { useContext, useEffect, useState } from 'react';
import FormularioContext from '../../hooks/FormularioContext';
import { problemas, hipotese_escrita } from '../../api';

export const CadastroEtapa1 = () => {

  const [disgnosticoMedico, setDisgnosticoMedico] = useState(false);
  const { queixaData, handleQueixa } = useContext(FormularioContext);

  const mostrarDados = () => {
    console.log(queixaData);
  }
  useEffect(() => {
    mostrarDados();
  },[]);

  const handleUpdateQueixa = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleQueixa({ ...queixaData, [name]: value });
  }
  
  const handleUpdateQueixaSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    handleQueixa({ ...queixaData, [name]: (value == 'true') });
  }

  const handleDiagnosticoMedico = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setDisgnosticoMedico(value == 'true');
  }



  return (
    <>
      <div className={styles.container}>
        <div>
          <label>Escola</label>
          <input
            type="text"
            name="escola"
            value={ queixaData.escola || '' }
            onChange={ handleUpdateQueixa }
            placeholder="Escola"
          />
        </div>

        <div>
          <label>Professor(a)</label>
          <input
            type="text"
            name="professor"
            value={ queixaData.professor || '' }
            onChange={ handleUpdateQueixa }
            placeholder="Professor(a)"
          />
        </div>

        <div>
          <label>Aluno(a)</label>
          <input
            type="text"
            name="aluno"
            value={ queixaData.aluno || '' }
            onChange={ handleUpdateQueixa }
            placeholder="Aluno(a)"
          />
        </div>

        <div className={styles.flex}>
          <div>
            <label>Ano/Ciclo</label>
            <input
              type="text"
              name="ano"
              value={ queixaData.ano || '' }
              onChange={ handleUpdateQueixa }
              placeholder="Ano/Ciclo" />
          </div>

          <div>
            <label>Idade</label>
            <input
              type="text"
              name="idade"
              value={ queixaData.idade || '' }
              onChange={ handleUpdateQueixa }
              placeholder="Idade" />
          </div>

          <div>
            <label>Turno</label>
            <input
              type="text"
              name="turno"
              value={ queixaData.turno || '' }
              onChange={ handleUpdateQueixa }
              placeholder="Turno" />
          </div>

          <div>
            <label>Retido?</label>
              {/* <option  defaultValue={'Selecione'} disabled>Selecione</option> */}
              
              { queixaData.retido == true && (
                <select name="retido" onChange={ handleUpdateQueixaSelect }>
                  <option disabled>Selecione</option>
                  <option defaultValue={'true'} value="true">Sim</option>
                  <option value="false">Não</option>
                  </select>
              )}
              
              { queixaData.retido == false && (
                <select name="retido" onChange={ handleUpdateQueixaSelect }>
                  <option disabled>Selecione</option>
                  <option value="true">Sim</option>
                  <option defaultValue={'false'} value="false">Não</option>
                  </select>
              )}

          </div>
        </div>

        <div className={styles.flexLine}>
          <div>
            <label>O principal problema é </label>
            <select name="problema" defaultValue={'Selecione'}>
              <option defaultValue={'Selecione'} disabled>Selecione</option>

              {problemas.map(problema => (
                <option key={problema.id} value={problema.id}>{problema.nome}</option>
                ))
              }
            </select>
          </div>

          <div>
            <label>Qual a Hipótese de Escrita? </label>
            <select name="hipotese_escrita" defaultValue={'Selecione'}>
              <option defaultValue={'Selecione'} disabled>Selecione</option>

              {hipotese_escrita.map(hipotese => (
                <option key={hipotese.id} value={hipotese.id}>{hipotese.nome}</option>
              ))
              }
            </select>
          </div>
        </div>

        <div>
          <div>
            <label>Possui algum diagnóstico médico, psicológico? </label>
            <select name="diagnostico" defaultValue={'Selecione'} onChange={(e) => handleDiagnosticoMedico(e)}>
              <option defaultValue={'Selecione'} disabled>Selecione</option>
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>

          {disgnosticoMedico && (
            <div>
              <label>Qual?</label>
              <input 
                type="text"
                name="desc_diagnostico"
                value={ queixaData.desc_diagnostico || '' }
                onChange={ handleUpdateQueixa }              
                placeholder="Descreva o diagnóstico"
              />
            </div>
          )
          }

        </div>

      </div>
    </>
  )
}