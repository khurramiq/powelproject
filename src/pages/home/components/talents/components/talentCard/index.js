import {
  Box,
  Flex,
  Text,
  Button,
  Avatar,
  useColorMode,
} from '@chakra-ui/react';
import { FiMessageSquare } from 'react-icons/fi';
import topRatedStarIcon from '../../../../../../assets/images/topRatedStarIcon.png';
import topRatedTickIcon from '../../../../../../assets/images/topRatedTickIcon.png';

const TalentCard = ({ talent, setSelectedTalent }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      p={4}
      boxShadow="md"
      rounded="lg"
      maxW="sm"
      maxH="315px"
      mx={2}
      my={2}
      textAlign="center"
      variant="outline"
      borderWidth="1px"
      colorScheme="gray"
      style={
        colorMode === 'dark'
          ? { background: '#090B0C' }
          : { background: '#fff' }
      }
    >
      <Flex justifyContent="center">
        <Flex position="relative" align="center" justify="center" mb={2}>
          <Flex
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="-5px"
            right="-5px"
            px={2}
            py={1}
            width="77px"
            height="36px"
            color="white"
            rounded="12px"
            css={
              colorMode === 'dark'
                ? {
                    zIndex: 5,
                    background: 'rgba(0, 0, 0, 0.48)',
                    backdropFilter: 'blur(4px)',
                  }
                : {
                    zIndex: 5,
                    background: 'rgba(255, 255, 255, 0.72)',
                    backdropFilter: 'blur(4px)',
                  }
            }
          >
            <Text
              fontWeight="600"
              fontSize="14"
              color={colorMode === 'dark' ? '#fff' : '#090B0C'}
            >
              ${talent?.hourlyRate}
            </Text>
            <Text
              fontSize="10"
              fontWeight="600"
              color={colorMode === 'dark' ? '#fff' : '#090B0C'}
            >
              /hour
            </Text>
          </Flex>
          {talent.tallentImages.map((tallentImage, i) => (
            <Box
              key={i}
              borderRadius="20px"
              overflow="hidden"
              boxShadow="md"
              mr={1}
              rounded="20px"
            >
              <img
                src={tallentImage?.image}
                alt="cardImg1"
                width="80"
                height="80"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
      <Box position="relative" top="-40px">
        <Avatar
          src={talent?.profileImage}
          size="l"
          borderWidth="3px"
          borderColor={colorMode === 'dark' ? '#000' : 'white'}
        />
        <img
          src={topRatedStarIcon}
          alt="topRatedStarIcon"
          style={
            talent.topRated
              ? {
                  position: 'absolute',
                  top: '42px',
                  left: 'calc(50% + 10px)',
                }
              : { display: 'none' }
          }
        />
        <img
          src={topRatedTickIcon}
          alt="topRatedTickIcon"
          style={
            talent.topRated
              ? {
                  position: 'absolute',
                  top: '50px',
                  left: 'calc(50% + 16px)',
                  zIndex: 1,
                }
              : { display: 'none' }
          }
        />
        <Text fontSize="14" fontWeight="600" mt={2}>
          {talent?.name}
        </Text>
        <Text
          fontSize="12"
          fontWeight="400"
          color="gray.500"
          mb={4}
          textAlign="center"
          minH="50px"
        >
          {talent?.desc}
        </Text>
        <Flex justifyContent="center" mb={4}>
          {talent.services.map((service, i) => (
            <Button
              key={i}
              fontSize="12"
              fontWeight="600"
              rounded="full"
              variant="outline"
              borderWidth="1px"
              colorScheme="gray"
              mr={2}
            >
              {service}
            </Button>
          ))}
          <Button
            variant="outline"
            rounded="full"
            borderWidth="1px"
            colorScheme="gray"
          >
            +3
          </Button>
        </Flex>
        <Flex align="center" justifyContent="space-between">
          <Flex align="center">
            <FiMessageSquare size={16} />
            <Text ml={1} fontSize="sm" fontWeight="bold">
              {talent?.coments}
            </Text>
            <Text
              cursor="pointer"
              ml={1}
              fontSize="sm"
              color="gray.500"
              onClick={() => setSelectedTalent(talent)}
            >
              Comments
            </Text>
          </Flex>
          <Flex align="center">
            <Text fontSize="sm" fontWeight="bold">
              {talent?.rating}/5
            </Text>
            <Text ml={1} fontSize="sm" color="gray.500">
              Rating
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default TalentCard;
