import { objectToUri } from '@scandipwa/scandipwa/src/util/Url';
import { PureComponent } from 'react';
import './Checkout.extension.style';

class ProgressBar extends PureComponent{
  state = {
    steps: [
      "Shipping", "Review & Payments"
    ],
  }

  mapSteps(){
    
    return(
      <div className='progressbar'>
        {
        this.state.steps.map((data,i) => {
          return(
            <div className='line-circle '>
              <div className='line'></div>
              <div className='circle '>
                <label>{i+1}</label>
                <label>{data}</label>
              </div>
            </div>
          );
        }) 
        }
        <div className='line'></div>
      </div>
            // return(
      //   <Step index = {i+1} data ={data}/>
      // );
    )
  }
  render(){
    return(
      <div className='progressbar-container'>
        { this.mapSteps() }
      </div>
    );
  }
}

export default ProgressBar;