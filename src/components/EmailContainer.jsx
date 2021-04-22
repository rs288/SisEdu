import React from 'react'
import MailCard from './MailCard';

function EmailContainer(props) {
    return (
        <div>
            {
                props.mails.map(mail => (
                    <MailCard key= {mail.id} mail = {mail}/>
                ))
            }
        </div>
    )
}


export default EmailContainer
