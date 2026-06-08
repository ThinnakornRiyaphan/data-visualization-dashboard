const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/about-me', (req, res) => {
    res.send(`
     <li>ยินดีด้วย! คุณสร้าง API แรกสำเร็จแล้ว 🎉</li>
     <li>ชื่อ: ธินกร ริยาพันธ์</li>
     <li>ชื่อเล่น: ชล</li>
     <li>สาขาวิชา: เทคโนโลยีสารสนเทศ</li>
     <li>สิ่งที่สนใจ: การเขียนโปรแกรม การทำเว็บไซต์ และงานด้าน IT</li>
    `);
});

app.get('/api/my-goal', (req, res) => {
    res.send(`
     <li>1. อยากพัฒนาทักษะการเขียนโปรแกรมให้เก่งขึ้น</li>
     <li><2. อยากมีงานด้าน IT หรือพัฒนาแอปพลิเคชันของตัวเองให้สำเร็จ</li>
    `);
});

app.get('/api/my-skills', (req, res) => {
    res.json({
        studentId: '660000000',
        nickname: 'ชล',
        skills: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        learningGoal: 'สามารถพัฒนา Back-End API และเชื่อมต่อฐานข้อมูลได้'
    });
});

app.listen(PORT, () => {
    console.log(`Server กำลังวิ่งอยู่ที่ http://localhost:${PORT}`);
});