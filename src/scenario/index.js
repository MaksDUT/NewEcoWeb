

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
        {response:'voir son ami',isAnwser: true},
        {response:'envoyer un email',isAnwser: false},
    ],
    presentationVideo: "/videos/s12_s.mp4",
    goodAnwserVideo: "https://sveltejs.github.io/assets/caminandes-llamigos.mp4",
    badAnwserVideo: "/videos/bad.mp4",
    question: "Quel est le meilleur choix pour Jean, aller voir son ami dans la pièce d'à côté pour lui parler de son projet ou lui envoyer un email?",
    title: "Les mails"
},
{
    anwsers : [
        {response:'Firefox',isAnwser: true},
        {response:'Chrome',isAnwser: false},
    ],
    presentationVideo: "/videos/test.mp4",
    goodAnwserVideo: "https://sveltejs.github.io/assets/caminandes-llamigos.mp4",
    badAnwserVideo: "/videos/bad.mp4",
    question: "Quel navigateur Jean devrait-il choisir pour faire ses recherches, Mozilla Firefox ou Google Chrome ?",
    title: "Choisir son navigateur"
},
{
    anwsers : [
        {response:'Google',isAnwser: false},
        {response:'Ecosia',isAnwser: true},
    ],
    presentationVideo: "/videos/test.mp4",
    goodAnwserVideo: "https://sveltejs.github.io/assets/caminandes-llamigos.mp4",
    badAnwserVideo: "/videos/bad.mp4",
    question: "Quel moteur de recherche Jean devrait-il choisir pour effectuer sa recherche, Google ou Ecosia ?",
    title: "Choisir son moteur de recherche"
},

];

export default listScenario;