import server from '@/api/index';

export async function login() {
  let { data } = await server.get('http://localhost:8081/ecs/events/created?start=1&limit=100');
  console.log('login');
  return data;
}

export async function registration() {
  let { data } = await server.get('http://localhost:8081/ecs/events/created?start=1&limit=100');
  console.log('login');
  return data;
}


