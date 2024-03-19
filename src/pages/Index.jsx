import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Stack, Icon } from "@chakra-ui/react";
import { FaRocket, FaGoogle, FaGraduationCap } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex minHeight="100vh" alignItems="center" justifyContent="center" bgGradient="linear(to-r, #4A148C, #6A1B9A)" color="white" px={8}>
        <Stack spacing={8} maxWidth="800px" textAlign="center">
          <Heading as="h1" size="2xl">
            Unlock the Power of AI and Productivity
          </Heading>
          <Text fontSize="xl">Master Gemini AI and Google Workspace with our cutting-edge online courses. Accelerate your career and stay ahead of the curve!</Text>
          <Button colorScheme="whiteAlpha" size="lg" rightIcon={<FaRocket />} _hover={{ bg: "whiteAlpha.300" }}>
            Enroll Now
          </Button>
        </Stack>
      </Flex>

      {/* Courses Section */}
      <Box py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Courses
        </Heading>
        <Flex flexWrap="wrap" justifyContent="center" gap={8}>
          {/* Gemini AI Course */}
          <Box maxWidth="400px" borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTcxMDg0NzcxMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Gemini AI" />
            <Box p={6}>
              <Heading as="h3" size="lg" mb={4}>
                Gemini AI Fundamentals
              </Heading>
              <Text>Learn the basics of Gemini AI and how to leverage its capabilities for various applications. Gain hands-on experience with practical projects.</Text>
            </Box>
          </Box>

          {/* Google Workspace Course */}
          <Box maxWidth="400px" borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzEwODQ3NzEyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Google Workspace" />
            <Box p={6}>
              <Heading as="h3" size="lg" mb={4}>
                Mastering Google Workspace
              </Heading>
              <Text>Become a Google Workspace expert and optimize your productivity. Learn advanced techniques for Gmail, Drive, Docs, Sheets, and more.</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Call to Action */}
      <Box py={20} px={8} textAlign="center" bgGradient="linear(to-r, #4A148C, #6A1B9A)" color="white">
        <Heading as="h2" size="xl" mb={8}>
          Ready to Elevate Your Skills?
        </Heading>
        <Button colorScheme="whiteAlpha" size="lg" rightIcon={<FaGraduationCap />} _hover={{ bg: "whiteAlpha.300" }}>
          Start Learning Today
        </Button>
      </Box>

      {/* Footer */}
      <Box py={8} px={8} bg="gray.100" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Gemini AI Academy. All rights reserved.</Text>
        <Flex justifyContent="center" mt={4}>
          <Icon as={FaGoogle} boxSize={6} mr={4} />
          <Icon as={FaRocket} boxSize={6} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
