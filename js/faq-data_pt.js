// js/faq-data_pt.js
// Banco de dados centralizado da Base de Conhecimento Cromak

const FAQ_DATABASE = [
    // ==========================================
    // PAGAMENTOS E LICENÇAS
    // ==========================================
    {
        categoria: "Pagamentos e Licenças",
        produto: "Geral",
        pergunta: "Como recebo a minha licença após a compra?",
        resposta: "O processamento é instantâneo. Assim que o pagamento é confirmado, a sua chave de ativação única e as instruções de instalação são enviadas diretamente para o seu e-mail cadastrado.",
        tags: ["pagamento", "licenca", "chave", "email", "ativacao", "compra"]
    },
    {
        categoria: "Pagamentos e Licenças",
        produto: "Geral",
        pergunta: "Posso utilizar a licença em mais de um computador?",
        resposta: "Depende do seu plano. A licença Pessoal Vitalícia permite a ativação em até 3 computadores simultâneos. Já as licenças Mensais e Anuais são limitadas a 1 dispositivo ativo por vez.",
        tags: ["computadores", "vitalicia", "anual", "mensal", "limite", "dispositivos"]
    },
    {
        categoria: "Pagamentos e Licenças",
        produto: "Geral",
        pergunta: "Os softwares precisam de internet para funcionar?",
        resposta: "Apenas a ativação inicial da licença requer conexão com a internet. A vasta maioria das nossas ferramentas foi desenhada para operar de forma 100% offline, garantindo a privacidade absoluta dos seus dados locais.",
        tags: ["offline", "internet", "conexao", "privacidade"]
    },

    // ==========================================
    // ACESSIBILIDADE & AGENTES: CROMAK BRIDGE / BRIDGE VOX
    // ==========================================
    {
        categoria: "Acessibilidade",
        produto: "Bridge Vox",
        pergunta: "Qual é a diferença entre o Cromak Bridge e o Modo Vox?",
        resposta: "O <strong>Cromak Bridge (Modo Padrão)</strong> é voltado a desenvolvedores e usuários avançados que necessitam de um Auto-Coder e automações visuais no Windows. O <strong>Bridge Vox Mode</strong> é focado em acessibilidade e pessoas com deficiência visual: transforma a interface em áudio imersivo (Text-to-Speech e microfone nativo), operando integralmente via atalhos de teclado.",
        tags: ["bridge", "vox", "acessibilidade", "deficiencia visual", "auto-coder", "modos"]
    },
    {
        categoria: "Acessibilidade",
        produto: "Bridge Vox",
        pergunta: "Quais são os principais atalhos de navegação global e rápida do Bridge Vox?",
        resposta: "Os principais atalhos são:<br><ul>" +
                  "<li><strong>ESC:</strong> Corta a fala da IA imediatamente (Calar a Boca).</li>" +
                  "<li><strong>F1:</strong> Ajuda contextual sobre a janela/tela atual.</li>" +
                  "<li><strong>F2 (Push-to-Talk):</strong> Gravação direta via microfone nativo (6s).</li>" +
                  "<li><strong>F4:</strong> Encerra o sistema.</li>" +
                  "<li><strong>Teclas de letra única (com cursor desmarcado):</strong> [T] Editor de texto/PDF, [R] E-mails, [I] Navegador invisível, [A] Explorador de arquivos, [C] Calculadora Gemini, [Z] WhatsApp.</li>" +
                  "</ul>",
        tags: ["atalhos", "teclado", "comandos", "esc", "f2", "walkie-talkie", "voz", "voz mode"]
    },
    {
        categoria: "Acessibilidade",
        produto: "Bridge Vox",
        pergunta: "O Cromak Bridge armazena meus dados, conversas ou voz em servidores externos?",
        resposta: "Não. A arquitetura é <strong>Local-First</strong>. A Cromak Technology não mantém bancos de dados na nuvem nem telemetria do Bridge. Credenciais, logs, histórico e chaves de API ficam no seu disco local. A comunicação via API (BYOK) ocorre diretamente do seu computador com as provedoras (Google, OpenAI, Claude, Qwen), sem intermediários.",
        tags: ["privacidade", "servidores", "nuvem", "seguranca", "api key", "gemini", "openai", "telemetria"]
    },
    {
        categoria: "Acessibilidade",
        produto: "Bridge Vox",
        pergunta: "Quais ferramentas de automação o motor do Bridge consegue operar autonomamente?",
        resposta: "O Bridge integra módulos de: criação de documentos (.pdf, .pptx, .xlsx); leitura de arquivos e PDFs grandes; navegação fantasma e scraping de páginas; download de vídeos/MP3 do YouTube; envio e leitura de e-mails (IMAP/SMTP); automação do WhatsApp Web; análise visual de tela e captura de webcam; e controle de periféricos, volume e execução de scripts PowerShell.",
        tags: ["ferramentas", "agente", "automacao", "pdf", "excel", "youtube", "whatsapp", "powershell", "webcam"]
    },

    // ==========================================
    // DEEPCLEAN SUITE (COMPLETO / v1.6.2)
    // ==========================================
    {
        categoria: "Otimização",
        produto: "DeepClean Suite",
        pergunta: "O que fazer se o Windows apresentar tela azul ou falha de inicialização?",
        resposta: "O DeepClean conta com o <strong>Safety Engine</strong>, mantendo uma cópia física idêntica do registro em <code>C:\\DEEPCLEANSUITE\\SOFTWARE_CLONE.hiv</code>.<br>Caso o sistema não inicie:<br><ol>" +
                  "<li>Na tela azul de Reparo do Windows, vá em <em>Solução de Problemas > Opções Avançadas > Prompt de Comando</em>.</li>" +
                  "<li>Execute o comando de restauração direta:<br><code>copy /y C:\\DEEPCLEANSUITE\\SOFTWARE_CLONE.hiv C:\\Windows\\System32\\config\\SOFTWARE</code></li>" +
                  "<li>Feche a janela preta e reinicie o computador para recuperar o boot imediatamente.</li></ol>",
        tags: ["tela azul", "boot", "recuperar", "restauracao", "software_clone", "resgate", "prompt", "falha"]
    },
    {
        categoria: "Otimização",
        produto: "DeepClean Suite",
        pergunta: "Como funciona a Senha Mestra e a proteção por criptografia DPAPI?",
        resposta: "A segurança do DeepClean utiliza a biblioteca <strong>DPAPI nativa do Windows (CryptProtectData)</strong> vinculada ao hardware (chip TPM) e à conta do utilizador. Nenhuma chave estática fica exposta no disco. Ao ativar a proteção, o sistema pode exigir autenticação na inicialização e antes de qualquer limpeza ou exclusão profunda, além de aplicar atrasos progressivos contra ataques de força bruta.",
        tags: ["senha mestra", "dpapi", "tpm", "criptografia", "seguranca", "bloqueio", "forca bruta"]
    },
    {
        categoria: "Otimização",
        produto: "DeepClean Suite",
        pergunta: "Como operam os níveis de desinstalação profunda do Modo Sniper?",
        resposta: "O motor Sniper atua após o desinstalador comum do aplicativo para erradicar resíduos no disco e no registro. Nas Configurações, pode calibrar sua agressividade em 3 modos:<br><ul>" +
                  "<li><strong>Básico:</strong> Varre atalhos órfãos e a pasta direta de instalação.</li>" +
                  "<li><strong>Moderado (Padrão):</strong> Rastreia chaves de registro vinculadas e caches em <code>AppData</code> e <code>ProgramData</code>.</li>" +
                  "<li><strong>Agressivo:</strong> Realiza varredura heurística profunda por identificadores e sobras de serviços residuais em segundo plano.</li></ul>",
        tags: ["sniper", "desinstalador", "remover sobras", "appdata", "registro", "desinstalar"]
    },
    {
        categoria: "Otimização",
        produto: "DeepClean Suite",
        pergunta: "Qual é o formato da chave de licença PRO e como ela é ativada?",
        resposta: "A chave segue a máscara <code>CRKDCS-XXXX-XXXX-XXXX</code>. Para validar:<br><ol>" +
                  "<li>Abra o DeepClean e clique no menu lateral em <strong>Ativação / Licença</strong>.</li>" +
                  "<li>Cole a chave de 16 caracteres e clique em <strong>Ativar Licença</strong>.</li></ol>" +
                  "Durante a validação, o sistema gera uma assinatura encriptada de identificação do seu hardware (HWID) para garantir a integridade da licença sem recolher dados pessoais.",
        tags: ["ativar", "chave pro", "crkdcs", "licenca", "hwid", "serial", "codigo"]
    },
    {
        categoria: "Otimização",
        produto: "DeepClean Suite",
        pergunta: "O que o Otimizador Rápido e o Game Booster fazem no computador?",
        resposta: "O <strong>Otimizador Rápido</strong> purga as listas de espera da memória RAM e rebaixa a prioridade de processos ociosos em segundo plano. Já o <strong>Game Booster</strong> prioriza os núcleos da CPU e da placa de vídeo (AMD, NVIDIA, Intel Arc) para o jogo ativo, suspendendo temporariamente serviços não essenciais para eliminar micro-travamentos (stuttering).",
        tags: ["game booster", "ram", "otimizador", "jogos", "fps", "stuttering", "desempenho"]
    },
    {
        categoria: "Otimização",
        produto: "DeepClean Suite",
        pergunta: "Quais programas posso desativar com segurança na Inicialização?",
        resposta: "O gerenciador classifica os programas do boot em três níveis:<br><ul>" +
                  "<li><strong>Essencial (Verde):</strong> Drivers de áudio, gráficos e segurança do Windows — <em>mantenha sempre ativado</em>.</li>" +
                  "<li><strong>Opcional (Laranja):</strong> Steam, Discord, Spotify, Epic Games, navegadores — <em>pode desativar para acelerar o arranque em até 15 segundos</em>.</li>" +
                  "<li><strong>Parasitário (Vermelho):</strong> Agentes de telemetria de fabricantes e instaladores em segundo plano — <em>recomenda-se desativar ou remover</em>.</li></ul>",
        tags: ["inicializacao", "boot", "arranque lento", "discord", "steam", "acelerar boot"]
    },
    {
        categoria: "Otimização",
        produto: "DeepClean Suite",
        pergunta: "O DeepClean Suite envia meus dados, relatórios ou históricos para a nuvem?",
        resposta: "<strong>Não.</strong> O DeepClean é rigorosamente <strong>Local-First</strong> e opera em conformidade com LGPD e GDPR. As estatísticas de CPU/RAM/GPU e os relatórios forenses (<code>CROMAK_DEEPCLEAN_Engine.log</code>) são processados e armazenados unicamente no seu disco rígido local. Nenhuma informação pessoal ou histórico de navegação sai da sua máquina.",
        tags: ["privacidade", "telemetria", "dados", "lgpd", "gdpr", "nuvem", "seguranca", "logs"]
    },
    {
        categoria: "Otimização",
        produto: "DeepClean Suite",
        pergunta: "O que é o módulo WinTools integrado?",
        resposta: "É um painel que centraliza 16 ferramentas nativas avançadas do Windows executadas com elevação administrativa num só clique, incluindo: Prompt de Comando (CMD) e PowerShell Administrativos, SFC /scannow (Verificador de Integridade), Diagnóstico de Memória, Gerenciador de Discos (diskmgmt.msc) e Editor do Registro (regedit).",
        tags: ["wintools", "cmd", "powershell", "sfc", "ferramentas windows", "regedit"]
    },
    {
        categoria: "Otimização",
        produto: "DeepClean Suite",
        pergunta: "O que o serviço cbsservice.exe (Cromak Sentinel) faz em segundo plano?",
        resposta: "O <code>cbsservice.exe</code> é o serviço guardião de baixo consumo de recursos que orquestra o Cromak Sentinel. Ele atua como um sentinela leve para aplicar o agendamento preventivo do Smart Scheduler e monitorar eventos de estabilidade sem interferir no uso normal do PC.",
        tags: ["sentinel", "cbsservice.exe", "servico", "segundo plano", "smart scheduler"]
    },

// ==========================================
    // SEGURANÇA & REDE: CONNECTION BLACKOUT (v1.2.1)
    // ==========================================
    {
        categoria: "Segurança & Rede",
        produto: "Connection Blackout",
        pergunta: "O que é e como funciona o Total Lockdown (Kill Switch)?",
        resposta: "O <strong>Total Lockdown</strong> é um mecanismo de resposta imediata a incidentes de segurança cibernética (como ransomware ou intrusões ativas). Em menos de 50ms, o motor aciona diretivas globais que isolam 100% das comunicações externas da Internet. Apenas o loopback local (<code>127.0.0.1</code>) permanece ativo para evitar que os serviços internos do Windows sofram paragens. Para restabelecer as ligações, basta desativar o botão de contenção no Dashboard sem reiniciar o PC.",
        tags: ["total lockdown", "kill switch", "bloqueio total", "emergencia", "ransomware", "desconectar", "isolamento"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Connection Blackout",
        pergunta: "Um jogo ou programa perdeu a ligação à Internet após instalar o Blackout. Como resolver?",
        resposta: "Siga estes dois passos:<br><ol>" +
                  "<li><strong>Verifique o Dashboard:</strong> Confirme se o <em>Total Lockdown</em> está ativado (sinal vermelho). Se estiver ativo, clique para libertar a rede geral.</li>" +
                  "<li><strong>Inspecione as Regras:</strong> Aceda ao separador <em>Regras</em> e pesquise pelo executável do programa (<code>.exe</code>). Caso exista uma regra de bloqueio de saída (Outbound), remova-a ou altere a diretiva para <em>Permitir</em>.</li></ol>",
        tags: ["jogo", "bloqueado", "sem internet", "regras", "liberar", "conexao", "permitir"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Connection Blackout",
        pergunta: "Onde ficam guardadas as gravações do Traffic Recorder e preciso do Excel para as ler?",
        resposta: "As gravações são gravadas por defeito no <strong>Ambiente de Trabalho (Desktop)</strong> com data e hora (ex: <code>Cromak_Trafego_Rede_DATA.csv</code>). <strong>Não é necessário ter o Excel instalado</strong>: o software integra um <em>Visualizador Nativo de Relatórios Forenses</em> com pesquisa em tempo real, etiquetas coloridas por protocolo (TCP/UDP) e alertas de portas suspeitas.",
        tags: ["traffic recorder", "gravador", "relatorio", "csv", "desktop", "visualizador", "auditoria"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Connection Blackout",
        pergunta: "A gravação de tráfego de rede reduz a velocidade da ligação ou dos jogos?",
        resposta: "<strong>Não.</strong> A captura é efetuada por uma thread dedicada não-bloqueante e a resolução inversa dos domínios DNS é processada de modo assíncrono em segundo plano com memória cache local, garantindo impacto nulo na latência (ping) e na largura de banda da rede.",
        tags: ["latencia", "ping", "lento", "desempenho", "dns assincrono", "velocidade"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Connection Blackout",
        pergunta: "Como atua o módulo Anti-Cryptomining e o Filtro Web?",
        resposta: "O módulo protege o computador contra o sequestro de hardware (Cryptojacking). Ele monitoriza e bloqueia ativamente os pedidos dirigidos às principais pools de mineração de Monero e criptomoedas (como <code>supportxmr.com</code>, <code>nanopool.org</code>, etc.) e corta o tráfego nas portas Stratum dedicadas (<code>3333</code>, <code>4444</code>, <code>5555</code>, <code>14433</code>, entre outras), conjugando regras de firewall com proteção no ficheiro <code>hosts</code>.",
        tags: ["cryptomining", "minerador", "filtro web", "stratum", "monero", "bloqueio", "seguranca"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Connection Blackout",
        pergunta: "O que fazer em caso de esquecimento da Senha Mestre de Administrador?",
        resposta: "Por normas de segurança corporativa (PBKDF2/SHA-256), o software não possui portas dos fundos (backdoors) nem senhas mestras universais. Para recuperar o controlo:<br><ol>" +
                  "<li>Reinicie o computador no <strong>Modo de Segurança do Windows</strong> (onde o serviço residente não é inicializado).</li>" +
                  "<li>Aceda à pasta: <code>%PROGRAMDATA%\\Cromak Technology\\Connection Blackout\\</code></li>" +
                  "<li>Elimine ou mude o nome do ficheiro de configurações de segurança.</li>" +
                  "<li>Reinicie o Windows normalmente e configure uma nova palavra-passe.</li></ol>",
        tags: ["senha esquecida", "modo de seguranca", "recuperar senha", "senha mestre", "reset senha", "programdata"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Connection Blackout",
        pergunta: "O que executa a ferramenta integrada Network Fix?",
        resposta: "O <strong>Network Fix</strong> resolve perdas súbitas de ligação, DNS envenenado ou falhas de atribuição de IP executando uma rotina automatizada de restauro:<br><ul>" +
                  "<li><code>ipconfig /flushdns</code> (Limpa o cache do resolvedor DNS).</li>" +
                  "<li><code>netsh winsock reset</code> (Restaura o catálogo de sockets de rede).</li>" +
                  "<li><code>netsh int ip reset</code> (Reconfigura a pilha TCP/IP do Windows).</li>" +
                  "<li><code>ipconfig /release</code> & <code>/renew</code> (Renova o endereço IP via DHCP).</li>" +
                  "<li>Reiniciação segura dos controladores dos adaptadores Ethernet e Wi-Fi.</li></ul>",
        tags: ["network fix", "reparar rede", "flushdns", "winsock", "sem conexao", "dhcp", "restaurar rede"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Connection Blackout",
        pergunta: "Como garantir que nenhuma regra fique órfã no Windows após desinstalar o programa?",
        resposta: "Antes de correr o desinstalador oficial (<code>uninstall.exe</code>), abra o programa, clique em <strong>Configurações</strong> e acione o botão <strong>'Hard Reset (Fábrica)'</strong>. Esta operação limpa todas as regras injetadas e repõe a tabela nativa do Windows Defender Firewall no estado original.",
        tags: ["desinstalar", "hard reset", "regras orfas", "limpar firewall", "regras residuais"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Connection Blackout",
        pergunta: "O software transmite os pacotes gravados ou histórico de navegação para a nuvem?",
        resposta: "<strong>Não.</strong> O Connection Blackout adota a diretiva estrita de <strong>Zero-Knowledge e Zero-Telemetry</strong>. Nenhum pacote inspecionado, relatório CSV, domínio ou regra sai do seu computador. Os registos e relatórios forenses são gravados e encriptados estritamente no seu disco local.",
        tags: ["privacidade", "telemetria", "nuvem", "zero-knowledge", "seguranca de dados"]
    },

// ==========================================
    // SEGURANÇA & REDE: INSTALL PROTECTOR (v1.2.2)
    // ==========================================
    {
        categoria: "Segurança & Rede",
        produto: "Install Protector",
        pergunta: "Como funciona o bloqueio Zero-Trust e que tipos de ficheiros são abatidos?",
        resposta: "Ao contrário de antivírus tradicionais baseados em assinaturas conhecidas, o Install Protector adota a arquitetura <strong>Zero-Trust</strong>: nenhum instalador não autorizado pode ser executado. A patrulha encerra o processo em menos de 100ms, barrando instaladores comuns (InnoSetup, NSIS, InstallShield), pacotes <code>msiexec (.msi/.msp)</code>, comandos de instalação silenciosa (<code>/silent</code>, <code>/qn</code>, <code>/passive</code>), scripts ofuscados (PowerShell em Base64, <code>mshta</code>, <code>.vbs</code>, <code>.bat</code>) e bloqueando execuções diretas a partir das pastas <code>%TEMP%</code> e <em>Transferências</em>.",
        tags: ["zero trust", "bloqueio", "instaladores", "msi", "silent", "powershell", "downloads", "temp"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Install Protector",
        pergunta: "Um instalador legítimo foi bloqueado. Como posso autorizar a sua execução?",
        resposta: "Existem duas formas simples de libertar o programa:<br><ol>" +
                  "<li><strong>Pela aba Registos de Deteção:</strong> Clique com o botão direito do rato sobre o evento de bloqueio e selecione <em>'Enviar para Whitelist'</em>.</li>" +
                  "<li><strong>Pela aba Whitelist:</strong> Adicione manualmente uma regra de imunidade por <em>Processo</em> (ex: <code>python.exe</code>), por <em>Caminho Completo</em> (ex: <code>C:\\Ferramentas\\setup.exe</code>) ou dê imunidade total a um <em>Utilizador</em> específico da máquina.</li></ol>",
        tags: ["whitelist", "liberar", "falso positivo", "imunidade", "permitir instalador", "excecao"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Install Protector",
        pergunta: "O que acontece aos ficheiros colocados em Quarentena e como funciona o Windows Sandbox?",
        resposta: "Ao enviar uma ameaça para a Quarentena, o processo é abatido na RAM, o ficheiro é movido para <code>%ProgramData%\\Cromak Technology\\Install Protector\\Quarantine</code>, tem a extensão renomeada para <code>.locked</code> e perde permissões de execução NTFS (<code>icacls</code>).<br>O programa permite também abrir o ficheiro em teste no <strong>Windows Sandbox</strong> nativo: uma Micro-VM isolada por hardware, montada em modo somente leitura (ReadOnly) e com eliminação total de rastos assim que a janela é fechada.",
        tags: ["quarentena", "sandbox", "isolamento", "locked", "micro vm", "testar instalador", "icacls"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Install Protector",
        pergunta: "O que é o mecanismo Anti-Flood de alertas?",
        resposta: "Se um instalador invasivo tentar executar dezenas de processos repetidos em cascata num curto intervalo de tempo, o algoritmo com trava atómica e cooldown de 4 segundos encerra 100% das tentativas na memória, mas exibe <strong>apenas um único alerta visual no ecrã</strong>, impedindo o bloqueio visual do ambiente de trabalho do utilizador.",
        tags: ["anti-flood", "cooldown", "spam de avisos", "notificacao", "alerta"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Install Protector",
        pergunta: "O que é o módulo System Lockdown (Políticas do Windows)?",
        resposta: "O <strong>System Lockdown</strong> destina-se a estações corporativas, escolas ou quiosques públicos. Ele aplica políticas de restrição direta no Windows para desativar: o <em>Gestor de Tarefas</em> (evitando que utilizadores finalizem serviços de segurança), o <em>Editor de Registo (Regedit)</em>, a <em>Linha de Comandos (CMD / PowerShell)</em> e o <em>Painel de Controlo / Definições</em>.",
        tags: ["lockdown", "politicas", "regedit", "cmd", "powershell", "gestor de tarefas", "quiosque", "empresa"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Install Protector",
        pergunta: "O que fazer se esquecer a Senha Mestra de Administrador?",
        resposta: "Por motivos de proteção corporativa contra manipulações indevidas, o programa não recorre a palavras-passe padrão universais. Para recuperar o controlo da máquina:<br><ol>" +
                  "<li>Reinicie o computador no <strong>Modo de Segurança do Windows</strong> (onde o serviço residente do sentinela não arranca).</li>" +
                  "<li>Aceda à pasta <code>%PROGRAMDATA%\\Cromak Technology\\Install Protector\\</code>.</li>" +
                  "<li>Mude o nome do ficheiro de configurações de segurança.</li>" +
                  "<li>Reinicie o Windows normalmente para parametrizar novas credenciais.</li></ol>",
        tags: ["recuperar senha", "senha esquecida", "modo de seguranca", "senha mestra", "programdata", "reset senha"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Install Protector",
        pergunta: "O que é o Rastreamento de Modificações (Snapshots)?",
        resposta: "É um motor de auditoria delta que monitoriza a criação e eliminação de ficheiros no disco e vigia chaves de persistência do arranque do Windows (<code>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run</code> e serviços), permitindo ao administrador identificar com precisão tudo o que um software modificou no sistema operacional.",
        tags: ["snapshots", "rastreamento", "auditoria", "run keys", "registro", "persistência"]
    },

	// ==========================================
    // SEGURANÇA & REDE: PASSWORD GUARD (v1.7.x)
    // ==========================================
    {
        categoria: "Segurança & Rede",
        produto: "Password Guard",
        pergunta: "Quais são as credenciais padrão no primeiro acesso ao software?",
        resposta: "Ao instalar o Password Guard pela primeira vez, o sistema vem pré-configurado de fábrica com:<br><ul>" +
                  "<li><strong>Usuário:</strong> <code>admin</code></li>" +
                  "<li><strong>Senha:</strong> <code>123</code></li></ul>" +
                  "<strong>Ação recomendada:</strong> Imediatamente após entrar, vá ao menu <em>Opções > Gerenciar Contas</em> e altere essas credenciais para uma Senha Mestra forte e memorizável.",
        tags: ["primeiro acesso", "login padrao", "admin", "123", "senha inicial", "credenciais de fabrica"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Password Guard",
        pergunta: "Como restaurar um Backup sem ativar o bloqueio de segurança (Honeypot)?",
        resposta: "Ao restaurar seus arquivos (<code>dados.db</code> e <code>chave.key</code>) em outro computador ou após formatar, siga este procedimento obrigatório:<br><ol>" +
                  "<li>Copie o seu <code>dados.db</code> e a sua <code>chave.key</code> para a pasta do programa (ou use a opção 'Importar' na tela de login).</li>" +
                  "<li><strong>Passo Crítico:</strong> Exclua o arquivo <code>config.ini</code> presente na pasta:<br><code>%APPDATA%\\Roaming\\Cromak Technology\\Password Guard\\</code></li></ol>" +
                  "<em>Por que isso é necessário?</em> O <code>config.ini</code> guarda regras seladas matematicamente com a chave em uso. Se você restaurar uma chave diferente sobre um config antigo, o sistema interpretará a discrepância como uma adulteração hacker (Honeypot) e bloqueará o programa. Apagar o config.ini força a criação de um novo perfeitamente integrado à sua chave restaurada.",
        tags: ["restaurar backup", "config.ini", "bloqueio", "honeypot", "dados.db", "chave.key", "formatar", "appdata"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Password Guard",
        pergunta: "O que acontece se eu perder o meu arquivo chave.key?",
        resposta: "O cofre adota a arquitetura <strong>Zero-Knowledge (Conhecimento Zero)</strong>. Os seus dados são criptografados localmente pelo motor matemático da <code>chave.key</code>. Se você formatar a máquina e perder esse arquivo, <strong>nem mesmo a equipe técnica da Cromak conseguirá recuperar suas senhas</strong>. Mantenha cópias da sua chave e do banco em locais externos protegidos (como Pen Drives ou armazenamento seguro offline).",
        tags: ["chave.key", "perda de chave", "recuperar senhas", "zero-knowledge", "criptografia", "backup blindado"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Password Guard",
        pergunta: "Como funciona o recurso de Legado Digital (Testamento Cibernético)?",
        resposta: "Disponível na versão PRO, o <strong>Legado Digital</strong> permite exportar um pacote único criptografado (arquivo <code>.pgl</code>) protegido por uma <em>Senha de Emergência independente</em> da sua Senha Mestra principal. Você pode entregar este arquivo e a senha a um familiar ou herdeiro de confiança; caso algo lhe aconteça, essa pessoa poderá decifrar os dados utilizando o leitor nativo presente na própria tela inicial do programa.",
        tags: ["legado digital", "testamento cibernetico", "pgl", "senha de emergencia", "herdeiro", "recuperacao"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Password Guard",
        pergunta: "Por que o Password Guard pede a Senha Mestra mesmo com Windows Hello ativado?",
        resposta: "Trata-se de uma diretriz de segurança de ponta: a Chave Criptográfica mestra nunca é salva em texto puro na memória do Windows. Assim, o fluxo exige primeiro a sua Senha Mestra para decodificar o núcleo na RAM e, logo em seguida, valida a camada de biometria facial, digital (Windows Hello) ou token dinâmico (Google Authenticator / Authy 2FA) para liberar a interface.",
        tags: ["windows hello", "biometria", "2fa", "autenticador", "dois fatores", "seguranca dupla", "fluxo login"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Password Guard",
        pergunta: "O que é o Protocolo Shredder no Cofre de Arquivos?",
        resposta: "Ao importar PDFs sigilosos, fotos de documentos ou chaves privadas de criptomoedas para dentro do banco de dados, você pode marcar a opção <strong>Protocolo Shredder</strong>. O software importa o documento de forma criptografada para o banco e sobrescreve o arquivo original que estava no seu disco com zeros absolutos antes de apagá-lo, tornando impossível a sua recuperação por softwares forenses como o Recuva.",
        tags: ["shredder", "triturador", "recuva", "sobrescrever com zeros", "anexos", "documentos seguros", "forense"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Password Guard",
        pergunta: "Como a defesa Anti-Força Bruta e o Honeypot protegem o cofre?",
        resposta: "Errar a senha na tela de login por <strong>5 vezes consecutivas</strong> aciona o protocolo de autodestruição, que apaga a <code>chave.key</code> local imediatamente para impedir que scripts de força bruta quebrem o cofre.<br>Além disso, se um intruso tentar abrir o <code>config.ini</code> no Bloco de Notas para burlar a contagem de erros, o sistema detecta a quebra de integridade e trava a interface permanentemente com 999 tentativas virtuais.",
        tags: ["anti forca bruta", "autodestruicao", "5 erros", "honeypot", "tentativas incorretas", "sabotagem"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Password Guard",
        pergunta: "O que é o Scanner da Dark Web e a Blindagem de Metadados?",
        resposta: "O cofre possui <strong>Blindagem Total de Metadados</strong>: até mesmo o título das suas anotações, os nomes dos sites e nomes dos arquivos em anexo são criptografados dentro do <code>dados.db</code>, impossibilitando a leitura sem a chave.<br>Já o <strong>Scanner da Dark Web</strong> permite verificar de forma anônima e segura se os seus endereços de e-mail foram expostos em grandes vazamentos globais da Internet (Data Breaches).",
        tags: ["dark web", "vazamentos", "metadados", "breaches", "dados.db", "busca em ram"]
    },

    // ==========================================
    // DESENVOLVIMENTO: INSTALL COMPILER (v1.4)
    // ==========================================
    {
        categoria: "Desenvolvimento",
        produto: "Install Compiler",
        pergunta: "Por que a pasta instalada ficou 30 MB maior ao configurar o Desinstalador?",
        resposta: "Isso ocorre se você selecionar o <strong>Motor Visual Completo (PyQt6)</strong> para o desinstalador. Essa opção força a inclusão de bibliotecas pesadas de interface gráfica (DLLs do Qt, fontes e runtime) dentro do <code>unins000.exe</code> apenas para desenhar a janela de remoção.<br><br><strong>Recomendação:</strong> Na aba 'Desinstalador', utilize sempre o <strong>Motor Nativo Slim (Tkinter)</strong>. Ele mantém o arquivo de desinstalação na faixa de poucos KBs, preservando o tamanho compacto do seu software.",
        tags: ["tamanho", "desinstalador", "pyqt6", "tkinter", "slim", "pesado", "unins000", "mb"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Install Compiler",
        pergunta: "Os instaladores gerados funcionam em Windows 7, 8 ou sistemas 32-bits?",
        resposta: "<strong>Não.</strong> Tanto o compilador quanto os instaladores executáveis gerados operam exclusivamente em <strong>Windows 10 e Windows 11 (Arquitetura 64-bits)</strong>. A exclusão de sistemas legados foi uma decisão de engenharia para viabilizar algoritmos modernos de compressão LZMA/UPX sem gargalos de compatibilidade.",
        tags: ["windows 7", "windows 8", "32 bits", "x86", "compatibilidade", "requisitos", "64 bits"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Install Compiler",
        pergunta: "Como transferir minha licença PRO do Install Compiler para outro computador?",
        resposta: "A licença PRO é atrelada à assinatura de hardware (HWID de placa-mãe e CPU). Se você for formatar ou trocar de computador, abra o programa no PC atual, vá até a tela <strong>Sobre</strong> e clique no botão <strong>'Remover Licença'</strong>. Isso desvincula a assinatura do Registro do Windows e libera a chave para ativação no novo dispositivo.",
        tags: ["trocar de pc", "hwid", "migrar licenca", "remover licenca", "chave pro", "ativacao"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Install Compiler",
        pergunta: "Como funcionam as macros de caminho dinâmico (#AppData#, #InstallDir#)?",
        resposta: "O motor de compilação traduz macros em tempo de execução na máquina do cliente final: <code>#InstallDir#</code> aponta para o diretório escolhido para a aplicação, <code>#AppData#</code> resolve para <code>C:\\Users\\...\\AppData\\Roaming</code> e <code>#LocalAppData#</code> para a pasta Local. Você pode usá-las para injetar arquivos de configuração ou chaves no Registro (<code>HKLM</code> / <code>HKCU</code>).",
        tags: ["macros", "appdata", "installdir", "caminhos", "variaveis", "registro", "regedit"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Install Compiler",
        pergunta: "O compilador reduz o tamanho final do meu arquivo executável?",
        resposta: "Sim. O sistema utiliza algoritmos pesados de compressão como LZMA e integração direta ao empacotador UPX para gerar binários standalone compactos sem necessidade de downloads adicionais no cliente.",
        tags: ["compilador", "lzma", "upx", "tamanho", "exe", "compressao"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Install Compiler",
        pergunta: "Posso assinar digitalmente meus instaladores?",
        resposta: "Sim. O Install Compiler integra-se com a ferramenta oficial SignTool da Microsoft, aplicando certificados digitais (<code>.pfx</code>) com carimbo de data/hora (Timestamp) para evitar alertas de antivírus e do Windows SmartScreen.",
        tags: ["signtool", "certificado", "pfx", "smartscreen", "assinatura"]
    },

// ==========================================
    // SEGURANÇA & REDE: METADATA REMOVER (v1.4.0)
    // ==========================================
    {
        categoria: "Segurança & Rede",
        produto: "Metadata Remover",
        pergunta: "Como funciona o desbloqueio de PDF para edição livre na nova versão?",
        resposta: "Ao abrir a <strong>Central de Segurança (Aba Segurança)</strong> com duplo clique sobre qualquer PDF, o software remove as senhas de proprietário (owner password). Isso extirpa imediatamente as travas que impediam a cópia de texto, edição gráfica ou impressão, gerando um documento 100% desbloqueado e preservando a fidelidade visual original.",
        tags: ["pdf", "desbloquear", "senha de permissao", "copia de texto", "impressao", "owner password", "editar pdf"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Metadata Remover",
        pergunta: "O programa consegue remover assinaturas digitais e certificados de contratos em PDF?",
        resposta: "Sim. A função de <strong>Purga de Assinaturas Digitais</strong> expurga os campos <code>/AcroForm</code>, bandeiras de validação <code>/SigFlags</code> e dicionários restritivos (<code>/Perms</code>, <code>/DocMDP</code> e <code>/UR3</code>). O documento é desvinculado de certificados digitais (como ICP-Brasil ou corporativos), tornando o arquivo completamente anônimo.",
        tags: ["assinatura digital", "certificado", "acroform", "sigflags", "docmdp", "anonimizar", "contrato"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Metadata Remover",
        pergunta: "Como aplicar criptografia militar AES-256 e definir permissões em PDFs?",
        resposta: "Na aba de Segurança, você pode ativar a <strong>Criptografia Nativa AES-256 (PDF Standard R=6)</strong> e configurar: senhas separadas de Leitura (para visualização) e de Permissão (para o dono do arquivo), além de definir se terceiros podem imprimir em alta definição, copiar trechos de texto, preencher formulários ou fazer alterações estruturais.",
        tags: ["aes-256", "criptografia", "proteger pdf", "senha leitura", "permissoes", "seguranca militar"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Metadata Remover",
        pergunta: "O que é o escaneamento de Tinta Invisível (Invisible Ink) em documentos?",
        resposta: "É um recurso forense da versão PRO projetado para descobrir armadilhas de rastreamento de vazamentos: ele identifica textos com fontes microscópicas (menores que 2.0pt) ou textos brancos sobrepostos em fundos brancos, tarjando e neutralizando marcas d'água forenses invisíveis.",
        tags: ["tinta invisivel", "invisible ink", "marca d'agua", "rastreadores", "vazamento", "forense"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Metadata Remover",
        pergunta: "O que faz o recurso Office Matryoshka em arquivos Word, Excel e PowerPoint?",
        resposta: "Softwares de escritório embutem imagens com seus metadados originais intactos. O modo <strong>Office Matryoshka</strong> desmonta internamente a estrutura XML de arquivos <code>.docx</code>, <code>.xlsx</code> e <code>.pptx</code> e sanitiza individualmente cada foto embutida, eliminando coordenadas de GPS e números de série de smartphones contidos nessas imagens.",
        tags: ["office", "matryoshka", "docx", "xlsx", "pptx", "gps", "fotos embutidas", "word"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Metadata Remover",
        pergunta: "O que fazer se o programa acusar erro de 'Arquivo em Uso' ou somente leitura ao salvar?",
        resposta: "O software já remove de forma automática as propriedades de <em>Somente Leitura</em> (os.chmod) do Windows. Caso o erro persista, feche leitores de PDF externos que mantêm o arquivo travado na memória, como Microsoft Edge, Google Chrome, Adobe Acrobat, ou desative temporariamente o <strong>Painel de Pré-visualização do Explorador de Arquivos</strong>.",
        tags: ["arquivo em uso", "somente leitura", "read-only", "edge", "acrobat", "erro ao salvar", "preview"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Metadata Remover",
        pergunta: "Quais são os modos de saída e como funciona o Destruidor Atômico (Data Shredder)?",
        resposta: "Você pode salvar os arquivos limpos na <em>Mesma Pasta</em> (com prefixos/sufixos como <code>_cromak</code>), em uma <em>Pasta Específica</em>, compactar tudo diretamente em <em>.ZIP</em>, ou ativar <em>Sobrescrever Originais</em>. Para exclusões definitivas, o <strong>Data Shredder</strong> executa a sobregravação física de bytes pseudo-aleatórios e zeramento, tornando a recuperação impossível mesmo para laboratórios forenses.",
        tags: ["data shredder", "zip", "sobrescrever", "wiping", "mesma pasta", "destruidor", "exclusao definitiva"]
    },
    {
        categoria: "Segurança & Rede",
        produto: "Metadata Remover",
        pergunta: "Os meus arquivos e fotos passam por servidores na nuvem?",
        resposta: "<strong>Não.</strong> A arquitetura opera sob o modelo <strong>Zero Cloud Storage</strong>. Todo o processamento de imagens, documentos e mídias ocorre estritamente na memória RAM e processadores do seu próprio computador de forma 100% offline, garantindo sigilo absoluto a profissionais de conformidade, departamentos jurídicos e usuários finais.",
        tags: ["privacidade", "offline", "zero cloud", "seguranca", "lgpd", "nuvem"]
    },

	// ==========================================
    // UTILITÁRIOS: PNG TO ICO CONVERTER (v1.3.1)
    // ==========================================
    {
        categoria: "Utilitários",
        produto: "PNG To ICO Converter",
        pergunta: "Como recuperar ícones de ficheiros .EXE ou .DLL sem a imagem original?",
        resposta: "O software incorpora um analisador de cabeçalhos PE (Portable Executable) que comunica diretamente com o kernel do Windows. Aceda ao menu e escolha <strong>'Importar de EXE/DLL'</strong>. O motor forense varre o binário e extrai os Grupos de Ícones nativos intactos da memória para edição imediata ou exportação direta para o disco.",
        tags: ["extrair icone", "pe", "exe", "dll", "engenharia reversa", "recuperar", "binario"]
    },
    {
        categoria: "Utilitários",
        produto: "PNG To ICO Converter",
        pergunta: "Para que serve o Painel de Substituição (Slots) ao compilar um ícone?",
        resposta: "Muitas vezes, uma imagem complexa perfeita em 512x512 torna-se impercetível e borrada quando reduzida para 16x16 ou 24x24. No <strong>Painel Direito (Slots)</strong>, pode clicar em <em>'Substituir'</em> em qualquer resolução específica e carregar uma versão redesenhada e simplificada. O compilador embutirá essa arte personalizada exclusivamente naquele tamanho, mantendo o ícone nítido na barra de tarefas do Windows.",
        tags: ["slots", "substituir", "16x16", "resolucao", "nitidez", "pixel art", "painel"]
    },
    {
        categoria: "Utilitários",
        produto: "PNG To ICO Converter",
        pergunta: "O que é o efeito Anti-Halo e como evitar bordas brancas em matrizes antigas?",
        resposta: "Matrizes legadas de 8-bits (256 cores) e 4-bits (16 cores) não possuem suporte a transparência suave (Alpha). Para evitar arestas serrilhadas ou bordas brancas, ative a <strong>Matização de Fundo (Anti-Halo)</strong> nas Preferências e selecione a cor de fundo da janela onde o ícone será exibido (ex: cinza claro RGB 240,240,240). O motor funde o ícone com essa cor base antes de gerar o buffer DIB primitivo.",
        tags: ["anti-halo", "borda branca", "matizacao", "8 bits", "4 bits", "dib", "transparencia"]
    },
    {
        categoria: "Utilitários",
        produto: "PNG To ICO Converter",
        pergunta: "Como funcionam os Perfis de Compilação e os ficheiros proprietários .icv?",
        resposta: "Os perfis automatizam a seleção das matrizes necessárias:<br><ul>" +
                  "<li><strong>Windows Moderno (10 / 11):</strong> Focado em 32-bits (True Color + Alpha) com resoluções de até 512px.</li>" +
                  "<li><strong>Windows Clássico (Vista / 7 / 8):</strong> Inclui resoluções intermédias para alta compatibilidade.</li>" +
                  "<li><strong>Retro / Leve (XP / 98):</strong> Descarta gráficos pesados e foca em buffers indexados DIB (8 e 4 bits).</li>" +
                  "<li><strong>Personalizado (.icv):</strong> Permite marcar caixas de verificação livres e salvar a predefinição num ficheiro <code>.icv</code> para reaproveitar em novos projetos.</li></ul>",
        tags: ["perfis", "icv", "resolucoes", "retro", "windows 10", "windows 11", "xp", "predefinicoes"]
    },
    {
        categoria: "Utilitários",
        produto: "PNG To ICO Converter",
        pergunta: "Qual é a diferença entre os algoritmos Lanczos e Nearest Neighbor?",
        resposta: "Nas Preferências de compilação:<br><ul>" +
                  "<li><strong>Lanczos (Recomendado):</strong> Proporciona redimensionamento suave, ideal para ilustrações complexas, logótipos vetoriais e fotografias.</li>" +
                  "<li><strong>Nearest Neighbor:</strong> Preserva arestas rígidas sem qualquer suavização borrada, sendo a opção indispensável para gráficos retro e Pixel Art.</li></ul>",
        tags: ["lanczos", "nearest neighbor", "pixel art", "algoritmo", "redimensionamento", "suavizacao"]
    },
    {
        categoria: "Utilitários",
        produto: "PNG To ICO Converter",
        pergunta: "Como injetar carimbos visuais (Stamps) como escudos de UAC ou selos BETA?",
        resposta: "No <strong>Estúdio Visual</strong>, a ferramenta de Carimbos (Stamps) permite adicionar sobreposições gráficas automáticas no canto inferior direito do ícone com um clique, incluindo escudos de Administrador (UAC) e faixas 'PRO' ou 'BETA' para diferenciar versões de compilação sem necessidade de editores externos.",
        tags: ["carimbos", "stamps", "uac", "beta", "pro", "selos", "estudio visual"]
    },
    {
        categoria: "Utilitários",
        produto: "PNG To ICO Converter",
        pergunta: "Posso exportar os ícones de volta para ficheiros PNG em lote?",
        resposta: "Sim. A aba <strong>Exportar PNG</strong> opera como um extrator em lote de alta fidelidade: permite desagrupar um ficheiro <code>.ico</code> completo ou lote de perfis e guardar cada camada de resolução em ficheiros <code>.PNG</code> soltos com fundo transparente, prontos para uso em páginas web ou aplicações móveis.",
        tags: ["exportar png", "desagrupar ico", "lote", "batch export", "png transparente"]
    },

    // ==========================================
    // DESENVOLVIMENTO: WEB TO APK COMPILER (v1.9)
    // ==========================================
    {
        categoria: "Desenvolvimento",
        produto: "Web To Apk Compiler",
        pergunta: "O que acontece se eu perder o ficheiro Keystore ou a sua palavra-passe?",
        resposta: "O ficheiro Keystore (<code>.jks</code> ou <code>.keystore</code>) e as suas credenciais/alias constituem a identidade jurídica e criptográfica do seu aplicativo. Se publicar o app na Google Play Store e perder a chave, <strong>nunca mais poderá enviar atualizações</strong>. O aplicativo existente ficará inacessível para novos updates, forçando a publicação de um novo app e a perda de todas as avaliações e downloads. Guarde sempre cópias de segurança em locais externos seguros.",
        tags: ["keystore", "google play", "chave perdida", "jks", "assinatura android", "apksigner", "atualizacao"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Web To Apk Compiler",
        pergunta: "Qual é a diferença entre o Modo Online (URL) e o Modo Offline (Local)?",
        resposta: "Na aba de metadados pode definir duas fontes de carregamento:<br><ul>" +
                  "<li><strong>Modo Online (URL):</strong> O app carrega diretamente um site alojado na web (ex: <code>https://seusite.com</code>), necessitando de ligação à Internet. Ideal para lojas virtuais, blogs e portais de notícias.</li>" +
                  "<li><strong>Modo Offline (Local):</strong> Empacota ficheiros locais (HTML, CSS, JS e imagens) na pasta de <em>assets</em> do APK. O app opera sem qualquer ligação à Internet, ideal para utilitários, calculadoras e jogos HTML5.</li></ul>",
        tags: ["online", "offline", "url", "assets", "html", "javascript", "sem internet"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Web To Apk Compiler",
        pergunta: "Devo compilar em formato APK (.apk) ou Android App Bundle (.aab)?",
        resposta: "A escolha depende da finalidade de distribuição:<br><ul>" +
                  "<li><strong>Formato APK (.apk):</strong> É o instalador binário tradicional. Ideal para testes imediatos em telemóveis físicos, envio direto para clientes ou distribuição em sites próprios.</li>" +
                  "<li><strong>Formato AAB (.aab):</strong> É o padrão obrigatório exigido pelo Google para publicar novos aplicativos na <strong>Google Play Store</strong>, permitindo que a loja gere pacotes otimizados para cada dispositivo.</li></ul>",
        tags: ["apk", "aab", "play store", "google play", "bundle", "compilar", "distribuicao"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Web To Apk Compiler",
        pergunta: "Como funcionam as ferramentas de Engenharia Reversa (Descompilador e Recompilador)?",
        resposta: "O menu Ferramentas integra o <strong>Apktool</strong> e o <strong>Zipalign</strong>:<br><ul>" +
                  "<li><strong>Descompilador:</strong> Extrai o código-fonte (Smali), recursos de interface (XML) e o manifesto (AndroidManifest.xml) para uma pasta editável.</li>" +
                  "<li><strong>Recompilador:</strong> Reconstrói a pasta alterada de volta num executável, alinha a memória e aplica a assinatura digital final (ApkSigner).</li></ul>" +
                  "<em>Nota ética:</em> Utilize estas ferramentas exclusivamente para auditoria de segurança, fins educativos ou em projetos próprios.",
        tags: ["engenharia reversa", "descompilar", "recompilar", "smali", "apktool", "zipalign", "modificar apk"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Web To Apk Compiler",
        pergunta: "Como funciona a política de cache e o modo 'Highly Cached'?",
        resposta: "O motor WebView dispõe de três configurações:<br><ul>" +
                  "<li><strong>Padrão:</strong> Deixa a gestão de memória ao critério do sistema Android.</li>" +
                  "<li><strong>Alto Cache (Highly Cached):</strong> Força o aplicativo a carregar folhas de estilo, scripts e imagens do armazenamento local antes de tentar descarregar da rede, acelerando a abertura de sites estáticos.</li>" +
                  "<li><strong>Sem Cache:</strong> Limpa os dados em cada acesso, garantindo que o utilizador veja sempre a versão mais recente do site.</li></ul>",
        tags: ["cache", "highly cached", "webview", "desempenho", "velocidade", "carregamento"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Web To Apk Compiler",
        pergunta: "Como adicionar um Menu Lateral Dinâmico (Navigation Drawer) no app?",
        resposta: "Na aba Recursos Extras, abra o <strong>Designer do Menu Lateral</strong>. Esta ferramenta permite criar botões e atalhos visuais nativos que abrem uma gaveta a partir da margem esquerda do ecrã do telemóvel, direcionando o utilizador para páginas específicas ou funções sem necessitar de menus em HTML.",
        tags: ["navigation drawer", "menu lateral", "gaveta", "interface", "atalhos", "android"]
    },
    {
        categoria: "Desenvolvimento",
        produto: "Web To Apk Compiler",
        pergunta: "Como funciona a monetização com blocos do Google AdMob?",
        resposta: "O compilador injeta nativamente o SDK oficial do <strong>Google AdMob</strong> no código das Activities sem necessidade de programar em Java ou Kotlin. Basta colar os IDs dos blocos (Banner ou Intersticial) na aba de Monetização. O sistema efetua a gestão de exibição e 100% da receita gerada vai diretamente para a sua conta AdMob.",
        tags: ["admob", "monetizacao", "anuncios", "banner", "intersticial", "ganhar dinheiro"]
    },
	
	// ==========================================
    // UTILITÁRIOS: NEWTAB (v1.1.3)
    // ==========================================
    {
        categoria: "Utilitários",
        produto: "NewTab",
        pergunta: "O que é o Cromak NewTab e quais são os seus recursos?",
        resposta: "O <strong>Cromak NewTab</strong> é uma página inicial personalizada e responsiva com interface inspirada no estilo <em>Metro UI</em> do Windows. Reúne acesso rápido aos sites favoritos através de blocos (tiles) dinâmicos, barra de pesquisa multimecanismos (Google, Bing, Yahoo, DuckDuckGo), histórico recente e múltiplos painéis temáticos (Mais Usados, Vídeos, Músicas e Loja).",
        tags: ["newtab", "nova aba", "metro ui", "pagina inicial", "tiles", "navegador", "atalhos"]
    },
    {
        categoria: "Utilitários",
        produto: "NewTab",
        pergunta: "Como definir a Nova Aba como página inicial no Chrome, Edge ou Firefox?",
        resposta: "Após extrair a pasta do projeto (ex: em <code>C:\\NovaAba\\</code>):<br><ul>" +
                  "<li><strong>Google Chrome / Edge:</strong> Aceda a <em>Definições > Ao Iniciar (ou Início)</em>, selecione 'Abrir uma página específica' e insira o caminho completo do ficheiro local: <code>file:///C:/NovaAba/newtab.html</code>.</li>" +
                  "<li><strong>Mozilla Firefox:</strong> Vá a <em>Definições > Início > Novas janelas e separadores</em>, escolha 'URLs personalizados' e cole o mesmo caminho local.</li></ul>",
        tags: ["pagina inicial", "chrome", "edge", "firefox", "configurar", "file://", "abrir ao iniciar"]
    },
    {
        categoria: "Utilitários",
        produto: "NewTab",
        pergunta: "Como personalizar ou trocar os links e cores dos blocos (tiles)?",
        resposta: "Abra a pasta do projeto e edite o ficheiro <code>grid-1.js</code> num editor de texto (Bloco de Notas ou VS Code). Localize o bloco pretendido e altere os campos:<br><ul>" +
                  "<li><code>url:</code> O link do site que o bloco irá abrir.</li>" +
                  "<li><code>bg:</code> A cor de fundo em formato hexadecimal (ex: <code>#c4302b</code>).</li>" +
                  "<li><code>img:</code> O caminho da imagem dentro da pasta <code>lib/thumbs/</code>.</li>" +
                  "<li><code>title:</code> O nome exibido ao passar o rato.</li></ul>" +
                  "Grave o ficheiro e atualize a página no navegador (F5).",
        tags: ["personalizar", "grid-1.js", "mudar tile", "atalho", "cor", "editar blocos"]
    },
    {
        categoria: "Utilitários",
        produto: "NewTab",
        pergunta: "O layout ficou desconfigurado ou os blocos não aparecem. Como corrigir?",
        resposta: "Siga estes passos de verificação:<br><ol>" +
                  "<li><strong>Integridade de Pastas:</strong> Confirme que os ficheiros não foram movidos individualmente; a pasta <code>lib/</code>, os ficheiros <code>style.css</code> e <code>app.js</code> devem estar exatamente no mesmo nível do <code>newtab.html</code>.</li>" +
                  "<li><strong>Limpeza de Cache:</strong> Pressione <code>Ctrl + Shift + Delete</code> no navegador e limpe os ficheiros temporários.</li>" +
                  "<li><strong>Diagnóstico:</strong> Prima <code>F12</code> no teclado para abrir o console do navegador e confirmar se há bloqueios em caminhos de imagens.</li></ol>",
        tags: ["layout quebrado", "blocos sumiram", "erro", "cache", "f12", "pasta lib"]
    },
    {
        categoria: "Utilitários",
        produto: "NewTab",
        pergunta: "A Nova Aba recolhe dados de navegação ou pesquisas?",
        resposta: "<strong>Não.</strong> O software foi construído sob uma arquitetura <strong>100% local e offline</strong>. Não utiliza scripts de telemetria, cookies de rastreio nem envia dados para a nuvem. Todas as suas personalizações, histórico e preferências são armazenadas exclusivamente no <em>Local Storage</em> do seu próprio navegador.",
        tags: ["privacidade", "local storage", "sem rastreio", "offline", "seguranca", "telemetria"]
    },
    {
        categoria: "Utilitários",
        produto: "NewTab",
        pergunta: "O projeto é gratuito e posso utilizá-lo livremente?",
        resposta: "Sim. O Cromak NewTab é <strong>100% gratuito e Open Source</strong>. O software é disponibilizado para utilização pessoal, educativa ou comercial sob a condição de manter os créditos de autoria. Os logótipos e marcas de serviços terceiros presentes nos blocos pertencem aos seus respetivos titulares, sendo utilizados unicamente para identificação visual nominativa de atalho.",
        tags: ["gratuito", "open source", "licenca", "eula", "marcas", "termos de uso"]
    },
	
	// ==========================================
    // UTILITÁRIOS: PHOTO VIEWER & GALLERY (v1.4)
    // ==========================================
    {
        categoria: "Utilitários",
        produto: "Photo Viewer",
        pergunta: "O que é o Photo Viewer & Photo Gallery da Cromak?",
        resposta: "É um visualizador e gestor de imagens rápido, leve e robusto para Windows, desenvolvido sob um motor moderno em Python (PyQt6). O projeto foi concebido para resgatar a estética nostálgica e a usabilidade de interfaces clássicas consagradas pelos utilizadores (temas Classic, Vista e Live), combinando-as com suporte nativo a ecrãs modernos e internacionalização em tempo real.",
        tags: ["photo viewer", "galeria", "imagens", "fotos", "classico", "vista", "live", "pyqt6"]
    },
    {
        categoria: "Utilitários",
        produto: "Photo Viewer",
        pergunta: "Como ativar o efeito visual Aero Glass (bordas transparentes) no Windows 10 e 11?",
        resposta: "Para reproduzir o efeito Aero Glass nativo no Windows 10 e 11, o programa disponibiliza uma opção nas preferências que recorre a utilitários de terceiros de modificação de interface (como o <em>DWMBlurGlass</em>).<br><br><strong>Aviso Importante:</strong> A instalação de ferramentas que injetam código no DWM (Desktop Window Manager) do Windows é de <em>inteira responsabilidade do utilizador</em>. A Cromak Technology não desenvolve nem mantém tais modificações externas.",
        tags: ["aero glass", "transparencia", "dwmblurglass", "windows 10", "windows 11", "bordas", "visual"]
    },
    {
        categoria: "Utilitários",
        produto: "Photo Viewer",
        pergunta: "Como definir o Photo Viewer como visualizador padrão de imagens no computador?",
        resposta: "Abra o programa, vá ao menu de <strong>Preferências</strong> e selecione o separador <strong>Associações</strong>. A partir daí, selecione as extensões que pretende abrir automaticamente (como <code>.jpg</code>, <code>.png</code>, <code>.bmp</code>, etc.) e confirme. O programa atualizará as diretivas no Registo do Windows de forma segura.",
        tags: ["associacao", "padrao", "abrir com", "definir padrao", "jpg", "png", "registro"]
    },
    {
        categoria: "Utilitários",
        produto: "Photo Viewer",
        pergunta: "O aplicativo envia fotos para a nuvem ou recolhe dados de telemetria?",
        resposta: "<strong>Não.</strong> O Photo Viewer opera de forma <strong>100% offline</strong>. Não recolhe dados pessoais, não tem contas ou logins, não exibe anúncios e nunca transfere as suas fotografias para servidores externos. O processamento das imagens é rigorosamente local.",
        tags: ["privacidade", "offline", "sem nuvem", "telemetria", "seguranca", "fotos locais"]
    },
    {
        categoria: "Utilitários",
        produto: "Photo Viewer",
        pergunta: "Onde ficam guardadas as configurações do aplicativo caso precise fazer backup?",
        resposta: "As preferências de utilização (como o tema visual ativo e o idioma selecionado) são armazenadas localmente no seu computador num ficheiro de texto simples chamado <code>settings.json</code>, localizado na pasta de dados do utilizador em <code>%APPDATA%</code>.",
        tags: ["configuracoes", "settings.json", "appdata", "backup", "idioma", "tema"]
    },
    {
        categoria: "Utilitários",
        produto: "Photo Viewer",
        pergunta: "O Photo Viewer é pago ou possui vínculos oficiais com a Microsoft?",
        resposta: "O software é disponibilizado sob a licença <strong>Freeware (100% gratuito)</strong>. Trata-se de um projeto independente criado de fã para fãs sob o conceito de <em>Fair Use</em> (preservação nostálgica e educacional), não possuindo afiliação, patrocínio ou aprovação oficial por parte da Microsoft Corporation.",
        tags: ["freeware", "gratuito", "licenca", "disclaimer", "microsoft", "fair use"]
    }
];