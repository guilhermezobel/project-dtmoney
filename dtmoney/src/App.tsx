import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function hanleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function hanleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={hanleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={hanleCloseNewTransactionModal}/>

      <GlobalStyle />
    </>
  );
}

export default App;
