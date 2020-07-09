import React  from 'react';

class SiteLink extends React.Component {
render() {
  return <div>
          <div className="row">
              { this.props.data.sitelink1 ? <div className="col-md-6 text-center mt-2">
                <a href="true" className="text-break" onClick={(e) => { e.preventDefault() }}>{this.props.data.sitelink1}</a>
                <span className="d-block text-break">{this.props.data.sitelink1_desc_1}</span>
                <span className="d-block text-break">{this.props.data.sitelink1_desc_2}</span>
              </div> : ''}
            { this.props.data.sitelink2 ?   <div className="col-md-6 text-center mt-2">
                <a href="true" className="text-break" onClick={(e) => { e.preventDefault() }}>{this.props.data.sitelink2}</a>
                <span className="d-block text-break">{this.props.data.sitelink2_desc_1}</span>
                <span className="d-block text-break">{this.props.data.sitelink2_desc_2}</span>
              </div> : ''}
            { this.props.data.sitelink3 ?<div className="col-md-6 text-center mt-2">
                <a href="true" className="text-break" onClick={(e) => { e.preventDefault() }}>{this.props.data.sitelink3}</a>
                <span className="d-block text-break">{this.props.data.sitelink3_desc_1}</span>
                <span className="d-block text-break">{this.props.data.sitelink3_desc_2}</span>
              </div> : '' }
            { this.props.data.sitelink4 ?<div className="col-md-6 text-center mt-2">
                <a href="true" className="text-break" onClick={(e) => { e.preventDefault() }}>{this.props.data.sitelink4}</a>
                <span className="d-block text-break">{this.props.data.sitelink4_desc_1}</span>
                <span className="d-block text-break">{this.props.data.sitelink4_desc_2}</span>
              </div> : '' }
          </div>
        </div>;
      };
};

export default SiteLink;
