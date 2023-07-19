import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Someone will love you better",
      artist: "Johnny Orlando",
      // audio: "https://cdn.pixabay.com/audio/2023/06/06/audio_cbcfcb18e6.mp3", // ! this is working fine
      audio: "audio/song1.mp3", //--- Not working
      cover: "https://i.scdn.co/image/ab67616d00001e02cbd44edafad681c71eb0d469",
      id: uuidv4(),
      active: true,
      color: ["#C7866E", "#743D2D"],
    },

    {
      name: "Silence",
      artist: "Marshmello",
      cover: "https://i.scdn.co/image/ab67616d00001e02f33ba583059dc2f7d08bf2b8",
      id: uuidv4(),
      active: false,
      color: ["#414141", "#BEBEBE"],
      audio: "audio/Silence.mp3",
    },

    {
      name: "I Wanna Be Yours",
      artist: "Arctic Monkeys",
      cover: "https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163",
      id: uuidv4(),
      active: false,
      color: ["#414141", "#BEBEBE"],
      audio: "audio/12 Arctic Monkeys - I Wanna Be Yours.mp3",
    },
    {
      name: "Until I Found You",
      artist: "Stephen Sanchez",
      cover: "https://i.scdn.co/image/ab67616d00001e029522042f86d0bb0d4e9e3783",
      id: uuidv4(),
      active: false,
      color: ["#B7CDD8", "#D5B494"],
      audio: "audio/until i found you.m4a",
    },

    {
      name: "Double take",
      artist: "dhruv ",
      cover:
        " https://i.scdn.co/image/ab67616d00001e026f04e53cb5309f8e88286842",
      id: uuidv4(),
      active: false,
      color: ["#60302E", "#CFC1B4"],
      audio: "audio/double take.mp3",
    },
    {
      name: "Die For You",
      artist: " The Weeknd ",
      cover:
        " https://i.scdn.co/image/ab67616d00001e02a048415db06a5b6fa7ec4e1a",
      id: uuidv4(),
      active: false,
      color: ["#042469", "#A60127"],
      audio: "audio/Die For You   The Weeknd.mp3",
    },
    {
      name: "Rocket science",
      artist: " vaultboy music",
      cover:
        " https://i.scdn.co/image/ab67616d00001e02867e47321f5b1fd2339750f0",
      id: uuidv4(),
      active: false,
      color: ["#094C5D", "#0A4D5E"],
      audio: "audio/Rocket science - vaultboy music (official audio).mp3",
    },
    {
      name: "Eastside ",
      artist: " benny blanco, Halsey, Khalid",
      cover:
        " https://i.scdn.co/image/ab67616d00001e023154f0bdf9a17385d7afc6ba",
      id: uuidv4(),
      active: false,
      color: ["#E27499", "#F3F2F0"],
      audio: "audio/Eastside   benny blanco, Halsey, Khalid.mp3",
    },
  ];
}

export default chillHop;
