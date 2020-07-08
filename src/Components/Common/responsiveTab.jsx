import React  from 'react';
import { CSVLink } from "react-csv";

let headers = [
  { label: 'Final Url', key: 'final_url' },
  { label: 'Headline 1', key: 'headline1' },
  { label: 'Headline 2', key: 'headline2' },
  { label: 'Description 1', key: 'description1' },
  { label: 'Description 2', key: 'description2' },
  { label: 'Display Path', key: 'display_path' },
  { label: 'Path 1', key: 'path1' },
  { label: 'Path 2', key: 'path2' },
  { label: 'Sitelink 1', key: 'sitelink1' },
  { label: 'Sitelink 2', key: 'sitelink2' },
  { label: 'Sitelink 3', key: 'sitelink3' },
  { label: 'Sitelink 4', key: 'sitelink4' },
  { label: 'Sitelink 1 Description 1', key: 'sitelink1_desc_1' },
  { label: 'Sitelink 1 Description 2', key: 'sitelink1_desc_2' },
  { label: 'Sitelink 2 Description 1', key: 'sitelink2_desc_1' },
  { label: 'Sitelink 2 Description 2', key: 'sitelink2_desc_2' },
  { label: 'Sitelink 3 Description 1', key: 'sitelink3_desc_1' },
  { label: 'Sitelink 3 Description 2', key: 'sitelink3_desc_2' },
  { label: 'Sitelink 4 Description 1', key: 'sitelink4_desc_1' },
  { label: 'Sitelink 4 Description 2', key: 'sitelink4_desc_2' },
  { label: 'Call Extension', key: 'call_extension' },
  { label: 'Callout 1', key: 'callout1' },
  { label: 'Callout 2', key: 'callout2' },
  { label: 'Callout 3', key: 'callout3' },
  { label: 'Structure Snippet Header', key: 'structure_snippet_header' },
  { label: 'Structure Snippet Value 1', key: 'structure_snippet_value_1' },
  { label: 'Structure Snippet Value 2', key: 'structure_snippet_value_2' },
  { label: 'Structure Snippet Value 3', key: 'structure_snippet_value_3' },
];

class ResponsiveTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {},
      headlines: [1,2,3],
      descriptions: [1,2],
      callouts: [1,2,3],
      structure_snippets: [1,2,3],
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
        display_path: 'www.example.com/ppc-services',
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
    })
    this.props.resetForm();

  }
  exportAdd = () => {
    this.csvLink.link.click()
  }
  addHeadLine = () => {
    const { headlines } = this.state;
    const lastElement = headlines[headlines.length - 1];
    const nextEle = lastElement+1;
    var joined = this.state.headlines.concat(nextEle);
    var column = "headline"+nextEle;
    this.setState({ headlines: joined });
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : ''
      }
    }));
    headers.push({ label: 'Headline '+nextEle, key: column });
    this.props.changeState(column, '');
    this.props.addColumnDynamic('headlines', nextEle);
  }
  addDescription = () => {
    const { descriptions } = this.state;
    const lastElement = descriptions[descriptions.length - 1];
    const nextEle = lastElement+1;
    var joined = this.state.descriptions.concat(nextEle);
    var column = "description"+nextEle;
    this.setState({ descriptions: joined });
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : ''
      }
    }));
    headers.push({ label: 'Description '+nextEle, key: column });
    this.props.changeState(column, '');
    this.props.addColumnDynamic('description', nextEle);
  }
  addStructureSnippets = () => {
    const { structure_snippets } = this.state;
    const lastElement = structure_snippets[structure_snippets.length - 1];
    const nextEle = lastElement+1;
    var joined = this.state.structure_snippets.concat(nextEle);
    var column = "structure_snippet_value_"+nextEle;
    this.setState({ structure_snippets: joined });
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : ''
      }
    }));
    headers.push({ label: 'Structure Snippet Value '+nextEle, key: column });
    this.props.changeState(column, '');
    this.props.addColumnDynamic('structure_snippets', nextEle);
  }
  addCallouts = () => {
    const { callouts } = this.state;
    const lastElement = callouts[callouts.length - 1];
    const nextEle = lastElement+1;
    var joined = this.state.callouts.concat(nextEle);
    var column = "callout"+nextEle;
    this.setState({ callouts: joined });
    this.setState(prevState => ({
      addForm: {
        ...prevState.addForm,
        [column] : ''
      }
    }));
    headers.push({ label: 'Callouts '+nextEle, key: column });
    this.props.changeState(column, '');
    this.props.addColumnDynamic('callouts', nextEle);
  }
  collapse = (e) => {
    const  parent = e.target.children[0];
    if(parent.classList.contains('fa-plus')) {
      parent.classList.remove('fa-plus');
      parent.classList.add('fa-minus');
    } else {
      parent.classList.remove('fa-minus');
      parent.classList.add('fa-plus');

    }
  }

  UNSAFE_componentWillMount () {
    this.resetForm();
  }
  render() {
    let {headlines, descriptions, callouts, structure_snippets} = this.state;
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
                    <div className="form-group mb-0" key={name}>
                      <label className="LabelPath d-block">Headline {head}</label>
                      <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" placeholder={name} maxLength="30" className="TextAdField" name={name} onChange={this.onChange}   value={val === null ? '' : val} />
                      <span className="addcarector">{val.length}/30</span>
                    </div>
                  );
                }) }
                  <button type="button" className="btn btn-link" onClick={this.addHeadLine}>Add Headline</button>
                  { descriptions.map((desc, ind) => {
                    let name = "description"+desc;
                    let val = this.state.addForm[name];
                    return (
                        <div className="form-group mb-0" key={name}>
                          <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                          <textarea className="AdTextArea" placeholder="Description" maxLength="90" name={name} onChange={this.onChange} value={val === null ? '' : val }></textarea>
                          <span className="addcarector">{val.length}/90</span>
                        </div>
                    );
                  }) }
                  <button type="button" className="btn btn-link" onClick={this.addDescription}>Add Description</button>
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
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="SiteLink Text" maxLength="25" className="TextAdField" name="sitelink1" onChange={this.onChange} value={this.state.addForm.sitelink1 === null ? '' : this.state.addForm.sitelink1 } />
                        <span className="addcarector">{(this.state.addForm.sitelink1).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Description Line 1(recommended)" maxLength="35" className="TextAdField" name="sitelink1_desc_1" onChange={this.onChange} value={this.state.addForm.sitelink1_desc_1 === null ? '' : this.state.addForm.sitelink1_desc_1 } />
                        <span className="addcarector">{(this.state.addForm.sitelink1_desc_1).length}/35</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Description Line 2(recommended)" maxLength="35" className="TextAdField" name="sitelink1_desc_2" onChange={this.onChange} value={this.state.addForm.sitelink1_desc_2 === null ? '' : this.state.addForm.sitelink1_desc_2 } />
                        <span className="addcarector">{(this.state.addForm.sitelink1_desc_2).length}/35</span>
                      </div>
                    </div>
                    <div className="sitelink2">
                      <p>Sitelink 2</p>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="SiteLink Text" maxLength="25" className="TextAdField" name="sitelink2" onChange={this.onChange} value={this.state.addForm.sitelink2 === null ? '' : this.state.addForm.sitelink2 } />
                        <span className="addcarector">{(this.state.addForm.sitelink2).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Description Line 1(recommended)" maxLength="35" className="TextAdField" name="sitelink2_desc_1" onChange={this.onChange} value={this.state.addForm.sitelink2_desc_1 === null ? '' : this.state.addForm.sitelink2_desc_1 } />
                        <span className="addcarector">{(this.state.addForm.sitelink2_desc_1).length}/35</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Description Line 2(recommended)" maxLength="35" className="TextAdField" name="sitelink2_desc_2" onChange={this.onChange} value={this.state.addForm.sitelink2_desc_2 === null ? '' : this.state.addForm.sitelink2_desc_2 } />
                        <span className="addcarector">{(this.state.addForm.sitelink2_desc_2).length}/35</span>
                    </div>
                    </div>
                    <div className="sitelink3">
                      <p>Sitelink 3</p>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="SiteLink Text" maxLength="25" className="TextAdField" name="sitelink3" onChange={this.onChange} value={this.state.addForm.sitelink3 === null ? '' : this.state.addForm.sitelink3 } />
                        <span className="addcarector">{(this.state.addForm.sitelink3).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Description Line 1(recommended)" maxLength="35" className="TextAdField" name="sitelink3_desc_1" onChange={this.onChange} value={this.state.addForm.sitelink3_desc_1 === null ? '' : this.state.addForm.sitelink3_desc_1 } />
                        <span className="addcarector">{(this.state.addForm.sitelink3_desc_1).length}/35</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Description Line 2(recommended)" maxLength="35" className="TextAdField" name="sitelink3_desc_2" onChange={this.onChange} value={this.state.addForm.sitelink3_desc_2 === null ? '' : this.state.addForm.sitelink3_desc_2 } />
                        <span className="addcarector">{(this.state.addForm.sitelink3_desc_2).length}/35</span>
                      </div>
                    </div>
                    <div className="sitelink4">
                      <p>Sitelink 4</p>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="SiteLink Text" maxLength="25" className="TextAdField" name="sitelink4" onChange={this.onChange} value={this.state.addForm.sitelink4 === null ? '' : this.state.addForm.sitelink4 } />
                        <span className="addcarector">{(this.state.addForm.sitelink4).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Description Line 1(recommended)" maxLength="35" className="TextAdField" name="sitelink4_desc_1" onChange={this.onChange} value={this.state.addForm.sitelink4_desc_1 === null ? '' : this.state.addForm.sitelink4_desc_1 } />
                        <span className="addcarector">{(this.state.addForm.sitelink4_desc_1).length}/35</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Description Line 2(recommended)" maxLength="35" className="TextAdField" name="sitelink4_desc_2" onChange={this.onChange} value={this.state.addForm.sitelink4_desc_2 === null ? '' : this.state.addForm.sitelink4_desc_2 } />
                        <span className="addcarector">{(this.state.addForm.sitelink4_desc_2).length}/35</span>
                      </div>
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
              <div className="card-body">
                <div className=""></div>
                <form className="text-ad-form">
                  <div className="sitelink1">
                    <div className="form-group mb-0">
                      <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <select className="TextAdField width_45"  name="call_extension_country"  onChange={this.onChange} value={this.state.addForm.call_extension_country === null ? '' : this.state.addForm.call_extension_country }>
                         <option value="united state">United State</option>
                         <option value="india">India</option>
                      </select>
                      <input type="text" placeholder="Call Extension" maxLength="25" className="TextAdField path" name="call_extension" onChange={this.onChange} value={this.state.addForm.call_extension === null ? '' : this.state.addForm.call_extension } />
                      <span className="addcarector">{(this.state.addForm.call_extension).length}/25</span>
                    </div>
                  </div>
                </form>
              </div>
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
                          <input type="text" placeholder={name} maxLength="25" className="TextAdField" name={name} onChange={this.onChange} value={val === null ? '' : val } />
                          <span className="addcarector">{val.length}/25</span>
                        </div>
                      );
                    }) }
                    <button type="button" className="btn btn-link" onClick={this.addCallouts}>Add Callout Text</button>
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
                           <option value="Amenities">Amenities</option>
                           <option value="Brands">Brands</option>
                           <option value="Courses">Courses</option>
                           <option value="Degree programs">Degree programs</option>
                           <option value="Destinations">Destinations</option>
                           <option value="Featured hotels">Featured hotels</option>
                           <option value="Insurance coverage">Insurance coverage</option>
                           <option value="Neighborhoods">Neighborhoods</option>
                           <option value="Service catalog">Service catalog</option>
                           <option value="Shows">Shows</option>
                           <option value="Styles">Styles</option>
                           <option value="Types">Types</option>
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
                      <button type="button" className="btn btn-link" onClick={this.addStructureSnippets}>Add Value</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="">
                <button type="button" className="btn btn-danger" onClick={this.resetForm}>Reset</button>
                <button type="button" className="btn btn-success ml-1" onClick={this.exportAdd}>Export This Add To Xls</button>
              </div>
            </div>

            <CSVLink
              filename="data.csv"
              data={[this.state.addForm]}
              headers={headers}
              className="hidden"
              ref={(r) => this.csvLink = r} />
          </div>;
  };
};

export default ResponsiveTab;
