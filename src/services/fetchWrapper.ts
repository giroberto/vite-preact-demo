const fetchWrapper = (endpoint,customConfig) => {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${customConfig.token}`)
  const fetchConfig = {
    method: 'GET',
    headers: myHeaders,
    ...customConfig,
  }

  return window.fetch(endpoint, fetchConfig).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  });
};

export default fetchWrapper;
