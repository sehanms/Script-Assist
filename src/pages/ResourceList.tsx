import { useQuery } from '@tanstack/react-query';
import { Table, Container } from '@mantine/core';
import { Link } from 'react-router-dom';

const fetchResources = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
};

export default function ResourceList() {
  const { data, isLoading, error } = useQuery(['resources'], fetchResources);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="error">Error loading data: {error.message}</p>;

  return (
<Container>
  <h1 className="text-center fade-in">Jedi & Sith Lords</h1>
  <Table className="table">
    <thead>
      <tr className="table-header">
        <th>Name</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {data?.results?.map((resource, index) => (
        <tr key={index} className="table-row">
          <td>{resource.name}</td>
          <td><Link to={`/resources/${index + 1}`} className="link">View</Link></td>
        </tr>
      ))}
    </tbody>
  </Table>
</Container>

  );
}
