'use client';

import { comedians, Comedian, formats, Format, PromptData } from "@/app/_lib/data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { sendToAi } from "@/app/_lib/ai";
import { readStreamableValue } from 'ai/rsc';
import { ArrowRight } from "lucide-react";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export function SidebarOptions({className = ""}) {
    const [selectedComedian, setSelectedComedian] = useState<Comedian>();
    const [selectedFormat, setSelectedFormat] = useState<Format>();
    const [ideaPrompt, setIdeaPrompt] = useState<string>('');
    const [generatedText, setGeneratedText] = useState<string>('');

    return (
            <div className={className}>
                <h4 className="text-md font-semibold text-left">Choose a comedian</h4>
                <div className="mt-2 w-full grid grid-cols-2">
                    {comedians.map((comedian) => (
                        <div key={comedian.name} className="p-1">
                            <Button variant={ selectedComedian == comedian ? "secondary" : "outline"} className="w-full cursor-pointer" onClick={()=>selectComedian(comedian)}>
                                    {comedian.name}
                            </Button>
                        </div>
                    ))}
                </div>

                <h4 className="mt-4 text-md font-semibold text-left">Choose your format</h4>
                <div className="mt-2 w-full grid grid-cols-1">
                    {formats.map((format) => (
                        <div key={format.name} className="p-1">
                            <Button variant={ selectedFormat == format ? "secondary" : "outline"} className="w-full cursor-pointer" onClick={()=>selectFormat(format)}>
                                    {format.name}
                            </Button>
                        </div>
                    ))}
                </div>

                <h4 className="mt-4 text-md font-semibold text-left">Enter a content idea</h4>
                <div className="mt-2 w-full grid grid-cols-1">
                    <Textarea placeholder="Enter your prompt here" className="w-full min-h-20 max-h-20 bg-white"/>
                    <Button className="mt-4 cursor-pointer">
                        Generate <ArrowRight size={16}/>
                    </Button>
                </div>

                <div className="h-full">
                    <p>{generatedText}</p>
                </div>
            </div>
    );

    function selectComedian(comedian: Comedian) {
        setSelectedComedian(comedian);
    }

    function selectFormat(format: Format) {
        setSelectedFormat(format);
    }

    async function generateHumour() {
        if (!selectedComedian || !selectedFormat || !ideaPrompt) {
            console.error("Comedian or format is not selected");
            return;
        }

        const promptData: PromptData = {
            comedian: selectedComedian,
            format: selectedFormat,
            ideaPrompt: ideaPrompt
        }
        // setGeneratedText(await sendToAi(promptData));

        const { output } = await sendToAi(promptData);
        for await (const delta of readStreamableValue(output)) {
            setGeneratedText(currentGeneration => `${currentGeneration}${delta}`);
        }
    }
}