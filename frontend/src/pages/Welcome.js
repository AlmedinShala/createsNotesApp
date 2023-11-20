import { Box, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import notesPhoto from '../photo/notes.png';

const Welcome = () => {
  return (
    <Box
      bgImage={`url(${notesPhoto})`}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      h='100vh' // Set the height as needed
    >
      <Flex
        alignItems='center'
        alignSelf={'center'}
        justifyContent='space-between'
        gap={5}
      >
        <Button
          w={'250px'}
          _hover={{ background: 'orange.300' }}
          h={'100px'}
          bg={'orange.500'}
          color='black'
        >
          Wecome to your Notes App.
        </Button>
        <Link to={'/notes'}>
          <Button
            w={'250px'}
            _hover={{ background: 'blue' }}
            h={'100px'}
            bg={'blue.300'}
            color='black'
          >
            Click here to see your notes...
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Welcome;
