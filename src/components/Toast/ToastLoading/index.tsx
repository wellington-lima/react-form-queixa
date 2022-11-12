import { useState } from 'react';
import ReactLoading from 'react-loading';
import styles from './styles.module.scss';

interface ToastLoadingProps {
  message?: string;
  isVisible: boolean,
  setIsLoadingVisible(value:boolean):void
}

const ToastLoading = ({ message, isVisible }: ToastLoadingProps) => {

    return (
      <>
        { isVisible && 
          <div className={`${styles.container} ${styles.position}`}>
            <ReactLoading type="spin" />

            <div className={styles.message}>
              { message }
            </div>
          </div>
        }
      </>
  )
}

export default ToastLoading;