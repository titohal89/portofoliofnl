// 1. Memuat Data Profil
fetch('data/profile.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('nama-user').textContent = data.name;
        document.getElementById('title-user').textContent = data.title;
        document.getElementById('deskripsi-user').textContent = data.description;
        document.getElementById('lokasi-user').textContent = data.location;
        document.getElementById('email-user').textContent = data.email;
        document.getElementById('telepon-user').textContent = data.phone;
    });

// 2. Memuat Data Pengalaman Kerja
fetch('data/experience.json')
    .then(response => response.json())
    .then(data => {
        const wadah = document.getElementById('wadah-pengalaman');
        data.forEach(item => {
            // Membuat elemen kartu baru untuk setiap pengalaman
            const kartu = document.createElement('div');
            kartu.className = 'kartu-riwayat';
            
            // Menyusun teks tanggung jawab menjadi list (li)
            let listTanggungJawab = '';
            item.responsibilities.forEach(tugas => {
                listTanggungJawab += `<li>${tugas}</li>`;
            });

            kartu.innerHTML = `
                <h4>${item.company}</h4>
                <h5>${item.role} | ${item.period}</h5>
                <ul>${listTanggungJawab}</ul>
            `;
            wadah.appendChild(kartu);
        });
    });

// 3. Memuat Data Pendidikan
fetch('data/education.json')
    .then(response => response.json())
    .then(data => {
        const wadah = document.getElementById('wadah-pendidikan');
        data.forEach(item => {
            const kartu = document.createElement('div');
            kartu.className = 'kartu-riwayat';
            kartu.innerHTML = `
                <h4>${item.institution}</h4>
                <h5>${item.degree} | ${item.period}</h5>
            `;
            wadah.appendChild(kartu);
        });
    });

// 4. Memuat Data Proyek
fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
        const wadah = document.getElementById('wadah-proyek');
        data.forEach(item => {
            const kartu = document.createElement('div');
            kartu.className = 'kartu-proyek';
            kartu.innerHTML = `
                <h4>${item.title}</h4>
                <p><strong>${item.year}</strong> - ${item.description}</p>
            `;
            wadah.appendChild(kartu);
        });
    });