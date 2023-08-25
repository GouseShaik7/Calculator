import React, { Component } from 'react'
import './task10.css'
export class Task10 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         inp:""
      }
    }
    click1=()=>{
      this.setState({
        inp:this.state.inp+'1'
      })
    }
    click2=()=>{
      this.setState({
        inp:this.state.inp+'2'
      })
    }
    click3=()=>{
      this.setState({
        inp:this.state.inp+'3'
      })
    }
    click4=()=>{
      this.setState({
        inp:this.state.inp+'4'
      })
    }
    click5=()=>{
      this.setState({
        inp:this.state.inp+'5'
      })
    }
    click6=()=>{
      this.setState({
        inp:this.state.inp+'6'
      })
    }
    click7=()=>{
      this.setState({
        inp:this.state.inp+'7'
      })
    }
    click8=()=>{
      this.setState({
        inp:this.state.inp+'8'
      })
    }
    click9=()=>{
      this.setState({
        inp:this.state.inp+'9'
      })
    }
    click0=()=>{
      this.setState({
        inp:this.state.inp+'0'
      })
    }
    clickplus=()=>{
      this.setState({
        inp:this.state.inp+'+'
      })
    }
    clickminus=()=>{
      this.setState({
        inp:this.state.inp+'-'
      })
    }
    clickmul=()=>{
      this.setState({
        inp:this.state.inp+'*'
      })
    }
    clickequal=()=>{
      this.setState({
        inp:eval(this.state.inp)
      })
    }
    clickdivide=()=>{
      this.setState({
        inp:this.state.inp+'/'
      })
    }
    clickmod=()=>{
      this.setState({
        inp:this.state.inp+'%'
      })
    }
    clickc=()=>{
      this.setState({
        inp:""
      })
    }
  render() {
    
    return (
      <div className='total'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>Calculator</label>
        <br></br>
        <input type='text' value={this.state.inp} />
        
        
        
        <br></br>
        <button className='s1' onClick={this.click1}>1</button>
        <button className='s2' onClick={this.click2}>2</button>
        <button className='s3' onClick={this.click3}>3</button>
        <br></br>
        <button className='s4' onClick={this.click4}>4</button>
        <button className='s5' onClick={this.click5}>5</button>
        <button className='s6' onClick={this.click6}>6</button>
        <br></br>
        <button className='s7' onClick={this.click7}>7</button>
        <button className='s8' onClick={this.click8}>8</button>
        <button className='s9' onClick={this.click9}>9</button>
        <br></br>
        <button className='plus' onClick={this.clickplus}>+</button>
        <button className='s0' onClick={this.click0}>0</button>
        <button className='minus' onClick={this.clickminus}>-</button>
        
        
        <br></br>
        
       
        <button className='mul'  onClick={this.clickmul}>*</button>
        
        <button className='divi' onClick={this.clickdivide}>/</button>
        <button className='mod' onClick={this.clickmod}>%</button>
        <br></br>
        <button className='sc' onClick={this.clickc}>C</button>
        <br></br>
        <button className='eq' onClick={this.clickequal}>=</button>
        <br></br>
        
       
      </div>
    )
  }
}

export default Task10
