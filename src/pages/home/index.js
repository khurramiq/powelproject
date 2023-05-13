import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Talents from './components/talents';
// Grid view images
import profileImage1 from '../../assets/images/cardProfilePic1.svg';
import img1 from '../../assets/images/cardImg1.svg';
import img2 from '../../assets/images/cardImg2.svg';
import img3 from '../../assets/images/cardImg3.svg';
import profileImage2 from '../../assets/images/cardProfilePic2.png';
import img4 from '../../assets/images/cardImg4.svg';
import img5 from '../../assets/images/cardImg5.svg';
import img6 from '../../assets/images/cardImg6.svg';
import profileImage3 from '../../assets/images/cardProfilePic3.svg';
import img7 from '../../assets/images/cardImg7.svg';
import img8 from '../../assets/images/cardImg8.svg';
import img9 from '../../assets/images/cardImg9.svg';
import profileImage4 from '../../assets/images/cardProfilePic4.png';
import img10 from '../../assets/images/cardImg10.svg';
import img11 from '../../assets/images/cardImg11.svg';
import profileImage5 from '../../assets/images/cardProfilePic5.png';
import img12 from '../../assets/images/cardImg12.png';
import img13 from '../../assets/images/cardImg13.png';
import img14 from '../../assets/images/cardImg14.png';
import profileImage6 from '../../assets/images/cardProfilePic6.png';
import img15 from '../../assets/images/cardImg15.png';
import img16 from '../../assets/images/cardImg16.png';
import img17 from '../../assets/images/cardImg17.png';
import profileImage7 from '../../assets/images/cardProfilePic7.png';
import img18 from '../../assets/images/cardImg18.png';
import img19 from '../../assets/images/cardImg19.png';
import img20 from '../../assets/images/cardImg20.png';
import profileImage8 from '../../assets/images/cardProfilePic8.png';
import img21 from '../../assets/images/cardImg21.png';
import img22 from '../../assets/images/cardImg22.png';
import img23 from '../../assets/images/cardImg23.png';
import { useColorMode } from '@chakra-ui/react';

const Home = () => {
  const data = [
    {
      tallentImages: [
        {
          image: img1,
        },
        {
          image: img2,
        },
        {
          image: img3,
        },
      ],
      profileImage: profileImage1,
      topRated: true,
      hourlyRate: 75,
      name: 'Ryan Jackson',
      desc: 'UI/UX designer with 5 years of experience. Specializes in creating clean, modern interfaces',
      services: ['UI design', 'UX design'],
      coments: 12,
      rating: 4.6,
    },
    {
      tallentImages: [
        {
          image: img4,
        },
        {
          image: img5,
        },
        {
          image: img6,
        },
      ],
      profileImage: profileImage2,
      topRated: true,
      hourlyRate: 85,
      name: 'David Chen',
      desc: 'Full-stack developer with experience in UI/UX design. Skilled in front-end development',
      services: ['Front-end', 'UI design'],
      coments: 34,
      rating: 4.1,
    },
    {
      tallentImages: [
        {
          image: img7,
        },
        {
          image: img8,
        },
        {
          image: img9,
        },
      ],
      profileImage: profileImage3,
      topRated: false,
      hourlyRate: 95,
      name: 'Rachel Lee',
      desc: 'Graphic designer with a focus on creating unique and creative interfaces that stand out.',
      services: ['Branding', 'NFT'],
      coments: 6,
      rating: 4.4,
    },
    {
      tallentImages: [
        {
          image: img10,
        },
        {
          image: img11,
        },
      ],
      profileImage: profileImage4,
      topRated: true,
      hourlyRate: 115,
      name: 'James Park',
      desc: '3D designer with 8 years of experience in designing for games, healthcare',
      services: ['3D', 'UX', 'UI'],
      coments: 65,
      rating: 4.8,
    },
    {
      tallentImages: [
        {
          image: img12,
        },
        {
          image: img13,
        },
        {
          image: img14,
        },
      ],
      profileImage: profileImage5,
      topRated: false,
      hourlyRate: 75,
      name: 'Brian Park',
      desc: 'Visual designer with a passion for creating beautiful NFTs.',
      services: ['NFT', '3D'],
      coments: 65,
      rating: 4.8,
    },
    {
      tallentImages: [
        {
          image: img15,
        },
        {
          image: img16,
        },
        {
          image: img17,
        },
      ],
      profileImage: profileImage6,
      topRated: false,
      hourlyRate: 85,
      name: 'John Kim',
      desc: 'UI/UX designer with expertise in designing responsive interfaces for mobile and web',
      services: ['Front-end', 'UI design'],
      coments: 65,
      rating: 4.6,
    },
    {
      tallentImages: [
        {
          image: img18,
        },
        {
          image: img19,
        },
        {
          image: img20,
        },
      ],
      profileImage: profileImage7,
      topRated: false,
      hourlyRate: 95,
      name: 'Samantha Park',
      desc: 'UX researcher and designer with a background in psychology.',
      services: ['Branding', 'NFT'],
      coments: 65,
      rating: 4.1,
    },
    {
      tallentImages: [
        {
          image: img21,
        },
        {
          image: img22,
        },
        {
          image: img23,
        },
      ],
      profileImage: profileImage8,
      topRated: true,
      hourlyRate: 115,
      name: 'Laura Wilson',
      desc: '3D designer with experience in creating interfaces for Games and learning apps',
      services: ['Learning', '3D', 'UI'],
      coments: 65,
      rating: 4.8,
    },
  ];
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const [searchedTalents, setSearchedTalents] = useState([]);
  const [searchedServices, setSearchedServices] = useState([]);
  const { colorMode } = useColorMode();
  return (
    <div
      style={
        colorMode === 'dark'
          ? { background: '#090B0C', minHeight: '100vh' }
          : null
      }
    >
      <Navbar
        data={data}
        searchText={searchText}
        setSearchText={setSearchText}
        searchedTalents={searchedTalents}
        setSearchedTalents={setSearchedTalents}
        searchedServices={searchedServices}
        setSearchedServices={setSearchedServices}
        setFilteredData={setFilteredData}
      />
      <Header searchText={searchText} filteredData={filteredData} />
      <Talents
        data={data}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
};

export default Home;
