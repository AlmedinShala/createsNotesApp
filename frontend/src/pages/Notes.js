import {
  Box,
  Flex,
  VStack,
  Button,
  Input,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const Notes = ({
  filteredNotes,
  setSelectedNote,
  setEditNotes,
  setCreateNotes,
  setNotesPage,
  setSearchParams,
}) => {
  return (
    <Box
      paddingRight={50}
      paddingLeft={50}
      borderRadius={9}
      w={'400px'}
      bg='white'
      color='white'
      p={4}
      m={3}
      alignItems={'flex-start'}
      ga
    >
      <VStack>
        <Flex gap={3}>
          <Button
            w='200px'
            height={'32px'}
            colorScheme='#71CF48'
            bg={'#71CF48'}
            mb={'13px'}
            onClick={() => {
              setCreateNotes(true);
              setEditNotes(false);
              setNotesPage(false);
              setSelectedNote({ title: '', description: '', category: null });
            }}
          >
            Create a Note +
          </Button>
          <Input
            onChange={(e) => {
              setSearchParams({ myParam: e.target.value });
            }}
            color={'black'}
            height='30px'
            placeholder='Search...'
          />
        </Flex>
        {filteredNotes &&
          filteredNotes.map((note) => (
            <Box
              alignContent={'flex-start'}
              width={370}
              textAlign={'left'}
              pl={2}
              borderBottom={'1px solid #A9a9a9'}
              _hover={{ cursor: 'pointer', background: 'gray.100' }}
              onClick={() => {
                setSelectedNote(note);
                setEditNotes(true);
                setCreateNotes(false);
              }}
              bg='white'
              color='black'
            >
              <Flex flexDirection={'column'}>
                <Heading fontSize={'4x1'}>{note.title}</Heading>
                <Text>{note.description}</Text>
              </Flex>
            </Box>
          ))}
      </VStack>
    </Box>
  );
};

export default Notes;
