import React, { Suspense } from 'react';

const LineChart = React.lazy(() => import('line_chart_mfe/LineChart'));
const LineChart2 = React.lazy(() => import('line_chart_mfe/LineChart2'));
const LineChart3 = React.lazy(() => import('line_chart_mfe/LineChart3'));
const LineChart4 = React.lazy(() => import('line_chart_mfe/LineChart4'));
const LineChart5 = React.lazy(() => import('line_chart_mfe/LineChart5'));
const LineChart6 = React.lazy(() => import('line_chart_mfe/LineChart6'));
const LineChart7 = React.lazy(() => import('line_chart_mfe/LineChart7'));
const LineChart8 = React.lazy(() => import('line_chart_mfe/LineChart8'));
const LineChart9 = React.lazy(() => import('line_chart_mfe/LineChart9'));
const LineChart10 = React.lazy(() => import('line_chart_mfe/LineChart10'));
const LineChart11 = React.lazy(() => import('line_chart_mfe/LineChart11'));
const LineChart12 = React.lazy(() => import('line_chart_mfe/LineChart12'));
const LineChart13 = React.lazy(() => import('line_chart_mfe/LineChart13'));
const LineChart14 = React.lazy(() => import('line_chart_mfe/LineChart14'));
const LineChart15 = React.lazy(() => import('line_chart_mfe/LineChart15'));
const LineChart16 = React.lazy(() => import('line_chart_mfe/LineChart16'));
const LineChart17 = React.lazy(() => import('line_chart_mfe/LineChart17'));
const LineChart18 = React.lazy(() => import('line_chart_mfe/LineChart18'));
const LineChart19 = React.lazy(() => import('line_chart_mfe/LineChart19'));
const LineChart20 = React.lazy(() => import('line_chart_mfe/LineChart20'));




const App = () => (
  <div>
    <h1>Host Application</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <LineChart />
      <LineChart2 />
      <LineChart3 />
      <LineChart4 />
      <LineChart5 />
      <LineChart6 />
      <LineChart7 />
      <LineChart8 />
      <LineChart9 />
      <LineChart10 />
      <LineChart11 />
      <LineChart12 />
      <LineChart13 />
      <LineChart14 />
      <LineChart15 />
      <LineChart16 />
      <LineChart17 />
      <LineChart18 />
      <LineChart19 />
      <LineChart20 />
    </Suspense>
  </div>
);

export default App;
