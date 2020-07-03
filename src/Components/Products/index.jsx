import React  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { CSVLink, CSVDownload } from "react-csv";

const headers = [
    { label: 'Product Name', key: 'name' },
    { label: 'Size', key: 'size' },
    { label: 'Test', key: 'test' },
];

class Product extends React.Component {
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
    return <div className="container">
      <div className="card">
        <div className="card-header">
        <h2>Add Product</h2>
        </div>
        <div className="card-body">
        <form>
            <div className="form-group">
              <label for="email">Name</label>
              <input type="text" className="form-control" name="name" placeholder="Enter Product Name" onChange={this.onChange} value={this.state.productForm.name === null ? '' : this.state.productForm.name} />
            </div>
            <div className="form-group">
              <label for="pwd">Size:</label>
              <input type="number" className="form-control" name="size" placeholder="Enter Product Size" id="pwd" onChange={this.onChange} value={this.state.productForm.size === null ? '' : this.state.productForm.size} />
            </div>
            <button type="button" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
      <CSVLink
        filename="data.csv"
        data={[this.state.productForm]}
        headers={headers}
        className="hidden"
        ref={(r) => this.csvLink = r} />
    </div>;
  }
};
export default Product;
