import { useState, useEffect } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import NavBar from '../components/Navbar';
import Categories from './Categories';
import Notes from './Notes';
import EditNotes from './EditNotes';
import CreateNotes from './CreateNotes';
import NumberInputModal from '../components/CategoryModal';
import { useSearchParams } from 'react-router-dom';
const Home = () => {
  const [notes, setNotes] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(1);
  const [selectedNote, setSelectedNote] = useState({
    title: '',
    description: '',
    category: null,
  });
  const [editNotes, setEditNotes] = useState(false);
  const [createNotes, setCreateNotes] = useState(false);
  const [notesPage, setNotesPage] = useState(false);
  const [dbCategory, setDbCategory] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('myParam');
  console.log(searchValue, 'searchVALUE');

  useEffect(() => {
    const fetchNotes = async () => {
      let url = '/notes';
      if (searchValue) {
        url += `?myParam=${searchValue}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        // Handle error
        return;
      }

      const json = await response.json();
      setNotes(json);
    };

    const fetchCategories = async () => {
      const response = await fetch('/categories');

      if (!response.ok) {
        return;
      }
      const json = await response.json();
      setDbCategory(json);
    };

    fetchCategories();
    fetchNotes();
  }, [searchValue]);

  const refreshNotes = async () => {
    const response = await fetch('/notes');
    if (!response.ok) {
      return;
    }

    const json = await response.json();
    setNotes(json);
  };
  const refreshCategories = async () => {
    const response = await fetch('/categories');
    if (!response.ok) {
      return;
    }

    const json = await response.json();
    setDbCategory(json);
  };

  const filteredNotes = notes?.filter(
    (note) => currentCategory === note.category
  );

  return (
    <>
      <NavBar />
      <Flex h='100vh' bg='gray.100'>
        <Categories
          dbCategory={dbCategory}
          setCurrentCategory={setCurrentCategory}
          setNotesPage={setNotesPage}
          notes={notes}
          onOpen={onOpen}
        />
        {Boolean(isOpen) && (
          <NumberInputModal
            refreshNotes={refreshNotes}
            isOpen={isOpen}
            onClose={onClose}
            currentCategory={currentCategory}
            onOpen={onOpen}
            dbCategory={dbCategory}
            refreshCategories={refreshCategories}
          />
        )}
        {notesPage && (
          <Notes
            filteredNotes={filteredNotes}
            setSelectedNote={setSelectedNote}
            setEditNotes={setEditNotes}
            editNotes={editNotes}
            setCreateNotes={setCreateNotes}
            setNotesPage={setNotesPage}
            refreshNotes={refreshNotes}
            setSearchParams={setSearchParams}
          />
        )}
        {editNotes && (
          <EditNotes
            setEditNotes={setEditNotes}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            refreshNotes={refreshNotes}
          />
        )}
        {createNotes && (
          <CreateNotes
            setSelectedNote={setSelectedNote}
            selectedNote={selectedNote}
            setCreateNotes={setCreateNotes}
            setNotesPage={setNotesPage}
            setEditNotes={setEditNotes}
            refreshNotes={refreshNotes}
            currentCategory={currentCategory}
          />
        )}
      </Flex>
    </>
  );
};

export default Home;
