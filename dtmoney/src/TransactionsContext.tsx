import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './service/api';

interface Trasaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Trasaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Trasaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(reponse => setTransactions(reponse.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      { children }
    </TransactionsContext.Provider>
  );
}