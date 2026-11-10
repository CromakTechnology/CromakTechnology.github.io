// js/home-v2.js
// Interatividade para o Terminal Cyberpunk e FAQ Rápido — Cromak Technology

document.addEventListener("DOMContentLoaded", function () {
    
    // 0. Detectar Idioma (se tiver '/en/' na URL, é inglês)
    const isEnglish = window.location.pathname.includes('/en/');

    // =========================================================
    // 1. TERMINAL CYBERPUNK INTERATIVO (BILINGUE)
    // =========================================================
    const terminalBody = document.getElementById("terminalBody");
    const terminalTabs = document.querySelectorAll(".terminal-tab-btn");

    const terminalCommandsPT = {
        status: [
            '<span class="term-cmd">> cromak-cli --inspect-environment --strict</span>',
            '<span class="term-ok">[SYS_INIT]</span> <span class="term-label">Arquitetura de Host:</span> Windows x64 Nativo detectado',
            '<span class="term-ok">[KERNEL]</span>   <span class="term-label">Otimização de Kernel:</span> Modo de Baixo Nível Ativo',
            '<span class="term-ok">[MEMORY]</span>   <span class="term-label">Consumo de Memória:</span> 18.4 MB (0.02% Overhead)',
            '<span class="term-ok">[STORAGE]</span>  <span class="term-label">Cofre de Credenciais:</span> AES-256-GCM Blindado & Selado',
            '<span class="term-ok">[STATUS]</span>   <span class="term-val">Soberania Operacional Garantida. Zero dependência de nuvem.</span><span class="term-cursor"></span>'
        ],
        rede: [
            '<span class="term-cmd">> connection-blackout --audit-network-adapters</span>',
            '<span class="term-ok">[NET_PROBE]</span> <span class="term-label">Adaptadores Ethernet & Wi-Fi:</span> 100% Monitorados',
            '<span class="term-ok">[KILL_SWITCH]</span> <span class="term-label">Gatilho de Emergência:</span> Armado (&lt; 50ms de corte)',
            '<span class="term-warn">[FIREWALL]</span>   <span class="term-label">Telemetria de Terceiros:</span> 14 Rastreadores Bloqueados',
            '<span class="term-ok">[ISOLATION]</span>  <span class="term-label">Vazamento de DNS / IPv6:</span> Nulo (Zero Leak Confirmado)',
            '<span class="term-ok">[STATUS]</span>     <span class="term-val">Canal de Comunicação Isolado e Criptografado com Sucesso.</span><span class="term-cursor"></span>'
        ],
        forense: [
            '<span class="term-cmd">> forensics-security --scan-system-processes --deep</span>',
            '<span class="term-ok">[AUDIT]</span>    <span class="term-label">Processos em Execução:</span> 182 Auditados em Tempo Real',
            '<span class="term-ok">[INJECTION]</span><span class="term-label">Injeção de DLL Não Assinada:</span> 0 Ocorrências',
            '<span class="term-ok">[SANDBOX]</span>  <span class="term-label">Contenção de Instaladores:</span> Barreira Zero-Trust Armada',
            '<span class="term-ok">[INTEGRITY]</span><span class="term-label">Cadeia de Custódia Local:</span> Hash SHA-256 Validado',
            '<span class="term-ok">[STATUS]</span>   <span class="term-val">Nenhuma anomalia ou backdoor detectado no ambiente.</span><span class="term-cursor"></span>'
        ],
        cofre: [
            '<span class="term-cmd">> password-guard --verify-vault-integrity</span>',
            '<span class="term-ok">[CIPHER]</span>   <span class="term-label">Algoritmo Ativo:</span> AES-256-GCM com Chave Local Derivada',
            '<span class="term-ok">[KNOWLEDGE]</span><span class="term-label">Arquitetura Zero-Knowledge:</span> Verificada (Chave nunca sai do disco)',
            '<span class="term-ok">[METADATA]</span> <span class="term-label">Sanitização EXIF & GPS:</span> Módulos Prontos para Limpeza em Lote',
            '<span class="term-ok">[BACKUP]</span>   <span class="term-label">Backup Criptografado:</span> Blindado para Armazenamento Offline',
            '<span class="term-ok">[STATUS]</span>   <span class="term-val">Cofre impenetrável. Dados acessíveis exclusivamente pelo proprietário.</span><span class="term-cursor"></span>'
        ]
    };

    const terminalCommandsEN = {
        status: [
            '<span class="term-cmd">> cromak-cli --inspect-environment --strict</span>',
            '<span class="term-ok">[SYS_INIT]</span> <span class="term-label">Host Architecture:</span> Windows x64 Native detected',
            '<span class="term-ok">[KERNEL]</span>   <span class="term-label">Kernel Optimization:</span> Low-Level Direct Mode Active',
            '<span class="term-ok">[MEMORY]</span>   <span class="term-label">Memory Footprint:</span> 18.4 MB (0.02% System Overhead)',
            '<span class="term-ok">[STORAGE]</span>  <span class="term-label">Credentials Vault:</span> AES-256-GCM Armored & Sealed',
            '<span class="term-ok">[STATUS]</span>   <span class="term-val">Operational Sovereignty Verified. Zero cloud dependency.</span><span class="term-cursor"></span>'
        ],
        rede: [
            '<span class="term-cmd">> connection-blackout --audit-network-adapters</span>',
            '<span class="term-ok">[NET_PROBE]</span> <span class="term-label">Ethernet & Wi-Fi Adapters:</span> 100% Monitored',
            '<span class="term-ok">[KILL_SWITCH]</span> <span class="term-label">Emergency Trigger:</span> Armed (&lt; 50ms cutoff response)',
            '<span class="term-warn">[FIREWALL]</span>   <span class="term-label">Third-Party Telemetry:</span> 14 Tracking Probes Blocked',
            '<span class="term-ok">[ISOLATION]</span>  <span class="term-label">DNS / IPv6 Leaks:</span> None (Zero Leak Verified)',
            '<span class="term-ok">[STATUS]</span>     <span class="term-val">Host Communication Channel Fully Isolated and Encrypted.</span><span class="term-cursor"></span>'
        ],
        forense: [
            '<span class="term-cmd">> forensics-security --scan-system-processes --deep</span>',
            '<span class="term-ok">[AUDIT]</span>    <span class="term-label">Active Processes:</span> 182 Audited in Real-Time',
            '<span class="term-ok">[INJECTION]</span><span class="term-label">Unsigned DLL Injections:</span> 0 Anomalies Found',
            '<span class="term-ok">[SANDBOX]</span>  <span class="term-label">Installer Containment:</span> Zero-Trust Barrier Active',
            '<span class="term-ok">[INTEGRITY]</span><span class="term-label">Local Chain of Custody:</span> SHA-256 Hashes Validated',
            '<span class="term-ok">[STATUS]</span>   <span class="term-val">Zero backdoors, rootkits, or telemetry threats detected.</span><span class="term-cursor"></span>'
        ],
        cofre: [
            '<span class="term-cmd">> password-guard --verify-vault-integrity</span>',
            '<span class="term-ok">[CIPHER]</span>   <span class="term-label">Active Cipher Engine:</span> AES-256-GCM with Argon2id Key Derivation',
            '<span class="term-ok">[KNOWLEDGE]</span><span class="term-label">Zero-Knowledge Model:</span> Verified (Keys never leave storage)',
            '<span class="term-ok">[METADATA]</span> <span class="term-label">EXIF & GPS Sanitization:</span> Batch Forensic Modules Ready',
            '<span class="term-ok">[BACKUP]</span>   <span class="term-label">Encrypted Cold Backup:</span> Hardened for Offline Air-Gapped Storage',
            '<span class="term-ok">[STATUS]</span>   <span class="term-val">Impenetrable vault. Data accessible exclusively by device owner.</span><span class="term-cursor"></span>'
        ]
    };

    const terminalCommands = isEnglish ? terminalCommandsEN : terminalCommandsPT;

    function renderTerminalOutput(cmdKey) {
        if (!terminalBody) return;
        const lines = terminalCommands[cmdKey] || terminalCommands.status;
        
        terminalBody.innerHTML = "";
        lines.forEach((lineHtml, idx) => {
            const lineDiv = document.createElement("div");
            lineDiv.className = "terminal-line";
            lineDiv.style.opacity = "0";
            lineDiv.style.transform = "translateX(-6px)";
            lineDiv.style.transition = `all 0.25s ease ${idx * 0.07}s`;
            lineDiv.innerHTML = lineHtml;
            terminalBody.appendChild(lineDiv);
            
            setTimeout(() => {
                lineDiv.style.opacity = "1";
                lineDiv.style.transform = "translateX(0)";
            }, 30);
        });
    }

    if (terminalTabs.length > 0) {
        terminalTabs.forEach(tab => {
            tab.addEventListener("click", function () {
                terminalTabs.forEach(t => t.classList.remove("active"));
                this.classList.add("active");
                const targetKey = this.dataset.target || "status";
                renderTerminalOutput(targetKey);
            });
        });

        // Carrega aba inicial
        renderTerminalOutput("status");
    }

    // =========================================================
    // 2. FAQ RÁPIDO INTERATIVO (ACORDEÃO SANFONA)
    // =========================================================
    const faqItems = document.querySelectorAll(".qfaq-item");

    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".qfaq-question");
        const answer = item.querySelector(".qfaq-answer");

        if (questionBtn && answer) {
            questionBtn.addEventListener("click", function () {
                const isActive = item.classList.contains("active");

                // Fecha outros
                faqItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove("active");
                        const otherAnswer = other.querySelector(".qfaq-answer");
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = null;
                            otherAnswer.style.opacity = "0";
                        }
                    }
                });

                // Alterna o atual
                if (isActive) {
                    item.classList.remove("active");
                    answer.style.maxHeight = null;
                    answer.style.opacity = "0";
                } else {
                    item.classList.add("active");
                    answer.style.maxHeight = (answer.scrollHeight + 30) + "px";
                    answer.style.opacity = "1";
                }
            });
        }
    });

});
