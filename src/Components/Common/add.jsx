import React  from 'react';


class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {
        final_url: '',
        headline1: 'Awesome Headline 1',
        headline2: 'Awesome Headline 2',
        headline3: 'Awesome Headline 3',
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
        callouts1: '',
        callouts2: '',
        callouts3: '',
        callouts3: '',
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

              <div className="pt-content-body">
                 <div className="pt-form-group pp-10">
                    <div id="final_url" className="pt-input-addon">Final Url</div>
                    <input type="text"  id="final_url"  className="pt-input" maxLength="11" name="final_url" onChange={this.onChange} value={this.state.addForm.final_url === null ? '' : this.state.addForm.final_url } />
                    <div className="pt-form-group-btn"><button id="btnPostheadline1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)' }}>14</button></div>
                 </div>
                 <div className="pt-form-group pp-10">
                    <div id="headline1" className="pt-input-addon">Headline 1</div>
                    <input type="text"  id="headline1"  className="pt-input" name="headline1" onChange={this.onChange} value={this.state.addForm.headline1 === null ? '' : this.state.addForm.headline1 } />
                    <div className="pt-form-group-btn"><button id="btnPostheadline1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)' }}>14</button></div>
                 </div>
                 <div className="pt-form-group pp-10">
                    <div id="headline2" className="pt-input-addon">Headline 2</div>
                    <input type="text"  id="headline2"  className="pt-input" name="headline2" onChange={this.onChange} value={this.state.addForm.headline2 === null ? '' : this.state.addForm.headline2 } />
                    <div className="pt-form-group-btn"><button id="btnPostheadline1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)' }}>14</button></div>
                 </div>
                 <div className="pt-form-group pp-10">
                    <div id="headline3" className="pt-input-addon">Headline 3</div>
                    <input type="text"  id="headline3"  className="pt-input" name="headline3" onChange={this.onChange} value={this.state.addForm.headline3 === null ? '' : this.state.addForm.headline3 } />
                    <div className="pt-form-group-btn"><button id="btnPostheadline1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)' }}>14</button></div>
                 </div>
                 <div className="pt-form-group pp-10">
                    <div id="display_path" className="pt-input-addon">Display Path </div>
                    <input type="text"  id="display_path"  className="pt-input" name="display_path" onChange={this.onChange} value={this.state.addForm.display_path === null ? '' : this.state.addForm.display_path } />
                    <div className="pt-form-group-btn"><button id="btnPostheadline1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)' }}>14</button></div>
                 </div>
                 <div className="pt-form-group pp-5">
                    <div id="path1" className="pt-input-addon"> Path 1 </div>
                    <input type="text"  id="path1"  className="pt-input" name="path1" onChange={this.onChange} value={this.state.addForm.path1 === null ? '' : this.state.addForm.path1 } />
                    <div className="pt-form-group-btn"><button id="btnPostheadline1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)' }}>14</button></div>
                 </div>
                 <div className="pt-form-group pp-5">
                    <div id="path2" className="pt-input-addon">Path 2</div>
                    <input type="text"  id="path2"  className="pt-input" name="path2" onChange={this.onChange} value={this.state.addForm.path2 === null ? '' : this.state.addForm.path2 } />
                    <div className="pt-form-group-btn"><button id="btnPostheadline1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)' }}>14</button></div>
                 </div>
                 <div className="pt-form-group pp-10">
                    <div id="description1" className="pt-input-addon">Description 1</div>
                    <input type="text"  id="description1"  className="pt-input" name="description1" onChange={this.onChange} value={this.state.addForm.description1 === null ? '' : this.state.addForm.description1 } />
                    <div className="pt-form-group-btn"><button id="btnPostheadline1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)' }}>14</button></div>
                 </div>
                 <div className="pt-form-group pp-10">
                    <div id="description2" className="pt-input-addon">Description 2</div>
                    <input type="text"  id="description2"  className="pt-input" name="description2" onChange={this.onChange} value={this.state.addForm.description2 === null ? '' : this.state.addForm.description2 } />
                    <div className="pt-form-group-btn"><button id="btnPostheadline1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)' }}>14</button></div>
                 </div>
              </div>

              <div className="pt-panel-group" >
                <div className="pt-panel pt-panel-default">
                  <div className="pt-panel-heading"  data-toggle="collapse" href="#collapseSiteExtension" role="button" aria-expanded="false" aria-controls="collapseSiteExtension">
                     <h4 className="pt-panel-title">
                       <a className="" role="button" id="ad1sitelinks" href="#">Sitelinks</a>
                     </h4>
                  </div>
                  <div  className=" collapse" id="collapseSiteExtension">
                    <div className="pt-panel-body">
                      <div className="pt-sitelinks">
                         <div className="pt-form-group pp-8">
                            <div id="sitelink1" className="pt-input-addon">Sitelink 1</div>
                            <input type="text"  name="sitelink1" onChange={this.onChange} value={this.state.addForm.sitelink1 === null ? '' : this.state.addForm.sitelink1 } className="pt-input" />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>24</button></div>
                         </div>
                         <div className="pt-form-group pp-10">
                            <div id="sitelink1_desc_1" className="pt-input-addon">Sitelink Des 1</div>
                            <input type="text"  name="sitelink1_desc_1" onChange={this.onChange} value={this.state.addForm.sitelink1_desc_1 === null ? '' : this.state.addForm.sitelink1_desc_1 } className="pt-input" />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink1des1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>35</button></div>
                         </div>
                         <div className="pt-form-group pp-10">
                            <div id="sitelink1_desc_2" className="pt-input-addon">Sitelink Des 2</div>
                            <input type="text"  name="sitelink1_desc_2" className="pt-input" onChange={this.onChange} value={this.state.addForm.sitelink1_desc_2 === null ? '' : this.state.addForm.sitelink1_desc_2 } />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink1des2" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>35</button></div>
                         </div>
                         <div className="pt-form-group pp-8">
                            <div id="sitelink2" className="pt-input-addon">Sitelink 2</div>
                            <input type="text" name="sitelink2"  className="pt-input" onChange={this.onChange} value={this.state.addForm.sitelink2 === null ? '' : this.state.addForm.sitelink2 } />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink2" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                         </div>
                         <div className="pt-form-group pp-10">
                            <div id="sitelink2_desc_1" className="pt-input-addon">Sitelink Des 1</div>
                            <input type="text"  name="sitelink2_desc_1" className="pt-input" onChange={this.onChange} value={this.state.addForm.sitelink2_desc_1 === null ? '' : this.state.addForm.sitelink2_desc_1 } />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink2des1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>35</button></div>
                         </div>
                         <div className="pt-form-group pp-10">
                            <div id="sitelink2_desc_2" className="pt-input-addon">Sitelink Des 2</div>
                            <input type="text"  name="sitelink2_desk_2"  className="pt-input" onChange={this.onChange} value={this.state.addForm.sitelink2_desc_2 === null ? '' : this.state.addForm.sitelink2_desc_2 } />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink2des2" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>35</button></div>
                         </div>
                         <div className="pt-form-group pp-8">
                            <div id="sitelink3" className="pt-input-addon">Sitelink 3</div>
                            <input type="text" name="sitelink3" className="pt-input" onChange={this.onChange} value={this.state.addForm.sitelink3 === null ? '' : this.state.addForm.sitelink3 } />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink3" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                         </div>
                         <div className="pt-form-group pp-10">
                            <div id="sitelink3_desc_1" className="pt-input-addon">Sitelink Des 1</div>
                            <input type="text" value="" name="sitelink3_desc_1" className="pt-input" onChange={this.onChange} value={this.state.addForm.sitelink3_desc_1 === null ? '' : this.state.addForm.sitelink3_desc_1 } />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink3des1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>35</button></div>
                         </div>
                         <div className="pt-form-group pp-10">
                            <div id="sitelink3_desc_2" className="pt-input-addon">Sitelink Des 2</div>
                            <input type="text"  name="sitelink3_desc_2" className="pt-input" onChange={this.onChange} value={this.state.addForm.sitelink3_desc_2 === null ? '' : this.state.addForm.sitelink3_desc_2 } />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink3des2" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>35</button></div>
                         </div>
                         <div className="pt-form-group pp-8">
                            <div id="sitelink4" className="pt-input-addon">Sitelink 4</div>
                            <input type="text"  name="sitelink4" className="pt-input"  onChange={this.onChange} value={this.state.addForm.sitelink4 === null ? '' : this.state.addForm.sitelink4 }/>
                            <div className="pt-form-group-btn"><button id="btnPostsitelink4" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                         </div>
                         <div className="pt-form-group pp-10">
                            <div id="sitelink4_desc_1" className="pt-input-addon">Sitelink Des 1</div>
                            <input type="text"  name="sitelink4_desc_1" className="pt-input" onChange={this.onChange} value={this.state.addForm.sitelink4_desc_1 === null ? '' : this.state.addForm.sitelink4_desc_1 } />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink4des1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>35</button></div>
                         </div>
                         <div className="pt-form-group pp-10">
                            <div id="sitelink4_desc_2" className="pt-input-addon">Sitelink Des 2</div>
                            <input type="text"  name="sitelink4_desc_2" className="pt-input" onChange={this.onChange} value={this.state.addForm.sitelink4_desc_2 === null ? '' : this.state.addForm.sitelink4_desc_2 } />
                            <div className="pt-form-group-btn"><button id="btnPostsitelink4des2" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>35</button></div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-panel pt-panel-default">
                 <div className="pt-panel-heading" data-toggle="collapse" href="#collapseCallExtension" role="button" aria-expanded="false" aria-controls="collapseCallExtension">
                    <h4 className="pt-panel-title">
                       <a href="#">Call Extension</a>
                    </h4>
                 </div>
                 <div className="collapse" id="collapseCallExtension">
                    <div className="pt-panel-body">
                       <div className="pt-sitelinks">
                          <div className="pt-form-group pp-8">
                             <div className="pt-input-addon">Phone #</div>
                             <input type="text" name="call_extension"  className="pt-input" onChange={this.onChange} value={this.state.addForm.call_extension === null ? '' : this.state.addForm.call_extension } />
                             <div className="pt-form-group-btn"><button type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="pt-panel pt-panel-default">
                 <div className="pt-panel-heading" data-toggle="collapse" href="#collapseCallouts" role="button" aria-expanded="false" aria-controls="collapseCallouts">
                    <h4 className="pt-panel-title">
                       <a href="#">Callouts</a>
                    </h4>
                 </div>
                 <div  className="collapse" id="collapseCallouts">
                   <div className="pt-panel-body">
                      <div className="pt-sitelinks">
                        <div className="pt-form-group pp-8">
                           <div className="pt-input-addon">Callout 1</div>
                           <input type="text" name="callout1"  className="pt-input"  onChange={this.onChange} value={this.state.addForm.callout1 === null ? '' : this.state.addForm.callout1 } />
                           <div className="pt-form-group-btn"><button id="btnPostad1_callout1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                        </div>
                        <div className="pt-form-group pp-8">
                           <div  className="pt-input-addon">Callout 2</div>
                           <input type="text"  name="callout2" className="pt-input" onChange={this.onChange} value={this.state.addForm.callout2 === null ? '' : this.state.addForm.callout2 } />
                           <div className="pt-form-group-btn"><button id="btnPostad1_callout2" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                        </div>
                        <div className="pt-form-group pp-8">
                           <div  className="pt-input-addon">Callout 3</div>
                           <input type="text" name="callout3" className="pt-input" onChange={this.onChange} value={this.state.addForm.callout3 === null ? '' : this.state.addForm.callout3 } />
                           <div className="pt-form-group-btn"><button id="btnPostad1_callout3" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="pt-panel pt-panel-default">
                 <div className="pt-panel-heading" data-toggle="collapse" href="#collapseStructueSnippet" role="button" aria-expanded="false" aria-controls="collapseStructueSnippet">
                    <h4 className="pt-panel-title">
                       <a role="button" href="#" >Structured Snippets</a>
                    </h4>
                 </div>
                 <div  className="collapse" id="collapseStructueSnippet">
                    <div className="pt-panel-body">
                       <div className="pt-sitelinks">
                          <div className="pt-form-group pp-10">
                             <div className="pt-input-addon">Header</div>
                               <select className="pt-input"  name="structure_snippet_header"  onChange={this.onChange} value={this.state.addForm.structure_snippet_header === null ? '' : this.state.addForm.structure_snippet_header }>
                                  <option value="Amenities">Amenities</option>
                                  <option value="Brands">Brands</option>
                                  <option value="Courses">Courses</option>
                                  <option value="Degree progra">Degree programs</option>
                                  <option value="Destinations">Destinations</option>
                                  <option value="Featured hote">Featured hotels</option>
                                  <option value="Insurance covera">Insurance coverage</option>
                                  <option value="Neighborhoods">Neighborhoods</option>
                                  <option value="Service catal">Service catalog</option>
                                  <option value="Service catal">Service catalog</option>
                                  <option value="Shows">Shows</option>
                                  <option value="Styles">Styles</option>
                                  <option value="Types">Types</option>
                               </select>
                              </div>
                              <div className="pt-form-group pp-8">
                                 <div  className="pt-input-addon">Value 1</div>
                                 <input type="text"  name="structure_snippet_value_1" className="pt-input" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_1 === null ? '' : this.state.addForm.structure_snippet_value_1 } />
                                 <div className="pt-form-group-btn"><button id="btnPostss_value1" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                              </div>
                          <div className="pt-form-group pp-8">
                             <div  className="pt-input-addon">Value 2</div>
                             <input type="text" name="structure_snippet_value_2" className="pt-input" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_2 === null ? '' : this.state.addForm.structure_snippet_value_2 } />
                             <div className="pt-form-group-btn"><button id="btnPostss_value2" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                          </div>
                          <div className="pt-form-group pp-8">
                             <div  className="pt-input-addon">Value 3</div>
                             <input type="text" name="structure_snippet_value_3" className="pt-input" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_3 === null ? '' : this.state.addForm.structure_snippet_value_3 } />
                             <div className="pt-form-group-btn"><button id="btnPostss_value3" type="button" className="pt-btn" style={{backgroundColor: 'rgb(92, 184, 92)'}}>25</button></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>


          </div>;
  };
};

export default Add;
