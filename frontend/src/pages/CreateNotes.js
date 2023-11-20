import { useState } from 'react';
import { Flex, Button, Textarea, VStack, Input, Text } from '@chakra-ui/react';
const CreateNotes = ({
  selectedNote,
  setSelectedNote,
  setCreateNotes,
  setNotesPage,
  refreshNotes,
  currentCategory,
  setEditNotes,
}) => {
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = selectedNote.title;
    const description = selectedNote.description;
    const category = currentCategory;
    const newNote = {
      title,
      description,
      category,
    };

    const response = await fetch('/notes', {
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await response.json();
    if (response.ok) {
      refreshNotes();
      setCreateNotes(false);
      setEditNotes(false);
      setNotesPage(true);
    }
    if (!response.ok) {
      setError(json.error);
      console.log(error, 'ERRORR');
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
      <Flex align='center' alignSelf='end' mb={4}>
        <Button
          onClick={() => {
            setCreateNotes(false);
            setNotesPage(true);
          }}
        >
          X
        </Button>
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
        {error && (
          <Text
            height={5}
            width={'350px'}
            color={'black'}
            bg={'red'}
            fontSize={'16px'}
            borderRadius={'9px'}
          >
            {'You must fill out all the fields!!!'}
          </Text>
        )}
        <Textarea
          placeholder='Add a note description here...'
          value={selectedNote.description ?? ''}
          height='xl'
          onChange={(e) =>
            setSelectedNote((selectedNote) => ({
              ...selectedNote,
              description: e.target.value,
              category: 1,
            }))
          }
        />

        <Flex justifyContent={'space-between'}>
          <Button onClick={(e) => handleSubmit(e)} colorScheme='green'>
            Create Note
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default CreateNotes;
