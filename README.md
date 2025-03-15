<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Run Locally](#running-run-locally)
- [Roadmap](#compass-roadmap)

<!-- About the Project -->
## :star2: About the Project

### 💡 Why?
I began **Mental Aid Map Project** in December of 2024 intending to create universal, intuitive and helpful tool for people experiencing mental health issues.

### 🚩 Issue
Currently Polish National Health Services are being massively overloaded by amount of people that suffer from mental health conditions - especially children and adolescents. 
<br>
According to the report made by Eurostat, in Poland there are approximately 13.4 psychiatrists for every 100,000 citizens.
<br> In comparison to Europe's average (~25 psychiatrists per 100 000 inhabitants) this number is extremely low - and it is.
Looking at statistical data of neighbouring countries it gets only more depressing:
- ~25.2 doctors per 100 000 citizens - Lithuania
- ~15.1 doctors per 100 000 citizens - Hungary
- ~28.4 doctors per 100 000 citizens - Germany
- ~16.7 doctors per 100 000 citizens - Czechia

Source: [Eurostat](https://ec.europa.eu/eurostat/databrowser/bookmark/69b739f1-844c-4736-ba16-01998d9ca132?lang=en)
### ✅ Solution
By building this website, I aimed to address the lack of accessible information on NHS facilities that provide psychiatric, psychological, and therapeutic services. 
I hope this will help distribute demand more evenly by making people aware of all available facilities, reducing overcrowding at the most well-known ones and encouraging the use of equally accessible centers with shorter waiting times.


<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img height="400" src="https://github.com/user-attachments/assets/b01306dc-fd57-480a-8ee0-0dffab924325" alt="screenshot" />
</div>

<!-- TechStack -->
### :space_invader: Tech Stack

<details open>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
    <li><a href="https://ui.shadcn.com/">shadcn/ui</a></li>
    <li><a href="https://tanstack.com/query/latest">React Query</a></li>
  </ul>
</details>

<details open>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://socket.io/">Vercel</a></li>
  </ul>
</details>

<details open>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  </ul>
</details>

<!-- Features -->
### :dart: Features

- Intuitive interface
- Easy-to-use search using just post-code & city
- Huge scope of available facilities, up to 150 kilometers!

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites
- Generated API_KEY from [Geoapify](https://www.geoapify.com/) for fetching geographical data
<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/panevka/MentalAidMap.git
```

Go to the project directory

```bash
  cd MentalAidMap
```

Install dependencies for backend & frontend

```bash
  npm install --prefix ./frontend
  npm install --prefix ./backend
```

Create respective environment files for subdirectories following their formats: 

 - [Backend Env Example](https://github.com/panevka/MentalAidMap/blob/main/backend/.env.example) - replace GEOAPIFY_KEY with your api key.

 - [Frontend Env Example](https://github.com/panevka/MentalAidMap/blob/main/frontend/.env.example)

Run the app
```bash
  npm run dev --prefix ./frontend & \
  npm tsc --prefix ./backend & \
  node dist/index.js --prefix ./backend; wait
```

<!-- Roadmap -->
## :compass: Roadmap

Check [Projects](https://github.com/users/panevka/projects/1/views/1) tab for currently developed features.
