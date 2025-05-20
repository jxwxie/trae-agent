# Trae Agent

This repository contains various AI agents for industry analysis and translation tasks.

## Project Structure

- `Industry_report_agent/`: Industry analysis report generation agent
- `Translator_agent/`: Translation service agent
- `Guidence/`: Usage guides and tips
- `Reports/`: Generated reports (not tracked in git)

## Environment Setup

### Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose (for containerized deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trae-agent.git
cd trae-agent
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in the Industry_report_agent directory
   - Update the values in `.env` with your actual API keys and configuration

```bash
cp Industry_report_agent/.env.example Industry_report_agent/.env
```

### API Key Security

This project uses environment variables for managing sensitive data like API keys. To keep your API keys secure:

1. Never commit the `.env` file to version control (it's already in .gitignore)
2. Use the provided `.env.example` as a template, which contains the required environment variables without actual values
3. For production deployment:
   - Set environment variables directly on your hosting platform
   - Use secrets management services if available
   - Never expose API keys in client-side code or public repositories

## Usage

Refer to the specific agent directories for detailed usage instructions:

- [Industry Report Agent](./Industry_report_agent/README.md)
- [Translator Agent](./Translator_agent/README.md)

## Docker Deployment

For containerized deployment, use the provided Docker Compose configuration:

```bash
docker-compose up -d
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.