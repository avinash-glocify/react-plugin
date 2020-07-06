import React  from 'react';

class MobileView extends React.Component {
render() {
  return <div>
          <div className="AdContent mt-3">
            <div className="AdHeading">
              <a href="true" className="p-0" onClick={(e) => { e.preventDefault() }}>{this.props.data.headline1}</a>
            { this.props.data.headline2 ?  <a href="true" className="p-0"  onClick={(e) => { e.preventDefault() }}> | {this.props.data.headline2}</a> : ''}
            { this.props.data.headline3 ?  <a href="true" className="p-0"  onClick={(e) => { e.preventDefault() }}> | {this.props.data.headline3}</a> : ''}
              <a href="true" onClick={(e) => { e.preventDefault() }} className="SitePath">
                <span>Ad</span> {this.props.data.display_path}
              </a>
              {this.props.data.description1 ? <p><strong>Description 1</strong> {this.props.data.description1 }</p> : ''}
              {this.props.data.description2 ? <p><strong>Description 2</strong> {this.props.data.description2 }</p> : ''}
            </div>
            <div className="BottomTag">
              <div className="BottomTagInner">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Heading 1</a> <a href="true" onClick={(e) => { e.preventDefault() }}>Heading 1</a> <a href="true" onClick={(e) => { e.preventDefault() }}>Heading 1</a> <a href="true" onClick={(e) => { e.preventDefault() }}>Heading 1</a>
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
