

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
        {response:'voir son ami',isAnwser: true},
        {response:'envoyer un email',isAnwser: false},
    ],
    presentationVideo: "/videos/s1_s.mp4",
    goodAnwserVideo: "/videos/s1_b.mp4",
    badAnwserVideo: "/videos/s1_m.mp4",
    question: "Quel est le meilleur choix pour Jean, aller voir son ami dans la pièce d'à côté pour lui parler de son projet ou lui envoyer un email?",
    title: "Les mails"
},

{
    anwsers : [
        {response:'oui ',isAnwser: true},
        {response:'non (pas besoin)',isAnwser: false},
    ],
    presentationVideo: "/videos/s2_s.mp4",
    goodAnwserVideo: "/videos/s2_b.mp4",
    badAnwserVideo: "/videos/s2_m.mp4",
    question: "Jean devrait-il supprimer ses anciens mails ?",
    title: "Les mails v2"
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
        {response:'recherche en utilisant son moteur de recherche préféré',isAnwser: false},
        {response:'utilise le marque-page',isAnwser: true},
    ],
    presentationVideo: "/videos/s5_s.mp4",
    goodAnwserVideo: "/videos/s5_b.mp4",
    badAnwserVideo: "/videos/s5_m.mp4",
    question: "Quelle est la meilleure façon pour Jean de se rendre sur LinkedIn, en passant par une recherche sur le navigateur ou en utilisant ses favoris ?",
    title: "Site souvent fréquenté"
},

{
    anwsers : [
        {response:'pas besoin !! (1 onglet ou 50 ne change rien)',isAnwser: false},
        {response:'fermer les onglets',isAnwser: true},
    ],
    presentationVideo: "/videos/s6_s.mp4",
    goodAnwserVideo: "videos/s6_b.mp4",
    badAnwserVideo: "/videos/s6_m.mp4",
    question: "Jean se rend compte qu’il a beaucoup d’onglets ouverts sur son navigateur. Doit-il fermer ceux qu’il n’utilise pas ?",
    title: "Un onglet, deux onglets, trois onglets..."
},

{
    anwsers : [
        {response:'clé USB',isAnwser: true},
        {response:'sur le cloud ',isAnwser: false},
    ],
    presentationVideo: "/videos/s7_s.mp4",
    goodAnwserVideo: "/videos/s7_b.mp4",
    badAnwserVideo: "/videos/s7_m.mp4",
    question: "Où devrait-il sauvegarder sa copie de son travail?",
    title: "Les nuages .."
},

{
    anwsers : [
        {response:'youtube',isAnwser: false},
        {response:'télécharger sur son ordinateur',isAnwser: true},
    ],
    presentationVideo: "/videos/s9_s.mp4",
    goodAnwserVideo: "/videos/s9_b.mp4",
    badAnwserVideo: "/videos/s9_m.mp4",
    question: "Comment Jean devrait-il écouter de la musique pendant son travail ?",
    title: "La musique"
},

{
    anwsers : [
        {response:'faible',isAnwser: true},
        {response:'la plus élevée possible !!',isAnwser: false},
    ],
    presentationVideo: "/videos/s10_s.mp4",
    goodAnwserVideo: "/videos/s10_b.mp4",
    badAnwserVideo: "/videos/s10_m.mp4",
    question: "Jean souhaite maintenant regarder une vidéo mais hésite sur la qualité de cette dernière. Laquelle prendre ?",
    title: "Netflix"
},

{
    anwsers : [
        {response:'team sombre',isAnwser: true},
        {response:'team lumière',isAnwser: false},
    ],
    presentationVideo: "/videos/s11_s.mp4",
    goodAnwserVideo: "/videos/s11_b.mp4",
    badAnwserVideo: "/videos/s11_m.mp4",
    question: "JEAN est sur Youtube et se demande s’il devrait changer le theme.  Lequel prendre ?",
    title: "Sombre vs Lumière"
},

{
    anwsers : [
        {response:'éteindre son ordinateur',isAnwser: true},
        {response:'mettre en veille',isAnwser: false},
    ],
    presentationVideo: "/videos/s8_s.mp4",
    goodAnwserVideo: "/videos/s8_b.mp4",
    badAnwserVideo: "/videos/s8_m.mp4",
    question: "Jean a sauvegardé son travail et veut rentrer chez lui. Il ne lui reste plus qu’à ranger son ordinateur mais il hésite.",
    title: "Netflix"
},

{
    anwsers : [
        {response:'le jeter et rejoindre Apple',isAnwser: false},
        {response:'le recycler !! (tous n\'est pas a jeter',isAnwser: true},
    ],
    presentationVideo: "/videos/s12_s.mp4",
    goodAnwserVideo: "/videos/s12_b.mp4",
    badAnwserVideo: "/videos/s12_m.mp4",
    question: "Le portable de Jean est tombé en panne. Doit-il le jeter à la poubelle ?",
    title: "Cycle de vie d'un téléphone"
},


];

export default listScenario;