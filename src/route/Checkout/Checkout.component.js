
// import connect from 'react-redux';
import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component';

import ProgressBar from './ProgressBar';

import ContentWrapper from 'Component/ContentWrapper';

import './Checkout.style';
import './Checkout.extension.style';

export class Checkout extends SourceCheckout{

render() {
  return (
        <main block="Checkout">
            <div className='progressbar'>
              <ProgressBar steps = {this.stepMap}/>
            </div>
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
            >
                { this.renderSummary(true) }
                <div block="Checkout" elem="Step">
                    { this.renderTitle() }
                    { this.renderGuestForm() }
                    { this.renderStep() }
                    { this.renderLoader() }
                </div>
                <div>
                    { this.renderSummary() }
                    { this.renderPromo() }
                    { this.renderCoupon() }
                </div>
            </ContentWrapper>
        </main>
    );
}

}

export default Checkout;