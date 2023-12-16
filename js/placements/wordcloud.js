anychart.onDocumentReady(function () {
    var data = [
      { x: "AMAZON", value: 4400000, category: "Sino-Tibetan" },
      { x: "SERVICE NOW", value: 2522000, category: "Indo-European" },
      { x: "VMWARE", value: 2000000, category: "Indo-European" },
      {
        x: "WELLS FARGO FINANCIAL SERVICES",
        value: 2000000,
        category: "Indo-European",
      },
      { x: "ABINBEV GCC INDIA", value: 1200000, category: "Afro-Asiatic" },
      {
        x: "AIR BUS INDIA PVT.LTD",
        value: 1200000,
        category: "Austronesian",
      },
      {
        x: "CAPILLARY TECHNOLOGIES",
        value: 1200000,
        category: "Indo-European",
      },
      { x: "IBM", value: 1200000, category: "Indo-European" },
      { x: "BYZU", value: 1000000, category: "Indo-European" },
      { x: "BERKADIA", value: 901600, category: "Indo-European" },
      { x: "STANDARD CHARTERED", value: 825000, category: "Afro-Asiatic" },
      { x: "MILE STONE", value: 800000, category: "Indo-European" },
      { x: "TCS DIGITAL", value: 720000, category: "Japonic" },
      { x: "MAQ SOFTWARE", value: 705000, category: "Indo-European" },
      {
        x: "EEFTRONICS SYSTEMS PVT.LTD",
        value: 700000,
        category: "Sino-Tibetan",
      },
      { x: "INFOSYS", value: 700000, category: "Indo-European" },
      { x: "TCS CODEVITA", value: 700000, category: "Indo-European" },
      { x: "WILEY MTHREE", value: 700000, category: "Indo-European" },
      {
        x: "IVY Software Development Services Private Limited",
        value: 695000,
        category: "Afro-Asiatic",
      },
      { x: "ZOHO", value: 652000, category: "Austronesian" },
      { x: "ACCENTURE", value: 650000, category: "Indo-European" },
      { x: "IBM", value: 1200000, category: "Indo-European" },
      { x: "TIGER ANALYTICS", value: 650000, category: "Indo-European" },
      { x: "WIPRO", value: 650000, category: "Indo-European" },
      { x: "TEMENOS", value: 631000, category: "Afro-Asiatic" },
      {
        x: "ARGANO SOFTWARE PRIVATE LIMITED",
        value: 600000,
        category: "Indo-European",
      },
      { x: "DELTAX", value: 600000, category: "Japonic" },
      { x: "EPAM", value: 600000, category: "Indo-European" },
      { x: "HEXAWARE", value: 600000, category: "Sino-Tibetan" },
      {
        x: "JUSPAY TECHNOLOGIES PVT LTD",
        value: 600000,
        category: "Indo-European",
      },
      {
        x: "NICKELFOX TECHNOLOGIES PVT. LTD",
        value: 600000,
        category: "Indo-European",
      },
      { x: "OSI DIGITAL", value: 600000, category: "Indo-European" },
      { x: "TCS NINJA", value: 580000, category: "Afro-Asiatic" },
      { x: "TCS NQT", value: 580000, category: "Austronesian" },
      { x: "TA DIGITAL", value: 570000, category: "Indo-European" },
      {
        x: "SPANDANA SPHOORTY FINANCIAL LTD.",
        value: 550000,
        category: "Indo-European",
      },
      {
        x: "KREETI TECHNOLOGIES PVT. LTD.",
        value: 540000,
        category: "Indo-European",
      },
      { x: "FACE PREP", value: 535000, category: "Indo-European" },
      { x: "SENECA GLOBAL", value: 530000, category: "Afro-Asiatic" },
      {
        x: "VODAFORNE INTELLIGENT SOLLUTIONS",
        value: 520000,
        category: "Indo-European",
      },
      { x: "ACCOLITE DIGITAL INDIA", value: 500000, category: "Japonic" },
      { x: "CONCENTRIX", value: 500000, category: "Indo-European" },
      { x: "HITACHI", value: 500000, category: "Sino-Tibetan" },
      { x: "MAGNAQUEST", value: 500000, category: "Indo-European" },
      { x: "NTT DATA", value: 500000, category: "Indo-European" },
      { x: "VIRTUSAPOLARIS", value: 500000, category: "Indo-European" },
      { x: "VOLKSWAGEN", value: 500000, category: "Afro-Asiatic" },
      { x: "XLENZ", value: 500000, category: "Austronesian" },
      { x: "COGNIZANT", value: 450000, category: "Indo-European" },
      {
        x: "DELOITTE CONSULTING",
        value: 450000,
        category: "Indo-European",
      },
      {
        x: "LEGATOHEALTH TECHNOLOGIES(CARELON)",
        value: 450000,
        category: "Indo-European",
      },
      { x: "LUXOFT", value: 450000, category: "Indo-European" },
      { x: "PWC", value: 450000, category: "Afro-Asiatic" },
      {
        x: "SMARTSOCSOLUTIONS INDIA PVT. LTD.",
        value: 450000,
        category: "Indo-European",
      },
      { x: "TOLL PLUS", value: 450000, category: "Japonic" },
      {
        x: "Toshiba Transmission & Distribution Systems (India) Private Limited",
        value: 450000,
        category: "Indo-European",
      },
      { x: "UNISYS GLOBAL", value: 450000, category: "Sino-Tibetan" },
      { x: "VISTEX", value: 450000, category: "Indo-European" },
      { x: "CAPGEMINI", value: 425000, category: "Indo-European" },
      {
        x: "RENAULT NISSAN (RNTBCI)",
        value: 425000,
        category: "Indo-European",
      },
      {
        x: "CONSTELLA INTELLIGENCE",
        value: 400000,
        category: "Afro-Asiatic",
      },
      { x: "DXC", value: 400000, category: "Austronesian" },
      { x: "KPIT", value: 400000, category: "Indo-European" },
      {
        x: "L&T TECHNOLOGY SERVICES",
        value: 400000,
        category: "Indo-European",
      },
      { x: "REVATURE INDIA", value: 400000, category: "Indo-European" },
      { x: "TECH DEMOCRACY", value: 400000, category: "Indo-European" },
      {
        x: "TORRY HORRIS Business Solutions (THBS)",
        value: 400000,
        category: "Afro-Asiatic",
      },
      {
        x: "TELAVERGE COMMUNICATIONS",
        value: 380000,
        category: "Indo-European",
      },
      { x: "HCL", value: 365000, category: "Japonic" },
      { x: "ACL DIGITAL", value: 360000, category: "Indo-European" },
      { x: "ATOS GLOBAL", value: 360000, category: "Sino-Tibetan" },
      {
        x: "BROADRIDGE FINANCIAL SOLUTIOS",
        value: 360000,
        category: "Indo-European",
      },
      {
        x: "ICICI FINANCIAL SERVICES COMPANY",
        value: 360000,
        category: "Indo-European",
      },
      { x: "MIND TREE", value: 360000, category: "Indo-European" },
      { x: "NAVTECH", value: 360000, category: "Afro-Asiatic" },
      {
        x: "PENNANT TECHNOLOGIES",
        value: 360000,
        category: "Austronesian",
      },
      { x: "SYNTEL", value: 360000, category: "Indo-European" },
      { x: "TECH TAMMINA", value: 360000, category: "Indo-European" },
      { x: "THERMAL SYSTEMS", value: 360000, category: "Indo-European" },
      {
        x: "ARI GLOBAL SOLUTIONS",
        value: 350000,
        category: "Indo-European",
      },
      { x: "CADSYS INDIA LTD", value: 350000, category: "Afro-Asiatic" },
      { x: "CGI", value: 350000, category: "Indo-European" },
      {
        x: "Cloud4c Services Private Limited (India)",
        value: 350000,
        category: "Japonic",
      },
      { x: "FIS", value: 350000, category: "Indo-European" },
      {
        x: "FUJITSU Consulting India Pvt Ltd.",
        value: 350000,
        category: "Sino-Tibetan",
      },
      { x: "INTELLECT DESIGN", value: 350000, category: "Indo-European" },
      { x: "OPSRAMP", value: 350000, category: "Indo-European" },
      { x: "PRODAPT", value: 350000, category: "Indo-European" },
      { x: "TECHMAHINDRA", value: 350000, category: "Afro-Asiatic" },
      {
        x: "TIKONA INFINET PRIVATE LIMITED",
        value: 350000,
        category: "Austronesian",
      },
      { x: "VERZEO EDUTECH", value: 350000, category: "Indo-European" },
      { x: "ZEN TECHNOLOGIES", value: 350000, category: "Indo-European" },
      {
        x: "ZENSAR TECHNOLOGIES",
        value: 350000,
        category: "Indo-European",
      },
      {
        x: "SNOVASYS SOFTWARE SOLUTIONS PVT. LTD.",
        value: 340000,
        category: "Indo-European",
      },
      {
        x: "TECHNOVERT SOLUTIONS",
        value: 340000,
        category: "Afro-Asiatic",
      },
      { x: "PIXENTIA SOLUTIONS", value: 335000, category: "Indo-European" },
      { x: "OPSRAMP PVT. LTD.", value: 330000, category: "Japonic" },
      { x: "MPHASIS", value: 325000, category: "Indo-European" },
      { x: "QUEST GLOBAL", value: 325000, category: "Sino-Tibetan" },
      {
        x: "MIRACLE SOFTWARE SYSTEMS",
        value: 320000,
        category: "Indo-European",
      },
      {
        x: "EXOTIC LEARNING PRIVATE LIMITED",
        value: 306000,
        category: "Indo-European",
      },
      {
        x: "NORTHERN TRUST SERVICES PRIVATE LIMITED",
        value: 306000,
        category: "Indo-European",
      },
      {
        x: "JASMIN INFOTECH PVT.LTD.",
        value: 301990,
        category: "Afro-Asiatic",
      },
      { x: "4(7)AI", value: 300000, category: "Austronesian" },
      {
        x: "ABHINAV INDUSTRIAL MARKETING",
        value: 300000,
        category: "Indo-European",
      },
      { x: "ALSTOM", value: 300000, category: "Indo-European" },
      {
        x: "APTROID TECHNOLOGIES",
        value: 300000,
        category: "Indo-European",
      },
      { x: "GLOBAL EDGE", value: 300000, category: "Indo-European" },
      {
        x: "MANJEERA ELECTRONICS",
        value: 300000,
        category: "Afro-Asiatic",
      },
      {
        x: "PROLIFICS CORPORATION",
        value: 300000,
        category: "Indo-European",
      },
      {
        x: "PRONIX IT SOLUTIONS PVT. LTD.",
        value: 300000,
        category: "Japonic",
      },
      { x: "SUTHERLAND", value: 300000, category: "Indo-European" },
      { x: "TESSOLVE", value: 300000, category: "Sino-Tibetan" },
      {
        x: "TESSOLVE SEMI CONDUCTORS",
        value: 300000,
        category: "Indo-European",
      },
      {
        x: "UTS(UNISTRING TECH SOLUTIONS PVT. LTD.)",
        value: 300000,
        category: "Indo-European",
      },
      { x: "VAYATRONICS", value: 300000, category: "Indo-European" },
      {
        x: "BORRI POWER INDIA PVT. LTD.",
        value: 290000,
        category: "Afro-Asiatic",
      },
      { x: "MUTHOOT FINANCE", value: 290000, category: "Austronesian" },
      { x: "ULTRA TECH CEMENT", value: 290000, category: "Indo-European" },
      { x: "MOVINGDNEEDLE", value: 282000, category: "Indo-European" },
      {
        x: "PROTOTECH SOLUTIONS",
        value: 280000,
        category: "Indo-European",
      },
      {
        x: "WEB SYNERGIES(INDIA)Pvt. Ltd.",
        value: 280000,
        category: "Indo-European",
      },
      { x: "JUSTDIAL", value: 276000, category: "Afro-Asiatic" },
      {
        x: "ACCION LABS INDIA PRIVATE LIMITED",
        value: 250000,
        category: "Indo-European",
      },
      { x: "ACXIOM CONSULTING", value: 250000, category: "Japonic" },
      { x: "CSS CORP", value: 250000, category: "Indo-European" },
      {
        x: "SKYGOAL INNOVA TECHNOLOGIES PRIVATE LIMITED",
        value: 250000,
        category: "Sino-Tibetan",
      },
      { x: "SPHERE", value: 250000, category: "Indo-European" },
      { x: "CADDYCODE", value: 240000, category: "Indo-European" },
      { x: "ITZ MY CHOICE", value: 240000, category: "Indo-European" },
      {
        x: "KEERATNA FINSERV PVT LTD",
        value: 240000,
        category: "Afro-Asiatic",
      },
      { x: "MILEKAL", value: 240000, category: "Austronesian" },
      { x: "MOLDTEK", value: 240000, category: "Indo-European" },
      { x: "RAAM GROUP", value: 240000, category: "Indo-European" },
      {
        x: "RASTER ENGINEERS PRIVATE LIMITED",
        value: 240000,
        category: "Indo-European",
      },
      { x: "VAYA GROUP", value: 240000, category: "Indo-European" },
      { x: "VOLTECH GROUP", value: 240000, category: "Afro-Asiatic" },
      {
        x: "CATTAIN IT LABS PVT LTD",
        value: 230000,
        category: "Indo-European",
      },
      { x: "ENMAX", value: 230000, category: "Japonic" },
      {
        x: "MY HOME CONSTRUCTIONS PVT. LTD.",
        value: 225000,
        category: "Indo-European",
      },
      { x: "RITHWIK PROJECTS", value: 225000, category: "Sino-Tibetan" },
      {
        x: "VEM TECHNOLOGIES PVT. LTD.",
        value: 225000,
        category: "Indo-European",
      },
      { x: "JMC", value: 220000, category: "Indo-European" },
      { x: "WINFO SOLUTIONS", value: 220000, category: "Indo-European" },
      { x: "POWER MECH", value: 216000, category: "Afro-Asiatic" },
      {
        x: "RITWIK PROJECTS PRIVATE LIMITED",
        value: 216000,
        category: "Austronesian",
      },
      {
        x: "SUNVIENGINEERING PRIVATE LIMITED",
        value: 200000,
        category: "Indo-European",
      },
      {
        x: "ASTORIA TECHNOLOGIES(I)PVT LTD.",
        value: 200000,
        category: "Indo-European",
      },
      { x: "EXCELACOM", value: 200000, category: "Indo-European" },
      {
        x: "KOTAK MAHINDRA BANK",
        value: 200000,
        category: "Indo-European",
      },
      { x: "Q-CONNEQT", value: 200000, category: "Afro-Asiatic" },
      { x: "VAYU GROUP", value: 200000, category: "Indo-European" },
      { x: "DATAFROND", value: 180000, category: "Japonic" },
      { x: "FUNNL", value: 180000, category: "Indo-European" },
      { x: "GROWCONTROLS", value: 180000, category: "Sino-Tibetan" },
      { x: "KARVY", value: 180000, category: "Indo-European" },
      { x: "LOKESH MACHINES", value: 180000, category: "Indo-European" },
      {
        x: "MEDHA SERVO  DRIVES PVT. LTD.",
        value: 180000,
        category: "Indo-European",
      },
      {
        x: "RVM CONSTRUCTIONS INDIA PVT. LTD.",
        value: 180000,
        category: "Afro-Asiatic",
      },
      {
        x: "SIMHO HR SERVICES  PVT. LTD.",
        value: 180000,
        category: "Austronesian",
      },
      { x: "VEE TECHNOLOGIES", value: 180000, category: "Indo-European" },
      { x: "VIJAI ELECTRICALS", value: 177000, category: "Indo-European" },
      { x: "NCC LTD.", value: 159000, category: "Indo-European" },
      {
        x: "TVS UPASANA LIMITED",
        value: 156000,
        category: "Indo-European",
      },
      { x: "STANADYNE", value: 155000, category: "Afro-Asiatic" },
      { x: "AMARRAJA", value: 150000, category: "Indo-European" },
      { x: "ISUZU", value: 150000, category: "Japonic" },
      {
        x: "MADHEES TECHNO CONSULTING PVT. LTD.",
        value: 150000,
        category: "Indo-European",
      },
      {
        x: "ALSTOM Transport India Ltd.",
        value: 150000,
        category: "Sino-Tibetan",
      },
      {
        x: "QUANINT TECHSOFT PVT. LTD.",
        value: 140000,
        category: "Indo-European",
      },
      {
        x: "SR MANUFACTURING TECHNOLOGIES",
        value: 140000,
        category: "Indo-European",
      },
      {
        x: "SUREMINDS SOLUTIONS PVT. LTD.",
        value: 140000,
        category: "Indo-European",
      },
      { x: "TURBO ENERGY", value: 140000, category: "Afro-Asiatic" },
      { x: "PROPHOENIX", value: 130000, category: "Austronesian" },
      {
        x: "CMS (CRYSTAL MANAGEMENT SERVICES)",
        value: 120000,
        category: "Indo-European",
      },
      {
        x: "CISWW Engineering India Private Limited",
        value: 120000,
        category: "Indo-European",
      },
      {
        x: "KALYANI MOTORS PVT. LTD.",
        value: 120000,
        category: "Indo-European",
      },
      { x: "TAXHELPR", value: 120000, category: "Indo-European" },
      {
        x: "VOXAI IT SOLUTIONS INDIA PVT LTD.",
        value: 120000,
        category: "Afro-Asiatic",
      },
      {
        x: "RAJ GROUPS TECHNO SOLUTIONS PVT LTD.",
        value: 96000,
        category: "Indo-European",
      },
    ];
    // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);
    //initial for colors
    var customcolor = anychart.scales.linearColor();
    //add colors
    customcolor.colors([
      "Pink",
      "green",
      "Orange",
      "DodgerBlue",
      "Violet",
      "red",
    ]);
    // set the color scale as the color scale of the chart
    chart.colorScale(customcolor);
    // set a chart title
    // set an array of angles at which the words will be laid out
    chart.angles([0, 45, -45]);
    // enable a color range
    chart.colorRange(true);
    // set the color range length
    chart.colorRange().length("90%");

    // display the word cloud chart
    chart.container("wordcloud");
    chart.draw();
  });