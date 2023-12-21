import React from 'react';
import './templates-library.style.css';

export const TemplatesLibraryPage = () => {

  const MOCK_ITEMS = [{ title: 'DC' }, { title: 'A' }, {}, {}, {}, {}, {}, {}]

  return (
    <div id="app-main-container">
      <nav id="toolbar">
        <div id="left-toolbar-items">
          <div id="user">User Name</div>
          <h1 id="title">Geny Files 📑 🚀</h1>
        </div>
        <div id="toolbar-tools">
          <button class="ghost-button">Upload new</button>
          <button class="ghost-button">Download examples</button>
          <button class="ghost-button">Trash</button>
        </div>
      </nav>
      <main class="content">
        <div class="cards">
          {MOCK_ITEMS.map((item, idx) => (
            <div class="template-item" key={idx}>
              <div class="item-header">
                <div class="badge">
                  {item.title}
                </div>
                <a class="item-title" href="https://google.com">
                  Diplomas and Certificates asd asd asd asd asd asd asd asd asd asd asd asd
                </a>
              </div>
              <div class="item-footer">
                <div class="item-description">
                  2023 Generation ISC
                </div>
                <div class="item-actions">
                  <button>Generator</button>
                  <button>Dev options</button>
                  <button>Download</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


