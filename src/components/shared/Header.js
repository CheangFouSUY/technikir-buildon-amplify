import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/method'>Transfer Method</Link></li>
                <li><Link to='/authorization'>Authorization</Link></li>
                <li><Link to='/method/within_bank'>Within Bank</Link></li>
                <li><Link to='/method/cross_bank'>Cross Bank</Link></li>
                <li><Link to='/method/cross_country'>Cross Country</Link></li>
                <li><Link to='/transactions/:id'>Transactions</Link></li>
            </ul>
        </div>
    )
}

export default Header;
