import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';

const NumberInputModal = ({
  isOpen,
  onClose,
  refreshNotes,
  dbCategory,
  refreshCategories,
}) => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    const category = selectedNumber;
    const createCategory = {
      category,
    };

    const response = await fetch('/categories', {
      method: 'POST',
      body: JSON.stringify(createCategory),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
      return;
    }

    if (response.ok) {
      onClose();
      refreshCategories();
    }
  };

  const handleChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
        <ModalContent>
          <ModalHeader>Enter Number...</ModalHeader>
          <ModalHeader>Create a category from 0-9</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Select onChange={handleChange} placeholder='Select number'>
              {Array.from({ length: 10 }, (_, i) => i)
                .filter((num) => !dbCategory.includes(num))
                .map((filteredNum) => (
                  <option value={filteredNum} key={filteredNum}>
                    {filteredNum}
                  </option>
                ))}
            </Select>
            <Button onClick={handleCreateCategory} colorScheme='green' mt={5}>
              Create Category
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NumberInputModal;
