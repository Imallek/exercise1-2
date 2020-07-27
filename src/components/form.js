import React from "react";
import FormElement from "./formElement";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        Examination: { name: "Examination", value: "" },
        ClinicalHistory: { name: "Clinical History", value: "" },
        Technique: { name: "Technique", value: "" },
        Impressions: { name: "Impressions", value: "" },
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

  render() {
    const formElementsArray = [];
    for (let key in this.state.formFields) {
      formElementsArray.push({
        id: key,
        config: this.state.formFields[key],
      });
    }

    return (
      <>
        {formElementsArray.map((item) => {
          return (
            <FormElement
              changeListener={this.changeListener}
              key={item.id}
              id={item.id}
              data={item.config}
            />
          );
        })}
      </>
    );
  }
}

export default Form;
