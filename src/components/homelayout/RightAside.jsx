import React, { use } from 'react';
import FindUs from './FindUs';
import QZone from './QZone';
import { AuthContext } from '../../provider/AuthProvider';

const RightAside = () => {
const {bookmarkNews} = use(AuthContext);
//   console.log(bookmarkNews)

    return (
        <div>
            <FindUs bookmarkNews={bookmarkNews}></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;