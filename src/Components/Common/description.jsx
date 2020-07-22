import React  from 'react';
import question from '../../Images/question.svg';

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
            <img alt="" className="float-right" style={{height:'15px', width:'15px', top: '20px', position:'relative'}} src={question} />
            <textarea className="AdTextArea pt-3 pb-0" placeholder="Description" maxLength="90" name="description" onChange={this.onChange} value={this.state.description === null ? '' : this.state.description }></textarea>
            <span className="addcarector">{(this.state.description).length}/90</span>
          </div>
          </div>;
  };
};

export default Description;
