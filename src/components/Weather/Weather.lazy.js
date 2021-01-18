import React, { lazy, Suspense } from 'react';

const LazyWeather = lazy(() => import('./Weather'));

const Weather = props => (
  <Suspense fallback={null}>
    <LazyWeather {...props} />
  </Suspense>
);

export default Weather;
