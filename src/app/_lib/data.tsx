export type Comedian = {
    name: string,
    transcripts: string[],
};

export type Format = {
    name: string,
    description: string,
};

export type PromptData = {
    comedian: Comedian,
    format: Format,
    ideaPrompt: string,
};

export const comedians = [
    {
        name: "Bill Burr",
        transcripts: [
            "https://scrapsfromtheloft.com/comedy/bill-burr-ill-never-own-a-helicopter-transcript/",
            "https://scrapsfromtheloft.com/comedy/bill-burr-live-at-red-rocks-transcript/",
            "https://scrapsfromtheloft.com/comedy/bill-burr-presents-friends-who-kill-transcript/",
        ]
    },
    {
        name: "Dave Chappelle",
        transcripts: [
            "https://scrapsfromtheloft.com/comedy/dave-chappelle-killin-softly-2000-full-transcript/",
            "https://scrapsfromtheloft.com/comedy/dave-chappelle-equanimity-2017-full-transcript/",
            "https://scrapsfromtheloft.com/comedy/dave-chappelle-sticks-stones-transcript/",
        ]
    },
    {
        name: "Pete Davidson",
        transcripts: [
            "https://scrapsfromtheloft.com/comedy/pete-davidson-smd-transcript/",
            "https://scrapsfromtheloft.com/comedy/pete-davidson-alive-from-new-york-transcript/",
            "https://scrapsfromtheloft.com/comedy/pete-davidson-turbo-fonzarelli-transcript/",
        ]
    },
    {
        name: "Akaash Singh",
        transcripts: [
            "https://podscripts.co/podcasts/the-joe-rogan-experience/1773-akaash-singh",
        ]
    },
    {
        name: "Andrew Schulz",
        transcripts: [
            "https://comedybuff.com/infamous/transcript",

        ]
    },
    {
        name: "Shane Gillis",
        transcripts: [
            "https://scrapsfromtheloft.com/comedy/shane-gillis-live-in-austin-transcript/",
            "https://scrapsfromtheloft.com/comedy/shane-gillis-beautiful-dogs-transcript/",
        ]
    },
    {
        name: "Chris Rock",
        transcripts: [
            "https://scrapsfromtheloft.com/comedy/chris-rock-bring-pain-transcript/",
            "https://scrapsfromtheloft.com/comedy/chris-rock-never-scared-2004-full-transcript/",
            "https://scrapsfromtheloft.com/comedy/chris-rock-tamborine-transcript/",
        ]
    },
    {
        name: "Ricky Gervais",
        transcripts: [
            "https://scrapsfromtheloft.com/comedy/ricky-gervais-humanity-transcript/",
            "https://scrapsfromtheloft.com/comedy/ricky-gervais-2011-golden-globes-opening-monologue/",
            "https://scrapsfromtheloft.com/comedy/ricky-gervais-2016-golden-globes-opening-monologue/",
            "https://scrapsfromtheloft.com/comedy/ricky-gervais-2020-golden-globes-monologue-transcript/",
        ]
    },
];

export const formats = [
    {
        name: "Instagram Caption",
        description: "Generate a caption for your Instagram post",
    },
    {
        name: "Reels/Shorts Script",
        description: "Generate a script for your Instagram Reels video",
    },
    {
        name: "YouTube Video Script",
        description: "Generate a script for your YouTube video",
    },
    {
        name: "X Post",
        description: "Generate a short text for your X post",
    }
];