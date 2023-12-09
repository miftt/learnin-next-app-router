const getDate = () => {
    let date = new Date();
    let waktu = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    let tanggal = date.getDate();
    let bulan = date.getMonth() + 1; // Bulan dimulai dari 0, jadi kita tambahkan 1.
    let tahun = date.getFullYear();

    return `${waktu} WIB - ${tanggal}/${bulan}/${tahun}`;
}
 
export default getDate;