import {
  Box,
  Flex,
  Input,
  IconButton,
  Text,
  Avatar,
  Spacer,
  Link,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorMode,
} from '@chakra-ui/react';
import { FiMessageSquare, FiBell } from 'react-icons/fi';
import logo from '../../assets/images/logo.png';
import profileImg from '../../assets/images/profile-img.svg';
import homeIcon from '../../assets/images/home.svg';
import myNetworkIcon from '../../assets/images/myNetwork.svg';
import jobsIcon from '../../assets/images/jobs.svg';
import profileCaretDown from '../../assets/images/profileCaretDown.png';
import SearchDropdown from './components/searchDropdown';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { useState } from 'react';

const Navbar = ({
  data,
  searchText,
  setSearchText,
  searchedTalents,
  setSearchedTalents,
  searchedServices,
  setSearchedServices,
  setFilteredData,
}) => {
  const { colorMode } = useColorMode();
  const [openSearchDropdown, setOpenSearchDropdown] = useState(false);

  const handleSearch = text => {
    setSearchText(text);
    if (!openSearchDropdown) {
      setOpenSearchDropdown(true);
    } else if (text === '') {
      setOpenSearchDropdown(false);
    }
    const temA = data.filter(obj =>
      obj.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchedTalents(temA);
    const resultArray = [];

    data.forEach(item => {
      item.services.forEach(service => {
        if (service.toLowerCase().includes(text.toLowerCase())) {
          const existingResult = resultArray.find(
            result => result.service === service
          );
          if (existingResult) {
            existingResult.talents.push(item);
          } else {
            resultArray.push({ service: service, talents: [item] });
          }
        }
      });
    });
    console.log('filteredItems', resultArray);
    let newArr = [];
    for (let i = 0; i < resultArray.length; i++) {
      const element = resultArray[i];
      newArr = newArr.concat(element.talents);
    }
    newArr = newArr.concat(temA);
    const uniqueArray = newArr.filter(
      (obj, index, self) => index === self.findIndex(el => el.name === obj.name)
    );
    setFilteredData(uniqueArray);
    setSearchedServices(resultArray);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      setOpenSearchDropdown(false);
    }
  };

  return (
    <Box p={4} css={colorMode === 'dark' ? { background: '#090B0C' } : null}>
      <Flex align="center" maxW="1200px" mx="auto">
        {/* Logo */}
        <a href="/">
          <Flex align="center">
            <img src={logo} alt="Logo" />
            <Text ml={2} fontSize="24" fontWeight="800">
              DKSH
            </Text>
          </Flex>
        </a>

        {/* Search Bar */}
        <Flex position="relative" align="center" ml={10}>
          <InputGroup
            flex="1"
            rounded="lg"
            css={
              colorMode === 'light'
                ? { background: '#FBFBFC' }
                : { background: '#121619' }
            }
          >
            <InputLeftElement
              pointerEvents="none"
              children={<i className="fal fa-search"></i>}
            />
            <Input
              type="text"
              placeholder="Search candidate, competencies, services"
              width="400px"
              borderWidth="0"
              css={{ fontSize: '12' }}
              value={searchText}
              onChange={e => handleSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <InputRightElement
              pointerEvents="none"
              children={
                <i
                  className="fal fa-slash"
                  style={{ transform: 'rotate(90deg)' }}
                ></i>
              }
            />
          </InputGroup>
          {openSearchDropdown && (
            <SearchDropdown
              searchedTalents={searchedTalents}
              searchedServices={searchedServices}
              openSearchDropdown={openSearchDropdown}
              setOpenSearchDropdown={setOpenSearchDropdown}
            />
          )}
        </Flex>
        <Spacer />
        {/* Navigation Links */}
        <Box ml={4}>
          <Flex align="center">
            <Link href="/" mr={2}>
              <Flex align="center">
                <img src={homeIcon} alt="homeIcon" />
                <Text ml={2} fontSize="12" fontWeight="500">
                  Home
                </Text>
              </Flex>
            </Link>
            <Link href="/network" mr={2}>
              <Flex align="center">
                <img src={myNetworkIcon} alt="homeIcon" />
                <Text ml={2} fontSize="12" fontWeight="500">
                  My Network
                </Text>
              </Flex>
            </Link>
            <Link href="/jobs" mr={2}>
              <Flex align="center">
                <img src={jobsIcon} alt="homeIcon" />
                <Text ml={2} fontSize="12" fontWeight="500">
                  Jobs
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Box>

        {/* Message and Notification Icons */}
        <Box>
          <IconButton
            aria-label="Messages"
            icon={<FiMessageSquare />}
            mr={1}
            variant="ghost"
          />
          <IconButton
            aria-label="Notifications"
            icon={<FiBell />}
            mr={1}
            variant="ghost"
          />
        </Box>

        <ColorModeSwitcher justifySelf="flex-end" />

        {/* Profile Name, Avatar, and Arrow Down */}
        <Box ml={2}>
          <Flex align="center">
            <Text fontWeight="600" fontSize="14">
              John Doe
            </Text>
            <Avatar size="sm" name="John Doe" src={profileImg} ml={2} mr={2} />
            <img src={profileCaretDown} alt="profileCaretDown" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
