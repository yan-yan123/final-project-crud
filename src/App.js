import { React , Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      title : "Our Final Project",
      employeeData : [],
      act : 0,
      index : ''
    }
  }

  handleSubmit= (e) => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;
    let companyname = this.refs.txtCompanyName.value;

    if(this.state.act === 0)
    {
      let newEmployee = {
        "name" : name,
        "age" : age,
        "companyname" : companyname
      }
      employeeData.push(newEmployee);
    }
    
    else
    {
      let index = this.state.index;
      employeeData[index].name = name;
      employeeData[index].age = age;
      employeeData[index].companyname = companyname;
    }


    this.setState({
      employeeData : employeeData,
      act: 0
    })

    this.refs.myForm.reset();

  }

  handleEdit = (i) =>{
      let employeeData = this.state.employeeData[i];
      this.refs.txtName.value = employeeData.name;
      this.refs.txtAge.value = employeeData.age;
      this.refs.txtCompanyName.value = employeeData.companyname;

      this.setstate({
        employeeData : employeeData,
        act : 1,
        index : i
      })
  }


  handleDelete= (i) =>{
    let employeeData = this.state.employeeData;
    employeeData.splice(i,1);
    this.setState({
      employeeData : employeeData
    });
  }

  render(){
    let employeeData = this.state.employeeData;
    return(
      <div>
        <form ref="myForm" className="myForm">
        <h1>{this.state.title}</h1>
        <label>Name</label>
        <input type="text" ref="txtName" placeholder="Enter Name" className="formfield"/>
        <label>Age</label>
        <input type="text" ref="txtAge" placeholder="Enter Age" className="formfield"/>
        <label>Company Name</label>
        <input type="text" ref="txtCompanyName" placeholder="Enter Company Name" className="formfield"/>
        <button onClick={e => this.handleSubmit(e)} className="myButton">Save</button>
        </form>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Company Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {
            employeeData.map( (data, i) =>
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.companyname}</td>
              <td>
                <button onClick={i =>this.handleEdit(i)}  className="myButton">Edit</button>
              </td>
              <td>
                <button onClick={i =>this.handleDelete(i)}  className="myButton">Delete</button>
              </td>
            </tr> )
          }
        </table>
        </div>
    )
  }

}
export default App;