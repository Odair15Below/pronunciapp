
var categories = [
    {
        category: "monophtongs",
        color: "bg-indigo-100",
        textcolor: "text-gray-700",
        columnCount: "4"
    },
    {
        category: "diphtongs",
        color: "bg-pink-100",
        textcolor: "text-gray-700",
        columnCount: "3"
    },
    {
        category: "consonants",
        color: "bg-green-100",
        textcolor: "text-gray-700",
        columnCount: "2"
    }
];

var phoneticSymbols = [
    {
        phoneticSymbol: "ʌ",
        samples: ["CUP","LUCK"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "ɑ:",
        samples: ["ARM","FATHER"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "æ",
        samples: ["CAT","BLACK"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "e",
        samples: ["MET", "BED"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "ə",
        samples: ["AWAY", "CINEMA"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "ɜ:ʳ",
        samples: ["TURN", "LEARN"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "ɪ",
        samples: ["HIT", "SITTING"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "i:",
        samples: ["SEE", "HEAT"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "ɒ",
        samples: ["HOT", "ROCK"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "ɔ:",
        samples: ["CALL", "FOUR"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "ʊ",
        samples: ["PUT", "COULD"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "u:",
        samples: ["BLUE", "FOOD"],
        category: "monophtongs"
    },
    {
        phoneticSymbol: "aɪ",
        samples: ["FIVE", "EYE"],
        category: "diphtongs"
    },
    {
        phoneticSymbol: "ɔɪ",
        samples: ["BOY", "JOIN"],
        category: "diphtongs"
    },
    {
        phoneticSymbol: "aʊ",
        samples: ["NOW", "OUT"],
        category: "diphtongs"
    },
    {
        phoneticSymbol: "eəʳ",
        samples: ["WHERE", "AIR"],
        category: "diphtongs"
    },
    {
        phoneticSymbol: "ɪəʳ",
        samples: ["NEAR", "HERE"],
        category: "diphtongs"
    },
    {
        phoneticSymbol: "ʊəʳ",
        samples: ["PURE", "TOURIST"],
        category: "diphtongs"
    },

    {
        phoneticSymbol: "eɪ",
        samples: ["SAY", "EIGHT"],
        category: "diphtongs"
    },
    {
        phoneticSymbol: "oʊ",
        samples: ["GO", "HOME"],
        category: "diphtongs"
    },
    
    {
        phoneticSymbol: "b",
        samples: ["BAD", "LAB"],
        category: "consonants"
    },
    {
        phoneticSymbol: "d",
        samples: ["DID", "LADY"],
        category: "consonants"
    },

    {
        phoneticSymbol: "f",
        samples: ["FIND", "IF"],
        category: "consonants"
    },
    {
        phoneticSymbol: "g",
        samples: ["GIVE", "FLAG"],
        category: "consonants"
    },

    {
        phoneticSymbol: "h",
        samples: ["HOW", "HELLO"],
        category: "consonants"
    },
    {
        phoneticSymbol: "j",
        samples: ["YES", "YELLOW"],
        category: "consonants"
    },

    {
        phoneticSymbol: "k",
        samples: ["CAT", "BACK"],
        category: "consonants"
    },
    {
        phoneticSymbol: "l",
        samples: ["LEG", "LITTLE"],
        category: "consonants"
    },

    {
        phoneticSymbol: "m",
        samples: ["MAN", "LEMON"],
        category: "consonants"
    },
    {
        phoneticSymbol: "n",
        samples: ["NO", "TEN"],
        category: "consonants"
    },

    {
        phoneticSymbol: "ŋ",
        samples: ["SING", "FINGER"],
        category: "consonants"
    },
    {
        phoneticSymbol: "p",
        samples: ["PET", "MAP"],
        category: "consonants"
    },

    {
        phoneticSymbol: "r",
        samples: ["RED", "TRY"],
        category: "consonants"
    },
    {
        phoneticSymbol: "s",
        samples: ["SUN", "MISS"],
        category: "consonants"
    },

    {
        phoneticSymbol: "ʃ",
        samples: ["SHE", "CRASH"],
        category: "consonants"
    },
    {
        phoneticSymbol: "t",
        samples: ["TEA", "GETTING"],
        category: "consonants"
    },

    {
        phoneticSymbol: "tʃ",
        samples: ["CHECK", "CHURCH"],
        category: "consonants"
    },
    {
        phoneticSymbol: "θ",
        samples: ["THINK", "BOTH"],
        category: "consonants"
    },

    {
        phoneticSymbol: "ð",
        samples: ["THIS", "MOTHER"],
        category: "consonants"
    },
    {
        phoneticSymbol: "v",
        samples: ["VOICE", "FIVE"],
        category: "consonants"
    },

    {
        phoneticSymbol: "w",
        samples: ["WET", "WINDOW"],
        category: "consonants"
    },
    {
        phoneticSymbol: "z",
        samples: ["ZOO", "LAZY"],
        category: "consonants"
    },

    {
        phoneticSymbol: "ʒ",
        samples: ["PLEASURE", "VISION"],
        category: "consonants"
    },
    {
        phoneticSymbol: "dʒ",
        samples: ["JUST", "LARGE"],
        category: "consonants"
    },

];

const words = [
    {
        word: "cup",
        category: "ʌ"
    },
    {
        word: "luck",
        category: "ʌ"
    },
    {
        word: "bun",
        category: "ʌ"
    },
    {
        word: "bus",
        category: "ʌ"
    },
    {
        word: "bus",
        category: "ʌ"
    },
    {
        word: "butter",
        category: "ʌ"
    },
    {
        word: "cut",
        category: "ʌ"
    },
    {
        word: "fun",
        category: "ʌ"
    },
    {
        word: "gun",
        category: "ʌ"
    },
    {
        word: "lunch",
        category: "ʌ"
    },
    {
        word: "run",
        category: "ʌ"
    },
    {
        word: "luck",
        category: "ʌ"
    },
    {
        word: "structure",
        category: "ʌ"
    },
    {
        word: "summer",
        category: "ʌ"
    },
    {
        word: "summer",
        category: "ʌ"
    },
    {
        word: "Sunday",
        category: "ʌ"
    },
    {
        word: "thunder",
        category: "ʌ"
    },
    {
        word: "truck",
        category: "ʌ"
    },
    {
        word: "tunnel",
        category: "ʌ"
    },
    {
        word: "tunnel",
        category: "ʌ"
    },
    {
        word: "under",
        category: "ʌ"
    },
    {
        word: "up",
        category: "ʌ"
    },
    {
        word: "us",
        category: "ʌ"
    },
    {
        word: "accomplish",
        category: "ʌ"
    },
    {
        word: "come",
        category: "ʌ"
    },
    {
        word: "comfort",
        category: "ʌ"
    },
    {
        word: "comfortable",
        category: "ʌ"
    },
    {
        word: "company",
        category: "ʌ"
    },
    {
        word: "mother",
        category: "ʌ"
    },
    {
        word: "some",
        category: "ʌ"
    },
    {
        word: "Monday",
        category: "ʌ"
    },
    {
        word: "money",
        category: "ʌ"
    },
    {
        word: "mongrel",
        category: "ʌ"
    },
    {
        word: "monk",
        category: "ʌ"
    },
    {
        word: "confrontation",
        category: "ʌ"
    },
    {
        word: "done",
        category: "ʌ"
    },
    {
        word: "done",
        category: "ʌ"
    },
    {
        word: "honey",
        category: "ʌ"
    },
    {
        word: "London",
        category: "ʌ"
    },
    {
        word: "none",
        category: "ʌ"
    },
    {
        word: "once",
        category: "ʌ"
    },
    {
        word: "son",
        category: "ʌ"
    },
    {
        word: "sponge",
        category: "ʌ"
    },
    {
        word: "ton",
        category: "ʌ"
    },
    {
        word: "tongue",
        category: "ʌ"
    },
    {
        word: "tonne",
        category: "ʌ"
    },
    {
        word: "won",
        category: "ʌ"
    },
    {
        word: "wonderful",
        category: "ʌ"
    },
    {
        word: "cover",
        category: "ʌ"
    },
    {
        word: "covet",
        category: "ʌ"
    },
    {
        word: "discover",
        category: "ʌ"
    },
    {
        word: "father",
        category: "ɑ:"
    },
    {
        word: "apart",
        category: "ɑ:"
    },
    {
        word: "are",
        category: "ɑ:"
    },
    {
        word: "aren't",
        category: "ɑ:"
    },
    {
        word: "argue",
        category: "ɑ:"
    },
    {
        word: "argument",
        category: "ɑ:"
    },
    {
        word: "art",
        category: "ɑ:"
    },
    {
        word: "article",
        category: "ɑ:"
    },
    {
        word: "artist",
        category: "ɑ:"
    },
    {
        word: "bar",
        category: "ɑ:"
    },
    {
        word: "car",
        category: "ɑ:"
    },
    {
        word: "card",
        category: "ɑ:"
    },
    {
        word: "carpet",
        category: "ɑ:"
    },
    {
        word: "charge",
        category: "ɑ:"
    },
    {
        word: "charm",
        category: "ɑ:"
    },
    {
        word: "chart",
        category: "ɑ:"
    },
    {
        word: "dark",
        category: "ɑ:"
    },
    {
        word: "department",
        category: "ɑ:"
    },
    {
        word: "far",
        category: "ɑ:"
    },
    {
        word: "farm",
        category: "ɑ:"
    },
    {
        word: "garden",
        category: "ɑ:"
    },
    {
        word: "guard",
        category: "ɑ:"
    },
    {
        word: "guitar",
        category: "ɑ:"
    },
    {
        word: "hard",
        category: "ɑ:"
    },
    {
        word: "harm",
        category: "ɑ:"
    },
    {
        word: "large",
        category: "ɑ:"
    },
    {
        word: "march",
        category: "ɑ:"
    },
    {
        word: "mark",
        category: "ɑ:"
    },
    {
        word: "market",
        category: "ɑ:"
    },
    {
        word: "park",
        category: "ɑ:"
    },
    {
        word: "part",
        category: "ɑ:"
    },
    {
        word: "party",
        category: "ɑ:"
    },
    {
        word: "regard",
        category: "ɑ:"
    },
    {
        word: "remark",
        category: "ɑ:"
    },
    {
        word: "sharp",
        category: "ɑ:"
    },
    {
        word: "smart",
        category: "ɑ:"
    },
    {
        word: "star",
        category: "ɑ:"
    },
    {
        word: "start",
        category: "ɑ:"
    },
    {
        word: "target",
        category: "ɑ:"
    },
    {
        word: "yard",
        category: "ɑ:"
    },
    {
        word: "heart",
        category: "ɑ:"
    },
    {
        word: "avocado ",
        category: "ɑ:"
    },
    {
        word: "balm",
        category: "ɑ:"
    },
    {
        word: "bra",
        category: "ɑ:"
    },
    {
        word: "garage",
        category: "ɑ:"
    },
    {
        word: "karate",
        category: "ɑ:"
    },
    {
        word: "karate",
        category: "ɑ:"
    },
    {
        word: "lava",
        category: "ɑ:"
    },
    {
        word: "llama",
        category: "ɑ:"
    },
    {
        word: "origami",
        category: "ɑ:"
    },
    {
        word: "safari",
        category: "ɑ:"
    },
    {
        word: "bourgeoisie",
        category: "ɑ:"
    },
    {
        word: "repertoire",
        category: "ɑ:"
    },
    {
        word: "sharp",
        category: "ɑ:"
    },
    {
        word: "clerk",
        category: "ɑ:"
    },
    {
        word: "sergeant",
        category: "ɑ:"
    },
    {
        word: "spa",
        category: "ɑ:"
    },
    {
        word: "tsunami",
        category: "ɑ:"
    },
    {
        word: "I",
        category: "aɪ"
    },

    {
        word: "die",
        category: "aɪ"
    },
    {
        word: "try",
        category: "aɪ"
    },
    {
        word: "supply",
        category: "aɪ"
    },
    {
        word: "eye",
        category: "aɪ"
    },
    {
        word: "apply",
        category: "aɪ"
    },
    {
        word: "dry",
        category: "aɪ"
    },
    {
        word: "buy",
        category: "aɪ"
    },
    {
        word: "why",
        category: "aɪ"
    },
    {
        word: "lie",
        category: "aɪ"
    },
    {
        word: "sky",
        category: "aɪ"
    },
    {
        word: "reply",
        category: "aɪ"
    },
    {
        word: "combined",
        category: "aɪ"
    },
    {
        word: "guy",
        category: "aɪ"
    },
    {
        word: "described",
        category: "aɪ"
    },
    {
        word: "deny",
        category: "aɪ"
    },
    {
        word: "rely",
        category: "aɪ"
    },
    {
        word: "provide",
        category: "aɪ"
    },
    {
        word: "imply",
        category: "aɪ"
    },
    {
        word: "shy",
        category: "aɪ"
    },
    {
        word: "sigh",
        category: "aɪ"
    },
    {
        word: "thigh",
        category: "aɪ"
    },
    {
        word: "they",
        category: "eɪ"
    },
    {
        word: "make",
        category: "eɪ"
    },
    {
        word: "great",
        category: "eɪ"
    },
    {
        word: "same",
        category: "eɪ"
    },
    {
        word: "case",
        category: "eɪ"
    },
    {
        word: "able",
        category: "eɪ"
    },
    {
        word: "age",
        category: "eɪ"
    },
    {
        word: "eight",
        category: "eɪ"
    },
    {
        word: "agent",
        category: "eɪ"
    },
    {
        word: "game",
        category: "eɪ"
    },
    {
        word: "state",
        category: "eɪ"
    },
    {
        word: "later",
        category: "eɪ"
    },
    {
        word: "change",
        category: "eɪ"
    },
    {
        word: "day",
        category: "eɪ"
    },
    {
        word: "play",
        category: "eɪ"
    },
    {
        word: "away",
        category: "eɪ"
    },
    {
        word: "stay",
        category: "eɪ"
    },
    {
        word: "remain",
        category: "eɪ"
    },
    {
        word: "claimed",
        category: "eɪ"
    },
    {
        word: "aimed",
        category: "eɪ"
    },
    {
        word: "point",
        category: "ɔɪ"
    },
    {
        word: "boy",
        category: "ɔɪ"
    },
    {
        word: "voice",
        category: "ɔɪ"
    },
    {
        word: "join",
        category: "ɔɪ"
    },
    {
        word: "oil",
        category: "choice"
    },
    {
        word: "enjoy",
        category: "ɔɪ"
    },
    {
        word: "avoid",
        category: "ɔɪ"
    },
    {
        word: "employee",
        category: "ɔɪ"
    },
    {
        word: "enjoys",
        category: "ɔɪ"
    },
    {
        word: "deploy",
        category: "ɔɪ"
    },
    {
        word: "annoyed",
        category: "ɔɪ"
    },
    {
        word: "voiced",
        category: "ɔɪ"
    },
    {
        word: "noisy",
        category: "ɔɪ"
    },
    {
        word: "toy",
        category: "ɔɪ"
    },
    {
        word: "rejoice",
        category: "ɔɪ"
    },
    {
        word: "recoil",
        category: "ɔɪ"
    },
    {
        word: "avoid",
        category: "ɔɪ"
    },
    {
        word: "moist",
        category: "ɔɪ"
    },
    {
        word: "steroid",
        category: "ɔɪ"
    },
    {
        word: "soybean",
        category: "ɔɪ"
    },
    {
        word: "eəʳ",
        category: "eəʳ"
    },
    {
        word: "there",
        category: "eəʳ"
    },
    {
        word: "where",
        category: "eəʳ"
    },
    {
        word: "area",
        category: "eəʳ"
    },
    {
        word: "parent",
        category: "eəʳ"
    },
    {
        word: "yeah",
        category: "eəʳ"
    },
    {
        word: "various",
        category: "eəʳ"
    },
    {
        word: "care",
        category: "eəʳ"
    },
    {
        word: "wear",
        category: "eəʳ"
    },
    {
        word: "share",
        category: "eəʳ"
    },
    {
        word: "fair",
        category: "eəʳ"
    },
    {
        word: "bear",
        category: "eəʳ"
    },
    {
        word: "compare",
        category: "eəʳ"
    },
    {
        word: "prepare",
        category: "eəʳ"
    },
    {
        word: "questionnaire",
        category: "eəʳ"
    },
    {
        word: "declare",
        category: "eəʳ"
    },
    {
        word: "upstairs",
        category: "eəʳ"
    },
    {
        word: "repaired",
        category: "eəʳ"
    },
    {
        word: "beware",
        category: "eəʳ"
    },
    {
        word: "barrier",
        category: "eəʳ"
    },
    {
        word: "year",
        category: "ɪəʳ"
    },
    {
        word: "hear",
        category: "ɪəʳ"
    },
    {
        word: "really",
        category: "ɪəʳ"
    },
    {
        word: "area",
        category: "ɪəʳ"
    },
    {
        word: "clear",
        category: "ɪəʳ"
    },
    {
        word: "material",
        category: "ɪəʳ"
    },
    {
        word: "here",
        category: "ɪəʳ"
    },
    {
        word: "ear",
        category: "ɪəʳ"
    },
    {
        word: "really",
        category: "ɪəʳ"
    },
    {
        word: "experience",
        category: "ɪəʳ"
    },
    {
        word: "nearly",
        category: "ɪəʳ"
    },
    {
        word: "idea",
        category: "ɪəʳ"
    },
    {
        word: "appear",
        category: "ɪəʳ"
    },
    {
        word: "near",
        category: "ɪəʳ"
    },
    {
        word: "career",
        category: "ɪəʳ"
    },
    {
        word: "sphere",
        category: "ɪəʳ"
    },
    {
        word: "interfere",
        category: "ɪəʳ"
    },
    {
        word: "disappear",
        category: "ɪəʳ"
    },
    {
        word: "tear",
        category: "ɪəʳ"
    },
    {
        word: "gear",
        category: "ɪəʳ"
    },
    {
        word: "during",
        category: "ʊəʳ"
    },
    {
        word: "security",
        category: "ʊəʳ"
    },
    {
        word: "ensuring",
        category: "ʊəʳ"
    },
    {
        word: "curing",
        category: "ʊəʳ"
    },
    {
        word: "labouring",
        category: "ʊəʳ"
    },
    {
        word: "duty",
        category: "ʊəʳ"
    },
    {
        word: "assuring",
        category: "ʊəʳ"
    },
    {
        word: "obscure",
        category: "ʊəʳ"
    },
    {
        word: "cooking",
        category: "ʊəʳ"
    },
    {
        word: "maturing",
        category: "ʊəʳ"
    },
    {
        word: "procuring",
        category: "ʊəʳ"
    },
    {
        word: "luring",
        category: "ʊəʳ"
    },
    {
        word: "flavouring",
        category: "ʊəʳ"
    },
    {
        word: "savouring",
        category: "ʊəʳ"
    },
    {
        word: "endure",
        category: "ʊəʳ"
    },
    {
        word: "secure",
        category: "ʊəʳ"
    },
    {
        word: "ensuring",
        category: "ʊəʳ"
    },
    {
        word: "touring",
        category: "ʊəʳ"
    },
    {
        word: "alluring",
        category: "ʊəʳ"
    },
    {
        word: "looking",
        category: "ʊəʳ"
    },
    {
        word: "town",
        category: "aʊ"
    },
    {
        word: "down",
        category: "aʊ"
    },
    {
        word: "our",
        category: "aʊ"
    },
    {
        word: "without",
        category: "aʊ"
    },
    {
        word: "house",
        category: "aʊ"
    },
    {
        word: "around",
        category: "aʊ"
    },
    {
        word: "power",
        category: "aʊ"
    },
    {
        word: "however",
        category: "aʊ"
    },
    {
        word: "allow",
        category: "aʊ"
    },
    {
        word: "allow",
        category: "aʊ"
    },
    {
        word: "about",
        category: "aʊ"
    },
    {
        word: "found",
        category: "aʊ"
    },
    {
        word: "south",
        category: "aʊ"
    },
    {
        word: "ground",
        category: "aʊ"
    },
    {
        word: "bound",
        category: "aʊ"
    },
    {
        word: "throughout",
        category: "aʊ"
    },
    {
        word: "compound",
        category: "aʊ"
    },
    {
        word: "pound",
        category: "aʊ"
    },
    {
        word: "ultrasound",
        category: "aʊ"
    },
    {
        word: "towel",
        category: "aʊ"
    },
    {
        word: "open",
        category: "oʊ"
    },
    {
        word: "only",
        category: "oʊ"
    },
    {
        word: "old",
        category: "oʊ"
    },
    {
        word: "most",
        category: "oʊ"
    },
    {
        word: "program",
        category: "oʊ"
    },
    {
        word: "hold",
        category: "oʊ"
    },
    {
        word: "home",
        category: "oʊ"
    },
    {
        word: "also",
        category: "oʊ"
    },
    {
        word: "show",
        category: "oʊ"
    },
    {
        word: "ago",
        category: "oʊ"
    },
    {
        word: "follow",
        category: "oʊ"
    },
    {
        word: "so",
        category: "oʊ"
    },
    {
        word: "know",
        category: "oʊ"
    },
    {
        word: "below",
        category: "oʊ"
    },
    {
        word: "pro",
        category: "oʊ"
    },
    {
        word: "plateau",
        category: "oʊ"
    },
    {
        word: "dough",
        category: "oʊ"
    },
    {
        word: "owe",
        category: "oʊ"
    },
    {
        word: "glow",
        category: "oʊ"
    },
    {
        word: "although",
        category: "oʊ"
    },
    {
        word: "cat",
        category: "æ"
    },
    {
        word: "black",
        category: "æ"
    },
    {
        word: "add",
        category: "æ"
    },
    {
        word: "and",
        category: "æ"
    },
    {
        word: "ankle",
        category: "æ"
    },
    {
        word: "back",
        category: "æ"
    },
    {
        word: "bad",
        category: "æ"
    },
    {
        word: "bank",
        category: "æ"
    },
    {
        word: "bat",
        category: "æ"
    },
    {
        word: "can",
        category: "æ"
    },
    {
        word: "carry",
        category: "æ"
    },
    {
        word: "fact",
        category: "æ"
    },
    {
        word: "family",
        category: "æ"
    },
    {
        word: "flat",
        category: "æ"
    },
    {
        word: "hand",
        category: "æ"
    },
    {
        word: "happen",
        category: "æ"
    },
    {
        word: "happy",
        category: "æ"
    },
    {
        word: "land",
        category: "æ"
    },
    {
        word: "man",
        category: "æ"
    },
    {
        word: "match",
        category: "æ"
    },
    {
        word: "matter",
        category: "æ"
    },
    {
        word: "plan",
        category: "æ"
    },
    {
        word: "sad",
        category: "æ"
    },
    {
        word: "stand",
        category: "æ"
    },
    {
        word: "thank",
        category: "æ"
    },
    {
        word: "travel",
        category: "æ"
    },
    {
        word: "understand",
        category: "æ"
    },
    {
        word: "value",
        category: "æ"
    },
    {
        word: "tax",
        category: "æ"
    },
    {
        word: "track",
        category: "æ"
    },
    {
        word: "band",
        category: "æ"
    },
    {
        word: "accept",
        category: "e"
    },
    {
        word: "bell",
        category: "e"
    },
    {
        word: "bend",
        category: "e"
    },
    {
        word: "best",
        category: "e"
    },
    {
        word: "correct",
        category: "e"
    },
    {
        word: "desk",
        category: "e"
    },
    {
        word: "egg",
        category: "e"
    },
    {
        word: "end",
        category: "e"
    },
    {
        word: "expect",
        category: "e"
    },
    {
        word: "forget",
        category: "e"
    },
    {
        word: "get",
        category: "e"
    },
    {
        word: "hell",
        category: "e"
    },
    {
        word: "help",
        category: "e"
    },
    {
        word: "hotel",
        category: "e"
    },
    {
        word: "jet",
        category: "e"
    },
    {
        word: "leg",
        category: "e"
    },
    {
        word: "lend",
        category: "e"
    },
    {
        word: "let",
        category: "e"
    },
    {
        word: "met",
        category: "e"
    },
    {
        word: "neck",
        category: "e"
    },
    {
        word: "next",
        category: "e"
    },
    {
        word: "pen",
        category: "e"
    },
    {
        word: "protect",
        category: "e"
    },
    {
        word: "rent",
        category: "e"
    },
    {
        word: "request",
        category: "e"
    },
    {
        word: "sell",
        category: "e"
    },
    {
        word: "send",
        category: "e"
    },
    {
        word: "set",
        category: "e"
    },
    {
        word: "spend",
        category: "e"
    },
    {
        word: "suggest",
        category: "e"
    },
    {
        word: "tell",
        category: "e"
    },
    {
        word: "theft",
        category: "e"
    },
    {
        word: "well",
        category: "e"
    },
    {
        word: "went",
        category: "e"
    },
    {
        word: "wet",
        category: "e"
    },
    {
        word: "when",
        category: "e"
    },
    {
        word: "yell",
        category: "e"
    },
    {
        word: "yes",
        category: "e"
    },
    {
        word: "about",
        category: "ə"
    },
    {
        word: "account",
        category: "ə"
    },
    {
        word: "admire",
        category: "ə"
    },
    {
        word: "again",
        category: "ə"
    },
    {
        word: "alone",
        category: "ə"
    },
    {
        word: "along",
        category: "ə"
    },
    {
        word: "among",
        category: "ə"
    },
    {
        word: "appeal",
        category: "ə"
    },
    {
        word: "appear",
        category: "ə"
    },
    {
        word: "arise",
        category: "ə"
    },
    {
        word: "around",
        category: "ə"
    },
    {
        word: "away",
        category: "ə"
    },
    {
        word: "occur",
        category: "ə"
    },
    {
        word: "official",
        category: "ə"
    },
    {
        word: "oppose",
        category: "ə"
    },
    {
        word: "original",
        category: "ə"
    },
    {
        word: "ballon",
        category: "ə"
    },
    {
        word: "domestic",
        category: "ə"
    },
    {
        word: "familiar",
        category: "ə"
    },
    {
        word: "gorilla",
        category: "ə"
    },
    {
        word: "habitual",
        category: "ə"
    },
    {
        word: "horizon",
        category: "ə"
    },
    {
        word: "capacity",
        category: "ə"
    },
    {
        word: "community",
        category: "ə"
    },
    {
        word: "computer",
        category: "ə"
    },
    {
        word: "concern",
        category: "ə"
    },
    {
        word: "consider",
        category: "ə"
    },
    {
        word: "continue",
        category: "ə"
    },
    {
        word: "control",
        category: "ə"
    },
    {
        word: "lagoon",
        category: "ə"
    },
    {
        word: "machine",
        category: "ə"
    },
    {
        word: "material",
        category: "ə"
    },
    {
        word: "patrol",
        category: "ə"
    },
    {
        word: "police",
        category: "ə"
    },
    {
        word: "position",
        category: "ə"
    },
    {
        word: "suggest",
        category: "ə"
    },
    {
        word: "supply",
        category: "ə"
    },
    {
        word: "support",
        category: "ə"
    },
    {
        word: "today",
        category: "ə"
    },
    {
        word: "together",
        category: "ə"
    },
    {
        word: "variety",
        category: "ə"
    },
    {
        word: "protect",
        category: "ə"
    },
    {
        word: "provide",
        category: "ə"
    },
    {
        word: "certainly",
        category: "ə"
    },
    {
        word: "concentrate",
        category: "ə"
    },
    {
        word: "enemy",
        category: "ə"
    },
    {
        word: "initiative",
        category: "ə"
    },
    {
        word: "efficiency",
        category: "ə"
    },
    {
        word: "circumstance",
        category: "ə"
    },
    {
        word: "measurement",
        category: "ə"
    },
    {
        word: "turn",
        category: "ɜ:ʳ"
    },
    {
        word: "learn",
        category: "ɜ:ʳ"
    },
    {
        word: "certain",
        category: "ɜ:ʳ"
    },
    {
        word: "concern",
        category: "ɜ:ʳ"
    },
    {
        word: "determine",
        category: "ɜ:ʳ"
    },
    {
        word: "her",
        category: "ɜ:ʳ"
    },
    {
        word: "nerve",
        category: "ɜ:ʳ"
    },
    {
        word: "perfect",
        category: "ɜ:ʳ"
    },
    {
        word: "person",
        category: "ɜ:ʳ"
    },
    {
        word: "service",
        category: "ɜ:ʳ"
    },
    {
        word: "term",
        category: "ɜ:ʳ"
    },
    {
        word: "verb",
        category: "ɜ:ʳ"
    },
    {
        word: "were",
        category: "ɜ:ʳ"
    },
    {
        word: "early",
        category: "ɜ:ʳ"
    },
    {
        word: "earn",
        category: "ɜ:ʳ"
    },
    {
        word: "earth",
        category: "ɜ:ʳ"
    },
    {
        word: "heard",
        category: "ɜ:ʳ"
    },
    {
        word: "learn",
        category: "ɜ:ʳ"
    },
    {
        word: "search",
        category: "ɜ:ʳ"
    },
    {
        word: "burn",
        category: "hurt"
    },
    {
        word: "murder",
        category: "ɜ:ʳ"
    },
    {
        word: "return",
        category: "ɜ:ʳ"
    },
    {
        word: "surface",
        category: "ɜ:ʳ"
    },
    {
        word: "urban",
        category: "ɜ:ʳ"
    },
    {
        word: "bird",
        category: "ɜ:ʳ"
    },
    {
        word: "birthday",
        category: "ɜ:ʳ"
    },
    {
        word: "circle",
        category: "ɜ:ʳ"
    },
    {
        word: "circuit",
        category: "ɜ:ʳ"
    },
    {
        word: "dirty",
        category: "ɜ:ʳ"
    },
    {
        word: "firm",
        category: "ɜ:ʳ"
    },
    {
        word: "girl",
        category: "ɜ:ʳ"
    },
    {
        word: "shirt",
        category: "ɜ:ʳ"
    },
    {
        word: "sir",
        category: "ɜ:ʳ"
    },
    {
        word: "virtual",
        category: "ɜ:ʳ"
    },
    {
        word: "virtue",
        category: "ɜ:ʳ"
    },
    {
        word: "certify",
        category: "ɜ:ʳ"
    },
    {
        word: "pearl",
        category: "ɜ:ʳ"
    },
    {
        word: "curly",
        category: "ɜ:ʳ"
    },
    {
        word: "attorney",
        category: "ɜ:ʳ"
    },
    {
        word: "courteous",
        category: "ɜ:ʳ"
    },
    {
        word: "hit",
        category: "ɪ"
    },
    {
        word: "sitting",
        category: "ɪ"
    },
    {
        word: "begin",
        category: "ɪ"
    },
    {
        word: "big",
        category: "ɪ"
    },
    {
        word: "bit",
        category: "ɪ"
    },
    {
        word: "bring",
        category: "ɪ"
    },
    {
        word: "chips",
        category: "ɪ"
    },
    {
        word: "did",
        category: "ɪ"
    },
    {
        word: "different",
        category: "ɪ"
    },
    {
        word: "finish",
        category: "ɪ"
    },
    {
        word: "fish",
        category: "ɪ"
    },
    {
        word: "fit",
        category: "ɪ"
    },
    {
        word: "give",
        category: "ɪ"
    },
    {
        word: "hip",
        category: "ɪ"
    },
    {
        word: "interest",
        category: "ɪ"
    },
    {
        word: "issue",
        category: "ɪ"
    },
    {
        word: "kill",
        category: "ɪ"
    },
    {
        word: "kiss",
        category: "ɪ"
    },
    {
        word: "link",
        category: "ɪ"
    },
    {
        word: "lip",
        category: "ɪ"
    },
    {
        word: "liquid",
        category: "ɪ"
    },
    {
        word: "little",
        category: "ɪ"
    },
    {
        word: "quick",
        category: "ɪ"
    },
    {
        word: "since",
        category: "ɪ"
    },
    {
        word: "sing",
        category: "ɪ"
    },
    {
        word: "sit",
        category: "ɪ"
    },
    {
        word: "thick",
        category: "ɪ"
    },
    {
        word: "thin",
        category: "ɪ"
    },
    {
        word: "thing",
        category: "ɪ"
    },
    {
        word: "think",
        category: "ɪ"
    },
    {
        word: "this",
        category: "ɪ"
    },
    {
        word: "will",
        category: "ɪ"
    },
    {
        word: "win",
        category: "ɪ"
    },
    {
        word: "with",
        category: "ɪ"
    },
    {
        word: "crystal",
        category: "ɪ"
    },
    {
        word: "physics",
        category: "ɪ"
    },
    {
        word: "syllable",
        category: "ɪ"
    },
    {
        word: "sympathy",
        category: "ɪ"
    },
    {
        word: "system",
        category: "ɪ"
    },
    {
        word: "see",
        category: "i:"
    },
    {
        word: "heat",
        category: "i:"
    },
    {
        word: "appreciate",
        category: "i:"
    },
    {
        word: "equal",
        category: "i:"
    },
    {
        word: "even",
        category: "i:"
    },
    {
        word: "evening",
        category: "i:"
    },
    {
        word: "evil",
        category: "i:"
    },
    {
        word: "female",
        category: "i:"
    },
    {
        word: "frequent",
        category: "i:"
    },
    {
        word: "immediately",
        category: "i:"
    },
    {
        word: "legal",
        category: "i:"
    },
    {
        word: "meter",
        category: "i:"
    },
    {
        word: "previous",
        category: "i:"
    },
    {
        word: "procedure",
        category: "i:"
    },
    {
        word: "recent",
        category: "i:"
    },
    {
        word: "region",
        category: "i:"
    },
    {
        word: "secret",
        category: "i:"
    },
    {
        word: "senior",
        category: "i:"
    },
    {
        word: "sequence",
        category: "i:"
    },
    {
        word: "species",
        category: "i:"
    },
    {
        word: "vehicle",
        category: "i:"
    },
    {
        word: "athlete",
        category: "i:"
    },
    {
        word: "compete",
        category: "i:"
    },
    {
        word: "concrete",
        category: "i:"
    },
    {
        word: "delete",
        category: "i:"
    },
    {
        word: "extreme",
        category: "i:"
    },
    {
        word: "gene",
        category: "i:"
    },
    {
        word: "scene",
        category: "i:"
    },
    {
        word: "scheme",
        category: "i:"
    },
    {
        word: "theme",
        category: "i:"
    },
    {
        word: "these",
        category: "i:"
    },
    {
        word: "hot",
        category: "ɒ"
    },
    {
        word: "rock",
        category: "ɒ"
    },
    {
        word: "body",
        category: "ɒ"
    },
    {
        word: "box",
        category: "ɒ"
    },
    {
        word: "follow",
        category: "ɒ"
    },
    {
        word: "got",
        category: "ɒ"
    },
    {
        word: "involve",
        category: "ɒ"
    },
    {
        word: "job",
        category: "ɒ"
    },
    {
        word: "lot",
        category: "ɒ"
    },
    {
        word: "model",
        category: "ɒ"
    },
    {
        word: "obvious",
        category: "ɒ"
    },
    {
        word: "policy",
        category: "ɒ"
    },
    {
        word: "possible",
        category: "ɒ"
    },
    {
        word: "probably",
        category: "ɒ"
    },
    {
        word: "problem",
        category: "ɒ"
    },
    {
        word: "product",
        category: "ɒ"
    },
    {
        word: "shop",
        category: "ɒ"
    },
    {
        word: "top",
        category: "ɒ"
    },
    {
        word: "quality",
        category: "ɒ"
    },
    {
        word: "restaurant",
        category: "ɒ"
    },
    {
        word: "wad",
        category: "ɒ"
    },
    {
        word: "wander",
        category: "ɒ"
    },
    {
        word: "want",
        category: "ɒ"
    },
    {
        word: "wash",
        category: "ɒ"
    },
    {
        word: "watch",
        category: "ɒ"
    },
    {
        word: "knowledge",
        category: "ɒ"
    },
    {
        word: "call",
        category: "ɔ:"
    },
    {
        word: "four",
        category: "ɔ:"
    },
    {
        word: "abroad",
        category: "ɔ:"
    },
    {
        word: "broad",
        category: "ɔ:"
    },
    {
        word: "ought",
        category: "ɔ:"
    },
    {
        word: "thought",
        category: "ɔ:"
    },
    {
        word: "bought",
        category: "ɔ:"
    },
    {
        word: "brought",
        category: "ɔ:"
    },
    {
        word: "fought",
        category: "ɔ:"
    },
    {
        word: "sought",
        category: "ɔ:"
    },
    {
        word: "thought",
        category: "ɔ:"
    },
    {
        word: "water",
        category: "ɔ:"
    },
    {
        word: "almost",
        category: "ɔ:"
    },
    {
        word: "already",
        category: "ɔ:"
    },
    {
        word: "alter",
        category: "ɔ:"
    },
    {
        word: "always",
        category: "ɔ:"
    },
    {
        word: "chalk",
        category: "ɔ:"
    },
    {
        word: "false",
        category: "ɔ:"
    },
    {
        word: "salt",
        category: "ɔ:"
    },
    {
        word: "talk",
        category: "ɔ:"
    },
    {
        word: "walk",
        category: "ɔ:"
    },
    {
        word: "ball",
        category: "ɔ:"
    },
    {
        word: "fall",
        category: "ɔ:"
    },
    {
        word: "hall",
        category: "ɔ:"
    },
    {
        word: "mall",
        category: "ɔ:"
    },
    {
        word: "small",
        category: "ɔ:"
    },
    {
        word: "wall",
        category: "ɔ:"
    },
    {
        word: "dawn",
        category: "ɔ:"
    },
    {
        word: "flaw",
        category: "ɔ:"
    },
    {
        word: "hawk",
        category: "ɔ:"
    },
    {
        word: "jaw",
        category: "ɔ:"
    },
    {
        word: "law",
        category: "ɔ:"
    },
    {
        word: "lawn",
        category: "ɔ:"
    },
    {
        word: "raw",
        category: "ɔ:"
    },
    {
        word: "shawl",
        category: "ɔ:"
    },
    {
        word: "yawn",
        category: "ɔ:"
    },
    {
        word: "audiction",
        category: "ɔ:"
    },
    {
        word: "author",
        category: "ɔ:"
    },
    {
        word: "cause",
        category: "ɔ:"
    },
    {
        word: "clause",
        category: "ɔ:"
    },
    {
        word: "caught",
        category: "ɔ:"
    },
    {
        word: "taught",
        category: "ɔ:"
    },
    {
        word: "daughter",
        category: "ɔ:"
    },
    {
        word: "put",
        category: "ʊ"
    },
    {
        word: "could",
        category: "ʊ"
    },
    {
        word: "book",
        category: "ʊ"
    },
    {
        word: "cook",
        category: "ʊ"
    },
    {
        word: "foot",
        category: "ʊ"
    },
    {
        word: "good",
        category: "ʊ"
    },
    {
        word: "hood",
        category: "ʊ"
    },
    {
        word: "hook",
        category: "ʊ"
    },
    {
        word: "look",
        category: "ʊ"
    },
    {
        word: "shook",
        category: "ʊ"
    },
    {
        word: "stood",
        category: "ʊ"
    },
    {
        word: "took",
        category: "ʊ"
    },
    {
        word: "wood",
        category: "ʊ"
    },
    {
        word: "wool",
        category: "ʊ"
    },
    {
        word: "wolf",
        category: "ʊ"
    },
    {
        word: "woman",
        category: "ʊ"
    },
    {
        word: "would",
        category: "ʊ"
    },
    {
        word: "should",
        category: "ʊ"
    },
    {
        word: "bull",
        category: "ʊ"
    },
    {
        word: "bullet",
        category: "ʊ"
    },
    {
        word: "bully",
        category: "ʊ"
    },
    {
        word: "bush",
        category: "ʊ"
    },
    {
        word: "butcher",
        category: "ʊ"
    },
    {
        word: "cushion",
        category: "ʊ"
    },
    {
        word: "full",
        category: "ʊ"
    },
    {
        word: "push",
        category: "ʊ"
    },
    {
        word: "sugar",
        category: "ʊ"
    },
    {
        word: "brook",
        category: "ʊ"
    },
    {
        word: "crook",
        category: "ʊ"
    },
    {
        word: "soot",
        category: "ʊ"
    },
    {
        word: "blue",
        category: "u:"
    },
    {
        word: "blew",
        category: "u:"
    },
    {
        word: "chew",
        category: "u:"
    },
    {
        word: "crew",
        category: "u:"
    },
    {
        word: "drew",
        category: "u:"
    },
    {
        word: "screw",
        category: "u:"
    },
    {
        word: "threw",
        category: "u:"
    },
    {
        word: "approve",
        category: "u:"
    },
    {
        word: "approval",
        category: "u:"
    },
    {
        word: "improve",
        category: "u:"
    },
    {
        word: "lose",
        category: "u:"
    },
    {
        word: "move",
        category: "u:"
    },
    {
        word: "movie",
        category: "u:"
    },
    {
        word: "prove",
        category: "u:"
    },
    {
        word: "remove",
        category: "u:"
    },
    {
        word: "shoe",
        category: "u:"
    },
    {
        word: "tomb",
        category: "u:"
    },
    {
        word: "whose",
        category: "u:"
    },
    {
        word: "womb",
        category: "u:"
    },
    {
        word: "do",
        category: "u:"
    },
    {
        word: "two",
        category: "u:"
    },
    {
        word: "who",
        category: "u:"
    },
    {
        word: "group",
        category: "u:"
    },
    {
        word: "soup",
        category: "u:"
    },
    {
        word: "through",
        category: "u:"
    },
    {
        word: "you",
        category: "u:"
    },
    {
        word: "youth",
        category: "u:"
    },
    {
        word: "flu",
        category: "u:"
    },
    {
        word: "include",
        category: "u:"
    },
    {
        word: "rule",
        category: "u:"
    },
    {
        word: "glue",
        category: "u:"
    },
    {
        word: "sue",
        category: "u:"
    },
    {
        word: "true",
        category: "u:"
    },
    {
        word: "bruise",
        category: "u:"
    },
    {
        word: "cruise",
        category: "u:"
    },
    {
        word: "fruit",
        category: "u:"
    },
    {
        word: "part",
        category: "p"
    },
    {
        word: "pause",
        category: "p"
    },
    {
        word: "people",
        category: "p"
    },
    {
        word: "place",
        category: "p"
    },
    {
        word: "pocket",
        category: "p"
    },
    {
        word: "problem",
        category: "p"
    },
    {
        word: "public",
        category: "p"
    },
    {
        word: "put",
        category: "p"
    },
    {
        word: "appear",
        category: "p"
    },
    {
        word: "company",
        category: "p"
    },
    {
        word: "display",
        category: "p"
    },
    {
        word: "expect",
        category: "p"
    },
    {
        word: "improve",
        category: "p"
    },
    {
        word: "opinion",
        category: "p"
    },
    {
        word: "report",
        category: "p"
    },
    {
        word: "transport",
        category: "p"
    },
    {
        word: "develop",
        category: "p"
    },
    {
        word: "help",
        category: "p"
    },
    {
        word: "shape",
        category: "p"
    },
    {
        word: "shop",
        category: "p"
    },
    {
        word: "wipe",
        category: "p"
    },
    {
        word: "type",
        category: "p"
    },
    {
        word: "ball",
        category: "b"
    },
    {
        word: "bear",
        category: "b"
    },
    {
        word: "bird",
        category: "b"
    },
    {
        word: "black",
        category: "b"
    },
    {
        word: "blue",
        category: "b"
    },
    {
        word: "body",
        category: "b"
    },
    {
        word: "book",
        category: "b"
    },
    {
        word: "bring",
        category: "b"
    },
    {
        word: "brother",
        category: "b"
    },
    {
        word: "bull",
        category: "b"
    },
    {
        word: "busy",
        category: "b"
    },
    {
        word: "able",
        category: "b"
    },
    {
        word: "about",
        category: "b"
    },
    {
        word: "cabbage",
        category: "b"
    },
    {
        word: "double",
        category: "b"
    },
    {
        word: "number",
        category: "b"
    },
    {
        word: "problem",
        category: "b"
    },
    {
        word: "public",
        category: "b"
    },
    {
        word: "remember",
        category: "b"
    },
    {
        word: "subject",
        category: "b"
    },
    {
        word: "bomb",
        category: "b"
    },
    {
        word: "climb",
        category: "b"
    },
    {
        word: "club",
        category: "b"
    },
    {
        word: "disturb",
        category: "b"
    },
    {
        word: "globe",
        category: "b"
    },
    {
        word: "grab",
        category: "b"
    },
    {
        word: "job",
        category: "b"
    },
    {
        word: "pub",
        category: "b"
    },
    {
        word: "verb",
        category: "b"
    },
    {
        word: "web",
        category: "b"
    },
    {
        word: "think",
        category: "θ"
    },  {
        "category": "p",
        "word": "part"
      },
      {
        "category": "p",
        "word": "pause"
      },
      {
        "category": "p",
        "word": "people"
      },
      {
        "category": "p",
        "word": "place"
      },
      {
        "category": "p",
        "word": "pocket"
      },
      {
        "category": "p",
        "word": "problem"
      },
      {
        "category": "p",
        "word": "public"
      },
      {
        "category": "p",
        "word": "put"
      },
      {
        "category": "p",
        "word": "appear"
      },
      {
        "category": "p",
        "word": "company"
      },
      {
        "category": "p",
        "word": "display"
      },
      {
        "category": "p",
        "word": "expect"
      },
      {
        "category": "p",
        "word": "improve"
      },
      {
        "category": "p",
        "word": "opinion"
      },
      {
        "category": "p",
        "word": "report"
      },
      {
        "category": "p",
        "word": "transport"
      },
      {
        "category": "p",
        "word": "develop"
      },
      {
        "category": "p",
        "word": "help"
      },
      {
        "category": "p",
        "word": "hope"
      },
      {
        "category": "p",
        "word": "shape"
      },
      {
        "category": "p",
        "word": "shop"
      },
      {
        "category": "p",
        "word": "stop"
      },
      {
        "category": "p",
        "word": "type"
      },
      {
        "category": "p",
        "word": "wipe"
      },
      {
        "category": "b",
        "word": "ball"
      },
      {
        "category": "b",
        "word": "bear"
      },
      {
        "category": "b",
        "word": "bird"
      },
      {
        "category": "b",
        "word": "black"
      },
      {
        "category": "b",
        "word": "blue"
      },
      {
        "category": "b",
        "word": "body"
      },
      {
        "category": "b",
        "word": "book"
      },
      {
        "category": "b",
        "word": "bring"
      },
      {
        "category": "b",
        "word": "brother"
      },
      {
        "category": "b",
        "word": "bull"
      },
      {
        "category": "b",
        "word": "busy"
      },
      {
        "category": "b",
        "word": "able"
      },
      {
        "category": "b",
        "word": "about"
      },
      {
        "category": "b",
        "word": "cabbage"
      },
      {
        "category": "b",
        "word": "double"
      },
      {
        "category": "b",
        "word": "number"
      },
      {
        "category": "b",
        "word": "problem"
      },
      {
        "category": "b",
        "word": "public"
      },
      {
        "category": "b",
        "word": "rabbit"
      },
      {
        "category": "b",
        "word": "remember"
      },
      {
        "category": "b",
        "word": "subject"
      },
      {
        "category": "b",
        "word": "bomb"
      },
      {
        "category": "b",
        "word": "climb"
      },
      {
        "category": "b",
        "word": "club"
      },
      {
        "category": "b",
        "word": "disturb"
      },
      {
        "category": "b",
        "word": "globe"
      },
      {
        "category": "b",
        "word": "grab"
      },
      {
        "category": "b",
        "word": "job"
      },
      {
        "category": "b",
        "word": "pub"
      },
      {
        "category": "b",
        "word": "verb"
      },
      {
        "category": "b",
        "word": "web"
      },
      {
        "category": "t",
        "word": "take"
      },
      {
        "category": "t",
        "word": "talk"
      },
      {
        "category": "t",
        "word": "team"
      },
      {
        "category": "t",
        "word": "technology"
      },
      {
        "category": "t",
        "word": "tell"
      },
      {
        "category": "t",
        "word": "time"
      },
      {
        "category": "t",
        "word": "today"
      },
      {
        "category": "t",
        "word": "together"
      },
      {
        "category": "t",
        "word": "town"
      },
      {
        "category": "t",
        "word": "train"
      },
      {
        "category": "t",
        "word": "travel"
      },
      {
        "category": "t",
        "word": "try"
      },
      {
        "category": "t",
        "word": "turn"
      },
      {
        "category": "t",
        "word": "type"
      },
      {
        "category": "t",
        "word": "city"
      },
      {
        "category": "t",
        "word": "later"
      },
      {
        "category": "t",
        "word": "letter"
      },
      {
        "category": "t",
        "word": "matter"
      },
      {
        "category": "t",
        "word": "political"
      },
      {
        "category": "t",
        "word": "return"
      },
      {
        "category": "t",
        "word": "security"
      },
      {
        "category": "t",
        "word": "water"
      },
      {
        "category": "t",
        "word": "country"
      },
      {
        "category": "t",
        "word": "its"
      },
      {
        "category": "t",
        "word": "little"
      },
      {
        "category": "t",
        "word": "stand"
      },
      {
        "category": "t",
        "word": "still"
      },
      {
        "category": "t",
        "word": "stop"
      },
      {
        "category": "t",
        "word": "story"
      },
      {
        "category": "t",
        "word": "study"
      },
      {
        "category": "t",
        "word": "system"
      },
      {
        "category": "t",
        "word": "understand"
      },
      {
        "category": "t",
        "word": "about"
      },
      {
        "category": "t",
        "word": "but"
      },
      {
        "category": "t",
        "word": "different"
      },
      {
        "category": "t",
        "word": "get"
      },
      {
        "category": "t",
        "word": "great"
      },
      {
        "category": "t",
        "word": "government"
      },
      {
        "category": "t",
        "word": "just"
      },
      {
        "category": "t",
        "word": "last"
      },
      {
        "category": "t",
        "word": "lot"
      },
      {
        "category": "t",
        "word": "meet"
      },
      {
        "category": "t",
        "word": "next"
      },
      {
        "category": "t",
        "word": "part"
      },
      {
        "category": "t",
        "word": "point"
      },
      {
        "category": "t",
        "word": "put"
      },
      {
        "category": "t",
        "word": "want"
      },
      {
        "category": "t",
        "word": "what"
      },
      {
        "category": "t",
        "word": "write"
      },
      {
        "category": "t",
        "word": "asked"
      },
      {
        "category": "t",
        "word": "helped"
      },
      {
        "category": "t",
        "word": "laughed"
      },
      {
        "category": "t",
        "word": "passed"
      },
      {
        "category": "t",
        "word": "thanked"
      },
      {
        "category": "t",
        "word": "watched"
      },
      {
        "category": "d",
        "word": "daisy"
      },
      {
        "category": "d",
        "word": "day"
      },
      {
        "category": "d",
        "word": "deal"
      },
      {
        "category": "d",
        "word": "deer"
      },
      {
        "category": "d",
        "word": "development"
      },
      {
        "category": "d",
        "word": "different"
      },
      {
        "category": "d",
        "word": "dinosaur"
      },
      {
        "category": "d",
        "word": "dolphin"
      },
      {
        "category": "d",
        "word": "down"
      },
      {
        "category": "d",
        "word": "dress"
      },
      {
        "category": "d",
        "word": "duck"
      },
      {
        "category": "d",
        "word": "during"
      },
      {
        "category": "d",
        "word": "already"
      },
      {
        "category": "d",
        "word": "body"
      },
      {
        "category": "d",
        "word": "condition"
      },
      {
        "category": "d",
        "word": "consider"
      },
      {
        "category": "d",
        "word": "idea"
      },
      {
        "category": "d",
        "word": "ladder"
      },
      {
        "category": "d",
        "word": "model"
      },
      {
        "category": "d",
        "word": "order"
      },
      {
        "category": "d",
        "word": "product"
      },
      {
        "category": "d",
        "word": "study"
      },
      {
        "category": "d",
        "word": "today"
      },
      {
        "category": "d",
        "word": "under"
      },
      {
        "category": "d",
        "word": "bad"
      },
      {
        "category": "d",
        "word": "bed"
      },
      {
        "category": "d",
        "word": "child"
      },
      {
        "category": "d",
        "word": "feed"
      },
      {
        "category": "d",
        "word": "find"
      },
      {
        "category": "d",
        "word": "God"
      },
      {
        "category": "d",
        "word": "good"
      },
      {
        "category": "d",
        "word": "hide"
      },
      {
        "category": "d",
        "word": "include"
      },
      {
        "category": "d",
        "word": "mood"
      },
      {
        "category": "d",
        "word": "need"
      },
      {
        "category": "d",
        "word": "old"
      },
      {
        "category": "d",
        "word": "provide"
      },
      {
        "category": "d",
        "word": "side"
      },
      {
        "category": "d",
        "word": "wood"
      },
      {
        "category": "d",
        "word": "upside"
      },
      {
        "category": "d",
        "word": "down"
      },
      {
        "category": "d",
        "word": "headdress"
      },
      {
        "category": "d",
        "word": "midday"
      },
      {
        "category": "k",
        "word": "call"
      },
      {
        "category": "k",
        "word": "clock"
      },
      {
        "category": "k",
        "word": "coat"
      },
      {
        "category": "k",
        "word": "come"
      },
      {
        "category": "k",
        "word": "cross"
      },
      {
        "category": "k",
        "word": "cut"
      },
      {
        "category": "k",
        "word": "economy"
      },
      {
        "category": "k",
        "word": "education"
      },
      {
        "category": "k",
        "word": "fact"
      },
      {
        "category": "k",
        "word": "include"
      },
      {
        "category": "k",
        "word": "secret"
      },
      {
        "category": "k",
        "word": "security"
      },
      {
        "category": "k",
        "word": "economic"
      },
      {
        "category": "k",
        "word": "music"
      },
      {
        "category": "k",
        "word": "public"
      },
      {
        "category": "k",
        "word": "specific"
      },
      {
        "category": "k",
        "word": "account"
      },
      {
        "category": "k",
        "word": "accuse"
      },
      {
        "category": "k",
        "word": "occasion"
      },
      {
        "category": "k",
        "word": "occupy"
      },
      {
        "category": "k",
        "word": "occur"
      },
      {
        "category": "k",
        "word": "ankle"
      },
      {
        "category": "k",
        "word": "bake"
      },
      {
        "category": "k",
        "word": "book"
      },
      {
        "category": "k",
        "word": "break"
      },
      {
        "category": "k",
        "word": "dark"
      },
      {
        "category": "k",
        "word": "like"
      },
      {
        "category": "k",
        "word": "look"
      },
      {
        "category": "k",
        "word": "oak"
      },
      {
        "category": "k",
        "word": "shake"
      },
      {
        "category": "k",
        "word": "shark"
      },
      {
        "category": "k",
        "word": "sink"
      },
      {
        "category": "k",
        "word": "take"
      },
      {
        "category": "k",
        "word": "walk"
      },
      {
        "category": "k",
        "word": "week"
      },
      {
        "category": "k",
        "word": "weekly"
      },
      {
        "category": "k",
        "word": "work"
      },
      {
        "category": "k",
        "word": "donkey"
      },
      {
        "category": "k",
        "word": "keep"
      },
      {
        "category": "k",
        "word": "kill"
      },
      {
        "category": "k",
        "word": "kind"
      },
      {
        "category": "k",
        "word": "kiss"
      },
      {
        "category": "k",
        "word": "kitchen"
      },
      {
        "category": "k",
        "word": "skin"
      },
      {
        "category": "k",
        "word": "speaker"
      },
      {
        "category": "k",
        "word": "market"
      },
      {
        "category": "k",
        "word": "worker"
      },
      {
        "category": "k",
        "word": "attack"
      },
      {
        "category": "k",
        "word": "black"
      },
      {
        "category": "k",
        "word": "check"
      },
      {
        "category": "k",
        "word": "lock"
      },
      {
        "category": "k",
        "word": "luck"
      },
      {
        "category": "k",
        "word": "rock"
      },
      {
        "category": "k",
        "word": "sock"
      },
      {
        "category": "k",
        "word": "shock"
      },
      {
        "category": "k",
        "word": "sick"
      },
      {
        "category": "k",
        "word": "stick"
      },
      {
        "category": "k",
        "word": "thick"
      },
      {
        "category": "k",
        "word": "ticket"
      },
      {
        "category": "k",
        "word": "haiku"
      },
      {
        "category": "k",
        "word": "kangaroo"
      },
      {
        "category": "k",
        "word": "Kansas"
      },
      {
        "category": "k",
        "word": "karate"
      },
      {
        "category": "k",
        "word": "koala"
      },
      {
        "category": "k",
        "word": "Korea"
      },
      {
        "category": "k",
        "word": "okay"
      },
      {
        "category": "k",
        "word": "Oklahoma"
      },
      {
        "category": "k",
        "word": "remarkable"
      },
      {
        "category": "k",
        "word": "attack"
      },
      {
        "category": "k",
        "word": "black"
      },
      {
        "category": "k",
        "word": "check"
      },
      {
        "category": "k",
        "word": "lock"
      },
      {
        "category": "k",
        "word": "luck"
      },
      {
        "category": "k",
        "word": "rock"
      },
      {
        "category": "k",
        "word": "sock"
      },
      {
        "category": "k",
        "word": "shock"
      },
      {
        "category": "k",
        "word": "sick"
      },
      {
        "category": "k",
        "word": "stick"
      },
      {
        "category": "k",
        "word": "thick"
      },
      {
        "category": "k",
        "word": "ticket"
      },
      {
        "category": "k",
        "word": "ache"
      },
      {
        "category": "k",
        "word": "archive"
      },
      {
        "category": "k",
        "word": "chaos"
      },
      {
        "category": "k",
        "word": "chemical"
      },
      {
        "category": "k",
        "word": "chemist"
      },
      {
        "category": "k",
        "word": "chemistry"
      },
      {
        "category": "k",
        "word": "psychology"
      },
      {
        "category": "k",
        "word": "stomach"
      },
      {
        "category": "k",
        "word": "technician"
      },
      {
        "category": "k",
        "word": "technology"
      },
      {
        "category": "k",
        "word": "quarter"
      },
      {
        "category": "k",
        "word": "liquor"
      },
      {
        "category": "k",
        "word": "technique"
      },
      {
        "category": "k",
        "word": "conquer"
      },
      {
        "category": "k",
        "word": "acquaintance"
      },
      {
        "category": "k",
        "word": "acquire"
      },
      {
        "category": "k",
        "word": "cake"
      },
      {
        "category": "k",
        "word": "click"
      },
      {
        "category": "k",
        "word": "clock"
      },
      {
        "category": "k",
        "word": "cook"
      },
      {
        "category": "k",
        "word": "cork"
      },
      {
        "category": "k",
        "word": "crack"
      },
      {
        "category": "k",
        "word": "crook"
      },
      {
        "category": "k",
        "word": "kick"
      },
      {
        "category": "k",
        "word": "quick"
      },
      {
        "category": "k",
        "word": "box"
      },
      {
        "category": "k",
        "word": "complex"
      },
      {
        "category": "k",
        "word": "fix"
      },
      {
        "category": "k",
        "word": "matrix"
      },
      {
        "category": "k",
        "word": "mix"
      },
      {
        "category": "k",
        "word": "next"
      },
      {
        "category": "k",
        "word": "relax"
      },
      {
        "category": "k",
        "word": "tax"
      },
      {
        "category": "k",
        "word": "books"
      },
      {
        "category": "k",
        "word": "breaks"
      },
      {
        "category": "k",
        "word": "cooks"
      },
      {
        "category": "k",
        "word": "looks"
      },
      {
        "category": "k",
        "word": "seeks"
      },
      {
        "category": "k",
        "word": "thanks"
      },
      {
        "category": "k",
        "word": "walks"
      },
      {
        "category": "k",
        "word": "weeks"
      },
      {
        "category": "k",
        "word": "attacks"
      },
      {
        "category": "k",
        "word": "checks"
      },
      {
        "category": "k",
        "word": "clocks"
      },
      {
        "category": "k",
        "word": "locks"
      },
      {
        "category": "k",
        "word": "packs"
      },
      {
        "category": "k",
        "word": "rocks"
      },
      {
        "category": "k",
        "word": "shocks"
      },
      {
        "category": "k",
        "word": "critics"
      },
      {
        "category": "k",
        "word": "mathematics"
      },
      {
        "category": "k",
        "word": "plastics"
      },
      {
        "category": "k",
        "word": "politics"
      },
      {
        "category": "k",
        "word": "statistics"
      },
      {
        "category": "k",
        "word": "topics"
      },
      {
        "category": "k",
        "word": "matriarchs"
      },
      {
        "category": "k",
        "word": "monarchs"
      },
      {
        "category": "k",
        "word": "patriarchs"
      },
      {
        "category": "k",
        "word": "stomachs"
      },
      {
        "category": "g",
        "word": "game"
      },
      {
        "category": "g",
        "word": "garden"
      },
      {
        "category": "g",
        "word": "gave"
      },
      {
        "category": "g",
        "word": "gear"
      },
      {
        "category": "g",
        "word": "get"
      },
      {
        "category": "g",
        "word": "ghost"
      },
      {
        "category": "g",
        "word": "girl"
      },
      {
        "category": "g",
        "word": "give"
      },
      {
        "category": "g",
        "word": "go"
      },
      {
        "category": "g",
        "word": "good"
      },
      {
        "category": "g",
        "word": "got"
      },
      {
        "category": "g",
        "word": "grant"
      },
      {
        "category": "g",
        "word": "grass"
      },
      {
        "category": "g",
        "word": "gray"
      },
      {
        "category": "g",
        "word": "great"
      },
      {
        "category": "g",
        "word": "green"
      },
      {
        "category": "g",
        "word": "grey"
      },
      {
        "category": "g",
        "word": "group"
      },
      {
        "category": "g",
        "word": "guess"
      },
      {
        "category": "g",
        "word": "guitar"
      },
      {
        "category": "g",
        "word": "bag"
      },
      {
        "category": "g",
        "word": "big"
      },
      {
        "category": "g",
        "word": "bug"
      },
      {
        "category": "g",
        "word": "dialog"
      },
      {
        "category": "g",
        "word": "dialogue"
      },
      {
        "category": "g",
        "word": "dog"
      },
      {
        "category": "g",
        "word": "drag"
      },
      {
        "category": "g",
        "word": "drug"
      },
      {
        "category": "g",
        "word": "egg"
      },
      {
        "category": "g",
        "word": "flag"
      },
      {
        "category": "g",
        "word": "fog"
      },
      {
        "category": "g",
        "word": "leg"
      },
      {
        "category": "g",
        "word": "log"
      },
      {
        "category": "g",
        "word": "pig"
      },
      {
        "category": "g",
        "word": "again"
      },
      {
        "category": "g",
        "word": "ago"
      },
      {
        "category": "g",
        "word": "agree"
      },
      {
        "category": "g",
        "word": "begin"
      },
      {
        "category": "g",
        "word": "figure"
      },
      {
        "category": "g",
        "word": "luggage"
      },
      {
        "category": "g",
        "word": "organisation"
      },
      {
        "category": "g",
        "word": "organization"
      },
      {
        "category": "g",
        "word": "program"
      },
      {
        "category": "g",
        "word": "programme"
      },
      {
        "category": "g",
        "word": "regard"
      },
      {
        "category": "g",
        "word": "struggle"
      },
      {
        "category": "g",
        "word": "target"
      },
      {
        "category": "g",
        "word": "together"
      },
      {
        "category": "g",
        "word": "auxiliary"
      },
      {
        "category": "g",
        "word": "exam"
      },
      {
        "category": "g",
        "word": "example"
      },
      {
        "category": "g",
        "word": "exhibit"
      },
      {
        "category": "g",
        "word": "exhilarating"
      },
      {
        "category": "g",
        "word": "exit"
      },
      {
        "category": "g",
        "word": "disgusting"
      },
      {
        "category": "g",
        "word": "disguise"
      },
      {
        "category": "g",
        "word": "disgrace"
      },
      {
        "category": "f",
        "word": "face"
      },
      {
        "category": "f",
        "word": "fact"
      },
      {
        "category": "f",
        "word": "fail"
      },
      {
        "category": "f",
        "word": "fall"
      },
      {
        "category": "f",
        "word": "family"
      },
      {
        "category": "f",
        "word": "far"
      },
      {
        "category": "f",
        "word": "feel"
      },
      {
        "category": "f",
        "word": "few"
      },
      {
        "category": "f",
        "word": "fight"
      },
      {
        "category": "f",
        "word": "find"
      },
      {
        "category": "f",
        "word": "first"
      },
      {
        "category": "f",
        "word": "follow"
      },
      {
        "category": "f",
        "word": "for"
      },
      {
        "category": "f",
        "word": "forget"
      },
      {
        "category": "f",
        "word": "form"
      },
      {
        "category": "f",
        "word": "friend"
      },
      {
        "category": "f",
        "word": "from"
      },
      {
        "category": "f",
        "word": "belief"
      },
      {
        "category": "f",
        "word": "brief"
      },
      {
        "category": "f",
        "word": "chief"
      },
      {
        "category": "f",
        "word": "half"
      },
      {
        "category": "f",
        "word": "if"
      },
      {
        "category": "f",
        "word": "knife"
      },
      {
        "category": "f",
        "word": "life"
      },
      {
        "category": "f",
        "word": "off"
      },
      {
        "category": "f",
        "word": "relief"
      },
      {
        "category": "f",
        "word": "safe"
      },
      {
        "category": "f",
        "word": "self"
      },
      {
        "category": "f",
        "word": "staff"
      },
      {
        "category": "f",
        "word": "stuff"
      },
      {
        "category": "f",
        "word": "wife"
      },
      {
        "category": "f",
        "word": "after"
      },
      {
        "category": "f",
        "word": "before"
      },
      {
        "category": "f",
        "word": "benefit"
      },
      {
        "category": "f",
        "word": "different"
      },
      {
        "category": "f",
        "word": "difficult"
      },
      {
        "category": "f",
        "word": "effect"
      },
      {
        "category": "f",
        "word": "information"
      },
      {
        "category": "f",
        "word": "offer"
      },
      {
        "category": "f",
        "word": "office"
      },
      {
        "category": "f",
        "word": "often"
      },
      {
        "category": "f",
        "word": "sulfur"
      },
      {
        "category": "f",
        "word": "therefore"
      },
      {
        "category": "f",
        "word": "cough"
      },
      {
        "category": "f",
        "word": "enough"
      },
      {
        "category": "f",
        "word": "laugh"
      },
      {
        "category": "f",
        "word": "laughter"
      },
      {
        "category": "f",
        "word": "rough"
      },
      {
        "category": "f",
        "word": "tough"
      },
      {
        "category": "f",
        "word": "atmosphere"
      },
      {
        "category": "f",
        "word": "phase"
      },
      {
        "category": "f",
        "word": "philosophy"
      },
      {
        "category": "f",
        "word": "phonetics"
      },
      {
        "category": "f",
        "word": "photograph"
      },
      {
        "category": "f",
        "word": "phrase"
      },
      {
        "category": "f",
        "word": "physical"
      },
      {
        "category": "f",
        "word": "physics"
      },
      {
        "category": "f",
        "word": "telephone"
      },
      {
        "category": "v",
        "word": "valley"
      },
      {
        "category": "v",
        "word": "value"
      },
      {
        "category": "v",
        "word": "van"
      },
      {
        "category": "v",
        "word": "variable"
      },
      {
        "category": "v",
        "word": "vary"
      },
      {
        "category": "v",
        "word": "vast"
      },
      {
        "category": "v",
        "word": "vegetable"
      },
      {
        "category": "v",
        "word": "vehicle"
      },
      {
        "category": "v",
        "word": "verb"
      },
      {
        "category": "v",
        "word": "version"
      },
      {
        "category": "v",
        "word": "very"
      },
      {
        "category": "v",
        "word": "veteran"
      },
      {
        "category": "v",
        "word": "victim"
      },
      {
        "category": "v",
        "word": "victory"
      },
      {
        "category": "v",
        "word": "view"
      },
      {
        "category": "v",
        "word": "village"
      },
      {
        "category": "v",
        "word": "virus"
      },
      {
        "category": "v",
        "word": "vision"
      },
      {
        "category": "v",
        "word": "visit"
      },
      {
        "category": "v",
        "word": "voice"
      },
      {
        "category": "v",
        "word": "vote"
      },
      {
        "category": "v",
        "word": "valley"
      },
      {
        "category": "v",
        "word": "value"
      },
      {
        "category": "v",
        "word": "van"
      },
      {
        "category": "v",
        "word": "variable"
      },
      {
        "category": "v",
        "word": "vary"
      },
      {
        "category": "v",
        "word": "vast"
      },
      {
        "category": "v",
        "word": "vegetable"
      },
      {
        "category": "v",
        "word": "vehicle"
      },
      {
        "category": "v",
        "word": "verb"
      },
      {
        "category": "v",
        "word": "version"
      },
      {
        "category": "v",
        "word": "very"
      },
      {
        "category": "v",
        "word": "veteran"
      },
      {
        "category": "v",
        "word": "victim"
      },
      {
        "category": "v",
        "word": "victory"
      },
      {
        "category": "v",
        "word": "view"
      },
      {
        "category": "v",
        "word": "village"
      },
      {
        "category": "v",
        "word": "virus"
      },
      {
        "category": "v",
        "word": "vision"
      },
      {
        "category": "v",
        "word": "visit"
      },
      {
        "category": "v",
        "word": "voice"
      },
      {
        "category": "v",
        "word": "vote"
      },
      {
        "category": "v",
        "word": "activity"
      },
      {
        "category": "v",
        "word": "available"
      },
      {
        "category": "v",
        "word": "cover"
      },
      {
        "category": "v",
        "word": "develop"
      },
      {
        "category": "v",
        "word": "even"
      },
      {
        "category": "v",
        "word": "ever"
      },
      {
        "category": "v",
        "word": "evidence"
      },
      {
        "category": "v",
        "word": "government"
      },
      {
        "category": "v",
        "word": "however"
      },
      {
        "category": "v",
        "word": "individual"
      },
      {
        "category": "v",
        "word": "investment"
      },
      {
        "category": "v",
        "word": "level"
      },
      {
        "category": "v",
        "word": "never"
      },
      {
        "category": "v",
        "word": "over"
      },
      {
        "category": "v",
        "word": "provide"
      },
      {
        "category": "v",
        "word": "service"
      },
      {
        "category": "v",
        "word": "seven"
      },
      {
        "category": "v",
        "word": "travel"
      },
      {
        "category": "v",
        "word": "several"
      },
      {
        "category": "θ",
        "word": "theatre"
      },
      {
        "category": "θ",
        "word": "theme"
      },
      {
        "category": "θ",
        "word": "theory"
      },
      {
        "category": "θ",
        "word": "therapy"
      },
      {
        "category": "θ",
        "word": "thick"
      },
      {
        "category": "θ",
        "word": "thin"
      },
      {
        "category": "θ",
        "word": "thing"
      },
      {
        "category": "θ",
        "word": "think"
      },
      {
        "category": "θ",
        "word": "thirteen"
      },
      {
        "category": "θ",
        "word": "thirst"
      },
      {
        "category": "θ",
        "word": "thirty"
      },
      {
        "category": "θ",
        "word": "thorough"
      },
      {
        "category": "θ",
        "word": "thought"
      },
      {
        "category": "θ",
        "word": "thousand"
      },
      {
        "category": "θ",
        "word": "threat"
      },
      {
        "category": "θ",
        "word": "three"
      },
      {
        "category": "θ",
        "word": "threw"
      },
      {
        "category": "θ",
        "word": "throat"
      },
      {
        "category": "θ",
        "word": "through"
      },
      {
        "category": "θ",
        "word": "throw"
      },
      {
        "category": "θ",
        "word": "thumb"
      },
      {
        "category": "θ",
        "word": "Thursday"
      },
      {
        "category": "θ",
        "word": "bath"
      },
      {
        "category": "θ",
        "word": "beneath"
      },
      {
        "category": "θ",
        "word": "birth"
      },
      {
        "category": "θ",
        "word": "both"
      },
      {
        "category": "θ",
        "word": "breath"
      },
      {
        "category": "θ",
        "word": "death"
      },
      {
        "category": "θ",
        "word": "depth"
      },
      {
        "category": "θ",
        "word": "earth"
      },
      {
        "category": "θ",
        "word": "faith"
      },
      {
        "category": "θ",
        "word": "forth"
      },
      {
        "category": "θ",
        "word": "growth"
      },
      {
        "category": "θ",
        "word": "health"
      },
      {
        "category": "θ",
        "word": "length"
      },
      {
        "category": "θ",
        "word": "math"
      },
      {
        "category": "θ",
        "word": "month"
      },
      {
        "category": "θ",
        "word": "mouth"
      },
      {
        "category": "θ",
        "word": "north"
      },
      {
        "category": "θ",
        "word": "path"
      },
      {
        "category": "θ",
        "word": "south"
      },
      {
        "category": "θ",
        "word": "strength"
      },
      {
        "category": "θ",
        "word": "teeth"
      },
      {
        "category": "θ",
        "word": "tooth"
      },
      {
        "category": "θ",
        "word": "truth"
      },
      {
        "category": "θ",
        "word": "wealth"
      },
      {
        "category": "θ",
        "word": "worth"
      },
      {
        "category": "θ",
        "word": "youth"
      },
      {
        "category": "θ",
        "word": "anything"
      },
      {
        "category": "θ",
        "word": "everything"
      },
      {
        "category": "θ",
        "word": "nothing"
      },
      {
        "category": "θ",
        "word": "something"
      },
      {
        "category": "θ",
        "word": "athlete"
      },
      {
        "category": "θ",
        "word": "author"
      },
      {
        "category": "θ",
        "word": "Dorothy"
      },
      {
        "category": "θ",
        "word": "Ethiopia"
      },
      {
        "category": "θ",
        "word": "ethnic"
      },
      {
        "category": "θ",
        "word": "healthy"
      },
      {
        "category": "θ",
        "word": "hypothesis"
      },
      {
        "category": "θ",
        "word": "Martha"
      },
      {
        "category": "θ",
        "word": "mathematics"
      },
      {
        "category": "θ",
        "word": "maths"
      },
      {
        "category": "θ",
        "word": "method"
      },
      {
        "category": "θ",
        "word": "monthly"
      },
      {
        "category": "θ",
        "word": "strengthen"
      },
      {
        "category": "θ",
        "word": "wealthy"
      },
      {
        "category": "θ",
        "word": "baths"
      },
      {
        "category": "θ",
        "word": "oaths"
      },
      {
        "category": "θ",
        "word": "truths"
      },
      {
        "category": "θ",
        "word": "wreaths"
      },
      {
        "category": "ð",
        "word": "than"
      },
      {
        "category": "ð",
        "word": "that"
      },
      {
        "category": "ð",
        "word": "the"
      },
      {
        "category": "ð",
        "word": "their"
      },
      {
        "category": "ð",
        "word": "them"
      },
      {
        "category": "ð",
        "word": "then"
      },
      {
        "category": "ð",
        "word": "there"
      },
      {
        "category": "ð",
        "word": "these"
      },
      {
        "category": "ð",
        "word": "they"
      },
      {
        "category": "ð",
        "word": "this"
      },
      {
        "category": "ð",
        "word": "those"
      },
      {
        "category": "ð",
        "word": "though"
      },
      {
        "category": "ð",
        "word": "thus"
      },
      {
        "category": "ð",
        "word": "although"
      },
      {
        "category": "ð",
        "word": "another"
      },
      {
        "category": "ð",
        "word": "either"
      },
      {
        "category": "ð",
        "word": "neither"
      },
      {
        "category": "ð",
        "word": "other"
      },
      {
        "category": "ð",
        "word": "rather"
      },
      {
        "category": "ð",
        "word": "together"
      },
      {
        "category": "ð",
        "word": "whether"
      },
      {
        "category": "ð",
        "word": "within"
      },
      {
        "category": "ð",
        "word": "bother"
      },
      {
        "category": "ð",
        "word": "brother"
      },
      {
        "category": "ð",
        "word": "clothing"
      },
      {
        "category": "ð",
        "word": "father"
      },
      {
        "category": "ð",
        "word": "farther"
      },
      {
        "category": "ð",
        "word": "feather"
      },
      {
        "category": "ð",
        "word": "further"
      },
      {
        "category": "ð",
        "word": "gather"
      },
      {
        "category": "ð",
        "word": "leather"
      },
      {
        "category": "ð",
        "word": "mother"
      },
      {
        "category": "ð",
        "word": "Netherlands"
      },
      {
        "category": "ð",
        "word": "northern"
      },
      {
        "category": "ð",
        "word": "rhythm"
      },
      {
        "category": "ð",
        "word": "southern"
      },
      {
        "category": "ð",
        "word": "with"
      },
      {
        "category": "ð",
        "word": "breathe"
      },
      {
        "category": "ð",
        "word": "smooth"
      },
      {
        "category": "ð",
        "word": "baths"
      },
      {
        "category": "ð",
        "word": "mouths"
      },
      {
        "category": "ð",
        "word": "paths"
      },
      {
        "category": "ð",
        "word": "youths"
      },
      {
        "category": "c",
        "word": "celebrate"
      },
      {
        "category": "c",
        "word": "cell"
      },
      {
        "category": "c",
        "word": "cent"
      },
      {
        "category": "c",
        "word": "center"
      },
      {
        "category": "c",
        "word": "century"
      },
      {
        "category": "c",
        "word": "certainly"
      },
      {
        "category": "c",
        "word": "cigarette"
      },
      {
        "category": "c",
        "word": "circle"
      },
      {
        "category": "c",
        "word": "circumstance"
      },
      {
        "category": "c",
        "word": "citizen"
      },
      {
        "category": "c",
        "word": "city"
      },
      {
        "category": "c",
        "word": "civil"
      },
      {
        "category": "c",
        "word": "cycle"
      },
      {
        "category": "c",
        "word": "sad"
      },
      {
        "category": "c",
        "word": "sale"
      },
      {
        "category": "c",
        "word": "same"
      },
      {
        "category": "c",
        "word": "say"
      },
      {
        "category": "c",
        "word": "scar"
      },
      {
        "category": "c",
        "word": "school"
      },
      {
        "category": "c",
        "word": "sea"
      },
      {
        "category": "c",
        "word": "seat"
      },
      {
        "category": "c",
        "word": "second"
      },
      {
        "category": "c",
        "word": "see"
      },
      {
        "category": "c",
        "word": "sell"
      },
      {
        "category": "c",
        "word": "send"
      },
      {
        "category": "c",
        "word": "sense"
      },
      {
        "category": "c",
        "word": "service"
      },
      {
        "category": "c",
        "word": "set"
      },
      {
        "category": "c",
        "word": "several"
      },
      {
        "category": "c",
        "word": "side"
      },
      {
        "category": "c",
        "word": "sign"
      },
      {
        "category": "c",
        "word": "since"
      },
      {
        "category": "c",
        "word": "sing"
      },
      {
        "category": "c",
        "word": "sink"
      },
      {
        "category": "c",
        "word": "sit"
      },
      {
        "category": "c",
        "word": "ski"
      },
      {
        "category": "c",
        "word": "sky"
      },
      {
        "category": "c",
        "word": "sleep"
      },
      {
        "category": "c",
        "word": "small"
      },
      {
        "category": "c",
        "word": "smile"
      },
      {
        "category": "c",
        "word": "sneeze"
      },
      {
        "category": "c",
        "word": "soap"
      },
      {
        "category": "c",
        "word": "social"
      },
      {
        "category": "c",
        "word": "some"
      },
      {
        "category": "c",
        "word": "song"
      },
      {
        "category": "c",
        "word": "soon"
      },
      {
        "category": "c",
        "word": "sort"
      },
      {
        "category": "c",
        "word": "sound"
      },
      {
        "category": "c",
        "word": "speak"
      },
      {
        "category": "c",
        "word": "spend"
      },
      {
        "category": "c",
        "word": "squeeze"
      },
      {
        "category": "c",
        "word": "staff"
      },
      {
        "category": "c",
        "word": "stand"
      },
      {
        "category": "c",
        "word": "start"
      },
      {
        "category": "c",
        "word": "stay"
      },
      {
        "category": "c",
        "word": "stop"
      },
      {
        "category": "c",
        "word": "strong"
      },
      {
        "category": "c",
        "word": "study"
      },
      {
        "category": "c",
        "word": "suggest"
      },
      {
        "category": "c",
        "word": "suit"
      },
      {
        "category": "c",
        "word": "sun"
      },
      {
        "category": "c",
        "word": "swim"
      },
      {
        "category": "c",
        "word": "swing"
      },
      {
        "category": "c",
        "word": "symbol"
      },
      {
        "category": "c",
        "word": "system"
      },
      {
        "category": "c",
        "word": "experience"
      },
      {
        "category": "c",
        "word": "face"
      },
      {
        "category": "c",
        "word": "ice"
      },
      {
        "category": "c",
        "word": "nice"
      },
      {
        "category": "c",
        "word": "once"
      },
      {
        "category": "c",
        "word": "place"
      },
      {
        "category": "c",
        "word": "price"
      },
      {
        "category": "c",
        "word": "service"
      },
      {
        "category": "c",
        "word": "since"
      },
      {
        "category": "c",
        "word": "twice"
      },
      {
        "category": "c",
        "word": "base"
      },
      {
        "category": "c",
        "word": "case"
      },
      {
        "category": "c",
        "word": "course"
      },
      {
        "category": "c",
        "word": "horse"
      },
      {
        "category": "c",
        "word": "house"
      },
      {
        "category": "c",
        "word": "increase"
      },
      {
        "category": "c",
        "word": "loose"
      },
      {
        "category": "c",
        "word": "nurse"
      },
      {
        "category": "c",
        "word": "sense"
      },
      {
        "category": "c",
        "word": "basis"
      },
      {
        "category": "c",
        "word": "bus"
      },
      {
        "category": "c",
        "word": "focus"
      },
      {
        "category": "c",
        "word": "gas"
      },
      {
        "category": "c",
        "word": "perhaps"
      },
      {
        "category": "c",
        "word": "politics"
      },
      {
        "category": "c",
        "word": "previous"
      },
      {
        "category": "c",
        "word": "this"
      },
      {
        "category": "c",
        "word": "various"
      },
      {
        "category": "c",
        "word": "yes"
      },
      {
        "category": "c",
        "word": "across"
      },
      {
        "category": "c",
        "word": "business"
      },
      {
        "category": "c",
        "word": "class"
      },
      {
        "category": "c",
        "word": "kiss"
      },
      {
        "category": "c",
        "word": "less"
      },
      {
        "category": "c",
        "word": "miss"
      },
      {
        "category": "c",
        "word": "pass"
      },
      {
        "category": "c",
        "word": "process"
      },
      {
        "category": "c",
        "word": "waltz"
      },
      {
        "category": "c",
        "word": "ritz"
      },
      {
        "category": "c",
        "word": "scene"
      },
      {
        "category": "c",
        "word": "scythe"
      },
      {
        "category": "c",
        "word": "science"
      },
      {
        "category": "c",
        "word": "psych"
      },
      {
        "category": "c",
        "word": "psalm"
      },
      {
        "category": "c",
        "word": "accent"
      },
      {
        "category": "c",
        "word": "December"
      },
      {
        "category": "c",
        "word": "decent"
      },
      {
        "category": "c",
        "word": "decimal"
      },
      {
        "category": "c",
        "word": "receive"
      },
      {
        "category": "c",
        "word": "reception"
      },
      {
        "category": "c",
        "word": "recent"
      },
      {
        "category": "c",
        "word": "also"
      },
      {
        "category": "c",
        "word": "ask"
      },
      {
        "category": "c",
        "word": "best"
      },
      {
        "category": "c",
        "word": "just"
      },
      {
        "category": "c",
        "word": "past"
      },
      {
        "category": "c",
        "word": "person"
      },
      {
        "category": "c",
        "word": "question"
      },
      {
        "category": "c",
        "word": "research"
      },
      {
        "category": "c",
        "word": "task"
      },
      {
        "category": "c",
        "word": "west"
      },
      {
        "category": "c",
        "word": "associate"
      },
      {
        "category": "c",
        "word": "assume"
      },
      {
        "category": "c",
        "word": "essential"
      },
      {
        "category": "c",
        "word": "lesson"
      },
      {
        "category": "c",
        "word": "necessary"
      },
      {
        "category": "c",
        "word": "message"
      },
      {
        "category": "c",
        "word": "possible"
      },
      {
        "category": "c",
        "word": "pretzel"
      },
      {
        "category": "c",
        "word": "ritzy"
      },
      {
        "category": "c",
        "word": "approximately"
      },
      {
        "category": "c",
        "word": "context"
      },
      {
        "category": "c",
        "word": "example"
      },
      {
        "category": "c",
        "word": "experience"
      },
      {
        "category": "c",
        "word": "expect"
      },
      {
        "category": "c",
        "word": "next"
      },
      {
        "category": "c",
        "word": "taxi"
      },
      {
        "category": "c",
        "word": "text"
      },
      {
        "category": "z",
        "word": "zapping"
      },
      {
        "category": "z",
        "word": "zebra"
      },
      {
        "category": "z",
        "word": "zero"
      },
      {
        "category": "z",
        "word": "zone"
      },
      {
        "category": "z",
        "word": "zoo"
      },
      {
        "category": "z",
        "word": "amaze"
      },
      {
        "category": "z",
        "word": "booze"
      },
      {
        "category": "z",
        "word": "buzz"
      },
      {
        "category": "z",
        "word": "breeze"
      },
      {
        "category": "z",
        "word": "freeze"
      },
      {
        "category": "z",
        "word": "gaze"
      },
      {
        "category": "z",
        "word": "prize"
      },
      {
        "category": "z",
        "word": "size"
      },
      {
        "category": "z",
        "word": "citizen"
      },
      {
        "category": "z",
        "word": "crazy"
      },
      {
        "category": "z",
        "word": "dizzy"
      },
      {
        "category": "z",
        "word": "dozen"
      },
      {
        "category": "ʃ",
        "word": "cash"
      },
      {
        "category": "ʃ",
        "word": "crash"
      },
      {
        "category": "ʃ",
        "word": "dish"
      },
      {
        "category": "ʃ",
        "word": "establish"
      },
      {
        "category": "ʃ",
        "word": "fashion"
      },
      {
        "category": "ʃ",
        "word": "finish"
      },
      {
        "category": "ʃ",
        "word": "fish"
      },
      {
        "category": "ʃ",
        "word": "flash"
      },
      {
        "category": "ʃ",
        "word": "fresh"
      },
      {
        "category": "ʃ",
        "word": "push"
      },
      {
        "category": "ʃ",
        "word": "relationship"
      },
      {
        "category": "ʃ",
        "word": "shake"
      },
      {
        "category": "ʃ",
        "word": "shall"
      },
      {
        "category": "ʃ",
        "word": "shape"
      },
      {
        "category": "ʃ",
        "word": "share"
      },
      {
        "category": "ʃ",
        "word": "she"
      },
      {
        "category": "ʃ",
        "word": "shift"
      },
      {
        "category": "ʃ",
        "word": "shine"
      },
      {
        "category": "ʃ",
        "word": "ship"
      },
      {
        "category": "ʃ",
        "word": "shock"
      },
      {
        "category": "ʃ",
        "word": "shoe"
      },
      {
        "category": "ʃ",
        "word": "shoot"
      },
      {
        "category": "ʃ",
        "word": "shop"
      },
      {
        "category": "ʃ",
        "word": "short"
      },
      {
        "category": "ʃ",
        "word": "should"
      },
      {
        "category": "ʃ",
        "word": "shoulder"
      },
      {
        "category": "ʃ",
        "word": "show"
      },
      {
        "category": "ʃ",
        "word": "wash"
      },
      {
        "category": "ʃ",
        "word": "wish"
      },
      {
        "category": "ʃ",
        "word": "commission"
      },
      {
        "category": "ʃ",
        "word": "depression"
      },
      {
        "category": "ʃ",
        "word": "discussion"
      },
      {
        "category": "ʃ",
        "word": "expression"
      },
      {
        "category": "ʃ",
        "word": "impression"
      },
      {
        "category": "ʃ",
        "word": "mission"
      },
      {
        "category": "ʃ",
        "word": "professional"
      },
      {
        "category": "ʃ",
        "word": "Russia"
      },
      {
        "category": "ʃ",
        "word": "session"
      },
      {
        "category": "ʃ",
        "word": "assure"
      },
      {
        "category": "ʃ",
        "word": "issue"
      },
      {
        "category": "ʃ",
        "word": "pressure"
      },
      {
        "category": "ʃ",
        "word": "tissue"
      },
      {
        "category": "ʃ",
        "word": "action"
      },
      {
        "category": "ʃ",
        "word": "assumption"
      },
      {
        "category": "ʃ",
        "word": "condition"
      },
      {
        "category": "ʃ",
        "word": "definition"
      },
      {
        "category": "ʃ",
        "word": "education"
      },
      {
        "category": "ʃ",
        "word": "function"
      },
      {
        "category": "ʃ",
        "word": "generation"
      },
      {
        "category": "ʃ",
        "word": "information"
      },
      {
        "category": "ʃ",
        "word": "location"
      },
      {
        "category": "ʃ",
        "word": "mention"
      },
      {
        "category": "ʃ",
        "word": "nation"
      },
      {
        "category": "ʃ",
        "word": "option"
      },
      {
        "category": "ʃ",
        "word": "rational"
      },
      {
        "category": "ʃ",
        "word": "station"
      },
      {
        "category": "ʃ",
        "word": "tradition"
      },
      {
        "category": "ʃ",
        "word": "variation"
      },
      {
        "category": "ʃ",
        "word": "essential"
      },
      {
        "category": "ʃ",
        "word": "initial"
      },
      {
        "category": "ʃ",
        "word": "initiative"
      },
      {
        "category": "ʃ",
        "word": "partial"
      },
      {
        "category": "ʃ",
        "word": "potential"
      },
      {
        "category": "ʃ",
        "word": "substantial"
      },
      {
        "category": "ʃ",
        "word": "patience"
      },
      {
        "category": "ʃ",
        "word": "patient"
      },
      {
        "category": "ʃ",
        "word": "efficient"
      },
      {
        "category": "ʃ",
        "word": "musician"
      },
      {
        "category": "ʃ",
        "word": "racial"
      },
      {
        "category": "ʃ",
        "word": "special"
      },
      {
        "category": "ʃ",
        "word": "ocean"
      },
      {
        "category": "ʃ",
        "word": "anxious"
      },
      {
        "category": "ʃ",
        "word": "machine"
      },
      {
        "category": "ʒ",
        "word": "equation"
      },
      {
        "category": "ʒ",
        "word": "usually"
      },
      {
        "category": "ʒ",
        "word": "conclusion"
      },
      {
        "category": "ʒ",
        "word": "confusion"
      },
      {
        "category": "ʒ",
        "word": "decision"
      },
      {
        "category": "ʒ",
        "word": "division"
      },
      {
        "category": "ʒ",
        "word": "occasion"
      },
      {
        "category": "ʒ",
        "word": "provision"
      },
      {
        "category": "ʒ",
        "word": "television"
      },
      {
        "category": "ʒ",
        "word": "vision"
      },
      {
        "category": "ʒ",
        "word": "conclusion"
      },
      {
        "category": "ʒ",
        "word": "confusion"
      },
      {
        "category": "ʒ",
        "word": "decision"
      },
      {
        "category": "ʒ",
        "word": "division"
      },
      {
        "category": "ʒ",
        "word": "occasion"
      },
      {
        "category": "ʒ",
        "word": "provision"
      },
      {
        "category": "ʒ",
        "word": "television"
      },
      {
        "category": "ʒ",
        "word": "vision"
      },
      {
        "category": "ʒ",
        "word": "usual"
      },
      {
        "category": "ʒ",
        "word": "visual"
      },
      {
        "category": "ʒ",
        "word": "exposure"
      },
      {
        "category": "ʒ",
        "word": "measure"
      },
      {
        "category": "ʒ",
        "word": "pleasure"
      },
      {
        "category": "ʒ",
        "word": "beginning"
      },
      {
        "category": "ʒ",
        "word": "genre"
      },
      {
        "category": "ʒ",
        "word": "amnesia"
      },
      {
        "category": "ʒ",
        "word": "luxurious"
      },
      {
        "category": "ʒ",
        "word": "seizure"
      },
      {
        "category": "ʒ",
        "word": "beige"
      },
      {
        "category": "ʒ",
        "word": "collage"
      },
      {
        "category": "ʒ",
        "word": "massage"
      },
      {
        "category": "ʒ",
        "word": "mirage"
      },
      {
        "category": "ʒ",
        "word": "rouge"
      },
      {
        "category": "ʒ",
        "word": "sabotage"
      },
      {
        "category": "ʒ",
        "word": "collision"
      },
      {
        "category": "ʒ",
        "word": "exclusion"
      },
      {
        "category": "ʒ",
        "word": "explosion"
      },
      {
        "category": "ʒ",
        "word": "fusion"
      },
      {
        "category": "ʒ",
        "word": "illusion"
      },
      {
        "category": "ʒ",
        "word": "inclusion"
      },
      {
        "category": "ʒ",
        "word": "invasion"
      },
      {
        "category": "ʒ",
        "word": "lesion"
      },
      {
        "category": "ʒ",
        "word": "persuasion"
      },
      {
        "category": "ʒ",
        "word": "precision"
      },
      {
        "category": "ʒ",
        "word": "revision"
      },
      {
        "category": "ʒ",
        "word": "disclosure"
      },
      {
        "category": "ʒ",
        "word": "enclosure"
      },
      {
        "category": "ʒ",
        "word": "leisure"
      },
      {
        "category": "tʃ",
        "word": "chain"
      },
      {
        "category": "tʃ",
        "word": "chair"
      },
      {
        "category": "tʃ",
        "word": "challenge"
      },
      {
        "category": "tʃ",
        "word": "champion"
      },
      {
        "category": "tʃ",
        "word": "chance"
      },
      {
        "category": "tʃ",
        "word": "change"
      },
      {
        "category": "tʃ",
        "word": "channel"
      },
      {
        "category": "tʃ",
        "word": "chapter"
      },
      {
        "category": "tʃ",
        "word": "charge"
      },
      {
        "category": "tʃ",
        "word": "chart"
      },
      {
        "category": "tʃ",
        "word": "chat"
      },
      {
        "category": "tʃ",
        "word": "cheap"
      },
      {
        "category": "tʃ",
        "word": "cheat"
      },
      {
        "category": "tʃ",
        "word": "check"
      },
      {
        "category": "tʃ",
        "word": "cheese"
      },
      {
        "category": "tʃ",
        "word": "chess"
      },
      {
        "category": "tʃ",
        "word": "chief"
      },
      {
        "category": "tʃ",
        "word": "child"
      },
      {
        "category": "tʃ",
        "word": "China"
      },
      {
        "category": "tʃ",
        "word": "choice"
      },
      {
        "category": "tʃ",
        "word": "choose"
      },
      {
        "category": "tʃ",
        "word": "church"
      },
      {
        "category": "tʃ",
        "word": "approach"
      },
      {
        "category": "tʃ",
        "word": "beach"
      },
      {
        "category": "tʃ",
        "word": "branch"
      },
      {
        "category": "tʃ",
        "word": "church"
      },
      {
        "category": "tʃ",
        "word": "coach"
      },
      {
        "category": "tʃ",
        "word": "each"
      },
      {
        "category": "tʃ",
        "word": "launch"
      },
      {
        "category": "tʃ",
        "word": "lunch"
      },
      {
        "category": "tʃ",
        "word": "much"
      },
      {
        "category": "tʃ",
        "word": "reach"
      },
      {
        "category": "tʃ",
        "word": "research"
      },
      {
        "category": "tʃ",
        "word": "rich"
      },
      {
        "category": "tʃ",
        "word": "search"
      },
      {
        "category": "tʃ",
        "word": "speech"
      },
      {
        "category": "tʃ",
        "word": "such"
      },
      {
        "category": "tʃ",
        "word": "teach"
      },
      {
        "category": "tʃ",
        "word": "touch"
      },
      {
        "category": "tʃ",
        "word": "which"
      },
      {
        "category": "tʃ",
        "word": "attach"
      },
      {
        "category": "tʃ",
        "word": "batch"
      },
      {
        "category": "tʃ",
        "word": "catch"
      },
      {
        "category": "tʃ",
        "word": "match"
      },
      {
        "category": "tʃ",
        "word": "sketch"
      },
      {
        "category": "tʃ",
        "word": "stretch"
      },
      {
        "category": "tʃ",
        "word": "switch"
      },
      {
        "category": "tʃ",
        "word": "watch"
      },
      {
        "category": "tʃ",
        "word": "achieve"
      },
      {
        "category": "tʃ",
        "word": "exchange"
      },
      {
        "category": "tʃ",
        "word": "purchase"
      },
      {
        "category": "tʃ",
        "word": "Richard"
      },
      {
        "category": "tʃ",
        "word": "teacher"
      },
      {
        "category": "tʃ",
        "word": "butcher"
      },
      {
        "category": "tʃ",
        "word": "kitchen"
      },
      {
        "category": "tʃ",
        "word": "adventure"
      },
      {
        "category": "tʃ",
        "word": "culture"
      },
      {
        "category": "tʃ",
        "word": "feature"
      },
      {
        "category": "tʃ",
        "word": "fortunate"
      },
      {
        "category": "tʃ",
        "word": "furniture"
      },
      {
        "category": "tʃ",
        "word": "future"
      },
      {
        "category": "tʃ",
        "word": "picture"
      },
      {
        "category": "tʃ",
        "word": "natural"
      },
      {
        "category": "tʃ",
        "word": "situation"
      },
      {
        "category": "tʃ",
        "word": "suggestion"
      },
      {
        "category": "tʃ",
        "word": "question"
      },
      {
        "category": "dʒ",
        "word": "January"
      },
      {
        "category": "dʒ",
        "word": "jam"
      },
      {
        "category": "dʒ",
        "word": "Jamaica"
      },
      {
        "category": "dʒ",
        "word": "James"
      },
      {
        "category": "dʒ",
        "word": "Jane"
      },
      {
        "category": "dʒ",
        "word": "Japan"
      },
      {
        "category": "dʒ",
        "word": "jeans"
      },
      {
        "category": "dʒ",
        "word": "job"
      },
      {
        "category": "dʒ",
        "word": "John"
      },
      {
        "category": "dʒ",
        "word": "join"
      },
      {
        "category": "dʒ",
        "word": "joke"
      },
      {
        "category": "dʒ",
        "word": "journey"
      },
      {
        "category": "dʒ",
        "word": "July"
      },
      {
        "category": "dʒ",
        "word": "jump"
      },
      {
        "category": "dʒ",
        "word": "judge"
      },
      {
        "category": "dʒ",
        "word": "June"
      },
      {
        "category": "dʒ",
        "word": "just"
      },
      {
        "category": "dʒ",
        "word": "gentleman"
      },
      {
        "category": "dʒ",
        "word": "gender"
      },
      {
        "category": "dʒ",
        "word": "gene"
      },
      {
        "category": "dʒ",
        "word": "general"
      },
      {
        "category": "dʒ",
        "word": "generate"
      },
      {
        "category": "dʒ",
        "word": "generation"
      },
      {
        "category": "dʒ",
        "word": "genetic"
      },
      {
        "category": "dʒ",
        "word": "Germany"
      },
      {
        "category": "dʒ",
        "word": "George"
      },
      {
        "category": "dʒ",
        "word": "Georgia"
      },
      {
        "category": "dʒ",
        "word": "gesture"
      },
      {
        "category": "dʒ",
        "word": "giant"
      },
      {
        "category": "dʒ",
        "word": "gym"
      },
      {
        "category": "dʒ",
        "word": "enjoy"
      },
      {
        "category": "dʒ",
        "word": "injure"
      },
      {
        "category": "dʒ",
        "word": "major"
      },
      {
        "category": "dʒ",
        "word": "majority"
      },
      {
        "category": "dʒ",
        "word": "object"
      },
      {
        "category": "dʒ",
        "word": "project"
      },
      {
        "category": "dʒ",
        "word": "reject"
      },
      {
        "category": "dʒ",
        "word": "subject"
      },
      {
        "category": "dʒ",
        "word": "apologize"
      },
      {
        "category": "dʒ",
        "word": "Argentina"
      },
      {
        "category": "dʒ",
        "word": "Belgium"
      },
      {
        "category": "dʒ",
        "word": "biology"
      },
      {
        "category": "dʒ",
        "word": "danger"
      },
      {
        "category": "dʒ",
        "word": "Egypt"
      },
      {
        "category": "dʒ",
        "word": "energy"
      },
      {
        "category": "dʒ",
        "word": "engineer"
      },
      {
        "category": "dʒ",
        "word": "imagine"
      },
      {
        "category": "dʒ",
        "word": "Los Angeles"
      },
      {
        "category": "dʒ",
        "word": "Niger"
      },
      {
        "category": "dʒ",
        "word": "Nigeria"
      },
      {
        "category": "dʒ",
        "word": "refrigerator"
      },
      {
        "category": "dʒ",
        "word": "original"
      },
      {
        "category": "dʒ",
        "word": "region"
      },
      {
        "category": "dʒ",
        "word": "Roger"
      },
      {
        "category": "dʒ",
        "word": "strategy"
      },
      {
        "category": "dʒ",
        "word": "technology"
      },
      {
        "category": "dʒ",
        "word": "urgent"
      },
      {
        "category": "dʒ",
        "word": "Virginia"
      },
      {
        "category": "dʒ",
        "word": "advantage"
      },
      {
        "category": "dʒ",
        "word": "age"
      },
      {
        "category": "dʒ",
        "word": "average"
      },
      {
        "category": "dʒ",
        "word": "change"
      },
      {
        "category": "dʒ",
        "word": "charge"
      },
      {
        "category": "dʒ",
        "word": "college"
      },
      {
        "category": "dʒ",
        "word": "huge"
      },
      {
        "category": "dʒ",
        "word": "image"
      },
      {
        "category": "dʒ",
        "word": "language"
      },
      {
        "category": "dʒ",
        "word": "large"
      },
      {
        "category": "dʒ",
        "word": "manage"
      },
      {
        "category": "dʒ",
        "word": "orange"
      },
      {
        "category": "dʒ",
        "word": "page"
      },
      {
        "category": "dʒ",
        "word": "range"
      },
      {
        "category": "dʒ",
        "word": "stage"
      },
      {
        "category": "dʒ",
        "word": "badge"
      },
      {
        "category": "dʒ",
        "word": "edge"
      },
      {
        "category": "dʒ",
        "word": "fridge"
      },
      {
        "category": "dʒ",
        "word": "judge"
      },
      {
        "category": "dʒ",
        "word": "knowledge"
      },
      {
        "category": "h",
        "word": "Haiti"
      },
      {
        "category": "h",
        "word": "half"
      },
      {
        "category": "h",
        "word": "hand"
      },
      {
        "category": "h",
        "word": "happen"
      },
      {
        "category": "h",
        "word": "Harold"
      },
      {
        "category": "h",
        "word": "hard"
      },
      {
        "category": "h",
        "word": "hat"
      },
      {
        "category": "h",
        "word": "have"
      },
      {
        "category": "h",
        "word": "Hawaii"
      },
      {
        "category": "h",
        "word": "he"
      },
      {
        "category": "h",
        "word": "head"
      },
      {
        "category": "h",
        "word": "hear"
      },
      {
        "category": "h",
        "word": "heat"
      },
      {
        "category": "h",
        "word": "help"
      },
      {
        "category": "h",
        "word": "Henry"
      },
      {
        "category": "h",
        "word": "here"
      },
      {
        "category": "h",
        "word": "high"
      },
      {
        "category": "h",
        "word": "history"
      },
      {
        "category": "h",
        "word": "hit"
      },
      {
        "category": "h",
        "word": "home"
      },
      {
        "category": "h",
        "word": "hold"
      },
      {
        "category": "h",
        "word": "hot"
      },
      {
        "category": "h",
        "word": "house"
      },
      {
        "category": "h",
        "word": "how"
      },
      {
        "category": "h",
        "word": "human"
      },
      {
        "category": "h",
        "word": "Hungary"
      },
      {
        "category": "h",
        "word": "hut"
      },
      {
        "category": "h",
        "word": "who"
      },
      {
        "category": "h",
        "word": "whole"
      },
      {
        "category": "h",
        "word": "whose"
      },
      {
        "category": "h",
        "word": "ahead"
      },
      {
        "category": "h",
        "word": "alcohol"
      },
      {
        "category": "h",
        "word": "behave"
      },
      {
        "category": "h",
        "word": "behaviour"
      },
      {
        "category": "h",
        "word": "behind"
      },
      {
        "category": "h",
        "word": "childhood"
      },
      {
        "category": "h",
        "word": "Ohio"
      },
      {
        "category": "h",
        "word": "Oklahoma"
      },
      {
        "category": "m",
        "word": "make"
      },
      {
        "category": "m",
        "word": "man"
      },
      {
        "category": "m",
        "word": "many"
      },
      {
        "category": "m",
        "word": "market"
      },
      {
        "category": "m",
        "word": "may"
      },
      {
        "category": "m",
        "word": "me"
      },
      {
        "category": "m",
        "word": "mean"
      },
      {
        "category": "m",
        "word": "meet"
      },
      {
        "category": "m",
        "word": "money"
      },
      {
        "category": "m",
        "word": "more"
      },
      {
        "category": "m",
        "word": "most"
      },
      {
        "category": "m",
        "word": "move"
      },
      {
        "category": "m",
        "word": "much"
      },
      {
        "category": "m",
        "word": "must"
      },
      {
        "category": "m",
        "word": "almost"
      },
      {
        "category": "m",
        "word": "common"
      },
      {
        "category": "m",
        "word": "company"
      },
      {
        "category": "m",
        "word": "example"
      },
      {
        "category": "m",
        "word": "family"
      },
      {
        "category": "m",
        "word": "important"
      },
      {
        "category": "m",
        "word": "information"
      },
      {
        "category": "m",
        "word": "number"
      },
      {
        "category": "m",
        "word": "recommend"
      },
      {
        "category": "m",
        "word": "small"
      },
      {
        "category": "m",
        "word": "something"
      },
      {
        "category": "m",
        "word": "summer"
      },
      {
        "category": "m",
        "word": "woman"
      },
      {
        "category": "m",
        "word": "arm"
      },
      {
        "category": "m",
        "word": "column"
      },
      {
        "category": "m",
        "word": "come"
      },
      {
        "category": "m",
        "word": "from"
      },
      {
        "category": "m",
        "word": "him"
      },
      {
        "category": "m",
        "word": "home"
      },
      {
        "category": "m",
        "word": "name"
      },
      {
        "category": "m",
        "word": "problem"
      },
      {
        "category": "m",
        "word": "same"
      },
      {
        "category": "m",
        "word": "some"
      },
      {
        "category": "m",
        "word": "system"
      },
      {
        "category": "m",
        "word": "team"
      },
      {
        "category": "m",
        "word": "them"
      },
      {
        "category": "m",
        "word": "time"
      },
      {
        "category": "n",
        "word": "knee"
      },
      {
        "category": "n",
        "word": "knife"
      },
      {
        "category": "n",
        "word": "knock"
      },
      {
        "category": "n",
        "word": "know"
      },
      {
        "category": "n",
        "word": "name"
      },
      {
        "category": "n",
        "word": "near"
      },
      {
        "category": "n",
        "word": "need"
      },
      {
        "category": "n",
        "word": "never"
      },
      {
        "category": "n",
        "word": "new"
      },
      {
        "category": "n",
        "word": "next"
      },
      {
        "category": "n",
        "word": "nice"
      },
      {
        "category": "n",
        "word": "night"
      },
      {
        "category": "n",
        "word": "note"
      },
      {
        "category": "n",
        "word": "nothing"
      },
      {
        "category": "n",
        "word": "now"
      },
      {
        "category": "n",
        "word": "number"
      },
      {
        "category": "n",
        "word": "again"
      },
      {
        "category": "n",
        "word": "begin"
      },
      {
        "category": "n",
        "word": "between"
      },
      {
        "category": "n",
        "word": "can"
      },
      {
        "category": "n",
        "word": "down"
      },
      {
        "category": "n",
        "word": "even"
      },
      {
        "category": "n",
        "word": "happen"
      },
      {
        "category": "n",
        "word": "man"
      },
      {
        "category": "n",
        "word": "mean"
      },
      {
        "category": "n",
        "word": "own"
      },
      {
        "category": "n",
        "word": "question"
      },
      {
        "category": "n",
        "word": "run"
      },
      {
        "category": "n",
        "word": "then"
      },
      {
        "category": "n",
        "word": "turn"
      },
      {
        "category": "n",
        "word": "when"
      },
      {
        "category": "n",
        "word": "woman"
      },
      {
        "category": "n",
        "word": "company"
      },
      {
        "category": "n",
        "word": "country"
      },
      {
        "category": "n",
        "word": "end"
      },
      {
        "category": "n",
        "word": "enough"
      },
      {
        "category": "n",
        "word": "interest"
      },
      {
        "category": "n",
        "word": "many"
      },
      {
        "category": "n",
        "word": "money"
      },
      {
        "category": "n",
        "word": "understand"
      },
      {
        "category": "n",
        "word": "announce"
      },
      {
        "category": "n",
        "word": "annual"
      },
      {
        "category": "n",
        "word": "channel"
      },
      {
        "category": "n",
        "word": "connection"
      },
      {
        "category": "n",
        "word": "dinner"
      },
      {
        "category": "n",
        "word": "funny"
      },
      {
        "category": "n",
        "word": "manner"
      },
      {
        "category": "n",
        "word": "meanness"
      },
      {
        "category": "n",
        "word": "unknown"
      },
      {
        "category": "n",
        "word": "unnatural"
      },
      {
        "category": "n",
        "word": "unnecessary"
      },
      {
        "category": "n",
        "word": ""
      },
      {
        "category": "ŋ",
        "word": "bang"
      },
      {
        "category": "ŋ",
        "word": "gang"
      },
      {
        "category": "ŋ",
        "word": "hang"
      },
      {
        "category": "ŋ",
        "word": "hanger"
      },
      {
        "category": "ŋ",
        "word": "hanging"
      },
      {
        "category": "ŋ",
        "word": "rang"
      },
      {
        "category": "ŋ",
        "word": "sang"
      },
      {
        "category": "ŋ",
        "word": "slang"
      },
      {
        "category": "ŋ",
        "word": "bring"
      },
      {
        "category": "ŋ",
        "word": "evening"
      },
      {
        "category": "ŋ",
        "word": "king"
      },
      {
        "category": "ŋ",
        "word": "morning"
      },
      {
        "category": "ŋ",
        "word": "ring"
      },
      {
        "category": "ŋ",
        "word": "sing"
      },
      {
        "category": "ŋ",
        "word": "singer"
      },
      {
        "category": "ŋ",
        "word": "spring"
      },
      {
        "category": "ŋ",
        "word": "sting"
      },
      {
        "category": "ŋ",
        "word": "string"
      },
      {
        "category": "ŋ",
        "word": "swing"
      },
      {
        "category": "ŋ",
        "word": "thing"
      },
      {
        "category": "ŋ",
        "word": "wing"
      },
      {
        "category": "ŋ",
        "word": "wring"
      },
      {
        "category": "ŋ",
        "word": "along"
      },
      {
        "category": "ŋ",
        "word": "belong"
      },
      {
        "category": "ŋ",
        "word": "long"
      },
      {
        "category": "ŋ",
        "word": "song"
      },
      {
        "category": "ŋ",
        "word": "strong"
      },
      {
        "category": "ŋ",
        "word": "wrong"
      },
      {
        "category": "ŋ",
        "word": "among"
      },
      {
        "category": "ŋ",
        "word": "lung"
      },
      {
        "category": "ŋ",
        "word": "sung"
      },
      {
        "category": "ŋ",
        "word": "tongue"
      },
      {
        "category": "ŋ",
        "word": "young"
      },
      {
        "category": "ŋ",
        "word": "anger"
      },
      {
        "category": "ŋ",
        "word": "angle"
      },
      {
        "category": "ŋ",
        "word": "angry"
      },
      {
        "category": "ŋ",
        "word": "language"
      },
      {
        "category": "ŋ",
        "word": "languid"
      },
      {
        "category": "ŋ",
        "word": "finger"
      },
      {
        "category": "ŋ",
        "word": "linger"
      },
      {
        "category": "ŋ",
        "word": "single"
      },
      {
        "category": "ŋ",
        "word": "Hungary"
      },
      {
        "category": "ŋ",
        "word": "hunger"
      },
      {
        "category": "ŋ",
        "word": "hungry"
      },
      {
        "category": "ŋ",
        "word": "ankle"
      },
      {
        "category": "ŋ",
        "word": "bank"
      },
      {
        "category": "ŋ",
        "word": "blanket"
      },
      {
        "category": "ŋ",
        "word": "drank"
      },
      {
        "category": "ŋ",
        "word": "handkerchief"
      },
      {
        "category": "ŋ",
        "word": "blink"
      },
      {
        "category": "ŋ",
        "word": "drink"
      },
      {
        "category": "ŋ",
        "word": "ink"
      },
      {
        "category": "ŋ",
        "word": "link"
      },
      {
        "category": "ŋ",
        "word": "pink"
      },
      {
        "category": "ŋ",
        "word": "sink"
      },
      {
        "category": "ŋ",
        "word": "sprinkler"
      },
      {
        "category": "ŋ",
        "word": "stink"
      },
      {
        "category": "ŋ",
        "word": "think"
      },
      {
        "category": "ŋ",
        "word": "twinkle"
      },
      {
        "category": "ŋ",
        "word": "rink"
      },
      {
        "category": "ŋ",
        "word": "wink"
      },
      {
        "category": "ŋ",
        "word": "wrinkle"
      },
      {
        "category": "ŋ",
        "word": "bunk"
      },
      {
        "category": "ŋ",
        "word": "bunker"
      },
      {
        "category": "ŋ",
        "word": "dunk"
      },
      {
        "category": "ŋ",
        "word": "monkey"
      },
      {
        "category": "ŋ",
        "word": "trunk"
      },
      {
        "category": "r",
        "word": "read"
      },
      {
        "category": "r",
        "word": "really"
      },
      {
        "category": "r",
        "word": "report"
      },
      {
        "category": "r",
        "word": "result"
      },
      {
        "category": "r",
        "word": "rhyme"
      },
      {
        "category": "r",
        "word": "right"
      },
      {
        "category": "r",
        "word": "room"
      },
      {
        "category": "r",
        "word": "run"
      },
      {
        "category": "r",
        "word": "write"
      },
      {
        "category": "r",
        "word": "wrong"
      },
      {
        "category": "r",
        "word": "air"
      },
      {
        "category": "r",
        "word": "bear"
      },
      {
        "category": "r",
        "word": "share"
      },
      {
        "category": "r",
        "word": "their"
      },
      {
        "category": "r",
        "word": "where"
      },
      {
        "category": "r",
        "word": "hear"
      },
      {
        "category": "r",
        "word": "peer"
      },
      {
        "category": "r",
        "word": "year"
      },
      {
        "category": "r",
        "word": "door"
      },
      {
        "category": "r",
        "word": "more"
      },
      {
        "category": "r",
        "word": "pour"
      },
      {
        "category": "r",
        "word": "war"
      },
      {
        "category": "r",
        "word": "sure"
      },
      {
        "category": "r",
        "word": "tour"
      },
      {
        "category": "r",
        "word": "occur"
      },
      {
        "category": "r",
        "word": "prefer"
      },
      {
        "category": "r",
        "word": "sir"
      },
      {
        "category": "r",
        "word": "were"
      },
      {
        "category": "r",
        "word": "color"
      },
      {
        "category": "r",
        "word": "over"
      },
      {
        "category": "r",
        "word": "sugar"
      },
      {
        "category": "r",
        "word": "around"
      },
      {
        "category": "r",
        "word": "break"
      },
      {
        "category": "r",
        "word": "carry"
      },
      {
        "category": "r",
        "word": "different"
      },
      {
        "category": "r",
        "word": "ferry"
      },
      {
        "category": "r",
        "word": "mirror"
      },
      {
        "category": "r",
        "word": "parent"
      },
      {
        "category": "r",
        "word": "worry"
      },
      {
        "category": "r",
        "word": "arm"
      },
      {
        "category": "r",
        "word": "careful"
      },
      {
        "category": "r",
        "word": "force"
      },
      {
        "category": "r",
        "word": "forget"
      },
      {
        "category": "r",
        "word": "large"
      },
      {
        "category": "r",
        "word": "order"
      },
      {
        "category": "r",
        "word": "perform"
      },
      {
        "category": "r",
        "word": "verb"
      },
      {
        "category": "r",
        "word": "word"
      },
      {
        "category": "l",
        "word": "large"
      },
      {
        "category": "l",
        "word": "last"
      },
      {
        "category": "l",
        "word": "late"
      },
      {
        "category": "l",
        "word": "leave"
      },
      {
        "category": "l",
        "word": "let"
      },
      {
        "category": "l",
        "word": "life"
      },
      {
        "category": "l",
        "word": "like"
      },
      {
        "category": "l",
        "word": "little"
      },
      {
        "category": "l",
        "word": "live"
      },
      {
        "category": "l",
        "word": "long"
      },
      {
        "category": "l",
        "word": "look"
      },
      {
        "category": "l",
        "word": "lot"
      },
      {
        "category": "l",
        "word": "love"
      },
      {
        "category": "l",
        "word": "also"
      },
      {
        "category": "l",
        "word": "child"
      },
      {
        "category": "l",
        "word": "clear"
      },
      {
        "category": "l",
        "word": "help"
      },
      {
        "category": "l",
        "word": "include"
      },
      {
        "category": "l",
        "word": "old"
      },
      {
        "category": "l",
        "word": "only"
      },
      {
        "category": "l",
        "word": "place"
      },
      {
        "category": "l",
        "word": "problem"
      },
      {
        "category": "l",
        "word": "world"
      },
      {
        "category": "l",
        "word": "actually"
      },
      {
        "category": "l",
        "word": "allow"
      },
      {
        "category": "l",
        "word": "challenge"
      },
      {
        "category": "l",
        "word": "college"
      },
      {
        "category": "l",
        "word": "dollar"
      },
      {
        "category": "l",
        "word": "follow"
      },
      {
        "category": "l",
        "word": "really"
      },
      {
        "category": "l",
        "word": "village"
      },
      {
        "category": "l",
        "word": "control"
      },
      {
        "category": "l",
        "word": "deal"
      },
      {
        "category": "l",
        "word": "feel"
      },
      {
        "category": "l",
        "word": "level"
      },
      {
        "category": "l",
        "word": "school"
      },
      {
        "category": "l",
        "word": "several"
      },
      {
        "category": "l",
        "word": "social"
      },
      {
        "category": "l",
        "word": "total"
      },
      {
        "category": "l",
        "word": "travel"
      },
      {
        "category": "l",
        "word": "until"
      },
      {
        "category": "l",
        "word": "all"
      },
      {
        "category": "l",
        "word": "call"
      },
      {
        "category": "l",
        "word": "cell"
      },
      {
        "category": "l",
        "word": "fall"
      },
      {
        "category": "l",
        "word": "full"
      },
      {
        "category": "l",
        "word": "kill"
      },
      {
        "category": "l",
        "word": "sell"
      },
      {
        "category": "l",
        "word": "skill"
      },
      {
        "category": "l",
        "word": "small"
      },
      {
        "category": "l",
        "word": "still"
      },
      {
        "category": "l",
        "word": "tell"
      },
      {
        "category": "l",
        "word": "wall"
      },
      {
        "category": "l",
        "word": "well"
      },
      {
        "category": "l",
        "word": "will"
      },
      {
        "category": "l",
        "word": "file"
      },
      {
        "category": "l",
        "word": "mile"
      },
      {
        "category": "l",
        "word": "module"
      },
      {
        "category": "l",
        "word": "role"
      },
      {
        "category": "l",
        "word": "rule"
      },
      {
        "category": "l",
        "word": "sale"
      },
      {
        "category": "l",
        "word": "smile"
      },
      {
        "category": "l",
        "word": "style"
      },
      {
        "category": "l",
        "word": "while"
      },
      {
        "category": "l",
        "word": "whole"
      },
      {
        "category": "l",
        "word": "able"
      },
      {
        "category": "l",
        "word": "available"
      },
      {
        "category": "l",
        "word": "couple"
      },
      {
        "category": "l",
        "word": "example"
      },
      {
        "category": "l",
        "word": "little"
      },
      {
        "category": "l",
        "word": "people"
      },
      {
        "category": "l",
        "word": "possible"
      },
      {
        "category": "l",
        "word": "table"
      },
      {
        "category": "w",
        "word": "wait"
      },
      {
        "category": "w",
        "word": "wake"
      },
      {
        "category": "w",
        "word": "waste"
      },
      {
        "category": "w",
        "word": "way"
      },
      {
        "category": "w",
        "word": "wave"
      },
      {
        "category": "w",
        "word": "walk"
      },
      {
        "category": "w",
        "word": "wall"
      },
      {
        "category": "w",
        "word": "Walter"
      },
      {
        "category": "w",
        "word": "war"
      },
      {
        "category": "w",
        "word": "warm"
      },
      {
        "category": "w",
        "word": "warn"
      },
      {
        "category": "w",
        "word": "wander"
      },
      {
        "category": "w",
        "word": "wasp"
      },
      {
        "category": "w",
        "word": "watch"
      },
      {
        "category": "w",
        "word": "want"
      },
      {
        "category": "w",
        "word": "wash"
      },
      {
        "category": "w",
        "word": "Washington"
      },
      {
        "category": "w",
        "word": "we"
      },
      {
        "category": "w",
        "word": "wear"
      },
      {
        "category": "w",
        "word": "week"
      },
      {
        "category": "w",
        "word": "well"
      },
      {
        "category": "w",
        "word": "wife"
      },
      {
        "category": "w",
        "word": "will"
      },
      {
        "category": "w",
        "word": "win"
      },
      {
        "category": "w",
        "word": "wish"
      },
      {
        "category": "w",
        "word": "with"
      },
      {
        "category": "w",
        "word": "woman"
      },
      {
        "category": "w",
        "word": "wonder"
      },
      {
        "category": "w",
        "word": "word"
      },
      {
        "category": "w",
        "word": "work"
      },
      {
        "category": "w",
        "word": "world"
      },
      {
        "category": "w",
        "word": "worry"
      },
      {
        "category": "w",
        "word": "would"
      },
      {
        "category": "w",
        "word": "always"
      },
      {
        "category": "w",
        "word": "anyway"
      },
      {
        "category": "w",
        "word": "award"
      },
      {
        "category": "w",
        "word": "aware"
      },
      {
        "category": "w",
        "word": "away"
      },
      {
        "category": "w",
        "word": "Delaware"
      },
      {
        "category": "w",
        "word": "forward"
      },
      {
        "category": "w",
        "word": "framework"
      },
      {
        "category": "w",
        "word": "Hawaii /həˈwaɪiː"
      },
      {
        "category": "w",
        "word": "həˈwɑːiː/"
      },
      {
        "category": "w",
        "word": "network"
      },
      {
        "category": "w",
        "word": "otherwise"
      },
      {
        "category": "w",
        "word": "reward"
      },
      {
        "category": "w",
        "word": "software"
      },
      {
        "category": "w",
        "word": "Taiwan"
      },
      {
        "category": "w",
        "word": "between"
      },
      {
        "category": "w",
        "word": "Dwight"
      },
      {
        "category": "w",
        "word": "Gwendolyn"
      },
      {
        "category": "w",
        "word": "Swede"
      },
      {
        "category": "w",
        "word": "Sweden"
      },
      {
        "category": "w",
        "word": "sweet"
      },
      {
        "category": "w",
        "word": "swim"
      },
      {
        "category": "w",
        "word": "swing"
      },
      {
        "category": "w",
        "word": "Swiss"
      },
      {
        "category": "w",
        "word": "Switzerland"
      },
      {
        "category": "w",
        "word": "switch"
      },
      {
        "category": "w",
        "word": "tweet"
      },
      {
        "category": "w",
        "word": "twice"
      },
      {
        "category": "w",
        "word": "Twitter"
      },
      {
        "category": "w",
        "word": "wheel"
      },
      {
        "category": "w",
        "word": "when"
      },
      {
        "category": "w",
        "word": "where"
      },
      {
        "category": "w",
        "word": "whether"
      },
      {
        "category": "w",
        "word": "which"
      },
      {
        "category": "w",
        "word": "while"
      },
      {
        "category": "w",
        "word": "whisper"
      },
      {
        "category": "w",
        "word": "white"
      },
      {
        "category": "w",
        "word": "why"
      },
      {
        "category": "j",
        "word": "Kenya"
      },
      {
        "category": "j",
        "word": "yard"
      },
      {
        "category": "j",
        "word": "yarn"
      },
      {
        "category": "j",
        "word": "year"
      },
      {
        "category": "j",
        "word": "yellow"
      },
      {
        "category": "j",
        "word": "Yemen"
      },
      {
        "category": "j",
        "word": "yes"
      },
      {
        "category": "j",
        "word": "yesterday"
      },
      {
        "category": "j",
        "word": "yet"
      },
      {
        "category": "j",
        "word": "yield"
      },
      {
        "category": "j",
        "word": "yolk"
      },
      {
        "category": "j",
        "word": "York"
      },
      {
        "category": "j",
        "word": "you"
      },
      {
        "category": "j",
        "word": "young"
      },
      {
        "category": "j",
        "word": "your"
      },
      {
        "category": "j",
        "word": "youth"
      },
      {
        "category": "j",
        "word": "yo"
      },
      {
        "category": "j",
        "word": "yo"
      },
      {
        "category": "j",
        "word": "accumulate"
      },
      {
        "category": "j",
        "word": "Cuba"
      },
      {
        "category": "j",
        "word": "cute"
      },
      {
        "category": "j",
        "word": "distribute"
      },
      {
        "category": "j",
        "word": "stimulate"
      },
      {
        "category": "j",
        "word": "argue"
      },
      {
        "category": "j",
        "word": "continue"
      },
      {
        "category": "j",
        "word": "hue"
      },
      {
        "category": "j",
        "word": "value"
      },
      {
        "category": "j",
        "word": "few"
      },
      {
        "category": "j",
        "word": "Matthew"
      },
      {
        "category": "j",
        "word": "nephew"
      },
      {
        "category": "j",
        "word": "interview"
      },
      {
        "category": "j",
        "word": "review"
      },
      {
        "category": "j",
        "word": "view"
      },
      {
        "category": "j",
        "word": "preview"
      },
      {
        "category": "j",
        "word": "cure"
      },
      {
        "category": "j",
        "word": "curious"
      },
      {
        "category": "j",
        "word": "pure"
      },
      {
        "category": "j",
        "word": "security"
      },
      {
        "category": "j",
        "word": "accumulate"
      },
      {
        "category": "j",
        "word": "failure"
      },
      {
        "category": "j",
        "word": "formula"
      },
      {
        "category": "j",
        "word": "popular"
      }
];

export { categories, phoneticSymbols, words};