import styled from '@emotion/styled';

const StyledSkeletonCard = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  max-width: 300px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const TitleInput = styled.input`
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  padding: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.background.primary};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.sm};
  color: ${({ theme }) => theme.font.color.tertiary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(1)};
  margin-right: ${({ theme }) => theme.spacing(1)};

  &:hover {
    background-color: ${({ theme }) => theme.background.tertiary};
  }
`;

export const SkeletonCard = ({ title, onTitleChange, onSave, onCancel }) => {
  return (
    <StyledSkeletonCard>
      <TitleInput
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder="Enter card title"
      />
      <Button onClick={onSave}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </StyledSkeletonCard>
  );
};
