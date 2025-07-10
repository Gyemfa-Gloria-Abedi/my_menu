import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: `${process.env.OPENAIKEY}`,
});

const completion = openai.completions.create({
    model: "gpt-4o-mini",
    store: false,
    messages: [
        { "role": "user", "content": "Generate menu list with AI" },
    ]
});

completion.then((result) => console.log(result.choices[0].message));