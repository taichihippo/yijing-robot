// 调试：确认脚本加载
console.log("Script loaded successfully!");

// 完整64卦数据（保持不变）
const guaData = { /* 你的 guaData 对象，未改动 */ };

// 变卦映射（暂时保留，仅调试用）
const bianGuaMap = { /* 你的 bianGuaMap 对象，未改动 */ };

// 生成六爻（模拟投掷）
function generateYao() {
  const toss = Math.random();
  return toss < 0.25 ? "老阴" : toss < 0.5 ? "少阴" : toss < 0.75 ? "少阳" : "老阳";
}

// 将爻转换为二进制（0阴，1阳）
function yaoToBinary(yao) {
  return (yao === "少阳" || yao === "老阳") ? 1 : 0;
}

// 爻变后结果（返回显示用的爻状态）
function yaoChange(yao) {
  if (yao === "老阴") return "少阳"; // 老阴变阳
  if (yao === "老阳") return "少阴"; // 老阳变阴
  return yao; // 少阴、少阳不变
}

// 生成卦象
function generateGua() {
  console.log("Button clicked!");
  const question = document.getElementById("question").value || "未输入具体问题";
  let benYao = []; // 本卦六爻（显示用）
  let bianYao = []; // 变卦六爻（显示用）
  let movingYao = []; // 动爻位置

  // 生成六爻
  for (let i = 0; i < 6; i++) {
    const yao = generateYao();
    benYao.push(yao);
    const changed = yaoChange(yao);
    bianYao.push(changed);
    if (yao === "老阴" || yao === "老阳") movingYao.push(i); // 记录所有动爻
  }

  // 计算本卦和变卦的二进制编码
  const benCode = benYao.map(yaoToBinary).join("");
  const bianCode = bianYao.map(yaoToBinary).join("");
  console.log("本卦爻:", benYao, "编码:", benCode);
  console.log("变卦爻:", bianYao, "编码:", bianCode);

  // 获取卦名
  const benGua = guaData[benCode] ? guaData[benCode].name : "未知卦";
  const bianGua = guaData[bianCode] ? guaData[bianCode].name : "未知卦";

  // 显示卦象
  const guaHtml = `
    <div class="gua-box">
      <h3>本卦：${benGua}</h3>
      <div class="gua-lines">${renderLines(benYao)}</div>
    </div>
    <div class="gua-box">
      <h3>变卦：${bianGua}</h3>
      <div class="gua-lines">${renderLines(bianYao)}</div>
    </div>
  `;
  document.getElementById("guaDisplay").innerHTML = guaHtml;

  // 生成解读
  const benDesc = guaData[benCode] ? guaData[benCode].description : "当前状态不明";
  const bianDesc = guaData[bianCode] ? guaData[bianCode].description : "发展趋势不明";
  let interpretation = `<strong>你的问题：</strong>${question}<br>`;
  interpretation += `<strong>本卦（当前状态）：</strong>${benGua} - ${benDesc}<br>`;
  interpretation += `<strong>变卦（发展趋势）：</strong>${bianGua} - ${bianDesc}<br>`;
  interpretation += `<strong>建议：</strong>当前${benDesc.split("。")[0]}，未来可能${bianDesc.split("。")[0]}。`;
  if (movingYao.length > 0) {
    interpretation += `<br><strong>动爻提示：</strong>第${movingYao.map(i => i + 1).join("、")}爻变化。`;
  }
  document.getElementById("interpretation").innerHTML = interpretation;
}

// 渲染六爻图形
function renderLines(yaoArray) {
  return yaoArray.map(yao => {
    if (yao === "少阳" || yao === "老阳") return "<span>——</span>";
    return "<span>— —</span>";
  }).reverse().join("");
}