const path = require('path') // Detalhe: este path roda em cima do node

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),  // Define o arquivo de entrada indicando sua localização
  output: { // Outra chave obrigatória, onde será jogado o bandle  
    path: path.resolve(__dirname, 'public'), // O bandle será criado na pasta public (que deverá ser criada)
    filename: 'bundle.js' // utilizamos também a propriedade filename indicando o nome do arquivo
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: { // Vamos definir este module onde definiremos algums regras
    rules: [ // O webpack deverá ser informado sobre qual tipo de arquivo deve ser utilizado
      {      // Com isto ele irá transpilar este arquivo, ou seja, fazer com que o navegador o entenda
        test: /\.js$/, // utilizaremos uma expressão regular (fica entre duas barras) para definir que seja
                       // a barra invertida (em expressão regular) sempre deverá ser utilizada antes do .
                       // localizado um arquivo ".js" e on $ indica que deverá terminar com ".js".

        exclude: /nodule_modules/, // a localização acima deverá excluir o que estiver dentro de node_modules
                                 // pois os arquivos que ficam nesta pasta já estão transpilados pelo babel
        use: {
          loader: 'babel-loader' // para utilizar este loader, ele deve ser instalado, 
                                  // digite no terminal: yarn add babel-loader. Mais adiante teremos 
                                  // loader de css, de imagens, entre outros
        }        
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // Serve para importar arquivos css
          { loader: 'css-loader' },   // Serve para indicar que dentro do src/App.css podem haver outras importações,
                                      // como por exemplo um arquivo de imagens
        ]
      }, {
        test: /.*\.(gif|png|jpe?g)$/i, // Serve para importar arquivos de imagens
        use: {                         // Vale as regras referentes a expressões regulares, o i indica case insensitive
          loader: 'file-loader'      } // (letras maiúsculos e minúsculas sem diferença)
        }               
    ]                  
  } 
};