import { createContext, useState } from 'react';
import ToastLoading from '../components/Toast/ToastLoading';

interface ToastLoadingContextData {
  setIsLoadingVisible(value: boolean): void;
}

const ToastLoadingContext = createContext<ToastLoadingContextData>({} as ToastLoadingContextData);

const ToastLoadingProvider =({ children }: any) => {
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);

  return(
    <ToastLoadingContext.Provider value={{ setIsLoadingVisible }}>
      {children}
      <ToastLoading message='Aguarde...' isVisible = {isLoadingVisible} setIsLoadingVisible={setIsLoadingVisible}/>
    </ToastLoadingContext.Provider>
  );
}

export { ToastLoadingProvider }

export default ToastLoadingContext;