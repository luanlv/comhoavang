/*global
 $, jQuery
 */

import React, { PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Layout.css';
// import Header from '../Header';
// import Feedback from '../Feedback';
// import Footer from '../Footer';
import LoadingBar from 'react-redux-loading-bar';
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import MenuMobile from '../Partials/MenuMobile'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount(){
    if(process.env.BROWSER) {
      window.myfunload()
      $('a[href^="tel:"]').click(function(){
        var href = jQuery(this).attr('href');
        $.post("https://api.pushover.net/1/messages.json",
          {
            token : "a8czo1z9hyibk6dqvjcz69ht2kfwo1",

            user : "urjjxg4efo6grfikn65gpqcgqv5nr2",


            title : "comhoavang.com",

            message : href
          },
          function(data, status){
          });
      })

      window.addEventListener('load', () => {
        // noinspection JSUnresolvedVariable
        let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/tuy_hong_nhan.mp3');
        xhr.responseType = 'arraybuffer';
        xhr.addEventListener('load', () => {
          let playsound = (audioBuffer) => {
            let source = audioCtx.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioCtx.destination);
            source.loop = false;
            source.start();
          };

          audioCtx.decodeAudioData(xhr.response).then(playsound);
        });
        xhr.send();
      });
      
    }
  }

  render() {
    return (
      <div id="wrapper">
        <LoadingBar showFastActions  maxProgress={80} progressIncrease={40} style={{ backgroundColor: 'red', zIndex: 1000, height: '2px' }} />
        <Header />
        <hr />
        {this.props.children}
        <hr />
        <Footer />
        <MenuMobile />
        {
          process.env.BROWSER && mobilecheck() && <div id="phone">
            <div className="text-phone">
              <br/>
              <span>Gọi ngay</span>
              <b>0973.318.868</b>
            </div>
            <a href="tel:0973318868">
              <img id="phone-image" className="vibrate" src="/assets/images/phone.png" alt="call phone"/>
            </a>
          </div>
        }
      </div>
    );
  }
}

var mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

export default Layout
