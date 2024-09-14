import { RecordBoardContext } from '@/object-record/record-board/contexts/RecordBoardContext';
import { RecordBoardColumnContext } from '@/object-record/record-board/record-board-column/contexts/RecordBoardColumnContext';
import { useContext, useState } from 'react';

export const useAddNewCard = (position: string) => {
  const { columnDefinition } = useContext(RecordBoardColumnContext);
  const { createOneRecord, selectFieldMetadataItem } =
    useContext(RecordBoardContext);

  const [isCreatingCard, setIsCreatingCard] = useState(false);
  const [cardTitle, setCardTitle] = useState('');

  const handleAddNewCardClick = () => {
    setIsCreatingCard(true);
  };

  const handleCardTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCardTitle(event.target.value);
  };

  const handleSaveCard = () => {
    if (cardTitle) {
      createOneRecord({
        title: cardTitle,
        [selectFieldMetadataItem.name]: columnDefinition.value,
        position: position,
      });
      setIsCreatingCard(false);
      setCardTitle('');
    }
  };

  const handleCancel = () => {
    setIsCreatingCard(false);
    setCardTitle('');
  };

  return {
    isCreatingCard,
    cardTitle,
    handleAddNewCardClick,
    handleCardTitleChange,
    handleSaveCard,
    handleCancel,
  };
};
