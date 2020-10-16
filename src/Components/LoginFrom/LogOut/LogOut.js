import React from 'react';
import { useHistory } from 'react-router-dom';
import Home from '../../Home/Home';

const LogOut = () => {
    const history = useHistory();

    const reDiract = () => {
        history.push('/Home');
    };
    reDiract();

    return (
        <div>

        </div>
    );
};

export default LogOut;