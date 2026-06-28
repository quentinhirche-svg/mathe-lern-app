export const lessons = [
  {
    id: 1,
    title: "Addition im Zahlenraum bis 10",
    category: "Addition",
    description: "Lerne die Addition mit Zahlen von 1-10",
    grade: 1,
    tasks: [
      { id: 1, question: "2 + 3 = ?", options: [4, 5, 6], correct: 1, explanation: "2 Äpfel + 3 Äpfel = 5 Äpfel" },
      { id: 2, question: "4 + 2 = ?", options: [5, 6, 7], correct: 1, explanation: "4 + 2 = 6" },
      { id: 3, question: "1 + 5 = ?", options: [6, 7, 5], correct: 0, explanation: "1 + 5 = 6" },
      { id: 4, question: "3 + 4 = ?", options: [6, 7, 8], correct: 1, explanation: "3 + 4 = 7" }
    ]
  },
  {
    id: 2,
    title: "Subtraktion im Zahlenraum bis 10",
    category: "Subtraktion",
    description: "Lerne die Subtraktion mit Zahlen von 1-10",
    grade: 1,
    tasks: [
      { id: 1, question: "5 - 2 = ?", options: [2, 3, 4], correct: 1, explanation: "5 - 2 = 3" },
      { id: 2, question: "8 - 3 = ?", options: [4, 5, 6], correct: 1, explanation: "8 - 3 = 5" },
      { id: 3, question: "7 - 1 = ?", options: [5, 6, 7], correct: 1, explanation: "7 - 1 = 6" },
      { id: 4, question: "9 - 4 = ?", options: [4, 5, 6], correct: 1, explanation: "9 - 4 = 5" }
    ]
  },
  {
    id: 3,
    title: "Zahlenraum bis 20",
    category: "Zahlenverständnis",
    description: "Lerne Zahlen von 11-20 kennen",
    grade: 1,
    tasks: [
      { id: 1, question: "Welche Zahl kommt nach 15?", options: [14, 16, 17], correct: 1, explanation: "Nach 15 kommt 16" },
      { id: 2, question: "Welche Zahl kommt vor 12?", options: [10, 11, 13], correct: 1, explanation: "Vor 12 kommt 11" },
      { id: 3, question: "13 + 2 = ?", options: [14, 15, 16], correct: 1, explanation: "13 + 2 = 15" },
      { id: 4, question: "18 - 5 = ?", options: [12, 13, 14], correct: 1, explanation: "18 - 5 = 13" }
    ]
  }
];

export const generateRandomTask = (lesson) => {
  return lesson.tasks[Math.floor(Math.random() * lesson.tasks.length)];
};
