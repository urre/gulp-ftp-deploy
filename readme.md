# Gulp FTP Deploy

Must deploy to an old ftp server? Look no further.

This workflow is using the npm package [vinyl-ftp](https://www.npmjs.com/package/vinyl-ftp), a blazing fast vinyl adapter for FTP. Supports parallel transfers, conditional transfers, buffered or streamed files, and more. Often performs better than your favorite desktop FTP client.

## Setup

1. Add ftp credentials in ```gulp/secrets.json``` (don't forget to ignore this file from your git repo)
2. Setup paths in ```gulp/config.js```

## Usage

	gulp deploy