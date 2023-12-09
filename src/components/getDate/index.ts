/**
 * Fungsi ini mengembalikan tanggal dan waktu saat ini dalam format "HH:MM:SS WIB - DD/MM/YYYY".
 * 
 * @returns {string} String yang berisi tanggal dan waktu saat ini.
 */

const getDate = () => {
    let date = new Date();
    let waktu = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let tanggal = date.getDate();
    let bulan = date.getMonth() + 1; // Bulan dimulai dari 0, jadi kita tambahkan 1.
    let tahun = date.getFullYear();

    let allData = `${waktu} WIB - ${tanggal}/${bulan}/${tahun}`;

    return {
        allData: allData,
        waktu: waktu,
        tanggal: tanggal,
        bulan: bulan,
        tahun: tahun
    };
}
export default getDate;