import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const ProfileCard = ({ card1, card1_profile,card1_name, card2, card2_profile,card2_name, card3, card3_profile, card3_name,card4, card4_profile,card4_name,card5,card5_profile ,card5_name}) => {
  return (
    <Box
    width="240px"
    mt={'1px'}
    overflowY="scroll"
    overflowX="hidden"
    paddingRight="15px"
    css={{
        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '20px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '20px',
          opacity: '0.8',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#888'
        },
        '&::-webkit-scrollbar-corner': {
          background: 'transparent'
        },
      }}

  >
      {[{card: card1, profile: card1_profile ,name:card1_name}, {card: card2, profile: card2_profile,name:card2_name}, {card: card3, profile: card3_profile,name:card3_name}, {card: card4, profile: card4_profile,name:card4_name},
       {card: card5, profile: card5_profile,name:card5_name}].map((item, index) => (
        <Box
          key={index}
          width="244px"
          height="126px"
          mb="1rem"
          backgroundImage={`url(${item.card})`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          borderRadius="15px"
          opacity="1"
          position="relative"
        >
          <Box position="absolute" bottom="5px" left="20px" display="flex" alignItems="center"
          justifyContent={'center'}>
            <Box position="relative">
              <Image src={item.profile} borderRadius="full" boxSize="35px" />
              <Box
                position="absolute"
                top="-3"
                right="-2"
                width="10px"
                height="10px"
                background="#0EC297"
                border="2px solid #FFFFFF"
                borderRadius="100%"
                opacity="1"
              />
            </Box>
            <Box display={'flex'} flexDirection={'column'}
            lineHeight={'0px'}
            textAlign={'left'}
            ml={'10px'}
            >
              <Text fontSize="14px" fontWeight="bold" color="#FFFFFF">{item.name}</Text>
              <Text fontSize="10px" color="#FFFFFF" mt={"5px"} mb={'18px'}>@thewildwithyou</Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProfileCard;
