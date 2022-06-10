import React, { Component } from 'react'
import { getArticles } from '../apiCalls'
import AllArticles from '../AllArticles/AllArticles'
import CurrentArticle from '../CurrentArticle/CurrentArticle'
import { Route } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import FilteredArticles from '../FilteredArticles/FilteredArticles'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      currentArticle: '',
      error: null,
      filteredSections: [],
      selectedSection: null
    }
  }

  componentDidMount() {
    getArticles()
    .then(data => this.setState({articles: data.response.docs}))
    .catch(error => this.setState({error: error}))
  }

  getSections = (section) => {
    if (section === 'All') {
      this.setState({filteredSections: this.state.articles, selectedSection: null})
      return 
    }

    const filtered = this.state.articles.filter(article => article.subsection_name.includes(section))
    this.setState({filteredSections: filtered, selectedSection: section})
  }

  render() {
    return (
      <div className='main'>
      <Header getSections={this.getSections} />
      {this.state.error && <h2 className='loading-error-message'>{this.state.error.message}</h2>}
      <Route exact path='/' render={() => {
        return (
          <div>
            {this.state.selectedSection ?
            <FilteredArticles section={this.state.selectedSection} filteredArticles={this.state.filteredSections} /> :
            <AllArticles articles={this.state.articles} /> }
          </div>
        )
      }} />
      <Route exact path='/:id' render={(match) => {
        console.log(match)
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