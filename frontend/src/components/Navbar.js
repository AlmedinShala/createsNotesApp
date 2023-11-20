import { Flex, Text, Box, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // Adjusts color based on light/dark mode if needed

  return (
    <Flex
      bg='#1F2A44'
      p={4}
      height={50}
      color='white'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box>
        <Text>Your Notes</Text>
      </Box>

      <Spacer />

      <Box>
        <Link to={'/'}>
          <Box
            colorScheme='blue'
            _hover={{
              color: 'teal.500',
            }}
            variant='outline'
          >
            X
          </Box>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
