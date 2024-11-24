import React, { Suspense } from 'react';

const LineChart = React.lazy(() => import('line_chart_mfe/LineChart'));

const App = () => (
  <div>
    <h1>Host Application</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <LineChart />
    </Suspense>
  </div>
);

export default App;
