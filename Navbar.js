import React from 'react'
import './style.css';
import Landingpage from './Landingpage';

function Navbar() {
  return (
    <header>
        <nav className='navbar'>
            <img src="https://s3-alpha-sig.figma.com/img/9767/6bf4/8fd8bc493fe06d623dbd4e3c917f1ab2?Expires=1685923200&Signature=CE0dpXgkTHkGGennxDLEcX3veGASwZo-kMUBo4RUhXN2H6x6jc38zHFNi7OMuTXZBoVqSLRKZALX3d9-RAlHo2ttpLFSilZ0Q2np5nLWFS95BZ4PP6vr7cx0e6136xXt7nRQFxyfwWpm3mRgdZW6A73B3v2OfwKSt24EuXhLwfsj9BsA6W5KFidILi-~5H7v~pBz4qXEtYymaN1BwAqBWl8d8z6-7C-bBN7ogqEONRf5pEycXZPnwrrDCZGe3OFZQ3YY~~8RczzJdwyO3ZObI~ommfld5vr4ZscpAhYtVOabl9cOtm8t8qVqV8YFP1kBQmyXCX2d5bzAEi2Htbjc1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
            <ul>
                
                <li>explore programs</li>
                <li>offers</li>
                <li>refund advantage</li>
                <li>about us</li>
            </ul>
            <div>
                <button type='button' className='login'>login</button>
                <button type='button' className='signup'>sign up</button>
            </div>
        </nav>
        <Landingpage/>
    </header>
  )
}

export default Navbar