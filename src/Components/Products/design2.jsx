

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
      productForm : {
        name: '',
        size: '',
        test: ''
      },
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
      final_url1 : value
    });

  }
  changeState1 = (value) =>{

    this.setState({
      final_url2 : value
    });
  }
    render() {
      return <section className="pt-ad-preview">
        <div className="container">
          <div class="row">
            <div class="col-md-6 NoPadding">
              <div class="NewTextAd">
                <div class="FormHeading">
                  <h2>New Text Ad</h2>
                </div>
                  <form class="text-ad-form">
                    <div class="form-group">
                      <i class="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" name="" value="" placeholder="Final URL" class="TextAdField" />
                      <span class="addcarector">0/30</span>
                    </div>
                    <div class="form-group">
                      <i class="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" name="" value="" placeholder="Heading 1" class="TextAdField" />
                      <span class="addcarector">0/30</span>
                    </div>
                    <div class="form-group">
                      <i class="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" name="" value="" placeholder="Heading 2" class="TextAdField" />
                      <span class="addcarector">0/30</span>
                    </div>
                    <div class="form-group">
                      <i class="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <input type="text" name="" value="" placeholder="Heading 3" class="TextAdField" />
                      <span class="addcarector">0/30</span>
                    </div>
                    <div class="form-group">
                      <label class="LabelPath">Display Path</label>
                      <input type="text" name="" value="" placeholder="www.example.com/path1" class="TextAdField" />
                      <span class="addcarector">0/30</span>
                    </div>
                    <div class="form-group">
                      <i class="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <textarea class="AdTextArea" placeholder="Description"></textarea>
                      <span class="addcarector">0/90</span>
                    </div>
                    <div class="form-group">
                      <i class="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <textarea class="AdTextArea" placeholder="Description"></textarea>
                      <span class="addcarector">0/90</span>
                    </div>
                    <div class="form-group">
                      <i class="fa fa-angle-down AngleDown" aria-hidden="true"></i>
                      Add URL Option
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>;
    }
  };
  export default Design;
