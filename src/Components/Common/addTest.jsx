import React  from 'react';
import $ from'jquery';


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
  render() {
    return <div>
            <div className="NewTextAd">
                <div className="FormHeading">
                  <h2>New Text Ad</h2>
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
                    <label className="LabelPath">Display Path</label>
                    <input type="text" name="" placeholder="www.example.com/path1" maxLength="30"  className="TextAdField" name="display_path" onChange={this.onChange} value={this.state.addForm.display_path === null ? '' : this.state.addForm.display_path } />
                    <span className="addcarector">{(this.state.addForm.display_path).length}/30</span>
                  </div>
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <textarea className="AdTextArea" placeholder="Description" maxLength="90" name="description1" onChange={this.onChange} value={this.state.addForm.description1 === null ? '' : this.state.addForm.description1 }></textarea>
                    <span className="addcarector">{(this.state.addForm.description1).length}/90</span>
                  </div>
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <textarea className="AdTextArea" placeholder="Description" name="description2" onChange={this.onChange} value={this.state.addForm.description2 === null ? '' : this.state.addForm.description2 }></textarea>
                    <span className="addcarector">{(this.state.addForm.description2).length}/90</span>
                  </div>
                  <div className="form-group mb-0">
                    <i className="fa fa-angle-down AngleDown" aria-hidden="true"></i>
                    Add URL Option
                  </div>
                </form>
            </div>
            <div className="card  mt-2">
              <div className="card-header" onClick={this.collapse} data-toggle="collapse" href="#collapseSiteExtension" role="button" aria-expanded="false" aria-controls="collapseSiteExtension">
                <a className="card-link btn-link">Sitelinks</a>
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
                        <input type="text" placeholder="SiteLink Text" maxLength="25" className="TextAdField" name="sitelink2" onChange={this.onChange} value={this.state.addForm.sitelink4 === null ? '' : this.state.addForm.sitelink4 } />
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
              <div className="card-header" data-toggle="collapse" href="#collapseCallExtension" role="button" aria-expanded="false" aria-controls="collapseCallExtension">
                <a className="card-link">Call Extension</a>
              </div>
              <div id="collapseCallExtension" className="collapse">
              <div className="card-body">
                <div className=""></div>
                <form className="text-ad-form">
                  <div className="sitelink1">
                    <div className="form-group mb-0">
                      <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" placeholder="Call Extension" maxLength="25" className="TextAdField" name="call_extension" onChange={this.onChange} value={this.state.addForm.call_extension === null ? '' : this.state.addForm.call_extension } />
                      <span className="addcarector">{(this.state.addForm.call_extension).length}/25</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header" data-toggle="collapse" href="#collapseCallouts" role="button" aria-expanded="false" aria-controls="collapseCallouts">
                <a className="card-link">Callouts</a>
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
            <div className="card-header" data-toggle="collapse" href="#collapseStructueSnippet" role="button" aria-expanded="false" aria-controls="collapseStructueSnippet">
            <a className="card-link">Structured Snippets</a>
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>;
  };
};

export default AddTest;
