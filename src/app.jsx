import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './app.less'

// class App extends React.Component {
//     render() {
//         return (
//             <div>React Source : root/code/packages</div>
//         )
//     }
// }

globalThis.ob = document.getElementById('app')

function App() {
    const [state, setState] = useState(1)
    const [t, setT] = useState('Title')
    const arr = new Array(10).fill(0)
    const onClick = evt => {
        setState(s => 5)
        setTimeout(() => {
            console.log(`qwert`,)

        }, 50);
        
    }

    useEffect(()=>{
        // window.alert('did mount')
        // console.log(`did mount`,)
        // setTimeout(()=>{
        //     console.log(`insert 9`,)
        //     // setState(s => fibonacci(38))
        //     setT(s => {
        //         const r = fibonacci(41)
        //         console.log(`return result:`,r)
        //         return r
        //     })
        // },3000)
        // ReactDOM.unstable_deferredUpdates(()=>{
        //     console.log(`insert 9`,)
        //     // setState(s => fibonacci(38))
        //     setT(s => {
        //         const r = fibonacci(41)
        //         console.log(`return result:`,r)
        //         return r
        //     })
        // })
    },[])

    const onMouseOver = evt => {
        t === 'Title' ? setT('Header'):setT('Title')
    }

    return (
        <div className='root'>
            <h1 className='h' onMouseOver={onMouseOver} style={{width: 100,backgroundColor:'aliceblue'}}>{t}</h1>
            {/* {
                arr.map((el,i)=>{
                    return (
                        <button key={i} className='b' onClick={onClick}>Update {state}</button>
                    )
                })
            } */}
            <button className='b' onClick={onClick}>Update {state}</button>
            <a href='#'>test</a>
            <Test/>
        </div>
            
    )
}

ReactDOM.createRoot(globalThis.ob).render(<App />)
let i = 0
// let timer = setInterval(()=>{
//     if(i > 50 ){
//         clearInterval(timer)
//     }
//     i++
//     console.log(`frame`,)
// },20)

// ReactDOM.render(<App />, globalThis.ob)

function fibonacci(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    return fibonacci(n-2) + fibonacci(n-1)
}

function Test(props){
    const [s, setS] = useState(1)
    useEffect(()=>{
        setTimeout(()=>{
            setS(2)
        },1000)
    },[])
    return (
        <p>Lorem ipsum dolor sit amet.</p>
    )
}