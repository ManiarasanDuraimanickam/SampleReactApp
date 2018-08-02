import React from 'react'
import {Area, CirclePie, BarMetric} from 'react-simple-charts'

class ActualizationChart extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        let options={
           
    
    border: 'none',
    strokeWidth: 10,
    labelColor: '#111111',
    labelFontSize: '18px',
    strokeColor: '#408AE5',
    railColor: '#f5f5f5',
    fillColor: 'none',
    percent: 70,
    padding: 0,
        };
        <div>
            <CirclePie percent={5} options={options} width={150} height={150}/>
        </div>
    };
}
const mapStateToProps=(state)=>{

};
const mapDispatchToProps=(dispatch)=>{};
export default connect(mapStateToProps,mapDispatchToProps)(ActualizationChart);