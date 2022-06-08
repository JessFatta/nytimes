import React, { Component } from 'react'
import { getArticles } from '../apiCalls'
import AllArticles from '../AllArticles/AllArticles'
import CurrentArticle from '../CurrentArticle/CurrentArticle'
import { Route } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      currentArticle: '',
      error: null
    }
  }

  componentDidMount() {
    getArticles()
    .then(data => this.setState({articles: data.response.docs}))
    .catch(error => this.setState({error: error}))
  }

  render() {
    return (
      <div className='main'>
      <Header />
      <Route exact path='/' render={() => {
        return (
          <AllArticles articles={this.state.articles} />
        )
      }} />
        <Route exact path='/:id' render={(match) => {
          return (
          <CurrentArticle details={this.state.articles[match.match.params.id]} />
          )
        }} />
      <Footer/>
      </div>
    )
  }
}

export default App