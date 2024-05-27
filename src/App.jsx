import './App.css'
import { Routes, Route } from 'react-router-dom';
import S01SVG from './Sections/S01SVG'
import E2012styleBarGraphInD3 from './Sections/GRAPH2012/E2012styleBarGraphInD3'
import E2013styleBarGraphInD3 from './Sections/GRAPH2013/E2013styleBarGraphInD3'
import E2014styleBarGraphInD3 from './Sections/GRAPH2014/E2014styleBarGraphInD3'
import E2015styleBarGraphInD3 from './Sections/GRAPH2015/E2015styleBarGraphInD3'
import E2016styleBarGraphInD3 from './Sections/GRAPH2016/E2016styleBarGraphInD3'
import E2017styleBarGraphInD3 from './Sections/GRAPH2017/E2017styleBarGraphInD3'
import E2018styleBarGraphInD3 from './Sections/GRAPH2018/E2018styleBarGraphInD3'
import E2019styleBarGraphInD3 from './Sections/GRAPH2019/E2019styleBarGraphInD3'
import E2020styleBarGraphInD3 from './Sections/GRAPH2020/E2020styleBarGraphInD3'
import E2021styleBarGraphInD3 from './Sections/GRAPH2021/E2021styleBarGraphInD3'

function App() {

  return (
    <>
      <Routes>
            <Route path='/' element={<S01SVG />} />
            <Route path='2012' element={<E2012styleBarGraphInD3 />} />            
            <Route path='2013' element={<E2013styleBarGraphInD3 />} />            
            <Route path='2014' element={<E2014styleBarGraphInD3 />} />            
            <Route path='2015' element={<E2015styleBarGraphInD3 />} />          
            <Route path='2016' element={<E2016styleBarGraphInD3 />} />
            <Route path='2017' element={<E2017styleBarGraphInD3 />} />
            <Route path='2018' element={<E2018styleBarGraphInD3 />} />
            <Route path='2019' element={<E2019styleBarGraphInD3 />} />
            <Route path='2020' element={<E2020styleBarGraphInD3 />} />
            <Route path='2021' element={<E2021styleBarGraphInD3 />} />
        </Routes>
    </>
  )
}

export default App
