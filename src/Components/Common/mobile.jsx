import React  from 'react';
import Switch from "react-switch";

class MobileView extends React.Component {
render() {
  return <div>
          <div className="AdContent mt-3">
            <div className="AdHeading">
              <a href="true" className="p-0" onClick={(e) => { e.preventDefault() }}>{this.props.data.headline1}</a>
            { this.props.data.headline2 ?  <a href="true" className="p-0"  onClick={(e) => { e.preventDefault() }}> | {this.props.data.headline2}</a> : ''}
            { this.props.data.headline3 ?  <a href="true" className="p-0"  onClick={(e) => { e.preventDefault() }}> | {this.props.data.headline3}</a> : ''}
              <a href="true" onClick={(e) => { e.preventDefault() }} className="SitePath">
                <span>Ad</span> {this.props.data.display_path} {this.props.data.path1} {this.props.data.path2}
              </a>
              {this.props.data.description1 ? <p className="text-break"><strong>Description 1</strong> {this.props.data.description1 }</p> : ''}
              {this.props.data.description2 ? <p className="text-break"><strong>Description 2</strong> {this.props.data.description2 }</p> : ''}
              <p><strong>Callouts</strong> {this.props.data.callout1 ? <span>{ this.props.data.callout1}</span> : '' }
              {this.props.data.callout2 ?  <span> - { this.props.data.callout2}</span> : '' }
              {this.props.data.callout3 ?  <span> - { this.props.data.callout3}</span> : '' }
              {this.props.data.callout4 ? <span> - { this.props.data.callout4}</span> : '' }
              {this.props.data.callout5 ? <span> - { this.props.data.callout5}</span> : '' }
              {this.props.data.callout6 ? <span> - { this.props.data.callout6}</span> : '' }
              </p>
              <p><strong>Structure Snippet</strong>
                {this.props.data.structure_snippet_header ? <span> { this.props.data.structure_snippet_header}</span> : '' }
                {this.props.data.structure_snippet_value_1 ? <span> - { this.props.data.structure_snippet_value_1}</span> : '' }
                {this.props.data.structure_snippet_value_2 ?  <span> - { this.props.data.structure_snippet_value_2}</span> : '' }
                {this.props.data.structure_snippet_value_3 ?  <span> - { this.props.data.structure_snippet_value_3}</span> : '' }
                {this.props.data.structure_snippet_value_4 ? <span> - { this.props.data.structure_snippet_value_4}</span> : '' }
                {this.props.data.structure_snippet_value_5 ? <span> - { this.props.data.structure_snippet_value_5}</span> : '' }
                {this.props.data.structure_snippet_value_6 ? <span> - { this.props.data.structure_snippet_value_6}</span> : '' }
              </p>
            </div>
            <div className="BottomTag">
              <div className="BottomTagInner">
                <div className="row">
                    { this.props.data.sitelink1 ? <div className="col-md-6 text-center mt-2">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>{this.props.data.sitelink1}</a>
                      <span className="d-block text-break">{this.props.data.sitelink1_desc_1}</span>
                      <span className="d-block text-break">{this.props.data.sitelink1_desc_2}</span>
                    </div> : ''}
                  { this.props.data.sitelink2 ?   <div className="col-md-6 text-center mt-2">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>{this.props.data.sitelink2}</a>
                      <span className="d-block text-break">{this.props.data.sitelink2_desc_1}</span>
                      <span className="d-block text-break">{this.props.data.sitelink2_desc_2}</span>
                    </div> : ''}
                  { this.props.data.sitelink3 ?<div className="col-md-6 text-center mt-2">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>{this.props.data.sitelink3}</a>
                      <span className="d-block text-break">{this.props.data.sitelink3_desc_1}</span>
                      <span className="d-block text-break">{this.props.data.sitelink3_desc_2}</span>
                    </div> : '' }
                  { this.props.data.sitelink4 ?<div className="col-md-6 text-center mt-2">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>{this.props.data.sitelink4}</a>
                      <span className="d-block text-break">{this.props.data.sitelink4_desc_1}</span>
                      <span className="d-block text-break">{this.props.data.sitelink4_desc_2}</span>
                    </div> : '' }
                </div>
                <p className="PhoneCall">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                    Call {this.props.data.call_extension}
                </p>
              </div>
            </div>
          </div>
        </div>;
};
};

export default MobileView;
