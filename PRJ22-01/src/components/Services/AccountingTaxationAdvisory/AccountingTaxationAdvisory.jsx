import React from 'react';
import './AccountingTaxationAdvisory.css'
import {Container} from 'react-bootstrap'  


class AccountingTaxationAdvisory extends React.Component {
    render() {
    return ( 
        <Container>
            <h2 className="service_title"> Accounting and Taxation Advisory </h2>
                <div className="accounting_text">
                    <p>Tax filing, accounting and bookkeeping to facilitate correctness of company finance.<br/>
                        we help facilitate a number of
                        <span className="p1-span">
                        <a href="/accounting-and-taxation-advisory"> accounting and taxation </a></span>
                        related procedures-we recommend strategies to ensure our clients' taxes are minimized.
                    </p>
        
                    <h3 className="h3-text">
                        We help you with:
                    </h3>
                    <ol className="ordered-list">
                        <li>Accounting and bookkeeping</li>
                        <li> <span className="list-span">
                        <a href="/accounting-and-taxation-advisory">Taxation and strategy</a></span>,including international taxation</li>
                        <li>Account analytics</li>
                        <li>Spend analytics</li>
                        <li> <span className="list-span"><a href="/insurance-advisory">Loan processing</a></span></li>
                    </ol>
                </div>
        </Container>
    )
    }
}

export default AccountingTaxationAdvisory;