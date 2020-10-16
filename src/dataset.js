const defaultDataset = {
  init: {
    answers: [
      {
        content: "I want to know about your favorite food",
        nextId: "food",
      },
      {
        content: "I want to know about your favorite color",
        nextId: "color",
      },
      { content: "Do you want to have children?", nextId: "child" },
    ],
    question: "Hello! My name is Shinya",
  },
  food: {
    answers: [
      { content: "I want to know more", nextId: "food_more" },
      { content: "Back to the start", nextId: "init" },
    ],
    question: "My favorite food is sushi",
  },
  food_more: {
    answers: [{ content: "Back to the start", nextId: "init" }],
    question: "Hmmm... I like salmon!",
  },
  color: {
    answers: [
      { content: "I want to know more", nextId: "color_more" },
      { content: "Back to the start", nextId: "init" },
    ],
    question: "My favorite color is violet",
  },
  color_more: {
    answers: [{ content: "Back to the start", nextId: "init" }],
    question: "Hmmm... #7B2CBF!",
  },
  child: {
    answers: [
      { content: "Yes, I do!", nextId: "answer_yes" },
      { content: "No, I don't!", nextId: "answer_no" },
    ],
    question: "Yes, I do! How about you?",
  },
  answer_yes: {
    answers: [{ content: "Back to the start", nextId: "init" }],
    question: "You will be a good parent!",
  },
  answer_no: {
    answers: [{ content: "Back to the start", nextId: "init" }],
    question: "Your life will be wonderful!",
  },
};

export default defaultDataset;
