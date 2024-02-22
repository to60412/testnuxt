<template>

  <div class="container">
    <!-- 計量管制圖 -->
    <ul class="parent">
      <li>
        <details>
          <summary class="category-title">計量管制圖</summary>
          <ul>
            <!-- IX-MR -->
            <li>
              <details>
                <summary class="sub-category-title">IX-MR</summary>
                <ul>
                  <!-- 管制圖計算公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula1')">管制圖計算公式</button>
                    <!-- 計算驗證表格 -->

                    <div v-if="showTable.formula1">

                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>計算</th>
                            <th>說明</th>
                            <th>IX CHART</th>
                            <th>MR CHART</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>UCL</td>
                            <td>管制上界</td>
                            <!-- <td>x ̅+3 (MR) ̅/d_2</td> -->
                            <!-- <td>(1+3 d_3/d_2 )(MR) ̅</td> -->
                            <td><span id="mathjax-formula-1"></span></td>
                            <td><span id="mathjax-formula-2"></span></td>
                          </tr>
                          <tr>
                            <td>CL</td>
                            <td>管制中心線</td>
                            <td><span id="mathjax-formula-3"></span></td>
                            <td><span id="mathjax-formula-4"></span></td>
                          </tr>
                          <tr>
                            <td>LCL</td>
                            <td>管制下界</td>
                            <td><span id="mathjax-formula-5"></span></td>
                            <td><span id="mathjax-formula-6"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <span id="mathjax-formula-7"></span>
                        <span id="mathjax-formula-8"></span>
                        <span id="mathjax-formula-9"></span>
                        <span id="mathjax-formula-10"></span>
                        <span id="mathjax-formula-11" ></span>
                        <span id="mathjax-formula-12"></span>
                      </div>
                    </div>
                  </li>
                  <!-- 製程能力指標公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula2')">製程能力指標公式</button>
                    <!-- 計算驗證表格 -->
                    <div v-if="showTable.formula2">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>指標</th>
                            <th>說明</th>
                            <th>公式</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Ca</td>
                            <td>衡量製程中心與規格中心的關係指標</td>
                            <td><span id="mathjax-formula-13"></span></td>
                          </tr>
                          <tr>
                            <td>Cp</td>
                            <td>衡量短期製程寬度與規格寬度的關係指標</td>
                            <td><span id="mathjax-formula-14"></span></td>
                          </tr>
                          <tr>
                            <td>CpU</td>
                            <td>短期製程上限能力指標</td>
                            <td><span id="mathjax-formula-15"></span></td>
                          </tr>
                          <tr>
                            <td>CpL</td>
                            <td>短期製程下限能力指標</td>
                            <td><span id="mathjax-formula-16"></span></td>
                          </tr>
                          <tr>
                            <td>CpK</td>
                            <td>綜合考慮精度(Cp)與準度(Ca)的短期綜合製程能力指標。</td>
                            <td><span id="mathjax-formula-17"></span></td>
                          </tr>
                          <tr>
                            <td>CpM</td>
                            <td>衡量短期製程中心偏移規格中心以及製程變異所造成的損失</td>
                            <td><span id="mathjax-formula-18"></span></td>
                          </tr>
                          <tr>
                            <td>Pp</td>
                            <td>衡量長期製程寬度與規格寬度的關係指標</td>
                            <td><span id="mathjax-formula-19"></span></td>
                          </tr>
                          <tr>
                            <td>PpU</td>
                            <td>長期製程上限能力指標</td>
                            <td><span id="mathjax-formula-20"></span></td>
                          </tr>
                          <tr>
                            <td>PpL</td>
                            <td>長期製程下限能力指標</td>
                            <td><span id="mathjax-formula-21"></span></td>
                          </tr>
                          <tr>
                            <td>PpK</td>
                            <td>綜合考慮精度(Cp)與準度(Ca)的長期綜合製程能力指標。</td>
                            <td><span id="mathjax-formula-22"></span></td>
                          </tr>
                          <tr>
                            <td>PpM</td>
                            <td>衡量長期製程中心偏移規格中心以及製程變異所造成的損失</td>
                            <td><span id="mathjax-formula-23"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <td><span id="mathjax-formula-24"></span></td>
                        <td><span id="mathjax-formula-25"></span></td>
                      </div>
                    </div>
                  </li>

                </ul>
              </details>
            </li>


            <!-- X-R -->
            <li>
              <details>
                <summary class="sub-category-title">X-R</summary>
                <ul>
                  <!-- 管制圖計算公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula3')">管制圖計算公式</button>
                    <!-- 計算驗證表格 -->
                    <div v-if="showTable.formula3">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>計算</th>
                            <th>說明</th>
                            <th><span id="mathjax-formula-26"></span></th>
                            <th>R CHART</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>UCL</td>
                            <td>管制上界</td>
                            <td><span id="mathjax-formula-27"></span></td>
                            <td><span id="mathjax-formula-28"></span></td>
                          </tr>
                          <tr>
                            <td>CL</td>
                            <td>管制中心線</td>
                            <td><span id="mathjax-formula-29"></span></td>
                            <td><span id="mathjax-formula-30"></span></td>
                          </tr>
                          <tr>
                            <td>LCL</td>
                            <td>管制下界</td>
                            <td><span id="mathjax-formula-31"></span></td>
                            <td><span id="mathjax-formula-32"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <td><span id="mathjax-formula-33"></span></td>
                        <td><span id="mathjax-formula-34"></span></td>
                        <td><span id="mathjax-formula-35"></span></td>
                        <td><span id="mathjax-formula-36"></span></td>
                        <td><span id="mathjax-formula-37"></span></td>
                        <td><span id="mathjax-formula-38"></span></td>
                      </div>
                    </div>
                  </li>
                  <!-- 製程能力指標公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula4')">製程能力指標公式</button>
                    <!-- 計算驗證表格 -->
                    <div v-if="showTable.formula4">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>指標</th>
                            <th>說明</th>
                            <th>公式</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Ca</td>
                            <td>衡量製程中心與規格中心的關係指標</td>
                            <td><span id="mathjax-formula-39"></span></td>
                          </tr>
                          <tr>
                            <td>Cp</td>
                            <td>衡量短期製程寬度與規格寬度的關係指標</td>
                            <td><span id="mathjax-formula-40"></span></td>
                          </tr>
                          <tr>
                            <td>CpU</td>
                            <td>短期製程上限能力指標</td>
                            <td><span id="mathjax-formula-41"></span></td>
                          </tr>
                          <tr>
                            <td>CpL</td>
                            <td>短期製程下限能力指標</td>
                            <td><span id="mathjax-formula-42"></span></td>
                          </tr>
                          <tr>
                            <td>CpK</td>
                            <td>綜合考慮精度(Cp)與準度(Ca)的短期綜合製程能力指標。</td>
                            <td><span id="mathjax-formula-43"></span></td>
                          </tr>
                          <tr>
                            <td>CpM</td>
                            <td>衡量短期製程中心偏移規格中心以及製程變異所造成的損失</td>
                            <td><span id="mathjax-formula-44"></span></td>
                          </tr>
                          <tr>
                            <td>Pp</td>
                            <td>衡量長期製程寬度與規格寬度的關係指標</td>
                            <td><span id="mathjax-formula-45"></span></td>
                          </tr>
                          <tr>
                            <td>PpU</td>
                            <td>長期製程上限能力指標</td>
                            <td><span id="mathjax-formula-46"></span></td>
                          </tr>
                          <tr>
                            <td>PpL</td>
                            <td>長期製程下限能力指標</td>
                            <td><span id="mathjax-formula-47"></span></td>
                          </tr>
                          <tr>
                            <td>PpK</td>
                            <td>綜合考慮精度(Cp)與準度(Ca)的長期綜合製程能力指標。</td>
                            <td><span id="mathjax-formula-48"></span></td>
                          </tr>
                          <tr>
                            <td>PpM</td>
                            <td>衡量長期製程中心偏移規格中心以及製程變異所造成的損失</td>
                            <td><span id="mathjax-formula-49"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <td><span id="mathjax-formula-50"></span></td>
                        <td><span id="mathjax-formula-51"></span></td>
                      </div>
                    </div>
                  </li>

                </ul>
              </details>
            </li>

            <!-- X-S-->
            <li>
              <details>
                <summary class="sub-category-title">X-S</summary>
                <ul>
                  <!-- 管制圖計算公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula5')">管制圖計算公式</button>
                    <!-- 計算驗證表格 -->
                    <div v-if="showTable.formula5">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>計算</th>
                            <th>說明</th>
                            <th><span id="mathjax-formula-52"></span></th>
                            <th><span id="mathjax-formula-53"></span></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>UCL</td>
                            <td>管制上界</td>
                            <td><span id="mathjax-formula-54"></span></td>
                            <td><span id="mathjax-formula-55"></span></td>
                          </tr>
                          <tr>
                            <td>CL</td>
                            <td>管制中心線</td>
                            <td><span id="mathjax-formula-56"></span></td>
                            <td><span id="mathjax-formula-57"></span></td>
                          </tr>
                          <tr>
                            <td>LCL</td>
                            <td>管制下界</td>
                            <td><span id="mathjax-formula-58"></span></td>
                            <td><span id="mathjax-formula-59"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <td><span id="mathjax-formula-60"></span></td>
                        <td><span id="mathjax-formula-61"></span></td>
                        <td><span id="mathjax-formula-62"></span></td>
                        <td><span id="mathjax-formula-63"></span></td>
                        <td><span id="mathjax-formula-64"></span></td>
                        <td><span id="mathjax-formula-65"></span></td>
                      </div>
                    </div>
                  </li>
                  <!-- 製程能力指標公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula6')">製程能力指標公式</button>
                    <!-- 計算驗證表格 -->
                    <div v-if="showTable.formula6">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>指標</th>
                            <th>說明</th>
                            <th>公式</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Ca</td>
                            <td>衡量製程中心與規格中心的關係指標</td>
                            <td><span id="mathjax-formula-66"></span></td>
                          </tr>
                          <tr>
                            <td>Cp</td>
                            <td>衡量短期製程寬度與規格寬度的關係指標</td>
                            <td><span id="mathjax-formula-67"></span></td>
                          </tr>
                          <tr>
                            <td>CpU</td>
                            <td>短期製程上限能力指標</td>
                            <td><span id="mathjax-formula-68"></span></td>
                          </tr>
                          <tr>
                            <td>CpL</td>
                            <td>短期製程下限能力指標</td>
                            <td><span id="mathjax-formula-69"></span></td>
                          </tr>
                          <tr>
                            <td>CpK</td>
                            <td>綜合考慮精度(Cp)與準度(Ca)的短期綜合製程能力指標。</td>
                            <td><span id="mathjax-formula-70"></span></td>
                          </tr>
                          <tr>
                            <td>CpM</td>
                            <td>衡量短期製程中心偏移規格中心以及製程變異所造成的損失</td>
                            <td><span id="mathjax-formula-71"></span></td>
                          </tr>
                          <tr>
                            <td>Pp</td>
                            <td>衡量長期製程寬度與規格寬度的關係指標</td>
                            <td><span id="mathjax-formula-72"></span></td>
                          </tr>
                          <tr>
                            <td>PpU</td>
                            <td>長期製程上限能力指標</td>
                            <td><span id="mathjax-formula-73"></span></td>
                          </tr>
                          <tr>
                            <td>PpL</td>
                            <td>長期製程下限能力指標</td>
                            <td><span id="mathjax-formula-74"></span></td>
                          </tr>
                          <tr>
                            <td>PpK</td>
                            <td>綜合考慮精度(Cp)與準度(Ca)的長期綜合製程能力指標。</td>
                            <td><span id="mathjax-formula-75"></span></td>
                          </tr>
                          <tr>
                            <td>PpM</td>
                            <td>衡量長期製程中心偏移規格中心以及製程變異所造成的損失</td>
                            <td><span id="mathjax-formula-76"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <td><span id="mathjax-formula-77"></span></td>
                        <td><span id="mathjax-formula-78"></span></td>
                      </div>
                    </div>
                  </li>

                </ul>
              </details>
            </li>

          </ul>
        </details>
      </li>
    </ul>
    <!-- 計數管制圖 -->
    <ul class="parent">
      <li>
        <details>
          <summary class="category-title">計數管制圖</summary>
          <ul>
            <!-- P CHART -->
            <li>
              <details>
                <summary class="sub-category-title">P CHART </summary>
                <ul>
                  <!-- 管制圖計算公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula7')">管制圖計算公式</button>
                    <!-- 計算驗證表格 -->
                    <div v-if="showTable.formula7">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>計算</th>
                            <th>說明</th>
                            <th>P CHART</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>UCL</td>
                            <td>管制上界</td>
                            <td><span id="mathjax-formula-79"></span></td>
                          </tr>
                          <tr>
                            <td>CL</td>
                            <td>管制中心線</td>
                            <td><span id="mathjax-formula-80"></span></td>
                          </tr>
                          <tr>
                            <td>LCL</td>
                            <td>管制下界</td>
                            <td><span id="mathjax-formula-81"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <td><span id="mathjax-formula-82"></span></td>
                        <td><span id="mathjax-formula-83"></span></td>
                        <td><span id="mathjax-formula-84"></span></td>
                        <td><span id="mathjax-formula-85"></span></td>
                        <td><span id="mathjax-formula-86"></span></td>
                        <td><span id="mathjax-formula-87"></span></td>

                      </div>
                    </div>
                  </li>


                </ul>
              </details>
            </li>

            <!-- nP CHART -->
            <li>
              <details>
                <summary class="sub-category-title">nP CHART</summary>
                <ul>
                  <!-- 管制圖計算公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula8')">管制圖計算公式</button>
                    <!-- 計算驗證表格 -->
                    <div v-if="showTable.formula8">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>計算</th>
                            <th>說明</th>
                            <th>nP CHART</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>UCL</td>
                            <td>管制上界</td>
                            <td><span id="mathjax-formula-88"></span></td>
                          </tr>
                          <tr>
                            <td>CL</td>
                            <td>管制中心線</td>
                            <td><span id="mathjax-formula-89"></span></td>
                          </tr>
                          <tr>
                            <td>LCL</td>
                            <td>管制下界</td>
                            <td><span id="mathjax-formula-90"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <td><span id="mathjax-formula-91"></span></td>
                        <td><span id="mathjax-formula-92"></span></td>
                        <td><span id="mathjax-formula-93"></span></td>
                        <td><span id="mathjax-formula-94"></span></td>
                        <td><span id="mathjax-formula-95"></span></td>
                        <td><span id="mathjax-formula-96"></span></td>
                        <td><span id="mathjax-formula-97"></span></td>
                      </div>
                    </div>
                  </li>


                </ul>
              </details>
            </li>
            <!-- C CHART -->
            <li>
              <details>
                <summary class="sub-category-title">C CHART</summary>
                <ul>
                  <!-- 管制圖計算公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula9')">管制圖計算公式</button>
                    <!-- 計算驗證表格 -->
                    <div v-if="showTable.formula9">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>計算</th>
                            <th>說明</th>
                            <th>C CHART</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>UCL</td>
                            <td>管制上界</td>
                            <td><span id="mathjax-formula-98"></span></td>
                          </tr>
                          <tr>
                            <td>CL</td>
                            <td>管制中心線</td>
                            <td><span id="mathjax-formula-99"></span></td>
                          </tr>
                          <tr>
                            <td>LCL</td>
                            <td>管制下界</td>
                            <td><span id="mathjax-formula-100"></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <p>註1: 產品缺點數(Number of Defects, Ci)。</p>
                        <p>註2: 量測組數 ( number of subgroup, k )。</p>
                        <td><span id="mathjax-formula-101"></span></td>
                        <p>註4: 若LCL &lt; 0, 則計為0。</p>
                        <p>註5: 與CNS 15962-2:2018標準之公式相同。</p>
                      </div>
                    </div>
                  </li>


                </ul>
              </details>
            </li>

            <!--U CHART -->
            <li>
              <details>
                <summary class="sub-category-title">U CHART</summary>
                <ul>
                  <!-- 管制圖計算公式 -->
                  <li>
                    <button class="item-title" @click="toggleTable('formula10')">管制圖計算公式</button>
                    <!-- 計算驗證表格 -->
                    <div v-if="showTable.formula10">
                      <table class="custom-table">
                        <thead>
                          <tr>
                            <th>計算</th>
                            <th>說明</th>
                            <th>U CHART</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>UCL</td>
                            <td>管制上界</td>
                            <td><span id="mathjax-formula-102"></span></td>
                          </tr>
                          <tr>
                            <td>CL</td>
                            <td>管制中心線</td>
                            <td><span id="mathjax-formula-103"></span></td>
                          </tr>
                          <tr>
                            <td>LCL</td>
                            <td>管制下界</td>
                            <td><span id="mathjax-formula-104" ></span></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="notes">
                        <p>註1: 產品缺點數(Number of Defects, Ci)。</p>
                        <p>註2: 量測組數 ( Number of Subgroup, k )。</p>
                        <span id="mathjax-formula-105" class="mathjax-formula" ></span>
                        <p>註4: 若LCL &lt; 0, 則計為0。</p>
                        <p>註5: 與CNS 15962-2:2018標準之公式相同。</p>
                      </div>
                    </div>
                  </li>


                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
    </ul>

  </div>
</template>

<script>




  export default {

    data() {
      return {
        name: 'MathJaxPage',
        showTable: {
          formula1: false,
          formula2: false,
          formula3: false,
          formula4: false,
          formula5: false,
          formula6: false,
          formula7: false,
          formula8: false,
          formula9: false,
          formula10: false

        },
      };

    },
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
      toggleTable(formula) {
        this.showTable[formula] = !this.showTable[formula];

          this.renderMathJaxFormula();
 
      },
      renderMathJaxFormula() {
        const formulas = [
          "\\overline{x} +3 \\frac{ \\overline{MR}}{d_2}",
          "(1 + 3\\frac{d_3}{d_2})\\overline{MR}",
          '\\overline{X}',
          '\\overline{MR}',
          "\\overline{x} +3 \\frac{ \\overline{MR}}{d_2}",
          "(1 + 3\\frac{d_3}{d_2})\\overline{MR}",
          "註1:	\\overline{x}為所有觀察值的平均。",
          "註2:	MR 為觀察值之間的移動距離 , \\overline{MR} 為觀察值之間的平均移動距離。",
          "註3:	{d_2}   ,{d_3} 為查表值。",
          "註4:	若LCL < 0, 則計為 0。",
          "註5:	CNS 15962-2:2018標準中，IX CHART之UCL公式為 \\overline{x}+2.660\\overline{MR} ，常數2.660=3/d_2  ，公式等效。",
          '註6:	CNS 15962-2:2018標準中，MR CHART之UCL公式為 3.267\\overline{MR} ，常數3.267=3/d_2 ，公式等效。',
          "\\frac{{\\mu - T}}{{{{USL - LSL}}/{2}}}",
          "\\frac{{USL - LSL}}{{6\\sigma}}",
          "\\frac{{USL - \\mu}}{{3\\sigma}}",
          "\\frac{{\\mu - LSL}}{{3\\sigma}}",
          "\\min\\{Cp_U, Cp_L\\}",
          "\\frac{{USL - LSL}}{{6\\sqrt{{\\left[\\sigma^2 + (μ - T)^2\\right]}}}}",
          "\\frac{{USL - LSL}}{{6s}}",
          "\\frac{{USL - \\mu}}{{3s}}",
          "\\frac{{\\mu - LSL}}{{3s}}",
          "\\min \\left\\{ \\frac{{\\mu - LSL}}{{3s}}, \\frac{{USL - \\mu}}{{3s}} \\right\\}",
          "\\frac{{USL - LSL}}{{6\\sqrt{{s^2 + (\\mu - T)^2}}}}",
          "註1:  \\sigma = \\frac{\\overline{R}}{d_2} ，s = \\sqrt{\\frac{\\sum_{i=1}^n (x_i - \\overline{x})^2}{n-1}}。",
          "註2:	{d_2}   ,{d_3} 為查表值。",
          "\\overline{X}",
          "( \\overline{\\overline{x}} - 3 \\frac{\\overline{R}}{d_2 \\sqrt{n}} )",
          "\ (1 + 3 \\frac{d_3}{d_2}) \\overline{R} \)",
          "\\overline{\\overline{x}}",
          "\\overline{R}",
          "( \\overline{\\overline{x}} - 3 \\frac{\\overline{R}}{d_2 \\sqrt{n}} )",
          "( (1 - 3 \\frac{d_3}{d_2}) \\overline{R} )",
          "註1:	\\overline{x}為各組觀察值的平均 , \\overline{\\overline{x}}為各組觀察值平均的平均。",
          "註2:	\\overline{R}為各組觀察值的全距 , \\overline{R}為各組觀察值全距的平均。",
          "註3:	{d_2}   ,{d_3} 為查表值，n根據各組樣本數量大小。",
          "註4:	CNS 15962-2:2018標準中，\\overline{x} CHART之UCL公式為   \\overline{\\overline{x}} + A_2 \\overline{R}, \\quad A_2 = \\frac{3}{{d_2 \\sqrt{n}}}    , 公式等效。",
          "註5:	CNS 15962-2:2018標準中，R CHART之UCL公式為D_4 \\overline{R}, \\quad D_4 = 1 + 3\\frac{ d_3}{d_2}    , 公式等效。",
          "註6:	CNS 15962-2:2018標準中，R CHART之LCL公式為 D_3 \\overline{R}, \\quad D_3 = 1 - 3\\frac{ d_3}{d_2}    , 公式等效。",
          "\\frac{{\\mu - T}}{{{{USL - LSL}}/{2}}}",
          "\\frac{{USL - LSL}}{{6\\sigma}}",
          "\\frac{{USL - \\mu}}{{3\\sigma}}",
          "\\frac{{\\mu - LSL}}{{3\\sigma}}",
          "\\min\\{Cp_U, Cp_L\\}",
          "\\frac{{USL - LSL}}{{6\\sqrt{{\\left[\\sigma^2 + (μ - T)^2\\right]}}}}",
          "\\frac{{USL - LSL}}{{6s}}",
          "\\frac{{USL - \\mu}}{{3s}}",
          "\\frac{{\\mu - LSL}}{{3s}}",
          "\\min \\left\\{ \\frac{{\\mu - LSL}}{{3s}}, \\frac{{USL - \\mu}}{{3s}} \\right\\}",
          "\\frac{{USL - LSL}}{{6\\sqrt{{[s^2 + (\\mu - T)^2]}}}}",
          "註1:  \\sigma = \\frac{\\overline{R}}{d_2} ，s = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\overline{x})^2}{n-1}}。",
          "註2:	{d_2}   ,{d_3} 為查表值。",
          "\\overline{x}  CHART",
          "S CHART",
          "\\overline{\\overline{x}} + 3\\frac{\\overline{S}}{c_4\\sqrt{n}}",
          "(1 + 3 \\frac{c_5}{c_4})\\overline{S}",
          '\\overline{\\overline{x}}',
          '\\overline{R}',
          "\\overline{\\overline{x}} + 3\\frac{\\overline{S}}{c_4\\sqrt{n}}",
          "(1 + 3 \\frac{c_5}{c_4})\\overline{S}",
          "註1:	\\overline{x}為各組觀察值的平均 , \\overline{\\overline{x}}為各組觀察值平均的平均。",
          "註2:	S為各組觀察值的標準差 , \\overline{S}為各組觀察值標準差的平均。",
          "註3:	{c_4}   ,{c_5} 為查表值，n根據各組樣本數量大小。",
          "註4:	CNS 15962-2:2018標準中，\\overline{x} CHART之UCL公式為   \\overline{\\overline{x}} + A_3 \\overline{S}, \\quad A_3 = \\frac{3}{{c_4 \\sqrt{n}}}    , 公式等效。",
          "註5:	CNS 15962-2:2018標準中，S CHART之UCL公式為 B_4 \\overline{S}, \\quad B_4 = 1 + 3\\frac{ C_5}{C_4}     , 公式等效。",
          "註6:	CNS 15962-2:2018標準中，S CHART之LCL公式為  B_3 \\overline{S}, \\quad B_3 = 1 - 3\\frac{ C_5}{C_4}    , 公式等效。",
          "\\frac{{\\mu - T}}{{{{USL - LSL}}/{2}}}",
          "\\frac{{USL - LSL}}{{6\\sigma}}",
          "\\frac{{USL - \\mu}}{{3\\sigma}}",
          "\\frac{{\\mu - LSL}}{{3\\sigma}}",
          "\\min\\{Cp_U, Cp_L\\}",
          "\\frac{{USL - LSL}}{{6\\sqrt{{\\left[\\sigma^2 + (μ - T)^2\\right]}}}}",
          "\\frac{{USL - LSL}}{{6s}}",
          "\\frac{{USL - \\mu}}{{3s}}",
          "\\frac{{\\mu - LSL}}{{3s}}",
          "\\min \\left\\{ \\frac{{\\mu - LSL}}{{3s}}, \\frac{{USL - \\mu}}{{3s}} \\right\\}",
          "\\frac{{USL - LSL}}{{6\\sqrt{{[s^2 + (\\mu - T)^2]}}}}",
          "註1:  \\sigma = \\frac{\\overline{S}}{C_4} ，s = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\overline{x})^2}{n-1}}。",
          "註2:	{C_4}   ,{C_5} 為查表值。",
          "\\overline{p} + 3\\sqrt{\\frac{\\overline{p}(1 - \\overline{p})}{n_i}}",
          "\\overline{p}",
          "\\overline{p} + 3\\sqrt{\\frac{\\overline{p}(1 - \\overline{p})}{n_i}}",
          "註1:	不良品數 (defective items, {d_i}) 。",
          "註2:	各組量測 ( 觀察 ) 數 ( {n_i} )。",
          "註3:	量測組數 ( number of subgroup, k )。",
          "註4: \\overline{p} = \\frac{\\sum_{i=1}^{k} d_i}{\\sum_{i=1}^{k} n_i}",
          "註5:	若LCL < 0, 則計為0。",
          "註6:	與CNS 15962-2:2018標準之公式相同。",
          "n \\overline{p} + 3\\sqrt{n \\overline{p}(1-\\overline{p})}",
          "n \\overline{p}",
          "n \\overline{p} + 3\\sqrt{n \\overline{p}(1-\\overline{p})}",
          "註1:	不良品數 (defective items, {d_i} )。",
          "註2:	各組量測 ( 觀察 ) 數 ( {n_i} )。",
          "註3:	量測組數 ( number of subgroup, k )。",
          "註4:\\overline{p} = \\frac{\\sum_{i=1}^{k} d_i}{\\sum_{i=1}^{k} n_i}",
          "註5:n \\overline{p} = \\frac{\\sum_{i=1}^{k} d_i}{k}",
          "註6:	若LCL < 0, 則計為0。",
          "註7:	與CNS 15962-2:2018標準之公式相同。",
          "\\overline{c} + 3 \\sqrt{\\overline{c}}",
          "\\overline{c}",
          "\\overline{c} + 3 \\sqrt{\\overline{c}}",
          "註3:\\overline{c} = \\frac{\\sum_{i=1}^{k} C_i}{k}",
          "\\overline{u} + 3\\sqrt{\\frac{\\overline{u}}{n_i}}",
          "\\overline{u}",
          "\\overline{u} + 3\\sqrt{\\frac{\\overline{u}}{n_i}}",
          "註3:\\overline{u} = \\frac{\\sum_{i=1}^{k} C_i}{\\sum_{i=1}^{k} n_i}",
          "",
          "",
          "",

        ];

        formulas.forEach((formula, index) => {
    setTimeout(() => {
      const formulaContainer = document.getElementById(`mathjax-formula-${index + 1}`);
      formulaContainer.innerHTML = `$$ ${formula}. $$`;
      MathJax.typesetPromise([formulaContainer]);
    }, 1 ); 
  });
},
    }
  };

</script>

<style scoped>
  .container .parent {
    height: auto;
    overflow-y: auto;

  }

  .custom-table {
    width: 50%;
    border-collapse: collapse;
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }

  .custom-table th {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }

  
  
  .custom-table th {
    background-color: #f2f2f2;
    font-size: 18px;
  }
  
  .notes {
    
    width: 50%;
    /* border-collapse: collapse; */
    list-style: none;
    padding: 10px;
    margin: 0 auto;
    font-size: 16px;
    
  }
  
  
  .parent {
    list-style: none;
    padding: 20px;
  }
  
  .parent li {
    margin-bottom: 10px;
  }
  
  .parent ul {
    list-style: none;
    padding-left: 20px;
  }
  
  
  .category-title {
    display: inline-block;
    /* background-color: #f0f0f0; */
    /* border: 1px solid #ddd; */
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 26px;
  }
  
  .sub-category-title {
    display: inline-block;
    /* background-color: #f8f8f8; */
    /* border: 1px solid #ddd; */
    padding: 5px 10px;
    cursor: pointer;
    margin-left: 25px;
    border-radius: 5px;
    font-size: 24px;
  }
  
  .item-title {
    /* background-color: #fcfcfc; */
    /* border: 1px solid #ddd; */
    padding: 5px 10px;
    cursor: pointer;
    margin-left: 25px;
    border-radius: 5px;
    font-size: 22px;
  }
  
  .custom-table td{
    text-align: left;
    border: 1px solid #ddd;
    padding: 10px;
    font-size: 18px;
  }

  .item-container {
    cursor: pointer;
  }



  .container {
    max-width: auto;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;

  }



  .notes span {

    font-size: 14px;
    display: flex;
    text-align: center;
    /* float: left; */
}






</style>