import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';
/* eslint-disable @typescript-eslint/no-explicit-any */
function CustomRouter({ history, ...props }: any) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}

export default CustomRouter;
