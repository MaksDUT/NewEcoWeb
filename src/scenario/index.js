

//test question
let anwsers = [{response:'La réponse A',isAnwser: false},{response:'La réponse B',isAnwser: false},{response:'La réponse C',isAnwser: false},{response:'La réponse D',isAnwser: true}]
let presentationVideo = "/videos/test.mp4";
let anwserVideo = "https://sveltejs.github.io/assets/caminandes-llamigos.mp4";
let question = "Quel est la réponse à la réponse D Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mattis sapien, nec consequat risus. ?"
let title = "Premier scénario !"

let scenario = {anwsers : anwsers,presentationVideo:presentationVideo,anwserVideo:anwserVideo,question:question,title:title}
let scenario2 = structuredClone(scenario);
scenario2.title="Deuxieme scénario !";

const listScenario = [scenario,scenario2,scenario];


export default listScenario;

