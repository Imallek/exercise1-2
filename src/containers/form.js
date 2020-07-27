import React from "react";
import FormElement from "../components/formElement";
import SubmitButton from "../components/button";
import styles from "./../styles/form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        Examination: {
          name: "Examination",
          value: "",
          pristine: true,
          selfReference: React.createRef(null),
        },
        ClinicalHistory: {
          name: "Clinical History",
          value: "",
          pristine: true,
          selfReference: React.createRef(null),
        },
        Technique: {
          name: "Technique",
          value: "",
          pristine: true,
          selfReference: React.createRef(null),
        },
        Impressions: {
          name: "Impressions",
          value: "",
          pristine: true,
          selfReference: React.createRef(null),
        },
      },
    };
  }

  changeListener = (event) => {
    console.log(event.target.value);
    let updatedForm = {
      ...this.state.formFields,
    };

    let fieldId = event.target.id;
    let updatedField = { ...this.state.formFields[fieldId] };
    updatedField.value = event.target.value;
    updatedField.selfReference.current.parentNode.dataset.value =
      updatedField.selfReference.current.value;

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
      inputData[key] = this.state.formFields[key].value.replace(
        /(\r\n|\n|\r)/gm,
        ""
      );
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
      <div className={styles.main}>
        <form onSubmit={(e) => this.formSubmitHandler(e)}>
          {allFormFields}
          <div className={styles.submitButton}>
            <SubmitButton type="submit" value="Submit">
              SUBMIT
            </SubmitButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
