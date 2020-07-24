import React  from 'react';
import axios from 'axios';
import $ from 'jquery';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import question from '../../Images/question.svg';
import exportImg from '../../Images/export.svg';
import inbox from '../../Images/inbox.svg';
import deleteImg from '../../Images/delete.svg';

class MailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailForm: {},
      addForm: {},
      headers: {},
      mailButton: false,
      mailError: false,
      emptyForm: false,
      errors: {}
    }

  }
  onChange = (e) => {
    const column = e.target.name;
    const value  = e.target.value;
    this.setState(prevState => ({
      mailForm: {
        ...prevState.mailForm,
        [column] : value
      },
      errors : {
        ...prevState.errors,
        [column]: false
      }
    }))
  }

  sendMail = (e) => {
      const host         = window.location.origin;

      if(this.handleValidation()){
        this.setState({mailButton:true});
        $(`#myModal_${this.props.formType}`).modal('hide')
        axios.post(`${host}/wp-json/react/v1/sendMail`, {csvHeaders: this.props.headers, formData: this.state.addForm, mailForm: this.state.mailForm}).then((res) => {
          this.setState({mailButton:false});
          this.resetForm();
          NotificationManager.success('Success', 'Email Sent Successfullly');
        }).catch((error) => {
          this.setState({mailButton:false, mailError: true});
          this.resetForm();
          NotificationManager.error('Error', 'Somthing Went Wrong');
        })
      } else{
      }
  }

  handleValidation = () => {
    let fields = this.state.mailForm;
    let errors = {};
    let formIsValid = true;
    let formData =  this.state.addForm;
    let formFillFields = [];

    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Please fill out this field";
    }
    if(!fields["subject"]){
      formIsValid = false;
      errors["subject"] = "Please fill out this field";
    }

    if(typeof fields["email"] !== "undefined" && !errors["email"]){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
     }

     Object.keys(formData).map((item, i) => {
       return formData[item] === '' ? formFillFields : formFillFields.push(item);
     });
     if(formFillFields.length === 1 && formIsValid === true) {
        formIsValid = false;
        this.setState({emptyForm: true});
     }
     this.setState({errors: errors});
     return formIsValid;
  }
  resetForm = () => {
    this.setState({
      mailForm: {
        email: '',
        subject: '',
      },
      errors: {},
      emptyForm:false
    })
  }

  UNSAFE_componentWillMount() {
    this.resetForm();
  }
  componentDidMount() {
    this.resetForm();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ headers: nextProps.headers, addForm: nextProps.addForm });
  }
  render() {
    return <div className="">
        <button type="button" className="btn btn-danger reset-button mt-1" onClick={this.props.resetForm}><img alt="" className="mr-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={deleteImg} /> Reset</button>
        <button type="button" className="btn btn-success ml-1 import-button mt-1" onClick={this.props.exportAdd}> <img alt="" className="mr-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={exportImg} /> Export CSV</button>
        <button type="button" className="btn btn-success ml-1 import-button mt-1" onClick={this.resetForm} data-toggle="modal" data-target={`#myModal_${this.props.formType}`}>{ this.state.mailButton ? <span className="spinner-border spinner-border-sm"></span> : <img alt="" className="mr-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={inbox} />} Share  </button>
        { this.state.mailError ? <p className="border border-danger d- mt-1 p-3 rounded text-danger"> Something Went Wrong </p> : ''}

        <div className="modal fade" id={`myModal_${this.props.formType}`} style={{zIndex:'999999'}}>
          <div className="modal-dialog mt-5">
            <div className="modal-content">

              <div className="modal-header">
                <label className="LabelPath d-block mt-3 mb-2">Share</label>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <form className="text-ad-form">
                  <div className="form-group mb-0">
                    <img alt="" className="float-right" style={{height:'15px', width:'15px', top: '20px', position:'relative'}} src={question} />
                    <input type="email" placeholder="Email" className={`TextAdField ${this.state.errors.email ? "bb-danger" : ""}`} name="email" onChange={this.onChange} value={this.state.mailForm.email === null ? '' : this.state.mailForm.email } />
                    <p className="text-danger">{this.state.errors.email ? this.state.errors.email : ''}</p>
                  </div>
                  <div className="form-group mb-0">
                    <img alt="" className="float-right" style={{height:'15px', width:'15px', top: '20px', position:'relative'}} src={question} />
                    <input type="text" placeholder="Subject" maxLength="35" className={`TextAdField ${this.state.errors.subject ? "bb-danger" : ""}`} name="subject" onChange={this.onChange} value={this.state.mailForm.subject === null ? '' : this.state.mailForm.subject } />
                    <span className="addcarector">{(this.state.mailForm.subject).length}/35</span>
                    <p className="text-danger">{this.state.errors.subject ? this.state.errors.subject : ''}</p>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-success import-button" onClick={this.sendMail} >  <img alt="" className="mr-1" style={{height:'15px', width:'15px', bottom: '2px', position:'relative'}} src={inbox} /> Share </button>
                <div className="w-100">
                { this.state.emptyForm ? <p className="border border-danger d-block mb-0 p-2 rounded text-danger">There is nothing to share</p> : ''}
                </div>
              </div>
              <NotificationContainer />
            </div>
          </div>
        </div>

    </div>;
  };
};

export default MailModal;
