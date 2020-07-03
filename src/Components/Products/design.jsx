

import React  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { CSVLink, CSVDownload } from "react-csv";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Add from '../Common/add.jsx';
import 'react-tabs/style/react-tabs.css';

const headers = [
  { label: 'Product Name', key: 'name' },
  { label: 'Size', key: 'size' },
  { label: 'Test', key: 'test' },
];

class Design extends React.Component {
  constructor() {
    super();
    this.state = {
      add1 : {},
      add12: {},
      final_url1:"",
      final_url2:"",
    }
  }
  onChange = (e) => {
    const column = e.target.name;
    const value  = e.target.value;
    this.setState(prevState => ({
      productForm: {
        ...prevState.productForm,
        [column] : value
      }
    }))
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
  changeState = (value) =>{
    this.setState({
      add1: value
    })
    console.log(this.state.add1);
  }
  changeState1 = (value) => {

    this.setState({
      add2: value
    })
    console.log(this.state.add1);
  }
    render() {
      return <section className="pt-ad-preview">
        <div className="container">
          <form id="data_export_form" name="ad_export">
            <div className="row padd-top">
              <div className="pp-6">
              <Tabs>
                <div className="pt-tabpanel">
                  <TabList><Tab>Add 1</Tab><Tab>Add 2</Tab></TabList>
                </div>
                <div className="tab-content">
                  <div id="tab_ad1" className="pt-adtab-content tab_ad1 active">
                    <TabPanel>  <Add add={this.state.add1} changeState={this.changeState} /></TabPanel>
                    <TabPanel><Add add={this.state.add2} changeState={this.changeState1} /></TabPanel>
                  </div>
                </div>
                </Tabs>
              </div>
            </div>
          </form>
        </div>
      </section>;
    }
  };
  export default Design;
