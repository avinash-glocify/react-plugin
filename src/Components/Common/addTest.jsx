import React  from 'react';
import $ from'jquery';
import { CSVLink, CSVDownload } from "react-csv";

const headers = [
  { label: 'Final Url', key: 'final_url' },
  { label: 'Headline 1', key: 'headline1' },
  { label: 'Headline 2', key: 'headline2' },
  { label: 'Headline 3', key: 'headline3' },
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
  { label: 'Callout 4', key: 'callout4' },
  { label: 'Callout 5', key: 'callout5' },
  { label: 'Callout 6', key: 'callout6' },
  { label: 'Structure Snippet Header', key: 'structure_snippet_header' },
  { label: 'Structure Snippet Value 1', key: 'structure_snippet_value_1' },
  { label: 'Structure Snippet Value 2', key: 'structure_snippet_value_2' },
  { label: 'Structure Snippet Value 3', key: 'structure_snippet_value_3' },
];

class AddTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {
        final_url: '',
        headline1: 'Awesome Headline 1',
        headline2: 'Awesome Headline 2',
        headline3: '',
        description1: 'Create Some Amazing Ad Copy Tod.',
        description2: 'Make Your Ad Stand Out!',
        display_path: 'www.example.com',
        call_extension_country: '',
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
        callout4: '',
        callout5: '',
        callout6: '',
        structure_snippet_header: '',
        structure_snippet_value_1: '',
        structure_snippet_value_2: '',
        structure_snippet_value_3: '',
        structure_snippet_value_4: '',
        structure_snippet_value_5: '',
        structure_snippet_value_6: '',
      }
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
        callout4: '',
        callout5: '',
        callout6: '',
        structure_snippet_header: '',
        structure_snippet_value_1: '',
        structure_snippet_value_2: '',
        structure_snippet_value_3: '',
      }
    })
    this.props.resetForm();

  }
  exportAdd = () => {
    this.csvLink.link.click()
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
  render() {
    return <div>
            <div className="NewTextAd">
                <div className="FormHeading">
                </div>
                <form className="text-ad-form">
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <input type="text" placeholder="Final URL" maxLength="30" className="TextAdField" name="final_url" onChange={this.onChange} value={this.state.addForm.final_url === null ? '' : this.state.addForm.final_url } />
                    <span className="addcarector">{(this.state.addForm.final_url).length}/30</span>
                  </div>
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <input type="text" placeholder="Heading 1" maxLength="30" className="TextAdField" name="headline1" onChange={this.onChange} value={this.state.addForm.headline1 === null ? '' : this.state.addForm.headline1 } />
                    <span className="addcarector">{(this.state.addForm.headline1).length}/30</span>
                  </div>
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <input type="text" placeholder="Heading 2" maxLength="30" className="TextAdField" name="headline2" onChange={this.onChange} value={this.state.addForm.headline2 === null ? '' : this.state.addForm.headline2 } />
                    <span className="addcarector">{(this.state.addForm.headline2).length}/30</span>
                  </div>
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <input type="text" name="" placeholder="Heading 3" maxLength="30" className="TextAdField" name="headline3" onChange={this.onChange} value={this.state.addForm.headline3 === null ? '' : this.state.addForm.headline3 } />
                    <span className="addcarector">{(this.state.addForm.headline3).length}/30</span>
                  </div>
                  <div className="form-group mb-0">
                    <label className="LabelPath d-block">Display Path</label>
                    <input type="text"  placeholder="www.example.com/path1" maxLength="30"  className="TextAdField width_45" name="display_path" onChange={this.onChange} value={this.state.addForm.display_path === null ? '' : this.state.addForm.display_path } />
                    /<input type="text"  placeholder="path1" maxLength="15"  className="TextAdField path" name="path1" onChange={this.onChange} value={this.state.addForm.path1 === null ? '' : this.state.addForm.path1 } />
                    /<input type="text" placeholder="path2" maxLength="14"  className="TextAdField path" name="path2" onChange={this.onChange} value={this.state.addForm.path2 === null ? '' : this.state.addForm.path2 } />
                  </div>
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <textarea className="AdTextArea" placeholder="Description" maxLength="90" name="description1" onChange={this.onChange} value={this.state.addForm.description1 === null ? '' : this.state.addForm.description1 }></textarea>
                    <span className="addcarector">{(this.state.addForm.description1).length}/90</span>
                  </div>
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <textarea className="AdTextArea" placeholder="Description" maxLength="90"  name="description2" onChange={this.onChange} value={this.state.addForm.description2 === null ? '' : this.state.addForm.description2 }></textarea>
                    <span className="addcarector">{(this.state.addForm.description2).length}/90</span>
                  </div>
                </form>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href="#collapseSiteExtension" role="button" aria-expanded="false" aria-controls="collapseSiteExtension">Sitelinks<i className="fa fa-plus text-info float-right" aria-hidden="true"></i></a>
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
              <div className="card-header">
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href="#collapseCallExtension" role="button" aria-expanded="false" aria-controls="collapseCallExtension">
                Call Extension  <i className="fa fa-plus text-info float-right" aria-hidden="true"></i></a>
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
                      <input type="text" splaceholder="Phone Number" maxLength="25" className="TextAdField ml-1 width_45" name="call_extension" onChange={this.onChange} value={this.state.addForm.call_extension === null ? '' : this.state.addForm.call_extension } />
                      <span className="addcarector">{(this.state.addForm.call_extension).length}/25</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href="#collapseCallouts" role="button" aria-expanded="false" aria-controls="collapseCallouts">Callouts   <i className="fa fa-plus text-info float-right" aria-hidden="true"></i></a>
              </div>
              <div id="collapseCallouts" className="collapse">
              <div className="card-body">
                <div className=""></div>
                <form className="text-ad-form">
                  <div className="sitelink1">
                    <div className="form-group mb-0">
                      <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" placeholder="Callout Text 1" maxLength="25" className="TextAdField" name="callout1" onChange={this.onChange} value={this.state.addForm.callout1 === null ? '' : this.state.addForm.callout1 } />
                      <span className="addcarector">{(this.state.addForm.callout1).length}/25</span>
                    </div>
                    <div className="form-group mb-0">
                      <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" placeholder="Callout Text 2" maxLength="25" className="TextAdField" name="callout2" onChange={this.onChange} value={this.state.addForm.callout2 === null ? '' : this.state.addForm.callout2 } />
                      <span className="addcarector">{(this.state.addForm.callout2).length}/25</span>
                    </div>
                    <div className="form-group mb-0">
                      <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" placeholder="Callout Text 3" maxLength="25" className="TextAdField" name="callout3" onChange={this.onChange} value={this.state.addForm.callout3 === null ? '' : this.state.addForm.callout3 } />
                      <span className="addcarector">{(this.state.addForm.callout3).length}/25</span>
                    </div>
                    <div className="form-group mb-0">
                      <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" placeholder="Callout Text 4" maxLength="25" className="TextAdField" name="callout4" onChange={this.onChange} value={this.state.addForm.callout4 === null ? '' : this.state.addForm.callout4 } />
                      <span className="addcarector">{(this.state.addForm.callout4).length}/25</span>
                    </div>
                    <div className="form-group mb-0">
                      <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" placeholder="Callout Text 5" maxLength="25" className="TextAdField" name="callout5" onChange={this.onChange} value={this.state.addForm.callout5 === null ? '' : this.state.addForm.callout5 } />
                      <span className="addcarector">{(this.state.addForm.callout5).length}/25</span>
                    </div>
                    <div className="form-group mb-0">
                      <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" placeholder="Callout Text 6" maxLength="25" className="TextAdField" name="callout6" onChange={this.onChange} value={this.state.addForm.callout6 === null ? '' : this.state.addForm.callout6 } />
                      <span className="addcarector">{(this.state.addForm.callout6).length}/25</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href="#collapseStructueSnippet" role="button" aria-expanded="false" aria-controls="collapseStructueSnippet">Structured Snippets <i className="fa fa-plus text-info float-right" aria-hidden="true"></i></a>
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
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Value 1" maxLength="25" className="TextAdField" name="structure_snippet_value_1" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_1 === null ? '' : this.state.addForm.structure_snippet_value_1 } />
                        <span className="addcarector">{(this.state.addForm.structure_snippet_value_1).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Value 2" maxLength="25" className="TextAdField" name="structure_snippet_value_2" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_2 === null ? '' : this.state.addForm.structure_snippet_value_2 } />
                        <span className="addcarector">{(this.state.addForm.structure_snippet_value_2).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Value 3" maxLength="25" className="TextAdField" name="structure_snippet_value_3" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_3 === null ? '' : this.state.addForm.structure_snippet_value_3 } />
                        <span className="addcarector">{(this.state.addForm.structure_snippet_value_3).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Value 3" maxLength="25" className="TextAdField" name="structure_snippet_value_4" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_4 === null ? '' : this.state.addForm.structure_snippet_value_4 } />
                        <span className="addcarector">{(this.state.addForm.structure_snippet_value_4).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Value 3" maxLength="25" className="TextAdField" name="structure_snippet_value_5" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_5 === null ? '' : this.state.addForm.structure_snippet_value_5 } />
                        <span className="addcarector">{(this.state.addForm.structure_snippet_value_5).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Value 3" maxLength="25" className="TextAdField" name="structure_snippet_value_6" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_6 === null ? '' : this.state.addForm.structure_snippet_value_6 } />
                        <span className="addcarector">{(this.state.addForm.structure_snippet_value_6).length}/25</span>
                      </div>
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

export default AddTest;
