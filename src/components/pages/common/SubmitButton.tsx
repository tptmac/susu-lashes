import { Button, ButtonProps } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';
import React from 'react';
import styled from 'styled-components';

interface SubmitButtonProps extends ButtonProps {
  text?: string;
}

const StyledSubmitButton = styled(Button)`
  background-color: ${grey[800]};
  color: white;
  :hover {
    background-color: ${pink[200]};
    border-color: ${pink[200]};
  }
`;

function SubmitButton(props: SubmitButtonProps) {
  return (
    <StyledSubmitButton variant="outlined" {...props}>
      {props.text || 'Submit'}
    </StyledSubmitButton>
  );
}

export default SubmitButton;