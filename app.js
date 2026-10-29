const translations = {
    id: {
        appTitle: "Gym Progress & Body Tracker",
        appSubtitle: "Lacak transformasi & performa latihanmu",
        tabTracker: "Input & Grafik",
        tabComparison: "Before & After",
        tabHistory: "Riwayat Entri",
        statCurrentWeight: "Berat Terkini",
        statCurrentBodyFat: "% Lemak Terkini",
        statTotalChange: "Total Perubahan",
        statTotalEntries: "Total Entri",
        formTitle: "Catat Progres Baru",
        labelDate: "Tanggal",
        labelWeight: "Berat Badan (kg)",
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
        calcHeight: "Tinggi (cm)",
        calcNeck: "Leher (cm)",
        calcWaist: "Perut / Pinggang (cm)",
        calcHip: "Pinggul (cm) [Khusus Wanita]",
        calcResult: "Hasil Estimasi:",
        btnCalculate: "Hitung",
        btnApplyBF: "Gunakan ke Form",
        transJourneyTitle: "Transformation Journey",
        transJourneySub: "Before & After",
        boxBefore: "Before",
        boxAfter: "After",
        rowDate: "DATE:",
        rowWeight: "WEIGHT:",
        rowBodyFat: "BODY FAT:",
        compEntry1: "Entri 1 (Awal)",
        compEntry2: "Entri 2 (Terbaru)",
        compPose: "Pose Foto",
        btnCompare: "Bandingkan Foto",
        btnExportImage: "Ekspor Foto Perbandingan",
        chartTitle: "Analitik Grafik & Tren Progres",
        chartWeightTitle: "Grafik Berat Badan (kg)",
        chartBfTitle: "Grafik Lemak Tubuh (%)",
        filterAll: "Semua",
        filterWeek: "Minggu",
        filterMonth: "Bulan",
        filterYear: "Tahun",
        historyTitle: "Riwayat Entri",
        btnExport: "Ekspor JSON",
        btnImport: "Impor JSON",
        btnClearHistory: "Kosongkan Riwayat",
        footerText: "Gym Progress & Body Tracker • Dibangun untuk transformasi fitness Anda"
    },
    en: {
        appTitle: "Gym Progress & Body Tracker",
        appSubtitle: "Track your transformation & performance",
        tabTracker: "Input & Chart",
        tabComparison: "Before & After",
        tabHistory: "Entry History",
        statCurrentWeight: "Current Weight",
        statCurrentBodyFat: "Current Body Fat",
        statTotalChange: "Total Change",
        statTotalEntries: "Total Entries",
        formTitle: "Log New Progress",
        labelDate: "Date",
        labelWeight: "Weight (kg) (Optional)",
        labelBodyFat: "Body Fat % (Optional)",
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
        calcHeight: "Height (cm)",
        calcNeck: "Neck (cm)",
        calcWaist: "Abdomen/Waist (cm)",
        calcHip: "Hip (cm) [Female only]",
        calcResult: "Result:",
        btnCalculate: "Calculate",
        btnApplyBF: "Use in Form",
        transJourneyTitle: "Transformation Journey",
        transJourneySub: "Before & After",
        boxBefore: "Before",
        boxAfter: "After",
        rowDate: "DATE:",
        rowWeight: "WEIGHT:",
        rowBodyFat: "BODY FAT:",
        compEntry1: "Entry 1 (Baseline)",
        compEntry2: "Entry 2 (Recent)",
        compPose: "Pose",
        btnCompare: "Compare Photos",
        btnExportImage: "Export Comparison Image",
        chartTitle: "Progress Analytics & Trends",
        chartWeightTitle: "Weight Chart (kg)",
        chartBfTitle: "Body Fat Chart (%)",
        filterAll: "All",
        filterWeek: "Week",
        filterMonth: "Month",
        filterYear: "Year",
        historyTitle: "Entry History",
        btnExport: "Export JSON",
        btnImport: "Import JSON",
        btnClearHistory: "Clear History",
        footerText: "Gym Progress & Body Tracker • Built for fitness transformation"
    }
};

let currentLang = 'id';
let entries = [];
let calculatedBFValue = null;
let weightChartInstance = null;
let bodyFatChartInstance = null;
let currentChartFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('entryDate');
    if (dateInput) dateInput.valueAsDate = new Date();
    loadFromLocalStorage();
    updateLanguageUI();
    renderAll();
});

function switchTab(tabName) {
    ['tracker', 'comparison', 'history'].forEach(t => {
        const content = document.getElementById(`tabContent-${t}`);
        const btn = document.getElementById(`tabBtn-${t}`);
        if (t === tabName) {
            content.classList.remove('hidden');
            btn.className = "px-4 py-2 text-xs font-bold rounded-lg bg-gymaccent text-zinc-950 transition flex items-center space-x-2";
        } else {
            content.classList.add('hidden');
            btn.className = "px-4 py-2 text-xs font-bold rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition flex items-center space-x-2";
        }
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    const langLabel = document.getElementById('currentLangLabel');
    if (langLabel) langLabel.textContent = currentLang.toUpperCase();
    updateLanguageUI();
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
        if (waistLabel) waistLabel.textContent = currentLang === 'id' ? 'Lingkar Pinggang (cm)' : 'Waist (cm)';
    } else {
        if (hipContainer) hipContainer.classList.add('hidden');
        if (waistLabel) waistLabel.textContent = currentLang === 'id' ? 'Perut / Pinggang (cm)' : 'Abdomen/Waist (cm)';
    }
}

function calculateNavyBodyFat() {
    const gender = document.getElementById('calcGender').value;
    const height = parseFloat(document.getElementById('calcHeightInput').value);
    const neck = parseFloat(document.getElementById('calcNeckInput').value);
    const waist = parseFloat(document.getElementById('calcWaistInput').value);
    
    if (!height || !neck || !waist) {
        alert(currentLang === 'id' ? 'Harap isi tinggi, leher, dan lingkar perut/pinggang!' : 'Please fill height, neck, and waist!');
        return;
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

    calculatedBFValue = Math.max(1, Math.min(60, parseFloat(bf.toFixed(1))));
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
    const weight = parseFloat(document.getElementById('entryWeight').value) || null;
    const bodyFat = parseFloat(document.getElementById('entryBodyFat').value) || null;
    const notes = document.getElementById('entryNotes').value;

    const frontPhoto = document.getElementById('frontPreview')?.dataset?.base64 || null;
    const sidePhoto = document.getElementById('sidePreview')?.dataset?.base64 || null;
    const backPhoto = document.getElementById('backPreview')?.dataset?.base64 || null;

    const newEntry = {
        id: Date.now(),
        date,
        weight,
        bodyFat,
        notes,
        frontPhoto,
        sidePhoto,
        backPhoto
    };

    entries.push(newEntry);
    entries.sort((a, b) => new Date(a.date) - new Date(b.date));

    if (saveToLocalStorage()) {
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
}

function saveToLocalStorage() {
    try {
        localStorage.setItem('gym_tracker_entries', JSON.stringify(entries));
        return true;
    } catch (e) {
        alert(currentLang === 'id' 
            ? 'Penyimpanan penuh! Hapus beberapa foto/entri lama atau gunakan fitur Ekspor JSON.' 
            : 'Storage full! Delete old photos/entries or use Export JSON.');
        entries.pop();
        return false;
    }
}

function loadFromLocalStorage() {
    try {
        const data = localStorage.getItem('gym_tracker_entries');
        if (data) { entries = JSON.parse(data); }
    } catch (e) {
        console.error("Gagal membaca localStorage:", e);
        entries = [];
    }
}

function clearAllHistory() {
    const msg = currentLang === 'id' 
        ? 'Apakah Anda yakin ingin mengosongkan seluruh riwayat dan foto yang tersimpan?' 
        : 'Are you sure you want to clear all history and saved photos?';
    if (confirm(msg)) {
        entries = [];
        localStorage.removeItem('gym_tracker_entries');
        renderAll();
        const compContainer = document.getElementById('comparisonResultContainer');
        if (compContainer) compContainer.classList.add('hidden');
        const exportBtn = document.getElementById('exportComparisonBtn');
        if (exportBtn) exportBtn.classList.add('hidden');
        alert(currentLang === 'id' ? 'Riwayat berhasil dikosongkan.' : 'History cleared successfully.');
    }
}

function renderAll() {
    renderStats();
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

    if (weighted.length > 0) {
        const curW = weighted[weighted.length - 1].weight;
        const startW = weighted[0].weight;
        const diff = (curW - startW).toFixed(1);
        if (statWeightEl) statWeightEl.innerHTML = `${curW} <span class="text-sm font-normal text-zinc-400">kg</span>`;
        if (changeEl) {
            changeEl.innerHTML = `${diff > 0 ? '+' : ''}${diff} <span class="text-sm font-normal text-zinc-400">kg</span>`;
            changeEl.className = `text-2xl font-bold mt-1 ${diff < 0 ? 'text-green-400' : diff > 0 ? 'text-amber-400' : 'text-zinc-400'}`;
        }
    } else {
        if (statWeightEl) statWeightEl.innerHTML = `-- <span class="text-sm font-normal text-zinc-400">kg</span>`;
        if (changeEl) changeEl.textContent = '0.0 kg';
    }

    const statBodyFatEl = document.getElementById('statBodyFat');
    if (bfs.length > 0) {
        if (statBodyFatEl) statBodyFatEl.innerHTML = `${bfs[bfs.length - 1].bodyFat} <span class="text-sm font-normal text-zinc-400">%</span>`;
    } else {
        if (statBodyFatEl) statBodyFatEl.innerHTML = `-- <span class="text-sm font-normal text-zinc-400">%</span>`;
    }
}

function renderHistory() {
    const container = document.getElementById('historyList');
    if (!container) return;
    container.innerHTML = '';

    if (entries.length === 0) {
        container.innerHTML = `<p class="text-xs text-zinc-500 text-center py-4">${currentLang === 'id' ? 'Belum ada data tercatat.' : 'No entries recorded yet.'}</p>`;
        return;
    }

    [...entries].reverse().forEach(entry => {
        const card = document.createElement('div');
        card.className = 'bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4';
        
        let photosHtml = '';
        ['frontPhoto', 'sidePhoto', 'backPhoto'].forEach(pType => {
            if (entry[pType]) {
                photosHtml += `<img src="${entry[pType]}" onclick="openLightbox('${entry[pType]}')" class="h-16 w-16 object-cover rounded-lg cursor-pointer hover:opacity-85 border border-zinc-700">`;
            }
        });

        card.innerHTML = `
            <div class="space-y-1">
                <div class="flex items-center space-x-3">
                    <span class="text-sm font-bold text-gymaccent">${entry.date}</span>
                    <span class="text-xs text-zinc-400">Weight: <strong class="text-zinc-200">${entry.weight !== null ? entry.weight + ' kg' : 'N/A'}</strong></span>
                    <span class="text-xs text-zinc-400">Body Fat: <strong class="text-zinc-200">${entry.bodyFat !== null ? entry.bodyFat + '%' : 'N/A'}</strong></span>
                </div>
                ${entry.notes ? `<p class="text-xs text-zinc-300 bg-zinc-950 p-2 rounded-lg mt-1">${entry.notes}</p>` : ''}
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
        saveToLocalStorage();
        renderAll();
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
        const txt = `${entry.date} (${entry.weight !== null ? entry.weight + 'kg' : 'N/A'})`;
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
    
    document.getElementById('compDateDisplay1').textContent = e1.date;
    document.getElementById('compWeight1').textContent = e1.weight !== null ? e1.weight + ' kg' : '--';
    document.getElementById('compBF1').textContent = e1.bodyFat !== null ? e1.bodyFat + '%' : '--';
    document.getElementById('compImageContainer1').innerHTML = e1[poseType] 
        ? `<img src="${e1[poseType]}" class="h-full w-full object-cover rounded-lg cursor-pointer" onclick="openLightbox('${e1[poseType]}')">`
        : `<span class="text-xs text-zinc-500">No photo</span>`;

    document.getElementById('compDateDisplay2').textContent = e2.date;
    document.getElementById('compWeight2').textContent = e2.weight !== null ? e2.weight + ' kg' : '--';
    document.getElementById('compBF2').textContent = e2.bodyFat !== null ? e2.bodyFat + '%' : '--';
    document.getElementById('compImageContainer2').innerHTML = e2[poseType] 
        ? `<img src="${e2[poseType]}" class="h-full w-full object-cover rounded-lg cursor-pointer" onclick="openLightbox('${e2[poseType]}')">`
        : `<span class="text-xs text-zinc-500">No photo</span>`;

    const summaryEl = document.getElementById('comparisonDiffSummary');
    if (e1.weight !== null && e2.weight !== null) {
        const diffW = (e2.weight - e1.weight).toFixed(1);
        if (summaryEl) {
            summaryEl.innerHTML = `Net Weight Difference: <strong class="${diffW <= 0 ? 'text-green-400' : 'text-amber-400'}">${diffW > 0 ? '+' : ''}${diffW} kg</strong>`;
        }
    } else {
        if (summaryEl) summaryEl.innerHTML = '';
    }
}

// Fungsi Ekspor Foto Perbandingan menjadi Gambar (PNG)
function exportComparisonImage() {
    const captureElement = document.getElementById('captureArea');
    if (!captureElement) return;

    html2canvas(captureElement, {
        backgroundColor: '#121214',
        scale: 2,
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `transformation_journey_${new Date().toISOString().split('T')[0]}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        link.remove();
    }).catch(err => {
        console.error("Gagal mengekspor gambar:", err);
        alert(currentLang === 'id' ? 'Gagal mengunduh gambar perbandingan.' : 'Failed to download comparison image.');
    });
}

function setChartFilter(filter) {
    currentChartFilter = filter;
    ['all', 'week', 'month', 'year'].forEach(f => {
        const btn = document.getElementById(`filterBtn-${f}`);
        if (btn) {
            if (f === filter) {
                btn.className = "px-3 py-1.5 rounded-lg bg-gymaccent text-zinc-950 transition";
            } else {
                btn.className = "px-3 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 transition";
            }
        }
    });
    renderCharts();
}

function getFilteredEntries() {
    if (currentChartFilter === 'all' || entries.length === 0) return entries;
    const now = new Date();
    let cutoff = new Date();

    if (currentChartFilter === 'week') {
        cutoff.setDate(now.getDate() - 7);
    } else if (currentChartFilter === 'month') {
        cutoff.setMonth(now.getMonth() - 1);
    } else if (currentChartFilter === 'year') {
        cutoff.setFullYear(now.getFullYear() - 1);
    }

    return entries.filter(e => new Date(e.date) >= cutoff);
}

function renderCharts() {
    const filteredEntries = getFilteredEntries();
    const labels = filteredEntries.map(e => e.date);
    const weights = filteredEntries.map(e => e.weight);
    const bodyFats = filteredEntries.map(e => e.bodyFat);

    // 1. Render Grafik Berat Badan
    const weightCanvas = document.getElementById('weightChart');
    if (weightCanvas) {
        if (weightChartInstance) weightChartInstance.destroy();
        weightChartInstance = new Chart(weightCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Weight (kg)',
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
                    x: { grid: { color: '#27272a' }, ticks: { color: '#a1a1aa' } },
                    y: { grid: { color: '#27272a' }, ticks: { color: '#22c55e' } }
                }
            }
        });
    }

    // 2. Render Grafik Lemak Tubuh
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
                    x: { grid: { color: '#27272a' }, ticks: { color: '#a1a1aa' } },
                    y: { grid: { color: '#27272a' }, ticks: { color: '#3b82f6' } }
                }
            }
        });
    }
}

function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(entries, null, 2));
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
                    saveToLocalStorage();
                    renderAll();
                    alert(currentLang === 'id' ? 'Data berhasil diimpor!' : 'Data imported successfully!');
                } else { alert('Format JSON tidak valid.'); }
            } catch (err) { alert('Gagal membaca file.'); }
        }
    }
}
