import React  from 'react';
import AddTest from './Common/addTest.jsx';
import MobileView from './Common/mobile.jsx';
import DesktopView from './Common/desktop.jsx';
import ResponsiveTab from './Common/responsiveTab.jsx';
// import Switch from "react-switch";

class HomeTest extends React.Component {
  constructor() {
    super();
    this.state = {
      add1 : {},
      add2: {},
      add3: {},
      responsiveAddData: {},
      activeAdd2: false,
      activeAdd3: false,
      responsiveAdd: false,
      mobileView: true,
      activeAdd: 'activeAdd1',
      activeView: 1,
      highlightAd: false,
      formData: {
        headline1: 'Awesome Headline 1',
        headline2: 'Awesome Headline 2',
        headline3: '',
        display_path: 'www.example.com',
        description1: 'Create Some Amazing Ad Copy Tod.',
        description2: 'Make Your Ad Stand Out!'
      },
      adHeadlines: [1,2,3],
      adDescriptions: [1,2],
      adCallouts: [1,2,3,4,5,6],
      adStructure_snippets: [1,2,3,4,5,6],
    }
  }

  handleChange = () => {
    this.setState(prevState => ({
        highlightAd: !prevState.highlightAd
      }));
  }
  changeState1 = (column, value) => {
    this.setState(prevState => ({
      add1: {
        ...prevState.add1,
        [column] : value
      }
    }))
  }
  changeState2 = (column, value) => {
    this.setState(prevState => ({
      add2: {
        ...prevState.add2,
        [column] : value
      }
    }))
  }
  changeState3 = (column, value) => {
    this.setState(prevState => ({
      add3: {
        ...prevState.add3,
        [column] : value
      }
    }))
  }
  changeState4 = (column, value) => {
    this.setState(prevState => ({
      responsiveAddData: {
        ...prevState.responsiveAddData,
        [column] : value
      }
    }))
  }

  addColumnDynamic1 = (column, value) => {
    var joined = "";
    if(column === 'headlines') {
        joined = this.state.headlines.concat(value);
      this.setState({ headlines: joined });
    }
    if(column === 'callouts') {
        joined = this.state.callouts.concat(value);
      this.setState({ callouts: joined });
    }
    if(column === 'structure_snippets') {
        joined = this.state.structure_snippets.concat(value);
      this.setState({ structure_snippets: joined });
    }
    if(column === 'description') {
        joined = this.state.descriptions.concat(value);
      this.setState({ descriptions: joined });
    }
  }
  activeAdd = (add) => {
    if(this.state.totalView !== 4) {
      this.setState({
        [add]: true,
        activeAdd: add
      })
    }
  }

  changeView = (e) => {
    e.preventDefault();
    let view = 1;
    if(this.state.activeView === 1) {
      view = 2
    }
    this.setState(prevState => ({
        mobileView: !prevState.mobileView,
        activeView: view
      }));
  }

  resetForm1 = () => {
    this.setState({
      add1: this.state.formData
      })
  }
  resetForm2 = () => {
    this.setState({
      add2: this.state.formData
    })
  }
  resetForm3 = () => {
    this.setState({
      add3: this.state.formData
    })
  }
  resetForm4 = () => {
    this.setState({
      responsiveAddData: this.state.formData,
      headlines: [1,2,3],
      descriptions: [1,2],
      callouts: [1,2,3],
      structure_snippets: [1,2,3],
    })
  }
  componentDidMount() {
    this.resetForm1()
    this.resetForm2()
    this.resetForm3()
    this.resetForm4()
  }

    render() {
      return <section className="pt-ad-preview">
      <div className="add-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 NoPadding">
            <div className="">
              <ul className="nav nav-tabs">
                <li className="nav-item"><a className="nav-link active" onClick={() => this.activeAdd('activeAdd1')}  data-toggle="tab" href="#add1">Add 1</a></li>
                <li className="nav-item"><a className="nav-link"  onClick={() => this.activeAdd('activeAdd2')} data-toggle="tab" href="#add2">Add 2</a></li>
                <li className="nav-item"><a  className="nav-link" onClick={() => this.activeAdd('activeAdd3')} data-toggle="tab" href="#add3">Add 3</a></li>
                <li className="nav-item"><a  className="nav-link" onClick={() => this.activeAdd('responsiveAdd')} data-toggle="tab" href="#responsive">Resonsive</a></li>
              </ul>
            </div>
            <div className="tab-content">
              <div id="add1" className="tab-pane active container p-0">
                <AddTest add="add1" changeState={this.changeState1} resetForm={this.resetForm1} />
              </div>
              <div id="add2" className="tab-pane container fade p-0">
                <AddTest add="add2" changeState={this.changeState2} resetForm={this.resetForm2} />
              </div>
              <div id="add3" className="tab-pane container fade p-0">
                <AddTest add="add3" changeState={this.changeState3} resetForm={this.resetForm3} />
              </div>
              <div id="responsive" className="tab-pane container fade p-0">
                <ResponsiveTab add="add3" changeState={this.changeState4} addColumnDynamic={this.addColumnDynamic1} resetForm={this.resetForm4} />
              </div>
            </div>
          </div>
          <div className="col-md-6 NoPadding">
            <div className="HeadingDiv">
            <ul>
              <li> {this.state.activeView} of 2 previews </li>
              <li>  <a href="#" onClick={this.changeView}><strong><i style={{fontSize:'22px'}} className="fa fa-angle-left font-weight-bold" aria-hidden="true"></i></strong></a></li>
              <li><a href="#" onClick={this.changeView}><strong><i style={{fontSize:'22px'}} className="fa fa-angle-right font-weight-bold" aria-hidden="true"></i></strong></a></li>
            </ul>
            </div>
            <div className="MobileDiv">
              { this.state.mobileView  ? <div className="HeighLightAd">
                    <h3 className="Mobile">Mobile</h3>
                    <MobileView data={this.state.add1} headlines={this.state.adHeadlines} callouts={this.state.adCallouts}
                     structure_snippets={this.state.adStructure_snippets} descriptions={this.state.adDescriptions} />
                    { this.state.activeAdd2 === true ? <MobileView data={this.state.add2} headlines={this.state.adHeadlines} callouts={this.state.adCallouts}
                     structure_snippets={this.state.adStructure_snippets} descriptions={this.state.adDescriptions} /> : '' }
                    { this.state.activeAdd3 === true ? <MobileView data={this.state.add3} headlines={this.state.adHeadlines} callouts={this.state.adCallouts}
                     structure_snippets={this.state.adStructure_snippets} descriptions={this.state.adDescriptions} /> : '' }
                    { this.state.responsiveAdd === true ? <MobileView data={this.state.responsiveAddData} headlines={this.state.headlines} callouts={this.state.callouts}
                     structure_snippets={this.state.structure_snippets} descriptions={this.state.descriptions} /> : '' }
                </div> :
              <div className="HeighLightAd">
                  <h3 className="Mobile">Desktop</h3>
                  <DesktopView data={this.state.add1} headlines={this.state.adHeadlines} callouts={this.state.adCallouts}
                   structure_snippets={this.state.adStructure_snippets} descriptions={this.state.adDescriptions} />
                  { this.state.activeAdd2 === true ? <DesktopView  data={this.state.add2} headlines={this.state.adHeadlines} callouts={this.state.adCallouts}
                   structure_snippets={this.state.adStructure_snippets} descriptions={this.state.adDescriptions} /> : '' }
                  { this.state.activeAdd3 === true ? <DesktopView  data={this.state.add3} headlines={this.state.adHeadlines} callouts={this.state.adCallouts}
                   structure_snippets={this.state.adStructure_snippets} descriptions={this.state.adDescriptions} /> : '' }
                  { this.state.responsiveAdd === true ? <DesktopView  headlines={this.state.headlines} callouts={this.state.callouts}
                   structure_snippets={this.state.structure_snippets} descriptions={this.state.descriptions}  data={this.state.responsiveAddData} /> : '' }
              </div>
            }
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>;
    }
  };

  export default HomeTest;
