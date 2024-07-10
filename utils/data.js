const usernames = [
  "StarGazer42",
  "PixelNinja23",
  "CyberWizard87",
  "NeonGhost19",
  "AquaPhoenix88",
  "ShadowHawk77",
  "SilverWolf31",
  "TechSavvy99",
  "LunarEclipse55",
  "CrystalDawn14",
  "StormRider62",
  "FireFlyer83",
  "SkyDiver28",
  "MoonWatcher16",
  "DragonBreath71",
  "IceShard47",
  "PhoenixRising09",
  "JadeWarrior75",
  "SteelHeart39",
  "SpaceExplorer22",
  "ElectricFalcon56",
  "MysticWanderer12",
  "EchoKnight64",
  "GhostWhisperer81",
  "SunsetChaser33",
  "ThunderBlaze50",
  "StormBreaker27",
  "GoldenSphinx18",
  "SapphireShade69",
  "NovaStar94"
];


const emailStarters = [
  "emberfox83",
  "cascade88",
  "fogrunner56",
  "leafwhisperer21",
  "moonlitshadow77",
  "spiritwanderer39",
  "duskwatcher62",
  "stormchaser47",
  "silversongbird12",
  "twilightmage89",
  "arcticdancer25",
  "thundercloud66",
  "starlightecho18",
  "aurorablaze44",
  "wildhearted71",
  "azurewave99",
  "whisperingwillow53",
  "crimsonfirefly27",
  "wolfsong96",
  "shadowninja75",
  "crystalrider32",
  "oceanshadow68",
  "blazefrost11",
  "lunawolf45",
  "mistyhaven84",
  "emberblade67",
  "swiftsparkle22",
  "frostywind81",
  "moonlightmist12",
  "serpentwhisperer78",
];
  
const emailDomains = [
  "@gmail.com",
  "@yahoo.com",
  "@hotmail.com",
  "@outlook.com",
  "@icloud.com",
  "@aol.com",
  "@protonmail.com",
  "@mail.com",
  "@yandex.com",
  "@zoho.com",
  "@inbox.com",
  "@live.com",
  "@rocketmail.com",
  "@me.com",
  "@gmx.com",
  "@fastmail.com",
  "@tutanota.com",
  "@dispostable.com",
  "@tempmail.com",
  "@example.com",
  "@test.com",
  "@domain.com",
  "@email.com",
  "@fake.com",
  "@spam.com",
  "@trashmail.com",
  "@anonymousmail.com",
  "@secretmail.com",
  "@privatemail.com"
];

const randomThoughts = [
  "Honey never spoils. Archaeologists have discovered pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
  "Octopuses have three hearts. Two pump blood through the gills, while the third pumps it through the rest of the body.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  "A group of flamingos is called a flamboyance.",
  "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat.",
  "Bananas are berries, but strawberries aren't.",
  "The unicorn is the national animal of Scotland.",
  "There are more trees on Earth than there are stars in the Milky Way galaxy.",
  "Octopuses have blue blood because they use copper, rather than iron, to transport oxygen.",
  "Baby puffins are called pufflings.",
  "A flock of crows is known as a murder.",
  "An octopus can squeeze through any hole larger than its beak.",
  "The largest snowflake ever recorded reportedly measured 15 inches across.",
  "Wombat poop is cube-shaped.",
  "A group of rhinos is called a crash.",
  "The only letter that doesn't appear on the periodic table is J.",
  "The first oranges weren't orange."
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomEmail = () =>
  `${getRandomArrItem(emailStarters)}${getRandomArrItem(emailDomains)}`;

// Function to generate random assignments that we can add to student object.
const getRandomUsername = () => 
  `${getRandomArrItem(usernames)}`;

const getRandomThought = () =>
  `${getRandomArrItem(randomThoughts)}`;

// Export the functions for use in seed.js
module.exports = { getRandomEmail, getRandomUsername, getRandomThought };
