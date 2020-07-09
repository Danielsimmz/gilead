import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import AddProvider from '../AddProvider/AddProvider';
import { Link } from 'react-router-dom';




class SearchProvider extends Component {

    state = {
        first_name: '',
        middle_name: '',
        last_name: '',
        job_title: '',
        department_name: '',
        edit: false,
        id: ''
    }


    searchProvider = (event) => {
    event.preventDefault();

    if (this.state.first_name && this.state.last_name && this.state.job_title ) {
      
        this.props.dispatch({
        type: 'SEARCH_PROVIDER',
        payload: {
           first_name: this.state.first_name,
            middle_name: this.state.middle_name,
            last_name: this.state.last_name,
            job_title: this.state.job_title,
            department_name: this.state.department_name
        },
      });
  //empty inputs
this.setState({
        first_name: '',
         middle_name: '',
         last_name: '',
         job_title: '',
         department_name: '',
         edit: false,
         id: ''
})
      
    } else {
      this.props.dispatch({ type: 'PROVIDER_SEARCH_INPUT_ERROR' });
    }
  } //END of searchProvider


  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }


  //deletePatient takes in the provider object and dispatches it to the db 
  deleteProvider = (parameter) =>{
       this.props.dispatch({type: 'DELETE_PROVIDER', payload: parameter})
  }


    render () {
        return (
                 <div>
          
                <div className='navbuttonscontainer'>
                  {(this.props.user.clearance_level === 1)&&
                    <>
                    <Link to="/AddProvider"><Button  variant="outline-success">Add Provider</Button></Link> {' '} 
                    <Link to='/searchprovider'><Button  variant="outline-info">Search For A Provider</Button></Link> {' '}
                    </>}
              
                <Link to='/addpatient'><Button  variant="outline-primary">Add A Patient</Button></Link> {' '}
                <Link to='/searchpatient'> <Button variant="outline-secondary">Search For A Patient</Button></Link>
              </div>

        {this.props.errors.providerSearchError && (<h2 className="alert" role="alert" > {this.props.errors.providerSearchError}</h2>)}



         <h1 style={{   width: '50%', margin: '2% 40%' }}>Search For A Provider</h1>
        
      <Card border = "success" style={{ width: '60%', margin: '1% auto' }} >
      <Form >  
          <Row>
            <Col>
                <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First Name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleInputChangeFor('first_name')}/>
            </Col>
            <Col>
                <Form.Label>Middle Name</Form.Label>
              <Form.Control placeholder="Middle Name" type="text" name="middle_name" value={this.state.middle_name} onChange={this.handleInputChangeFor('middle_name')}/>
            </Col>
            <Col>
                <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last Name" type="text" name="last_name" value={this.state.last_name} onChange={this.handleInputChangeFor('last_name')}/>
            </Col>
          </Row>
          <Row>
                 <Col>
                <Form.Label>Job Title</Form.Label>
              <Form.Control placeholder="Job Title" type="text" name="job_title" value={this.state.job_title} onChange={this.handleInputChangeFor('job_title')}/>
            </Col>
            <Col>
                <Form.Label>Department Name</Form.Label>
              <Form.Control placeholder="Department Name" type="text" name="department_name" value={this.state.department_name} onChange={this.handleInputChangeFor('department_name')}/>
            </Col>
          </Row>
        
          <Button onClick={(event)=>this.searchProvider(event)} variant="primary" type="submit" style={{ width: '40%', margin: '0 30%' }}>
           Search For Provider
          </Button>
        </Form>
      </Card>
    
    
    {this.props.errors.deleteProviderError && (<h2 className="alert" role="alert" > {this.props.errors.deleteProviderError}</h2>)}
    
      <Card border = "success" style={{ width: '95%', margin: '8% auto 6%' }}>
         <h1 style={{   width: '50%', margin: '0 30% 1%' }}>Provider Search Results</h1>
        <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Employee Number</th>
                <th>Job Title</th>
                <th>Specialty Title</th>
                <th>Department Name</th>
                <th>Edit</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
            {(this.props.providerSearch)? this.props.providerSearch.map(provider => (
                    <tr key={provider.id}> 
                      <td align='center'>{provider.first_name}</td>
                      <td align='center'>{provider.middle_name}</td>
                      <td align='center'>{provider.last_name}</td>
                      <td align='center'>{provider.employee_num}</td>
                       <td align='center'>{provider.job_title}</td>
                      <td align='center'>{provider.specialty_title}</td>
                      <td align='center'>{provider.department_name}</td>
                      <td align='center'><Button onClick={()=> {
                        this.setState({id: provider.id})
                        this.setState({edit: true})}} variant="primary" >Edit</Button></td>
                      <td align='center'><Button onClick={(event) =>this.deleteProvider(provider)} variant="danger" >delete</Button></td>
                    </tr>
                  )): ''}
            </tbody>
          </Table>
      </Card>
     

      {(this.state.edit)? <AddProvider providerSearch={this.props.providerSearch} providerid={this.state.id}/>:''}

  
            </div>
        )
    }
}





// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
    errors: state.errors,
    providerSearch: state.search.providerSearch,
    user: state.user,
});

export default connect(mapStateToProps)(SearchProvider);