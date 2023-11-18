import { useEffect } from 'preact/hooks';
import { useDocument } from '../../hooks/useDocument';

export const CGU = () => {
  const doc = useDocument();

  useEffect(() => {
    if (doc)
      doc.title = 'Arvalia | CGU';
  }, []);

  return (
    <section>
      <main className="cgu">
        <h1>Conditions Générales d'Utilisation</h1>
        <p>Date d'entrée en vigueur: MM/JJ/AAAA</p>
        <article className="quote">
          <i className="fa-regular fa-comments"></i>
          <p>Nous ne pouvons pas être tenus responsables de tout dommage subi du fait d'une mauvaise utilisation de
            nos
            services.</p>
        </article>
        <article className="cg-item" id="Introduction">
          <h2>Ⅰ. Introduction</h2>
          <p>Les présentes Conditions Générales d'Utilisation (ci-après désignées "CGU") régissent votre utilisation
            du jeu vidéo intitulé Arvalia, développé par Phoenix Rise (ci-après désigné
            "le développeur"). En téléchargeant, installant ou utilisant le jeu,
            vous acceptez sans réserve l'ensemble des termes et conditions énoncées dans les présentes CGU.</p>
        </article>
        <article className="cg-item" id="Licence-Utilisation">
          <h2>Ⅱ. Licence d'Utilisation</h2>
          <p>Le développeur vous accorde une licence personnelle, non exclusive, non transférable et révocable pour
            utiliser Arvalia conformément aux présentes CGU. Cette licence est limitée à l'utilisation personnelle
            et
            non commerciale d'Arvalia. Vous n'êtes pas autorisé(e) à vendre, distribuer, louer, concéder sous
            licence,
            modifier, copier, reproduire, transférer, afficher publiquement, réaliser des travaux dérivés à partir
            d'Arvalia ou tenter de contourner les mesures de sécurité d'Arvalia.</p>
        </article>
        <article className="cg-item" id="Compte-Utilisateur">
          <h2>Ⅲ. Compte Utilisateur</h2>
          <p>Pour accéder à certaines fonctionnalités présentes sur Arvalia, vous pourriez devoir créer un compte
            utilisateur. Vous
            êtes responsable de maintenir la confidentialité de vos informations de compte et de restreindre l'accès
            à votre compte. Vous acceptez d'assumer la responsabilité de toutes les activités qui se déroulent sous
            votre compte.</p>
        </article>
        <article className="cg-item" id="Contenu-Genere">
          <h2>Ⅳ. Contenu Généré par l'Utilisateur</h2>
          <p>En utilisant le Arvalia, vous pouvez créer, télécharger ou partager du contenu généré par l'utilisateur.
            Vous
            reconnaissez que le développeur n'a aucune obligation de surveiller ce contenu, mais se réserve le droit
            de le supprimer s'il viole les présentes CGU ou est considéré comme inapproprié.</p>
        </article>
        <article className="cg-item" id="Propriete-Intellectuelle">
          <h2>Ⅴ. Propriété Intellectuelle</h2>
          <p>Arvalia, y compris mais sans s'y limiter, les graphismes, les textes, les musiques, les sons et les
            codes,
            est la propriété du développeur et est protégé par les lois sur la propriété intellectuelle. Vous
            acceptez de respecter ces droits et de ne pas copier, modifier ou distribuer le contenu d'Arvalia sans
            autorisation.</p>
        </article>
        <article className="cg-item" id="Modifications">
          <h2>Ⅵ. Modifications du jeu et des CGU</h2>
          <p>Le développeur se réserve le droit de mettre à jour, modifier, suspendre ou interrompre Arvalia à tout
            moment, sans préavis. De même, les CGU peuvent être mises à jour périodiquement. Il vous incombe de
            vérifier régulièrement les CGU pour prendre connaissance des éventuelles modifications. Votre
            utilisation continue d'Arvalia après de telles modifications constitue votre acceptation des nouvelles
            CGU.
          </p>
        </article>
        <article className="cg-item" id="Responsabilite">
          <h2>Ⅶ. Limitation de Responsabilité</h2>
          <p>Arvalia est fourni "tel quel" et le développeur ne garantit pas son adéquation à un usage particulier ni
            son bon fonctionnement sans interruption ou erreur. En aucun cas, le Développeur ne pourra être tenu
            responsable des dommages directs, indirects, spéciaux, accessoires, consécutifs ou punitifs résultant de
            l'utilisation ou de l'incapacité à utiliser le Jeu.</p>
        </article>
        <article className="cg-item" id="Loi-Juridiction">
          <h2>Ⅷ. Loi Applicable et Juridiction</h2>
          <p>Les présentes CGU sont régies par les lois de France et tout litige relatif aux CGU ou à l'utilisation
            d'Arvalia sera soumis à la juridiction exclusive des tribunaux de Lyon.</p>
        </article>
        <div className="quote">
          <i className="fa-regular fa-comments"></i>
          <p>En acceptant ces CGU, vous déclarez avoir lu et compris l'ensemble des termes et conditions énoncés dans
            ce document.</p>
        </div>
        <article className="cg-footer">
          <p>Phoenix Rise<br />Rédigé le 26/08/2023</p>
        </article>
      </main>
    </section>
  );
};

