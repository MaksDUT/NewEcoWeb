

//test question
let anwsers = [{response:'La réponse A',isAnwser: false},{response:'La réponse B',isAnwser: false},{response:'La réponse C',isAnwser: false},{response:'La réponse D',isAnwser: true}]
let presentationVideo = "/videos/test.mp4";
let badAnwserVideo = "/videos/test.mp4";
let goodAnwserVideo = "/videos/good.mp4";
let question = "Quel est la réponse à la réponse D ?";
let title = "Premier scénario !";





//let scenario = {anwsers : anwsers,presentationVideo:presentationVideo,anwserVideo:anwserVideo,question:question,title:title}
//let scenario2 = structuredClone(scenario);
//scenario2.title="Deuxieme scénario !";

//const listScenarioReal = [scenario,scenario2,scenario];


const listScenario = [
{
    anwsers : [
        {response:'Voir son ami',isAnwser: true},
        {response:'Envoyer un email',isAnwser: false},
    ],
    presentationVideo: "/videos/s1_s.mp4",
    goodAnwserVideo: "/videos/s1_b.mp4",
    badAnwserVideo: "/videos/s1_m.mp4",
    question: "Quel est le meilleur choix pour Jean, aller voir son ami dans la pièce d'à côté pour lui parler de son projet ou lui envoyer un email?",
    title: "L'envoi de mails"
},

{
    anwsers : [
        {response:'Oui ',isAnwser: true},
        {response:'Non (pas besoin)',isAnwser: false},
    ],
    presentationVideo: "/videos/s2_s.mp4",
    goodAnwserVideo: "/videos/s2_b.mp4",
    badAnwserVideo: "/videos/s2_m.mp4",
    question: "Jean devrait-il supprimer ses anciens mails ?",
    title: "Le stockage des mails"
},

{
    anwsers : [
        {response:'Firefox',isAnwser: true},
        {response:'Chrome',isAnwser: false},
    ],
    presentationVideo: "/videos/s3_s.mp4",
    goodAnwserVideo: "/videos/s3_b.mp4",
    badAnwserVideo: "/videos/s3_m.mp4",
    question: "Quel navigateur Jean devrait-il choisir pour faire ses recherches, Mozilla Firefox ou Google Chrome ?",
    title: "Choisir son navigateur"
},
{
    anwsers : [
        {response:'Google',isAnwser: false},
        {response:'Ecosia',isAnwser: true},
    ],
    presentationVideo: "/videos/s4_s.mp4",
    goodAnwserVideo: "/videos/s4_b.mp4",
    badAnwserVideo: "/videos/s4_m.mp4",
    question: "Quel moteur de recherche Jean devrait-il choisir pour effectuer sa recherche, Google ou Ecosia ?",
    title: "Choisir son moteur de recherche"
},

{
    anwsers : [
        {response:'Recherche en utilisant son moteur de recherche préféré',isAnwser: false},
        {response:'Utilise le marque-page',isAnwser: true},
    ],
    presentationVideo: "/videos/s5_s.mp4",
    goodAnwserVideo: "/videos/s5_b.mp4",
    badAnwserVideo: "/videos/s5_m.mp4",
    question: "Quelle est la meilleure façon pour Jean de se rendre sur LinkedIn, en passant par une recherche sur le navigateur ou en utilisant ses favoris ?",
    title: "Site souvent fréquenté"
},

{
    anwsers : [
        {response:'Pas besoin !! (1 onglet ou 50 ne change rien)',isAnwser: false},
        {response:'Fermer les onglets',isAnwser: true},
    ],
    presentationVideo: "/videos/s6_s.mp4",
    goodAnwserVideo: "videos/s6_b.mp4",
    badAnwserVideo: "/videos/s6_m.mp4",
    question: "Jean se rend compte qu’il a beaucoup d’onglets ouverts sur son navigateur. Doit-il fermer ceux qu’il n’utilise pas ?",
    title: "Un onglet, deux onglets, trois onglets..."
},

{
    anwsers : [
        {response:'Clé USB',isAnwser: true},
        {response:'Sur le cloud ',isAnwser: false},
    ],
    presentationVideo: "/videos/s7_s.mp4",
    goodAnwserVideo: "/videos/s7_b.mp4",
    badAnwserVideo: "/videos/s7_m.mp4",
    question: "Où devrait-il sauvegarder sa copie de son travail?",
    title: "Le stockage dans le cloud"
},

{
    anwsers : [
        {response:'Youtube',isAnwser: false},
        {response:'Télécharger sur son ordinateur',isAnwser: true},
    ],
    presentationVideo: "/videos/s9_s.mp4",
    goodAnwserVideo: "/videos/s9_b.mp4",
    badAnwserVideo: "/videos/s9_m.mp4",
    question: "Maintenant que Jean a terminé de travailler, il souhaite écouter de la musique. Comment devrait-il s'y prendre ?",
    title: "La musique"
},

{
    anwsers : [
        {response:'Faible',isAnwser: true},
        {response:'La plus élevée possible !!',isAnwser: false},
    ],
    presentationVideo: "/videos/s10_s.mp4",
    goodAnwserVideo: "/videos/s10_b.mp4",
    badAnwserVideo: "/videos/s10_m.mp4",
    question: "Jean souhaite maintenant regarder une vidéo mais hésite sur la qualité de cette dernière. Laquelle prendre ?",
    title: "Regarder des vidéos en ligne"
},

{
    anwsers : [
        {response:'Team sombre',isAnwser: true},
        {response:'Team lumière',isAnwser: false},
    ],
    presentationVideo: "/videos/s11_s.mp4",
    goodAnwserVideo: "/videos/s11_b.mp4",
    badAnwserVideo: "/videos/s11_m.mp4",
    question: "La nuit tombe, Jean est sur YouTube et se demande s’il devrait changer le theme.  Lequel prendre ?",
    title: "Le côté obscur"
},

{
    anwsers : [
        {response:'Éteindre son ordinateur',isAnwser: true},
        {response:'Mettre en veille',isAnwser: false},
    ],
    presentationVideo: "/videos/s8_s.mp4",
    goodAnwserVideo: "/videos/s8_b.mp4",
    badAnwserVideo: "/videos/s8_m.mp4",
    question: "Jean a sauvegardé son travail et veut rentrer chez lui. Il ne lui reste plus qu’à ranger son ordinateur mais il hésite.",
    title: "Mettre en veille ou éteindre son ordinateur"
},

{
    anwsers : [
        {response:'Oui, il n\'en a plus besoin',isAnwser: false},
        {response:'Non, il y a peut-être mieux à faire',isAnwser: true},
    ],
    presentationVideo: "/videos/s12_s.mp4",
    goodAnwserVideo: "/videos/s12_b.mp4",
    badAnwserVideo: "/videos/s12_m.mp4",
    question: "Le portable de Jean est tombé en panne. Doit-il le jeter à la poubelle ?",
    title: "Cycle de vie d'un smartphone"
},


];

export default listScenario;