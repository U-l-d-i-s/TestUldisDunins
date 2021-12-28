import { PureComponent } from 'react'
import './Checkout.extension.style';

class Step extends PureComponent {

  render() {
    return (
      <div className='progressbar'>
      <div refclassName='line-circle '>
        <div className='line'></div>
        <div className='circle '>
          <label>{this.props.index}</label>
          <label>{this.props.data}</label>
        </div>
      </div>
      </div>
    );
  }
}

export default Step;