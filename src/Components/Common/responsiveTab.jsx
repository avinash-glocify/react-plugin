import React  from 'react';
import { CSVLink } from "react-csv";
import CallExtension  from './callExtension.jsx';
import InputComponent  from './input.jsx';
import Description  from './description.jsx';

class ResponsiveTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {},
      headlines: [1,2,3],
      descriptions: [1,2],
      callouts: [1,2,3],
      structure_snippets: [1,2,3],
      headers: props.headers
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
        headline1: 'Awesome Headline 1',
        headline2: 'Awesome Headline 2',
        headline3: '',
        description1: 'Create Some Amazing Ad Copy Tod.',
        description2: 'Make Your Ad Stand Out!',
        display_path: 'www.example.com',
        path1: '',
        path2: '',
        sitelink1: '',
        sitelink1_desc_1: '',
        sitelink1_desc_2: '',
        sitelink2: '',
        sitelink2_desc_1: '',
        sitelink2_desc_2: '',
        sitelink3: '',
        sitelink3_desc_1: '',
        sitelink3_desc_2: '',
        sitelink4: '',
        sitelink4_desc_1: '',
        sitelink4_desc_2: '',
        call_extension: '',
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
    const {structureHeaders, phoneCountries} = this.props;
    return <div>
            <div className="NewTextAd">
                <form className="text-ad-form">
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <input type="text" placeholder="Final URL" maxLength="30" className="TextAdField" name="final_url" onChange={this.onChange} value={this.state.addForm.final_url === null ? '' : this.state.addForm.final_url } />
                    <span className="addcarector">{(this.state.addForm.final_url).length}/30</span>
                  </div>
                  <div className="form-group mb-0">
                    <label className="LabelPath d-block">Display Path</label>
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
                          <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                          <input type="text" placeholder={"Headline "+head} maxLength="30" className="TextAdField" name={name} onChange={this.onChange} value={val} />
                          <span className="addcarector">{val.length}/30</span>
                        </div>
                    </div>
                  );
                }) }
                  <a href="true" className="btn-link" onClick={this.addHeadLine}>Add Headline</a>
                  { descriptions.map((desc, ind) => {
                    let name = "description"+desc;
                    let val = this.state.addForm[name];
                    return (
                        <div key={name}>
                        <Description changeHeadline={this.changeDynamicState} name={name} description={val} />
                        </div>
                    );
                  }) }
                  <a  href="true" className="btn-link" onClick={this.addDescription}>Add Description</a>
                </form>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href="#collapseSiteExtension" role="button" aria-expanded="false" aria-controls="collapseSiteExtension">
                Sitelinks <i className="fa fa-plus text-info float-right" aria-hidden="true"></i>
                </a>
              </div>
              <div id="collapseSiteExtension" className="collapse">
                <div className="card-body">
                  <div className="">
                  </div>
                  <form className="text-ad-form">
                    <div className="sitelink1">
                      <p>Sitelink 1</p>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink1" headline={this.state.addForm.sitelink1} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink1_desc_1" headline={this.state.addForm.sitelink1_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink1_desc_2" headline={this.state.addForm.sitelink1_desc_2} />
                    </div>
                    <div className="sitelink2">
                      <p>Sitelink 2</p>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink2" headline={this.state.addForm.sitelink2} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink2_desc_1" headline={this.state.addForm.sitelink2_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink2_desc_2" headline={this.state.addForm.sitelink2_desc_2} />
                    </div>
                    <div className="sitelink3">
                      <p>Sitelink 3</p>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink3" headline={this.state.addForm.sitelink3} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink3_desc_1" headline={this.state.addForm.sitelink3_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink3_desc_2" headline={this.state.addForm.sitelink3_desc_2} />
                    </div>
                    <div className="sitelink4">
                      <p>Sitelink 4</p>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink4" headline={this.state.addForm.sitelink4} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink4_desc_1" headline={this.state.addForm.sitelink4_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink4_desc_2" headline={this.state.addForm.sitelink4_desc_2} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header" >
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href="#collapseCallExtension" role="button" aria-expanded="false" aria-controls="collapseCallExtension">
                Call Extension <i className="fa fa-plus text-info float-right" aria-hidden="true"></i>
                </a>
              </div>
              <div id="collapseCallExtension" className="collapse">
                <CallExtension ref="callExtension" country={this.state.addForm.call_extension_country} phone={this.state.addForm.call_extension}
                phoneCountries={phoneCountries} changePhone={this.changeDynamicState} />
              </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href="#collapseCallouts" role="button" aria-expanded="false" aria-controls="collapseCallouts">
                Callouts <i className="fa fa-plus text-info float-right" aria-hidden="true"></i>
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
                          <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                          <input type="text" placeholder={"Callout Text" +call} maxLength="25" className="TextAdField" name={name} onChange={this.onChange} value={val } />
                          <span className="addcarector">{val.length}/25</span>
                        </div>
                      );
                    }) }
                    <a href="true" className="btn-link" onClick={this.addCallouts}>Add Callout Text</a>
                  </div>
                </form>
              </div>
            </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header" >
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href="#collapseStructueSnippet" role="button" aria-expanded="false" aria-controls="collapseStructueSnippet">
                Structured Snippets <i className="fa fa-plus text-info float-right" aria-hidden="true"></i>
                </a>
              </div>
              <div id="collapseStructueSnippet" className="collapse">
                <div className="card-body">
                  <div className=""></div>
                  <form className="text-ad-form">
                    <div className="sitelink1">
                      <p className="mb-0">Header</p>
                      <div className="form-group mb-0">
                        <select className="TextAdField"  name="structure_snippet_header"  onChange={this.onChange} value={this.state.addForm.structure_snippet_header === null ? '' : this.state.addForm.structure_snippet_header }>
                        { structureHeaders.map((head, ind) => {
                          return (
                           <option value={head} key={head}>{head}</option>
                          )
                        })}
                        </select>
                      </div>
                      <p className="mb-0 mt-3">Values</p>
                      { structure_snippets.map((str, ind) => {
                        let name = "structure_snippet_value_"+str;
                        let val = this.state.addForm[name];
                        return (
                          <div className="form-group mb-0" key={name}>
                            <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                            <input type="text" placeholder={"Value"+ str} maxLength="25" className="TextAdField" name={name} onChange={this.onChange} value={val === null ? '' : val } />
                            <span className="addcarector">{val.length}/25</span>
                          </div>
                        )
                      }) }
                      <a href="true" className="btn-link" onClick={this.addStructureSnippets}>Add Value</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="">
                <button type="button" className="btn btn-danger reset-button" onClick={this.resetForm}>Reset</button>
                <button type="button" className="btn btn-success ml-1 import-button" onClick={this.exportAdd}>Export This Add To Xls</button>
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
