import {
  ChakraProvider,
  Button,
  useDisclosure,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Button onClick={onOpen}>사나야열어봐!</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>사나야 귀여워</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={10}>
              안녕하세요 저는 사나를 사랑하는 카이입니다.
            </ModalBody>
            <ModalFooter>
              <Button mr={4} onClose={onClose}>
                쪽쪽!
              </Button>
              내 사나는 너무귀여워
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
