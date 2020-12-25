export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: "1",
      title: "Bana birşeyler anlak canım çok sıkılıyor",
      category: "bakŞurayaYazıyorum",
    },
    { id: "2", title: "Balık Pazarı", category: "ayBenBiliyomBunu" },
    { id: "3", title: "Sarhoş atlar ülkesi", category: "hımMm" },
    {
      id: "4",
      title: "Çiçekli giyen kadınlar ülkesi",
      category: "biFilmdeGörmüştüm",
    },
    {
      id: "5",
      title: "Çiçekli giyen kadınlar ülkesi",
      category: "gezGözHoppacık",
    },
  ]);
};
