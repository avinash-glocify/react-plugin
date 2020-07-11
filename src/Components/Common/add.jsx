import React  from 'react';
import { CSVLink } from "react-csv";
import CallExtension  from './callExtension.jsx';
import InputComponent  from './input.jsx';
import Description  from './description.jsx';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: {},
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
  changeDynamicState = (column, value) => {
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
    })
    this.props.resetForm();
    if(this.refs.callExtension) {
      this.refs.callExtension.resetForm();
    }
  }
  exportAdd = () => {
    this.csvLink.link.click()
  }
  collapse = (e) => {
    var ele =  e.target.children[0];

    if(typeof ele === 'undefined') {
      ele = e.target;
    }

    if(ele.classList.contains(`fa-plus`)) {
      ele.classList.remove('fa-plus');
      ele.classList.add('fa-minus');
    } else {
      ele.classList.remove('fa-minus');
      ele.classList.add('fa-plus');
    }
  }
  UNSAFE_componentWillMount() {
    this.resetForm();
  }
  render() {
    const {structureHeaders, headers} = this.props;
    return <div>
            <div className="NewTextAd">
                <form className="text-ad-form">
                  <div className="form-group">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                    <input type="text" placeholder="Final URL" maxLength="30" className="TextAdField" name="final_url" onChange={this.onChange} value={this.state.addForm.final_url === null ? '' : this.state.addForm.final_url } />
                    <span className="addcarector"></span>
                  </div>
                  <InputComponent ref="headline" placeholder="Headline 1" maxLength="30"  changeHeadline={this.changeDynamicState} name="headline1" headline={this.state.addForm.headline1} />
                  <InputComponent ref="headline" placeholder="Headline 2" maxLength="30" changeHeadline={this.changeDynamicState} name="headline2" headline={this.state.addForm.headline2} />
                  <InputComponent ref="headline" placeholder="Headline 3" maxLength="30" changeHeadline={this.changeDynamicState} name="headline3" headline={this.state.addForm.headline3} />
                  <div className="form-group">
                    <label className="LabelPath d-block">Display Path <i className="fa fa-question-circle" aria-hidden="true"></i></label>
                    <input type="text"  placeholder="www.example.com" maxLength="30"  className="TextAdField width_45" name="display_path" onChange={this.onChange} value={this.state.addForm.display_path === null ? '' : this.state.addForm.display_path } />
                    /<input type="text"  placeholder="path1" maxLength="15"  className="TextAdField path" name="path1" onChange={this.onChange} value={this.state.addForm.path1 === null ? '' : this.state.addForm.path1 } />
                    /<input type="text" placeholder="path2" maxLength="14"  className="TextAdField path" name="path2" onChange={this.onChange} value={this.state.addForm.path2 === null ? '' : this.state.addForm.path2 } />
                  </div>
                  <Description changeHeadline={this.changeDynamicState} name="description1" description={this.state.addForm.description1} />
                  <Description changeHeadline={this.changeDynamicState} name="description2" description={this.state.addForm.description2} />
                </form>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href={`#collapseSiteExtension_${this.props.add}`} role="button" aria-expanded="false" aria-controls={`collapseSiteExtension_${this.props.add}`}>Sitelinks<i className={`fa fa-plus text-info float-right aria-hidden`} aria-hidden="true"></i></a>
              </div>
              <div id={`collapseSiteExtension_${this.props.add}`} className={`collapse`}>
                <div className="card-body">
                  <div className="">
                  </div>
                  <form className="text-ad-form">
                    <div className="sitelink1">
                      <label className="LabelPath d-block mb-2">Sitelink 1 <i className="fa fa-question-circle" aria-hidden="true"></i></label>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink1" headline={this.state.addForm.sitelink1} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink1_desc_1" headline={this.state.addForm.sitelink1_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink1_desc_2" headline={this.state.addForm.sitelink1_desc_2} />
                      <InputComponent ref="headline" placeholder="Final Url" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink1_final_url" headline={this.state.addForm.sitelink1_final_url} />
                    </div>
                    <div className="sitelink2">
                     <label className="LabelPath d-block mb-2">Sitelink 2 <i className="fa fa-question-circle" aria-hidden="true"></i></label>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink2" headline={this.state.addForm.sitelink2} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink2_desc_1" headline={this.state.addForm.sitelink2_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink2_desc_2" headline={this.state.addForm.sitelink2_desc_2} />
                      <InputComponent ref="headline" placeholder="Final Url" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink2_final_url" headline={this.state.addForm.sitelink2_final_url} />
                    </div>
                    <div className="sitelink3">
                     <label className="LabelPath d-block mb-2">Sitelink 3 <i className="fa fa-question-circle" aria-hidden="true"></i></label>
                      <InputComponent ref="headline" placeholder="SiteLink Text" maxLength="25" changeHeadline={this.changeDynamicState} name="sitelink3" headline={this.state.addForm.sitelink3} />
                      <InputComponent ref="headline" placeholder="Description Line 1(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink3_desc_1" headline={this.state.addForm.sitelink3_desc_1} />
                      <InputComponent ref="headline" placeholder="Description Line 2(recommended)" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink3_desc_2" headline={this.state.addForm.sitelink3_desc_2} />
                      <InputComponent ref="headline" placeholder="Final Url" maxLength="35" changeHeadline={this.changeDynamicState} name="sitelink3_final_url" headline={this.state.addForm.sitelink3_final_url} />
                    </div>
                    <div className="sitelink4">
                      <label className="LabelPath d-block mb-2">Sitelink 4 <i className="fa fa-question-circle" aria-hidden="true"></i></label>

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
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href={`#collapseCallExtension_${this.props.add}`} role="button" aria-expanded="false" aria-controls={`collapseCallExtension_${this.props.add}`}>
                Call Extension <i className={`fa fa-plus text-info float-right aria-hidden ${this.props.add}`} aria-hidden="true"></i>
                </a>
              </div>
              <div id={`collapseCallExtension_${this.props.add}`} className="collapse">
                <CallExtension ref="callExtension" country={this.state.addForm.call_extension_country} phone={this.state.addForm.call_extension}
                changePhone={this.changeDynamicState} />
              </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href={`#collapseCallouts_${this.props.add}`} role="button" aria-expanded="false" aria-controls={`collapseCallouts__${this.props.add}`}>Callouts   <i className={`fa fa-plus text-info float-right aria-hidden ${this.props.add}`} aria-hidden="true"></i></a>
              </div>
              <div id={`collapseCallouts_${this.props.add}`} className="collapse">
              <div className="card-body">
                <div className=""></div>
                <form className="text-ad-form">
                  <div className="sitelink1">
                    <InputComponent ref="headline" placeholder="Callout Text 1" maxLength="25" changeHeadline={this.changeDynamicState} name="callout1" headline={this.state.addForm.callout1} />
                    <InputComponent ref="headline" placeholder="Callout Text 2" maxLength="25" changeHeadline={this.changeDynamicState} name="callout2" headline={this.state.addForm.callout2} />
                    <InputComponent ref="headline" placeholder="Callout Text 3" maxLength="25" changeHeadline={this.changeDynamicState} name="callout3" headline={this.state.addForm.callout3} />
                    <InputComponent ref="headline" placeholder="Callout Text 4" maxLength="25" changeHeadline={this.changeDynamicState} name="callout4" headline={this.state.addForm.callout4} />
                    <InputComponent ref="headline" placeholder="Callout Text 5" maxLength="25" changeHeadline={this.changeDynamicState} name="callout5" headline={this.state.addForm.callout5} />
                    <InputComponent ref="headline" placeholder="Callout Text 6" maxLength="25" changeHeadline={this.changeDynamicState} name="callout6" headline={this.state.addForm.callout6} />
                  </div>
                </form>
              </div>
            </div>
            </div>
            <div className="card  mt-2">
              <div className="card-header">
                <a className="text-dark" onClick={this.collapse} data-toggle="collapse" href={`#collapseStructueSnippet_${this.props.add}`} role="button" aria-expanded="false" aria-controls={`collapseStructueSnippet_${this.props.add}`}>Structured Snippets <i className={`fa fa-plus text-info float-right aria-hidden ${this.props.add}`} aria-hidden="true"></i></a>
              </div>
              <div id={`collapseStructueSnippet_${this.props.add}`} className="collapse">
                <div className="card-body">
                  <div className=""></div>
                  <form className="text-ad-form">
                    <div className="sitelink1">
                      <label className="LabelPath d-block mb-2">Header <i className="fa fa-question-circle" aria-hidden="true"></i></label>
                      <div className="form-group mb-0">
                        <select className="TextAdField"  name="structure_snippet_header"  onChange={this.onChange} value={this.state.addForm.structure_snippet_header === null ? '' : this.state.addForm.structure_snippet_header }>
                        { structureHeaders.map((head, ind) => {
                          return (
                           <option value={head} key={head}>{head}</option>
                          )
                        })}
                        </select>
                      </div>
                      <label className="LabelPath d-block mt-3 mb-2">Values <i className="fa fa-question-circle" aria-hidden="true"></i></label>
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
                        <input type="text" placeholder="Value 4" maxLength="25" className="TextAdField" name="structure_snippet_value_4" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_4 === null ? '' : this.state.addForm.structure_snippet_value_4 } />
                        <span className="addcarector">{(this.state.addForm.structure_snippet_value_4).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Value 5" maxLength="25" className="TextAdField" name="structure_snippet_value_5" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_5 === null ? '' : this.state.addForm.structure_snippet_value_5 } />
                        <span className="addcarector">{(this.state.addForm.structure_snippet_value_5).length}/25</span>
                      </div>
                      <div className="form-group mb-0">
                        <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                        <input type="text" placeholder="Value 6" maxLength="25" className="TextAdField" name="structure_snippet_value_6" onChange={this.onChange} value={this.state.addForm.structure_snippet_value_6 === null ? '' : this.state.addForm.structure_snippet_value_6 } />
                        <span className="addcarector">{(this.state.addForm.structure_snippet_value_6).length}/25</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="card-body p-0 pb-2">
                <button type="button" className="btn btn-danger reset-button mt-1" onClick={this.resetForm}>Reset</button>
                <button type="button" className="btn btn-success ml-1 import-button mt-1" onClick={this.exportAdd}>Export This Add To Xls</button>
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

export default Add;
