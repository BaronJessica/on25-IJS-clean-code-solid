Racing Car Katas
=================
(Katas de carros de corrida)

Neste repositório você encontrará código inicial para cinco problemas distintos. Eles podem ser códigos que você herdou de uma base de código herdada. Agora você deseja escrever testes de unidade para eles, e isso é mais difícil do que deveria ser. Todos os trechos de código não seguem um ou mais princípios SOLID.

Para cada exercício, você deve identificar quais princípios do SOLID não estão sendo seguidos pelo código. Há apenas uma turma para a qual você está interessado em escrever testes no momento. Como primeiro passo, tente realizar algum tipo de teste antes de mudar de turma. Se os testes são difíceis de escrever, é por causa dos problemas com os princípios SOLID?

Quando você tiver algum tipo de teste em que se apoiar, refatore o código e torne-o testável. Tome cuidado ao refatorar para não alterar a funcionalidade ou alterar interfaces nas quais outros códigos de cliente possam depender. (Imagine que há código de cliente em outro repositório que você não consegue ver agora). Adicione mais testes para cobrir a funcionalidade da classe específica que você foi solicitado a testar.

Aplique o estilo e a estrutura de teste de unidade com os quais você se sente mais confortável. Você pode optar por usar stubs ou mocks ou nenhum. Se fizer isso, você poderá usar a ferramenta de simulação de sua preferência.


Desafios:
----------------------------------------------------------------

1. **TirePressureMonitoringSystem**: Escreva os testes unitários para a classe Alarm. A classe Alarme foi projetada para monitorar a pressão dos pneus e definir um alarme se a pressão cair fora da faixa esperada. A classe Sensor fornecida para o exercício simula o comportamento de um sensor de pneu real, fornecendo valores aleatórios, mas realistas.

2. **UnicodeFileToHtmlTextConverter**: Escreva os testes de unidade para a classe UnicodeFileToHtmlTextConverter. A classe UnicodeFileToHtmlTextConverter foi projetada para reformatar um arquivo de texto simples para exibição em um navegador. Para as versões Python e Java, existe uma classe adicional "HtmlPagesConverter" que é um pouco mais difícil de testar. Ele não apenas converte o texto de um arquivo em HTML, mas também oferece suporte à paginação. É um exercício de acompanhamento.

3. **TicketDispenser**: Escreva os testes de unidade para o TicketDispenser. A classe TicketDispenser foi projetada para ser usada para gerenciar um sistema de filas em uma loja. Pode haver mais de um dispensador de bilhetes, mas o mesmo bilhete não deve ser emitido para dois clientes diferentes.

4. **TelemetrySystem**:Escreva os testes de unidade para a classe TelemetryDiagnosticControls. A responsabilidade da classe TelemetryDiagnosticControls é estabelecer uma conexão com o servidor de telemetria (através do TelemetryClient), enviar uma solicitação de diagnóstico e receber com êxito a resposta que contém as informações de diagnóstico. A classe TelemetryClient fornecida para o exercício simula o comportamento da classe TelemetryClient real e pode responder com as informações de diagnóstico ou com uma sequência aleatória. A classe TelemetryClient real se conectaria e se comunicaria com o servidor de telemetria via tcp/ip.

5. **Leaderboard**: Escreva os testes de unidade para a classe Tabela de classificação, incluindo corridas com carros autônomos. A Tabela de classificação calcula os pontos e classificações dos pilotos com base nos resultados de diversas corridas.


Referência
----------------------------------------------------------------


Este era originalmente um fork do repositório de Luca Minudel. Ele o estava usando para um estudo de princípios de TDD e Design. Estou usando-o como um repositório para armazenar exercícios úteis para pessoas que desejam melhorar suas habilidades com os princípios TDD e SOLID. Por favor, consulte a postagem no blog ["SOLID principles and TDD"](http://coding-is-like-cooking.info/2012/09/solid-principles-and-tdd/) para leitura complementar ou o livro ["The Coding Dojo Handbook"](http://leanpub.com/codingdojohandbook).


