import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Home'
import Quiz from './Quiz';
import Score from './Score';


function App() {
  return (
    <>
   <Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/quiz/:type" element={<Quiz />} />
<Route path="/score/:score" element={<Score />} />
</Routes>

</Router>
    </>
  )
}

export default App
