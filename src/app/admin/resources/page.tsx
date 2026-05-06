"use client";

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { ResourcesData, ResourceCategory, ResourceItem } from "@/types/resources";

// ─── Password Gate ───
const PasswordGate = ({ onAuth }: { onAuth: (pwd: string) => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Password required");
      return;
    }
    setError("");
    onAuth(password);
  };

  return (
    <GateWrapper>
      <div className="gate-card">
        <h1>🔐 ADMIN ACCESS</h1>
        <p>Enter the admin password to continue</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
            autoFocus
          />
          {error && <span className="error">{error}</span>}
          <button type="submit">ENTER →</button>
        </form>
      </div>
    </GateWrapper>
  );
};

// ─── Main Admin Panel ───
const AdminResourcesPage = () => {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState<ResourcesData | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"starter" | "categories">("categories");
  const [editingCatIdx, setEditingCatIdx] = useState<number | null>(null);
  const [editingItemIdx, setEditingItemIdx] = useState<{ cat: number; item: number } | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/data/resources.json");
      const json = await res.json();
      setData(json);
    } catch {
      console.error("Failed to load data");
    }
    setLoading(false);
  }, []);

  const handleAuth = async (pwd: string) => {
    setPassword(pwd);
    setLoading(true);
    try {
      const res = await fetch("/api/resources", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${pwd}` },
        body: JSON.stringify(await (await fetch("/data/resources.json")).json()),
      });
      if (res.ok) {
        setAuthed(true);
        setAuthError("");
        await fetchData();
      } else {
        setAuthError("Invalid password");
      }
    } catch {
      setAuthError("Connection error");
    }
    setLoading(false);
  };

  const saveData = async () => {
    if (!data) return;
    setSaving(true);
    setSaveMsg("");
    try {
      const res = await fetch("/api/resources", {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${password}` },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSaveMsg("✅ Saved successfully!");
      } else {
        const err = await res.json();
        setSaveMsg(`❌ ${err.error || "Save failed"}`);
      }
    } catch {
      setSaveMsg("❌ Network error");
    }
    setSaving(false);
    setTimeout(() => setSaveMsg(""), 3000);
  };

  // ── Category CRUD ──
  const addCategory = () => {
    if (!data) return;
    setData({
      ...data,
      categories: [...data.categories, { title: "🆕 New Category", items: [] }],
    });
    setEditingCatIdx(data.categories.length);
  };

  const updateCategory = (idx: number, updates: Partial<ResourceCategory>) => {
    if (!data) return;
    const cats = [...data.categories];
    cats[idx] = { ...cats[idx], ...updates };
    setData({ ...data, categories: cats });
  };

  const deleteCategory = (idx: number) => {
    if (!data) return;
    if (!confirm(`Delete "${data.categories[idx].title}"?`)) return;
    setData({ ...data, categories: data.categories.filter((_, i) => i !== idx) });
    setEditingCatIdx(null);
  };

  const moveCategory = (idx: number, dir: -1 | 1) => {
    if (!data) return;
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= data.categories.length) return;
    const cats = [...data.categories];
    [cats[idx], cats[newIdx]] = [cats[newIdx], cats[idx]];
    setData({ ...data, categories: cats });
    setEditingCatIdx(newIdx);
  };

  // ── Item CRUD ──
  const addItem = (catIdx: number) => {
    if (!data) return;
    const cats = [...data.categories];
    cats[catIdx] = {
      ...cats[catIdx],
      items: [...cats[catIdx].items, { name: "New Resource", url: "https://", description: "Description here" }],
    };
    setData({ ...data, categories: cats });
    setEditingItemIdx({ cat: catIdx, item: cats[catIdx].items.length - 1 });
  };

  const updateItem = (catIdx: number, itemIdx: number, updates: Partial<ResourceItem>) => {
    if (!data) return;
    const cats = [...data.categories];
    const items = [...cats[catIdx].items];
    items[itemIdx] = { ...items[itemIdx], ...updates };
    cats[catIdx] = { ...cats[catIdx], items };
    setData({ ...data, categories: cats });
  };

  const deleteItem = (catIdx: number, itemIdx: number) => {
    if (!data) return;
    const cats = [...data.categories];
    cats[catIdx] = {
      ...cats[catIdx],
      items: cats[catIdx].items.filter((_, i) => i !== itemIdx),
    };
    setData({ ...data, categories: cats });
    setEditingItemIdx(null);
  };

  // ── Starter helpers ──
  const updateStarter = (field: string, value: string) => {
    if (!data) return;
    setData({ ...data, reactNative: { ...data.reactNative, [field]: value } });
  };

  const updateStarterLink = (idx: number, field: "name" | "url", value: string) => {
    if (!data) return;
    const links = [...data.reactNative.links];
    links[idx] = { ...links[idx], [field]: value };
    setData({ ...data, reactNative: { ...data.reactNative, links } });
  };

  const addStarterLink = () => {
    if (!data) return;
    setData({
      ...data,
      reactNative: {
        ...data.reactNative,
        links: [...data.reactNative.links, { name: "New Link", url: "https://" }],
      },
    });
  };

  const deleteStarterLink = (idx: number) => {
    if (!data) return;
    setData({
      ...data,
      reactNative: {
        ...data.reactNative,
        links: data.reactNative.links.filter((_, i) => i !== idx),
      },
    });
  };

  if (!authed) {
    return (
      <>
        <PasswordGate onAuth={handleAuth} />
        {authError && (
          <div style={{ position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)", background: "#ff6b6b", color: "#fff", padding: "12px 24px", border: "3px solid #000", boxShadow: "4px 4px 0 #000", fontFamily: "'Courier New', monospace", fontWeight: 700 }}>
            {authError}
          </div>
        )}
      </>
    );
  }

  if (loading || !data) {
    return (
      <AdminWrapper>
        <div className="loading">⏳ Loading...</div>
      </AdminWrapper>
    );
  }

  return (
    <AdminWrapper>
      {/* Top Bar */}
      <div className="topbar">
        <h1>⚡ RESOURCE ADMIN</h1>
        <div className="topbar-actions">
          {saveMsg && <span className="save-msg">{saveMsg}</span>}
          <button className="save-btn" onClick={saveData} disabled={saving}>
            {saving ? "SAVING..." : "💾 SAVE CHANGES"}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className={`tab ${activeTab === "categories" ? "active" : ""}`} onClick={() => setActiveTab("categories")}>
          📂 Categories ({data.categories.length})
        </button>
        <button className={`tab ${activeTab === "starter" ? "active" : ""}`} onClick={() => setActiveTab("starter")}>
          📱 React Native Starter
        </button>
      </div>

      {/* ─── Starter Tab ─── */}
      {activeTab === "starter" && (
        <div className="panel">
          <h2>📱 React Native Starter Section</h2>
          <div className="form-grid">
            <label>
              Title
              <input value={data.reactNative.title} onChange={(e) => updateStarter("title", e.target.value)} />
            </label>
            <label>
              Subtitle
              <input value={data.reactNative.subtitle} onChange={(e) => updateStarter("subtitle", e.target.value)} />
            </label>
            <label className="full-width">
              Description
              <input value={data.reactNative.description} onChange={(e) => updateStarter("description", e.target.value)} />
            </label>
            <label className="full-width">
              Instruction
              <input value={data.reactNative.instruction} onChange={(e) => updateStarter("instruction", e.target.value)} />
            </label>
            <label className="full-width">
              Code Block
              <textarea rows={4} value={data.reactNative.code} onChange={(e) => updateStarter("code", e.target.value)} />
            </label>
          </div>

          <h3>🔗 Links</h3>
          {data.reactNative.links.map((link, i) => (
            <div key={i} className="inline-edit">
              <input value={link.name} onChange={(e) => updateStarterLink(i, "name", e.target.value)} placeholder="Name" />
              <input value={link.url} onChange={(e) => updateStarterLink(i, "url", e.target.value)} placeholder="URL" />
              <button className="delete-btn" onClick={() => deleteStarterLink(i)}>✕</button>
            </div>
          ))}
          <button className="add-btn" onClick={addStarterLink}>+ Add Link</button>
        </div>
      )}

      {/* ─── Categories Tab ─── */}
      {activeTab === "categories" && (
        <div className="panel">
          <div className="panel-header">
            <h2>📂 Resource Categories</h2>
            <button className="add-btn" onClick={addCategory}>+ Add Category</button>
          </div>

          <div className="categories-list">
            {data.categories.map((cat, catIdx) => (
              <div key={catIdx} className={`category-card ${editingCatIdx === catIdx ? "expanded" : ""}`}>
                <div className="category-header" onClick={() => setEditingCatIdx(editingCatIdx === catIdx ? null : catIdx)}>
                  <div className="category-header-left">
                    <div className="reorder-btns">
                      <button onClick={(e) => { e.stopPropagation(); moveCategory(catIdx, -1); }} disabled={catIdx === 0}>▲</button>
                      <button onClick={(e) => { e.stopPropagation(); moveCategory(catIdx, 1); }} disabled={catIdx === data.categories.length - 1}>▼</button>
                    </div>
                    <span className="cat-title">{cat.title}</span>
                    <span className="cat-count">{cat.items.length} items</span>
                  </div>
                  <div className="category-header-right">
                    <button className="delete-btn" onClick={(e) => { e.stopPropagation(); deleteCategory(catIdx); }}>🗑</button>
                    <span className="expand-icon">{editingCatIdx === catIdx ? "▼" : "▶"}</span>
                  </div>
                </div>

                {editingCatIdx === catIdx && (
                  <div className="category-body">
                    <div className="cat-title-edit">
                      <label>
                        Category Title
                        <input value={cat.title} onChange={(e) => updateCategory(catIdx, { title: e.target.value })} />
                      </label>
                    </div>

                    <div className="items-section">
                      <div className="items-header">
                        <h4>Resources</h4>
                        <button className="add-btn small" onClick={() => addItem(catIdx)}>+ Add Resource</button>
                      </div>

                      {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className={`item-card ${editingItemIdx?.cat === catIdx && editingItemIdx?.item === itemIdx ? "editing" : ""}`}>
                          {editingItemIdx?.cat === catIdx && editingItemIdx?.item === itemIdx ? (
                            <div className="item-edit-form">
                              <input value={item.name} onChange={(e) => updateItem(catIdx, itemIdx, { name: e.target.value })} placeholder="Resource name" />
                              <input value={item.url} onChange={(e) => updateItem(catIdx, itemIdx, { url: e.target.value })} placeholder="URL" />
                              <input value={item.description} onChange={(e) => updateItem(catIdx, itemIdx, { description: e.target.value })} placeholder="Description" />
                              <div className="item-edit-actions">
                                <button className="done-btn" onClick={() => setEditingItemIdx(null)}>✓ Done</button>
                                <button className="delete-btn" onClick={() => deleteItem(catIdx, itemIdx)}>🗑 Delete</button>
                              </div>
                            </div>
                          ) : (
                            <div className="item-preview" onClick={() => setEditingItemIdx({ cat: catIdx, item: itemIdx })}>
                              <div className="item-info">
                                <strong>{item.name}</strong>
                                <span className="item-desc">{item.description}</span>
                              </div>
                              <span className="edit-icon">✏️</span>
                            </div>
                          )}
                        </div>
                      ))}

                      {cat.items.length === 0 && (
                        <div className="empty-state">No resources yet. Click &quot;+ Add Resource&quot; to get started.</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </AdminWrapper>
  );
};

// ═══════════════════════════════════════
//  STYLED COMPONENTS
// ═══════════════════════════════════════

const GateWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', monospace;
  padding: 20px;

  .gate-card {
    background: #ffffff;
    border: 4px solid #000;
    box-shadow: 12px 12px 0 #000;
    padding: 40px;
    max-width: 420px;
    width: 100%;
    text-align: center;

    h1 {
      font-size: 32px;
      font-weight: 900;
      margin: 0 0 10px;
      color: #000;
    }

    p {
      color: #666;
      font-weight: 600;
      margin: 0 0 25px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    input {
      padding: 14px;
      border: 3px solid #000;
      font-family: 'Courier New', monospace;
      font-size: 16px;
      font-weight: 700;
      box-shadow: 4px 4px 0 #000;

      &:focus {
        outline: none;
        translate: -2px -2px;
        box-shadow: 6px 6px 0 #000;
      }
    }

    button {
      padding: 14px;
      background: #ff6b6b;
      color: #fff;
      border: 3px solid #000;
      font-family: 'Courier New', monospace;
      font-size: 16px;
      font-weight: 900;
      cursor: pointer;
      box-shadow: 4px 4px 0 #000;
      transition: all 0.2s;

      &:hover {
        translate: -2px -2px;
        box-shadow: 6px 6px 0 #000;
        background: #ff5252;
      }

      &:active {
        translate: 0;
        box-shadow: 2px 2px 0 #000;
      }
    }

    .error {
      color: #ff6b6b;
      font-weight: 700;
      font-size: 14px;
    }
  }
`;

const AdminWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  font-family: 'Courier New', monospace;
  color: #fff;

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    font-size: 24px;
    font-weight: 900;
  }

  /* ── Top Bar ── */
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background: #000;
    border-bottom: 4px solid #ff6b6b;
    flex-wrap: wrap;
    gap: 12px;

    h1 {
      font-size: 24px;
      font-weight: 900;
      margin: 0;
      color: #4ecdc4;
    }

    .topbar-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .save-msg {
      font-size: 14px;
      font-weight: 700;
    }

    .save-btn {
      padding: 10px 24px;
      background: #4ecdc4;
      color: #000;
      border: 3px solid #000;
      font-family: 'Courier New', monospace;
      font-weight: 900;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 4px 4px 0 #000;
      transition: all 0.2s;

      &:hover {
        translate: -2px -2px;
        box-shadow: 6px 6px 0 #000;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  /* ── Tabs ── */
  .tabs {
    display: flex;
    gap: 0;
    padding: 0 24px;
    padding-top: 24px;

    .tab {
      padding: 12px 24px;
      background: rgba(255,255,255,0.05);
      color: #aaa;
      border: 3px solid #333;
      border-bottom: none;
      font-family: 'Courier New', monospace;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;

      &.active {
        background: rgba(255,255,255,0.1);
        color: #fff;
        border-color: #4ecdc4;
      }

      &:hover:not(.active) {
        background: rgba(255,255,255,0.08);
        color: #ddd;
      }
    }
  }

  /* ── Panel ── */
  .panel {
    margin: 0 24px 24px;
    padding: 24px;
    background: rgba(255,255,255,0.05);
    border: 3px solid #333;
    border-top: 3px solid #4ecdc4;

    h2 {
      font-size: 22px;
      font-weight: 900;
      margin: 0 0 20px;
      color: #4ecdc4;
    }

    h3 {
      font-size: 18px;
      font-weight: 900;
      margin: 20px 0 12px;
      color: #ff6b6b;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h2 { margin: 0; }
    }
  }

  /* ── Form elements ── */
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    .full-width { grid-column: 1 / -1; }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 12px;
    font-weight: 700;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  input, textarea {
    padding: 10px 12px;
    background: rgba(0,0,0,0.4);
    color: #fff;
    border: 2px solid #444;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: #4ecdc4;
      box-shadow: 0 0 0 2px rgba(78,205,196,0.2);
    }
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  /* ── Inline edit row ── */
  .inline-edit {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
    align-items: center;

    input { flex: 1; }
  }

  /* ── Buttons ── */
  .add-btn {
    padding: 8px 16px;
    background: #4ecdc4;
    color: #000;
    border: 2px solid #000;
    font-family: 'Courier New', monospace;
    font-weight: 900;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #45b7d1;
      translate: -1px -1px;
    }

    &.small {
      padding: 6px 12px;
      font-size: 12px;
    }
  }

  .delete-btn {
    padding: 6px 10px;
    background: #ff6b6b;
    color: #fff;
    border: 2px solid #000;
    font-family: 'Courier New', monospace;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 13px;

    &:hover {
      background: #ff4757;
    }
  }

  .done-btn {
    padding: 6px 14px;
    background: #4ecdc4;
    color: #000;
    border: 2px solid #000;
    font-family: 'Courier New', monospace;
    font-weight: 900;
    font-size: 13px;
    cursor: pointer;

    &:hover { background: #45b7d1; }
  }

  /* ── Category Cards ── */
  .categories-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .category-card {
    border: 2px solid #333;
    background: rgba(0,0,0,0.2);
    transition: all 0.2s;

    &.expanded {
      border-color: #4ecdc4;
    }
  }

  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover { background: rgba(255,255,255,0.03); }
  }

  .category-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .category-header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .reorder-btns {
    display: flex;
    flex-direction: column;
    gap: 2px;

    button {
      padding: 2px 6px;
      background: rgba(255,255,255,0.1);
      color: #aaa;
      border: 1px solid #444;
      cursor: pointer;
      font-size: 10px;
      line-height: 1;

      &:hover:not(:disabled) { background: rgba(255,255,255,0.2); color: #fff; }
      &:disabled { opacity: 0.3; cursor: not-allowed; }
    }
  }

  .cat-title {
    font-weight: 900;
    font-size: 16px;
  }

  .cat-count {
    font-size: 12px;
    color: #888;
    font-weight: 600;
  }

  .expand-icon {
    font-size: 12px;
    color: #666;
  }

  /* ── Category Body ── */
  .category-body {
    padding: 16px;
    border-top: 2px solid #333;
    background: rgba(0,0,0,0.15);
  }

  .cat-title-edit {
    margin-bottom: 16px;
  }

  .items-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    h4 {
      margin: 0;
      font-size: 14px;
      font-weight: 900;
      color: #ff6b6b;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  /* ── Item Cards ── */
  .item-card {
    border: 2px solid #333;
    margin-bottom: 6px;
    background: rgba(0,0,0,0.2);
    transition: all 0.2s;

    &.editing {
      border-color: #ffeaa7;
    }
  }

  .item-preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    cursor: pointer;

    &:hover { background: rgba(255,255,255,0.03); }

    .item-info {
      display: flex;
      flex-direction: column;
      gap: 2px;

      strong { font-size: 14px; }
      .item-desc { font-size: 12px; color: #888; }
    }

    .edit-icon {
      font-size: 14px;
      opacity: 0.5;
      transition: opacity 0.2s;
    }

    &:hover .edit-icon { opacity: 1; }
  }

  .item-edit-form {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .item-edit-actions {
      display: flex;
      gap: 8px;
      margin-top: 4px;
    }
  }

  .empty-state {
    padding: 24px;
    text-align: center;
    color: #666;
    font-weight: 600;
    font-size: 14px;
    border: 2px dashed #333;
  }
`;

export default AdminResourcesPage;
