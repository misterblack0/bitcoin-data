import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
  :root {
    --indigo: #24204b;
    --dark-indigo: #211d45;
    --darker-indigo: #15122d;
    --light-indigo: #6863a0;
    --white: #fff;



${
    "" /*     %flex-column {
  display: flex;
  flex-direction: column;
}

%flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

%align-center {
  display: flex;
  align-items: center;
}

%flex-evenly {
  display: flex;
  justify-content: space-evenly;
}

%align-column {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
}



    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace; 

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  ::selection {
    background-color: var(--secondary);
    color: var(--white);
  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--darker-indigo);
    color: var(--white);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }
    &.fillHeight {
      padding: 0 150px;
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

`;

export default GlobalStyle;
