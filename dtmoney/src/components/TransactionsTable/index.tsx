import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Container } from "./style";

interface Trasaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Trasaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(reponse => setTransactions(reponse.data.transactions))
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map( transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}