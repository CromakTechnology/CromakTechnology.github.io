// js/faq-data_en.js
// Centralized Database for Cromak Knowledge Base (English)

const FAQ_DATABASE = [
    // ==========================================
    // PAYMENTS & LICENSES
    // ==========================================
    {
        categoria: "Payments & Licenses",
        produto: "General",
        pergunta: "How do I receive my license after purchase?",
        resposta: "Processing is instantaneous. As soon as payment is confirmed, your unique activation key and installation instructions are delivered directly to your registered email address.",
        tags: ["payment", "license", "key", "email", "activation", "purchase"]
    },
    {
        categoria: "Payments & Licenses",
        produto: "General",
        pergunta: "Can I use the license on more than one computer?",
        resposta: "It depends on your plan. The Lifetime Personal license allows activation on up to 3 computers simultaneously. Monthly and Annual licenses are limited to 1 active device at a time.",
        tags: ["computers", "lifetime", "annual", "monthly", "limit", "devices"]
    },
    {
        categoria: "Payments & Licenses",
        produto: "General",
        pergunta: "Do the software tools require an internet connection to work?",
        resposta: "Only initial license activation requires an internet connection. The vast majority of our tools are engineered to operate 100% offline, guaranteeing absolute privacy for your local data.",
        tags: ["offline", "internet", "connection", "privacy"]
    },

    // ==========================================
    // ACCESSIBILITY & AGENTS: CROMAK BRIDGE / BRIDGE VOX
    // ==========================================
    {
        categoria: "Accessibility",
        produto: "Bridge Vox",
        pergunta: "What is the difference between Cromak Bridge and Vox Mode?",
        resposta: "<strong>Cromak Bridge (Standard Mode)</strong> is designed for developers and power users who need an Auto-Coder and visual Windows automation. <strong>Bridge Vox Mode</strong> is focused on accessibility and visually impaired users: it transforms the interface into immersive audio (Text-to-Speech and native microphone), operating entirely through keyboard shortcuts.",
        tags: ["bridge", "vox", "accessibility", "visual impairment", "auto-coder", "modes"]
    },
    {
        categoria: "Accessibility",
        produto: "Bridge Vox",
        pergunta: "What are the primary global and quick navigation shortcuts in Bridge Vox?",
        resposta: "The primary shortcuts are:<br><ul>" +
                  "<li><strong>ESC:</strong> Immediately stops AI speech output (Shut Up).</li>" +
                  "<li><strong>F1:</strong> Contextual help regarding the active window/screen.</li>" +
                  "<li><strong>F2 (Push-to-Talk):</strong> Direct hardware mic recording (6s).</li>" +
                  "<li><strong>F4:</strong> Shuts down the system.</li>" +
                  "<li><strong>Single-letter hotkeys (with input unfocused):</strong> [T] Text editor/PDF, [R] Email client, [I] Invisible web browser, [A] File explorer, [C] Gemini math calculator, [Z] WhatsApp.</li>" +
                  "</ul>",
        tags: ["shortcuts", "keyboard", "commands", "esc", "f2", "walkie-talkie", "voice", "vox mode"]
    },
    {
        categoria: "Accessibility",
        produto: "Bridge Vox",
        pergunta: "Does Cromak Bridge store my data, chats, or voice on external servers?",
        resposta: "No. The architecture is strictly <strong>Local-First</strong>. Cromak Technology does not maintain cloud databases or telemetry for Bridge. Credentials, logs, chat history, and API keys remain on your local disk. Direct provider communication (BYOK) occurs from your computer straight to the chosen API (Google, OpenAI, Claude, Qwen) without intermediaries.",
        tags: ["privacy", "servers", "cloud", "security", "api key", "gemini", "openai", "telemetry"]
    },
    {
        categoria: "Accessibility",
        produto: "Bridge Vox",
        pergunta: "Which automation tools can the Bridge engine operate autonomously?",
        resposta: "Bridge integrates modules for: document generation (.pdf, .pptx, .xlsx); extensive text and large PDF parsing; phantom headless browsing and web scraping; YouTube video/MP3 downloads; email dispatch and retrieval (IMAP/SMTP); WhatsApp Web automation; computer vision screen inspection and webcam snapshots; and direct hardware controls, volume adjustments, and PowerShell script execution.",
        tags: ["tools", "agent", "automation", "pdf", "excel", "youtube", "whatsapp", "powershell", "webcam"]
    },

    // ==========================================
    // OPTIMIZATION: DEEPCLEAN SUITE (v1.6.2)
    // ==========================================
    {
        categoria: "Optimization",
        produto: "DeepClean Suite",
        pergunta: "What should I do if Windows encounters a blue screen or boot failure?",
        resposta: "DeepClean features the <strong>Safety Engine</strong>, maintaining an exact physical registry clone in <code>C:\\DEEPCLEANSUITE\\SOFTWARE_CLONE.hiv</code>.<br>If the system fails to boot:<br><ol>" +
                  "<li>On the Windows Recovery blue screen, select <em>Troubleshoot > Advanced Options > Command Prompt</em>.</li>" +
                  "<li>Execute the direct restoration command:<br><code>copy /y C:\\DEEPCLEANSUITE\\SOFTWARE_CLONE.hiv C:\\Windows\\System32\\config\\SOFTWARE</code></li>" +
                  "<li>Close the terminal and restart your computer to recover the boot loader immediately.</li></ol>",
        tags: ["blue screen", "bsod", "boot", "recover", "restore", "software_clone", "rescue", "cmd"]
    },
    {
        categoria: "Optimization",
        produto: "DeepClean Suite",
        pergunta: "How does the Master Password and DPAPI encryption protection work?",
        resposta: "DeepClean security utilizes the native <strong>Windows DPAPI (CryptProtectData)</strong> tied to machine hardware (TPM chip) and the active user account. No static keys are exposed on disk. When enabled, the system can enforce authentication upon launch and prior to any cleaning or deep file deletion, while applying automated progressive delays against brute-force attacks.",
        tags: ["master password", "dpapi", "tpm", "encryption", "security", "lock", "brute force"]
    },
    {
        categoria: "Optimization",
        produto: "DeepClean Suite",
        pergunta: "How do the deep uninstallation levels of Sniper Mode operate?",
        resposta: "The Sniper engine engages after the standard program uninstaller to eradicate residual traces on disk and inside the registry. In Settings, you can calibrate its aggressiveness across 3 modes:<br><ul>" +
                  "<li><strong>Basic:</strong> Sweeps orphan shortcuts and the primary installation folder.</li>" +
                  "<li><strong>Moderate (Default):</strong> Tracks associated registry keys and residual caches in <code>AppData</code> and <code>ProgramData</code>.</li>" +
                  "<li><strong>Aggressive:</strong> Performs deep heuristic scans for identifiers and lingering background service leftovers.</li></ul>",
        tags: ["sniper", "uninstaller", "remove leftovers", "appdata", "registry", "uninstall"]
    },
    {
        categoria: "Optimization",
        produto: "DeepClean Suite",
        pergunta: "What is the format of the PRO license key and how is it activated?",
        resposta: "The key follows the mask <code>CRKDCS-XXXX-XXXX-XXXX</code>. To validate:<br><ol>" +
                  "<li>Open DeepClean and click <strong>Activation / License</strong> on the side menu.</li>" +
                  "<li>Paste the 16-character key and click <strong>Activate License</strong>.</li></ol>" +
                  "During validation, the system generates an encrypted Hardware ID (HWID) signature to verify license integrity without collecting personal information.",
        tags: ["activate", "pro key", "crkdcs", "license", "hwid", "serial", "code"]
    },
    {
        categoria: "Optimization",
        produto: "DeepClean Suite",
        pergunta: "What do the Quick Optimizer and Game Booster do on the computer?",
        resposta: "The <strong>Quick Optimizer</strong> flushes memory standby lists in RAM and lowers the priority of idle background tasks. <strong>Game Booster</strong> dedicates CPU and GPU cores (AMD, NVIDIA, Intel Arc) to the active game process, temporarily suspending non-essential services to eliminate micro-stuttering.",
        tags: ["game booster", "ram", "optimizer", "games", "fps", "stuttering", "performance"]
    },
    {
        categoria: "Optimization",
        produto: "DeepClean Suite",
        pergunta: "Which programs can I safely disable at Windows Startup?",
        resposta: "The startup manager classifies boot items into three tiers:<br><ul>" +
                  "<li><strong>Essential (Green):</strong> Audio, display drivers, and Windows Security — <em>always keep enabled</em>.</li>" +
                  "<li><strong>Optional (Orange):</strong> Steam, Discord, Spotify, Epic Games, web browsers — <em>safe to disable to save up to 15 seconds on boot</em>.</li>" +
                  "<li><strong>Parasitic (Red):</strong> OEM telemetry agents, search bars, and updaters — <em>recommended to disable or remove</em>.</li></ul>",
        tags: ["startup", "boot", "slow boot", "discord", "steam", "speed up boot"]
    },
    {
        categoria: "Optimization",
        produto: "DeepClean Suite",
        pergunta: "Does DeepClean Suite send my data, reports, or history to the cloud?",
        resposta: "<strong>No.</strong> DeepClean is strictly <strong>Local-First</strong> and adheres to GDPR and LGPD standards. CPU/RAM/GPU telemetry and engine forensic logs (<code>CROMAK_DEEPCLEAN_Engine.log</code>) are processed and retained exclusively on your local disk. No personal data or browsing history ever leaves your machine.",
        tags: ["privacy", "telemetry", "data", "gdpr", "cloud", "security", "logs"]
    },
    {
        categoria: "Optimization",
        produto: "DeepClean Suite",
        pergunta: "What is the integrated WinTools module?",
        resposta: "It is an administrative control board centralizing 16 native advanced Windows diagnostics launched with one-click administrative elevation: Elevated CMD and PowerShell, SFC /scannow (System File Checker), Windows Memory Diagnostic, Disk Management (diskmgmt.msc), and Registry Editor (regedit).",
        tags: ["wintools", "cmd", "powershell", "sfc", "windows tools", "regedit"]
    },
    {
        categoria: "Optimization",
        produto: "DeepClean Suite",
        pergunta: "What does the cbsservice.exe (Cromak Sentinel) service do in the background?",
        resposta: "<code>cbsservice.exe</code> is a lightweight guardian service orchestrating Cromak Sentinel. It operates as a low-overhead monitor managing automated Smart Scheduler routines and system stability alerts without interfering with daily computer usage.",
        tags: ["sentinel", "cbsservice.exe", "service", "background", "smart scheduler"]
    },

    // ==========================================
    // SECURITY & NETWORK: CONNECTION BLACKOUT (v1.2.1)
    // ==========================================
    {
        categoria: "Security & Network",
        produto: "Connection Blackout",
        pergunta: "What is Total Lockdown (Kill Switch) and how does it work?",
        resposta: "<strong>Total Lockdown</strong> is a rapid-response containment mechanism designed for active cyber incidents (such as ransomware or external intrusions). In under 50ms, the engine injects top-priority firewall rules that isolate 100% of outbound and inbound external communications. Only the local loopback (<code>127.0.0.1</code>) is preserved so internal Windows services continue running without crashing. To restore normal traffic, click the release button on the Dashboard without rebooting.",
        tags: ["total lockdown", "kill switch", "isolation", "emergency", "ransomware", "disconnect"]
    },
    {
        categoria: "Security & Network",
        produto: "Connection Blackout",
        pergunta: "A game or program lost internet access after installing Blackout. How do I fix it?",
        resposta: "Follow these two steps:<br><ol>" +
                  "<li><strong>Check Dashboard:</strong> Confirm whether <em>Total Lockdown</em> is engaged (red alert). If active, click to release global network traffic.</li>" +
                  "<li><strong>Inspect Rules:</strong> Open the <em>Rules</em> tab and search for the program executable (<code>.exe</code>). If an Outbound block rule exists, delete it or switch the action to <em>Allow</em>.</li></ol>",
        tags: ["game", "blocked", "no internet", "rules", "unblock", "connection", "allow"]
    },
    {
        categoria: "Security & Network",
        produto: "Connection Blackout",
        pergunta: "Where are Traffic Recorder captures saved, and do I need Excel to read them?",
        resposta: "Recordings are saved by default to your <strong>Desktop</strong> with a timestamped filename (e.g., <code>Cromak_Trafego_Rede_DATE.csv</code>). <strong>Excel is not required</strong>: the software includes a built-in <em>Native Forensic CSV Viewer</em> featuring real-time search, high-contrast protocol tags (TCP/UDP), and instant mining port warnings.",
        tags: ["traffic recorder", "recorder", "report", "csv", "desktop", "viewer", "forensics"]
    },
    {
        categoria: "Security & Network",
        produto: "Connection Blackout",
        pergunta: "Does network traffic recording slow down my connection speed or games?",
        resposta: "<strong>No.</strong> Traffic capture runs on a non-blocking dedicated thread, and reverse DNS domain resolution is processed asynchronously in a background thread pool with smart local caching, resulting in zero impact on connection latency (ping) and bandwidth.",
        tags: ["latency", "ping", "slow", "performance", "async dns", "speed"]
    },
    {
        categoria: "Security & Network",
        produto: "Connection Blackout",
        pergunta: "How do the Anti-Cryptomining module and Web Filter work?",
        resposta: "The module defends against hardware hijacking (Cryptojacking). It actively intercepts and blocks requests directed to major Monero and crypto mining pools (such as <code>supportxmr.com</code>, <code>nanopool.org</code>, etc.) and halts traffic across dedicated Stratum ports (<code>3333</code>, <code>4444</code>, <code>5555</code>, <code>14433</code>, and others), combining firewall rules with shielded <code>hosts</code> file entries.",
        tags: ["cryptomining", "miner", "web filter", "stratum", "monero", "blocking", "security"]
    },
    {
        categoria: "Security & Network",
        produto: "Connection Blackout",
        pergunta: "What should I do if I forget the Administrator Master Password?",
        resposta: "Under corporate security standards (PBKDF2/SHA-256), the software contains no universal backdoors. To regain access:<br><ol>" +
                  "<li>Restart your computer in <strong>Windows Safe Mode</strong> (where the resident monitoring service is disabled).</li>" +
                  "<li>Navigate to: <code>%PROGRAMDATA%\\Cromak Technology\\Connection Blackout\\</code></li>" +
                  "<li>Delete or rename the security configuration file.</li>" +
                  "<li>Boot Windows normally and set a new password.</li></ol>",
        tags: ["forgot password", "safe mode", "recover password", "master password", "reset password", "programdata"]
    },
    {
        categoria: "Security & Network",
        produto: "Connection Blackout",
        pergunta: "What does the integrated Network Fix tool perform?",
        resposta: "<strong>Network Fix</strong> resolves sudden connection losses, corrupted DNS caches, and DHCP lease failures by executing an automated repair sequence:<br><ul>" +
                  "<li><code>ipconfig /flushdns</code> (Purges Windows DNS resolver cache).</li>" +
                  "<li><code>netsh winsock reset</code> (Restores Winsock catalog to factory defaults).</li>" +
                  "<li><code>netsh int ip reset</code> (Reconfigures the Windows TCP/IP stack).</li>" +
                  "<li><code>ipconfig /release</code> & <code>/renew</code> (Renews IP address via DHCP).</li>" +
                  "<li>Safe power-cycle restart of Ethernet and Wi-Fi network adapters.</li></ul>",
        tags: ["network fix", "repair network", "flushdns", "winsock", "no connection", "dhcp", "restore network"]
    },
    {
        categoria: "Security & Network",
        produto: "Connection Blackout",
        pergunta: "How do I ensure no orphan rules remain in Windows after uninstalling the software?",
        resposta: "Before running the official uninstaller (<code>uninstall.exe</code>), open the program, navigate to <strong>Settings</strong>, and click <strong>'Hard Reset (Factory)'</strong>. This flushes all injected rules and restores the native Windows Defender Firewall tables to their clean initial state.",
        tags: ["uninstall", "hard reset", "orphan rules", "clean firewall", "residual rules"]
    },
    {
        categoria: "Security & Network",
        produto: "Connection Blackout",
        pergunta: "Does the software transmit captured packets or browsing history to the cloud?",
        resposta: "<strong>No.</strong> Connection Blackout enforces a strict <strong>Zero-Knowledge and Zero-Telemetry</strong> policy. No inspected packets, CSV reports, domain lookups, or firewall rules ever leave your machine. Forensic logs and captures are stored and encrypted strictly on your local disk.",
        tags: ["privacy", "telemetry", "cloud", "zero-knowledge", "data security"]
    },

    // ==========================================
    // SECURITY & NETWORK: INSTALL PROTECTOR (v1.2.2)
    // ==========================================
    {
        categoria: "Security & Network",
        produto: "Install Protector",
        pergunta: "How does Zero-Trust blocking work and what file types are terminated?",
        resposta: "Unlike traditional antivirus engines reliant on known malware signatures, Install Protector operates under a strict <strong>Zero-Trust</strong> framework: no unauthorized setup process may execute. The resident guard terminates matching processes in under 100ms, halting standard installers (InnoSetup, NSIS, InstallShield), <code>msiexec (.msi/.msp)</code> packages, silent install switches (<code>/silent</code>, <code>/qn</code>, <code>/passive</code>), obfuscated scripts (Base64 PowerShell, <code>mshta</code>, <code>.vbs</code>, <code>.bat</code>), and direct executions originating from <code>%TEMP%</code> and <em>Downloads</em>.",
        tags: ["zero trust", "blocking", "installers", "msi", "silent", "powershell", "downloads", "temp"]
    },
    {
        categoria: "Security & Network",
        produto: "Install Protector",
        pergunta: "A legitimate installer was blocked. How can I authorize its execution?",
        resposta: "You can whitelist an installer through two quick methods:<br><ol>" +
                  "<li><strong>Via Detection Logs:</strong> Right-click the blocked event in the log table and select <em>'Send to Whitelist'</em>.</li>" +
                  "<li><strong>Via Whitelist Tab:</strong> Manually create an immunity rule by <em>Process Name</em> (e.g., <code>python.exe</code>), by <em>Full File Path</em> (e.g., <code>C:\\Tools\\setup.exe</code>), or grant full administrative immunity to a specific <em>Windows User</em>.</li></ol>",
        tags: ["whitelist", "unblock", "false positive", "immunity", "allow installer", "exception"]
    },
    {
        categoria: "Security & Network",
        produto: "Install Protector",
        pergunta: "What happens to files placed in Quarantine, and how does Windows Sandbox work?",
        resposta: "When a binary is quarantined, its memory process is terminated, the file is relocated to <code>%ProgramData%\\Cromak Technology\\Install Protector\\Quarantine</code>, renamed with a <code>.locked</code> extension, and stripped of NTFS execution rights via <code>icacls</code>.<br>The software also allows you to test suspicious files inside <strong>Windows Sandbox</strong>: an isolated, hardware-virtualized Micro-VM mounted in ReadOnly mode that purges all traces the instant the window is closed.",
        tags: ["quarantine", "sandbox", "isolation", "locked", "micro vm", "test installer", "icacls"]
    },
    {
        categoria: "Security & Network",
        produto: "Install Protector",
        pergunta: "What is the alert Anti-Flood mechanism?",
        resposta: "If an invasive installer attempts to trigger dozens of cascading child processes within seconds, the atomic lock with a 4-second cooldown suppresses 100% of memory executions while rendering <strong>only one single visual alert dialog on screen</strong>, preventing desktop UI lockups.",
        tags: ["anti-flood", "cooldown", "alert spam", "notification", "dialog"]
    },
    {
        categoria: "Security & Network",
        produto: "Install Protector",
        pergunta: "What is the System Lockdown module (Windows Policies)?",
        resposta: "<strong>System Lockdown</strong> is designed for enterprise workstations, schools, or public kiosk environments. It enforces native Windows policy restrictions to disable: <em>Task Manager</em> (preventing users from killing security tools), the <em>Registry Editor (Regedit)</em>, <em>Command Line tools (CMD / PowerShell)</em>, and the <em>Control Panel / Windows Settings</em>.",
        tags: ["lockdown", "policies", "regedit", "cmd", "powershell", "task manager", "kiosk", "enterprise"]
    },
    {
        categoria: "Security & Network",
        produto: "Install Protector",
        pergunta: "What should I do if I forget the Administrator Master Password?",
        resposta: "To prevent unauthorized security tampering, the software contains no default bypass passwords. To regain administrative control:<br><ol>" +
                  "<li>Reboot your computer into <strong>Windows Safe Mode</strong> (where the resident sentry service does not start).</li>" +
                  "<li>Navigate to <code>%PROGRAMDATA%\\Cromak Technology\\Install Protector\\</code>.</li>" +
                  "<li>Rename the security settings file.</li>" +
                  "<li>Reboot Windows normally to establish fresh master credentials.</li></ol>",
        tags: ["recover password", "forgot password", "safe mode", "master password", "programdata", "reset password"]
    },
    {
        categoria: "Security & Network",
        produto: "Install Protector",
        pergunta: "What is Modification Tracking (Snapshots)?",
        resposta: "It is a delta auditing engine that tracks file creations and deletions across the disk while monitoring Windows startup persistence keys (<code>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run</code> and background services), allowing administrators to inspect every footprint an application leaves behind.",
        tags: ["snapshots", "tracking", "audit", "run keys", "registry", "persistence"]
    },

    // ==========================================
    // SECURITY & NETWORK: PASSWORD GUARD (v1.7.x)
    // ==========================================
    {
        categoria: "Security & Network",
        produto: "Password Guard",
        pergunta: "What are the default credentials on first access to the software?",
        resposta: "When launching Password Guard for the first time, factory defaults are pre-configured with:<br><ul>" +
                  "<li><strong>Username:</strong> <code>admin</code></li>" +
                  "<li><strong>Password:</strong> <code>123</code></li></ul>" +
                  "<strong>Required Action:</strong> Immediately after logging in, navigate to <em>Options > Manage Accounts</em> and update these credentials to a strong, memorable Master Password.",
        tags: ["first access", "default login", "admin", "123", "initial password", "factory credentials"]
    },
    {
        categoria: "Security & Network",
        produto: "Password Guard",
        pergunta: "How do I restore a Backup without triggering the security lockdown (Honeypot)?",
        resposta: "When restoring your vault files (<code>dados.db</code> and <code>chave.key</code>) on a new PC or after formatting, follow this required protocol:<br><ol>" +
                  "<li>Copy your <code>dados.db</code> and <code>chave.key</code> into the application root (or use 'Import' on the login screen).</li>" +
                  "<li><strong>Critical Step:</strong> Delete the existing <code>config.ini</code> located at:<br><code>%APPDATA%\\Roaming\\Cromak Technology\\Password Guard\\</code></li></ol>" +
                  "<em>Why is this necessary?</em> <code>config.ini</code> stores security rules cryptographically sealed to the active key. Restoring an older key over an existing config file triggers the Honeypot anti-tamper trap and locks the program. Deleting config.ini forces the system to generate a clean configuration matched to your restored key.",
        tags: ["restore backup", "config.ini", "lockout", "honeypot", "dados.db", "chave.key", "format", "appdata"]
    },
    {
        categoria: "Security & Network",
        produto: "Password Guard",
        pergunta: "What happens if I lose my chave.key file?",
        resposta: "The vault operates strictly under a <strong>Zero-Knowledge</strong> architecture. Your credentials and files are encrypted mathematically by <code>chave.key</code>. If you reformat your PC and lose this file, <strong>not even Cromak Technology engineers can recover your passwords</strong>. Always maintain armored backups on external offline storage.",
        tags: ["chave.key", "lost key", "recover passwords", "zero-knowledge", "encryption", "armored backup"]
    },
    {
        categoria: "Security & Network",
        produto: "Password Guard",
        pergunta: "How does the Digital Legacy (Cyber Will) feature work?",
        resposta: "Available in the PRO version, <strong>Digital Legacy</strong> lets you export an autonomous encrypted package (file <code>.pgl</code>) protected by an <em>Emergency Password independent</em> of your primary Master Password. You can entrust this file and emergency password to a designated heir; in case of emergency, they can decrypt the vault using the built-in reader on the login screen.",
        tags: ["digital legacy", "cyber will", "pgl", "emergency password", "heir", "recovery"]
    },
    {
        categoria: "Security & Network",
        produto: "Password Guard",
        pergunta: "Why does Password Guard prompt for the Master Password even with Windows Hello enabled?",
        resposta: "This is a deliberate, top-tier security policy: the cryptographic master key is never saved in plaintext inside Windows memory. The workflow requires your Master Password first to decode the core inside volatile RAM, followed immediately by Windows Hello biometric verification (fingerprint/facial recognition) or mobile TOTP token (Google Authenticator / Authy) to unlock the interface.",
        tags: ["windows hello", "biometrics", "2fa", "authenticator", "two factor", "dual security", "login flow"]
    },
    {
        categoria: "Security & Network",
        produto: "Password Guard",
        pergunta: "What is the Shredder Protocol in the File Vault?",
        resposta: "When importing confidential PDFs, ID card photos, or crypto seed keys into the database, you can activate the <strong>Shredder Protocol</strong>. The software securely imports and encrypts the document into the database and overwrites the original Windows file with absolute zeros before deleting it, preventing recovery by forensic undelete tools like Recuva.",
        tags: ["shredder", "file shredder", "recuva", "zero overwrite", "attachments", "secure files", "forensics"]
    },
    {
        categoria: "Security & Network",
        produto: "Password Guard",
        pergunta: "How do Anti-Brute-Force defense and the Honeypot protect the vault?",
        resposta: "Entering the incorrect password <strong>5 consecutive times</strong> triggers the self-defense protocol, immediately purging <code>chave.key</code> locally to neutralize brute-force dictionary attacks.<br>Additionally, if an intruder attempts to modify <code>config.ini</code> in Notepad to reset login attempts, the tamper detection trips, locking the interface permanently with 999 virtual invalid attempts.",
        tags: ["anti brute force", "self destruct", "5 attempts", "honeypot", "invalid attempts", "tampering"]
    },
    {
        categoria: "Security & Network",
        produto: "Password Guard",
        pergunta: "What are the Dark Web Scanner and Metadata Shielding?",
        resposta: "The vault features <strong>Full Metadata Shielding</strong>: note titles, web URLs, and attachment filenames are encrypted inside <code>dados.db</code>, rendering the raw file completely opaque without the key.<br>The <strong>Dark Web Scanner</strong> lets you query whether your email addresses have surfaced in major global internet data breaches anonymously without leaking passwords.",
        tags: ["dark web", "leaks", "metadata", "breaches", "dados.db", "ram search"]
    },

    // ==========================================
    // DEVELOPMENT: INSTALL COMPILER (v1.4)
    // ==========================================
    {
        categoria: "Development",
        produto: "Install Compiler",
        pergunta: "Why did the installed folder get 30 MB larger after configuring the Uninstaller?",
        resposta: "This occurs if you select the <strong>Full Visual Engine (PyQt6)</strong> for the uninstaller. That option embeds heavyweight graphical libraries (Qt DLLs, fonts, and runtime binaries) inside <code>unins000.exe</code> just to render the removal window.<br><br><strong>Recommendation:</strong> In the 'Uninstaller' tab, always choose the <strong>Native Slim Engine (Tkinter)</strong>. It keeps the uninstaller within a few kilobytes, preserving a compact footprint.",
        tags: ["size", "uninstaller", "pyqt6", "tkinter", "slim", "heavy", "unins000", "mb"]
    },
    {
        categoria: "Development",
        produto: "Install Compiler",
        pergunta: "Do generated installers work on Windows 7, 8, or 32-bit systems?",
        resposta: "<strong>No.</strong> Both the compiler builder and the resulting executable setups run exclusively on <strong>Windows 10 and Windows 11 (64-bit Architecture)</strong>. Deprecating legacy systems was an intentional engineering choice to leverage modern LZMA/UPX compression engines without compatibility bottlenecks.",
        tags: ["windows 7", "windows 8", "32 bit", "x86", "compatibility", "requirements", "64 bit"]
    },
    {
        categoria: "Development",
        produto: "Install Compiler",
        pergunta: "How do I transfer my Install Compiler PRO license to another computer?",
        resposta: "PRO licenses are bound to machine hardware signatures (motherboard and CPU HWID). If you plan to format or migrate computers, open the program on the current machine, go to <strong>About</strong>, and click <strong>'Remove License'</strong>. This unbinds the hardware signature from the Windows Registry and releases the key for activation on your new machine.",
        tags: ["change pc", "hwid", "migrate license", "remove license", "pro key", "activation"]
    },
    {
        categoria: "Development",
        produto: "Install Compiler",
        pergunta: "How do dynamic path macros (#AppData#, #InstallDir#) work?",
        resposta: "The compiler engine translates macros at runtime on the client machine: <code>#InstallDir#</code> resolves to the target directory chosen for the app, <code>#AppData#</code> resolves to <code>C:\\Users\\...\\AppData\\Roaming</code>, and <code>#LocalAppData#</code> to the Local folder. Use them to write config files or inject Registry keys (<code>HKLM</code> / <code>HKCU</code>).",
        tags: ["macros", "appdata", "installdir", "paths", "variables", "registry", "regedit"]
    },
    {
        categoria: "Development",
        produto: "Install Compiler",
        pergunta: "Does the compiler reduce the final size of my executable file?",
        resposta: "Yes. The system utilizes heavy compression algorithms such as LZMA and optional UPX executable packing to produce compact standalone binaries that require no extra runtime downloads on client machines.",
        tags: ["compiler", "lzma", "upx", "size", "exe", "compression"]
    },
    {
        categoria: "Development",
        produto: "Install Compiler",
        pergunta: "Can I digitally sign my installers?",
        resposta: "Yes. Install Compiler integrates natively with Microsoft's official SignTool, applying digital certificates (<code>.pfx</code>) with timestamping to satisfy antivirus heuristics and avoid Windows SmartScreen warnings.",
        tags: ["signtool", "certificate", "pfx", "smartscreen", "signature"]
    },

    // ==========================================
    // SECURITY & NETWORK: METADATA REMOVER (v1.4.0)
    // ==========================================
    {
        categoria: "Security & Network",
        produto: "Metadata Remover",
        pergunta: "How does PDF unlocking for unrestricted editing work in the new version?",
        resposta: "Double-clicking any PDF opens the <strong>Security Center (Security Tab)</strong> where the software strips away owner passwords. This instantly purges restrictions that prevent text copying, graphic editing, or printing, generating an unconstrained PDF while preserving the original visual layout.",
        tags: ["pdf", "unlock", "permission password", "copy text", "printing", "owner password", "edit pdf"]
    },
    {
        categoria: "Security & Network",
        produto: "Metadata Remover",
        pergunta: "Can the program remove digital signatures and certificates from PDF contracts?",
        resposta: "Yes. The <strong>Digital Signature Purge</strong> removes <code>/AcroForm</code> fields, <code>/SigFlags</code> validation flags, and restriction dictionaries (<code>/Perms</code>, <code>/DocMDP</code>, and <code>/UR3</code>). The document is disconnected from all corporate or personal digital certificates, fully anonymizing the file.",
        tags: ["digital signature", "certificate", "acroform", "sigflags", "docmdp", "anonymize", "contract"]
    },
    {
        categoria: "Security & Network",
        produto: "Metadata Remover",
        pergunta: "How do I apply military-grade AES-256 encryption and configure permissions in PDFs?",
        resposta: "Inside the Security tab, toggle <strong>Native AES-256 Encryption (PDF Standard R=6)</strong> and configure: separate User/Reading passwords (to view) and Owner/Permission passwords (to manage), with granular controls to allow or deny high-resolution printing, text extraction, form filling, and structural modifications.",
        tags: ["aes-256", "encryption", "protect pdf", "read password", "permissions", "military security"]
    },
    {
        categoria: "Security & Network",
        produto: "Metadata Remover",
        pergunta: "What is Invisible Ink scanning in documents?",
        resposta: "It is a PRO forensic tool designed to uncover leak-tracking traps: it detects microscopic font sizes (under 2.0pt) and white text overlaid on white backgrounds, redacting and neutralizing invisible forensic tracking watermarks.",
        tags: ["invisible ink", "watermark", "trackers", "data leak", "forensics"]
    },
    {
        categoria: "Security & Network",
        produto: "Metadata Remover",
        pergunta: "What does the Office Matryoshka feature do in Word, Excel, and PowerPoint files?",
        resposta: "Office applications store embedded images with original camera metadata intact. <strong>Office Matryoshka</strong> unpacks the internal XML tree of <code>.docx</code>, <code>.xlsx</code>, and <code>.pptx</code> files and sanitizes every embedded photo individually, stripping smartphone GPS coordinates and camera serial numbers.",
        tags: ["office", "matryoshka", "docx", "xlsx", "pptx", "gps", "embedded photos", "word"]
    },
    {
        categoria: "Security & Network",
        produto: "Metadata Remover",
        pergunta: "What should I do if the program shows a 'File in Use' or read-only error when saving?",
        resposta: "The software automatically clears native Windows <em>Read-Only</em> attributes (os.chmod). If the error persists, close external readers locking the file in memory (such as Edge, Chrome, Acrobat) or temporarily disable the <strong>File Explorer Preview Pane</strong>.",
        tags: ["file in use", "read-only", "edge", "acrobat", "save error", "preview pane"]
    },
    {
        categoria: "Security & Network",
        produto: "Metadata Remover",
        pergunta: "What are the output modes and how does the Atomic Data Shredder work?",
        resposta: "You can save clean files in the <em>Same Folder</em> (with prefixes/suffixes like <code>_cromak</code>), export to a <em>Specific Folder</em>, bundle directly into a <em>.ZIP</em>, or choose <em>Overwrite Originals</em>. For permanent destruction, the <strong>Data Shredder</strong> overwrites bytes with pseudo-random passes and zeros, rendering file recovery impossible even for forensic labs.",
        tags: ["data shredder", "zip", "overwrite", "wiping", "same folder", "shredder", "permanent delete"]
    },
    {
        categoria: "Security & Network",
        produto: "Metadata Remover",
        pergunta: "Do my files and photos pass through cloud servers?",
        resposta: "<strong>No.</strong> The application operates under a strict <strong>Zero Cloud Storage</strong> model. All image, media, and document sanitization occurs strictly inside your computer's RAM and CPU 100% offline, guaranteeing confidentiality for compliance officers, legal departments, and end users.",
        tags: ["privacy", "offline", "zero cloud", "security", "gdpr", "cloud"]
    },

    // ==========================================
    // UTILITIES: PNG TO ICO CONVERTER (v1.3.1)
    // ==========================================
    {
        categoria: "Utilities",
        produto: "PNG To ICO Converter",
        pergunta: "How do I recover icons from .EXE or .DLL files without the original image?",
        resposta: "The tool incorporates a PE (Portable Executable) header analyzer communicating directly with the Windows kernel. Select <strong>'Import from EXE/DLL'</strong> in the menu. The forensic engine parses the binary and extracts native Icon Groups intact from memory for immediate editing or disk export.",
        tags: ["extract icon", "pe", "exe", "dll", "reverse engineering", "recover", "binary"]
    },
    {
        categoria: "Utilities",
        produto: "PNG To ICO Converter",
        pergunta: "What is the purpose of the Replacement Panel (Slots) when compiling an icon?",
        resposta: "High-resolution artwork scaled from 512x512 down to 16x16 or 24x24 often turns blurry. In the <strong>Right Panel (Slots)</strong>, click <em>'Replace'</em> on any resolution to load a simplified custom graphic. The compiler embeds that dedicated image specifically into that size layer, preserving crisp visibility on the Windows taskbar.",
        tags: ["slots", "replace", "16x16", "resolution", "sharpness", "pixel art", "panel"]
    },
    {
        categoria: "Utilities",
        produto: "PNG To ICO Converter",
        pergunta: "What is the Anti-Halo effect and how do I prevent white borders on legacy matrices?",
        resposta: "Legacy 8-bit (256 colors) and 4-bit (16 colors) matrices lack smooth alpha channel transparency. To prevent jagged white outlines, enable <strong>Background Matting (Anti-Halo)</strong> in Preferences and pick the background color of the window hosting the icon (e.g., light gray RGB 240,240,240). The engine blends the graphic with that tone before forging the primitive DIB buffer.",
        tags: ["anti-halo", "white border", "matting", "8 bit", "4 bit", "dib", "transparency"]
    },
    {
        categoria: "Utilities",
        produto: "PNG To ICO Converter",
        pergunta: "How do Compilation Profiles and proprietary .icv files work?",
        resposta: "Profiles automate required resolution layers:<br><ul>" +
                  "<li><strong>Modern Windows (10 / 11):</strong> Focuses on 32-bit (True Color + Alpha) with resolutions up to 512px.</li>" +
                  "<li><strong>Classic Windows (Vista / 7 / 8):</strong> Includes intermediate resolutions for high compatibility.</li>" +
                  "<li><strong>Retro / Lightweight (XP / 98):</strong> Drops heavy textures, compiling indexed DIB buffers (8 and 4 bits).</li>" +
                  "<li><strong>Custom (.icv):</strong> Lets you toggle custom resolutions and save the preset as a proprietary <code>.icv</code> file for future projects.</li></ul>",
        tags: ["profiles", "icv", "resolutions", "retro", "windows 10", "windows 11", "xp", "presets"]
    },
    {
        categoria: "Utilities",
        produto: "PNG To ICO Converter",
        pergunta: "What is the difference between Lanczos and Nearest Neighbor algorithms?",
        resposta: "In Compilation Preferences:<br><ul>" +
                  "<li><strong>Lanczos (Recommended):</strong> Provides smooth downsampling, ideal for vector logos, rich graphics, and photographic artwork.</li>" +
                  "<li><strong>Nearest Neighbor:</strong> Preserves hard, unblurred edges without interpolation, essential for retro artwork and Pixel Art.</li></ul>",
        tags: ["lanczos", "nearest neighbor", "pixel art", "algorithm", "resampling", "smoothing"]
    },
    {
        categoria: "Utilities",
        produto: "PNG To ICO Converter",
        pergunta: "How do I inject visual stamps like UAC shields or BETA badges?",
        resposta: "In the <strong>Visual Studio</strong>, the Stamps tool applies automated graphic overlays to the lower-right corner of the icon, including Administrator shields (UAC) and 'PRO' or 'BETA' banners to differentiate builds without external image editors.",
        tags: ["stamps", "badges", "uac", "beta", "pro", "visual studio"]
    },
    {
        categoria: "Utilities",
        produto: "PNG To ICO Converter",
        pergunta: "Can I export icons back into PNG files in batch?",
        resposta: "Yes. The <strong>Export PNG</strong> tab functions as a batch extractor: it unpacks a <code>.ico</code> container or profile set and saves each resolution layer into standalone <code>.PNG</code> files with transparent backgrounds, ready for web or mobile application development.",
        tags: ["export png", "unpack ico", "batch", "batch export", "transparent png"]
    },

    // ==========================================
    // DEVELOPMENT: WEB TO APK COMPILER (v1.9)
    // ==========================================
    {
        categoria: "Development",
        produto: "Web To Apk Compiler",
        pergunta: "What happens if I lose the Keystore file or its password?",
        resposta: "The Keystore file (<code>.jks</code> or <code>.keystore</code>) and its credentials/alias constitute the legal and cryptographic identity of your Android app. If you publish your app on the Google Play Store and lose this key, <strong>you will never be able to push updates again</strong>. The existing store listing will become unmodifiable, forcing you to publish an entirely new app and lose all downloads and reviews. Always store armored backups in multiple secure offline locations.",
        tags: ["keystore", "google play", "lost key", "jks", "android signature", "apksigner", "update"]
    },
    {
        categoria: "Development",
        produto: "Web To Apk Compiler",
        pergunta: "What is the difference between Online Mode (URL) and Offline Mode (Local)?",
        resposta: "In metadata settings, you can choose two source modes:<br><ul>" +
                  "<li><strong>Online Mode (URL):</strong> The app directly loads a hosted web URL (e.g., <code>https://yoursite.com</code>), requiring an active internet connection. Ideal for e-commerce, blogs, and news portals.</li>" +
                  "<li><strong>Offline Mode (Local):</strong> Bundles local files (HTML, CSS, JS, and assets) inside the APK's <em>assets</em> folder. The app operates completely without internet, ideal for offline utilities, calculators, and HTML5 games.</li></ul>",
        tags: ["online", "offline", "url", "assets", "html", "javascript", "no internet"]
    },
    {
        categoria: "Development",
        produto: "Web To Apk Compiler",
        pergunta: "Should I compile in APK (.apk) or Android App Bundle (.aab) format?",
        resposta: "The choice depends on your distribution channel:<br><ul>" +
                  "<li><strong>APK Format (.apk):</strong> Standard standalone binary installer. Ideal for local testing on physical devices, direct client distribution, or website hosting.</li>" +
                  "<li><strong>AAB Format (.aab):</strong> Mandatory standard required by Google for new app submissions on the <strong>Google Play Store</strong>, allowing Google Play to serve device-optimized packages.</li></ul>",
        tags: ["apk", "aab", "play store", "google play", "bundle", "compile", "distribution"]
    },
    {
        categoria: "Development",
        produto: "Web To Apk Compiler",
        pergunta: "How do the Reverse Engineering tools (Decompiler and Recompiler) work?",
        resposta: "The Tools menu integrates <strong>Apktool</strong> and <strong>Zipalign</strong>:<br><ul>" +
                  "<li><strong>Decompiler:</strong> Extracts Smali source code, XML UI resources, and AndroidManifest.xml into an editable folder.</li>" +
                  "<li><strong>Recompiler:</strong> Rebuilds the modified directory into a functional binary, aligns memory, and applies the final digital signature (ApkSigner).</li></ul>" +
                  "<em>Ethical note:</em> Use these tools strictly for security audits, educational purposes, or projects you own.",
        tags: ["reverse engineering", "decompile", "recompile", "smali", "apktool", "zipalign", "modify apk"]
    },
    {
        categoria: "Development",
        produto: "Web To Apk Compiler",
        pergunta: "How does the cache policy and 'Highly Cached' mode work?",
        resposta: "The WebView engine offers three settings:<br><ul>" +
                  "<li><strong>Default:</strong> Delegates memory and network management to standard Android OS heuristics.</li>" +
                  "<li><strong>Highly Cached:</strong> Forces the app to load assets and styles from local storage before hitting the network, delivering near-instant loading for static web apps.</li>" +
                  "<li><strong>No Cache:</strong> Flushes stored data on each load, ensuring users always see the latest live site updates.</li></ul>",
        tags: ["cache", "highly cached", "webview", "performance", "speed", "loading"]
    },
    {
        categoria: "Development",
        produto: "Web To Apk Compiler",
        pergunta: "How do I add a Dynamic Navigation Drawer to the app?",
        resposta: "In Extra Features, open the <strong>Navigation Drawer Designer</strong>. This tool lets you configure native buttons and links that slide out from the left edge of the phone screen, directing users to specific URLs or app views without relying on internal HTML menus.",
        tags: ["navigation drawer", "side menu", "drawer", "interface", "shortcuts", "android"]
    },
    {
        categoria: "Development",
        produto: "Web To Apk Compiler",
        pergunta: "How does monetization with Google AdMob blocks work?",
        resposta: "The compiler injects the official <strong>Google AdMob SDK</strong> into generated Activity classes without manual Java or Kotlin coding. Paste your Ad Unit IDs (Banner or Interstitial) into the Monetization tab. The engine manages requests, and 100% of generated ad revenue flows directly to your AdMob account.",
        tags: ["admob", "monetization", "ads", "banner", "interstitial", "revenue"]
    },

    // ==========================================
    // UTILITIES: NEWTAB (v1.1.3)
    // ==========================================
    {
        categoria: "Utilities",
        produto: "NewTab",
        pergunta: "What is Cromak NewTab and what are its features?",
        resposta: "<strong>Cromak NewTab</strong> is a personalized, responsive browser start page inspired by the Windows <em>Metro UI</em> tile layout. It offers rapid access to favorite sites via dynamic tiles, a multi-engine search bar (Google, Bing, Yahoo, DuckDuckGo), recent history, and multi-screen panels (Favorites, Videos, Music, and Shopping).",
        tags: ["newtab", "metro ui", "homepage", "tiles", "browser", "shortcuts"]
    },
    {
        categoria: "Utilities",
        produto: "NewTab",
        pergunta: "How do I set NewTab as the homepage in Chrome, Edge, or Firefox?",
        resposta: "After extracting the project folder (e.g., to <code>C:\\NovaAba\\</code>):<br><ul>" +
                  "<li><strong>Google Chrome / Edge:</strong> Go to <em>Settings > On Startup (or Start, home, and new tabs)</em>, choose 'Open a specific page', and enter the local path: <code>file:///C:/NovaAba/newtab.html</code>.</li>" +
                  "<li><strong>Mozilla Firefox:</strong> Go to <em>Settings > Home > New windows and tabs</em>, select 'Custom URLs', and paste the same local path.</li></ul>",
        tags: ["homepage", "chrome", "edge", "firefox", "configure", "file://", "on startup"]
    },
    {
        categoria: "Utilities",
        produto: "NewTab",
        pergunta: "How do I customize or change tile links and colors?",
        resposta: "Open the project folder and edit <code>grid-1.js</code> in any text editor (Notepad or VS Code). Locate the desired tile and update the fields:<br><ul>" +
                  "<li><code>url:</code> Target web link opened by the tile.</li>" +
                  "<li><code>bg:</code> Hexadecimal background color (e.g., <code>#c4302b</code>).</li>" +
                  "<li><code>img:</code> Path to the thumbnail image inside <code>lib/thumbs/</code>.</li>" +
                  "<li><code>title:</code> Tooltip label shown on hover.</li></ul>" +
                  "Save the file and reload the browser tab (F5).",
        tags: ["customize", "grid-1.js", "change tile", "shortcut", "color", "edit tiles"]
    },
    {
        categoria: "Utilities",
        produto: "NewTab",
        pergunta: "The layout is misaligned or tiles do not appear. How do I fix it?",
        resposta: "Check these points:<br><ol>" +
                  "<li><strong>Folder Integrity:</strong> Verify that files were not moved separately; the <code>lib/</code> folder, <code>style.css</code>, and <code>app.js</code> must reside in the exact same directory as <code>newtab.html</code>.</li>" +
                  "<li><strong>Cache Refresh:</strong> Press <code>Ctrl + Shift + Delete</code> in your browser to clear cached files.</li>" +
                  "<li><strong>Console Inspection:</strong> Press <code>F12</code> to open developer tools and verify whether broken image paths exist.</li></ol>",
        tags: ["broken layout", "missing tiles", "error", "cache", "f12", "lib folder"]
    },
    {
        categoria: "Utilities",
        produto: "NewTab",
        pergunta: "Does NewTab collect browsing data or search queries?",
        resposta: "<strong>No.</strong> The software is engineered following a <strong>100% local and offline</strong> model. It uses no telemetry, tracking cookies, or cloud analytics. All customizations, history, and preferences are stored exclusively inside your browser's local storage (<em>Local Storage</em>).",
        tags: ["privacy", "local storage", "no tracking", "offline", "security", "telemetry"]
    },
    {
        categoria: "Utilities",
        produto: "NewTab",
        pergunta: "Is the project free and can I use it freely?",
        resposta: "Yes. Cromak NewTab is <strong>100% free and Open Source</strong>. You are free to use, modify, and distribute it for personal, educational, or commercial purposes provided author attribution remains intact. Third-party brand logos used in sample tiles belong to their respective owners and are used strictly for visual shortcut identification.",
        tags: ["free", "open source", "license", "eula", "trademarks", "terms of use"]
    },

    // ==========================================
    // UTILITIES: PHOTO VIEWER & GALLERY (v1.4)
    // ==========================================
    {
        categoria: "Utilities",
        produto: "Photo Viewer",
        pergunta: "What is Cromak Photo Viewer & Photo Gallery?",
        resposta: "It is a fast, lightweight, and robust image viewer and photo gallery for Windows built with Python (PyQt6). Designed to restore the nostalgic usability of classic Windows interfaces (Classic, Vista, and Live themes), it pairs retro aesthetic appeal with high-DPI display rendering and real-time internationalization.",
        tags: ["photo viewer", "gallery", "images", "photos", "classic", "vista", "live", "pyqt6"]
    },
    {
        categoria: "Utilities",
        produto: "Photo Viewer",
        pergunta: "How do I enable the visual Aero Glass effect (transparent borders) on Windows 10 and 11?",
        resposta: "To reproduce the native Aero Glass translucency on Windows 10 and 11, the app provides an option in preferences that integrates with third-party window manager modifications (such as <em>DWMBlurGlass</em>).<br><br><strong>Important Disclaimer:</strong> Installing mods that hook into the Windows Desktop Window Manager (DWM) is at the <em>sole responsibility of the user</em>. Cromak Technology neither maintains nor distributes third-party DWM mods.",
        tags: ["aero glass", "transparency", "dwmblurglass", "windows 10", "windows 11", "borders", "visual"]
    },
    {
        categoria: "Utilities",
        produto: "Photo Viewer",
        pergunta: "How do I set Photo Viewer as the default image viewer on the computer?",
        resposta: "Open the program, enter the <strong>Preferences</strong> menu, and open the <strong>Associations</strong> tab. Check the image formats you wish to associate (such as <code>.jpg</code>, <code>.png</code>, <code>.bmp</code>) and apply. The program safely updates Windows file association registry entries.",
        tags: ["association", "default", "open with", "set default", "jpg", "png", "registry"]
    },
    {
        categoria: "Utilities",
        produto: "Photo Viewer",
        pergunta: "Does the application send photos to the cloud or collect telemetry data?",
        resposta: "<strong>No.</strong> Photo Viewer functions <strong>100% offline</strong>. It collects no personal data, requires no accounts or sign-ins, serves no advertisements, and never transmits photos to remote servers. All image processing stays local.",
        tags: ["privacy", "offline", "no cloud", "telemetry", "security", "local photos"]
    },
    {
        categoria: "Utilities",
        produto: "Photo Viewer",
        pergunta: "Where are the application settings stored if I need to make a backup?",
        resposta: "User preferences (such as the selected UI theme and active language) are stored locally on your machine in a plain-text configuration file named <code>settings.json</code> located in your user profile under <code>%APPDATA%</code>.",
        tags: ["settings", "settings.json", "appdata", "backup", "language", "theme"]
    },
    {
        categoria: "Utilities",
        produto: "Photo Viewer",
        pergunta: "Is Photo Viewer paid or does it have official ties to Microsoft?",
        resposta: "The software is released under a <strong>Freeware (100% free)</strong> license. It is an independent fan project developed under <em>Fair Use</em> guidelines for nostalgic and educational preservation, having no affiliation, sponsorship, or endorsement from Microsoft Corporation.",
        tags: ["freeware", "free", "license", "disclaimer", "microsoft", "fair use"]
    }
];