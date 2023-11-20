import { Box, VStack, Button, StatDownArrow } from '@chakra-ui/react';
const Categories = ({
  dbCategory,
  setCurrentCategory,
  setNotesPage,

  onOpen,
}) => {
  const uniqueCategories = Array.from(
    new Set(dbCategory.map((item) => item.category))
  );

  return (
    <Box
      paddingRight={50}
      paddingLeft={50}
      borderRadius={9}
      w='400px'
      bg='white'
      color='white'
      p={4}
      m={3}
      mr={0}
    >
      <VStack align='stretch' spacing={4}>
        <Button
          w='370px'
          height={'32px'}
          colorScheme='#71CF48'
          bg={'#71CF48'}
          variant='solid'
          onClick={() => onOpen()}
        >
          Create Category +
        </Button>

        {uniqueCategories.map((category) => {
          return (
            <Button
              w='370px'
              h='32px'
              bg='#1264A3'
              colorScheme='#1264A3'
              onClick={() => {
                setCurrentCategory(category);
                setNotesPage(true);
              }}
              rightIcon={<StatDownArrow marginLeft='190px' color='white' />}
            >
              Category {category}
            </Button>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Categories;
