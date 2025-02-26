# Blogging Application

A modern, feature-rich blogging platform built with React and Appwrite. This application allows users to create, edit, and manage blog posts with a rich text editor, image uploads, and user authentication.

## Features

- User authentication and authorization
- Rich text editor with TinyMCE integration
- Image upload support for blog posts
- Responsive design with Tailwind CSS
- Post management (create, edit, delete)
- Dynamic routing
- Redux state management

## Technology Stack

- React 18.3
- Vite 6.1
- Appwrite (Backend as a Service)
- TinyMCE React Editor
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- ESLint

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- Appwrite instance (self-hosted or cloud)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bloggingApp
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
- Create a `.env` file in the root directory
- Add your Appwrite configuration:
```env
VITE_APPWRITE_URL=your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id
```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

To create a production build:

```bash
npm run build
```

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
bloggingApp/
├── src/
│   ├── appwrite/    # Appwrite configuration and services
│   ├── components/  # Reusable React components
│   ├── pages/       # Page components
│   ├── store/       # Redux store configuration
│   └── conf/        # Application configuration
├── public/          # Static assets
└── ...config files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Appwrite](https://appwrite.io/)
- [TinyMCE](https://www.tiny.cloud/)
- [Tailwind CSS](https://tailwindcss.com/)
