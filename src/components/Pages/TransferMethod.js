import React from 'react';
import { Link } from 'react-router-dom';

const TransferMethod = () => {
    return (
        <div>
            This is TransferMethod.
            <ul>
                <li><Link to='/method/within_bank'>Within Bank</Link></li>
                <li><Link to='/method/cross_bank'>Cross Bank</Link></li>
                <li><Link to='/method/cross_country'>Cross Country</Link></li>
            </ul>
        </div>
    )
}

export default TransferMethod;
