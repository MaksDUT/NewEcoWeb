

//test question
let anwsers = [{response:'La réponse A',isAnwser: false},{response:'La réponse B',isAnwser: false},{response:'La réponse C',isAnwser: false},{response:'La réponse D',isAnwser: true}]
let presentationVideo = "/videos/test.mp4";
let badAnwserVideo = "/videos/test.mp4";
let goodAnwserVideo = "https://sveltejs.github.io/assets/caminandes-llamigos.mp4";
let question = "Quel est la réponse à la réponse D ?"
let title = "Premier scénario !"





//let scenario = {anwsers : anwsers,presentationVideo:presentationVideo,anwserVideo:anwserVideo,question:question,title:title}
//let scenario2 = structuredClone(scenario);
//scenario2.title="Deuxieme scénario !";

//const listScenarioReal = [scenario,scenario2,scenario];


const listScenario = [
{
    anwsers : [
        {response:'La réponse A',isAnwser: false},
        {response:'La réponse B',isAnwser: false},
        {response:'La réponse C',isAnwser: false},
        {response:'La réponse D',isAnwser: true}
    ],
    presentationVideo: "/videos/test.mp4",
    goodAnwserVideo: "https://sveltejs.github.io/assets/caminandes-llamigos.mp4",
    badAnwserVideo: "/videos/bad.mp4",
    question: "Quel est la réponse à la réponse D ?",
    title: "Premier scénario !"
},
{
    anwsers : [
        {response:'La réponse A',isAnwser: false},
        {response:'La réponse B',isAnwser: true},
    ],
    presentationVideo: "/videos/test.mp4",
    goodAnwserVideo: "https://sveltejs.github.io/assets/caminandes-llamigos.mp4",
    badAnwserVideo: "/videos/bad.mp4",
    question: "Quel est la réponse à la réponse B ?",
    title: "Deuxieme scénario !"
}

];

export default listScenario;