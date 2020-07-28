import React from 'react'
import { Route, BrowserRouter as Router , Switch} from 'react-router-dom'
import Masonry from './components/Masonry'

import open from './components/open'




function App() {

  
  
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Masonry} />
            <Route exact path="/open/:id" component={open} />
            </Switch>
      </Router>

     
    </div>
  )
}

export default App
