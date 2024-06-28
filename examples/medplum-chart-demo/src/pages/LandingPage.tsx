import { Anchor, Button, Stack, Text, Title } from '@mantine/core';
import { Document } from '@medplum/react';
import { Link } from 'react-router-dom';

export function LandingPage(): JSX.Element {
  return (
    <Document width={500}>
      <Stack align="center">
        <Title order={1} fz={36}>
          Welcome!
        </Title>
        <Text>
          This "Demo" example demonstrates a simple application that fetches Patient data . You can sign in by clicking the link below.
        </Text>
        <Button component={Link} to="/signin" size="lg" radius="xl">
          Sign in
        </Button>
      </Stack>
    </Document>
  );
}
