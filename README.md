運行條件，請安裝以下軟體:

Node.js
XAMPP
SQL Server
SQL Server Management
確保SQL Server 已連接XAMPP
------------------------------------------------------------------

安裝運行步驟:
--在終端機 npm i 安裝 modules
--將資料庫vue_shop_database匯入您的SQL Server Management
--把資料庫連線資訊改成您的SQL Server Management資訊
$serverName = "127.0.0.1";           // 你的 SQL Server IP 或主機名
$connectionOptions = array(
    "Database" => "my-testdatabase", // 資料庫名稱
    "Uid" => "",                     // 您的使用者名稱
    "PWD" => "",                     // 密碼
    "CharacterSet" => "UTF-8"
);

確保各個fetch的網址能正確指向後端檔案
fetch 'http://127.0.0.1/vue-shop-back/test-api.php'


npm run dev 運行專案




專案說明:
展現vue的基本使用能力，使用php連接Ms SQL，並進行資料庫操作
使用預存函式
------------------------------------------------------------------