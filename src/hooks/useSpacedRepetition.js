import { useState, useEffect } from 'react';

export const useSpacedRepetition = () => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('mathProgress');
    return saved ? JSON.parse(saved) : {};
  });

  // Speichern bei Änderungen
  useEffect(() => {
    localStorage.setItem('mathProgress', JSON.stringify(progress));
  }, [progress]);

  // Berechnet nächste Wiederholung basierend auf Schwierigkeit
  const calculateNextReview = (lessonId, difficulty) => {
    const intervals = {
      easy: 7,      // 7 Tage
      medium: 3,    // 3 Tage
      hard: 1       // 1 Tag
    };
    const days = intervals[difficulty] || 3;
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + days);
    return nextDate.toISOString();
  };

  // Registriert eine Antwort
  const recordAnswer = (lessonId, correct, difficulty = 'medium') => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: {
        attempts: (prev[lessonId]?.attempts || 0) + 1,
        correct: (prev[lessonId]?.correct || 0) + (correct ? 1 : 0),
        lastAttempt: new Date().toISOString(),
        nextReview: calculateNextReview(lessonId, difficulty),
        successRate: Math.round(
          ((prev[lessonId]?.correct || 0) + (correct ? 1 : 0)) / 
          ((prev[lessonId]?.attempts || 0) + 1) * 100
        )
      }
    }));
  };

  // Gibt Lektionen zurück, die wiederholt werden müssen
  const getDueForReview = (lessonIds) => {
    const now = new Date();
    return lessonIds.filter(id => {
      const lesson = progress[id];
      if (!lesson) return true; // Neue Lektion
      return new Date(lesson.nextReview) <= now;
    });
  };

  return {
    progress,
    recordAnswer,
    getDueForReview,
    getSuccessRate: (lessonId) => progress[lessonId]?.successRate || 0
  };
};
