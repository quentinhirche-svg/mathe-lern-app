import React, { useState } from 'react';
import { lessons, generateRandomTask } from './data/lessons';
import { useSpacedRepetition } from './hooks/useSpacedRepetition';
import LessonView from './components/LessonView';
import Quiz from './components/Quiz';
import ProgressTracker from './components/ProgressTracker';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('lessons'); // 'lessons', 'quiz', 'progress'
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);
  const [score, setScore] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  const { progress, recordAnswer, getDueForReview } = useSpacedRepetition();

  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentTask(generateRandomTask(lesson));
    setCurrentView('quiz');
    setScore(0);
    setTotalTasks(0);
  };

  const handleAnswered = (isCorrect, difficulty) => {
    recordAnswer(selectedLesson.id, isCorrect, difficulty);
    setTotalTasks(prev => prev + 1);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    // Nach 5 Aufgaben zurück zur Übersicht
    if (totalTasks + 1 >= 5) {
      setTimeout(() => {
        setCurrentView('lessons');
      }, 2000);
    } else {
      // Nächste Aufgabe nach 1.5s
      setTimeout(() => {
        setCurrentTask(generateRandomTask(selectedLesson));
      }, 1500);
    }
  };

  const dueForReview = getDueForReview(lessons.map(l => l.id));

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>🧮 Mathe-Lern-App</h1>
        <div style={styles.navButtons}>
          <button 
            onClick={() => setCurrentView('lessons')}
            style={{...styles.navBtn, ...(currentView === 'lessons' ? styles.navBtnActive : {})}}
          >
            📚 Lektionen
          </button>
          <button 
            onClick={() => setCurrentView('progress')}
            style={{...styles.navBtn, ...(currentView === 'progress' ? styles.navBtnActive : {})}}
          >
            📊 Fortschritt
          </button>
        </div>
      </header>

      <main style={styles.main}>
        {currentView === 'lessons' && (
          <LessonView 
            lessons={lessons}
            onSelectLesson={handleSelectLesson}
            dueForReview={dueForReview}
          />
        )}

        {currentView === 'quiz' && selectedLesson && currentTask && (
          <div>
            <div style={styles.quizHeader}>
              <button 
                onClick={() => setCurrentView('lessons')}
                style={styles.backBtn}
              >
                ← Zurück
              </button>
              <h2 style={styles.quizTitle}>{selectedLesson.title}</h2>
              <div style={styles.scoreDisplay}>
                {score}/{totalTasks}
              </div>
            </div>
            <Quiz 
              task={currentTask}
              onAnswered={handleAnswered}
              showExplanation={true}
            />
          </div>
        )}

        {currentView === 'progress' && (
          <ProgressTracker 
            progress={progress}
            lessons={lessons}
          />
        )}
      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#ecf0f1',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  headerTitle: {
    margin: '0 0 20px 0',
    fontSize: '36px',
    textAlign: 'center'
  },
  navButtons: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center'
  },
  navBtn: {
    padding: '10px 20px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
  },
  navBtnActive: {
    backgroundColor: '#fff',
    color: '#3498db'
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  quizHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px'
  },
  backBtn: {
    padding: '10px 20px',
    backgroundColor: '#95a5a6',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  quizTitle: {
    margin: 0,
    color: '#2c3e50'
  },
  scoreDisplay: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3498db',
    backgroundColor: '#ecf0f1',
    padding: '10px 20px',
    borderRadius: '5px'
  }
};

export default App;
