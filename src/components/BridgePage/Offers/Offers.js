import {useState} from 'react';

import offerTwenty from '../../../images/twenty.gif';
// import Admission from '../../../images/Admission.gif';
import Offer from './Offer';
const offerInfo = [
    {
        id: 1,
        img: offerTwenty,
        name: '50% Offer For New Students',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odio.'
    },
    {
        id:2,
        img: offerTwenty,
        name: '20% Offer For Existing Students',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odio.'
    },
    {
        id:3,
        img: offerTwenty,
        name: '30% For Merit Scholarship',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odio.'
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
