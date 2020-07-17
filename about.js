const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Harbinder Singh, enthusiastic Cisco Certified Network Associate (CCNA) with 5 years’ experience in Network administration, installation, and optimization backed by Post Degree Diploma in Network Security and Project Management at the University of Winnipeg as well as Bachelors in Electronics and Communication from India. Away from keyboard, you can find me doing nature photography and socializing!",
  skills:
    '<span class="code">Networking:</span>CISCO Devices (Router 1941, Switch 2960/4321 and ASA-Firewall 5505-06), IP-Phone, Terminal Emulation, SolarWinds Networking Toolkit, and PRTG Networking tools.<br><span class="code">Security:</span>Nessus Pro, Windows Firewall, Panda Enterprise Antivirus, Pen-testing with Kali Linux.<br><span class="code">Hardware:</span>Routers and Switches from CISCO, MikroTik, TP-link, D-Link, and Laptops/Computers.<br><span class="code">Software:</span>CISCO IOS, PowerShell, Hosted and bare metal Virtual Machines, Packet tracer, and GNS3.<br><span class="code">Languages:</span>C, C++, Python, CISCO-CLI, PowerShell Scripting, JavaScript, PHP, and HTML.<br><span class="code">Operating System:</span>Kali Linux, Ubuntu, Windows XP/8/10, and Mac OS.',
  education:
    '<span class="code">University of Winnipeg(2018-19)</span><br>Network Security P.D. Diploma + Management Certificate',
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: '<span class="code">I.T. MANAGER (2015-18)</span><br>Implemented 12+ new I.T. projects; for example, designed and implemented a secure LAN network to support 5000+ users and increased performance by 32% compared to the previous network.',
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/harbinder5ingh/' class='success link'>LinkedIn</a> ,<a href='tel:2048097588' class='success link'>Phone</a>, <a href='https://wa.me/12897726048?text=Hi Harbinder. I just visited your website and It looks awesome!' class='success link'>Whatsapp</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
