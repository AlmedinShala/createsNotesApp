import { Flex, Button, Textarea, VStack, Input } from '@chakra-ui/react';
import { useState } from 'react';
const EditNotes = ({
  selectedNote,
  setSelectedNote,
  setEditNotes,
  refreshNotes,
}) => {
  const [editError, setEditError] = useState();
  const handleDelete = async (e) => {
    e.preventDefault();
    const title = selectedNote.title;
    const description = selectedNote.description;
    const category = selectedNote.category;
    const deleteNote = {
      title,
      description,
      category,
    };
    console.log(deleteNote, 'delete-NOTE');

    const response = await fetch('/notes/' + selectedNote._id, {
      method: 'DELETE',
      body: JSON.stringify(deleteNote),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setEditError(json.error);
      console.log(editError, 'ERRORR');
    }

    if (response.ok) {
      console.log('SUCCESSS');
      setEditError(null);
      refreshNotes();
      setEditNotes(false);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const title = selectedNote.title;
    const description = selectedNote.description;
    const category = selectedNote.category;
    const editNote = {
      title,
      description,
      category,
    };

    const response = await fetch('/notes/' + selectedNote._id, {
      method: 'PATCH',
      body: JSON.stringify(editNote),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setEditError(json.error);
      console.log(editError, 'ERRORR');
    }

    if (response.ok) {
      console.log('SUCCESSS');
      setEditError(null);
      setSelectedNote({
        title: '',
        description: '',
        category: '',
      });
      refreshNotes();
      setEditNotes(false);
    }
  };

  return (
    <Flex
      paddingRight={50}
      paddingLeft={50}
      borderRadius={9}
      bg={'white'}
      flex='1'
      m={3}
      pt={3}
      direction='column'
    >
      <Flex align='center' justify='space-between' mb={4}>
        <Button
          w={'100px'}
          _hover={{ background: 'gray' }}
          h={'32px'}
          bg={'gray'}
          color='black'
        >
          Edit a Note
        </Button>
        <Button onClick={() => setEditNotes(false)}> X </Button>{' '}
      </Flex>
      <VStack align='stretch' spacing={4}>
        <Input
          placeholder='Add a note title here...'
          value={selectedNote.title ?? ''}
          size='sm'
          onChange={(e) =>
            setSelectedNote((selectedNote) => ({
              ...selectedNote,
              title: e.target.value,
            }))
          }
        />
        <Textarea
          placeholder='Add a note description here...'
          value={selectedNote.description ?? ''}
          height='xl'
          onChange={(e) =>
            setSelectedNote((selectedNote) => ({
              ...selectedNote,
              description: e.target.value,
            }))
          }
        />
        <Flex justifyContent={'space-between'}>
          <Button colorScheme='red' onClick={handleDelete}>
            Delete Note
          </Button>
          <Button colorScheme='green' onClick={handleEdit}>
            Save Note
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default EditNotes;
