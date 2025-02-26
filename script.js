// 调试：确认脚本加载
console。log("Script loaded successfully!");

// 完整64卦数据（只列部分，完整版用你的原数据）
const guaData = {
  "111111": { name: "乾卦"， meaning: "刚健有力，宜果断行动。"， description: "现在是采取主动的时机，果断决策会有回报。" }，
  "000000": { name: "坤卦"， meaning: "柔顺待时，宜耐心积累。"， description: "当前宜低调努力，等待合适时机。" }，
  "100010": { name: "震卦"， meaning: "雷霆启动，宜突破现状。"， description: "适合打破僵局，尝试新事物。" }，
  "011101": { name: "巽卦"， meaning: "循序渐进，宜稳步前行。"， description: "稳步推进计划，避免急躁。" }，
  "010010": { name: "坎卦"， meaning: "身处困境，宜保持信念。"， description: "当前有挑战，坚持信念可渡难关。" }，
  "101101": { name: "离卦"， meaning: "光明正直，宜追求目标。"， description: "目标明确，宜积极追求。" }，
  "001110": { name: "艮卦"， meaning: "静止反思，宜审时度势。"， description: "停下来思考，评估局势再行动。" }，
  "110001": { name: "兑卦"， meaning: "喜悦沟通，宜寻求和谐。"， description: "通过沟通解决问题，保持乐观。" }，
  "111010": { name: "夬卦"， meaning: "果断去除，宜清除障碍。"， description: "现在适合果断解决阻碍，扫清道路。" }，
  "010000": { name: "需卦"， meaning: "等待时机，宜耐心观察。"， description: "时机未成熟，宜等待并做好准备。" }，
  "101000": { name: "大有卦"， meaning: "丰收在望，宜把握机会。"， description: "当前资源充足，抓住机会可获成功。" }，
  "000101": { name: "大壮卦"， meaning: "强盛有为，宜大胆推进。"， description: "力量正盛，宜大胆行动但勿过激。" }，
  "000111": { name: "小畜卦"， meaning: "小有积蓄，宜稳步积累。"， description: "当前宜小步前进，积蓄力量。" }，
  "111000": { name: "泰卦"， meaning: "通泰和谐，宜合作共赢。"， description: "局势顺畅，宜与人合作共创佳绩。" }，
  "100011": { name: "履卦"， meaning: "谨慎而行，宜小心决策。"， description: "如履薄冰，宜谨慎行事避免失误。" }，
  "001001": { name: "同人卦"， meaning: "志同道合，宜团结协作。"， description: "与人志同道合，宜携手共进。" }，
  "010111": { name: "革卦"， meaning: "变革创新，宜顺势而为。"， description: "变革时机已到，宜顺应趋势创新。" }，
  "111101": { name: "丰卦"， meaning: "盛大光明，宜趁势扩大。"， description: "事业兴盛，宜抓住机会扩大成果。" }，
  "010100": { name: "家人卦"， meaning: "家庭和谐，宜注重内在。"， description: "关注内在关系，家庭或团队需和谐。" }，
  "001011": { name: "既济卦"， meaning: "事已完成，宜保持现状。"， description: "目标已达成，宜巩固成果勿轻动。" }，
  "110110": { name: "未济卦"， meaning: "尚未完成，宜继续努力。"， description: "事情未完，需坚持努力以求突破。" }，
  "111100": { name: "明夷卦"， meaning: "光明受抑，宜低调自保。"， description: "当前宜隐藏锋芒，保护自己为主。" }，
  "001010": { name: "贲卦"， meaning: "文饰外表，宜注重形式。"， description: "外在修饰重要，宜提升形象或包装。" }，
  "100000": { name: "剥卦"， meaning: "剥落衰退，宜守正待时。"， description: "局势衰退，宜坚守正道等待转机。" }，
  "000001": { name: "复卦"， meaning: "回归新生，宜重新开始。"， description: "低谷后复苏，宜重新规划起步。" }，
  "100111": { name: "颐卦"， meaning: "养身修心，宜自我调整。"， description: "注重身心修养，宜调整状态再出发。" }，
  "111001": { name: "大畜卦"， meaning: "大有积蓄，宜积聚力量。"， description: "当前宜积累资源，为未来做准备。" }，
  "011010": { name: "损卦"， meaning: "减少损失，宜舍小取大。"， description: "适当放弃小利，追求更大目标。" }，
  "010110": { name: "益卦"， meaning: "增益有利，宜主动开拓。"， description: "有利可增，宜积极拓展事业。" }，
  "101111": { name: "蛊卦"， meaning: "纠错革新，宜清理旧患。"， description: "旧问题需解决，宜革新以求进步。" }，
  "000010": { name: "屯卦"， meaning: "初生艰难，宜谨慎起步。"， description: "起步艰难，宜谨慎规划稳步行。" }，
  "011000": { name: "否卦"， meaning: "闭塞不通，宜等待时机。"， description: "当前受阻，宜暂缓行动等待转机。" }，
  "110100": { name: "观卦"， meaning: "观察学习，宜借鉴经验。"， description: "多观察学习，借鉴他人经验再动。" }，
  "001100": { name: "噬嗑卦"， meaning: "咬合艰难，宜解决问题。"， description: "障碍需清除，宜果断处理问题。" }，
  "100110": { name: "鼎卦"， meaning: "稳固权威，宜建立根基。"， description: "局势稳定，宜巩固基础或权威。" }，
  "011110": { name: "恒卦"， meaning: "持久稳定，宜持之以恒。"， description: "需长期坚持，稳定发展可期。" }，
  "101010": { name: "旅卦"， meaning: "漂泊适应，宜灵活应变。"， description: "身处变动，宜适应环境随机变。" }，
  "110111": { name: "大过卦"， meaning: "负担过重，宜调整步伐。"， description: "压力过大，宜减轻负担重新调整。" }，
  "000011": { name: "姤卦"， meaning: "相遇有缘，宜把握际遇。"， description: "新机缘出现，宜主动抓住机会。" }，
  "110000": { name: "遁卦"， meaning: "退隐避险，宜暂时撤退。"， description: "当前宜退避，保存实力待时机。" }，
  "100001": { name: "无妄卦"， meaning: "无妄而行，宜遵循正道。"， description: "不可妄动，宜按正道稳步前行。" }，
  "010011": { name: "讼卦"， meaning: "争执难解，宜寻求和解。"， description: "冲突需化解，宜通过沟通平息。" }，
  "101110": { name: "咸卦"， meaning: "感应和谐，宜注重感情。"， description: "情感交流顺畅，宜加强连接。" }，
  "100100": { name: "蹇卦"， meaning: "艰难险阻，宜停步观望。"， description: "前行困难，宜暂停观察再决定。" }，
  "011100": { name: "渐卦"， meaning: "渐进有序，宜按部就班。"， description: "循序渐进，稳步发展为佳。" }，
  "001000": { name: "谦卦"， meaning: "谦逊有礼，宜低调行事。"， description: "保持谦虚，宜低调处理事务。" }，
  "111110": { name: "困卦"， meaning: "身陷困境，宜坚守正直。"， description: "当前受困，坚守原则可获解脱。" }，
  "011111": { name: "井卦"， meaning: "汲取资源，宜深耕细作。"， description: "深挖资源，细心经营会有回报。" }，
  "000100": { name: "晋卦"， meaning: "进升有望，宜积极争取。"， description: "上升时机，宜主动争取进步。" }，
  "010101": { name: "萃卦"， meaning: "聚集有利，宜团结力量。"， description: "聚拢资源或人脉，合作可成大事。" }，
  "101100": { name: "升卦"， meaning: "逐步上升，宜持续努力。"， description: "稳步上升，持续努力可达目标。" }，
  "110010": { name: "蒙卦"， meaning: "蒙昧初开，宜学习求教。"， description: "知识不足，宜虚心学习或求助。" }，
  "001111": { name: "师卦"， meaning: "统领有方，宜规划管理。"， description: "需领导和管理，规划清晰可成功。" }，
  "101011": { name: "涣卦"， meaning: "涣散需聚，宜凝聚人心。"， description: "分散需收拢，凝聚力量再出发。" }，
  "110101": { name: "节卦"， meaning: "节制有度，宜控制节奏。"， description: "凡事适度，控制节奏避免过犹。" }，
  "111011": { name: "中孚卦"， meaning: "诚信感人，宜真诚待人。"， description: "以诚待人，信任可带来成功。" }，
  "001101": { name: "小过卦"， meaning: "小有过失，宜谨慎修正。"， description: "小错需注意，及时修正可无碍。" }，
  "100101": { name: "归妹卦"， meaning: "感情冲动，宜冷静判断。"， description: "感情需理智，避免冲动决策。" }，
  "011011": { name: "睽卦"， meaning: "意见分歧，宜沟通协调。"， description: "分歧明显，宜通过沟通化解。" }，
  "010001": { name: "比卦"， meaning: "亲比和睦，宜寻求支持。"， description: "需亲近盟友，合作可获助力。" }，
  "101001": { name: "豫卦"， meaning: "愉悦先行，宜乐观筹备。"， description: "乐观态度助筹备，行动前宜计划。" }，
  "110011": { name: "随卦"， meaning: "随势而动，宜顺应潮流。"， description: "顺应大势而动，可减少阻力。" }，
  "011001": { name: "临卦"， meaning: "亲临指导，宜主动参与。"， description: "亲力亲为，主动参与可获成效。" }
};

// 生成六爻（模拟投掷）
function generateYao() {
  const toss = Math。random();
  const result = toss < 0.25 ? "老阴" : toss < 0.5 ? "少阴" : toss < 0.75 ? "少阳" : "老阳";
  console。log("Generated yao:"， result， "with toss:"， toss);
  return result;
}

// 将爻转换为二进制（0阴，1阳）
function yaoToBinary(yao) {
  const binary = (yao === "少阳" || yao === "老阳") ? 1 : 0;
  console。log("Converting"， yao， "to binary:"， binary);
  return binary;
}

// 爻变后结果（返回显示用的爻状态）
function yaoChange(yao) {
  if (yao === "老阴") {
    console。log("Changing 老阴 to 少阳");
    return "少阳";
  }
  if (yao === "老阳") {
    console。log("Changing 老阳 to 少阴");
    return "少阴";
  }
  console。log("No change for"， yao);
  return yao;
}

// 存储当前卦名（用于AI提问）
let currentGua = null;

// 生成卦象
function generateGua() {
  console。log("Button clicked!");
  const question = document。getElementById("question")。value || "未输入具体问题";
  let benYao = [];
  let bianYao = [];
  let movingYao = [];

  // 生成六爻
  for (let i = 0; i < 6; i++) {
    const yao = generateYao();
    benYao。push(yao);
    const changed = yaoChange(yao);
    bianYao。push(changed);
    if (yao === "老阴" || yao === "老阳") movingYao。push(i);
  }

  // 计算编码
  const benCode = benYao。map(yao => yaoToBinary(yao))。join("");
  const bianCode = bianYao。map(yao => yaoToBinary(yao))。join("");
  console。log("本卦爻:"， benYao， "编码:"， benCode);
  console。log("变卦爻:"， bianYao， "编码:"， bianCode);
  console。log("动爻位置:"， movingYao);

  // 获取卦名
  const benGua = guaData[benCode] ? guaData[benCode]。name : "未知卦";
  const bianGua = guaData[bianCode] ? guaData[bianCode]。name : "未知卦";
  console。log("本卦名:"， benGua， "变卦名:"， bianGua);

  // 存储当前卦名（本卦）
  currentGua = benGua;

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
  console。log("Rendering HTML:"， guaHtml);
  document。getElementById("guaDisplay")。innerHTML = guaHtml;

  // 生成解读
  const benDesc = guaData[benCode] ? guaData[benCode]。description : "当前状态不明";
  const bianDesc = guaData[bianCode] ? guaData[bianCode]。description : "发展趋势不明";
  let interpretation = `<strong>你的问题：</strong>${question}<br>`;
  interpretation += `<strong>本卦（当前状态）：</strong>${benGua} - ${benDesc}<br>`;
  interpretation += `<strong>变卦（发展趋势）：</strong>${bianGua} - ${bianDesc}<br>`;
  interpretation += `<strong>建议：</strong>当前${benDesc。split("。")[0]}，未来可能${bianDesc。split("。")[0]}。`;
  if (movingYao。length > 0) {
    interpretation += `<br><strong>动爻提示：</strong>第${movingYao。map(i => i + 1)。join("、")}爻变化。`;
  }
  document。getElementById("interpretation")。innerHTML = interpretation;
}

// 渲染六爻图形
function renderLines(yaoArray) {
  const lines = yaoArray。map(yao => {
    const line = (yao === "少阳" || yao === "老阳") ? "<span>——</span>" : "<span>— —</span>";
    console。log("Rendering line for"， yao， ":"， line);
    return line;
  })。reverse()。join("");
  return lines;
}

// 问AI函数
async function askQuestion() {
  const question = document。getElementById("userInput")。value;
  if (!question) {
    alert("请输入问题！");
    return;
  }
  // 结合当前卦名生成问题
  const finalQuestion = currentGua ? `${question}（当前卦为${currentGua}）` : question;
  try {
    const response = await fetch("/.netlify/functions/huggingface"， {
      method: "POST"，
      headers: { "Content-Type": "application/json" }，
      body: JSON。stringify({ question: finalQuestion })，
    });
    const data = await response。json();
    document。getElementById("answer")。innerText = data。answer;
  } catch (error) {
    document。getElementById("answer")。innerText = "发生错误，请稍后重试：" + error。message;
  }
  }
