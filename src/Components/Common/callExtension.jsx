import React  from 'react';
import countries from './countries.js';

class CallExtension extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      call_extension_country: '',
      call_extension: '',
    }

  }
  onChange = (e) => {
    const column = e.target.name;
    const value  = e.target.value;
    this.setState({
        [column] : value
    })
    this.props.changePhone(column, value);
  }
  resetForm = () => {
    this.setState({
      call_extension_country: '',
      call_extension: '',
    });
  }
  UNSAFE_componentWillMount() {
    this.resetForm();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ call_extension_country: nextProps.country, call_extension: nextProps.phone });
  }
  render() {
    return <div>
            <div className="card-body">
              <form className="text-ad-form">
                <div className="sitelink1">
                  <div className="form-group mb-0">
                    <i className="fa fa-question-circle QuestionCircle" aria-hidden="true"></i>
                      <select className="TextAdField width_45" style={{height:'40px'}}  name="call_extension_country"  onChange={this.onChange} value={this.state.call_extension_country === null ? '' : this.state.call_extension_country }>
                        { countries.map((country, ind) => {
                          return (
                            <option value={country.name} key={country.name}>{country.name}</option>
                          );
                       })}
                      </select>
                    <input type="text" placeholder="Phone Number" style={{height:'40px'}} maxLength="15" className="TextAdField width_45 ml-4" name="call_extension" onChange={this.onChange} value={this.state.call_extension === null ? '' : this.state.call_extension } />
                    <span className="addcarector">{(this.state.call_extension).length}/15</span>
                  </div>
                </div>
              </form>
            </div>
          </div>;
  };
};

export default CallExtension;
