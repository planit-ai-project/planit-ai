import { geteapi } from './storage.js';
export async function generatePlan(prompt) {
    const apiKey = geteapi();
    if(!apiKey)throw new Error("api key manquante");
    
const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
            contents: [
                { parts: [ { text: prompt }]}
            ]
        })})
        if (!response.ok) throw new Error("Erreur API : " + response.status)
            const data = await response.json()
            const candidate = data.candidates[0]
            const content = candidate.content
            const part = content.parts[0]
            const generatedText = part.text
            const plan = JSON.parse(generatedText)
            if (!plan.projectName || !Array.isArray(plan.tasks)) throw new Error("plan invalid");
            
            return plan
        
}