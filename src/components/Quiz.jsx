import React, { useState } from 'react';

const Quiz = ({ task, onAnswered, showExplanation = false }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showExpl, setShowExpl] = useState(false);

  const handleAnswer = (index) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    
    const isCorrect = index === task.correct;
    onAnswered(isCorrect, isCorrect ? 'easy' : 'hard');
    
    if (showExplanation) {
      setShowExpl(true);
    }
  };

  const isCorrect = selectedAnswer === task.correct;

  return (
    <div style={styles.quizContainer}>
      <div style={styles.questionBox}>
        <h2 style={styles.question}>{task.question}</h2>
        
        <div style={styles.optionsGrid}>
          {task.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={answered}
              style={{
                ...styles.optionButton,
                ...(answered && index === task.correct ? styles.correctButton : {}),
                ...(answered && index === selectedAnswer && index !== task.correct ? styles.wrongButton : {}),
                ...(answered && index !== selectedAnswer ? styles.disabledButton : {}),
                opacity: answered && index !== selectedAnswer ? 0.5 : 1
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <div style={{
            ...styles.feedback,
            ...(isCorrect ? styles.successFeedback : styles.errorFeedback)
          }}>
            {isCorrect ? '✅ Richtig!' : '❌ Leider falsch!'}
          </div>
        )}

        {showExpl && answered && (
          <div style={styles.explanation}>
            <strong>Erklärung:</strong> {task.explanation}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  quizContainer: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  questionBox: {
    backgroundColor: '#f0f8ff',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  question: {
    fontSize: '32px',
    color: '#2c3e50',
    marginBottom: '30px',
    textAlign: 'center'
  },
  optionsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    marginBottom: '20px'
  },
  optionButton: {
    padding: '20px',
    fontSize: '24px',
    border: '3px solid #3498db',
    borderRadius: '10px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    color: '#2c3e50'
  },
  correctButton: {
    backgroundColor: '#2ecc71',
    borderColor: '#27ae60',
    color: '#fff'
  },
  wrongButton: {
    backgroundColor: '#e74c3c',
    borderColor: '#c0392b',
    color: '#fff'
  },
  disabledButton: {
    backgroundColor: '#ecf0f1'
  },
  feedback: {
    padding: '15px',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '10px',
    textAlign: 'center',
    marginTop: '20px'
  },
  successFeedback: {
    backgroundColor: '#d5f4e6',
    color: '#27ae60'
  },
  errorFeedback: {
    backgroundColor: '#fadbd8',
    color: '#c0392b'
  },
  explanation: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#ffeaa7',
    borderRadius: '10px',
    fontSize: '18px',
    color: '#7f8c8d'
  }
};

export default Quiz;
