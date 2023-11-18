import { useEffect } from 'preact/hooks';
import { useDocument } from '../../hooks/useDocument';

export const CGV = () => {
  const doc = useDocument();

  useEffect(() => {
    if (doc)
      doc.title = 'Arvalia | CGV';
  }, []);

  return (
    <section>
      <main className="cgu">
        <h1>Conditions Générales de Ventes</h1>
        <p>Date d'entrée en vigueur: MM/JJ/AAAA</p>
        <article className="quote">
          <i className="fa-regular fa-comments"></i>
          <p>Nous ne pouvons être tenu responsable des dommages directs ou indirects résultant de l'utilisation
            d'Arvalia, sauf en cas de faute grave ou de négligence prouvée de sa part.</p>
        </article>
        <article className="cg-item" id="Introduction">
          <h2>Ⅰ. Introduction</h2>
          <p>Les présentes Conditions Générales de Ventes (CGV) régissent la vente d'objet(s) du jeu vidéo Arvalia,
            édité par
            Phoenix Rise, ci-après dénommé le
            "Vendeur". Toute personne physique ou morale procédant à l'achat d'objet(s) dans le jeu est désignée
            comme
            "l'Acheteur".</p>
        </article>
        <article className="cg-item" id="Acceptation-CGV">
          <h2>Ⅱ. Acceptation des CGV</h2>
          <p>L'Acheteur reconnaît avoir pris connaissance des présentes CGV et les accepte intégralement lors de
            l'achat d'objets dans Arvalia. Les CGV prévalent sur toute autre condition générale ou particulière
            qui n'aurait
            pas été expressément acceptée par écrit par le Vendeur.</p>
        </article>
        <article className="cg-item" id="Prix">
          <h2>Ⅲ. Prix</h2>
          <p>Le prix des objets présents dans Arvalia est indiqué en euros (€) et comprend toutes les taxes
            applicables. Le Vendeur se
            réserve le droit de modifier les prix à tout moment, mais le prix applicable à l'Acheteur sera celui en
            vigueur au moment de la commande.</p>
        </article>
        <article className="cg-item" id="Modes-de-Paiement">
          <h2>Ⅳ. Modes de Paiement</h2>
          <p>Les modes de paiement acceptés sont ceux spécifiés lors du processus de commande. Les paiements sont
            sécurisés et effectués via des moyens de paiement reconnus et sécurisés.</p>
        </article>
        <article className="cg-item" id="Modes-de-livraison">
          <h2>Ⅴ. Modes de Livraison</h2>
          <p>Arvalia sera mis à disposition de l'Acheteur sous forme de téléchargement numérique depuis la
            plateforme de distribution spécifiée lors de la commande.</p>
        </article>
        <article className="cg-item" id="Delail-de-Livraison">
          <h2>Ⅵ. Délai de Livraison</h2>
          <p>Une fois le paiement confirmé, Arvalia sera disponible en téléchargement immédiat. Le Vendeur
            ne peut être tenu responsable de tout retard lié à des problèmes techniques ou de réseau indépendants de
            sa volonté.</p>
        </article>
        <article className="cg-item" id="Droit-de-Retraction">
          <h2>Ⅶ. Droit de Rétractation</h2>
          <p>Conformément à la législation en vigueur, l'Acheteur dispose d'un délai de rétractation de 5 jours
            à compter de la date de l'achat d'un objet. Pour exercer ce droit, l'Acheteur doit notifier sa
            rétractation par écrit au Vendeur.</p>
        </article>
        <article className="cg-item" id="Support-Technique">
          <h2>Ⅷ. Support Technique</h2>
          <p>Le Vendeur s'engage à fournir un support technique pour résoudre tout problème lié à l'installation ou au
            fonctionnement d'Arvalia. Les demandes de support technique doivent être soumises par l'Acheteur via
            les canaux de communication spécifiés sur ce site web.</p>
        </article>
        <article className="cg-item" id="Loi-Applicable-et-Juridiction">
          <h2>Ⅹ. Loi Applicable et Juridiction</h2>
          <p>Les présentes CGV sont régies par les lois de France et tout litige relatif aux CGV ou à l'utilisation
            d'Arvalia sera soumis à la juridiction exclusive des tribunaux de Lyon.</p>
        </article>
        <article className="quote">
          <i className="fa-regular fa-comments"></i>
          <p>Nous nous réservons le droit de modifier les présentes CGV à tout moment. Les modifications seront
            applicables dès leur publication sur ce site web.</p>
        </article>
        <article className="cg-footer">
          <p>Phoenix Rise<br/>Rédigé le 26/08/2023</p>
        </article>
      </main>
    </section>
  );
};

