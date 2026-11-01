// Konfigurasi Firebase Asli
const firebaseConfig = {
    apiKey: "AIzaSyCgYxUXNFO5a7tll8CX9OtdjNolAc0SU7k",
    authDomain: "gym-progress-pic-ayong03.firebaseapp.com",
    projectId: "gym-progress-pic-ayong03",
    storageBucket: "gym-progress-pic-ayong03.firebasestorage.app",
    messagingSenderId: "467250011295",
    appId: "1:467250011295:web:74fbfc925843354583d6aa",
    measurementId: "G-LFKLYZZ629"
};

let isFirebaseInitialized = false;
let auth, db;

try {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    isFirebaseInitialized = true;
} catch (e) {
    console.log("Firebase gagal diinisialisasi, berjalan dalam mode lokal murni.", e);
}

const translations = {
    id: {
        appTitle: "Gym Progress & Body Tracker",
        appSubtitle: "Lacak transformasi & performa latihanmu",
        tabTracker: "Input & Grafik",
        tabComparison: "Before & After",
        tabHistory: "Riwayat Entri",
        tabSettings: "Pengaturan",
        statCurrentWeight: "Berat Terkini",
        statCurrentBodyFat: "% Lemak Terkini",
        statCurrentBmi: "BMI Terkini",
        statTotalChange: "Perubahan Terakhir",
        statTotalEntries: "Total Entri",
        formTitle: "Catat Progres Baru",
        labelDate: "Tanggal",
        labelBodyFat: "% Lemak Tubuh",
        labelFrontPhoto: "Foto Depan",
        labelSidePhoto: "Foto Samping Dada",
        labelBackPhoto: "Foto Belakang",
        labelNotes: "Catatan Latihan / Diet",
        btnSave: "Simpan Progres",
        calcTitle: "Kalkulator Lemak Navy",
        calcDesc: "Estimasi % lemak tubuh dengan rumus U.S. Navy.",
        calcGender: "Jenis Kelamin",
        genderMale: "Pria",
        genderFemale: "Wanita",
        calcWaist: "Perut / Pinggang (cm)",
        calcResult: "Hasil Estimasi:",
        btnCalculate: "Hitung",
        btnApplyBF: "Gunakan ke Form",
        transJourneyTitle: "Transformation Journey",
        transJourneySub: "Before & After",
        boxBefore: "BEFORE",
        boxAfter: "AFTER",
        rowDate: "DATE:",
        rowBodyFat: "BODY FAT:",
        compEntry1: "Entri 1 (Awal)",
        compEntry2: "Entri 2 (Terbaru)",
        compPose: "Pose Foto",
        btnCompare: "Bandingkan Foto",
        btnExportImage: "Ekspor Foto Perbandingan",
        chartTitle: "Analitik Grafik & Tren Progres",
        chartBfTitle: "Grafik Lemak Tubuh (%)",
        filterAll: "Semua",
        filterWeek: "7 Hari Terakhir",
        filterMonth: "30 Hari Terakhir",
        filterYear: "Tahun Ini",
        filterCustom: "Kustom",
        startDateLabel: "Mulai Tanggal",
        endDateLabel: "Sampai Tanggal",
        btnResetRange: "Reset",
        historyTitle: "Riwayat Entri",
        btnExport: "Ekspor JSON",
        btnImport: "Impor JSON",
        btnClearHistory: "Kosongkan Riwayat",
        footerText: "Gym Progress & Body Tracker • Dibangun untuk transformasi fitness Anda",
        goalCutting: "Cutting (Turun Berat)",
        goalBulking: "Bulking (Naik Berat)",
        goalProgressLabel: "Pencapaian Target",
        badgeStarter: "Starter",
        badgeConsistent: "Konsisten",
        badgePro: "Transformator",
        settingsHeaderTitle: "Pengaturan Aplikasi & Profil",
        settingsHeaderSub: "Sesuaikan profil, unit pengukuran, dan tema tampilan sesuai preferensi Anda.",
        settingsUsernameLabel: "Username / Nama Panggilan",
        settingsGenderLabel: "Jenis Kelamin",
        settingsWeightUnitLabel: "Satuan Berat",
        settingsHeightUnitLabel: "Satuan Tinggi",
        settingsThemeLabel: "Tema Tampilan",
        themeDark: "Dark Mode (Gelap)",
        themeBright: "Bright Mode (Terang)",
        btnSaveSettings: "Simpan Semua Pengaturan"
    },
    en: {
        appTitle: "Gym Progress & Body Tracker",
        appSubtitle: "Track your transformation & performance",
        tabTracker: "Input & Chart",
        tabComparison: "Before & After",
        tabHistory: "Entry History",
        tabSettings: "Settings",
        statCurrentWeight: "Current Weight",
        statCurrentBodyFat: "Current Body Fat",
        statCurrentBmi: "Current BMI",
        statTotalChange: "Latest Change",
        statTotalEntries: "Total Entries",
        formTitle: "Log New Progress",
        labelDate: "Date",
        labelBodyFat: "Body Fat %",
        labelFrontPhoto: "Front Pose",
        labelSidePhoto: "Side Chest Pose",
        labelBackPhoto: "Back Pose",
        labelNotes: "Notes (Optional)",
        btnSave: "Save Progress",
        calcTitle: "Navy Body Fat Calculator",
        calcDesc: "Estimate body fat % based on U.S. Navy formula.",
        calcGender: "Gender",
        genderMale: "Male",
        genderFemale: "Female",
        calcWaist: "Abdomen/Waist (cm)",
        calcResult: "Result:",
        btnCalculate: "Calculate",
        btnApplyBF: "Use in Form",
        transJourneyTitle: "Transformation Journey",
        transJourneySub: "Before & After",
        boxBefore: "BEFORE",
        boxAfter: "AFTER",
        rowDate: "DATE:",
        rowBodyFat: "BODY FAT:",
        compEntry1: "Entry 1 (Baseline)",
        compEntry2: "Entry 2 (Recent)",
        compPose: "Pose",
        btnCompare: "Compare Photos",
        btnExportImage: "Export Comparison Image",
        chartTitle: "Progress Analytics & Trends",
        chartBfTitle: "Body Fat Chart (%)",
        filterAll: "All",
        filterWeek: "Last 7 Days",
        filterMonth: "Last 30 Days",
        filterYear: "This Year",
        filterCustom: "Custom",
        startDateLabel: "Start Date",
        endDateLabel: "End Date",
        btnResetRange: "Reset",
        historyTitle: "Entry History",
        btnExport: "Export JSON",
        btnImport: "Import JSON",
        btnClearHistory: "Clear History",
        footerText: "Gym Progress & Built for fitness transformation",
        goalCutting: "Cutting (Lose Weight)",
        goalBulking: "Bulking (Gain Weight)",
        goalProgressLabel: "Target Progress",
        badgeStarter: "Starter",
        badgeConsistent: "Consistent",
        badgePro: "Transformer",
        settingsHeaderTitle: "App Settings & Profile",
        settingsHeaderSub: "Customize your profile, measurement units, and appearance theme.",
        settingsUsernameLabel: "Username / Nickname",
        settingsGenderLabel: "Gender",
        settingsWeightUnitLabel: "Weight Unit",
        settingsHeightUnitLabel: "Height Unit",
        settingsThemeLabel: "Appearance Theme",
        themeDark: "Dark Mode",
        themeBright: "Bright Mode",
        btnSaveSettings: "Save All Settings"
    }
};

let currentLang = 'id';
let entries = [];
let userSettings = {
    username: 'Athlete',
    gender: 'male',
    height: 169, // disimpan dalam basis cm
    weightUnit: 'kg', // 'kg' atau 'lbs'
    heightUnit: 'cm', // 'cm' atau 'in'
    theme: 'dark', // 'dark' atau 'bright'
    type: 'cutting',
    targetWeight: null
};

let currentUser = null;
let calculatedBFValue = null;
let weightChartInstance = null;
let bodyFatChartInstance = null;
let currentChartFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('entryDate');
    if (dateInput) dateInput.valueAsDate = new Date();
    
    const weightInputEl = document.getElementById('entryWeight');
    const bfInputEl = document.getElementById('entryBodyFat');
    if (weightInputEl) weightInputEl.setAttribute('step', '0.01');
    if (bfInputEl) bfInputEl.setAttribute('step', '0.01');

    if (isFirebaseInitialized) {
        auth.onAuthStateChanged(user => {
            currentUser = user;
            updateAuthUI();
            loadData();
        });
    } else {
        loadData();
        updateAuthUI();
    }
    
    updateLanguageUI();
});

function updateAuthUI() {
    const statusText = document.getElementById('authStatusText');
    const actionBtn = document.getElementById('authActionButton');
    
    if (!isFirebaseInitialized) {
        statusText.textContent = "Mode Lokal (Offline)";
        actionBtn.style.display = "none";
        return;
    }

    if (currentUser) {
        statusText.textContent = currentUser.displayName || currentUser.email;
        actionBtn.innerHTML = `<i class="fa-solid fa-right-from-bracket mr-1"></i> Logout`;
        actionBtn.className = "bg-red-500/20 text-red-400 font-bold px-2.5 py-1 rounded hover:bg-red-500/30 transition";
    } else {
        statusText.textContent = currentLang === 'id' ? "Mode Tamu (Lokal)" : "Guest Mode (Local)";
        actionBtn.innerHTML = `<i class="fa-brands fa-google mr-1"></i> Login Google`;
        actionBtn.className = "bg-gymaccent text-zinc-950 font-bold px-2.5 py-1 rounded hover:bg-green-400 transition";
    }
}

function handleAuthAction() {
    if (!isFirebaseInitialized) {
        alert("Firebase belum dikonfigurasi.");
        return;
    }

    if (currentUser) {
        auth.signOut().then(() => {
            currentUser = null;
            loadData();
            updateAuthUI();
            alert(currentLang === 'id' ? 'Berhasil keluar. Kembali ke mode lokal.' : 'Logged out successfully.');
        });
    } else {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) => {
            currentUser = result.user;
            updateAuthUI();
            loadData();
        }).catch(error => {
            console.error("Gagal login Google:", error);
            alert("Gagal login: " + error.message);
        });
    }
}

function saveAppSettings() {
    const username = document.getElementById('settingUsername').value.trim() || 'Athlete';
    const gender = document.getElementById('settingGender').value;
    let rawHeight = parseFloat(document.getElementById('settingHeight').value) || null;
    const heightUnit = document.getElementById('settingHeightUnit').value;
    const type = document.getElementById('settingGoalType').value;
    let rawTargetW = parseFloat(document.getElementById('settingTargetWeight').value) || null;
    const weightUnit = document.getElementById('settingWeightUnit').value;
    const theme = document.getElementById('settingTheme').value;

    if (rawHeight !== null && heightUnit === 'in') {
        rawHeight = rawHeight * 2.54;
    }
    if (rawTargetW !== null && weightUnit === 'lbs') {
        rawTargetW = rawTargetW / 2.20462;
    }

    userSettings = {
        username,
        gender,
        height: rawHeight,
        weightUnit,
        heightUnit,
        theme,
        type,
        targetWeight: rawTargetW
    };

    saveData().then(() => {
        applyTheme();
        renderAll();
        alert(currentLang === 'id' ? 'Pengaturan berhasil disimpan!' : 'Settings saved successfully!');
        switchTab('tracker');
    });
}

function loadSettingsToForm() {
    document.getElementById('settingUsername').value = userSettings.username || '';
    document.getElementById('settingGender').value = userSettings.gender || 'male';
    
    let displayHeight = userSettings.height;
    if (displayHeight !== null && userSettings.heightUnit === 'in') {
        displayHeight = (displayHeight / 2.54).toFixed(1);
    }
    document.getElementById('settingHeight').value = displayHeight !== null ? displayHeight : '';
    document.getElementById('settingHeightUnit').value = userSettings.heightUnit || 'cm';
    document.getElementById('settingHeightLabel').textContent = `${currentLang === 'id' ? 'Tinggi Badan' : 'Height'} (${userSettings.heightUnit})`;

    let displayTargetW = userSettings.targetWeight;
    if (displayTargetW !== null && userSettings.weightUnit === 'lbs') {
        displayTargetW = (displayTargetW * 2.20462).toFixed(2);
    }
    document.getElementById('settingTargetWeight').value = displayTargetW !== null ? displayTargetW : '';
    document.getElementById('settingWeightUnit').value = userSettings.weightUnit || 'kg';
    document.getElementById('settingTargetWeightLabel').textContent = `${currentLang === 'id' ? 'Target Berat Badan' : 'Target Weight'} (${userSettings.weightUnit})`;

    document.getElementById('settingGoalType').value = userSettings.type || 'cutting';
    document.getElementById('settingTheme').value = userSettings.theme || 'dark';

    document.getElementById('labelWeightInput').textContent = `Weight (${userSettings.weightUnit})`;
    document.getElementById('statWeightUnit').textContent = userSettings.weightUnit;
    document.getElementById('statChangeUnit').textContent = userSettings.weightUnit;
    document.getElementById('welcomeUserSub').textContent = currentLang === 'id' 
        ? `Halo, ${userSettings.username}! Lacak transformasi & performa latihanmu.` 
        : `Hello, ${userSettings.username}! Track your transformation & performance.`;
}

function applyTheme() {
    const htmlRoot = document.getElementById('htmlRoot');
    if (userSettings.theme === 'bright') {
        htmlRoot.classList.remove('dark');
    } else {
        htmlRoot.classList.add('dark');
    }
}

function switchTab(tabName) {
    ['tracker', 'comparison', 'history', 'settings'].forEach(t => {
        const content = document.getElementById(`tabContent-${t}`);
        const btn = document.getElementById(`tabBtn-${t}`);
        if (t === tabName) {
            content.classList.remove('hidden');
            btn.className = "px-4 py-2 text-xs font-bold rounded-lg bg-gymaccent text-zinc-950 transition flex items-center space-x-2";
            if (t === 'settings') {
                loadSettingsToForm();
            }
        } else {
            content.classList.add('hidden');
            btn.className = "px-4 py-2 text-xs font-bold rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-300 dark:hover:bg-zinc-700 transition flex items-center space-x-2";
        }
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    const langLabel = document.getElementById('currentLangLabel');
    if (langLabel) langLabel.textContent = currentLang.toUpperCase();
    updateLanguageUI();
    updateAuthUI();
    loadSettingsToForm();
    renderAll();
}

function updateLanguageUI() {
    const dict = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
}

function toggleGenderFields() {
    const gender = document.getElementById('calcGender').value;
    const hipContainer = document.getElementById('hipFieldContainer');
    const waistLabel = document.getElementById('waistLabel');
    if (gender === 'female') {
        if (hipContainer) hipContainer.classList.remove('hidden');
        if (waistLabel) waistLabel.textContent = currentLang === 'id' ? 'Lingkar Pinggang (cm)' : 'Abdomen/Waist (cm)';
    } else {
        if (hipContainer) hipContainer.classList.add('hidden');
        if (waistLabel) waistLabel.textContent = currentLang === 'id' ? 'Perut / Pinggang (cm)' : 'Abdomen/Waist (cm)';
    }
}

function calculateNavyBodyFat() {
    const gender = document.getElementById('calcGender').value;
    let height = parseFloat(document.getElementById('calcHeightInput').value);
    const neck = parseFloat(document.getElementById('calcNeckInput').value);
    const waist = parseFloat(document.getElementById('calcWaistInput').value);
    
    if (!height || !neck || !waist) {
        alert(currentLang === 'id' ? 'Harap isi tinggi, leher, dan lingkar perut/pinggang!' : 'Please fill height, neck, and waist!');
        return;
    }

    if (userSettings.heightUnit === 'in') {
        height = height * 2.54;
    }

    let bf = 0;
    if (gender === 'male') {
        if (waist - neck <= 0) {
            alert(currentLang === 'id' ? 'Nilai perut harus lebih besar dari leher!' : 'Abdomen must be greater than neck!');
            return;
        }
        bf = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
        const hip = parseFloat(document.getElementById('calcHipInput').value);
        if (!hip) {
            alert(currentLang === 'id' ? 'Harap isi lingkar pinggul untuk wanita!' : 'Please fill hip circumference for female!');
            return;
        }
        if (waist + hip - neck <= 0) {
            alert(currentLang === 'id' ? 'Kombinasi ukuran tidak valid!' : 'Invalid measurement combination!');
            return;
        }
        bf = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
    }

    calculatedBFValue = Math.max(1, Math.min(60, parseFloat(bf.toFixed(2))));
    document.getElementById('calcResultDisplay').textContent = calculatedBFValue + ' %';
}

function applyCalculatedBF() {
    if (calculatedBFValue !== null) {
        document.getElementById('entryBodyFat').value = calculatedBFValue;
    } else {
        alert(currentLang === 'id' ? 'Hitung terlebih dahulu lemak tubuh Anda!' : 'Please calculate body fat first!');
    }
}

function previewImage(input, previewId) {
    const previewContainer = document.getElementById(previewId);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const MAX_WIDTH = 400;
                const MAX_HEIGHT = 500;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
                } else {
                    if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
                }
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                
                const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.5);
                previewContainer.innerHTML = `<img src="${compressedDataUrl}" class="h-full w-full object-cover rounded-lg">`;
                previewContainer.dataset.base64 = compressedDataUrl;
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    const date = document.getElementById('entryDate').value;
    let rawWeight = parseFloat(document.getElementById('entryWeight').value) || null;
    const bodyFat = parseFloat(document.getElementById('entryBodyFat').value) || null;
    const notes = document.getElementById('entryNotes').value;

    if (rawWeight !== null && userSettings.weightUnit === 'lbs') {
        rawWeight = rawWeight / 2.20462;
    }

    const frontPhoto = document.getElementById('frontPreview')?.dataset?.base64 || null;
    const sidePhoto = document.getElementById('sidePreview')?.dataset?.base64 || null;
    const backPhoto = document.getElementById('backPreview')?.dataset?.base64 || null;

    const newEntry = {
        id: Date.now(),
        date,
        weight: rawWeight,
        bodyFat,
        notes,
        frontPhoto,
        sidePhoto,
        backPhoto
    };

    entries.push(newEntry);
    entries.sort((a, b) => new Date(a.date) - new Date(b.date));

    saveData().then(success => {
        if (success) {
            renderAll();
            event.target.reset();
            document.getElementById('entryDate').valueAsDate = new Date();
            
            ['frontPreview', 'sidePreview', 'backPreview'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.innerHTML = '<i class="fa-solid fa-camera text-xl"></i>';
                    delete el.dataset.base64;
                }
            });
            
            ['frontPhotoInput', 'sidePhotoInput', 'backPhotoInput'].forEach(id => {
                const inputEl = document.getElementById(id);
                if (inputEl) inputEl.value = '';
            });

            calculatedBFValue = null;
            document.getElementById('calcResultDisplay').textContent = '-- %';
            alert(currentLang === 'id' ? 'Progres berhasil disimpan!' : 'Progress saved successfully!');
        }
    });
}

function saveData() {
    return new Promise((resolve) => {
        const payload = { entries, userSettings };
        if (currentUser && isFirebaseInitialized) {
            db.collection("users").doc(currentUser.uid).set(payload).then(() => {
                resolve(true);
            }).catch(error => {
                console.error("Gagal simpan ke Firestore:", error);
                alert("Gagal menyimpan ke Cloud: " + error.message);
                entries.pop();
                resolve(false);
            });
        } else {
            try {
                localStorage.setItem('gym_tracker_data', JSON.stringify(payload));
                resolve(true);
            } catch (e) {
                alert(currentLang === 'id' ? 'Penyimpanan penuh!' : 'Storage full!');
                entries.pop();
                resolve(false);
            }
        }
    });
}

function loadData() {
    if (currentUser && isFirebaseInitialized) {
        db.collection("users").doc(currentUser.uid).get().then(doc => {
            if (doc.exists) {
                const data = doc.data();
                entries = data.entries || [];
                if (data.userSettings) userSettings = data.userSettings;
                entries.sort((a, b) => new Date(a.date) - new Date(b.date));
            } else {
                entries = [];
            }
            applyTheme();
            loadSettingsToForm();
            renderAll();
        }).catch(error => {
            console.error("Gagal memuat dari Firestore:", error);
            entries = [];
            renderAll();
        });
    } else {
        try {
            const raw = localStorage.getItem('gym_tracker_data') || localStorage.getItem('gym_tracker_entries');
            if (raw) { 
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    entries = parsed;
                } else {
                    entries = parsed.entries || [];
                    if (parsed.userSettings) userSettings = parsed.userSettings;
                    else if (parsed.userGoal) {
                        userSettings.type = parsed.userGoal.type;
                        userSettings.targetWeight = parsed.userGoal.targetWeight;
                        userSettings.height = parsed.userGoal.height;
                        userSettings.gender = parsed.userGoal.gender || 'male';
                    }
                }
                entries.sort((a, b) => new Date(a.date) - new Date(b.date));
            } else { entries = []; }
        } catch (e) {
            entries = [];
        }
        applyTheme();
        loadSettingsToForm();
        renderAll();
    }
}

function clearAllHistory() {
    const msg = currentLang === 'id' ? 'Apakah Anda yakin ingin mengosongkan seluruh riwayat?' : 'Are you sure you want to clear all history?';
    if (confirm(msg)) {
        entries = [];
        saveData().then(() => {
            renderAll();
            const compContainer = document.getElementById('comparisonResultContainer');
            if (compContainer) compContainer.classList.add('hidden');
            const exportBtn = document.getElementById('exportComparisonBtn');
            if (exportBtn) exportBtn.classList.add('hidden');
            alert(currentLang === 'id' ? 'Riwayat dikosongkan.' : 'History cleared.');
        });
    }
}

function renderAll() {
    renderStats();
    renderGoalAndBadges();
    renderHistory();
    renderComparisonDropdowns();
    renderCharts();
}

function renderStats() {
    const totalEntriesEl = document.getElementById('statEntries');
    if (totalEntriesEl) totalEntriesEl.textContent = entries.length;

    const weighted = entries.filter(e => e.weight !== null);
    const bfs = entries.filter(e => e.bodyFat !== null);

    const statWeightEl = document.getElementById('statWeight');
    const changeEl = document.getElementById('statChange');
    const statBmiEl = document.getElementById('statBmi');

    if (weighted.length > 0) {
        let curW = weighted[weighted.length - 1].weight;
        let displayCurW = curW;
        if (userSettings.weightUnit === 'lbs') {
            displayCurW = curW * 2.20462;
        }

        if (statWeightEl) statWeightEl.innerHTML = `${displayCurW.toFixed(2)} <span class="text-sm font-normal text-slate-500 dark:text-zinc-400">${userSettings.weightUnit}</span>`;

        if (userSettings.height && userSettings.height > 0) {
            const heightM = userSettings.height / 100;
            const bmiValue = curW / (heightM * heightM);
            let catText = '';
            let catColor = 'text-slate-500 dark:text-zinc-400';

            if (bmiValue < 18.5) {
                catText = '(Kurus)';
                catColor = 'text-blue-500 dark:text-blue-400';
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                catText = '(Ideal)';
                catColor = 'text-green-500 dark:text-green-400';
            } else if (bmiValue >= 25 && bmiValue < 30) {
                catText = '(Gemuk)';
                catColor = 'text-amber-500 dark:text-amber-400';
            } else {
                catText = '(Obesitas)';
                catColor = 'text-red-500 dark:text-red-400';
            }

            if (statBmiEl) statBmi.innerHTML = `${bmiValue.toFixed(1)} <span class="text-xs font-normal ${catColor}" id="statBmiCategory">${catText}</span>`;
        } else {
            if (statBmiEl) statBmi.innerHTML = `-- <span class="text-xs font-normal text-slate-500 dark:text-zinc-400">(Atur Tinggi)</span>`;
        }

        if (weighted.length > 1) {
            const latestWeight = weighted[weighted.length - 1].weight;
            const prevWeight = weighted[weighted.length - 2].weight;
            let diff = latestWeight - prevWeight;
            if (userSettings.weightUnit === 'lbs') {
                diff = diff * 2.20462;
            }
            const diffStr = diff.toFixed(2);

            if (changeEl) {
                changeEl.innerHTML = `${diff > 0 ? '+' : ''}${diffStr} <span class="text-sm font-normal text-slate-500 dark:text-zinc-400">${userSettings.weightUnit}</span>`;
                changeEl.className = `text-2xl font-bold mt-1 ${diff < 0 ? 'text-green-500 dark:text-green-400' : diff > 0 ? 'text-amber-500 dark:text-amber-400' : 'text-slate-500 dark:text-zinc-400'}`;
            }
        } else {
            if (changeEl) {
                changeEl.innerHTML = `0.00 <span class="text-sm font-normal text-slate-500 dark:text-zinc-400">${userSettings.weightUnit}</span>`;
                changeEl.className = "text-2xl font-bold mt-1 text-slate-500 dark:text-zinc-400";
            }
        }
    } else {
        if (statWeightEl) statWeightEl.innerHTML = `-- <span class="text-sm font-normal text-slate-500 dark:text-zinc-400">${userSettings.weightUnit}</span>`;
        if (statBmiEl) statBmi.innerHTML = `--`;
        if (changeEl) {
            changeEl.innerHTML = `0.00 <span class="text-sm font-normal text-slate-500 dark:text-zinc-400">${userSettings.weightUnit}</span>`;
            changeEl.className = "text-2xl font-bold mt-1 text-slate-500 dark:text-zinc-400";
        }
    }

    const statBodyFatEl = document.getElementById('statBodyFat');
    if (bfs.length > 0) {
        if (statBodyFatEl) statBodyFatEl.innerHTML = `${bfs[bfs.length - 1].bodyFat} <span class="text-sm font-normal text-slate-500 dark:text-zinc-400">%</span>`;
    } else {
        if (statBodyFatEl) statBodyFatEl.innerHTML = `-- <span class="text-sm font-normal text-slate-500 dark:text-zinc-400">%</span>`;
    }
}

function renderGoalAndBadges() {
    const badgeBadgeEl = document.getElementById('goalTypeBadge');
    const targetTextEl = document.getElementById('goalTargetText');
    const percentageValEl = document.getElementById('goalPercentageVal');
    const progressBarEl = document.getElementById('goalProgressBar');
    const badgeContainerEl = document.getElementById('badgeContainer');

    if (badgeBadgeEl) {
        const typeText = userSettings.type === 'bulking' 
            ? (currentLang === 'id' ? 'Fokus: Bulking' : 'Focus: Bulking') 
            : (currentLang === 'id' ? 'Fokus: Cutting' : 'Focus: Cutting');
        badgeBadgeEl.textContent = typeText;
    }

    const weighted = entries.filter(e => e.weight !== null);
    const currentWeight = weighted.length > 0 ? weighted[weighted.length - 1].weight : null;

    if (targetTextEl) {
        if (userSettings.targetWeight !== null) {
            let displayTargetW = userSettings.targetWeight;
            if (userSettings.weightUnit === 'lbs') {
                displayTargetW = displayTargetW * 2.20462;
            }
            targetTextEl.textContent = `Target: ${displayTargetW.toFixed(2)} ${userSettings.weightUnit}`;
        } else {
            targetTextEl.textContent = currentLang === 'id' ? 'Target: Belum diatur' : 'Target: Not set';
        }
    }

    let progressPercent = 0;
    if (currentWeight !== null && userSettings.targetWeight !== null && weighted.length > 1) {
        const startWeight = weighted[0].weight;
        const totalDistance = Math.abs(userSettings.targetWeight - startWeight);
        const currentDistance = Math.abs(userSettings.targetWeight - currentWeight);
        
        if (totalDistance === 0) {
            progressPercent = 100;
        } else {
            progressPercent = Math.max(0, Math.min(100, ((totalDistance - currentDistance) / totalDistance) * 100));
        }
    } else if (currentWeight !== null && userSettings.targetWeight !== null && weighted.length === 1) {
        progressPercent = currentWeight === userSettings.targetWeight ? 100 : 0;
    }

    if (percentageValEl) percentageValEl.textContent = `${progressPercent.toFixed(0)}%`;
    if (progressBarEl) progressBarEl.style.width = `${progressPercent}%`;

    if (badgeContainerEl) {
        let badgesHtml = `
            <div class="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 px-3 py-2 rounded-xl text-center">
                <i class="fa-solid fa-trophy text-amber-400 text-sm mb-1"></i>
                <p class="text-[10px] text-slate-500 dark:text-zinc-400 font-semibold" data-i18n="badgeStarter">Starter</p>
            </div>
        `;

        if (entries.length >= 5) {
            badgesHtml += `
                <div class="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 px-3 py-2 rounded-xl text-center">
                    <i class="fa-solid fa-fire text-orange-400 text-sm mb-1"></i>
                    <p class="text-[10px] text-slate-500 dark:text-zinc-400 font-semibold" data-i18n="badgeConsistent">Konsisten</p>
                </div>
            `;
        }

        if (progressPercent >= 100) {
            badgesHtml += `
                <div class="bg-slate-50 dark:bg-zinc-900 border border-gymaccent/50 px-3 py-2 rounded-xl text-center bg-gymaccent/10">
                    <i class="fa-solid fa-medal text-gymaccent text-sm mb-1"></i>
                    <p class="text-[10px] text-gymaccent font-bold" data-i18n="badgePro">Transformator</p>
                </div>
            `;
        }

        badgeContainerEl.innerHTML = badgesHtml;
    }
}

function renderHistory() {
    const container = document.getElementById('historyList');
    if (!container) return;
    container.innerHTML = '';

    if (entries.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-400 dark:text-zinc-500 text-center py-4">${currentLang === 'id' ? 'Belum ada data tercatat.' : 'No entries recorded yet.'}</p>`;
        return;
    }

    [...entries].reverse().forEach(entry => {
        const card = document.createElement('div');
        card.className = 'bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4';
        
        let displayW = entry.weight;
        if (displayW !== null && userSettings.weightUnit === 'lbs') {
            displayW = (displayW * 2.20462).toFixed(2);
        }

        let photosHtml = '';
        ['frontPhoto', 'sidePhoto', 'backPhoto'].forEach(pType => {
            if (entry[pType]) {
                photosHtml += `<img src="${entry[pType]}" onclick="openLightbox('${entry[pType]}')" class="h-16 w-16 object-cover rounded-lg cursor-pointer hover:opacity-85 border border-slate-300 dark:border-zinc-700">`;
            }
        });

        card.innerHTML = `
            <div class="space-y-1">
                <div class="flex items-center space-x-3">
                    <span class="text-sm font-bold text-gymaccent">${entry.date}</span>
                    <span class="text-xs text-slate-500 dark:text-zinc-400">Weight: <strong class="text-slate-800 dark:text-zinc-200">${displayW !== null ? displayW + ' ' + userSettings.weightUnit : 'N/A'}</strong></span>
                    <span class="text-xs text-slate-500 dark:text-zinc-400">Body Fat: <strong class="text-slate-800 dark:text-zinc-200">${entry.bodyFat !== null ? entry.bodyFat + '%' : 'N/A'}</strong></span>
                </div>
                ${entry.notes ? `<p class="text-xs text-slate-600 dark:text-zinc-300 bg-white dark:bg-zinc-950 p-2 rounded-lg mt-1 border border-slate-200 dark:border-zinc-800">${entry.notes}</p>` : ''}
            </div>
            <div class="flex items-center space-x-3">
                <div class="flex space-x-2">${photosHtml}</div>
                <button onclick="deleteEntry(${entry.id})" class="text-red-400 hover:text-red-300 p-2 text-sm"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        container.appendChild(card);
    });
}

function deleteEntry(id) {
    if (confirm(currentLang === 'id' ? 'Hapus entri ini?' : 'Delete this entry?')) {
        entries = entries.filter(e => e.id !== id);
        saveData().then(() => {
            renderAll();
        });
    }
}

function openLightbox(src) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    if (modal && img) {
        img.src = src;
        modal.classList.remove('hidden');
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.classList.add('hidden');
}

function renderComparisonDropdowns() {
    const s1 = document.getElementById('compDate1');
    const s2 = document.getElementById('compDate2');
    if (!s1 || !s2) return;
    
    s1.innerHTML = ''; s2.innerHTML = '';

    entries.forEach(entry => {
        let displayW = entry.weight;
        if (displayW !== null && userSettings.weightUnit === 'lbs') {
            displayW = (displayW * 2.20462).toFixed(1);
        }
        const txt = `${entry.date} (${displayW !== null ? displayW + userSettings.weightUnit : 'N/A'})`;
        s1.appendChild(new Option(txt, entry.id));
        s2.appendChild(new Option(txt, entry.id));
    });

    if (entries.length > 1) { s2.selectedIndex = entries.length - 1; }
}

function renderComparison() {
    const s1 = document.getElementById('compDate1');
    const s2 = document.getElementById('compDate2');
    if (!s1 || !s2 || !s1.value || !s2.value) {
        alert(currentLang === 'id' ? 'Minimal harus ada 2 entri data untuk perbandingan!' : 'Need at least 2 entries for comparison!');
        return;
    }

    const id1 = parseInt(s1.value);
    const id2 = parseInt(s2.value);
    const poseType = document.getElementById('compPoseType').value + 'Photo';

    const e1 = entries.find(e => e.id === id1);
    const e2 = entries.find(e => e.id === id2);

    if (!e1 || !e2) return;

    const container = document.getElementById('comparisonResultContainer');
    const exportBtn = document.getElementById('exportComparisonBtn');
    if (container) container.classList.remove('hidden');
    if (exportBtn) exportBtn.classList.remove('hidden');
    
    let w1 = e1.weight;
    let w2 = e2.weight;
    if (userSettings.weightUnit === 'lbs') {
        if (w1 !== null) w1 = w1 * 2.20462;
        if (w2 !== null) w2 = w2 * 2.20462;
    }

    document.getElementById('compDateDisplay1').textContent = e1.date;
    document.getElementById('compWeight1').textContent = w1 !== null ? w1.toFixed(2) + ' ' + userSettings.weightUnit : '--';
    document.getElementById('compBF1').textContent = e1.bodyFat !== null ? e1.bodyFat + '%' : '--';
    document.getElementById('compImageContainer1').innerHTML = e1[poseType] 
        ? `<img src="${e1[poseType]}" class="h-full w-full object-cover rounded-lg cursor-pointer" onclick="openLightbox('${e1[poseType]}')">`
        : `<span class="text-xs text-zinc-500">No photo</span>`;

    document.getElementById('compDateDisplay2').textContent = e2.date;
    document.getElementById('compWeight2').textContent = w2 !== null ? w2.toFixed(2) + ' ' + userSettings.weightUnit : '--';
    document.getElementById('compBF2').textContent = e2.bodyFat !== null ? e2.bodyFat + '%' : '--';
    document.getElementById('compImageContainer2').innerHTML = e2[poseType] 
        ? `<img src="${e2[poseType]}" class="h-full w-full object-cover rounded-lg cursor-pointer" onclick="openLightbox('${e2[poseType]}')">`
        : `<span class="text-xs text-zinc-500">No photo</span>`;

    const summaryEl = document.getElementById('comparisonDiffSummary');
    if (e1.weight !== null && e2.weight !== null) {
        let diffW = e2.weight - e1.weight;
        if (userSettings.weightUnit === 'lbs') diffW = diffW * 2.20462;
        const diffStr = diffW.toFixed(2);
        if (summaryEl) {
            summaryEl.innerHTML = `Net Weight Difference: <strong class="${diffW <= 0 ? 'text-green-500 dark:text-green-400' : 'text-amber-500 dark:text-amber-400'}">${diffW > 0 ? '+' : ''}${diffStr} ${userSettings.weightUnit}</strong>`;
        }
    } else {
        if (summaryEl) summaryEl.innerHTML = '';
    }
}

function exportComparisonImage() {
    const captureElement = document.getElementById('captureArea');
    if (!captureElement) return;

    html2canvas(captureElement, {
        backgroundColor: '#ffffff',
        scale: 3,
        useCORS: true,
        logging: false
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `Transformation_Journey_${new Date().toISOString().split('T')[0]}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
        link.remove();
    }).catch(err => {
        console.error("Gagal mengekspor gambar:", err);
        alert(currentLang === 'id' ? 'Gagal mengunduh gambar perbandingan.' : 'Failed to download comparison image.');
    });
}

function setChartFilter(filter) {
    currentChartFilter = filter;
    const customContainer = document.getElementById('customDateRangeContainer');
    
    if (filter === 'custom') {
        if (customContainer) customContainer.classList.remove('hidden');
    } else {
        if (customContainer) customContainer.classList.add('hidden');
    }

    ['all', 'week', 'month', 'year', 'custom'].forEach(f => {
        const btn = document.getElementById(`filterBtn-${f}`);
        if (btn) {
            if (f === filter) {
                btn.className = "px-3 py-1.5 rounded-lg bg-gymaccent text-zinc-950 transition";
            } else {
                btn.className = "px-3 py-1.5 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 transition";
            }
        }
    });
    renderCharts();
}

function applyCustomDateRange() {
    if (currentChartFilter === 'custom') {
        renderCharts();
    }
}

function resetDateRange() {
    document.getElementById('chartStartDate').value = '';
    document.getElementById('chartEndDate').value = '';
    renderCharts();
}

function getFilteredEntries() {
    if (entries.length === 0) return entries;
    const now = new Date();

    if (currentChartFilter === 'all') {
        return entries;
    } else if (currentChartFilter === 'week') {
        const cutoff = new Date();
        cutoff.setDate(now.getDate() - 7);
        return entries.filter(e => new Date(e.date) >= cutoff);
    } else if (currentChartFilter === 'month') {
        const cutoff = new Date();
        cutoff.setDate(now.getDate() - 30);
        return entries.filter(e => new Date(e.date) >= cutoff);
    } else if (currentChartFilter === 'year') {
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        return entries.filter(e => new Date(e.date) >= startOfYear);
    } else if (currentChartFilter === 'custom') {
        const startDateVal = document.getElementById('chartStartDate')?.value;
        const endDateVal = document.getElementById('chartEndDate')?.value;

        return entries.filter(e => {
            const entryDate = new Date(e.date);
            let valid = true;
            if (startDateVal) {
                valid = valid && (entryDate >= new Date(startDateVal));
            }
            if (endDateVal) {
                valid = valid && (entryDate <= new Date(endDateVal));
            }
            return valid;
        });
    }

    return entries;
}

function renderCharts() {
    const filteredEntries = getFilteredEntries();
    const labels = filteredEntries.map(e => e.date);
    
    const weights = filteredEntries.map(e => {
        if (e.weight === null) return null;
        if (userSettings.weightUnit === 'lbs') return parseFloat((e.weight * 2.20462).toFixed(2));
        return e.weight;
    });

    const bodyFats = filteredEntries.map(e => e.bodyFat);

    document.getElementById('chartWeightTitleLabel').textContent = `Grafik Berat Badan (${userSettings.weightUnit})`;

    const weightCanvas = document.getElementById('weightChart');
    if (weightCanvas) {
        if (weightChartInstance) weightChartInstance.destroy();
        weightChartInstance = new Chart(weightCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `Weight (${userSettings.weightUnit})`,
                    data: weights,
                    borderColor: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { grid: { color: userSettings.theme === 'bright' ? '#e2e8f0' : '#27272a' }, ticks: { color: userSettings.theme === 'bright' ? '#64748b' : '#a1a1aa' } },
                    y: { grid: { color: userSettings.theme === 'bright' ? '#e2e8f0' : '#27272a' }, ticks: { color: '#22c55e' } }
                }
            }
        });
    }

    const bfCanvas = document.getElementById('bodyFatChart');
    if (bfCanvas) {
        if (bodyFatChartInstance) bodyFatChartInstance.destroy();
        bodyFatChartInstance = new Chart(bfCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Body Fat (%)',
                    data: bodyFats,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { grid: { color: userSettings.theme === 'bright' ? '#e2e8f0' : '#27272a' }, ticks: { color: userSettings.theme === 'bright' ? '#64748b' : '#a1a1aa' } },
                    y: { grid: { color: userSettings.theme === 'bright' ? '#e2e8f0' : '#27272a' }, ticks: { color: '#3b82f6' } }
                }
            }
        });
    }
}

function exportData() {
    const payload = { entries, userSettings };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
    const anchor = document.createElement('a');
    anchor.href = dataStr;
    anchor.download = `gym_progress_backup_${new Date().toISOString().split('T')[0]}.json`;
    anchor.click();
    anchor.remove();
}

function importData(event) {
    const reader = new FileReader();
    if (event.target.files[0]) {
        reader.readAsText(event.target.files[0], "UTF-8");
        reader.onload = function(e) {
            try {
                const imported = JSON.parse(e.target.result);
                if (Array.isArray(imported)) {
                    entries = imported;
                } else if (imported.entries) {
                    entries = imported.entries;
                    if (imported.userSettings) userSettings = imported.userSettings;
                } else {
                    alert('Format JSON tidak valid.');
                    return;
                }
                entries.sort((a, b) => new Date(a.date) - new Date(b.date));
                saveData().then(() => {
                    applyTheme();
                    loadSettingsToForm();
                    renderAll();
                    alert(currentLang === 'id' ? 'Data berhasil diimpor!' : 'Data imported successfully!');
                });
            } catch (err) { alert('Gagal membaca file.'); }
        }
    }
}
