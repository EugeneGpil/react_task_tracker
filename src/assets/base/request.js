export const request = async (url, method = 'GET', data = []) => {
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
    method
  }

  if (!['GET', 'HEAD'].includes(method)) {
    params.body = JSON.stringify(data)
  }

  return await (await fetch(url, params)).json()
}
