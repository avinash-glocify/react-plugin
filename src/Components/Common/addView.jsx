import React  from 'react';

class AddView extends React.Component {
 constructor(props) {
   super(props);
 }
render() {
  return <div>
    <div className="pt-goopreview goopreview-tab_ad1">
       <a className="pt-headline" href="">
         <span id="left_headline1">{ this.props.data.headline1 } </span>|
         <span id="left_headline2">{ this.props.data.headline2 } </span>
         <span id="left_headline3"> </span>
       </a>
      <div className="pt-urlline">
        <span className="pt-mB">Ad</span>
        <span className="pt-displayurl" id="left_ad1_displayurl">www.example.com/ppc-services</span>
        <span className="pt-callextension" id="left_ce_phonenumber"></span>
      </div>
      <div style={{display:'none'}} className="pt-rating">
        <span className="pt-stars">4.5 </span>
        <img src="https://www.actuate.website/utm/wp-content/plugins/ad-preview-tool/assets/img/stars.png" />rating for&nbsp;
        <span id="domainad1_displayurl">example.com</span>
      </div>
      <span className="pt-binding" id="left_description1">Create Some Amazing Ad Copy Tod. </span>
      <span id="left_description2">Make Your Ad Stand Out!</span>
      <div className="pt-callouts">
        <span id="left_ad1_callout1" />
        <span id="left_ad1_callout2" />
        <span id="left_ad1_callout3" />
      </div>
      <div className="pt-snippets">
        <span id="left_ss_header" />
        <span id="left_ss_value1" />
        <span id="left_ss_value2" />
        <span id="left_ss_value3" />
      </div>
    </div>
  </div>;
};
};

export default AddView;
