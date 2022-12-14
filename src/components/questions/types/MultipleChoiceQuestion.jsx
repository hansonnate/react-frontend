import React from "react";
// import { useParams } from "react-router-dom";
  // eslint-disable-next-line no-unused-vars
import { MultipleChoice } from "components/inputs/input_fields/MultipleChoice/MultipleChoice";
import { useUpdateQuestionConfig } from "api/resources/projects/questions";

export const MultipleChoiceQuestion = ({
  question,
   // eslint-disable-next-line no-unused-vars
  active,
   // eslint-disable-next-line no-unused-vars
  isMultiSelect,
   // eslint-disable-next-line no-unused-vars
  otherOption,
}) => {
  // const { id } = useParams();
  const updateQuestionConfig = useUpdateQuestionConfig();

   // eslint-disable-next-line no-unused-vars
  const handleUpdateQuestionChoices = (choice) => {
    let choices = question.questionTypeConfig.choiceQuestion.choices;
    let index = choices.findIndex((x) => x.id === choice.id);
    choices[index] = choice;
    updateQuestionConfig.mutate({
      id: question.id,
      questionTypeConfig: {
        choiceQuestion: {
          isMultiSelect: question.questionTypeConfig.choiceQuestion.isMultiSelect,
          isRandomized: question.questionTypeConfig.choiceQuestion.isRandomized,
          hasOtherOption: question.questionTypeConfig.choiceQuestion.hasOtherOption,
          otherOptionText: question.questionTypeConfig.choiceQuestion.otherOptionText,
          choices: choices,
        },
      },
    });
  };

  function shortId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

 // eslint-disable-next-line no-unused-vars
  const handleCreateQuestionChoice = () => {
    let choices = question.questionTypeConfig.choiceQuestion.choices;
    choices.push({id: shortId(), name: ""})
    updateQuestionConfig.mutate({
      id: question.id,
      questionTypeConfig: {
        choiceQuestion: {
          isMultiSelect: question.questionTypeConfig.choiceQuestion.isMultiSelect,
          isRandomized: question.questionTypeConfig.choiceQuestion.isRandomized,
          hasOtherOption: question.questionTypeConfig.choiceQuestion.hasOtherOption,
          otherOptionText:question.questionTypeConfig.choiceQuestion.otherOptionText,
          choices: choices,
        },
      }
    });
  };

   // eslint-disable-next-line no-unused-vars
  const handleDeleteQuestionChoice = (choiceId) => {
    console.log(choiceId);
    let choices = question.questionTypeConfig.choiceQuestion.choices;
    let index = choices.findIndex((x) => x.id === choiceId);
    choices.splice(index, 1);
    updateQuestionConfig.mutate({
      id: question.id,
      question_type_config: {
        choice_question: {
          isMultiSelect: question.questionTypeConfig.choiceQuestion.isMultiSelect,
          isRandomized: question.questionTypeConfig.choiceQuestion.isRandomized,
          hasOtherOption: question.questionTypeConfig.choiceQuestion.hasOtherOption,
          otherOptionText: question.questionTypeConfig.choiceQuestion.otherOptionText,
          choices: choices,
        },
      }
    });
  };

   // eslint-disable-next-line no-unused-vars
  const handleUpdateOtherText = (text) => {
    updateQuestionConfig.mutate({
      id: question.id,
      question_type_config: {
        choice_question: {
          isMultiSelect: question.questionTypeConfig.choiceQuestion.isMultiSelect,
          isRandomized: question.questionTypeConfig.choiceQuestion.isRandomized,
          hasOtherOption: question.questionTypeConfig.choiceQuestion.hasOtherOption,
          otherOptionText: text,
          choices: question.questionTypeConfig.choiceQuestion.choices,
        },
      }
    });
  };

  return (
    <>
      <MultipleChoice
        name={question.id}
        options={question.questionTypeConfig.choiceQuestion.choice}
        handleNameChange={handleUpdateQuestionChoices}
        handleDelete={handleDeleteQuestionChoice}
        handleOtherChange={handleUpdateOtherText}
        active={active}
        isMultiSelect={isMultiSelect}
        otherOption={otherOption}
      />
      {active && (
        <button
          className={`ml-2`}
          style={{ color: "#A3A4A8" }}
          onClick={handleCreateQuestionChoice}
        >
          <i className="bi bi-plus-lg mr-3"></i>
          Add Option
        </button>
      )}
    </>
  );
  // }
};
