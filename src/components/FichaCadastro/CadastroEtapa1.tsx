import { useContext, useEffect } from 'react';
import FormularioContext from '../../hooks/FormularioContext';
import { problemas, hipotese_escrita } from '../../api';
import { dataPadraoUS } from '../../utils/FuncoesData';
import styles from './Styles.module.scss';

export const CadastroEtapa1 = () => {

  const { queixaData, handleUpdateForm, setDataDefault } = useContext(FormularioContext);

  const dataAtual = new Date().toLocaleDateString();

  useEffect(() => {
    if(!queixaData.data) 
      setDataDefault("data", dataPadraoUS(dataAtual));
  }, []);
  
  return (
    <>
      <div className={styles.container}>
        <div className={ `${styles.flexSpaceBetween} ${styles.flexLine1}`}>
          <div>
            <label>Data</label>
            <input
              type="date"
              name="data"
              value={ queixaData.data ? queixaData.data.toString() : dataPadraoUS(dataAtual) }
              onChange={ handleUpdateForm }
            />
          </div>
          <div>
            <label>Escola</label>
            <input
              type="text"
              name="escola"
              value={ queixaData.escola || '' }
              onChange={ handleUpdateForm }
              placeholder="Escola"
            />
          </div>
        </div>

        <div>
          <label>Professor(a)</label>
          <input
            type="text"
            name="professor"
            value={ queixaData.professor || '' }
            onChange={ handleUpdateForm }
            placeholder="Professor(a)"
          />
        </div>

        <div>
          <label>Aluno(a)</label>
          <input
            type="text"
            name="aluno"
            value={ queixaData.aluno || '' }
            onChange={ handleUpdateForm }
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
              onChange={ handleUpdateForm }
              placeholder="Ano/Ciclo" />
          </div>

          <div>
            <label>Idade</label>
            <input
              type="text"
              name="idade"
              value={ queixaData.idade || '' }
              onChange={ handleUpdateForm }
              placeholder="Idade" />
          </div>

          <div>
            <label>Turno</label>
            <select 
                  name="turno" 
                  value={ queixaData.turno ? queixaData.turno.toString() : 'Selecione' } 
                  onChange={ handleUpdateForm }
                >
                  <option disabled>Selecione</option>
                  <option value="Manhã">Manhã</option>
                  <option value="Tarde">Tarde</option>
                </select>
          </div>

          <div>
            <label>Retido?</label>
                <select 
                  name="retido" 
                  value={ queixaData.retido ? queixaData.retido.toString() : 'Selecione' } 
                  onChange={ handleUpdateForm }
                >
                  <option disabled>Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
          </div>
        </div>

        <div className={ `${styles.flexSpaceBetween} ${styles.flexLine5}`}>
          <div>
            <label>O principal problema é </label>
            <select 
              name="problema"
              value={ queixaData.problema ? queixaData.problema : 'Selecione' } 
              onChange={ handleUpdateForm }
            >
              <option disabled>Selecione</option>

              {problemas.map(problema => (
                <option key={problema.id} value={problema.id}>{problema.nome}</option>
                ))
              }
            </select>
          </div>

          <div>
            <label>Qual a Hipótese de Escrita? </label>
            <select 
              name="hipotese_escrita"
              value={ queixaData.hipotese_escrita ? queixaData.hipotese_escrita.toString() : 'Selecione' } 
              onChange={ handleUpdateForm }
            >
              <option disabled>Selecione</option>

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
            <select 
              name="diagnostico"
              value={ queixaData.diagnostico ? queixaData.diagnostico.toString() : 'Selecione' } 
              onChange={ handleUpdateForm }
            >
              <option defaultValue={'Selecione'} disabled>Selecione</option>
              <option value="1">Sim</option>
              <option value="0">Não</option>
            </select>
          </div>

          {queixaData.diagnostico=="1" && (
            <div>
              <label>Qual?</label>
              <input 
                type="text"
                name="desc_diagnostico"
                value={ queixaData.desc_diagnostico || '' }
                onChange={ handleUpdateForm }              
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