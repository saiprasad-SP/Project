import React from 'react';
import './privacyPolicy.css';
import {Link} from 'react-router-dom';
import {BiSearch} from 'react-icons/bi';
import {FiWatch} from 'react-icons/fi';
import img from '../../Img/guardian-capital-investment-advisors-90x90.jpg'
export default function PrivacyPolicy() {
  return (
    <div className='body'>
        <h1 className='header'>Privacy Policy</h1>
        <section className='section'>
            <div className='firstDiv'>
                <div>
                    <p>This privacy policy sets out how Guardian Capital uses and protects any information that you share when you use this website.<strong>Guardian Capital</strong> is committed to ensuring that your privacy is protected at all times.Should we ask you to provide certain information by which you can be indentified when using this website, you can be assured that it will only be used in accordance with this privacy statement.</p>
                    <p><strong>Guardian Capital</strong>may change this policy from time to time by updating this page. This policy is effective from june 1,2018.</p>
                    <p><strong>Guardian Capital</strong>understands that our relationship is strongly built on trust and faith. In the course of using the information on this website or availing the services, <strong>Guardian Capital</strong>may become privy to the personal information of its customer including information that is of confidential nature. Guardian Capital is strictly committed to protecting the privacy of its Customer and has taken reasonable measures to protect the confidentiality of the customer information and its transmission through World Wide Web. However, it shall not be liable in any manner for disclosure of the confidential information in accordance with this Privacy Commitment or in terms of the agreement if any with the Customer or by reasons beyond its control. We may however be required to disclose your personal information to Government, Judicial bodies, and our Regulators or to any person to whom the Firm is under an obligation to make disclosure under the requirements of any law binding on the Firm or any of its branches if required. Hyperlink Policy for user Any hyperlink to other Internet sites is at the customer’s own risk. The contents of which and the accuracy of opinions expressed are not verified, monitored, or endorsed by<strong>Guardian Capital</strong>, in any way or manner.<strong>Guardian Capital</strong> is not responsible for the setup of any hyperlink from a third-party website to <strong>Guardain Capital</strong>.  </p>
                </div>
                <div>
                    <h1>What we collect</h1>
                    <h6>We may collect the following information</h6>
                    <ul>
                        <li>Name and contact details</li>
                        <li>Personal information,including date of birth,Aadhar Number, and Permanent Acount Number(PAN)</li>
                        <li>Demographic information such as gender and income</li>
                        <li>Other information that can help us improve our services</li>
                    </ul>
                </div>
                <div>
                    <h1>What we do with the information we gather</h1>
                    <ul>
                        <li>To conduct Know-Your-Customer registration as required by SEBI and/or other regulatory bodies</li>
                        <li>To perform compliance checks and keep/maintain internal records</li>
                        <li>To use the information to improve our products and services</li>
                        <li>To periodically send emails to your registered email address about your investments, or other information which we think you may find interesting.</li>
                        <li>You will be free to unsubscribe from our mailing list at any time if you do not wish to receive such emails from us. From time-to-time, we may also use your information to contact you via phone or email for market research purposes.</li>
                        <li>We will not sell, distribute or lease your personal information to third parties unless we are required to share such information under the terms and conditions of the products and services you avail, or we are required to do so by law.</li>
                    </ul>
                </div>
                <div>
                    <h1>security</h1>
                    <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
                </div>
                <div>
                    <h1>Links to other websites</h1>
                    <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over such third-party websites. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
                </div>
                <div>
                    <h1>Controlling your personal information</h1>
                    <p>If you believe that any of your information with us is incorrect or incomplete, please email us as soon as possible at info@futurewealth.co.in. We will promptly correct any information found to be incorrect.</p>
                </div>
                <div>
                    <h1>Security certificates</h1>
                    <p><strong>Future wealth</strong> is an online financial services company. We fully recognize and understand the security implications of being a service provider with whom people trust their money. There are many safeguards we adopt in this regard – some of these are technical, and some are structural.</p>
                </div>
                <div>
                    <h1>When it comes to data security, our goal is to ensure that:</h1>
                    <ul>
                        <li>Your data is stored safely and securely – passwords are one-way encrypted before being stored in the database for high security.</li>
                        <li>All communication with you, or with mutual fund companies and other service providers – is encrypted using the highest standards.</li>
                        <li>Your data is not shared with anyone unless you have explicitly requested us to do so to fulfill a transaction request.</li>
                        <li>To ensure that we achieve these goals, we have a variety of certifications/trust verifications in place for our firm, both from technical and legal/operational perspectives. All our communications are encrypted by 256-bit encryption, and our data is hosted with top-tier hosting service providers. Also, our data is continuously backed up to ensure continuity of operations.</li>
                    </ul>
                </div>
            </div>
            <div className='secondDiv'>
                <div className=''>
                    <input type="text" name="" id="input" placeholder='Search..' />
                    <BiSearch/>
                </div>
                <div>
                    <h6>Recent Posts</h6>
                    <h5><strong>Why investment Decision based on Large Cap, Mid  Cap and Small Cap is flawed</strong></h5>
                    <h6><FiWatch/>March 22,2022</h6>
                </div>
                <div>
                    <h5><strong>Guardian Capital:What to expect from your invest-ments-going forward?</strong></h5>
                    <h6><FiWatch/>March 22,2022</h6>
                </div>
                <div>
                    <img src={img} alt="" />
                    <h5><strong>5 Questions to Ask your Wealth Manager</strong></h5>
                    <h6><FiWatch/>August 17,2021</h6>
                </div>
                <div>
                    <h5><strong>Categories</strong></h5>
                    <h6><Link to='/#'>Clients Education</Link></h6>
                    <h6><Link to='/#'>Equity investments</Link></h6>
                    <h6><Link to='/#'>Financial Consulting</Link></h6>
                    <h6><Link to='/#'>Guardian</Link></h6>
                    <h6><Link to='/#'>Research</Link></h6>
                    <h6><Link to='/#'>Smart Investing</Link></h6>
                    <h6><Link to='/#'>Traditional Investments</Link></h6>
                    <h6><Link to='/#'>Uncategorized</Link></h6>
                </div>
                <div>
                    <h1>Tags</h1>
                    <div className="container">
                        <div className="card one">equity investments</div>
                        <div className="card two">financial advisory</div>
                    </div>
                    <div className="container">
                        <div className="card three">financial consulting</div>
                    </div>
                    <div className="container">
                        <div className="card four">guradian capital investment advsors india</div>
                    </div>
                    <div className="container">
                        <div className="card seven">Health Insurance</div>
                        <div className="card eight">Insurances</div>
                    </div>
                    <div className="container">
                        <div className="card five">investment approach</div>
                        <div className="card six">life Insurance</div>
                    </div>
                    <div className="container">
                        <div className="card nine">quality-based returns</div>
                    </div>
                    <div className="container">
                        <div className="card ten">real estate is not a goof investment</div>
                        <div className="card eleven">Research</div>
                    </div>
                    <div className="container">
                        <div className="card twelve">smart investing</div>
                        <div className="card thirteen">wealth manager</div>
                    </div>
                    <div className="container">
                        <div className="card fouteen">Work from Home</div>
                    </div>
                </div>
                {/* <div className='parent'>
                    <h5><strong>Tags</strong></h5>
                    <div className='div1'>equity investments</div>
                    <div className='div2'>financial advisory</div>
                    <div className='div3'>financial consulting</div>
                    <div className='div4'>guradian capital investment advsors india</div>
                    <div className='div5'>Health Insurance</div>
                    <div className='div6'>Insurances</div>
                    <div className='div7'>investment approach</div>
                    <div className='div8'>life Insurance</div>
                    <div className='div9'>quality-based returns</div>
                    <div className='div10'>real estate is not a goof investment</div>
                    <div className='div11'>Research</div>
                    <div className='div12'>wealth manager</div>
                    <div className='div13'>wealth manager</div>
                    <div className='div14'>Work from Home</div>
                </div> */}
            </div>
        </section>
    </div>
  )
}
