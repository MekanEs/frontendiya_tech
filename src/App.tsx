import React, { FC, useState } from 'react';

import { Button, MantineProvider } from '@mantine/core';

export const App: FC = () => {
  const [color, setColor] = useState('dark');
  const change: () => void = () => {
    if (color === 'dark') {
      setColor('light');
    } else {
      setColor('dark');
    }
    console.log(color);
  };

  return (
    // @ts-ignore
    <MantineProvider theme={{ colorScheme: color }} withGlobalStyles withNormalizeCSS>
      <div>
        <Button onClick={change} variant="filled">
          Change theme
        </Button>
      </div>
    </MantineProvider>
  );
};
