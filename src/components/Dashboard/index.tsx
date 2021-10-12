import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable';
import { Container } from './styles';

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};

export default Dashboard;
