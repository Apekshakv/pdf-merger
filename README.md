# PDF Merger Application

This is a simple Node.js application that merges two PDF files and provides the merged output as a downloadable file.

## Features
- Upload two PDF files.
- Merge the uploaded files into one.
- Download the merged PDF.

## Technologies Used
- **Node.js**: Server-side runtime environment.
- **Express**: Web framework for Node.js.
- **Multer**: Middleware for handling file uploads.
- **PDF Library**: Used for merging PDF files.
- **HTML/CSS**: Basic front-end for file input.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/pdf-merger.git
   cd pdf-merger
   
2 .Install the dependencies:
---- npm install

3.Start the application:

----node index.js

4. Navigate to http://localhost:8000 in your web browser to use the app.

5.  Project Structure
 ── index.js              # Main application file
├── index.html          # HTML front-end for file selection
├── public/             # Folder to serve static files (merged PDFs)
├── uploads/            # Temporary storage for uploaded files
├── testodf.js          # Module for PDF merging functionality
└── README.md           # Project documentation

   


