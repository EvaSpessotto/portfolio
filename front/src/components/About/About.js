import React from 'react';
import '../../style/about.scss';
import { Container, Row , Col } from 'reactstrap';

const About = () => {
  const links = {
    arenes: 'http://arenes.entmip.fr/',
    tarbes: 'http://www.iut-tarbes.fr/Licence-Professionnelle,182.html?retour=back',
    wcs: 'https://wildcodeschool.fr/formation-developpeur-web-mobile/',
    commit42: 'https://www.commit42.fr/',
    serigraphie: 'https://www.instagram.com/p/Bq2krq1FWb9/',
    argentique: 'http://1.bp.blogspot.com/-mDY72l6Z1ng/T7skptxJS-I/AAAAAAAAAh8/tf25ZseJ2WY/s1600/Praktica+MTL+50.jpg'

  }
  return (
    <Container id="about">
      <Row>
        <Col lg="6" xs="12" className="header-about">
          <h1>(re)Bonjour !</h1>
          <div className="line"></div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg="6" xs="12" className="pres-about">
          <p>Je m'appelle Eva Spessotto, je suis développeuse junior mais aussi graphiste. </p>
          <p>
            Je vis dans la région de Toulouse où j'ai étudié pendant deux ans le Design Graphique au <a href={links.arenes} className="yellow" target="_blank" rel="noopener noreferrer">lycée des Arènes</a>. 
            J’ai ensuite fait une licence professionnelle en Communication digitale à <a href={links.tarbes} className="blue" target="_blank" rel="noopener noreferrer">l'IUT de Tarbes</a> où j’étais alternante graphiste à Total. 
            C'est durant cette année là que je me suis réellement passionnée pour le développement web, 
            j'ai alors décidé de faire une formation Développeur web à la <a href={links.wcs} className="red" target="_blank" rel="noopener noreferrer">Wild Code School</a> de Toulouse.
          </p>
          <p>
            Et me voici, presque 5 mois plus tard après le début de cette formation comme développeuse web junior.
            Spécialisée  (pour le moment) en Javascript, notamment avec React mais aussi Node JS, j’ai décroché un 
            stage chez <a href={links.commit42} className="yellow" target="_blank" rel="noopener noreferrer">Commit42</a>, un studio de développement web à Toulouse.
          </p>
          <p>
            Le web n’est pas la seule chose qui me fait vibrer, j’aime tout particulièrement l'illustration, 
            la <a href={links.serigraphie} className="blue" target="_blank" rel="noopener noreferrer">sérigraphie</a> et la photographie (<a href={links.argentique} className="red" target="_blank" rel="noopener noreferrer">argentique</a> comme numérique). Étant assez adepte du DIY, 
            j’ai monté mon propre atelier de sérigraphie tout récemment (commencé il y a 3 ans, il était temps...), 
            vous trouverez donc aussi des projets print et photographiques sur mon portfolio avec de jolies clichés 
            pris par mes soins.
          </p>
          <p>
            N’hésitez pas à m’envoyer un message pour toute suggestion d’amélioration/d’idées ou me faire remonter 
            s’il y a des bugs sur ce site.
          </p>
          <p>Bonne visite !</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;