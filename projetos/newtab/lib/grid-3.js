// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados da Tela 3 (Notícias, Tempo e Concursos) - EXATAMENTE COMO NO HTML
window.defaultTiles['grid-3'] = [
	{ pos: 'pos-1', url: 'https://g1.globo.com/previsao-do-tempo/', bg: '#f39c12', img: 'lib/thumbs/tempo-clima.png', title: 'Tempo' },
	{ pos: 'pos-2', url: 'https://gov.br/receitafederal/', bg: '#2c3e50', img: 'lib/thumbs/receita-federal.png', title: 'Receita Federal' },
	{ pos: 'pos-3', url: 'https://ig.com.br', bg: '#ff6600', img: 'lib/thumbs/ig-noticias.png', title: 'IG Notícias' },
	{ pos: 'pos-4', url: 'https://bbc.co.uk/portuguese/', bg: '#bb1919', img: 'lib/thumbs/bbcnews.png', title: 'BBC News' },
	{ pos: 'pos-5', url: 'https://noticias.r7.com/', bg: '#e74c3c', img: 'lib/thumbs/r7-noticias.png', title: 'R7 Notícias' },
	{ pos: 'pos-6', url: 'https://folha.uol.com.br/', bg: '#1a1a1a', img: 'lib/thumbs/folha-de-sao-paulo.png', title: 'Folha de São Paulo' },
	{ pos: 'pos-7', url: 'https://g1.globo.com', bg: '#c4302b', img: 'lib/thumbs/g1.png', title: 'Globo Notícias' },
	{ pos: 'pos-8', url: 'https://veja.com.br/', bg: '#e67e22', img: 'lib/thumbs/veja.png', title: 'Veja' },
	{ pos: 'pos-9', url: 'https://cetroconcursos.org.br', bg: '#2980b9', img: 'lib/thumbs/cetro-concursos.png', title: 'Centro Concursos Publicos' },
	{ pos: 'pos-10', url: 'https://estadao.com.br/', bg: '#d35400', img: 'lib/thumbs/estadao.png', title: 'Estadão' },
	{ pos: 'pos-11', url: 'https://gov.br/pt-br/servicos/buscar-trabalhador-no-sistema-nacional-de-emprego-sine', bg: '#27ae60', img: 'lib/thumbs/sine.png', title: 'SINE' },
	{ pos: 'pos-12', url: 'https://gestaodeconcursos.com.br', bg: '#8e44ad', img: 'lib/thumbs/gestao-concursos.png', title: 'Gestão De Concursos' }
];