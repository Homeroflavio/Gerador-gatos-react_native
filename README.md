# 🐱 Gerador de Gatinhos - React Native

Um aplicativo móvel divertido desenvolvido em **React Native** (com **Expo**) para gerar imagens aleatórias de gatos fofos! O projeto consome uma API pública e apresenta os gatinhos em um layout em formato de galeria, contabilizando quantos gatos você já gerou.

---

## 📱 Funcionalidades

- **Geração Aleatória:** Gera imagens de gatos dinamicamente consumindo a API [CATAAS (Cats as a Service)](https://cataas.com/).
- **Contador:** Um sistema inteligente que acompanha e exibe o número de gatinhos gerados na sessão atual.
- **Feedback Tátil:** O aplicativo emite uma leve vibração (haptic feedback) toda vez que um novo gatinho é gerado, melhorando a experiência do usuário.
- **Galeria em Grid:** As imagens são exibidas organizadas lado a lado, como uma galeria responsiva.
- **Limpar Galeria:** Um botão dedicado para resetar o contador e limpar a tela, caso você queira recomeçar.

---

## 🚀 Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/):** Framework para desenvolvimento do aplicativo nativo (Android e iOS).
- **[Expo](https://expo.dev/):** Plataforma e framework para facilitar o desenvolvimento, build e testes com React Native.
- **JavaScript (ES6+):** Lógica e controle de estado (usando Hooks como `useState`).
- **Fetch API (Implícito):** Integração com a web para buscar as URLs de imagens geradas através de timestamps dinâmicos.

---

## 🛠️ Como executar o projeto na sua máquina

Siga as instruções abaixo para testar o aplicativo no seu próprio celular (via Expo Go) ou em um emulador.

### Pré-requisitos
- Ter o [Node.js](https://nodejs.org/) instalado.
- Ter o app **Expo Go** instalado no seu celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) ou [iOS](https://apps.apple.com/us/app/expo-go/id982107779)).

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Homeroflavio/Gerador-gatos-react_native.git
   ```

2. **Acesse a pasta do projeto**
   ```bash
   cd gerador-gatos
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npx expo start
   ```
   *(Ou simplesmente `npm start`)*

5. **Teste no seu celular!**
   - Abra o aplicativo **Expo Go** no seu smartphone.
   - Escaneie o **QR Code** que aparecerá no terminal do seu computador.
   - Aguarde o carregamento (bundling) e divirta-se!

---
