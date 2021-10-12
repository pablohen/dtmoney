import { useEffect } from 'react';
import api from '../../services/api';
import { Container } from './styles';

interface Props {}

const TransactionsTable = (props: Props) => {
  useEffect(() => {
    api.get('/transactions').then((res) => console.log(res.data));
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>30/10/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 1000,00</td>
            <td>Casa</td>
            <td>30/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
