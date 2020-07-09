import React  from 'react';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' , name: '', placeholder:'', maxLength:'' }

  }
  onChange = (e) => {
    const column = e.target.name;
    const value  = e.target.value;
    this.setState({
        [column] : value
    })
    this.props.changeHeadline(this.state.name, value);
  }
  resetForm = () => {
    this.setState({
      value: '',
      placeholder: '',
      maxLength: ''
    });
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    this.setState({ value: nextProps.headline,
      name:nextProps.name,
      placeholder:nextProps.placeholder,
      maxLength: nextProps.maxLength
    });
  }

  UNSAFE_componentWillMount() {
    this.resetForm();
  }
  render() {
    return <div>
            <div className="form-group mb-0">
              <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
              <input type="text" placeholder={this.state.placeholder} maxLength={this.state.maxLength} className="TextAdField" name="value" onChange={this.onChange} value={this.state.value === null ? '' : this.state.value } />
              <span className="addcarector">{(this.state.value).length}/{this.state.maxLength}</span>
            </div>
          </div>;
  };
};

export default InputComponent;
