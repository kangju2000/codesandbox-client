import React from 'react';
import { useActions } from 'app/overmind';
import { Stack, Text, Button, Icon } from '@codesandbox/components';
import css from '@styled-system/css';

interface NewSandboxProps {
  collectionId?: string;
}

export const NewSandbox: React.FC<NewSandboxProps> = props => {
  const { openCreateSandboxModal } = useActions();

  const onClick = () =>
    openCreateSandboxModal({ collectionId: props.collectionId });
  return (
    <Button
      variant="link"
      onClick={onClick}
      css={css({
        height: 240,
        fontSize: 3,
        backgroundColor: 'grays.700',
        border: '1px solid',
        borderColor: 'transparent',
        borderRadius: 'medium',
        transition: 'background ease-in',
        fontWeight: 'normal',
        transitionDuration: theme => theme.speeds[4],
        ':hover, :focus, :focus-within': {
          backgroundColor: 'card.backgroundHover',
        },
        ':focus-visible': {
          boxShadow: '0 0 2px 1px rgba(255, 255, 255, 0.4)',
        },
      })}
    >
      <Stack direction="vertical" align="center" gap={4}>
        <Icon name="plus" size={32} />
        <Text>New</Text>
      </Stack>
    </Button>
  );
};
