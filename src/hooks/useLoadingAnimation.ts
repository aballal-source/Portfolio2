'use client';

import { useState, useEffect } from 'react';

interface LoadingState {
  isLoading: boolean;
  loadingProgress: number;
}

/**
 * Hook to manage loading animation state
 * @param initialDelay - Delay before starting the loading animation
 * @param progressInterval - Interval between progress updates
 * @returns Loading state
 */
export const useLoadingAnimation = (
  initialDelay = 0,
  progressInterval = 20
): LoadingState => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        setLoadingProgress(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          setIsLoading(false);
        }
      }, progressInterval);
      
      return () => clearInterval(interval);
    }, initialDelay);
    
    return () => clearTimeout(timer);
  }, [initialDelay, progressInterval]);

  return { isLoading, loadingProgress };
}; 