import React from 'react';

function NeedHelp({ working, toggleWorking }) {
    return (
        <div>
            <p className='NeedHelpLinks' onClick={toggleWorking}>Need Help?</p>
            {working &&
                <div>
                    <a href="http://" target="_blank" className='NeedHelpLinks'>Forgot your password?</a>
                    <a href="http://" target="_blank" className='NeedHelpLinks'>Other issues with Sign-In</a>
                </div>
            }
        </div>
    );
}

export default NeedHelp;
