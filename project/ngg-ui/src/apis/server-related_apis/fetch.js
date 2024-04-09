import { freezeUI, unfreezeUI } from '../client-related_apis/UI_manipulations';

export default async function djangoFetch({ url = '', variables = {}, method = 'GET', }) {
  const result = await fetch('http://localhost:8000/api/' + url, {
    method: method.toUpperCase(),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: method === 'POST' ? JSON.stringify(variables) : null,
  });
  const data = await result.json();
  return data;
}

export async function djangoFetchFreeze(docToFreeze, reqParams) {
  freezeUI(docToFreeze);
  const result = await djangoFetch({ ...reqParams, });
  unfreezeUI(docToFreeze);
  return result;
}
