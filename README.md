## Welcome to Thanh Tran's project 1 at Simpson Strong tie Viet Nam
This is a mini project in which you will need to build your own application, to demonstrate your technical skills and power skills. You will be working as a Full-Stack Frontend Engineer, including Design, Implementation, Deployment, and Demonstration. The specific requirements will be given below.
Software Development Process:
- Analysis requirement
- Design
- Config project
- Implement features
- Build & deploy
- Live on production
- Enhance & bug fixing

## Requirements
### General
The application needs the following:
- Has a defined design (using Figma) before the actual implementation.
- Has to be built with React.
- Has a navigation bar to browse through different sections.
- Has a consistent header and footer.
- Has to be either responsive or adaptive.
- Has to be able to run on a browser.
- Has no third-party CSS/Design System/Component Library.
- Has to be deployed to Docker and hosted on your local machine. Or deployed on Vercel, Netlify.

### Detail requirement
#### Landing Page
- The image(s) ratio should be implemented appropriately. In another word, there shouldn’t be any shrunk or stretched image.
- Shows projects with a brief description, and a link to demo (if applicable).
- Must have 4 sections:
  - Introduce yourself
  - Experience
  - Previous Project(s) Information
  - Hobbies
  - Anything interesting about yourself that you want to share (Nice to Have)
#### Shopping center
- User can add items into cart and cart will be updated immediately (CRUD products in cart).
- Allow pagination for product catalog (minimum 5000 records).
- Apply infinite scroll (Nice to have on the mobile version of product catalog).
- Checkout page has to show single item price and total price.
- System should handle error gracefully if items are not fetched properly.
- Able to keep cart data for each user’s session.
- Must have features/pages:
  - Product Catalog
  - Product’s Detail
  - Login
  - Order/Checkout Page
  - Payment Page (Nice to Have)

#### Demonstration
- Micro-Frontend
  - Setup source structures.
  - Applications can run independently and also run inside the main Application.
  - Setup buildable/reusable libraries.
  - No iframe allowed.
  - Include sub-repo/submodule (Nice to have)
- Routing
  - Setup Routes across applications (Micro-Frontend Architecture).
  - Routes of each application works independently and also able to run inside the main application.
  - Include Nested Routes.
- Input Component
  - Create input component from scratch using Web Component.
  - The component has to be run across multiple technologies (including React, Angular, PlainJS, Vue)

## Timeline
- Week 1: Analyst requirement & design in Figma
- Week 2+3: Implementation
- Week 4: Deploy & enhance.
  
## Notes
- The Design Process has to be taken place and be completed before Implementation Process, and when the Design for the application is marked as “Completed”, you can’t make any further changes to the Design. Any difference between the Implementations and the Design will be considered a bug(s).
- At the end of the Design Project and the end of the Project, you will be required to schedule a meeting to present your work to the team, which follows the below structure:
  - Introduce your work to the audience.
  - Give a demonstration of your work to the audience.
  - Show and explain the application/code's structures (the end of the Project).
  - Sharing your opinion about the works.
  - Q&A
  - Discuss and share anything you want with the team.
- Feedback will be given based on your outputs.
- If you encounter any difficulty, please contact your supervisors or the team as soon as possible.



## Project overview
- `shop` Shopping center
- `container` This is host page includes Shopping center (also is a Landing page)

## Tech
- Micro front-end ( includes nested route) using webpack module federation
- Web component - input (support VanillaJs, ReactJs, Angular, Vue)
- Reactjs

## Running

```bash
yarn
```

```bash
yarn start
```

Lerna will start all projects parallelly and open in the browser.

- Container: http://localhost:3000/
- Shop: http://localhost:3001/


## Library web component
- https://www.npmjs.com/package/thanh-pj1-ui-lib
- You can either test (Angular/Vue) by start `yarn start` in `packages\vuejs-demo-using-wc` or `packages\angular-demo-using-wc`.

## Demo link prod:
- Container: https://simpson-thanh-pj1-host.vercel.app/
- Shop: https://simpson-thanh-pj1-shopping-center.vercel.app/


### Thank you!