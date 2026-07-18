/* Substitua os dados abaixo pelos títulos, links e textos reais dos 10 vídeos.
   O site já está preparado para exibir tudo automaticamente. */
window.RECIPES = Array.from({length:10},(_,i)=>({
  id:i+1,
  title:`Receita da Gabi ${i+1}`,
  category:i<4?'Bolos e doces':i<7?'Biscoitos':'Receitas artesanais',
  description:'Receita em vídeo da Confeitaria da Gabi. Ingredientes e modo de preparo serão importados da descrição do YouTube.',
  youtube:'https://youtube.com/@confeitariadagabi',
  videoId:'',
  image:'',
  time:'Passo a passo',
  yield:'Veja no vídeo',
  ingredients:['Conteúdo disponível na descrição do vídeo no YouTube.'],
  preparation:['Acesse o vídeo para acompanhar o modo de preparo completo.'],
  tip:'Receita produzida e apresentada pela Gabi.'
}));
