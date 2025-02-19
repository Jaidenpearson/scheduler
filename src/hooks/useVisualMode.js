import { useState } from "react";

function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode])

  const transition = (newMode, replace = false) => {
    setHistory(prev =>
      replace ? [...prev.slice(0, prev.length - 1), newMode] : [...prev, newMode]
  );
  }

  const back = () => { 
    setHistory(prev => {
      if (prev.length > 1) {
        const newHistory = prev.slice(0, prev.length - 1);
        return newHistory;
      }
      return prev;
    })
  }

  return { mode: history[history.length -1], transition, back };
}

export default useVisualMode;