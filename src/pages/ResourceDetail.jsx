import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, Container } from '@mantine/core';

const fetchResourceDetail = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}/`);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
};

export default function ResourceDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(['resource', id], () => fetchResourceDetail(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <Container className="center-container">
      <Card className="card">
        <h2>{data?.name}</h2>
        <p>Height: {data?.height} cm</p>
        <p>Mass: {data?.mass} kg</p>
        <p>Birth Year: {data?.birth_year}</p>
      </Card>
    </Container>
  );
}
