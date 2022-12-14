// External
import React from "react";
// Internal
import { SaveForm } from "components/inputs";
import { SelectField } from "components/inputs";
import styles from "./Reports.module.scss";
import Button from "components/buttons/Button/Button";

export const Reports = () => {

  const tags = [
    { value: "Product", label: "CSV" },
    { value: "Corporate", label: "XLS" },
    { value: "Service", label: "PDF" },
    { value: "Service", label: "Book Report" },
  ];

  return (
    <div className={styles.page}>
      <SaveForm
        fields={[
          {
            label: "Download Visualization Report",
            field: (
              <div className={styles.filetype}>
                <SelectField
                  options={tags}
                  selectMultiple
                  placeholder="File Type..."
                ></SelectField>{" "}
                <Button title="Download"></Button>
              </div>
            ),
          },
          {
            label: "Download Results by Participation",
            field: (
              <div className={styles.filetype}>
                <SelectField
                  options={tags}
                  selectMultiple
                  placeholder="File Type..."
                ></SelectField>{" "}
                <Button title="Download"></Button>
              </div>
            ),
          },
          {
            label: "Download Results by Answer",
            field: (
              <div className={styles.filetype}>
                <SelectField
                  options={tags}
                  selectMultiple
                  placeholder="File Type..."
                ></SelectField>{" "}
                <Button title="Download"></Button>
              </div>
            ),
          },
        ]}
      ></SaveForm>
    </div>
  );
};
