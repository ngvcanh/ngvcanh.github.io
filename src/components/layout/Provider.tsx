"use client";
import { FC, PropsWithChildren } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/redux/store/store';

const Provider: FC<PropsWithChildren> = props => {
  const { children } = props;

  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
};

export default Provider;
