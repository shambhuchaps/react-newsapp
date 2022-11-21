
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // c = 'jhon';
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API
  

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            {/* hello my first class based component {this.c} */}
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='general' pageSize={this.pageSize} country="in" category='general' />} />
            <Route path="science/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country="in" category='science' />} />
            <Route path="business/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country="in" category='business' />} />
            <Route path="entertainment/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country="in" category='entertainment' />} />
            <Route path="health/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="in" category='health' />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country="in" category='sports' />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country="in" category='technology' />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="in" category='general' />} />

          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
