<template>
    <div>
      <p id="mathjax-formula-1"></p>
      <p id="mathjax-formula-2"></p>
      <p id="mathjax-formula-3"></p>
      <p id="mathjax-formula-4"></p>
      <p id="mathjax-formula-5"></p>
      <p id="mathjax-formula-6"></p>
      <p id="mathjax-formula-7"></p>
      <p id="mathjax-formula-8"></p>
      <p id="mathjax-formula-9"></p>
      <p id="mathjax-formula-10"></p>
      <p id="mathjax-formula-11"></p>
      <p id="mathjax-formula-12"></p>
      <p id="mathjax-formula-13"></p>
      <p id="mathjax-formula-14"></p>
      <p id="mathjax-formula-15"></p>
      <p id="mathjax-formula-16"></p>
      <p id="mathjax-formula-17"></p>
      <p id="mathjax-formula-18"></p>
      <p id="mathjax-formula-19"></p>
      <p id="mathjax-formula-20"></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MathJaxPage',
  
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://cdn.bootcss.com/mathjax/3.0.5/es5/tex-mml-chtml.js';
      script.async = true; 
      script.onload = () => {
        this.renderMathJaxFormula();
      };
  
      document.head.appendChild(script);
    },
  
    methods: {
      renderMathJaxFormula() {
        const formulas = [
          'x = \\frac{{-b \\pm \\sqrt{{\\text{{abc}}}}}}{{2a}}',
          'x = \\frac{{-b \\pm \\sqrt{{\\text{{abc}}}}}}{{2a}}',
          'x = \\frac{{-b \\pm \\sqrt{{\\text{{a}}}}}}{{2a}}',

        ];
  
        formulas.forEach((formula, index) => {
          const formulaContainer = document.getElementById(`mathjax-formula-${index + 1}`);
          formulaContainer.innerHTML = `$$ ${formula}. $$`;
          MathJax.typesetPromise([formulaContainer]);
        });
      },
    },
  };
  </script>
  