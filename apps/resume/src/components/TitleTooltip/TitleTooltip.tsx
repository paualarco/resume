import styled from '@emotion/styled';
import { Button, Tooltip, useTheme } from '@nextui-org/react';
import { Icon } from 'core';

export type Size = 'small' | 'medium' | 'large';
interface Props {
  text: string;
  githubLink: string | null;
  otherLink: string | null;
  size: Size;
}

function titleSized(size: Size, text: string) {
  switch (size) {
    case 'small':
      return <h4>{text}</h4>;
    case 'medium':
      return <h3>{text}</h3>;
    case 'large':
      return <h2>{text}</h2>;
  }
}

function TitleTooltip({ text, githubLink, otherLink, size }: Props) {
  return githubLink !== null || otherLink !== null ? (
    <Tooltip placement="topStart" content={<TooltipContent githubLink={githubLink} otherLink={otherLink} />}>
      <StyledButton auto light color="primary" animated={false}>
        {titleSized(size, text)}
      </StyledButton>
    </Tooltip>
  ) : (
    titleSized(size, text)
  );
}

export default TitleTooltip;

const StyledButton = styled(Button)`
  padding-left: 0;
  padding-right: 2px;
`;

interface TooltipProps {
  githubLink: string | null;
  otherLink: string | null;
}

function TooltipContent({ githubLink, otherLink }: TooltipProps) {
  const { theme } = useTheme();

  return (
    <Div>
      {githubLink && (
        <a href={githubLink} rel="noreferrer" target="_blank">
          <Button auto light icon={<Icon name="GithubLine" fill={theme.colors.accents6.value} />} />
        </a>
      )}
      {otherLink && (
        <a href={otherLink} rel="noreferrer" target="_blank">
          <Button auto light icon={<Icon name="Link" fill={theme.colors.accents6.value} />} />
        </a>
      )}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
`;
