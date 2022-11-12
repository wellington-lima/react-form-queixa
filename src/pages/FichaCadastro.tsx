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
import ToastLoadingContext from '../hooks/toastLoading';
import ToastContext from '../hooks/toast';

import { useSessionCounter } from '../hooks/useSessionCounter';
import ficha from './Styles.module.scss';

export const FichaCadastro = () => {

  const { session, increment, decrement } = useSessionCounter(1);
  const { setIsLoadingVisible } = useContext(ToastLoadingContext);
  const { addToast } = useContext(ToastContext);

  const salvarQueixa = () => {
    setIsLoadingVisible(true);

    setTimeout(() => {
      setIsLoadingVisible(false);
    },3000);
    
    setTimeout(() => {
      addToast({
        type: "success",
        title: "OK",
        description: "Registro salvo com sucesso.",
        duration: 3000
      });

      setTimeout(() => {
        decrement(6);
      },3000)
    },3000);
  }

  return (
    <>
      <div className={ficha.container}>
        <header>
          <h2>Ficha de Queixa Ensino Fundamental</h2>
          <div>
            {session != 1 && <button onClick={() => decrement(1)}>Voltar</button> }
            {session != 7 && <button onClick={() => increment(1)}>Avançar</button> }
            {session == 7 && <button onClick={salvarQueixa}>Salvar</button> }
          </div>
        </header>

        <hr />
        <br />

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
      </div>
    </>
  )
}