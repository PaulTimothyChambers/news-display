const apiEndpoint = 'https://api.nytimes.com/svc/topstories/v2'

const checkResponse = (response) => {
  if (response.statusCode === 500) {
    throw new Error("Error 500 - Server Error. Please try refreshing page.")
  }
  return response.json()
}

function loadWorldArticles() {
  return fetch(`${apiEndpoint}/world.json?api-key=2ehzLoKkCXtF2lzzbaK2MCq8En9hZaNA `)
    .then(response => checkResponse(response))
}
// 2ehzLoKkCXtF2lzzbaK2MCq8En9hZaNA
