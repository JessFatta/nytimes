import React, { Component } from 'react'
import { getArticles } from '../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      currentArticle: ''
    }
  }

  componentDidMount() {
    getArticles()
    .then(data => this.setState({articles: data}))
  }

  render() {
    return (
      <div>
        <h1>hey</h1>
      </div>
    )
  }
}

export default App