import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/card'; // chemin vers ton composant
import { Youtube, Mail, ArrowRight, Share2, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white">
            <img src={`${process.env.PUBLIC_URL}/images/photo_perso.jpg`} alt="Photo" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Max Lucas</h1>
            <p className="text-xl mb-2">Digital Communication Strategist & Community Manager</p>
            <p className="text-lg mb-6">Étudiant à EPITA (Ingénieur Informatique)</p>
            <p className="text-lg opacity-90">
              "Être la représentation d'une école sur les réseaux sociaux"
            </p>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-12 container mx-auto px-4">
        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Compétences</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-700 rounded-lg text-white">
              <h3 className="font-semibold mb-2">Community Management</h3>
              <p className="text-gray-300">Gestion de communautés de +80k membres</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg text-white">
              <h3 className="font-semibold mb-2">Création de Contenu</h3>
              <p className="text-gray-300">+46k vues sur TikTok</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg text-white">
              <h3 className="font-semibold mb-2">Marketing Digital</h3>
              <p className="text-gray-300">+20% d'augmentation des recrutements</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Projets Phares</h2>
          
          {/* AuSoleil Project */}
          <Card className="mb-8 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">AuSoleil - Jeu & Communauté Gaming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-xl mb-4 text-white">Fondateur & Community Manager</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 80,000 joueurs uniques</li>
                    <li>• <strong className="text-white">712 vidéos YouTube</strong> créées par la communauté (325,000 vues)</li>
                    <li>• <strong className="text-white">14 vidéos TikTok</strong> produites par notre équipe (46,000 vues)</li>
                    <li>• Une communauté active de joueurs entre 13 et 20 ans</li>
                  </ul>
                  <div className="flex gap-4 mt-4">
                    <a href="https://www.youtube.com/@ausoleilmcpe3297" 
                       className="flex items-center gap-2 text-red-400 hover:text-red-300">
                      <Youtube className="w-5 h-5" />
                      Chaîne YouTube
                    </a>
                    <a href="https://www.tiktok.com/@mcpe_ausoleil" 
                       className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                      <Share2 className="w-5 h-5" />
                      TikTok
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <img src={`${process.env.PUBLIC_URL}/images/tiktok2.png`} alt="Screenshots AuSoleil" className="w-full rounded-lg object-cover h-48" />
                    <div className="grid grid-cols-6 gap-2 mt-2">
                      {[2563, 7302, 7670, 8643, 3214, 1603].map((views, index) => (
                        <div key={index} className="relative">
                          <div className="absolute bottom-1 left-1 text-xs text-gray-300 bg-black bg-opacity-75 px-1 rounded">
                            {views} vues
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EPITA Project */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Campagne EPITA - Communication Digitale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-xl mb-4 text-white">Résultats Exceptionnels</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <strong className="text-white">+20%</strong> d'augmentation des recrutements en 2024</li>
                      <li>• 7 vidéos pendant Parcoursup sur un nouveau compte</li>
                      <li>• Engagement fort de la communauté étudiante ciblée</li>
                      <li>• Rayonnement international</li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 grid grid-cols-4 gap-2">
                      <a href="https://www.instagram.com/maxouzz/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                        <img src={`${process.env.PUBLIC_URL}/images/insta_3.png`} alt="EPITA Video 1" className="w-full rounded-lg" />
                      </a>
                      <a href="https://www.instagram.com/maxouzz/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                        <img src={`${process.env.PUBLIC_URL}/images/insta_2.png`} alt="EPITA Video 2" className="w-full rounded-lg" />
                      </a>
                      <a href="https://www.instagram.com/maxouzz/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                        <img src={`${process.env.PUBLIC_URL}/images/insta_1.png`} alt="EPITA Video 3" className="w-full rounded-lg" />
                      </a>
                      <a href="https://www.instagram.com/maxouzz/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                        <img src={`${process.env.PUBLIC_URL}/images/insta_4.png`} alt="EPITA Video 4" className="w-full rounded-lg" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Messages des étudiants */}
                <div>
                  <h3 className="font-semibold text-xl mb-4 text-white">Retours des Étudiants</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gray-900 rounded-lg overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/retour3.png`}
                        alt="Message Étudiant 1"
                        className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
                      />
                    </div>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/retour2.png`}
                      alt="Message Étudiant 2"
                      className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
                     />
                    </div>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/retour4.png`}
                      alt="Message Étudiant 3"
                      className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/retour1.png`}
                      alt="Message Étudiant 4"
                      className="w-full h-auto transition-transform duration-300 transform hover:scale-110"
                    />
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400 text-sm">Ces messages démontrent l'impact réel de ma communication sur les futurs étudiants, avec des questions provenant de France et de l'international.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">Processus de Collaboration</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg text-white">
              <h3 className="font-semibold mb-2">1. Analyse</h3>
              <p className="text-gray-300">Étude approfondie de votre école et de vos objectifs de communication</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg text-white">
              <h3 className="font-semibold mb-2">2. Stratégie</h3>
              <p className="text-gray-300">Publication intensive pendant Parcoursup (24 vidéos sur 2 mois) pour s'assurer que les étudiants choisissent votre école et pas une autre</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg text-white">
              <h3 className="font-semibold mb-2">3. Production</h3>
              <p className="text-gray-300">Création de contenu dynamique en temps record grâce à une équipe de 4 monteurs travaillant en parallèle, garantissant une qualité professionnelle</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg text-white">
              <h3 className="font-semibold mb-2">4. Optimisation</h3>
              <p className="text-gray-300">Ajustement continu du contenu selon les besoins de l'école : mise en avant des formations prioritaires, adaptation aux objectifs de recrutement, réponse aux questions fréquentes des futurs étudiants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-blue-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Prêt à Révolutionner Votre Communication ?</h2>
          <p className="mb-8 text-xl">Contactez-moi pour discuter de votre projet</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:gloriaflex.pro@gmail.com" 
               className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100">
              <Mail className="w-5 h-5" />
              max.lucas@epita.fr
            </a>
            <a href="tel:+33783096255" 
               className="flex items-center gap-2 border border-white px-6 py-3 rounded-lg hover:bg-blue-800">
              <MessageCircle className="w-5 h-5" />
              +33 7 83 09 62 55
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
