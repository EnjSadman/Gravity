const BASE_URL = 'https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';

export const ServerGetRequest = async () => {
  const result = await fetch(BASE_URL);

  return result.json();
};
