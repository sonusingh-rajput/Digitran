# 🚀 DigiTran - Google Apps Script (No-Backend Direct Gmail Setup)

All contact form submissions will be delivered strictly to:  
👉 **`sonusingh8002384197@gmail.com`**

Zero server backend, zero monthly fees, zero 3rd-party services.

---

## ⏱️ 60-Second Setup / Update Guide

### Step 1: Open Google Apps Script
1. Go to [https://script.google.com](https://script.google.com) and log in with **`sonusingh8002384197@gmail.com`**.
2. Open your project.

---

### Step 2: Paste the Updated Code
1. Erase all code inside the editor (`Code.gs`).
2. Copy the entire code from **[`google-apps-script/Code.gs`](./Code.gs)** and paste it.
3. Click the **Save** icon (💾 or Ctrl+S).

---

### Step 3: Test It First (Optional but Recommended!)
1. At the top toolbar where it shows the function dropdown, select **`testSend`**.
2. Click the ▶️ **Run** button.
3. If asked to Authorize:
   - Click **Review permissions** ➔ Choose your account ➔ **Advanced** ➔ **Go to DigiTran Form Mailer (unsafe)** ➔ **Allow**.
4. Check your Gmail inbox (`sonusingh8002384197@gmail.com`). You will see a test email arrive instantly!

---

### Step 4: Deploy as Web App
1. Click the blue **Deploy** button (top right) ➔ select **New deployment**.
2. Click the gear icon ⚙️ ➔ select **Web app**.
3. Set:
   - **Execute as**: `Me (sonusingh8002384197@gmail.com)`
   - **Who has access**: **`Anyone`** ⚠️ *(Must be Anyone so visitors can submit forms)*
4. Click **Deploy**.
5. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/.../exec`).

---

### Step 5: Paste URL in Website
Open [`src/pages/ContactPage.jsx`](../src/pages/ContactPage.jsx) line 23:
```javascript
const GOOGLE_SCRIPT_URL = 'PASTE_YOUR_NEW_WEB_APP_URL_HERE';
const SUBMIT_EMAIL = 'sonusingh8002384197@gmail.com';
```

All submissions will now flow directly into **`sonusingh8002384197@gmail.com`**!
