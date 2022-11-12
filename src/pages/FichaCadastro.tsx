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
import { AiOutlineForm } from 'react-icons/ai';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import { RiSave3Line } from 'react-icons/ri';

import styles from './styles.module.scss';

export const FichaCadastro = () => {

  const { session, increment, decrement } = useSessionCounter(1);
  const { setIsLoadingVisible } = useContext(ToastLoadingContext);
  const { addToast } = useContext(ToastContext);

  const salvarQueixa = () => {
    setIsLoadingVisible(true);

    setTimeout(() => {
      setIsLoadingVisible(false);
    }, 3000);

    setTimeout(() => {
      addToast({
        type: "success",
        title: "OK",
        description: "Registro salvo com sucesso.",
        duration: 3000
      });

      setTimeout(() => {
        decrement(6);
      }, 3000)
    }, 3000);
  }

  return (
    <>
      <div className={styles.container}>
        <header>
          <div className={styles.divTitulo}>
            <AiOutlineForm />
            <h2>Ficha de Queixa Ensino Fundamental</h2>
          </div>

          <div className={styles.divBotoes}>
            {session != 1 && <button className={styles.btnAcao} onClick={() => decrement(1)}><BiChevronsLeft size={18} />&nbsp;Voltar</button>}
            {session != 7 && <button className={styles.btnAcao} onClick={() => increment(1)}>Avançar&nbsp;<BiChevronsRight size={18} /></button>}
            {session == 7 && <button className={styles.btnAcao} onClick={salvarQueixa}><RiSave3Line />&nbsp;Salvar</button>}
          </div>
        </header>

        <div className={styles.divEtapa}>
          <span>Etapa {session} de 7</span>
        </div>
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