'use client';

import { comedians, Comedian, formats, Format, PromptData } from "@/app/_lib/data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { sendToAi } from "@/app/_lib/ai";
import { readStreamableValue } from 'ai/rsc';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export function HumourGenerator() {
    const [genStep, setGenStep] = useState(1);
    const [selectedComedian, setSelectedComedian] = useState<Comedian>();
    const [selectedFormat, setSelectedFormat] = useState<Format>();
    const [ideaPrompt, setIdeaPrompt] = useState<string>('');
    const [generatedText, setGeneratedText] = useState<string>('');

    return (
        <Card className="min-h-120 shadow-lg">
            <CardHeader>
            { genStep < 4 ? (
                <div className="grid grid-cols-2 w-full mb-6">
                    <div className="text-left">
                        <p className="mb-2 text-xs">Step {genStep} / 3</p>
                        <Progress className="h-1 w-24" value={33*genStep}/>
                    </div>
                    <div className="text-right">
                        <Button className="cursor-pointer" variant="ghost"
                            disabled={genStep == 1}
                            onClick={()=>setGenStep(genStep-1)}
                        >
                            <ChevronLeft size={16}/>
                        </Button>
                        <Button className="cursor-pointer" variant="ghost"
                            disabled={genStep == 3}
                            onClick={()=>setGenStep(genStep+1)}
                        >
                            <ChevronRight size={16}/>
                        </Button>
                    </div>
                </div>
            ) : "" }

                { genStep === 1 ? (
                    <CardTitle>
                        <h3 className="text-xl font-semibold text-left">Choose a comedian</h3>
                    </CardTitle>
                ) : genStep === 2 ? (
                    <CardTitle>
                        <h3 className="text-xl font-semibold text-left">Choose your format</h3>
                    </CardTitle>
                ) : genStep === 3 ? (
                    <CardTitle>
                        <h3 className="text-xl font-semibold text-left">Enter your idea prompt</h3>
                    </CardTitle>
                ) : "" }
            </CardHeader>
            <CardContent>
                { genStep === 1 ? (
                    <div className="w-full grid grid-cols-2 md:grid-cols-3">
                        {comedians.map((comedian) => (
                            <div key={comedian.name} className="p-2">
                                <Button variant={ selectedComedian == comedian ? "secondary" : "outline"} className="w-36 cursor-pointer" onClick={()=>selectComedian(comedian)}>
                                        {comedian.name}
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : genStep === 2 ? (
                    <div className="w-full grid grid-cols-2">
                        {formats.map((format) => (
                            <div key={format.name} className="p-2">
                                <Button variant={ selectedFormat == format ? "secondary" : "outline"} className="w-56 cursor-pointer" onClick={()=>selectFormat(format)}>
                                        {format.name}
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : genStep === 3 ? (
                    <div className="h-full">
                        <Textarea className="h-36 max-h-full" value={ideaPrompt} onChange={(e)=> setIdeaPrompt(e.target.value)} />
                    </div>
                ) : (
                    <div className="h-full">
                        <p>{generatedText}</p>
                    </div>
                )}
            </CardContent>
            <CardFooter>  
                <div className="text-right w-full">
                    { genStep == 3 ? (
                        <Button className="cursor-pointer" onClick={generateHumour}>
                            Generate <ArrowRight size={16}/>
                        </Button>
                    ) : "" }
                </div>
            </CardFooter>
        </Card>
    );

    function selectComedian(comedian: Comedian) {
        setSelectedComedian(comedian);
        setGenStep(2);
    }

    function selectFormat(format: Format) {
        setSelectedFormat(format);
        setGenStep(3);
    }

    async function generateHumour() {
        if (!selectedComedian || !selectedFormat || !ideaPrompt) {
            console.error("Comedian or format is not selected");
            return;
        }

        setGenStep(4);
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