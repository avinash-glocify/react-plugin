import React  from 'react';
import { CSVLink } from "react-csv";
import CallExtension  from './callExtension.jsx';
import InputComponent  from './input.jsx';
import Description  from './description.jsx';
import MailModal  from './mailModal.jsx';
import plus from '../../Images/plus.svg';
import minus from '../../Images/minus.svg';
import question from '../../Images/question.svg';


class ResponsiveTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {},
      headlines: [1,2,3],
      descriptions: [1,2],
      callouts: [1,2,3],
      structure_snippets: [1,2,3],
      headers: this.props.headers,
      SiteLinkLogo:plus,
      callExtensionLogo: plus,
      calloutsLogo: plus,
      structreLogo: plus,
    }

  }
  onChange = (e) => {
    const column = e.target.name;
    const value  = e.target.value;
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : value
      }
    }))
    this.props.changeState(column, value);
  }
  resetForm = () => {
    this.setState({
      addForm: {
        final_url: '',
        headline1: '',
        headline2: '',
        headline3: '',
        description1: '',
        description2: '',
        display_path: '',
        path1: '',
        path2: '',
        sitelink1: '',
        sitelink1_desc_1: '',
        sitelink1_desc_2: '',
        sitelink1_final_url: '',
        sitelink2: '',
        sitelink2_desc_1: '',
        sitelink2_desc_2: '',
        sitelink2_final_url: '',
        sitelink3: '',
        sitelink3_desc_1: '',
        sitelink3_desc_2: '',
        sitelink3_final_url: '',
        sitelink4: '',
        sitelink4_desc_1: '',
        sitelink4_desc_2: '',
        sitelink4_final_url: '',
        call_extension: '',
        call_extension_country: 'United States',
        callout1: '',
        callout2: '',
        callout3: '',
        structure_snippet_header: '',
        structure_snippet_value_1: '',
        structure_snippet_value_2: '',
        structure_snippet_value_3: '',
      },
      headlines: [1,2,3],
      descriptions: [1,2],
      callouts: [1,2,3],
      structure_snippets: [1,2,3],
      headers:this.props.headers
    })
    this.props.resetForm();
    if(this.refs.callExtension) {
      this.refs.callExtension.resetForm();
    }

  }
  exportAdd = () => {
    this.csvLink.link.click()
  }
  addHeadLine = (e) => {
    e.preventDefault();
    const { headlines } = this.state;
    const lastElement = headlines[headlines.length - 1];
    const nextEle = lastElement+1;
    var column = "headline"+nextEle;
    var joined = this.state.headlines.concat(nextEle);
    var joinedHeader = this.state.headers.concat({ label: 'Headline '+nextEle, key: column });
    this.setState({ headers: joinedHeader });
    this.setState({ headlines: joined });
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : ''
      }
    }));
    this.props.changeState(column, '');
    this.props.addColumnDynamic('headlines', nextEle);
  }
  addDescription = (e) => {
    e.preventDefault();
    const { descriptions } = this.state;
    const lastElement = descriptions[descriptions.length - 1];
    const nextEle = lastElement+1;
    var column = "description"+nextEle;
    var joined = this.state.descriptions.concat(nextEle);
    var joinedHeader = this.state.headers.concat({ label: 'Description '+nextEle, key: column });
    this.setState({ headers: joinedHeader });
    this.setState({ descriptions: joined });
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : ''
      }
    }));
    this.props.changeState(column, '');
    this.props.addColumnDynamic('description', nextEle);
  }
  addStructureSnippets = (e) => {
    e.preventDefault();
    const { structure_snippets } = this.state;
    const lastElement = structure_snippets[structure_snippets.length - 1];
    const nextEle = lastElement+1;
    var column = "structure_snippet_value_"+nextEle;
    var joined = this.state.structure_snippets.concat(nextEle);
    var joinedHeader = this.state.headers.concat({ label: 'Structure Snippet Value '+nextEle, key: column });
    this.setState({ headers: joinedHeader });
    this.setState({ structure_snippets: joined });
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : ''
      }
    }));
    this.props.changeState(column, '');
    this.props.addColumnDynamic('structure_snippets', nextEle);
  }
  addCallouts = (e) => {
    e.preventDefault();
    const { callouts } = this.state;
    const lastElement = callouts[callouts.length - 1];
    const nextEle = lastElement+1;
    var column = "callout"+nextEle;
    var joined = this.state.callouts.concat(nextEle);
    var joinedHeader = this.state.headers.concat({ label: 'Callouts'+nextEle, key: column });
    this.setState({ headers: joinedHeader });
    this.setState({ callouts: joined });
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : ''
      }
    }));
    this.props.changeState(column, '');
    this.props.addColumnDynamic('callouts', nextEle);
  }
  collapse = (e) => {
    var ele =  e.target.children[0];

    if(typeof ele === 'undefined') {
      ele = e.target;
    }

    if(ele.classList.contains('fa-plus')) {
      ele.classList.remove('fa-plus');
      ele.classList.add('fa-minus');
    } else {
      ele.classList.remove('fa-minus');
      ele.classList.add('fa-plus');
    }
  }
  changeDynamicState = (column, value) => {
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : value
      }
    }))
    this.props.changeState(column, value);
  }

  UNSAFE_componentWillMount () {
    this.resetForm();
  }
  render() {
    let {headlines, descriptions, callouts, structure_snippets } = this.state;
    const divStyle = {
      height: '20px',
      width: '20px'
    };
    const {structureHeaders} = this.props;
    return <div>
            <div className="NewTextAd">
                <form className="text-ad-form">
                  <div className="form-group">
                    <img alt="" className="float-right" style={{height:'15px', width:'15px', top: '20px', position:'relative'}} src={question} />
                    <input type="text" placeholder="Final URL" maxLength="30" className="TextAdField" name="final_url" onChange={this.onChange} value={this.state.addForm.final_url === null ? '' : this.state.addForm.final_url } />
                    <span className="addcarector"> </span>
                  </div>
                  <div className="form-group">
                    <label className="LabelPath d-block">Display Path <img alt="" className="ml-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={question} /></label>
                    <input type="text"  placeholder="www.example.com" maxLength="30"  className="TextAdField width_45" name="display_path" onChange={this.onChange} value={this.state.addForm.display_path === null ? '' : this.state.addForm.display_path } />
                    /<input type="text" placeholder="path1" maxLength="15"  className="TextAdField path" name="path1" onChange={this.onChange} value={this.state.addForm.path1 === null ? '' : this.state.addForm.path1 } />
                    /<input type="text" placeholder="path2" maxLength="14"  className="TextAdField path" name="path2" onChange={this.onChange} value={this.state.addForm.path2 === null ? '' : this.state.addForm.path2 } />
                  </div>
                  { headlines.map((head, ind) => {
                    let name = "headline"+head;
                    let val = this.state.addForm[name];
                    return (
                    <div key={name}>
                        <div className="form-group mb-0">
                          <img alt="" className="float-right" style={{height:'15px', width:'15px', top: '20px', position:'relative'}} src={question} />
                          <input type="text" placeholder={"Headline "+head} maxLength="30" className="TextAdField" name={name} onChange={this.onChange} value={val} />
                          <span className="addcarector">{val.length}/30</span>
                        </div>
                    </div>
                  );
                }) }
                  <a href="true" className="btn-link mb-2" onClick={this.addHeadLine}>ADD HEADLINE</a>
                  { descriptions.map((desc, ind) => {
                    let name = "description"+desc;
                    let val = this.state.addForm[name];
                    return (
                        <div key={name}>
                        <Description changeHeadline={this.changeDynamicState} name={name} description={val} />
                        </div>
                    );
                  }) }
                  <a href="true" className="btn-link mb-2" onClick={this.addDescription}>ADD DESCRIPTION</a>
                </form>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={ () => { this.setState({SiteLinkLogo: this.state.SiteLinkLogo === plus ? minus: plus}) }}  data-toggle="collapse" href="#collapseSiteExtension" role="button" aria-expanded="false" aria-controls="collapseSiteExtension">
                Sitelinks <img alt="" className="float-right" style={divStyle} src={this.state.SiteLinkLogo} />
                </a>
              </div>
              <div id="collapseSiteExtension" className="collapse">
                <div className="card-body">
                  <div className="">
                  </div>
                  <form className="text-ad-form">
                    <div className="sitelink1">
                      <label className="LabelPath d-block mb-2">Sitelink 1 <img alt="" className="ml-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={question} /></label>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink1" headline={this.state.addForm.sitelink1} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink1_desc_1" headline={this.state.addForm.sitelink1_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink1_desc_2" headline={this.state.addForm.sitelink1_desc_2} />
                      <InputComponent ref="headline" placeholder="Final Url" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink1_final_url" headline={this.state.addForm.sitelink1_final_url} />
                    </div>
                    <div className="sitelink2">
                        <label className="LabelPath d-block mb-2">Sitelink 2 <img alt="" className="ml-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={question} /></label>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink2" headline={this.state.addForm.sitelink2} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink2_desc_1" headline={this.state.addForm.sitelink2_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink2_desc_2" headline={this.state.addForm.sitelink2_desc_2} />
                      <InputComponent ref="headline" placeholder="Final Url" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink2_final_url" headline={this.state.addForm.sitelink2_final_url} />
                    </div>
                    <div className="sitelink3">
                        <label className="LabelPath d-block mb-2">Sitelink 3 <img alt="" className="ml-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={question} /></label>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink3" headline={this.state.addForm.sitelink3} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink3_desc_1" headline={this.state.addForm.sitelink3_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink3_desc_2" headline={this.state.addForm.sitelink3_desc_2} />
                      <InputComponent ref="headline" placeholder="Final Url" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink3_final_url" headline={this.state.addForm.sitelink3_final_url} />
                    </div>
                    <div className="sitelink4">
                        <label className="LabelPath d-block mb-2">Sitelink 4 <img alt="" className="ml-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={question} /></label>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink4" headline={this.state.addForm.sitelink4} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink4_desc_1" headline={this.state.addForm.sitelink4_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink4_desc_2" headline={this.state.addForm.sitelink4_desc_2} />
                      <InputComponent ref="headline" placeholder="Final Url" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink4_final_url" headline={this.state.addForm.sitelink4_final_url} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header" >
                <a className="text-dark" onClick={ () => { this.setState({callExtensionLogo: this.state.callExtensionLogo === plus ? minus: plus}) }}  data-toggle="collapse" href="#collapseCallExtension" role="button" aria-expanded="false" aria-controls="collapseCallExtension">
                Call Extension <img alt="" className="float-right" style={divStyle} src={this.state.callExtensionLogo} />
                </a>
              </div>
              <div id="collapseCallExtension" className="collapse">
                <CallExtension ref="callExtension" country={this.state.addForm.call_extension_country} phone={this.state.addForm.call_extension}
                changePhone={this.changeDynamicState} />
              </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={ () => { this.setState({calloutsLogo: this.state.calloutsLogo === plus ? minus: plus}) }}  data-toggle="collapse" href="#collapseCallouts" role="button" aria-expanded="false" aria-controls="collapseCallouts">
                Callouts <img alt="" className="float-right" style={divStyle} src={this.state.calloutsLogo} />
                </a>
              </div>
              <div id="collapseCallouts" className="collapse">
              <div className="card-body">
                <div className=""></div>
                <form className="text-ad-form">
                  <div className="sitelink1">
                  { callouts.map((call, ind) => {
                    let name = "callout"+call;
                    let val = this.state.addForm[name];
                      return (
                        <div className="form-group mb-0" key={name}>
                          <img alt="" className="float-right" style={{height:'15px', width:'15px', top: '20px', position:'relative'}} src={question} />
                          <input type="text" placeholder={"Callout Text" +call} maxLength="25" className="TextAdField" name={name} onChange={this.onChange} value={val } />
                          <span className="addcarector">{val.length}/25</span>
                        </div>
                      );
                    }) }
                    <a href="true" className="btn-link mb-2" onClick={this.addCallouts}>ADD CALLOUT TEXT</a>
                  </div>
                </form>
              </div>
            </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header" >
                <a className="text-dark" onClick={ () => { this.setState({structreLogo: this.state.structreLogo === plus ? minus: plus}) }}  data-toggle="collapse" href="#collapseStructueSnippet" role="button" aria-expanded="false" aria-controls="collapseStructueSnippet">
                Structured Snippets <img alt="" className="float-right" style={divStyle} src={this.state.structreLogo} />
                </a>
              </div>
              <div id="collapseStructueSnippet" className="collapse">
                <div className="card-body">
                  <div className=""></div>
                  <form className="text-ad-form">
                    <div className="sitelink1">
                      <label className="LabelPath d-block mb-2">Header <img alt="" className="ml-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={question} /></label>
                      <div className="form-group mb-0">
                        <select className="TextAdField"  name="structure_snippet_header"  onChange={this.onChange} value={this.state.addForm.structure_snippet_header === null ? '' : this.state.addForm.structure_snippet_header }>
                        { structureHeaders.map((head, ind) => {
                          return (
                           <option value={head} key={head}>{head}</option>
                          )
                        })}
                        </select>
                      </div>
                      <label className="LabelPath d-block mt-3 mb-2">Values <img alt="" className="ml-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={question} /></label>
                      { structure_snippets.map((str, ind) => {
                        let name = "structure_snippet_value_"+str;
                        let val = this.state.addForm[name];
                        return (
                          <div className="form-group mb-0" key={name}>
                            <img alt="" className="float-right" style={{height:'15px', width:'15px', top: '20px', position:'relative'}} src={question} />
                            <input type="text" placeholder={"Value"+ str} maxLength="25" className="TextAdField" name={name} onChange={this.onChange} value={val === null ? '' : val } />
                            <span className="addcarector">{val.length}/25</span>
                          </div>
                        )
                      }) }
                      <a href="true" className="btn-link" onClick={this.addStructureSnippets}>ADD VALUE</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="card-body p-0 pb-2">
                <MailModal formType="responsiveAdd" headers={this.state.headers} addForm={this.state.addForm} resetForm={this.resetForm} exportAdd={this.exportAdd} />
              </div>
            </div>

            <CSVLink
              filename="data.csv"
              data={[this.state.addForm]}
              headers={this.state.headers}
              className="hidden"
              ref={(r) => this.csvLink = r} />
          </div>;
  };
};

export default ResponsiveTab;
