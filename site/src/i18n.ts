export const siteLocaleOrder = [
  'zh-CN',
  'zh-TW',
  'en-US',
  'ja-JP',
  'ko-KR',
  'vi-VN',
  'es-ES',
  'pt-BR',
  'ru-RU',
  'fr-FR',
  'de-DE'
] as const;

export type SiteLocale = (typeof siteLocaleOrder)[number];

export const siteLocaleMeta: Record<SiteLocale, { nativeLabel: string; slug: string }> = {
  'zh-CN': { nativeLabel: '简体中文', slug: '' },
  'zh-TW': { nativeLabel: '繁體中文', slug: 'zh-tw' },
  'en-US': { nativeLabel: 'English', slug: 'en' },
  'ja-JP': { nativeLabel: '日本語', slug: 'ja' },
  'ko-KR': { nativeLabel: '한국어', slug: 'ko' },
  'vi-VN': { nativeLabel: 'Tiếng Việt', slug: 'vi' },
  'es-ES': { nativeLabel: 'Español', slug: 'es' },
  'pt-BR': { nativeLabel: 'Português (Brasil)', slug: 'pt-br' },
  'ru-RU': { nativeLabel: 'Русский', slug: 'ru' },
  'fr-FR': { nativeLabel: 'Français', slug: 'fr' },
  'de-DE': { nativeLabel: 'Deutsch', slug: 'de' }
};

export const siteLocaleBySlug = Object.fromEntries(
  siteLocaleOrder
    .filter((locale) => siteLocaleMeta[locale].slug)
    .map((locale) => [siteLocaleMeta[locale].slug, locale])
) as Record<string, SiteLocale>;

type GuideItem = {
  title: string;
  body: string;
};

export type ReleaseCopy = {
  pageTitle: string;
  pageDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  versionLabel: string;
  releaseLabel: string;
  releaseLink: string;
  historyBtn: string;
  docsBtn: string;
  languageNavLabel: string;
  downloadTitle: string;
  downloadSubtitle: string;
  screenshotAlt: string;
  fileLabel: string;
  shaLabel: string;
  copyBtn: string;
  copiedBtn: string;
  copyManuallyPrompt: string;
  downloadBtn: string;
  noAssets: string;
  quickStartTitle: string;
  quickStartSubtitle: string;
  guideItems: GuideItem[];
};

export const releaseCopy: Record<SiteLocale, ReleaseCopy> = {
  'zh-CN': {
    pageTitle: 'XXTLanControl 下载',
    pageDescription: 'XXTLanControl 官方发布下载页，自动跟随最新发布更新。',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl 是 XXTouch 局域网控制器，支持 Windows、macOS 和 Linux。',
    versionLabel: '当前最新版本',
    releaseLabel: '发布详情',
    releaseLink: 'GitHub 发布',
    historyBtn: '历史版本',
    docsBtn: '查看完整文档',
    languageNavLabel: '选择语言',
    downloadTitle: '最新版下载',
    downloadSubtitle: '按系统选择安装包',
    screenshotAlt: 'XXTLanControl 界面截图',
    fileLabel: '文件名',
    shaLabel: 'SHA256',
    copyBtn: '复制',
    copiedBtn: '已复制',
    copyManuallyPrompt: '请手动复制：',
    downloadBtn: '立即下载',
    noAssets: '暂未获取到可下载资产，请稍后重试。',
    quickStartTitle: '软件说明（精简）',
    quickStartSubtitle: '详细操作与高级配置请查看完整文档。',
    guideItems: [
      { title: 'Windows', body: '解压后运行托盘程序或 start-backend.cmd，默认访问 http://127.0.0.1:46990。' },
      { title: 'macOS', body: '将 .app 拖入应用程序目录并放行未签名应用，启动后可通过菜单栏托盘进入控制台。' },
      { title: 'Linux', body: '解压后执行 start-backend.sh，脚本会按架构选择 amd64 或 arm64 后端。' },
      { title: 'Docker', body: '支持 Docker Hub 与 GHCR，可直接 docker run 或使用仓库内 docker-compose 文件部署。' }
    ]
  },
  'zh-TW': {
    pageTitle: 'XXTLanControl 下載',
    pageDescription: 'XXTLanControl 官方版本下載頁，會自動隨最新版本更新。',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl 是 XXTouch 的區域網路控制器，支援 Windows、macOS 與 Linux。',
    versionLabel: '目前最新版本',
    releaseLabel: '版本詳情',
    releaseLink: 'GitHub 發布',
    historyBtn: '歷史版本',
    docsBtn: '查看完整文件',
    languageNavLabel: '選擇語言',
    downloadTitle: '最新版本下載',
    downloadSubtitle: '依作業系統選擇安裝套件',
    screenshotAlt: 'XXTLanControl 介面截圖',
    fileLabel: '檔案名稱',
    shaLabel: 'SHA256',
    copyBtn: '複製',
    copiedBtn: '已複製',
    copyManuallyPrompt: '請手動複製：',
    downloadBtn: '立即下載',
    noAssets: '目前沒有可下載的檔案，請稍後再試。',
    quickStartTitle: '軟體說明（精簡）',
    quickStartSubtitle: '完整操作方式與進階設定請參閱完整文件。',
    guideItems: [
      { title: 'Windows', body: '解壓縮後執行系統匣程式或 start-backend.cmd，預設可造訪 http://127.0.0.1:46990。' },
      { title: 'macOS', body: '將 .app 拖曳至應用程式目錄並允許啟動未簽署的應用程式；啟動後可透過選單列圖示進入控制台。' },
      { title: 'Linux', body: '解壓縮後執行 start-backend.sh，指令碼會依架構選擇 amd64 或 arm64 後端。' },
      { title: 'Docker', body: '支援 Docker Hub 與 GHCR，可直接執行 docker run，或使用儲存庫內的 docker-compose 檔案部署。' }
    ]
  },
  'en-US': {
    pageTitle: 'XXTLanControl Downloads',
    pageDescription: 'Official XXTLanControl release download page, automatically updated with the latest release.',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl is the XXTouch local area network controller, supporting Windows, macOS, and Linux.',
    versionLabel: 'Latest Version',
    releaseLabel: 'Release Details',
    releaseLink: 'GitHub Release',
    historyBtn: 'Release History',
    docsBtn: 'Full Documentation',
    languageNavLabel: 'Choose language',
    downloadTitle: 'Latest Downloads',
    downloadSubtitle: 'Choose an installer for your operating system.',
    screenshotAlt: 'XXTLanControl interface screenshot',
    fileLabel: 'File Name',
    shaLabel: 'SHA256',
    copyBtn: 'Copy',
    copiedBtn: 'Copied',
    copyManuallyPrompt: 'Copy manually:',
    downloadBtn: 'Download',
    noAssets: 'No release assets are available yet. Please try again later.',
    quickStartTitle: 'Quick Software Guide',
    quickStartSubtitle: 'See the full documentation for complete usage and advanced configuration.',
    guideItems: [
      { title: 'Windows', body: 'Extract the package, run the tray app or start-backend.cmd, then visit http://127.0.0.1:46990.' },
      { title: 'macOS', body: 'Move the .app to Applications, allow unsigned app launch, and use the menu-bar icon to open the console.' },
      { title: 'Linux', body: 'Extract and run start-backend.sh. The script selects the amd64 or arm64 backend for the host architecture.' },
      { title: 'Docker', body: 'Docker Hub and GHCR are supported. Deploy with docker run or a docker-compose file from the repository.' }
    ]
  },
  'ja-JP': {
    pageTitle: 'XXTLanControl ダウンロード',
    pageDescription: '最新リリースに合わせて自動更新される XXTLanControl 公式ダウンロードページです。',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl は XXTouch のローカルエリアネットワークコントローラーで、Windows、macOS、Linux に対応しています。',
    versionLabel: '最新バージョン',
    releaseLabel: 'リリース詳細',
    releaseLink: 'GitHub リリース',
    historyBtn: 'リリース履歴',
    docsBtn: '完全なドキュメント',
    languageNavLabel: '言語を選択',
    downloadTitle: '最新版をダウンロード',
    downloadSubtitle: 'お使いの OS に合ったパッケージを選択してください。',
    screenshotAlt: 'XXTLanControl の画面',
    fileLabel: 'ファイル名',
    shaLabel: 'SHA256',
    copyBtn: 'コピー',
    copiedBtn: 'コピー済み',
    copyManuallyPrompt: '手動でコピーしてください：',
    downloadBtn: 'ダウンロード',
    noAssets: 'ダウンロード可能なファイルがまだありません。しばらくしてから再度お試しください。',
    quickStartTitle: 'ソフトウェアの簡易ガイド',
    quickStartSubtitle: '詳しい操作方法と高度な設定は完全なドキュメントをご覧ください。',
    guideItems: [
      { title: 'Windows', body: 'パッケージを展開し、トレイアプリまたは start-backend.cmd を実行します。デフォルトでは http://127.0.0.1:46990 にアクセスします。' },
      { title: 'macOS', body: '.app を「アプリケーション」フォルダに移動して未署名アプリの起動を許可します。起動後はメニューバーのアイコンからコンソールを開けます。' },
      { title: 'Linux', body: 'パッケージを展開して start-backend.sh を実行します。スクリプトがアーキテクチャに応じて amd64 または arm64 のバックエンドを選択します。' },
      { title: 'Docker', body: 'Docker Hub と GHCR に対応しています。docker run を直接実行するか、リポジトリ内の docker-compose ファイルでデプロイできます。' }
    ]
  },
  'ko-KR': {
    pageTitle: 'XXTLanControl 다운로드',
    pageDescription: '최신 릴리스에 맞춰 자동으로 업데이트되는 XXTLanControl 공식 다운로드 페이지입니다.',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl은 XXTouch의 로컬 영역 네트워크 컨트롤러로, Windows, macOS, Linux를 지원합니다.',
    versionLabel: '최신 버전',
    releaseLabel: '릴리스 정보',
    releaseLink: 'GitHub 릴리스',
    historyBtn: '릴리스 기록',
    docsBtn: '전체 문서',
    languageNavLabel: '언어 선택',
    downloadTitle: '최신 버전 다운로드',
    downloadSubtitle: '운영 체제에 맞는 패키지를 선택하세요.',
    screenshotAlt: 'XXTLanControl 인터페이스 화면',
    fileLabel: '파일 이름',
    shaLabel: 'SHA256',
    copyBtn: '복사',
    copiedBtn: '복사됨',
    copyManuallyPrompt: '직접 복사하세요:',
    downloadBtn: '다운로드',
    noAssets: '아직 다운로드할 수 있는 파일이 없습니다. 잠시 후 다시 시도하세요.',
    quickStartTitle: '소프트웨어 빠른 안내',
    quickStartSubtitle: '전체 사용법과 고급 설정은 전체 문서를 확인하세요.',
    guideItems: [
      { title: 'Windows', body: '패키지의 압축을 푼 후 트레이 앱 또는 start-backend.cmd를 실행하세요. 기본 주소는 http://127.0.0.1:46990입니다.' },
      { title: 'macOS', body: '.app을 응용 프로그램 폴더로 옮기고 서명되지 않은 앱의 실행을 허용하세요. 실행 후에는 메뉴 막대 아이콘에서 콘솔을 열 수 있습니다.' },
      { title: 'Linux', body: '압축을 푼 후 start-backend.sh를 실행하세요. 스크립트가 아키텍처에 따라 amd64 또는 arm64 백엔드를 선택합니다.' },
      { title: 'Docker', body: 'Docker Hub와 GHCR을 지원합니다. docker run을 직접 실행하거나 저장소의 docker-compose 파일을 사용해 배포할 수 있습니다.' }
    ]
  },
  'vi-VN': {
    pageTitle: 'Tải xuống XXTLanControl',
    pageDescription: 'Trang tải xuống chính thức của XXTLanControl, tự động cập nhật theo bản phát hành mới nhất.',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl là bộ điều khiển mạng cục bộ cho XXTouch, hỗ trợ Windows, macOS và Linux.',
    versionLabel: 'Phiên bản mới nhất',
    releaseLabel: 'Chi tiết bản phát hành',
    releaseLink: 'Bản phát hành GitHub',
    historyBtn: 'Lịch sử phát hành',
    docsBtn: 'Tài liệu đầy đủ',
    languageNavLabel: 'Chọn ngôn ngữ',
    downloadTitle: 'Tải bản mới nhất',
    downloadSubtitle: 'Chọn gói phù hợp với hệ điều hành của bạn.',
    screenshotAlt: 'Ảnh chụp giao diện XXTLanControl',
    fileLabel: 'Tên tệp',
    shaLabel: 'SHA256',
    copyBtn: 'Sao chép',
    copiedBtn: 'Đã sao chép',
    copyManuallyPrompt: 'Hãy sao chép thủ công:',
    downloadBtn: 'Tải xuống',
    noAssets: 'Chưa có tệp nào để tải xuống. Vui lòng thử lại sau.',
    quickStartTitle: 'Hướng dẫn nhanh',
    quickStartSubtitle: 'Xem tài liệu đầy đủ để biết cách sử dụng và cấu hình nâng cao.',
    guideItems: [
      { title: 'Windows', body: 'Giải nén gói, chạy ứng dụng khay hệ thống hoặc start-backend.cmd, sau đó truy cập http://127.0.0.1:46990 theo mặc định.' },
      { title: 'macOS', body: 'Kéo .app vào thư mục Ứng dụng và cho phép khởi chạy ứng dụng chưa được ký. Sau khi khởi động, bạn có thể mở bảng điều khiển từ biểu tượng trên thanh menu.' },
      { title: 'Linux', body: 'Giải nén rồi chạy start-backend.sh. Tập lệnh sẽ chọn backend amd64 hoặc arm64 theo kiến trúc.' },
      { title: 'Docker', body: 'Hỗ trợ Docker Hub và GHCR; bạn có thể chạy trực tiếp docker run hoặc triển khai bằng tệp docker-compose trong kho lưu trữ.' }
    ]
  },
  'es-ES': {
    pageTitle: 'Descargas de XXTLanControl',
    pageDescription: 'Página oficial de descargas de XXTLanControl, actualizada automáticamente con la versión más reciente.',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl es el controlador de red local de XXTouch y es compatible con Windows, macOS y Linux.',
    versionLabel: 'Última versión',
    releaseLabel: 'Detalles de la versión',
    releaseLink: 'Release de GitHub',
    historyBtn: 'Historial de versiones',
    docsBtn: 'Documentación completa',
    languageNavLabel: 'Elegir idioma',
    downloadTitle: 'Descargar la última versión',
    downloadSubtitle: 'Elige el paquete correspondiente a tu sistema operativo.',
    screenshotAlt: 'Captura de la interfaz de XXTLanControl',
    fileLabel: 'Nombre del archivo',
    shaLabel: 'SHA256',
    copyBtn: 'Copiar',
    copiedBtn: 'Copiado',
    copyManuallyPrompt: 'Copia manualmente:',
    downloadBtn: 'Descargar',
    noAssets: 'Todavía no hay archivos disponibles. Inténtalo de nuevo más tarde.',
    quickStartTitle: 'Guía rápida del software',
    quickStartSubtitle: 'Consulta la documentación completa para conocer el uso detallado y la configuración avanzada.',
    guideItems: [
      { title: 'Windows', body: 'Descomprime el paquete y ejecuta la aplicación de la bandeja del sistema o start-backend.cmd. La dirección predeterminada es http://127.0.0.1:46990.' },
      { title: 'macOS', body: 'Mueve .app a la carpeta Aplicaciones y permite ejecutar aplicaciones sin firmar. Una vez iniciada, abre la consola desde el icono de la barra de menús.' },
      { title: 'Linux', body: 'Descomprime el paquete y ejecuta start-backend.sh. El script seleccionará el backend amd64 o arm64 según la arquitectura.' },
      { title: 'Docker', body: 'Admite Docker Hub y GHCR. Puedes ejecutar directamente docker run o desplegarlo mediante el archivo docker-compose del repositorio.' }
    ]
  },
  'pt-BR': {
    pageTitle: 'Downloads do XXTLanControl',
    pageDescription: 'Página oficial de downloads do XXTLanControl, atualizada automaticamente com a versão mais recente.',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'O XXTLanControl é o controlador de rede local do XXTouch, com suporte a Windows, macOS e Linux.',
    versionLabel: 'Versão mais recente',
    releaseLabel: 'Detalhes da versão',
    releaseLink: 'Release do GitHub',
    historyBtn: 'Histórico de versões',
    docsBtn: 'Documentação completa',
    languageNavLabel: 'Escolher idioma',
    downloadTitle: 'Baixar a versão mais recente',
    downloadSubtitle: 'Escolha o pacote correspondente ao seu sistema operacional.',
    screenshotAlt: 'Captura da interface do XXTLanControl',
    fileLabel: 'Nome do arquivo',
    shaLabel: 'SHA256',
    copyBtn: 'Copiar',
    copiedBtn: 'Copiado',
    copyManuallyPrompt: 'Copie manualmente:',
    downloadBtn: 'Baixar',
    noAssets: 'Ainda não há arquivos disponíveis para download. Tente novamente mais tarde.',
    quickStartTitle: 'Guia rápido do software',
    quickStartSubtitle: 'Consulte a documentação completa para instruções e configurações avançadas.',
    guideItems: [
      { title: 'Windows', body: 'Extraia o pacote e execute o aplicativo da bandeja do sistema ou start-backend.cmd. O endereço padrão é http://127.0.0.1:46990.' },
      { title: 'macOS', body: 'Mova o .app para a pasta Aplicativos e permita a execução de aplicativos não assinados. Depois de iniciar, abra o console pelo ícone da barra de menus.' },
      { title: 'Linux', body: 'Extraia o pacote e execute start-backend.sh. O script selecionará o backend amd64 ou arm64 de acordo com a arquitetura.' },
      { title: 'Docker', body: 'Há suporte para Docker Hub e GHCR. Você pode executar diretamente docker run ou implantar usando o arquivo docker-compose do repositório.' }
    ]
  },
  'ru-RU': {
    pageTitle: 'Загрузка XXTLanControl',
    pageDescription: 'Официальная страница загрузки XXTLanControl, автоматически обновляемая вместе с последним выпуском.',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl — контроллер локальной сети для XXTouch с поддержкой Windows, macOS и Linux.',
    versionLabel: 'Последняя версия',
    releaseLabel: 'Сведения о выпуске',
    releaseLink: 'Релиз GitHub',
    historyBtn: 'История выпусков',
    docsBtn: 'Полная документация',
    languageNavLabel: 'Выбрать язык',
    downloadTitle: 'Загрузить последнюю версию',
    downloadSubtitle: 'Выберите пакет для своей операционной системы.',
    screenshotAlt: 'Снимок интерфейса XXTLanControl',
    fileLabel: 'Имя файла',
    shaLabel: 'SHA256',
    copyBtn: 'Копировать',
    copiedBtn: 'Скопировано',
    copyManuallyPrompt: 'Скопируйте вручную:',
    downloadBtn: 'Загрузить',
    noAssets: 'Файлы для загрузки пока недоступны. Повторите попытку позже.',
    quickStartTitle: 'Краткое руководство',
    quickStartSubtitle: 'Полное руководство и расширенные настройки приведены в документации.',
    guideItems: [
      { title: 'Windows', body: 'Распакуйте пакет и запустите приложение в области уведомлений или start-backend.cmd; адрес по умолчанию — http://127.0.0.1:46990.' },
      { title: 'macOS', body: 'Переместите .app в папку «Программы» и разрешите запуск неподписанных приложений. После запуска консоль можно открыть через значок в строке меню.' },
      { title: 'Linux', body: 'Распакуйте пакет и выполните start-backend.sh. Скрипт выберет бэкенд amd64 или arm64 в зависимости от архитектуры.' },
      { title: 'Docker', body: 'Поддерживаются Docker Hub и GHCR; развернуть приложение можно с помощью docker run или файла docker-compose из репозитория.' }
    ]
  },
  'fr-FR': {
    pageTitle: 'Téléchargements de XXTLanControl',
    pageDescription: 'Page officielle de téléchargement de XXTLanControl, automatiquement mise à jour avec la dernière version.',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl est le contrôleur de réseau local de XXTouch, compatible avec Windows, macOS et Linux.',
    versionLabel: 'Dernière version',
    releaseLabel: 'Détails de la version',
    releaseLink: 'Release GitHub',
    historyBtn: 'Historique des versions',
    docsBtn: 'Documentation complète',
    languageNavLabel: 'Choisir la langue',
    downloadTitle: 'Télécharger la dernière version',
    downloadSubtitle: 'Choisissez le paquet correspondant à votre système d’exploitation.',
    screenshotAlt: 'Capture de l’interface XXTLanControl',
    fileLabel: 'Nom du fichier',
    shaLabel: 'SHA256',
    copyBtn: 'Copier',
    copiedBtn: 'Copié',
    copyManuallyPrompt: 'Copiez manuellement :',
    downloadBtn: 'Télécharger',
    noAssets: 'Aucun fichier n’est encore disponible. Réessayez plus tard.',
    quickStartTitle: 'Guide rapide du logiciel',
    quickStartSubtitle: 'Consultez la documentation complète pour toutes les instructions et les réglages avancés.',
    guideItems: [
      { title: 'Windows', body: 'Décompressez le paquet, exécutez l’application de la zone de notification ou start-backend.cmd, puis accédez à l’adresse par défaut http://127.0.0.1:46990.' },
      { title: 'macOS', body: 'Déplacez .app dans le dossier Applications et autorisez le lancement des applications non signées. Une fois démarrée, ouvrez la console depuis l’icône de la barre des menus.' },
      { title: 'Linux', body: 'Décompressez le paquet et exécutez start-backend.sh. Le script sélectionne le backend amd64 ou arm64 en fonction de l’architecture.' },
      { title: 'Docker', body: 'Docker Hub et GHCR sont pris en charge ; vous pouvez exécuter directement docker run ou déployer avec le fichier docker-compose du dépôt.' }
    ]
  },
  'de-DE': {
    pageTitle: 'XXTLanControl herunterladen',
    pageDescription: 'Offizielle Downloadseite von XXTLanControl, die automatisch mit der neuesten Version aktualisiert wird.',
    heroTitle: 'XXTLanControl',
    heroSubtitle: 'XXTLanControl ist der lokale Netzwerk-Controller für XXTouch und unterstützt Windows, macOS und Linux.',
    versionLabel: 'Neueste Version',
    releaseLabel: 'Versionsdetails',
    releaseLink: 'GitHub-Release',
    historyBtn: 'Versionsverlauf',
    docsBtn: 'Vollständige Dokumentation',
    languageNavLabel: 'Sprache auswählen',
    downloadTitle: 'Neueste Version herunterladen',
    downloadSubtitle: 'Wählen Sie das Paket für Ihr Betriebssystem aus.',
    screenshotAlt: 'Bildschirmfoto der XXTLanControl-Oberfläche',
    fileLabel: 'Dateiname',
    shaLabel: 'SHA256',
    copyBtn: 'Kopieren',
    copiedBtn: 'Kopiert',
    copyManuallyPrompt: 'Manuell kopieren:',
    downloadBtn: 'Herunterladen',
    noAssets: 'Zurzeit sind keine Dateien verfügbar. Versuchen Sie es später erneut.',
    quickStartTitle: 'Kurzanleitung',
    quickStartSubtitle: 'Vollständige Anweisungen und erweiterte Einstellungen finden Sie in der Dokumentation.',
    guideItems: [
      { title: 'Windows', body: 'Entpacken Sie das Paket und starten Sie die Anwendung im Infobereich oder start-backend.cmd. Die Standardadresse ist http://127.0.0.1:46990.' },
      { title: 'macOS', body: 'Verschieben Sie .app in den Ordner „Programme“ und erlauben Sie den Start nicht signierter Apps. Nach dem Start können Sie die Konsole über das Symbol in der Menüleiste öffnen.' },
      { title: 'Linux', body: 'Entpacken Sie das Paket und führen Sie start-backend.sh aus. Das Skript wählt je nach Architektur das Backend amd64 oder arm64 aus.' },
      { title: 'Docker', body: 'Docker Hub und GHCR werden unterstützt. Sie können docker run direkt ausführen oder die Bereitstellung mit der docker-compose-Datei des Repositorys durchführen.' }
    ]
  }
};

export function sitePathForLocale(locale: SiteLocale): string {
  const slug = siteLocaleMeta[locale].slug;
  return slug ? `${slug}/` : '';
}

export function docsURLForLocale(locale: SiteLocale): string {
  const docsLocalePath: Record<SiteLocale, string> = {
    'zh-CN': '',
    'zh-TW': 'zh-TW/',
    'en-US': 'en/',
    'ja-JP': 'ja-JP/',
    'ko-KR': 'ko-KR/',
    'vi-VN': 'vi-VN/',
    'es-ES': 'es-ES/',
    'pt-BR': 'pt-BR/',
    'ru-RU': 'ru-RU/',
    'fr-FR': 'fr-FR/',
    'de-DE': 'de-DE/'
  };
  return `https://xxtouch.app/docs/${docsLocalePath[locale]}`;
}
