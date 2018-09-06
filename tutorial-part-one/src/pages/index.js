import React from "react"
import Link from "gatsby-link"

export default () => 
  <div style={{margin:'3rem auto', maxWidth: 600}}>
    <h1>Greetings Earthlings!</h1>
    <p>That's different!! LINK: <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">link</a></p>
    <blockquote>
      <p>Something something blockquote</p>
    </blockquote>
    <img src="https://source.unsplash.com/random/400x200" alt=""/>
    <div>
        <Link to="/page-2/">Go Here to Page 2</Link>
    </div>
  </div>
