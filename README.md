# Descrição do projeto

### Componentes

- **Home**
- **Dog breeds**
- **Luck dog**

### Rotas
- localizado no app-routing-modules.ts (Geral)
- /home
- /luckyy
- /breeds

### Módulos e Dependências
- httpclientmodule localzado em app.modules.ts (Geral)
- httpclient localizado em app.config.ts (Geral)
- Uso do módulo HttpClientModule e da biblioteca HttpClient para realizar chamadas HTTP à API, pode ser observado nos serviços.
- Implementação da biblioteca ngx-pagination para paginação na lista dog-breeds.components.ts.
- Utilização de estilos com CSS padrão e Bootstrap.

### Serviços
- API das raças localizada em (services/breeds.service.ts)
- API das fotos dos cachorros localizada em (services/lucky.service.ts)

### Pipes
- uppercase: Transforma o titulo das box de cachorros em maiusculo. (home/home.components.html)
- titlecase: Formata o nome do cachorro para primeira letra maior e o resto minusculo.(dog-breeds/dog-breeds.components.html)

### Diretivas

- static-message.directive.ts: Mensagem personalizada aleatoria gerada para seu cachorro da sorte.
- NgFor: Diretivas estruturais do angular usada no componente dog-breeds.html.
- NgIf: Diretivas estruturais do angular usada para garantir que as imagens dos cachorros existem usada no componente luck-dog.html.
