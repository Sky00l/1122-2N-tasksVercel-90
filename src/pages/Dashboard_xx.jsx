import styled from 'styled-components';

const Layout = styled.main`
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  list-style-type: none;
  h1 {
    font-size: 18px;
    text-align: center;
    font-weight: bolder;
  }
`;
function Dashboard_xx() {
  return (
    <Layout>
      <div>
        <h1>Final 2 Exam of Web Prog2, 2024</h1>
      </div>
      <div>
        <h2>
          <li>Guest name:林泓君</li>
          <li>Guest student ID:207410290</li>
          <li>Supabase email:207410290@gmail.com</li>
          <li>Supabase user ID:9e30df4d-6968-46cf-a745-810d8719319b</li>
        </h2>
      </div>
    </Layout>
  );
}

export default Dashboard_xx;
