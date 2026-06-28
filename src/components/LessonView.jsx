import React, { useState } from 'react';

const LessonView = ({ lessons, onSelectLesson, dueForReview }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(lessons.map(l => l.category))];
  const filteredLessons = selectedCategory 
    ? lessons.filter(l => l.category === selectedCategory)
    : lessons;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎓 Wähle eine Lektion</h2>

      <div style={styles.categoryFilter}>
        <button 
          onClick={() => setSelectedCategory(null)}
          style={{
            ...styles.categoryBtn,
            ...(selectedCategory === null ? styles.categoryBtnActive : {})
          }}
        >
          Alle
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...styles.categoryBtn,
              ...(selectedCategory === cat ? styles.categoryBtnActive : {})
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.lessonGrid}>
        {filteredLessons.map(lesson => {
          const isDueForReview = dueForReview.includes(lesson.id);
          return (
            <div 
              key={lesson.id} 
              onClick={() => onSelectLesson(lesson)}
              style={{
                ...styles.lessonCard,
                ...(isDueForReview ? styles.lessonCardDue : {})
              }}
            >
              {isDueForReview && <div style={styles.dueLabel}>⏰ Wiederholen!</div>}
              <h3 style={styles.lessonTitle}>{lesson.title}</h3>
              <p style={styles.lessonDesc}>{lesson.description}</p>
              <div style={styles.gradeLabel}>Klasse {lesson.grade}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px'
  },
  title: {
    fontSize: '32px',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center'
  },
  categoryFilter: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  categoryBtn: {
    padding: '10px 20px',
    backgroundColor: '#ecf0f1',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
  },
  categoryBtnActive: {
    backgroundColor: '#3498db',
    color: '#fff'
  },
  lessonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  lessonCard: {
    backgroundColor: '#fff',
    border: '3px solid #3498db',
    borderRadius: '15px',
    padding: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 12px rgba(0,0,0,0.1)'
    }
  },
  lessonCardDue: {
    backgroundColor: '#fffacd',
    borderColor: '#f39c12'
  },
  dueLabel: {
    position: 'absolute',
    top: '-10px',
    right: '10px',
    backgroundColor: '#f39c12',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  lessonTitle: {
    fontSize: '20px',
    color: '#2c3e50',
    marginBottom: '10px'
  },
  lessonDesc: {
    color: '#7f8c8d',
    marginBottom: '15px',
    fontSize: '14px'
  },
  gradeLabel: {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '12px'
  }
};

export default LessonView;
