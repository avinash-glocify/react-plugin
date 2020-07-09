import React  from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: '' , name: '' }

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
      description: ''
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ description: nextProps.description, name:nextProps.name });
  }

  UNSAFE_componentWillMount() {
    this.resetForm();
  }
  render() {
    return <div>
          <div className="form-group mb-0">
            <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
            <textarea className="AdTextArea" placeholder="Description" maxLength="90" name="description" onChange={this.onChange} value={this.state.description === null ? '' : this.state.description }></textarea>
            <span className="addcarector">{(this.state.description).length}/90</span>
          </div>
          </div>;
  };
};

export default Description;