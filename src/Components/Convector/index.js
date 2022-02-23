import React from "react";

class Convector extends React.Component{
    constructor(){
        super();
        this.state ={
            value: '',
            valueConvert: '',
            selectValue: '28',
        }
        this.handelChange = this.handelChange.bind(this);
        this.Convert =this.Convert.bind(this);
        this.handelSelect = this.handelSelect.bind(this);
    }   
    handelChange(e){        
        this.setState({
            value: e.target.value,
            valueConvert: e.target.value / this.state.selectValue,
        })
    }
    Convert(e){
        this.setState({
            valueConvert: Number(e.target.value),
            value: Number(e.target.value) * this.state.selectValue,
        })
    }
    handelSelect(e){
        this.setState({
            selectValue: e.target.value,
        })
    }
 
    render(){
        console.log(this.state.value);
        console.log(this.state.valueConvert);
        return(
            <div>
                <form>
                    <p>UA
                    <input type = "number" value={this.state.value} onChange={this.handelChange}/>
                    </p>                  
                    
                    <select  value={this.state.selectValue} onChange = {this.handelSelect}>
                        <option value="28">USD</option>
                        <option value="32">EURO</option>
                        <option value="0.3">RUB</option>
                    </select>
                    
                    <input type= "number" value={this.state.valueConvert} onChange = {this.Convert}/>
                    <h2>{this.state.selectValue}</h2>
                    
                    
                    
                </form>
            </div>
        );
    }
}

export default Convector;