import React from 'react'
import MailCard from './MailCard';
import MailInformation from './MailInformation';

function EmailContainer(props) {

    return (
        <div>
            <div className = "card">
            {
                props.mails.map(mail => (
                    <MailCard key= {mail.id} mail = {mail}/>
                ))
            }
            </div>


        </div>
    )
}


export default EmailContainer
