

import React  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { CSVLink, CSVDownload } from "react-csv";
import Add from '../Common/add.jsx';

const headers = [
  { label: 'Product Name', key: 'name' },
  { label: 'Size', key: 'size' },
  { label: 'Test', key: 'test' },
];

class Design extends React.Component {
  constructor() {
    super();
    this.state = {
      productForm : {
        name: '',
        size: '',
        test: ''
      }
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
              render() {
                return <section className="pt-ad-preview">
                  <div className="container">
                    <form id="data_export_form" name="ad_export">
                      <div className="row padd-top">
                        <div className="pp-6">
                          <div className="pt-tabpanel">
                          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                          <Tab eventKey="home" title="Home">
                            <Sonnet />
                          </Tab>
                          <Tab eventKey="profile" title="Profile">
                            <Sonnet />
                          </Tab>
                          <Tab eventKey="contact" title="Contact" disabled>
                            <Sonnet />
                          </Tab>
                        </Tabs>
                            <ul className="pt-nav-tabs">
                              <li className="active"><a  id="tab_ad1" href="#">Ad 1</a></li>
                              <li><a  id="tab_ad2" href="#">Ad 2</a></li>
                              <li><a  id="tab_ad3" href="#">Ad 3</a></li>
                            </ul>
                          </div>
                          <div className="tab-content">
                            <div id="tab_ad1" className="pt-adtab-content tab_ad1 active">
                              <Add />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>;
              }
            };
            export default Design;
