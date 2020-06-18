import React, {useRef, useState, useEffect} from 'react';
import './applications.css';

const Applications = () => {
 const sofaRef = useRef(null);
 const c4Ref = useRef(null);
 const ynfRef = useRef(null);
 const craftRef = useRef(null);
 const [sofaAnimate, setSofaAnimate] = useState(false);
 const [c4Animate, setC4Animate] = useState(false);
//  const [ynfAnimate, setYnfAnimate] = useState(false);
//  const [craftAnimate, setCraftAnimate] = useState(false);
 var gifSwitch = function(e) {
  let sofaPos = sofaRef.current.offsetTop - window.pageYOffset;
  setSofaAnimate(sofaPos < 370 && sofaPos > -145);
  let c4Pos = c4Ref.current.offsetTop - window.pageYOffset;
  setC4Animate(c4Pos < 370 && c4Pos > -145);
 }
const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
            clearTimeout(debounceTimer)
                debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
  }

  // const showSofa = useTransition(sofaAnimate, null, {
  //     from: { position: 'absolute', opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //     config: config.molasses,
  //     })

 useEffect(() => {
  //  sofaRef.current && sofaRef.current.focus();
  //  c4Ref.current && c4Ref.current.focus();
  //  ynfRef.current && ynfRef.current.focus();
  //  craftRef.current && craftRef.current.focus();
   window.addEventListener('scroll', debounce(gifSwitch,100))
  });
    return (
      <div className="applications" onScroll={gifSwitch}>


        <div className="sectionBar">
          <div className="sectionTitle">Applications</div>
        </div>
        <div className='appTitle' ref={sofaRef}>SofaMart</div>
        <div className='appBody'>
          <div className={sofaAnimate ? 'appIGoSofa appImage' : 'appImage appISofa'}>
          </div>
          <div className='appText'><ul>
            <li>Technologies Used:
              <ul className="innerList" style={{columns: 2, margin: '0px 0px 0px 25px', listStyle: 'disc'}}>
              <li>React</li>
              <li>Styled Components</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MySQL</li>
              <li>Node</li>
              <li>Webpack</li>
              <li>AWS</li>
            </ul>
            </li>
            <li>Coded interactive review application with summary, overview, filters, and helpfulness features</li>
            <li>Successfully deployed application on AWS with a proxy for other page components</li>
            <li>Improved load time by 65% by implementing text compression as measured by Google Page Insight</li>
          </ul>
          </div>
        </div>
        <div className='appTitle'  ref={c4Ref}>ConnectSquares</div>
        <div className='appBody'>
          <div className={c4Animate ? 'appIGoC4 appImage' : 'appImage appIC4'}>
          </div>
          <div className='appText'>
            <ul>
             <li>Technologies Used:
              <ul className="innerList" style={{margin: '0px 0px 0px 25px', listStyle: 'disc'}}>
                <li>React Native</li>
                <li>CSS</li>
                <li>Expo-CLI</li>
              </ul>
            </li>
              <li>Created a mobile game using React Native and CSS to try to line up four game pieces</li>
              <li>Android version compiled to an APK using Expo-CLI</li>
            </ul>
          </div>
        </div>
        <div className='appTitle'  ref={ynfRef}>My New Fave</div>
        <div className='appBody' background='./dmLogo.gif'>appBody</div>
        <div className='appTitle' ref={craftRef}>Craftworkery</div>
        <div className='appBody' background='./dmLogo.gif'>appBody</div>

      </div>
    )
}

export default Applications;