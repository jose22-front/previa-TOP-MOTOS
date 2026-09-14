# TOP MOTOS 021

Site completo em React + Vite, JavaScript, CSS e Lucide Icons. Catálogo e fotos de moto são DEMONSTRATIVOS. Não representam estoque real. Não há aprovação financeira, upload ou envio automático de dados.

## Executar

Requer Node.js 22+ e pnpm 11+.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

O build de produção fica em `dist/`. Publique essa pasta em hospedagem estática HTTPS. Não abra index.html diretamente pelo sistema de arquivos; utilize um servidor HTTP.

O projeto usa esbuild em WebAssembly via `pnpm-workspace.yaml` para compatibilidade com ambientes Windows restritos. Essa configuração afeta somente desenvolvimento/build, nunca o JavaScript entregue ao visitante.

## Personalizar antes do lançamento comercial

- `src/data/config.js`: único local do número do WhatsApp (`WHATSAPP_NUMBER`), endereço, horários, mapa, foto da loja, fotos de clientes e do Instagram.
- Número: DDI + DDD + telefone, apenas dígitos, por exemplo no formato 55 + DDD + número. Não há número real cadastrado. Enquanto faltar, todos os CTAs mostram a mensagem pronta e um link ao Instagram.
- `src/data/motorcycles.js`: seis exemplos de motos, preços e quilometragem fictícios. Troque cada item e sua imagem por informações e fotos reais confirmadas. O campo `demonstration` deve ser `false` em itens reais; atualize também o aviso geral do catálogo ao encerrar a demonstração.
- `public/images/`: coloque aqui as fotos originais. A mesma moto genérica ilustrativa é usada nos exemplos, sem alegar que a foto corresponde ao modelo do card.
- `CLIENT_PHOTOS` e `INSTAGRAM_PHOTOS`: arrays de objetos `{ src, alt, caption }`, conforme comentários em config.js. Não se utilizam screenshots das referências nem fotos de clientes inventados.
- `STORE.storeImage`: caminho da foto original da fachada; vazio mantém o espaço identificado.
- `STORE.mapEmbedUrl`: URL de incorporação fornecida pelo Google Maps após confirmar o endereço. Vazio mantém orientação para combinar visita.
- Logo tipográfico recriado em texto/CSS, inspirado na identidade fornecida; pode ser substituído pelo arquivo oficial em `components/UI.jsx`.
- A indicação +23 mil seguidores foi baseada exclusivamente na referência fornecida; revise periodicamente.

## Atendimento e privacidade

Os formulários validam campos e preparam texto para `wa.me` com `encodeURIComponent`. Não enviam mensagens por conta própria. O visitante confirma o envio no WhatsApp. Sem número válido, exibem o texto em um modal com botão de cópia e alternativa pelo Instagram. Nada é gravado em localStorage ou banco de dados.

Fotos: a área explica o envio de anexos diretamente no WhatsApp. O ponto de integração futura está comentado em `src/sections/Forms.jsx`. Para upload real, implemente endpoint, armazenamento, validação de tipo/tamanho e política de privacidade apropriada.

Financiamento: somente consulta; não existe cálculo de parcela ou aprovação fictícia. Não se pedem documentos nem dados bancários.

Fontes Barlow/Barlow Condensed carregadas pelo Google Fonts com fallback local. Imagens WebP locais, hero prioritária e demais imagens lazy. O site não incorpora feed externo automaticamente.

## Estrutura

- `src/components/`: header, botões, logo, modal acessível.
- `src/sections/`: hero, catálogo, formulários e seções institucionais.
- `src/data/`: dados editáveis.
- `src/styles.css`: identidade visual, breakpoints e movimento reduzido.
- `index.html`: SEO, Open Graph básico e idioma.

## Publicação

Não publicar como catálogo comercial sem substituir dados demonstrativos e confirmar contatos. A aplicação já pode ser avaliada em ambiente privado. Nenhum CNPJ, endereço, depoimento, parceiro ou histórico de vendas foi inventado.
