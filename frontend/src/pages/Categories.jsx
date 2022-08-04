import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Center,
  Image,
  Container,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import "./CategoryStyle.css";
import GallaryItem from "../components/GallaryItem";
import AddTopics from "../components/AddTopics";
import { collection, onSnapshot } from "firebase/firestore";
import { koueryRef } from "../lib/firestoreCollection";

const Categories = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(koueryRef, (snapshot) => {
      setGalleryItems(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Container maxW="80%" rounded="2xl" padding={5}>
        <Text fontSize="5xl" fontWeight="extrabold" color="blackAlpha.800">
          Query Gallery
        </Text>
        <AddTopics existingTopics={galleryItems} />
      </Container>

      <Container maxW="80%">
        {galleryItems.map((item) => (
          <GallaryItem path={"/" + item.id} name={item.data.topicName} />
        ))}
        {/* <GallaryItem path="/focus" name="Mental Performance" />
        <GallaryItem path="/immunity" name="Immunity" />
        <GallaryItem path="/relaxation" name="Relaxation" />
        <GallaryItem path="/digestive-health" name="Digestive Health" />
        <GallaryItem path="/detox" name="Detox" />
        <GallaryItem path="/sustained-energy" name="Natural Sustained Energy" />
        <GallaryItem path="/template" name="Template" /> */}
      </Container>
    </div>
  );
};

export default Categories;
