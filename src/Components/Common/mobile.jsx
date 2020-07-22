import React  from 'react';
import SiteLink from './sitelink.jsx'
import cross from '../../Images/cross.svg';
import phone from '../../Images/phone.svg';

class MobileView extends React.Component {
  closeAdd = (e) => {
    e.preventDefault();
    this.props.closeAdd();
  }
render() {
  let { callouts, descriptions, headlines, structure_snippets } = this.props
  return <div>
          <div className="AdContent mt-2">
          <div className="addViewContainer">
            <div className="AdHeading">
              { headlines.map((head, ind) => {
                let name = "headline"+head;
                let val = this.props.data[name];
                return (
                  <a href="true" className="p-0 text-break" key={name} onClick={(e) => { e.preventDefault() }}>
                    { head !== 1 && val ? ' | '  : ''} {val}
                  </a>
                 )
              }) }
              <a href="true" onClick={(e) => { e.preventDefault() }} className="SitePath">
                <span>Ad</span> {this.props.data.display_path}{this.props.data.path1 ? '/' +this.props.data.path1 : ''}{this.props.data.path2 ? '/' +this.props.data.path2 : ''}
              </a>
              { descriptions.map((desc, ind) => {
                let name = "description"+desc;
                let val = this.props.data[name];
                return (
                  <p className="text-break" key={name}><strong>{"Description "+ desc}</strong> {val }</p>
                 )
              }) }
              <p><strong>Callouts</strong>
              { callouts.map((call, ind) => {
                let name = "callout"+call;
                let val = this.props.data[name];
                return (
                  <span key={name}> { call !== 1 && val ? ' - '  : ''}{val ? val : ''} </span>
                 )
              }) }
              </p>
              <p><strong>Structure Snippet</strong> {this.props.data.structure_snippet_header}
              { structure_snippets.map((str, ind) => {
                let name = "structure_snippet_value_"+str;
                let val = this.props.data[name];
                return (
                  <span key={name}> { str !== 1 && val ? ' - '  : ''}{val ? val : ''} </span>
                 )
              }) }
              </p>
            </div>
            <div className="BottomTag">
              <div className="BottomTagInner">
                <SiteLink  data={this.props.data} />
                <p className="PhoneCall">
                  <img alt="" className="" style={{height:'20px', width:'20px', position:'relative'}} src={phone} />
                    Call {this.props.data.call_extension}
                    { this.props.totalView > 1 ? <a href="true" title="Close Ad" onClick={this.closeAdd} >  <img alt="" className="float-right" style={{height:'25px', width:'25px', position:'relative'}} src={cross} /></a> :'' }
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>;
};
};

export default MobileView;
