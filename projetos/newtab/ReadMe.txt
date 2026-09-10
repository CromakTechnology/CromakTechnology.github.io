================================================================================
                    NOVA ABA - CROMAK TECHNOLOGY
                        Manual do Usuário
================================================================================

Versão: 1.0
Desenvolvido por: Cromak Technology
Website Oficial: https://cromaktechnology.github.io

================================================================================
1. O QUE É A NOVA ABA?
================================================================================

A Nova Aba é uma página inicial personalizada com interface inspirada no estilo
Metro UI do Windows. Ela oferece:

- Acesso rápido aos seus sites mais usados (tiles coloridos)
- Barra de pesquisa com múltiplos motores (Google, Bing, Yahoo, DuckDuckGo, etc.)
- Histórico de pesquisas recentes
- 4 telas de conteúdo navegáveis (Mais Usados, Ferramentas, Notícias, etc.)
- Design moderno e responsivo

================================================================================
2. COMO INSTALAR E USAR
================================================================================

PASSO 1 - EXTRAIR OS ARQUIVOS
-----------------------------
1. Baixe o arquivo compactado (NovaAba.zip).
2. Clique com o botão direito no arquivo e selecione "Extrair aqui" ou 
   "Extrair para NovaAba\".
3. Escolha um local de sua preferência no computador.

   Sugestões de local:
   - C:\NovaAba\
   - C:\Users\SeuNome\Documentos\NovaAba\

   IMPORTANTE: Mantenha todos os arquivos dentro da mesma pasta. A estrutura
   de pastas (lib/, css/, js/) deve ser preservada para o funcionamento correto.

PASSO 2 - ABRIR A PÁGINA
------------------------
1. Abra a pasta onde você extraiu os arquivos.
2. Dê um duplo clique no arquivo "newtab.html".
3. A página abrirá no seu navegador padrão.


================================================================================
3. DEFINIR COMO PÁGINA INICIAL DO NAVEGADOR
================================================================================

GOOGLE CHROME:
1. Abra o Chrome e clique nos três pontinhos (...) no canto superior direito.
2. Vá em "Configurações" > "Inicialização" (ou "Ao iniciar").
3. Selecione "Abrir uma página específica ou um conjunto de páginas".
4. Clique em "Adicionar uma nova página".
5. Cole o caminho completo do arquivo. Exemplo:
   file:///C:/NovaAba/newtab.html
6. Clique em "Adicionar".

MICROSOFT EDGE:
1. Abra o Edge e clique nos três pontinhos (...) no canto superior direito.
2. Vá em "Configurações" > "Início, página inicial e novas guias".
3. Em "Ao abrir o Edge", selecione "Abrir estas páginas".
4. Clique em "Adicionar uma nova página" e cole o caminho:
   file:///C:/NovaAba/newtab.html

MOZILLA FIREFOX:
1. Abra o Firefox e clique nas três linhas () no canto superior direito.
2. Vá em "Configurações" > "Início".
3. Em "Novas janelas e abas", selecione "URLs personalizadas".
4. Cole o caminho do arquivo:
   file:///C:/NovaAba/newtab.html


================================================================================
4. CRIAR ATALHO NA ÁREA DE TRABALHO
================================================================================

MÉTODO 1 - ATALHO SIMPLES:
1. Navegue até a pasta onde você extraiu o projeto.
2. Clique com o botão direito no arquivo "newtab.html".
3. Selecione "Enviar para" > "Área de trabalho (criar atalho)".
4. Um atalho chamado "newtab - Atalho" aparecerá na sua área de trabalho.
5. Clique com o botão direito no atalho > "Renomear" e digite "Nova Aba".

MÉTODO 2 - ATALHO COM ÍCONE PERSONALIZADO:
1. Siga os passos do Método 1 para criar o atalho.
2. Clique com o botão direito no atalho criado > "Propriedades".
3. Vá até a aba "Atalho" e clique no botão "Alterar Ícone...".
4. Clique em "Procurar..." e localize um arquivo de ícone (.ico) personalizado.
5. Selecione o ícone desejado e clique em "OK" > "Aplicar" > "OK".

MÉTODO 3 - ATALHO VIA NAVEGADOR (RECOMENDADO):
1. Abra o arquivo "newtab.html" no seu navegador (Chrome ou Edge).
2. Clique no ícone de "Instalar" ou "Criar atalho" na barra de endereço 
   (ícone de monitor com seta para baixo).
3. Nomeie como "Nova Aba" e marque "Abrir como janela" (opcional).
4. O atalho será criado automaticamente na área de trabalho com o ícone do site.


================================================================================
5. ADICIONAR NA BARRA DE FAVORITOS
================================================================================

GOOGLE CHROME / MICROSOFT EDGE:
1. Abra o arquivo "newtab.html" no navegador.
2. Pressione Ctrl + D no teclado.
3. Na janela que abrir:
   - Nome: Digite "Nova Aba"
   - Pasta: Selecione "Barra de favoritos"
4. Clique em "Salvar".

MOZILLA FIREFOX:
1. Abra o arquivo "newtab.html" no Firefox.
2. Pressione Ctrl + D no teclado.
3. Na janela que abrir:
   - Nome: Digite "Nova Aba"
   - Pasta: Selecione "Barra de ferramentas de favoritos"
4. Clique em "Salvar".

DICA: Você pode organizar seus favoritos criando uma pasta chamada "Cromak"
na barra de favoritos e arrastando o atalho "Nova Aba" para dentro dela.


================================================================================
6. PERSONALIZAÇÕES RÁPIDAS
================================================================================

ALTERAR OS TILES (SITES FAVORITOS):
1. Abra a pasta do projeto.
2. Edite o arquivo "grid-1.js" com um editor de texto (Bloco de Notas, VS Code).
3. Localize a linha do tile que deseja alterar. Exemplo:
   { pos: 'pos-1', url: 'https://youtube.com/', bg: '#c4302b', img: 'lib/thumbs/youtube.png', title: 'YouTube' }
4. Modifique os valores:
   - url: Link do site que o tile abrirá
   - bg: Cor de fundo do tile (código hexadecimal)
   - img: Caminho da imagem do tile
   - title: Nome que aparecerá ao passar o mouse
5. Salve o arquivo e recarregue a página no navegador (F5).

ALTERAR O MOTOR DE BUSCA PADRÃO:
1. Abra a Nova Aba no navegador.
2. Clique no ícone de engrenagem ao lado da barra de pesquisa.
3. Selecione o motor de busca desejado (Google, Bing, Yahoo, etc.).
4. A preferência será salva automaticamente.


================================================================================
7. PROBLEMAS COMUNS
================================================================================

O LAYOUT ESTÁ DESALINHADO?
- Verifique se todos os arquivos estão na mesma pasta.
- Certifique-se de que a pasta "lib/" está no mesmo nível do "newtab.html".
- Limpe o cache do navegador pressionando Ctrl + Shift + Delete.

OS TILES NÃO APARECEM?
- Abra o console do navegador (F12) e verifique se há erros.
- Confirme que os arquivos "grid-1.js" e "app.js" estão na pasta correta.
- Verifique se as imagens em "lib/thumbs/" existem e estão com os nomes corretos.

A BARRA DE PESQUISA NÃO FUNCIONA?
- Verifique sua conexão com a internet (necessária para os motores de busca).
- Tente trocar o motor de busca clicando na engrenagem.


================================================================================
8. ESTRUTURA DE PASTAS
================================================================================

NovaAba/
├── newtab.html          ← Página principal (abra este arquivo)
├── videos.html          ← Página de Vídeos
├── musicas.html         ← Página de Músicas
├── loja.html            ← Página de Shopping
├── app.js               ← Lógica principal do JavaScript
├── grid-1.js            ← Dados dos tiles (Mais Usados)
├── style.css            ← Estilos visuais
├── LEIAME.txt           ← Este arquivo
├── LICENSE.txt          ← Licença e direitos autorais
└── lib/                 ← Pasta de recursos
    ├── thumbs/          ← Imagens dos tiles
    ├── buttons/         ← Ícones de botões e motores de busca
    ├── icons/           ← Ícones diversos
    └── background/      ← Imagens de fundo


================================================================================
9. LICENÇA E DIREITOS AUTORAIS
================================================================================

Copyright (c) 2026 Cromak Technology. Todos os direitos reservados.
Website Oficial: https://cromaktechnology.github.io

Este código-fonte, design, layout e todos os elementos visuais contidos
neste projeto são de propriedade exclusiva da Cromak Technology.

É ESTRITAMENTE PROIBIDO:
1. O uso, cópia, modificação ou distribuição deste projeto por qualquer
   empresa, organização ou entidade corporativa sem a devida licença
   comercial prévia e por escrito.
2. A remoção ou alteração deste aviso de direitos autorais.
3. O uso deste código para fins comerciais, corporativos ou lucrativos.

O uso pessoal e não comercial é permitido, desde que este aviso seja
mantido intacto. Violações destes termos estão sujeitas às penalidades
civis e criminais previstas na legislação de direitos autorais.

Para solicitar licença comercial ou parcerias, entre em contato através
do site oficial: https://cromaktechnology.github.io


================================================================================
Desenvolvido com dedicação por Cromak Technology
https://cromaktechnology.github.io
================================================================================