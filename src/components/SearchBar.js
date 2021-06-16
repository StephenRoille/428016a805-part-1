import React, { Component } from "react"

export default class SearchBar extends Component {
  state = { term: "" }

  onSumbit = (e) => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.term)
  }

  render() {
    const isLoading = this.props.isLoading ? "loading" : ""
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onSumbit} className={`ui ${isLoading} form`}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              name="search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}
