import React from "react";
import styles from "./ClickSaveForm.module.scss";
// import { useForm, Controller } from "react-hook-form";
import { UGAccordion } from "components/UGAccordion/UGAccordion";
import AccordionItem from "components/UGAccordion/AccordionItem";
import Checkbox from "../../input_fields/CheckboxAnimated/Checkbox";
// import { TeamsList } from "components/TeamsList/TeamsList";
// import { SelectField } from "../../input_fields";
import Button from "components/buttons/Button/Button";

/**
 * A form component that takes what ever children you pass into it and turns it into a saveable form. Each child should provide a name prop
 * @param children pass in as children whatever component you want and the form will use it.
 * @param {function} onSave a function that will be called when the save button is clicked. All data from the form will be passed into this function.
 * Save button will only be displayed if onSave is provided.
 * @param {String} saveText the text to be displayed on the save button
 * @param {function} onDelete a function that will be called when the delete button is clicked. Will only be displayed if provided
 * @param {function} onClose a function that will be called when the close button is clicked. Will only be displayed if provided
 * @returns {React.ReactElement} a personalized form component
 */

interface Props {
  onSave?: Function;
  saveText?: string;
  onDelete?: Function;
  onClose?: Function;
  children: any;
}

export const Form: React.FC<Props> = ({
  onSave,
  saveText,
  onDelete,
  onClose,
  children,
}) => {
  // const { control, handleSubmit, register, setValue, getValues } = useForm();
  // eslint-disable-next-line

  // const onSubmit = (data: any) => {
  //   // alert(JSON.stringify(data));
  //   // handleUpdate(data.name, data.description);
  //   if (onSave) {
  //     onSave(data);
  //   }
  // };
  // const onRemove = () => {
  //   if (onDelete) {
  //     onDelete();
  //     alert("Role has been yeeted");
  //   }
  // };
  // const onQuit = () => {
  //   if (onClose) {
  //     onClose();
  //   }
  // };
  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  // function fixTextStyle(string) {
  //   let newString = string.replaceAll("_", " ");
  //   newString = capitalizeFirstLetter(newString);
  //   console.log(newString);
  //   return newString;
  // }

  // const permissions = ["Projects", "Contacts", "Organization", "Distribution"];
  const permissions = [
    {
      set_name: "Projects",
      permissions: [
        { label: "Create Project", db_field: "create_project" },
        { label: "See all projects", db_field: "see_all_projects" },
        { label: "Send from org email", db_field: "send_from_org_email" },
        { label: "Send survey", db_field: "send_survey" },
        { label: "See surveys where", db_field: "see_surveys_where" },
        { label: "See survey results", db_field: "see_survey_results" },
      ],
    },
    {
      set_name: "Contacts",
      permissions: [
        { label: "Create contacts", db_field: "create_contacts_for_team" },
        { label: "Edit contacts", db_field: "edit_contacts" },
        { label: "Create audience", db_field: "create_audience" },
      ],
    },
    {
      set_name: "Organizaiton",
      permissions: [
        { label: "Edit user groups", db_field: "can_edit_user_groups" },
        { label: "Edit users", db_field: "can_edit_users" },
        { label: "See users", db_field: "can_see_users" },
        { label: "Create users", db_field: "can_create_user" },
        { label: "Edit org details", db_field: "can_edit_org_details" },
      ],
    },
    {
      set_name: "Distribution",
      permissions: [
        {
          label: "See distribution settings",
          db_field: "can_see_distribution_settings",
        },
        {
          label: "Edit distribution settings",
          db_field: "can_edit_distribution_settings",
        },
      ],
    },
  ];

  // const projectPermissions = [
  //   "Create surveys",
  //   "See all surveys",
  //   "Send from org email",
  //   "Can send surveys",
  //   "See surveys where",
  //   "See survey results",
  // ];
  // const contactPermissions = [
  //   "Can create contacts",
  //   "Edit contacts",
  //   "Create Audience",
  // ];
  // const orgPermissions = [
  //   "Edit user groups",
  //   "Edit users",
  //   "Can see users",
  //   "Can edit org details",
  // ];
  // const distributionPermissions = [
  //   "Can see distribution settings",
  //   "Edit distribution settings",
  // ];

  return (
    <div className={styles.formpage}>
      <form>
        {/* <div className={styles.fullform}> */}
        <div className={styles.formbody}>
          {children.map((item: any, i: number) => (
            <div key={i}>
              <div
                key={i}
                className={`${
                  item.props.labelTop ? styles.container2 : styles.container
                }`}
              >
                {/* {item.props.type === "text" && (
                  <>
                    {item.props.label && (
                      <label className={styles.inputlabel}>
                        {item.props.label}
                      </label>
                    )}
                    {item.props.labelTop && (
                      <label className={styles.inputlabelTop}>
                        {item.props.labelTop}
                      </label>
                    )}
                    <Controller
                      render={({ field }: any) => (
                        <item.type
                          {...field}
                          placeholder={item.props.placeholder}
                          className={styles.textinput}
                        ></item.type>
                      )}
                      control={control}
                      // defaultValue="yeh"
                      {...register(`${item.props.name}`)}
                      {...(setValue === Object
                        ? //`${item.props.name}`,
                          (item.props.value,
                          {
                            shouldTouch: true,
                          })
                        : "")}
                    />
                  </>
                )} */}
              </div>
              {/* {item.props.type === "accordion" && (
                <UGAccordion>
                  {permissions.map((set) => (
                    <AccordionItem key={set.set_name} name={set.set_name}>
                      {set.permissions.map((permission) => (
                        <div key={permission.db_field} className={styles.item}>
                          <Controller
                            render={({ field }: any) => (
                              <Checkbox
                                {...field}
                                checked={getValues(`${permission.db_field}`)}
                              ></Checkbox>
                            )}
                            control={control}
                            {...register(`${permission.db_field}`)}
                            {...(setValue === Object
                              ? 
                                (item.props.data[permission.db_field],
                                {
                                  shouldTouch: true,
                                })
                              : "")}
                          />
                          <span>{permission.label}</span>
                        </div>
                      ))}
                      
                    </AccordionItem>
                  ))}
                </UGAccordion>
              )} */}
              {/* {item.props.type === "userlist" && (
                <TeamsList
                  organization_id={item.props.organization_id}
                  columns={item.props.columns}
                  data={item.props.data}
                  title={item.props.title}
                  onSave={item.props.onSave}
                ></TeamsList>
              )} */}
              {/* {item.props.type === "select" && (
                <Controller
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      options={item.props.options}
                      onChange={(value) => ({
                        ...setValue(`${item.props.name}`, value, {
                          shouldTouch: true,
                        }),
                      })}
                    ></SelectField>
                  )}
                  control={control}
                  // defaultValue="yeh"
                  {...register(`${item.props.name}`)}
                />
              )} */}
            </div>
          ))}
        </div>

        <div className={styles.submitcontainer}>
          {onClose && (
            <Button
              // className={styles.submitbutton}
              // onClick={handleSubmit(onQuit)}
            >
              Close
            </Button>
          )}
          {onDelete && (
            <Button
              // className={styles.submitbutton}
              // onClick={handleSubmit(onRemove)}
            >
              Delete
            </Button>
          )}
          {onSave && (
            <Button
              // className={styles.submitbutton}
              // onClick={handleSubmit(onSubmit)}
            >
              {saveText && saveText}
              {!saveText && "Save"}
            </Button>
          )}
        </div>
        {/* </div> */}
      </form>
    </div>
  );
};
