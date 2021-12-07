import {useState} from 'react';

import offerTwenty from '../../../images/twenty.gif';
import offerFifty from '../../../images/fifty.gif';
import waiverThirty from '../../../images/thirty.gif';
import waiverSixty from '../../../images/sixty.gif';

//import Admission from '../../../images/Admission.gif';
import Offer from './Offer';
const offerInfo = [
    {
        id: 1,
        img: offerFifty,
        name: '50% Offer For New Students',
        body: 'For New Admission'
    },
    {
        id:2,
        img: waiverThirty,
        name: '30% Offer For Merit Scholarship',
        body: 'For Results 3.60'
    },
    {
        id:3,
        img: waiverSixty,
        name: '60% For Merit Scholarship',
        body: 'For Results 4.00'
    }
]

const Offers = () => {
    const [offers, setOffers] = useState(offerInfo)
    return (
        <div className="row ">
            <h1 style={{fontWeight:'700',color:'#23303F'}}>SPECIAL OFFERS FOR STUDENTS</h1>
            {

                offers.map(offer => <Offer key={offer.id} offer={offer} />)
            }
        </div>
    )
}
export default Offers;
