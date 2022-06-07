const getArticles = () => {
  return fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=HgvRyYHqPwWtutaVXGru7TgI4wI22fjj')
  .then(response => handleResponse(response))
}

const handleResponse = (response) => {
  if(!response.ok) {
    throw new Error('Something went wrong!')
  } else {
    return response.json()
  }
}


export { getArticles }