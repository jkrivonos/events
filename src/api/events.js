import server from '@/api/index';

export async function all() {
  let { data } = await server.get('http://localhost:8081/ecs/events/created?start=1&limit=100');
  return data;

}

export async function getOne(eventId) {
  let { data } = await server.get(`http://localhost:8081/ecs/jobs?eventId=${eventId}=E&start=1&limit=3`);
  return data;

}