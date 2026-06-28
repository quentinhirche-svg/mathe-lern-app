import React from 'react';

const ProgressTracker = ({ progress, lessons }) => {
  const getStats = () => {
    const stats = {
      totalAttempts: 0,
      totalCorrect: 0,
      averageSuccess: 0,
      lessonsCompleted: 0
    };

    Object.values(progress).forEach(lesson => {
      stats.totalAttempts += lesson.attempts || 0;
      stats.totalCorrect += lesson.correct || 0;
    });

    stats.averageSuccess = stats.totalAttempts > 0 
      ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100)
      : 0;

    stats.lessonsCompleted = Object.keys(progress).length;

    return stats;
  };

  const stats = getStats();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📊 Dein Fortschritt</h2>
      
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>{stats.totalAttempts}</div>
          <div style={styles.statLabel}>Aufgaben gelöst</div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statNumber}>{stats.averageSuccess}%</div>
          <div style={styles.statLabel}>Erfolgsquote</div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statNumber}>{stats.lessonsCompleted}</div>
          <div style={styles.statLabel}>Lektionen bearbeitet</div>
        </div>
      </div>

      <div style={styles.lessonList}>
        <h3>Lektionen-Übersicht:</h3>
        {lessons.map(lesson => {
          const lessonProgress = progress[lesson.id] || {};
          const successRate = lessonProgress.successRate || 0;
          
          return (
            <div key={lesson.id} style={styles.lessonItem}>
              <div style={styles.lessonName}>{lesson.title}</div>
              <div style={styles.progressBar}>
                <div 
                  style={{
                    ...styles.progressFill,
                    width: `${successRate}%`,
                    backgroundColor: successRate >= 80 ? '#2ecc71' : successRate >= 50 ? '#f39c12' : '#e74c3c'
                  }}
                />
              </div>
              <div style={styles.percentage}>{successRate}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    marginTop: '20px'
  },
  title: {
    fontSize: '28px',
    color: '#2c3e50',
    marginBottom: '20px'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    marginBottom: '30px'
  },
  statCard: {
    backgroundColor: '#ecf0f1',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center'
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: '10px'
  },
  statLabel: {
    fontSize: '14px',
    color: '#7f8c8d'
  },
  lessonList: {
    marginTop: '30px'
  },
  lessonItem: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr 60px',
    gap: '15px',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    marginBottom: '10px'
  },
  lessonName: {
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  progressBar: {
    backgroundColor: '#ddd',
    borderRadius: '10px',
    height: '20px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    transition: 'width 0.3s ease'
  },
  percentage: {
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'right'
  }
};

export default ProgressTracker;
