function showClock() {
    var now = new Date();
    
    // タイムゾーンの設定
    var tzTokyo = now.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    var tzNewYork = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
    var tzLondon = now.toLocaleString('en-GB', { timeZone: 'Europe/London' });
  
    // 時刻の計算
    var tokyo = new Date(tzTokyo);
    var newYork = new Date(tzNewYork);
    var london = new Date(tzLondon);
  
    // 時刻の表示
    document.getElementById('clock').innerHTML =
      '<p>Tokyo: ' + tokyo.toLocaleTimeString() + '</p>' +
      '<p>New York: ' + newYork.toLocaleTimeString() + '</p>' +
      '<p>London: ' + london.toLocaleTimeString() + '</p>';
  }
  
  setInterval(showClock, 1000);
  