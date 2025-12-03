<div align="center">

<a href='https://github.com/salimuddin07/ApexChat'>
  <img src="./docs/images/cover.png" width="1000" alt="ApexChat AI"/>
</a>

<h1 align="center">🚀 ApexChat AI - Next-Gen AI Assistant</h1>

<p align="center">
<strong>Built by <a href="https://www.salimuddin.tech/">Saiyed Salimuddin</a> | Enterprise-Grade AI Platform</strong>
</p>

English | [العربية](./README_AR.md) | [简体中文](./README_CN.md)

✨ **Professional AI Assistant** with multi-provider support, voice capabilities, and advanced features

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-ApexChat-blue?style=for-the-badge)](https://apexchat.vercel.app)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsalimuddin07%2FApexChat)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/salimuddin07/ApexChat?style=for-the-badge&logo=github)](https://github.com/salimuddin07/ApexChat)

<div align="center">
<a href="https://apexchat.vercel.app">🌟 Try Live Demo</a> • 
<a href="#-quick-start">📖 Quick Start</a> • 
<a href="https://github.com/salimuddin07/ApexChat/issues">🐛 Report Issues</a> • 
<a href="https://www.salimuddin.tech/">👨‍💻 About Developer</a>
</div>

</div>

---

## 🎯 Why ApexChat AI?

> **"The most advanced AI chat platform supporting multiple providers in one unified interface"**

ApexChat AI isn't just another chatbot - it's a comprehensive AI ecosystem designed for power users, developers, and businesses who need reliable, fast, and feature-rich AI interactions.

### ⭐ **Key Highlights**

- **🤖 Multi-AI Support**: OpenAI GPT-4, Claude 3.5, Gemini Pro, DeepSeek & 10+ providers
- **🎤 Voice Integration**: Real-time speech-to-text and natural voice responses  
- **🎨 Creative Suite**: AI image generation with Stable Diffusion
- **🔌 Extensible**: Plugin system via Model Context Protocol (MCP)
- **📱 Universal**: Perfect on desktop, tablet, and mobile
- **☁️ Smart Sync**: Your conversations follow you everywhere
- **🔒 Privacy First**: Your data, your control
- **⚡ Lightning Fast**: Optimized for speed and performance

---

## 🚀 Quick Start

### 🎯 **Option 1: One-Click Deploy** *(Recommended)*

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsalimuddin07%2FApexChat&env=OPENAI_API_KEY&env=CODE&project-name=apexchat&repository-name=ApexChat)

### 🛠️ **Option 2: Local Development**

```bash
# Clone the repository
git clone https://github.com/salimuddin07/ApexChat.git
cd ApexChat

# Install dependencies
npm install

# Set up environment variables
cp .env.template .env.local
# Add your API keys to .env.local

# Start development server
npm run dev

# Open browser at http://localhost:3000
```

### 🐳 **Option 3: Docker**

```bash
# Quick start with Docker
docker run -p 3000:3000 \
  -e OPENAI_API_KEY=your_key_here \
  salimuddin07/apexchat:latest

# Or use Docker Compose
docker-compose up -d
```

---

## 🎨 Features Overview

<table>
<tr>
<td width="50%">

### 💬 **Smart Conversations**
- Multi-turn context awareness
- Message search & filtering
- Export conversations (MD, PNG, PDF)
- Custom chat templates
- Message editing & regeneration

### 🎤 **Voice & Audio** 
- Real-time speech recognition
- Natural voice synthesis
- Multiple voice options
- Voice-to-voice conversations
- Audio message support

</td>
<td width="50%">

### 🤖 **AI Providers**
- **OpenAI**: GPT-4, GPT-4 Turbo, GPT-3.5
- **Anthropic**: Claude 3, Claude 3.5 Sonnet
- **Google**: Gemini Pro, Gemini Vision
- **DeepSeek**: Chat & Coder models
- **Others**: Baidu, ByteDance, Moonshot, XAI

### 🎨 **Creative Tools**
- Stable Diffusion integration
- Image generation & editing
- Custom art styles
- Image-to-image transformation

</td>
</tr>
</table>

---

## ⚙️ Configuration

### 🔑 **Environment Variables**

Create `.env.local` with your API keys:

```bash
# OpenAI (Required for GPT models)
OPENAI_API_KEY=sk-...

# Anthropic Claude
ANTHROPIC_API_KEY=sk-ant-...

# Google Gemini
GOOGLE_API_KEY=AIza...

# Optional: Access Control
CODE=your_access_password

# Optional: Custom Base URL
BASE_URL=https://api.openai.com
```

### 🌐 **Deployment Options**

| Platform | Status | Deploy Link |
|----------|--------|-------------|
| **Vercel** | ✅ Recommended | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsalimuddin07%2FApexChat) |
| **Netlify** | ✅ Supported | [![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/salimuddin07/ApexChat) |
| **Railway** | ✅ Supported | [![Deploy](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/salimuddin07/ApexChat) |
| **Docker** | ✅ Available | `docker pull salimuddin07/apexchat` |

---

## 🔧 Advanced Usage

### 📊 **Performance Optimization**

```bash
# Production build
npm run build
npm start

# Enable caching
export ENABLE_CACHE=true

# Optimize images
npm install sharp
```

### 🔌 **Plugin Development**

```javascript
// Create custom MCP plugin
export const customPlugin = {
  name: "my-plugin",
  tools: [
    {
      name: "custom_tool",
      description: "Your custom functionality",
      handler: async (args) => {
        // Your plugin logic here
      }
    }
  ]
};
```

### 🎯 **API Integration**

```javascript
// Use ApexChat API in your app
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: "Hello, ApexChat!",
    model: "gpt-4"
  })
});
```

---

## 🛡️ Security & Privacy

- 🔐 **End-to-end encryption** for sensitive conversations
- 🛡️ **No data logging** - your chats stay private
- 🔑 **API key protection** - keys never leave your browser
- 🌐 **HTTPS enforcement** - secure connections only
- 🚫 **No tracking** - your privacy is respected

---

## 🤝 Contributing

We love contributions! Here's how you can help:

<details>
<summary>🔧 <strong>Development Setup</strong></summary>

```bash
# Fork and clone the repository
git clone https://github.com/your-username/ApexChat.git
cd ApexChat

# Install dependencies
npm install

# Start development
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

</details>

<details>
<summary>📝 <strong>Contribution Guidelines</strong></summary>

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

</details>

### 🌟 **Contributors**

<a href="https://github.com/salimuddin07/ApexChat/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=salimuddin07/ApexChat" />
</a>

---

## 📊 Project Statistics

![GitHub stars](https://img.shields.io/github/stars/salimuddin07/ApexChat?style=social)
![GitHub forks](https://img.shields.io/github/forks/salimuddin07/ApexChat?style=social)
![GitHub issues](https://img.shields.io/github/issues/salimuddin07/ApexChat)
![GitHub pull requests](https://img.shields.io/github/issues-pr/salimuddin07/ApexChat)
![GitHub last commit](https://img.shields.io/github/last-commit/salimuddin07/ApexChat)
![GitHub repo size](https://img.shields.io/github/repo-size/salimuddin07/ApexChat)

---

## 📚 Documentation

| Resource | Description |
|----------|-------------|
| [📖 User Guide](./docs/user-guide.md) | Complete usage instructions |
| [🔧 API Reference](./docs/api.md) | Developer documentation |
| [🎨 Theming Guide](./docs/theming.md) | Customization options |
| [🔌 Plugin Development](./docs/plugins.md) | Create custom plugins |
| [🐳 Docker Guide](./docs/docker.md) | Container deployment |

---

## 🆘 Support

<div align="center">

### 🤔 **Need Help?**

| Type | Link |
|------|------|
| 🐛 **Bug Reports** | [Create Issue](https://github.com/salimuddin07/ApexChat/issues/new?template=bug_report.md) |
| 💡 **Feature Requests** | [Create Issue](https://github.com/salimuddin07/ApexChat/issues/new?template=feature_request.md) |
| 💬 **Discussions** | [GitHub Discussions](https://github.com/salimuddin07/ApexChat/discussions) |
| 📧 **Contact Developer** | [Saiyed Salimuddin](https://www.salimuddin.tech/contact) |

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AI Providers** for their amazing APIs and models
- **Open Source Community** for inspiration and contributions  
- **Beta Testers** who helped refine the user experience
- **Contributors** who make this project better every day

---

<div align="center">

## 🌟 **Star History**

[![Star History Chart](https://api.star-history.com/svg?repos=salimuddin07/ApexChat&type=Date)](https://star-history.com/#salimuddin07/ApexChat&Date)

---

### 🚀 **Ready to experience the future of AI chat?**

[![Try ApexChat Now](https://img.shields.io/badge/🚀_Try_ApexChat_Now-FF6B6B?style=for-the-badge&logo=rocket)](https://apexchat.vercel.app)

**Made with ❤️ by [Saiyed Salimuddin](https://www.salimuddin.tech/)**

⭐ **Star this repo if you find it helpful!** ⭐

</div>
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
