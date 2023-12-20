import React from 'react';
import './templates-library.style.css';

export const TemplatesLibraryPage = () => {

  const MOCK_ITEMS = [{}, {}, {}, {}, {}, {}, {}, {}]

  return (
    <div id="app-main-container">
      <nav id="toolbar">
        <div id="left-toolbar-items">
          <div>User Name</div>
          <h1>Geny Files</h1>
        </div>
        <div id="toolbar-tools">
          <button>Upload new</button>
          <button>Download examples</button>
          <button>Trash</button>
        </div>
      </nav>
      <main class="content">
        <div class="cards">
          {MOCK_ITEMS.map((item, idx) => (
            <div class="template-item" key={idx}>
              <div class="item-header">
                <div class="badge">
                  DC
                </div>
                <div class="item-title">
                  Diplomas and Certificates
                </div>
              </div>
              <div class="item-footer">
                <div class="item-description">
                  Endpoint
                </div>
                <div class="item-actions">
                  <button>Download</button>
                  <button>Payload example</button>
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


