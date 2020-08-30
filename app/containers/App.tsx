import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function App(props: Props) {
  return <>{props.children}</>;
}
