import React  from 'react';

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
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
  }
  render() {
    return <div className="pt-content-body">
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
          </div>;
  };
};

export default Add;
