import { useContext, useState } from 'react';
import {
  CadastroEtapa1,
  CadastroEtapa2,
  CadastroEtapa3,
  CadastroEtapa4,
  CadastroEtapa5,
  CadastroEtapa6,
  CadastroEtapa7
} from '../components/FichaCadastro/';
import FormularioContext from '../hooks/FormularioContext';

import { useSessionCounter } from '../hooks/useSessionCounter';
import ficha from './Styles.module.scss';

export const FichaCadastro = () => {

  const { session, increment, decrement } = useSessionCounter(1);
  const { queixaData } = useContext(FormularioContext);

  const salvarQueixa = () => {
    console.log(queixaData);
  }

  return (
    <>
      <div className={ficha.container}>


        <header>
          <h2>Ficha de Queixa Ensino Fundamental {session}</h2>
        </header>

        {session == 1 &&
          <CadastroEtapa1 />
        }

        {session == 2 &&
          <CadastroEtapa2 />
        }

        {session == 3 &&
          <CadastroEtapa3 />
        }

        {session == 4 &&
          <CadastroEtapa4 />
        }

        {session == 5 &&
          <CadastroEtapa5 />
        }

        {session == 6 &&
          <CadastroEtapa6 />
        }

        {session == 7 &&
          <CadastroEtapa7 />
        }

        <footer>
          <button onClick={() => decrement(1)}>Voltar</button>
          <button onClick={() => increment(1)}>Avançar</button>
          <button onClick={salvarQueixa}>Salvar</button>
        </footer>
      </div>
    </>
  )
}