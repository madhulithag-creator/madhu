const textConfig = {
  landing: {
    title: "Happy Birthday, Babyyy! 🎂✨",
    subtitle: "Today is all about celebrating the most amazing person in my world. I've created something magical just for you on your special day...",
    lastLine: "Ready for your birthday surprise?",
    button: "Lessss Gooo!!!!!!",
    footer: "Made with endless love for your special day 💕",
  },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Birthday Love Letter 💌",
    headerSubtitle: "From my heart to the birthday boyyyyy",
    letterHeaderTitle: "To My Birthday Babeeee",
    letterMessage: `My Cuddle Bear,

Today marks another year of your existence and I'm sad that I wasnt there with you to celebrate itttt!!!.

You bring so much joy, laughter into my life. You deserve all the magic, all the dreams, and all the love this world has to offer. 💕`,
    signature: "Forever yours 💕",
    envelopeClickHint: "Click to open your birthday surprise",
    specialDeliveryText: "Birthday Special Delivery 🎂",
    continueButton: "Continue It ✨"
  },

  // Updated and complete Cake Cutting configuration
  cakeCutting: {
    heading: "It's Cake Time! 🎂",
    subheading: "Make your birthday wish come true!",
    instructions: "Draw a line across the middle of the cake to cut it ✂️",
    cuttingPrompt: "Cut your birthday cake, birthday girl! 🔪",
    dragHint: "Drag here to cut! ✂️",
    progressText: "Cutting Progress",
    encouragementText: "Almost there!",
    makeWishTitle: "Time to Make a Wish! ✨",
    wishPrompt: "Close your eyes and make your birthday wish! 🌟",
    wishInstructions: "Think of something wonderful for your new year!",
    wishButton: "I've Made My Wish! 💫",
    wishMadeText: "Wish Complete! 🎉",
    congratulations: "Perfect Cut! 🎉",
    celebrationMessage: "May this year bring you everything your heart desires! ✨",
    continueButton: "Continue Birthday Celebration 🎵",
    sparkleMessages: [
      
    ]
  },

  chillZone: {
    heading: "Birthday Vibes Playlist 🎵",
    subheading: "Songs to celebrate your special day",
    chooseTrackHint: "Choose your birthday soundtrack ✨",
    continueButton: "Continue to Birthday Surprises ✨",
    tracks: [
      { id: 1, title: "be mineeee", caption: "Here's to making this year unforgettable 🌟" },
      { id: 2, title: "<33", caption: "Because today is all about YOU, babeeee! 👑" },
      { id: 3, title: "***", caption: "Every beat celebrates your beautiful heart 💖" },
    ]
  },

  cards: {
    heading: "Birthday Wishes Cards 🎁",
    subheading: "Click each card to reveal a birthday message!",
    tapLabel: "✨ Open!",
    progress: {
      start: "Start discovering your birthday surprises ✨",
      discovered: (n, total) => `${n} of ${total} birthday wishes unlocked! Keep going 🎉`,
      complete: "Amazing! All birthday wishes revealed! 🎂✨"
    },
    popup: {
      title: "All Birthday Wishes Unlocked!",
      message: "Each wish carries my love and hopes for your amazing new year ahead. ✨",
      openFinal: "Open Final Birthday Letter 💌",
      stay: "Enjoy the wishes a bit longer"
    },
    cardMessages: [
      "Happy Birthday to my amazing Bubu, the guy who fills my world with love and laughter every single day! 🎉❤️🎉💕",
      "Another year of you being incredible, handsome, and perfect in all the little ways that make my heart melt! ✨",
      "May this new year bring you endless joy, love, and all the dreams your heart desires!, my love 🌟💖"
    ]
  },

  finalLetter: {
    // Page header
    pageTitle: "Final Birthday Letter",
    pageSubtitle: "A special message sealed with love 💕",
    
    // Letter content
    title: "Final Birthday Love Letter",
    letterIcon: "💌",
    stickerAlt: "Love Letter",
    
    // Sealing animation
    sealingText: "Sealing your birthday wishes...",
    sealingEmoji: "💌",
    
    // Buttons
    sealButton: "Seal The Letter 🎂",
    restartButton: "Experinece Again",
    
    // Sealed state
    sealedTitle: "Birthday Letter Sealed with Love",
    sealedSubtitle: "Happy Birthday, My Everything 🎉",
    sealedEmoji: "💝",
    heartCount: 7,
    
    // Signature and actions
    typedDefault: "Forever Yours, Happy Birthday! 💕🎂",
    experienceAgain: "Experience Birthday Magic Again ✨",
    sendKissButton: "Birthday Kisses 💋",
    dateLocale: "en-US",
    
    // Decorative elements
    decorativeEmojis: {
      topRight: "💕",
      bottomLeft: "💖"
    },
    
    // Letter content
    letterGreeting: "My dearest birthday prince,",
    letterParagraphs: [
      "babe its always you. Iloveyou iloveyou to the moon and back buujuluuuu. I cant even imagive myself without you. I'm happy. I want to make you happy just like how you always choose me and how peace you make me feel.",
      "Happy Birthday, my love. i promise I'll be good without any fights and I want to be with you.... 🎂✨. I want no more fights and a fresh start. I'm sorry for what I did. From your birthday I hope you eat well and you'll sleep well.<33333"
      
    ],
    sealingNote: "Sealing will complete your birthday experience."
  },

  common: {
    continue: "Continue Birthday Adventure. With loads of love<3333✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;