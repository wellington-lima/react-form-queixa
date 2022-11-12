import { createContext, useState } from 'react';

interface IQueixa {
  data: Date;
  escola: string;
  professor: string;
  aluno: string;
  ano: number;
  idade: number;
  turno: 'Manhã' | 'Tarde';
  retido: 'Sim' | 'Não';
  problema: number;
  hipotese_escrita: number;
  diagnostico: string;
  desc_diagnostico: string;
  agressividade: number;
  apatia: number;
  falta_atencao: number;
  agitacao: number;
  leitura: number;
  escrita: number;
  compreensao_texto: number;
  repertorio_numerico: number;
  calculo: number;
  memorizacao: number;
  troca_fala: string;
  impacto_fala: string;
  troca_escrita: string;
  adicao_letra: string;
  omissao_letra: string;
  audicao_compreensao: string;
  atividades: string;
  medida_escola: string;
  participacao_familia: string;
  relacao_familia: string;
  obs_professor: string;
  obs_escola: string;
}

interface IFormularioContext {
  queixaData: IQueixa;
  handleUpdateForm(
    e: React.ChangeEvent<HTMLInputElement> 
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
    ): void;
  setDataDefault(name: string, value: string): void
}

const FormularioContext = createContext<IFormularioContext>({} as IFormularioContext);

const FormularioProvider = ({ children }: any) => {
  const [queixaData, setQueixaData] = useState<IQueixa>({} as IQueixa);

  const handleUpdateForm = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQueixaData({ ...queixaData, [name]: value });
    console.log(queixaData);
  }

  const setDataDefault = (name: string, value: string) => {
    setQueixaData({ ...queixaData, [name]: value });
    console.log(queixaData);
  }

  return(
    <FormularioContext.Provider value={{ queixaData, handleUpdateForm, setDataDefault }}>
      {children}
    </FormularioContext.Provider>
  )
}

export { FormularioProvider }

export default FormularioContext