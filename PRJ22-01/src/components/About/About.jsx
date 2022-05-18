import React from 'react';
import classes from './About.module.css';
import logo from './../Img/about-bg-2.png';
import Auht1 from './../Img/kartik1-770x744.jpg';
import Auht2 from './../Img/Aseem-1-770x744.jpg';
import Auht3 from './../Img/Kripa1-770x744.jpg';
import BGI from './../Img/FEFeb20-CaseStudySB-Feature.jpg';
import Auht4 from './../Img/Amit-1.jpg';
import {ImForward} from 'react-icons/im';
export default function About() {
  return (
    <div className={classes.parent_container}>
      <div>
        <div style={{position:'relative',textAlign:'center',color:'Black'}}>
          <img src={BGI} alt="Not found" style={{opacity:'0.7',width:'100%',height:'500px'}}/>
          <div><h1 style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)'}}>About Us</h1></div>
        </div>
      </div>
      <div className={classes.flex_container}>
        <div className={classes.flex_child}>
          <div className={classes.childbg}>
            <div style={{textAlign:'center'}}>
              <div className={classes.line_spark}></div>
              <h2>About Guardian</h2>
            </div>
            <div style={{width:'65%',height:'20%',marginLeft:'20%'}}>
            <p>Guardian Capital Investment Advisors is India’s premiere Sebi registered investment advisory company—we offer a wide variety of advisory, wealth management, family office services under one roof—all customizable to fit the client’s individual needs. We can guarantee the best quality of service for the lowest possible price.</p>
            </div>
            <div style={{width:'65%',height:'20%',marginLeft:'20%'}}>
            <p>Guardian Capital Investment Advisors started in 2016 as a boutique investment advisory firm. Within a span of two and a half years, the company grew to become one of the largest investment advisory firms in not just the Andhra and Telangana regions, but all of India. Our holistic approach to financial health, customized financial plans, and unswerving customer service has helped in doubling our client base in very short time span.</p>
            </div>
            <div style={{width:'65%',height:'20%',marginLeft:'20%'}}>
            <p>The company is aptly named to personify our investment approach and core value of guarding your financial future. Our job is to take care of all your financial needs so that you can relax—you have a guardian angel.</p>
            </div>
          </div>
        </div>
        <div className={classes.flex_child}>
          <img src={logo} alt="Not Found" />
        </div>
    </div>
    {/* Guardian advantages section */}
    <div className={classes.parent_container} style={{width:'50%',marginLeft:'25%'}}>
      <div className={classes.line_spark} style={{marginTop:'50px',marginBottom:'25px'}}></div>
      <div className={classes.sec_container} >
        <h1 style={{marginLeft:'30%',marginBottom:'25px'}}>Guardian Advantages</h1>
        <ul className={classes.list_cont}>
        <li><ImForward />We take our fees at the very end of the serices(s) provided, based on your <b>satisfaction</b></li>
        <li><ImForward/>Our financial plans go through a <b>three step validation process</b> before it reaches the client</li>
        <li><ImForward/>Absolute transparency-we are <b>100% honest</b> about commissions and incentives</li>
        <li><ImForward/>Beyond a certain threshold,we invest only in <b>direct funds</b></li>
        <li><ImForward/>We facilitate tax filings, as well as tax consulting—so that our clients can </li>
        <li><ImForward/>With regards to Estate and Succession Planning, we’ve tied up with the </li>
        <li><ImForward/>In summary—we guarantee that we can provide the <b>highest quality of service at the lowest possible price</b>—it’s a win, win situation!</li>
        </ul>
      </div>
    </div>
    {/* animation section  */}
    <div className={classes.child_container}>
     <div className={classes.line_spark}></div>
     <div>
       <h1 style={{marginLeft:'40%',padding:'50px'}}>Leadership Info</h1>
       <div className="container">
          <div className="row">
            <div className="col" style={{textAlign:'center'}}>
              <img src={Auht1} alt="" style={{width:'70%'}}/>
              <h5>kartik Damodar</h5>
            </div>
            <div className="col" style={{textAlign:'center'}}>
            <img src={Auht2} alt="" style={{width:'70%'}} />
            <h5>Aseem Sen Gupta</h5>
            </div>
            <div className="col" style={{textAlign:'center'}}>
            <img src={Auht3} alt="" style={{width:'70%'}} />
            <h5>Kripa Bhattarai</h5>
            </div>
            <div className="col" style={{textAlign:'center'}}>
            <img src={Auht4} alt="" style={{width:'70%'}} />
            <h5>Amit Sharma</h5>
            </div>
          </div>
       </div>
     </div>
    </div>
    {/*Core values of the company */}
    <div>
      <div className={classes.line_spark}></div>
      <div style={{textAlign:'center'}}>
        <h2>Guardian Values</h2>
        <h6 style={{color:'#bbbdbf'}}>Our core values are simple, but powerful</h6>
        <h5 style={{color:'#7d7e80'}}>These values define our work ethic as well as how we live our lives.</h5>
      </div>
      <div>
        <ul style={{listStyle:'none'}}>
        <h3>Integrity-Live with pride</h3>
        <p>"Never do anything in life if you would be ashamed of seeing it printed on the front page of your hometown newspaper for your friends and family to see."<i>Warren Buffet.</i></p>
        <p><b>a)Honesty</b>-never lie to your client.One tiny lie is all it takes to lose complete trust in a reputation that you've taken years to build.</p>
        <p><b>b)Commitment</b>-when you commit something to a client,always deliver.Your reputation is as good as your word,do not lose it.</p>
        <p><b>c)Pride</b>—when you present something to your client, always make sure you can take pride in your work. If you can’t take pride in what you’ve produced, you cannot produce anything of great value for your client.</p>
        </ul>
      </div>
      <div>
        <ul  style={{listStyle:'none'}}>
        <h2>Thinking Clearly</h2>
        <p>“If we think long term we can accomplish things that we wouldn’t otherwise accomplish. Time horizons matter. They matter a lot.” <i>Jeff Bezos</i></p>
        <p><b>a)Holistic approach to thinking</b>-—always think of the client using a ‘long term’ approach. When you sign up a client, treat the client as if s/he is your client for the duration of his/her life. Therefore, you must always use a holistic approach—focus on the long term instead of instant gratification.</p>
        <p><b>b)Calm beneath the storm</b>-—be the shoulder that the client can lean on. The market is volatile in the short run—there will be a time when your client is afraid of losing his /her investments. At this point in time, you must be the rock for the client. You must be able to articulate why they should not be fearful.</p>
        <p><b>c)Articulation</b>-—think of your clients like they are your students—they haven’t learned finance, their knowledge is limited. As such, you must delineate your thought process in a step by step manner. You must be able to think in a calm, rational manner and articulate your thought process, keeping the end result in mind.</p>
        <p><b>d)Organization-</b>—take the saying ‘organization is the key to success’ very seriously—be extremely well planned and organized. Excellent customer service can only be achieved if you are on top of all things, especially your schedule.</p>
        </ul>
      </div>
      <div>
        <ul style={{listStyle:'none'}}>
        <h3>Ownership</h3>
        <p>“Try holding yourself accountable to yourself. If you had to give yourself a daily, weekly, or monthly report, would you be proud to talk about what you had done, or would you need to be prettying up things, bullshitting, or lying to keep your job?” <i>Loren Weisman</i></p>
        <p><b>a)Accountability</b>-—always hold yourself accountable for your actions, if you make a mistake, own up to it. Your client will appreciate it. Make it a point to never make the same mistake twice.</p>
        <p><b>b)Guardian brand</b>-—you are a part of Guardian Group, and as such Guardian Group is a part of you—remember that each and every action is representative of the company.</p>
        <p><b>c)Be proactive</b>-practice proactive ownership—if you see a piece of trash lying on the office floor, pick it up and place it in the dust bin. ‘It is not my responsibility’ is never an excuse. Help your colleagues out whenever you can.</p>
        </ul>
      </div>
      <div>
        <ul style={{listStyle:'none'}}>
          <h3><b>Passion</b>-Love what you do </h3>
          <p>“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” <i>Steve Jobs</i></p>
          <p><b>a)Motivation</b>-be genuinely motivated in helping your client.</p>
          <p><b>b)Inspiration</b>-—inspire your colleagues with your client servicing skills—inspire your colleagues by the high quality of your work—be someone they can count on.</p>
          <p><b>c)Empathy</b>-—put yourself in the client’s shoes—ask yourself ‘what would I do, if I were in his/her shoes?’ The only way to achieve success at work, is to care deeply for the client’s needs.</p>
          <p><b>d)Enjoyment</b>-—love what you do—your client can easily tell how much you enjoy your work by the quality of work you put out.</p>
        </ul>
      </div>
      <div>
        <ul style={{listStyle:'none'}}>
          <h3><b>Perfection</b>-Be the best</h3>
          <p>”The most important single thing is to focus obsessively on the customer. Our goal is to be earth’s most customer-centric company.” <i>Jeff Bezos</i></p>
          <p><b>a)Highest standards</b>-—provide a better quality of service than anything else out there. You must make sure that the quality of service you provide is something that the client cannot find anywhere else, at any price.</p>
          <p><b>b)Learn constantly</b>-—you must learn something new every day. After every client interaction, you ask yourself : Is there anything I could have done better?</p>
          <p><b>c)Urgency</b>-—the motto ‘get it done yesterday.’ Always be as quick as possible when responding to a client—make sure you put client needs first.</p>
        </ul>
      </div>
    </div>
    {/* copy rights  section */}
  </div>
  )
}
