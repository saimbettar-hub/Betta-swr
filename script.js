function orderFish(fishName) {
    // เปลี่ยนตรงนี้เป็น Link Line OA หรือเบอร์โทรติดต่อของคุณ
    // เช่น https://line.me/R/ti/p/@yourlineid
    const lineLink = "https://line.me/ti/p/YOUR_LINE_ID"; 
    
    // ข้อความทักทายอัตโนมัติ
    const message = encodeURIComponent(`สวัสดีครับ สนใจปลากัดสายพันธุ์: ${fishName} ครับผม`);
    
    // เปิดหน้าต่างใหม่ไปยัง Line ทันที
    window.open(`${lineLink}?text=${message}`, '_blank');
}
