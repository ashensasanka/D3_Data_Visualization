import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import E01CommonSvgElements from './E01CommonSvgElements'
import E02Path from './E02Path'

const S01SVG = () => {
  return (
    <div>
      <h2>Data visualization</h2>
      <br />
      <Link to="/2012">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2012
        </button>
      </Link>
      <br />
      <Link to="/2013">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2013
        </button>
      </Link>
      <br />
      <Link to="/2014">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2014
        </button>
      </Link>
      <br />
      <Link to="/2015">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2015
        </button>
      </Link>
      <br />
      <Link to="/2016">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2016
        </button>
      </Link>
      <br />
      <Link to="/2017">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2017
        </button>
      </Link>
      <br />
      <Link to="/2018">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2018
        </button>
      </Link>
      <br />
      <Link to="/2019">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2019
        </button>
      </Link>
      <br />
      <Link to="/2020">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2020
        </button>
      </Link>
      <br />
      <Link to="/2021">
        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>
          2021
        </button>
      </Link>
    </div>
  )
}

export default S01SVG
