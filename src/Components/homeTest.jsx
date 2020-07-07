import React  from 'react';
import AddTest from './Common/addTest.jsx';
import AddViewTest from './Common/addViewTest.jsx';
import AddView from './Common/addView.jsx';
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
        display_path: 'www.example.com',
        description1: 'Create Some Amazing Ad Copy Tod.',
        description2: 'Make Your Ad Stand Out!'
      }
    }
  }

  onSubmit = () => {
    this.csvLink.link.click()
    // axios.post('http://react-wordpress.co/wp-json/react/v1/product/add', this.state ).then(res => {
      //   if(res.status === 200) {
        //     this.setState({
          //       productForm: {
            //         name: '',
            //         size: ''
            //       }
            //     })
            //     alert('success');
            //   }
            // }).catch(error => {
              //   this.setState({
                //     Errors: error.response.data.errors
                //   })
                // })

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
  activeAdd = (add) => {
    if(this.state.totalView !== 4) {
      this.setState({
        [add]: true,
        activeAdd: add
      })
    }
  }

  changeView = () => {
    let view = 1;
    if(this.state.activeView == 1) {
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
      responsiveAddData: this.state.formData
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
                <ResponsiveTab add="add3" changeState={this.changeState4} resetForm={this.resetForm4} />
              </div>
            </div>
          </div>
          <div className="col-md-6 NoPadding">
            <div className="HeadingDiv">
              <ul>
                <li> {this.state.activeView} of 2 previews </li>
                <li>  <button  className="btn p-0" title="Chagne View" onClick={this.changeView}><strong><i className="fa fa-angle-left" aria-hidden="true"></i></strong></button></li>
                <li><button  className="btn p-0" title="Chagne View" onClick={this.changeView}><strong><i className="fa fa-angle-right" aria-hidden="true"></i></strong></button></li>
              </ul>
            </div>
            <div className="MobileDiv">
              { this.state.mobileView  ? <div className="HeighLightAd">
                    <h3 className="Mobile">Mobile</h3>
                    <MobileView data={this.state.add1} />
                    { this.state.activeAdd2 === true ? <MobileView data={this.state.add2} /> : '' }
                    { this.state.activeAdd3 === true ? <MobileView data={this.state.add3} /> : '' }
                    { this.state.responsiveAdd === true ? <MobileView data={this.state.responsiveAddData} /> : '' }
                </div> :
              <div className="HeighLightAd">
                  <h3 className="Mobile">Desktop</h3>
                  <DesktopView data={this.state.add1} />
                  { this.state.activeAdd2 === true ? <DesktopView data={this.state.add2} /> : '' }
                  { this.state.activeAdd3 === true ? <DesktopView data={this.state.add3} /> : '' }
                  { this.state.responsiveAdd === true ? <DesktopView data={this.state.responsiveAddData} /> : '' }
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
