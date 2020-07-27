import React from "react";
import FormElement from "../components/formElement";
import SubmitButton from "../components/button";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        Examination: { name: "Examination", value: "", pristine: true },
        ClinicalHistory: {
          name: "Clinical History",
          value: "",
          pristine: true,
        },
        Technique: { name: "Technique", value: "", pristine: true },
        Impressions: { name: "Impressions", value: "", pristine: true },
      },
    };
  }

  changeListener = (event) => {
    let updatedForm = {
      ...this.state.formFields,
    };

    let fieldId = event.target.id;
    let updatedField = { ...this.state.formFields[fieldId] };
    updatedField.value = event.target.value;

    updatedForm[fieldId] = updatedField;
    this.setState({
      formFields: updatedForm,
    });
  };

  focusListener = (event) => {
    let updatedForm = {
      ...this.state.formFields,
    };

    let fieldId = event.target.id;
    let updatedField = { ...this.state.formFields[fieldId] };
    updatedField.pristine = false;

    updatedForm[fieldId] = updatedField;
    this.setState({
      formFields: updatedForm,
    });
  };

  formSubmitHandler(event) {
    event.preventDefault();
    let inputData = {};
    for (let key in this.state.formFields) {
      inputData[key] = this.state.formFields[key].value;
    }

    console.log(inputData);
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.formFields) {
      formElementsArray.push({
        id: key,
        config: this.state.formFields[key],
      });
    }

    let allFormFields = formElementsArray.map((item) => {
      return (
        <FormElement
          changeListener={this.changeListener}
          focusListener={this.focusListener}
          key={item.id}
          id={item.id}
          data={item.config}
        />
      );
    });

    return (
      <>
        <form onSubmit={(e) => this.formSubmitHandler(e)}>
          {allFormFields}
          <SubmitButton type="submit" form="form1" value="Submit">
            SUBMIT
          </SubmitButton>
        </form>
      </>
    );
  }
}

export default Form;
