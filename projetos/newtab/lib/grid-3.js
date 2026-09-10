// Inicia o objeto global se ele não existir
window.defaultTiles = window.defaultTiles || {};

// Adiciona os dados da Tela 3 (Notícias, Tempo e Concursos) - EXATAMENTE COMO NO HTML
window.defaultTiles['grid-3'] = [
	{ pos: 'pos-1', url: 'https://g1.globo.com/previsao-do-tempo/', bg: '#f39c12', img: 'lib/thumbs/Tempo.png', title: 'Tempo' },
	{ pos: 'pos-2', url: 'https://www.gov.br/receitafederal/', bg: '#2c3e50', img: 'lib/thumbs/ReceitaFederal.png', title: 'Receita Federal' },
	{ pos: 'pos-3', url: 'https://ig.com.br', bg: '#ff6600', img: 'lib/thumbs/IGNoticias.png', title: 'IG Notícias' },
	{ pos: 'pos-4', url: 'https://bbc.co.uk/portuguese/', bg: '#bb1919', img: 'lib/thumbs/bbcnews.png', title: 'BBC News' },
	{ pos: 'pos-5', url: 'https://noticias.r7.com/', bg: '#e74c3c', img: 'lib/thumbs/R7Noticias.png', title: 'R7 Notícias' },
	{ pos: 'pos-6', url: 'https://www.folha.uol.com.br/', bg: '#1a1a1a', img: 'lib/thumbs/FolhadeSaoPaulo.png', title: 'Folha de São Paulo' },
	{ pos: 'pos-7', url: 'https://g1.globo.com', bg: '#c4302b', img: 'lib/thumbs/GloboNoticias.png', title: 'Globo Notícias' },
	{ pos: 'pos-8', url: 'https://veja.com.br/', bg: '#e67e22', img: 'lib/thumbs/Veja.png', title: 'Veja' },
	{ pos: 'pos-9', url: 'https://www.cetroconcursos.org.br', bg: '#2980b9', img: 'lib/thumbs/CentroConcursosPublicos.png', title: 'Centro Concursos Publicos' },
	{ pos: 'pos-10', url: 'https://estadao.com.br/', bg: '#d35400', img: 'lib/thumbs/Estadao.png', title: 'Estadão' },
	{ pos: 'pos-11', url: 'https://www.gov.br/pt-br/servicos/buscar-trabalhador-no-sistema-nacional-de-emprego-sine', bg: '#27ae60', img: 'lib/thumbs/SINE.png', title: 'SINE' },
	{ pos: 'pos-12', url: 'https://www.gestaodeconcursos.com.br', bg: '#8e44ad', img: 'lib/thumbs/GestaoDeConcursos.png', title: 'Gestão De Concursos' }
];