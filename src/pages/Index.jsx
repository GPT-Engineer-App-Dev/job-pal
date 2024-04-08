import React, { useState } from "react";
import { Box, Heading, Input, Button, Checkbox, Flex, IconButton, VStack, StackDivider } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, completed, onToggle, onDelete }) => (
  <Flex align="center">
    <Checkbox isChecked={completed} onChange={onToggle} mr={4} />
    <Box flex="1" textDecoration={completed ? "line-through" : "none"}>
      {todo}
    </Box>
    <IconButton icon={<FaTrash />} onClick={onDelete} />
  </Flex>
);

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="400px" mx="auto" mt={8}>
      <Heading mb={4}>My Todos</Heading>
      <Flex mb={4}>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a new todo" mr={4} />
        <Button leftIcon={<FaPlus />} onClick={handleAddTodo}>
          Add
        </Button>
      </Flex>
      <VStack divider={<StackDivider />} borderWidth={1} borderRadius="md" p={4} align="stretch">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo.text} completed={todo.completed} onToggle={() => handleToggleTodo(index)} onDelete={() => handleDeleteTodo(index)} />
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
