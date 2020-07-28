import React from "react";
import FormElement from "../components/formElement";
import SubmitButton from "../components/button";
import styles from "./../styles/form.module.css";
import Toast from "../components/toast";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
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
          lastItem: true,
        },
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
        " "
      );
    }
    this.setState({ showToast: true });
    console.log(inputData);
  }

  toastHandler = () => {
    this.setState({ showToast: false });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.formFields) {
      formElementsArray.push({
        id: key,
        config: this.state.formFields[key],
      });
    }

    let allFormFields = formElementsArray.map((item, index, array) => {
      return (
        <FormElement
          changeListener={this.changeListener}
          focusListener={this.focusListener}
          key={item.id}
          id={item.id}
          data={item.config}
          position={index !== array.length - 1}
        />
      );
    });

    let toast = null;
    if (this.state.showToast) {
      toast = (
        <Toast handler={this.toastHandler}>
          Your report has been successfully submitted
        </Toast>
      );
    }
    return (
      <div className={styles.main}>
        {toast}
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
