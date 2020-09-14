import server from '@/api/index';

export async function all() {
  let { data } = await server.get('http://localhost:8081/ecs/events/created?start=1&limit=100');
  return data;
}

export async function getOne(eventId) {
  // let { data } = await server.get(`http://localhost:8081/ecs/jobs?eventId=${eventId}=E&start=1&limit=3`);
  let { data } = await server.post(`http://localhost:8081/ecs/event/${eventId}`);
  console.log(data);
  return data;
}

export async function getControl() {
  let { data } = await server.get(`http://localhost:8081/ecs/events/to-control?start=1&limit=4`);
  return data;
}

export async function add(event) {
  console.log('event', event);
  let { data } = await server.post(`http://localhost:8081/ecs/event`, {
    event
  });
  return data;
}

export async function change(token, id, count){
  let { data } = await server.put('cart.php', { token, id, cnt: count }, {
    errorSuppression: { text: 'при изменении количества товара', exclude: [ 422 ] }
  })
  return data;
}