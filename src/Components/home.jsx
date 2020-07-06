import React  from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import Add from './Common/add.jsx';
import AddView from './Common/addView.jsx';

const headers = [
  { label: 'Product Name', key: 'name' },
  { label: 'Size', key: 'size' },
  { label: 'Test', key: 'test' },
];

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      add1 : {
        headline1: 'Awesome Headline 1',
        headline2: 'Awesome Headline 2',
        display_path: 'www.example.com/ppc-services',
        description1: 'Create Some Amazing Ad Copy Tod.',
        description2: 'Make Your Ad Stand Out!'
      },
      add2: {
        headline1: 'Awesome Headline 1',
        headline2: 'Awesome Headline 2',
        display_path: 'www.example.com/ppc-services',
        description1: 'Create Some Amazing Ad Copy Tod.',
        description2: 'Make Your Ad Stand Out!'
      },
      add3: {
        headline1: 'Awesome Headline 1',
        headline2: 'Awesome Headline 2',
        display_path: 'www.example.com/ppc-services',
        description1: 'Create Some Amazing Ad Copy Tod.',
        description2: 'Make Your Ad Stand Out!'
      },
      activeAdd2: false,
      activeAdd3: false,
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
  activeAdd = (add) => {
    this.setState({
      [add]: true
    })
  }

    render() {
      return <section className="pt-ad-preview">
      <div className="add-section bg-light">
        <div className="container">
            <div className="row padd-top">
              <div className="pp-6 bg-white">
                <div className="">
                  <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active"  data-toggle="tab" href="#add1">Add 1</a></li>
                    <li className="nav-item"><a className="nav-link"  onClick={() => this.activeAdd('activeAdd2')} data-toggle="tab" href="#add2">Add 2</a></li>
                    <li className="nav-item"><a  className="nav-link" onClick={() => this.activeAdd('activeAdd3')} data-toggle="tab" href="#add3">Add 3</a></li>
                  </ul>
                </div>
                <div className="tab-content">
                    <div id="add1" className="tab-pane active container">
                      <Add add="add1" changeState={this.changeState1} />
                    </div>
                    <div id="add2" className="tab-pane container fade">
                      <Add add="add2" changeState={this.changeState2} />
                    </div>
                    <div id="add3" className="tab-pane container fade">
                      <Add add="add3" changeState={this.changeState3} />
                    </div>
                </div>
              </div>
              <div className="pp-6">
                <div className="pt-left-ads">
                  <AddView data={this.state.add1} />
                  { this.state.activeAdd2 === true ? <AddView data={this.state.add2} /> : '' }
                  { this.state.activeAdd3 === true ? <AddView data={this.state.add3} /> : '' }
                </div>
             </div>
           </div>
        </div>
      </div>
      </section>;
    }
  };

  export default Home;
