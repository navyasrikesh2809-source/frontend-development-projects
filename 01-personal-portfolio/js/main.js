const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('resume-download').addEventListener('click',()=>{
const resume=`NAVYA S
B.E. Computer Science and Engineering Student
St. Joseph's College of Engineering — Second Year

PROFILE
Second-year Computer Science and Engineering student interested in web development, programming, databases, networking, cloud computing and AI fundamentals. Enjoys learning through practical tasks and building user-focused web experiences.

EDUCATION
B.E. Computer Science and Engineering — St. Joseph's College of Engineering
Second Year

TECHNICAL SKILLS
HTML, CSS, JavaScript, Python, SQL, MongoDB basics, Git/GitHub, networking fundamentals, cloud computing fundamentals, AI fundamentals, responsive web design.

CERTIFICATIONS
Oracle Agentic AI Certified Foundations Associate
Cloud Applications EPM Process Essentials
Cisco Network Defense
Industrial Networking Essentials
MongoDB Basics for Students
Introduction to AI & Vector Search
Using Vector Search for Semantic Search
HackerRank SQL Basics

EXPERIENCE
Web Development Intern — Thiranex
19 September 2026 – 18 October 2026

PROJECTS
Smart Expense Tracker — local-first expense dashboard for tracking spending and budgets.
Modern E-commerce Storefront — responsive shopping interface with search, wishlist and cart features.
Personal Portfolio — responsive website presenting education, skills, certifications and work.

CONTACT
Email: navyasrikesh2809@gmail.com
LinkedIn: https://www.linkedin.com/in/navya-srikesh-30b3b6432
GitHub: https://github.com/navyasrikesh2809-source
`;
const blob=new Blob([resume],{type:'text/plain'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Navya-S-Resume.txt';a.click();URL.revokeObjectURL(url)});
