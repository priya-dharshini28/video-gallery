import {
  Box,
  Container,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  AspectRatio,
  Center,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function Video() {
  const [videosData, setVideosData] = useState([]);
  const [isOpen, setIsOpen] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/getvideos/")
      .then((response) => response.json())
      .then((data) => {
        setVideosData(data);
        setIsOpen(new Array(data.length).fill(false));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOpenModal = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = true;
    setIsOpen(updatedIsOpen);
  };

  const handleCloseModal = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = false;
    setIsOpen(updatedIsOpen);
  };

  return (
    <div>
      <Center mt={10} p={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          {videosData.map((video, index) => (
            <Box key={video.refid}>
              <Box onClick={() => handleOpenModal(index)}>
                <Image
                  cursor={"pointer"}
                  borderRadius={5}
                  src={video.thumbnail_url}
                />
              </Box>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen[index]}
                onClose={() => handleCloseModal(index)}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Video {video.refid}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Box
                      position="relative"
                      paddingTop="56.25%" // 16:9 aspect ratio (dividing height by width)
                      width="100%"
                    >
                      <iframe
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        src={video.video_url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        autoPlay
                      ></iframe>
                    </Box>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
}

export default Video;
