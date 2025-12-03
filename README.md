<div align="center">

<a href='https://github.com/salimuddin07/ApexChat'>
  <img src="./docs/images/cover.png" width="1000" alt="ApexChat AI"/>
</a>

<h1 align="center">ApexChat AI - Custom Implementation</h1>

English | [العربية](./README_AR.md) | [简体中文](./README_CN.md)

✨ A customized AI Assistant with npm-based workflow, supporting Claude, DeepSeek, GPT-4 & Gemini Pro

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-green?logo=vercel)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsalimuddin07%2FApexChat)
[![Docker](https://img.shields.io/badge/Deploy-Docker-blue?logo=docker)](https://hub.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/salimuddin07/ApexChat?style=social)](https://github.com/salimuddin07/ApexChat)

[🚀 Live Demo](#) | [📖 Documentation](docs/) | [🐛 Issues](https://github.com/salimuddin07/ApexChat/issues) | [⭐ Star this repo](https://github.com/salimuddin07/ApexChat)

</div>

---

## 🚀 Features

- **🤖 Multiple AI Providers**: OpenAI, Anthropic Claude, Google Gemini, DeepSeek, Baidu, ByteDance, and more
- **🎯 Smart Conversations**: Context-aware chat with memory and templates
- **🎤 Voice & Audio**: Real-time speech-to-text and text-to-speech
- **🎨 Image Generation**: Integrated Stable Diffusion for AI art
- **🔌 Plugin System**: Extensible through Model Context Protocol (MCP)
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **☁️ Cloud Sync**: Sync chat history across devices
- **🔒 Privacy Focused**: Your data stays with you
- **⚡ Lightning Fast**: Optimized for performance and speed
- **🛠️ NPM-based**: Streamlined development with npm package management

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm (included with Node.js)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/salimuddin07/ApexChat.git
cd ApexChat
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.template .env.local
# Edit .env.local with your API keys
```

4. **Start development server:**
```bash
npm run dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint linter |
| `npm test` | Run test suite |
| `npm run export` | Export static files |

## 🐳 Docker Deployment

### Quick Start with Docker

```bash
# Build the image
docker build -t apexchat-ai .

# Run the container
docker run -p 3000:3000 apexchat-ai
```

### Using Docker Compose

```bash
docker-compose up -d
```

## ☁️ One-Click Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsalimuddin07%2FApexChat&env=OPENAI_API_KEY&env=CODE&project-name=apexchat-ai&repository-name=ApexChat)

### Deploy to Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/nextchat)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/salimuddin07/ApexChat)

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Anthropic Claude
ANTHROPIC_API_KEY=your_anthropic_api_key

# Google Gemini
GOOGLE_API_KEY=your_google_api_key

# Access Control (Optional)
CODE=your_access_password

# Base URL (Optional)
BASE_URL=https://api.openai.com

# Other providers...
```

### Supported AI Providers

- ✅ **OpenAI** (GPT-3.5, GPT-4, GPT-4 Turbo)
- ✅ **Anthropic** (Claude 3, Claude 3.5)
- ✅ **Google** (Gemini Pro, Gemini Pro Vision)
- ✅ **DeepSeek** (DeepSeek Chat, DeepSeek Coder)
- ✅ **Baidu** (ERNIE Bot)
- ✅ **ByteDance** (Doubao)
- ✅ **Moonshot** (Moonshot AI)
- ✅ **SiliconFlow** (Open source models)
- ✅ **XAI** (Grok)

## 📱 Features Overview

### 💬 Advanced Chat
- Multi-turn conversations with context
- Message search and filtering
- Chat export (Markdown, PNG, PDF)
- Chat templates and masks
- Message editing and regeneration

### 🎤 Voice & Audio
- Speech-to-text input
- Text-to-speech output
- Real-time voice conversations
- Multiple voice options

### 🎨 Image Generation
- Stable Diffusion integration
- Custom prompts and styles
- High-quality image output
- Image-to-image generation

### 🔌 Plugin System
- Model Context Protocol (MCP) support
- Custom tools and functions
- Extensible architecture
- Community plugins

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass

## 🐛 Troubleshooting

### Common Issues

**1. "Module not found" errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. Build failures**
```bash
# Check Node.js version
node --version  # Should be 18+
```

**3. API key issues**
- Ensure your API keys are correctly set in `.env.local`
- Check that your API provider account has sufficient credits

### Getting Help

- 📖 Check the [Documentation](docs/)
- 🐛 Report bugs in [Issues](https://github.com/salimuddin07/ApexChat/issues)
- 💬 Join discussions in [Discussions](https://github.com/salimuddin07/ApexChat/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **All AI providers** for their amazing APIs
- **Open source community** for contributions and feedback
- **Contributors** who help improve this project
- **Inspired by** the open-source AI chat community

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/salimuddin07/ApexChat?style=social)
![GitHub forks](https://img.shields.io/github/forks/salimuddin07/ApexChat?style=social)
![GitHub issues](https://img.shields.io/github/issues/salimuddin07/ApexChat)
![GitHub pull requests](https://img.shields.io/github/issues-pr/salimuddin07/ApexChat)

## 🔗 Links

- **[GitHub Repository](https://github.com/salimuddin07/ApexChat)**
- **[Live Demo](#)** (Update with your deployment URL)
- **[Documentation](docs/)**
- **[Changelog](CHANGELOG.md)**

---

<div align="center">

**Made with ❤️ by [Saiyed Salimuddin](https://www.salimuddin.tech/)**

⭐ **Star this repo if you find it helpful!** ⭐

</div>
