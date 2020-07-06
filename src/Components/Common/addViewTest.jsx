import React  from 'react';

class AddViewTest extends React.Component {
render() {
  return <div>
    <div className="pt-goopreview goopreview-tab_ad1">
       <a className="pt-headline" href="true" onClick={(e) => { e.preventDefault() }}>
         <span id="left_headline1">{ this.props.data.headline1 } </span>
        { this.props.data.headline2 ?  <span id="left_headline2">| { this.props.data.headline2 } </span> : ''}
        { this.props.data.headline3 ?  <span id="left_headline3">| { this.props.data.headline3 } </span> : ''}
       </a>
      <div className="pt-urlline">
        <span className="pt-mB">Ad</span>
        <span className="pt-displayurl" id="left_ad1_displayurl">{ this.props.data.display_path }</span>
        <span className="pt-callextension" id="">{ this.props.data.call_extension }</span>
      </div>
      <span className="pt-binding" id="left_description1">{this.props.data.description1}</span>
      <span id="left_description2">{this.props.data.description2}</span>
      <div className="pt-callouts">
        <span id="left_ad1_callout1"> {this.props.data.callout1} </span>
        <span id="left_ad1_callout2"> {this.props.data.callout2} </span>
        <span id="left_ad1_callout3"> {this.props.data.callout3} </span>
      </div>
      <div className="pt-snippets">
        <span id="left_ss_header"> {this.props.data.structure_snippet_header} </span>
        <span id="left_ss_value1"> {this.props.data.structure_snippet_value_1} </span>
        <span id="left_ss_value2"> {this.props.data.structure_snippet_value_2} </span>
        <span id="left_ss_value3"> {this.props.data.structure_snippet_value_3} </span>
      </div>

      <div className="pt-siteLink">
         <ul className="pt-list">
            <li>
               <span id="left_sitelink1">
                  <h3><a className="sitelink" href="true" onClick={(e) => {e.preventDefault()}}>{this.props.data.sitelink1}</a></h3>
               </span>
               <span id="left_sitelink1des1">
                  <div className="pt-creative">{this.props.data.sitelink1_desc_1}</div>
               </span>
               <span id="left_sitelink1des2">
                  <div className="pt-creative">{this.props.data.sitelink1_desc_2}</div>
               </span>
            </li>
            <li>
               <span id="left_sitelink2">
                 <h3><a className="sitelink" href="true" onClick={(e) => {e.preventDefault()}}>{this.props.data.sitelink2}</a></h3>
               </span>
               <span id="left_sitelink2des1">
                <div className="pt-creative">{this.props.data.sitelink2_desc_1}</div>
               </span>
               <span id="left_sitelink2des2">
                <div className="pt-creative">{this.props.data.sitelink2_desc_2}</div>
               </span>
            </li>
            <li>
               <span id="left_sitelink3">
                <h3><a className="sitelink" href="true" onClick={(e) => {e.preventDefault()}}>{this.props.data.sitelink3}</a></h3>
               </span>
               <span id="left_sitelink3des1">
                <div className="pt-creative">{this.props.data.sitelink3_desc_1}</div>
               </span>
               <span id="left_sitelink3des2">
                <div className="pt-creative">{this.props.data.sitelink3_desc_2}</div>
               </span>
            </li>
            <li>
              <span id="left_sitelink4">
                <h3><a className="sitelink" href="true" onClick={(e) => {e.preventDefault()}}>{this.props.data.sitelink4}</a></h3>
              </span>
               <span id="left_sitelink4des1">
                <div className="pt-creative">{this.props.data.sitelink4_desc_1}</div>
               </span>
               <span id="left_sitelink4des2">
                 <div className="pt-creative">{this.props.data.sitelink4_desc_2}</div>
               </span>
            </li>
         </ul>
      </div>

    </div>
  </div>;
};
};

export default AddViewTest;
