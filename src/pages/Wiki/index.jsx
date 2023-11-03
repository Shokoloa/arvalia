import React, { useEffect } from 'react';
import cover from '../../assets/wiki/default-page-cover-K4LPTE6Y.png';
import icon from '../../assets/logo/arvalia-nobg.png';

export const Wiki = () => {
  useEffect(() => {
    document.getElementById('nav-menu').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('bg').style.display = 'none';
  });

  return (
    <section>
      <div className="wiki-main">
        <aside className="wiki-sidebar">
          <section className="pages">
            <section className="wiki-sidebar-top">
              <img src={icon} draggable={false} alt="" />
              <h1>Arvalia Docs</h1>
            </section>
            <article className="page actual"><button>Accueil</button></article>
            <section className="category">
              <h1>Category</h1>
              <article className="page"><button>Label1</button></article>
              <article className="page"><button>Label2</button></article>
              <article className="link"><button>Redirect1 <i className="uil uil-link-alt"></i></button></article>
            </section>
          </section>
        </aside>
        <main className="wiki-container">
          <img className="banner" src={cover} draggable={false} alt="" />
          <h1 style={{ margin: '15px 0 0 10px', fontSize: '35px' }} className="pagename">Page name</h1>
          <p className="pagedesc">Page description</p>
          <section className="content">
            <h1 id="lorem1">Title<i onClick={() => window.location.href = '#lorem1'} className="uil uil-tag-alt"></i></h1>
            <p>Normal Text</p>
            <p className="italic">Italic Text</p>
            <p className="underline">Underline Text</p>
            <p className="bold">Bold Text</p>
            <p className="marked">Marked Text</p>
            <blockquote className="quote">Quote Text</blockquote>
            <button>HyperLink</button>
            <div className="separator" style={{ backgroundColor: 'transparent' }}></div>
            <div className="separator"></div>
            <article className="info">
              <i className="uil uil-info-circle"></i>
              <p>Information Quote</p>
            </article>
            <article className="warning">
              <i className="uil uil-exclamation-triangle"></i>
              <p>Warning Quote</p>
            </article>
            <article className="valid">
              <i className="uil uil-check-circle"></i>
              <p>Valid Quote</p>
            </article>
            <article className="error">
              <i className="uil uil-times-circle"></i>
              <p>Error Quote</p>
            </article>
          </section>

          <div className="wiki-footer">
            <section className="wiki-pagination">
              <article className="wiki-footercard-next">
                <p>Suivant</p>
                <h1>Lorem, ipsum dolor.</h1>
              </article>
            </section>
          </div>
        </main>
      </div>
    </section>
  );
};

