import { Viewer } from "./viewer";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react"

export function Prompter({className = ""}) {
    return (
        <div className={`flex flex-col w-full p-4 px-30 ${className}`}>
            <div className=" bg-white rounded-2xl shadow-lg p-4">
                <Textarea placeholder="Enter your prompt here" className="w-full min-h-20 max-h-20 bg-white"/>
                <Button className="mt-4 cursor-pointer">
                    Generate <ArrowRight size={16}/>
                </Button>
            </div>
        </div>
    );

    function generateHumour() {
        console.log("Generating humour")
    }
}