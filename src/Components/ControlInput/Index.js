import React from "react";

const url = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5";

class ControlInput extends React.Component{
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
    componentDidMount(){
        fetch(url)
        .then((resp) => resp.json())
        .then(items => this.setState({arr: items}) )
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
                    
                    {/* <select  value={this.state.selectValue} onChange = {this.handelSelect}>
                        <option value="28">USD</option>
                        <option value="32">EURO</option>
                        <option value="0.3">RUB</option>
                    </select> */}
                    
                    <input type= "number" value={this.state.valueConvert} onChange = {this.Convert}/>
                    <h2>{this.state.selectValue}</h2>
                    {this.state.arr?.map((obj) =>{
                        return  ( 
                            <div>
                                 <select  value={this.state.selectValue} onChange = {this.handelSelect}>
                                        <option value={obj.buy}>{obj.ccy}</option>
                                        <option value={obj.buy}>{obj.ccy}</option>
                                        <option value={obj.buy}>{obj.ccy}</option>
                                </select>                                 
                                <h2>{obj.ccy}{obj.buy}</h2>
                                
                            </div>
                          
                          );
                    })}
                    <hr />
                    
                    
                </form>
            </div>
        );
    }
}

export default ControlInput;