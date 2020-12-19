import React from "react";
import { Formik, Field, Form } from "formik";
import { Alert } from "reactstrap";
// import { Container } from "reactstrap";
class Reservation extends React.Component {
    constructor(props) {
        super(props);
    }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }
  render() {
    const sweep = (ms) => new Promise((r) => setTimeout(r, ms));
    return (
      <div >
        <Formik initialValues={{checked: [], color: ""}} onSubmit={async (values) => {await sweep(500); this.props.pageChange(); alert(JSON.stringify(values, null, 2));}}>
          {({ values }) => (
        <Form>
          {/* 
            This first checkbox will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          */}
          {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
          <div id="checkbox-group">Checked</div>
            <label>
              <Field type="checkbox" name="checked" value="1" />
              One 
            </label>
            <div id="checkbox-group"></div>
            <label>
              <Field type="checkbox" name="checked" value="2" />
              Two
            </label>
            <div id="checkbox-group"></div>
            <label>
              <Field type="checkbox" name="checked" value="3" />
              Three
            </label>
            <div id="checkbox-group"></div>
            <label>
                <Field type="checkbox" name="checked" value="4" />  
                Four
            </label>
            <div id="checkbox-group"></div>
            <label>
              <select name = "dropdown">
                <option value="" label="Select a color" selected>Select a color</option>
                <option value = "Computer Architecture" onClick={()=>values.color="coa"}>Computer Architecture</option>
                <option value = "Java" onClick={()=>values.color="java"}>Java</option>
                <option value = "Discrete Mathematics" onClick={()=>values.color="math"}>Discrete Mathematics</option>
              </select>
            </label>
            <div id="checkbox-group"></div>

          <button type="submit">Results</button>
        </Form>
      )}
          </Formik>
      </div>
    );
  }
}

export default Reservation;