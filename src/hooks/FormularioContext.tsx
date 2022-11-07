import { createContext, useState } from 'react';

interface IQueixa {
  escola: string;
  professor: string;
  aluno: string;
  ano: number;
  idade: number;
  turno: string;
  retido: boolean;
  problema: number;
  hipotese_escrita: number;
  diagnostico: boolean;
  desc_diagnostico: string;
}

interface IFormularioContext {
  queixaData: IQueixa;
  handleQueixa(queixa: IQueixa): void; 
}

const FormularioContext = createContext<IFormularioContext>({} as IFormularioContext);

const FormularioProvider = ({ children }: any) => {
  const [queixaData, setQueixaData] = useState<IQueixa>({} as IQueixa);

  const handleQueixa = (queixa: IQueixa) => {
    setQueixaData(queixa);
  }

  return(
    <FormularioContext.Provider value={{ queixaData, handleQueixa }}>
      {children}
    </FormularioContext.Provider>
  )
}

export { FormularioProvider }

export default FormularioContext