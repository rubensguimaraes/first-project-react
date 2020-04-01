import React from 'react'; // Importação da biblioteca react
import { render } from 'react-dom'; // Importação da biblioteca react-dom, que é a integração do React com o Navegador,
                                    // juntamente com a função render, que é responsável por renderizar um código React
                                    // (um componente do React) dentro de algum conteúdo do html
import App from './App';            // O ./ na importação indica que a importação é local
render(<App />, document.getElementById('app'));
                                    // Como primeiro parâmetro agora, temos nosso primeiro componente App.
                                    // No 2o parâmetro identificamos onde deve ser colocado o conteúdo,
                                    // procuraremos um conteúdo com id='app'.                           