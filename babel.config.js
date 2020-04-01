module.exports = {
  presets: [  // Vamos exportar os seguinte presets instalados anteriormente
    "@babel/preset-env",    // Responsável por habilitar as responsabilidades do Java Script que o navegador não entende
                            // como o import, export, arrow functions (possui sintaxe mais curta) e classes. 
    "@babel/preset-react"   // Vai habilitar do react como o JSX entre outras funcionalidades específicas 
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties' // Instalamos este plugin para podermos utilizar uma sintaxe
  ]                                           // mais simples do "state" no componente TechList
};