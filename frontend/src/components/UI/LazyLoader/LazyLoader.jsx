import React, { Suspense, cloneElement } from 'react';

function LazyLoader({ children, fallback = <div>Loading...</div> }) {
  const lazyChildren = React.Children.map(children, (child) => (
    <Suspense fallback={fallback}>
      {cloneElement(child)}
    </Suspense>
  ));

  return <>{lazyChildren}</>;
}

export default LazyLoader;
