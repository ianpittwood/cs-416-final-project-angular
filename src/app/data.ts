export interface CountryYearDataPoint {
  id: number;
  country: string;
  year: number;
  gdp: number;
  gdpPerCapita: number;
  giniCoefficient: number;
  totalPopulation: number;
  incomeShareBot50: number;
  incomeShareMid40: number;
  incomeShareTop10: number;
  incomeShareNext9: number;
  incomeShareTop1: number;
}

function cleanFlattenedData(series: any) {
  return series.map((datapoint: { country: any; year: string; gdpPerCapita: string; gdp: string; totalPopulation: string; giniCoefficient: string; incomeShareBot50: string; incomeShareMid40: string; incomeShareTop10: string; incomeShareTop1: string; }) => ({
    country: datapoint.country,
    year: parseInt(datapoint.year),
    gdpPerCapita: parseFloat(datapoint.gdpPerCapita),
    gdp: parseFloat(datapoint.gdp),
    totalPopulation: parseInt(datapoint.totalPopulation),
    giniCoefficient: parseFloat(datapoint.giniCoefficient),
    incomeShareBot50: parseFloat(datapoint.incomeShareBot50) * 100,
    incomeShareMid40: parseFloat(datapoint.incomeShareMid40) * 100,
    incomeShareTop10: parseFloat(datapoint.incomeShareTop10) * 100,
    incomeShareNext9: (parseFloat(datapoint.incomeShareTop10) - parseFloat(datapoint.incomeShareTop1)) * 100,
    incomeShareTop1: parseFloat(datapoint.incomeShareTop1) * 100,
  }))
}

export interface IncomeShareDifference {
  startYear: number,
  endYear: number,
  gdpPerCapitaChange: number;
  giniCoefficientChange: number;
  incomeShareBot50Change: number;
  incomeShareMid40Change: number;
  incomeShareTop10Change: number;
  incomeShareNext9Change: number;
  incomeShareTop1Change: number;
}

export const cleanData: CountryYearDataPoint[] = cleanFlattenedData(JSON.parse(`[{"country": "Australia", "year": "1980", "gdpPerCapita": "10194.3945390856", "gdp": "149776044568.245", "totalPopulation": "14692000", "giniCoefficient": "0.418856250712", "incomeShareBot50": "0.1925", "incomeShareMid40": "0.563", "incomeShareTop10": "0.2445", "incomeShareTop1": "0.058"}, {"country": "Australia", "year": "1981", "gdpPerCapita": "11833.7432115058", "gdp": "176642284918.147", "totalPopulation": "14927000", "giniCoefficient": "0.41888756647", "incomeShareBot50": "0.1921", "incomeShareMid40": "0.5644", "incomeShareTop10": "0.2436", "incomeShareTop1": "0.0559"}, {"country": "Australia", "year": "1982", "gdpPerCapita": "12766.5222521717", "gdp": "193770274743.462", "totalPopulation": "15178000", "giniCoefficient": "0.425668327431", "incomeShareBot50": "0.188", "incomeShareMid40": "0.5638", "incomeShareTop10": "0.2482", "incomeShareTop1": "0.0561"}, {"country": "Australia", "year": "1983", "gdpPerCapita": "11518.6685192068", "gdp": "177030416471.689", "totalPopulation": "15369000", "giniCoefficient": "0.419838833521", "incomeShareBot50": "0.1913", "incomeShareMid40": "0.5649", "incomeShareTop10": "0.2438", "incomeShareTop1": "0.056"}, {"country": "Australia", "year": "1984", "gdpPerCapita": "12431.9458488308", "gdp": "193242166274.226", "totalPopulation": "15544000", "giniCoefficient": "0.42165817997", "incomeShareBot50": "0.1916", "incomeShareMid40": "0.5602", "incomeShareTop10": "0.2482", "incomeShareTop1": "0.0599"}, {"country": "Australia", "year": "1985", "gdpPerCapita": "11437.7131376782", "gdp": "180235483623.533", "totalPopulation": "15758000", "giniCoefficient": "0.426777846437", "incomeShareBot50": "0.1891", "incomeShareMid40": "0.5578", "incomeShareTop10": "0.2531", "incomeShareTop1": "0.0633"}, {"country": "Australia", "year": "1986", "gdpPerCapita": "11364.2394626146", "gdp": "182036933407.946", "totalPopulation": "16018400", "giniCoefficient": "0.434399536591", "incomeShareBot50": "0.1854", "incomeShareMid40": "0.554", "incomeShareTop10": "0.2605", "incomeShareTop1": "0.0675"}, {"country": "Australia", "year": "1987", "gdpPerCapita": "11624.6209607028", "gdp": "189061672842.774", "totalPopulation": "16263900", "giniCoefficient": "0.449974135076", "incomeShareBot50": "0.1786", "incomeShareMid40": "0.5435", "incomeShareTop10": "0.2779", "incomeShareTop1": "0.0796"}, {"country": "Australia", "year": "1988", "gdpPerCapita": "14254.5135644484", "gdp": "235658469150.175", "totalPopulation": "16532200", "giniCoefficient": "0.462661668619", "incomeShareBot50": "0.1745", "incomeShareMid40": "0.5307", "incomeShareTop10": "0.2948", "incomeShareTop1": "0.0981"}, {"country": "Australia", "year": "1989", "gdpPerCapita": "17798.5563713427", "gdp": "299272046250.305", "totalPopulation": "16814400", "giniCoefficient": "0.443066348603", "incomeShareBot50": "0.1832", "incomeShareMid40": "0.5432", "incomeShareTop10": "0.2736", "incomeShareTop1": "0.0804"}, {"country": "Australia", "year": "1990", "gdpPerCapita": "18211.5000581403", "gdp": "310781069642.17", "totalPopulation": "17065100", "giniCoefficient": "0.438551129321", "incomeShareBot50": "0.1845", "incomeShareMid40": "0.5485", "incomeShareTop10": "0.2671", "incomeShareTop1": "0.075"}, {"country": "Australia", "year": "1991", "gdpPerCapita": "18821.7952597366", "gdp": "325315909269.288", "totalPopulation": "17284000", "giniCoefficient": "0.446410976404", "incomeShareBot50": "0.1794", "incomeShareMid40": "0.5483", "incomeShareTop10": "0.2723", "incomeShareTop1": "0.0735"}, {"country": "Australia", "year": "1992", "gdpPerCapita": "18570.1204617916", "gdp": "324884257479.043", "totalPopulation": "17495000", "giniCoefficient": "0.449295879112", "incomeShareBot50": "0.1785", "incomeShareMid40": "0.5452", "incomeShareTop10": "0.2763", "incomeShareTop1": "0.0766"}, {"country": "Australia", "year": "1993", "gdpPerCapita": "17634.534752009", "gdp": "311549325463.744", "totalPopulation": "17667000", "giniCoefficient": "0.453554372841", "incomeShareBot50": "0.1771", "incomeShareMid40": "0.541", "incomeShareTop10": "0.282", "incomeShareTop1": "0.0817"}, {"country": "Australia", "year": "1994", "gdpPerCapita": "18046.1364806876", "gdp": "322213766862.677", "totalPopulation": "17855000", "giniCoefficient": "0.45730202825", "incomeShareBot50": "0.1756", "incomeShareMid40": "0.5379", "incomeShareTop10": "0.2865", "incomeShareTop1": "0.0857"}, {"country": "Australia", "year": "1995", "gdpPerCapita": "20319.6306283956", "gdp": "367216364716.365", "totalPopulation": "18072000", "giniCoefficient": "0.45337881012", "incomeShareBot50": "0.1773", "incomeShareMid40": "0.5407", "incomeShareTop10": "0.282", "incomeShareTop1": "0.0841"}, {"country": "Australia", "year": "1996", "gdpPerCapita": "21861.32550987", "gdp": "400302731411.229", "totalPopulation": "18311000", "giniCoefficient": "0.449091013033", "incomeShareBot50": "0.1798", "incomeShareMid40": "0.5416", "incomeShareTop10": "0.2786", "incomeShareTop1": "0.0827"}, {"country": "Australia", "year": "1997", "gdpPerCapita": "23468.5968306374", "gdp": "434568007512.913", "totalPopulation": "18517000", "giniCoefficient": "0.457840540753", "incomeShareBot50": "0.1753", "incomeShareMid40": "0.5377", "incomeShareTop10": "0.287", "incomeShareTop1": "0.0869"}, {"country": "Australia", "year": "1998", "gdpPerCapita": "21318.9641694318", "gdp": "398899138574.239", "totalPopulation": "18711000", "giniCoefficient": "0.459553349849", "incomeShareBot50": "0.1749", "incomeShareMid40": "0.5356", "incomeShareTop10": "0.2895", "incomeShareTop1": "0.09"}, {"country": "Australia", "year": "1999", "gdpPerCapita": "20533.035061907", "gdp": "388608221581.652", "totalPopulation": "18926000", "giniCoefficient": "0.470742635343", "incomeShareBot50": "0.1699", "incomeShareMid40": "0.5286", "incomeShareTop10": "0.3015", "incomeShareTop1": "0.1001"}, {"country": "Australia", "year": "2000", "gdpPerCapita": "21679.2478424147", "gdp": "415222633925.768", "totalPopulation": "19153000", "giniCoefficient": "0.474773771329", "incomeShareBot50": "0.1687", "incomeShareMid40": "0.5242", "incomeShareTop10": "0.3071", "incomeShareTop1": "0.1059"}, {"country": "Australia", "year": "2001", "gdpPerCapita": "19490.8611097303", "gdp": "378376086723.194", "totalPopulation": "19413000", "giniCoefficient": "0.461498105199", "incomeShareBot50": "0.1748", "incomeShareMid40": "0.5319", "incomeShareTop10": "0.2933", "incomeShareTop1": "0.0965"}, {"country": "Australia", "year": "2002", "gdpPerCapita": "20082.4832672749", "gdp": "394648911678.527", "totalPopulation": "19651400", "giniCoefficient": "0.469180907194", "incomeShareBot50": "0.1713", "incomeShareMid40": "0.5271", "incomeShareTop10": "0.3016", "incomeShareTop1": "0.1016"}, {"country": "Australia", "year": "2003", "gdpPerCapita": "23447.0310006717", "gdp": "466488060570.763", "totalPopulation": "19895400", "giniCoefficient": "0.468473879523", "incomeShareBot50": "0.1726", "incomeShareMid40": "0.5246", "incomeShareTop10": "0.3028", "incomeShareTop1": "0.1069"}, {"country": "Australia", "year": "2004", "gdpPerCapita": "30430.6764374443", "gdp": "612490396927.017", "totalPopulation": "20127400", "giniCoefficient": "0.471314952852", "incomeShareBot50": "0.1717", "incomeShareMid40": "0.5217", "incomeShareTop10": "0.3066", "incomeShareTop1": "0.1116"}, {"country": "Australia", "year": "2005", "gdpPerCapita": "33999.2428575835", "gdp": "693407758231.845", "totalPopulation": "20394800", "giniCoefficient": "0.477910055357", "incomeShareBot50": "0.1679", "incomeShareMid40": "0.5203", "incomeShareTop10": "0.3118", "incomeShareTop1": "0.1124"}, {"country": "Australia", "year": "2006", "gdpPerCapita": "36044.9228108485", "gdp": "746054207846.661", "totalPopulation": "20697900", "giniCoefficient": "0.490074215437", "incomeShareBot50": "0.1627", "incomeShareMid40": "0.5118", "incomeShareTop10": "0.3255", "incomeShareTop1": "0.1239"}, {"country": "Australia", "year": "2007", "gdpPerCapita": "40960.0544948199", "gdp": "853099630996.31", "totalPopulation": "20827600", "giniCoefficient": "0.479942848656", "incomeShareBot50": "0.1675", "incomeShareMid40": "0.5175", "incomeShareTop10": "0.315", "incomeShareTop1": "0.1191"}, {"country": "Australia", "year": "2008", "gdpPerCapita": "49601.6567082178", "gdp": "1053995523724.26", "totalPopulation": "21249200", "giniCoefficient": "0.463989231719", "incomeShareBot50": "0.1746", "incomeShareMid40": "0.5277", "incomeShareTop10": "0.2977", "incomeShareTop1": "0.1061"}, {"country": "Australia", "year": "2009", "gdpPerCapita": "42772.3591664498", "gdp": "927805183330.879", "totalPopulation": "21691700", "giniCoefficient": "0.472454769776", "incomeShareBot50": "0.174", "incomeShareMid40": "0.5141", "incomeShareTop10": "0.3119", "incomeShareTop1": "0.1127"}, {"country": "Australia", "year": "2010", "gdpPerCapita": "52022.1255961876", "gdp": "1146138465603.81", "totalPopulation": "22031750", "giniCoefficient": "0.475654493893", "incomeShareBot50": "0.1718", "incomeShareMid40": "0.5145", "incomeShareTop10": "0.3137", "incomeShareTop1": "0.1149"}, {"country": "Australia", "year": "2011", "gdpPerCapita": "62517.8337471503", "gdp": "1396649906339.35", "totalPopulation": "22340024", "giniCoefficient": "0.467749830673", "incomeShareBot50": "0.1758", "incomeShareMid40": "0.5183", "incomeShareTop10": "0.3059", "incomeShareTop1": "0.1094"}, {"country": "Australia", "year": "2012", "gdpPerCapita": "68012.1479005934", "gdp": "1546151783872.96", "totalPopulation": "22733465", "giniCoefficient": "0.480094328803", "incomeShareBot50": "0.1697", "incomeShareMid40": "0.5121", "incomeShareTop10": "0.3182", "incomeShareTop1": "0.1165"}, {"country": "Australia", "year": "2013", "gdpPerCapita": "68150.1070413215", "gdp": "1576184467015.49", "totalPopulation": "23128129", "giniCoefficient": "0.492554035246", "incomeShareBot50": "0.1626", "incomeShareMid40": "0.5081", "incomeShareTop10": "0.3293", "incomeShareTop1": "0.1248"}, {"country": "Australia", "year": "2014", "gdpPerCapita": "62510.7911705641", "gdp": "1467483705131.74", "totalPopulation": "23475686", "giniCoefficient": "0.490328356007", "incomeShareBot50": "0.1635", "incomeShareMid40": "0.5095", "incomeShareTop10": "0.327", "incomeShareTop1": "0.119"}, {"country": "Australia", "year": "2015", "gdpPerCapita": "56755.7217124249", "gdp": "1351693984524.5", "totalPopulation": "23815995", "giniCoefficient": "0.492733753606", "incomeShareBot50": "0.1615", "incomeShareMid40": "0.5099", "incomeShareTop10": "0.3286", "incomeShareTop1": "0.118"}, {"country": "Australia", "year": "2016", "gdpPerCapita": "49971.131456129", "gdp": "1208846993739.99", "totalPopulation": "24190907", "giniCoefficient": "0.490828647729", "incomeShareBot50": "0.1621", "incomeShareMid40": "0.5128", "incomeShareTop10": "0.3251", "incomeShareTop1": "0.1144"}, {"country": "Australia", "year": "2017", "gdpPerCapita": "54027.9668184568", "gdp": "1329188475752.32", "totalPopulation": "24601860", "giniCoefficient": "0.496570442791", "incomeShareBot50": "0.1616", "incomeShareMid40": "0.5028", "incomeShareTop10": "0.3356", "incomeShareTop1": "0.128"}, {"country": "Australia", "year": "2018", "gdpPerCapita": "57354.9640455891", "gdp": "1432881172002.17", "totalPopulation": "24982688", "giniCoefficient": "0.497065411737", "incomeShareBot50": "0.1617", "incomeShareMid40": "0.5017", "incomeShareTop10": "0.3366", "incomeShareTop1": "0.1292"}, {"country": "Australia", "year": "2019", "gdpPerCapita": "55057.2046960666", "gdp": "1396567014733.23", "totalPopulation": "25365745", "giniCoefficient": "0.496759734183", "incomeShareBot50": "0.1616", "incomeShareMid40": "0.5024", "incomeShareTop10": "0.336", "incomeShareTop1": "0.1285"}, {"country": "European Union", "year": "1980", "gdpPerCapita": "8098.83795452648", "gdp": "3303320317528.69", "totalPopulation": "407875838", "giniCoefficient": "0.409615026948", "incomeShareBot50": "0.2256", "incomeShareMid40": "0.4782", "incomeShareTop10": "0.2961", "incomeShareTop1": "0.075"}, {"country": "European Union", "year": "1981", "gdpPerCapita": "7032.31498690381", "gdp": "2880098041640.39", "totalPopulation": "409551911", "giniCoefficient": "0.409841155513", "incomeShareBot50": "0.2245", "incomeShareMid40": "0.4806", "incomeShareTop10": "0.2949", "incomeShareTop1": "0.0741"}, {"country": "European Union", "year": "1982", "gdpPerCapita": "6759.56789614031", "gdp": "2777476760501.85", "totalPopulation": "410895608", "giniCoefficient": "0.411469117714", "incomeShareBot50": "0.2232", "incomeShareMid40": "0.4817", "incomeShareTop10": "0.2951", "incomeShareTop1": "0.074"}, {"country": "European Union", "year": "1983", "gdpPerCapita": "6559.06875810229", "gdp": "2702168573595.59", "totalPopulation": "411974424", "giniCoefficient": "0.409494890204", "incomeShareBot50": "0.2247", "incomeShareMid40": "0.4811", "incomeShareTop10": "0.2942", "incomeShareTop1": "0.073"}, {"country": "European Union", "year": "1984", "gdpPerCapita": "6304.9077294043", "gdp": "2603493877486.03", "totalPopulation": "412931321", "giniCoefficient": "0.410634028967", "incomeShareBot50": "0.2244", "incomeShareMid40": "0.4792", "incomeShareTop10": "0.2964", "incomeShareTop1": "0.074"}, {"country": "European Union", "year": "1985", "gdpPerCapita": "6469.20558686113", "gdp": "2677762681469.49", "totalPopulation": "413924499", "giniCoefficient": "0.412261180109", "incomeShareBot50": "0.2236", "incomeShareMid40": "0.4784", "incomeShareTop10": "0.298", "incomeShareTop1": "0.0764"}, {"country": "European Union", "year": "1986", "gdpPerCapita": "9020.49557789858", "gdp": "3744194533013.71", "totalPopulation": "415076367", "giniCoefficient": "0.413803021348", "incomeShareBot50": "0.2231", "incomeShareMid40": "0.476", "incomeShareTop10": "0.3009", "incomeShareTop1": "0.0786"}, {"country": "European Union", "year": "1987", "gdpPerCapita": "11125.1993132683", "gdp": "4631440977855.92", "totalPopulation": "416301843", "giniCoefficient": "0.416958566369", "incomeShareBot50": "0.2221", "incomeShareMid40": "0.4729", "incomeShareTop10": "0.3051", "incomeShareTop1": "0.081"}, {"country": "European Union", "year": "1988", "gdpPerCapita": "12173.9984450297", "gdp": "5084507532565.94", "totalPopulation": "417653046", "giniCoefficient": "0.419711037814", "incomeShareBot50": "0.2219", "incomeShareMid40": "0.4673", "incomeShareTop10": "0.3108", "incomeShareTop1": "0.085"}, {"country": "European Union", "year": "1989", "gdpPerCapita": "12393.7989231223", "gdp": "5193908218847.69", "totalPopulation": "419073139", "giniCoefficient": "0.425894607783", "incomeShareBot50": "0.2176", "incomeShareMid40": "0.4683", "incomeShareTop10": "0.3141", "incomeShareTop1": "0.0863"}, {"country": "European Union", "year": "1990", "gdpPerCapita": "15455.6942014262", "gdp": "6498779370971.59", "totalPopulation": "420477999", "giniCoefficient": "0.437527472488", "incomeShareBot50": "0.2083", "incomeShareMid40": "0.4722", "incomeShareTop10": "0.3194", "incomeShareTop1": "0.0854"}, {"country": "European Union", "year": "1991", "gdpPerCapita": "15973.1277894631", "gdp": "6736355488676.72", "totalPopulation": "421730520", "giniCoefficient": "0.445724923219", "incomeShareBot50": "0.2019", "incomeShareMid40": "0.4762", "incomeShareTop10": "0.3219", "incomeShareTop1": "0.0859"}, {"country": "European Union", "year": "1992", "gdpPerCapita": "17511.3640790348", "gdp": "7406674670074.83", "totalPopulation": "422963890", "giniCoefficient": "0.449119786284", "incomeShareBot50": "0.1991", "incomeShareMid40": "0.4781", "incomeShareTop10": "0.3228", "incomeShareTop1": "0.0853"}, {"country": "European Union", "year": "1993", "gdpPerCapita": "15934.1815458506", "gdp": "6761528507186.29", "totalPopulation": "424341124", "giniCoefficient": "0.453346089102", "incomeShareBot50": "0.1963", "incomeShareMid40": "0.4788", "incomeShareTop10": "0.325", "incomeShareTop1": "0.086"}, {"country": "European Union", "year": "1994", "gdpPerCapita": "16836.7532746938", "gdp": "7162340127732.37", "totalPopulation": "425399126", "giniCoefficient": "0.456487091339", "incomeShareBot50": "0.1949", "incomeShareMid40": "0.4771", "incomeShareTop10": "0.3279", "incomeShareTop1": "0.0893"}, {"country": "European Union", "year": "1995", "gdpPerCapita": "19466.249482628", "gdp": "8296580858229.3", "totalPopulation": "426203356", "giniCoefficient": "0.457613234652", "incomeShareBot50": "0.1945", "incomeShareMid40": "0.4758", "incomeShareTop10": "0.3297", "incomeShareTop1": "0.0905"}, {"country": "European Union", "year": "1996", "gdpPerCapita": "19752.2054496772", "gdp": "8432154504294.31", "totalPopulation": "426896861", "giniCoefficient": "0.461029890461", "incomeShareBot50": "0.1933", "incomeShareMid40": "0.4722", "incomeShareTop10": "0.3344", "incomeShareTop1": "0.0949"}, {"country": "European Union", "year": "1997", "gdpPerCapita": "18088.8205947019", "gdp": "7733659047681.07", "totalPopulation": "427538048", "giniCoefficient": "0.461986802727", "incomeShareBot50": "0.1934", "incomeShareMid40": "0.4707", "incomeShareTop10": "0.336", "incomeShareTop1": "0.0967"}, {"country": "European Union", "year": "1998", "gdpPerCapita": "18615.5999752948", "gdp": "7969522029548.67", "totalPopulation": "428109867", "giniCoefficient": "0.464712063176", "incomeShareBot50": "0.1925", "incomeShareMid40": "0.4675", "incomeShareTop10": "0.34", "incomeShareTop1": "0.0998"}, {"country": "European Union", "year": "1999", "gdpPerCapita": "18477.3173514869", "gdp": "7923359820054.08", "totalPopulation": "428815486", "giniCoefficient": "0.467902321751", "incomeShareBot50": "0.1906", "incomeShareMid40": "0.4675", "incomeShareTop10": "0.3419", "incomeShareTop1": "0.0985"}, {"country": "European Union", "year": "2000", "gdpPerCapita": "16909.9161200755", "gdp": "7259910985967.59", "totalPopulation": "429328622", "giniCoefficient": "0.46783532948", "incomeShareBot50": "0.1909", "incomeShareMid40": "0.4666", "incomeShareTop10": "0.3426", "incomeShareTop1": "0.0987"}, {"country": "European Union", "year": "2001", "gdpPerCapita": "17185.0466880308", "gdp": "7387776438160.3", "totalPopulation": "429895628", "giniCoefficient": "0.46792284728", "incomeShareBot50": "0.1912", "incomeShareMid40": "0.4654", "incomeShareTop10": "0.3434", "incomeShareTop1": "0.099"}, {"country": "European Union", "year": "2002", "gdpPerCapita": "18682.1188435301", "gdp": "8049787741385.65", "totalPopulation": "430881947", "giniCoefficient": "0.467599939881", "incomeShareBot50": "0.1913", "incomeShareMid40": "0.4659", "incomeShareTop10": "0.3429", "incomeShareTop1": "0.0988"}, {"country": "European Union", "year": "2003", "gdpPerCapita": "22922.6940278688", "gdp": "9912138102011.71", "totalPopulation": "432415932", "giniCoefficient": "0.467382382438", "incomeShareBot50": "0.1918", "incomeShareMid40": "0.4652", "incomeShareTop10": "0.343", "incomeShareTop1": "0.0998"}, {"country": "European Union", "year": "2004", "gdpPerCapita": "26263.8824135453", "gdp": "11399581931162.5", "totalPopulation": "434040244", "giniCoefficient": "0.468713590054", "incomeShareBot50": "0.1917", "incomeShareMid40": "0.4621", "incomeShareTop10": "0.3461", "incomeShareTop1": "0.1029"}, {"country": "European Union", "year": "2005", "gdpPerCapita": "27333.2032218823", "gdp": "11905849931800.6", "totalPopulation": "435581949", "giniCoefficient": "0.473109234248", "incomeShareBot50": "0.1904", "incomeShareMid40": "0.4581", "incomeShareTop10": "0.3516", "incomeShareTop1": "0.1091"}, {"country": "European Union", "year": "2006", "gdpPerCapita": "29070.0100458014", "gdp": "12703537558145.6", "totalPopulation": "436998045", "giniCoefficient": "0.473261970963", "incomeShareBot50": "0.191", "incomeShareMid40": "0.4553", "incomeShareTop10": "0.3537", "incomeShareTop1": "0.1107"}, {"country": "European Union", "year": "2007", "gdpPerCapita": "33551.4089301725", "gdp": "14711232490704.2", "totalPopulation": "438468397", "giniCoefficient": "0.477709080503", "incomeShareBot50": "0.1899", "incomeShareMid40": "0.4495", "incomeShareTop10": "0.3606", "incomeShareTop1": "0.1167"}, {"country": "European Union", "year": "2008", "gdpPerCapita": "36913.8351135788", "gdp": "16237535014345.5", "totalPopulation": "439876674", "giniCoefficient": "0.470779393131", "incomeShareBot50": "0.1937", "incomeShareMid40": "0.4528", "incomeShareTop10": "0.3536", "incomeShareTop1": "0.1133"}, {"country": "European Union", "year": "2009", "gdpPerCapita": "33361.8319328814", "gdp": "14709825573177.6", "totalPopulation": "440917801", "giniCoefficient": "0.470226820533", "incomeShareBot50": "0.1933", "incomeShareMid40": "0.4552", "incomeShareTop10": "0.3515", "incomeShareTop1": "0.1086"}, {"country": "European Union", "year": "2010", "gdpPerCapita": "32934.0387484821", "gdp": "14541445664320.9", "totalPopulation": "441532415", "giniCoefficient": "0.46748008547", "incomeShareBot50": "0.1947", "incomeShareMid40": "0.4571", "incomeShareTop10": "0.3482", "incomeShareTop1": "0.1072"}, {"country": "European Union", "year": "2011", "gdpPerCapita": "35709.5307447733", "gdp": "15738868154361.8", "totalPopulation": "440746989", "giniCoefficient": "0.468418874656", "incomeShareBot50": "0.1946", "incomeShareMid40": "0.4562", "incomeShareTop10": "0.3493", "incomeShareTop1": "0.1087"}, {"country": "European Union", "year": "2012", "gdpPerCapita": "33150.8322180823", "gdp": "14632642649230.2", "totalPopulation": "441395937", "giniCoefficient": "0.467614655606", "incomeShareBot50": "0.1946", "incomeShareMid40": "0.4581", "incomeShareTop10": "0.3473", "incomeShareTop1": "0.106"}, {"country": "European Union", "year": "2013", "gdpPerCapita": "34560.522730591", "gdp": "15291976140967", "totalPopulation": "442469469", "giniCoefficient": "0.473612875551", "incomeShareBot50": "0.1916", "incomeShareMid40": "0.4555", "incomeShareTop10": "0.3529", "incomeShareTop1": "0.108"}, {"country": "European Union", "year": "2014", "gdpPerCapita": "35239.1751006679", "gdp": "15631276120897.1", "totalPopulation": "443576675", "giniCoefficient": "0.474289857136", "incomeShareBot50": "0.1919", "incomeShareMid40": "0.4528", "incomeShareTop10": "0.3553", "incomeShareTop1": "0.1113"}, {"country": "European Union", "year": "2015", "gdpPerCapita": "30466.8095041831", "gdp": "13543830082660.1", "totalPopulation": "444543761", "giniCoefficient": "0.472874979506", "incomeShareBot50": "0.1929", "incomeShareMid40": "0.4525", "incomeShareTop10": "0.3546", "incomeShareTop1": "0.1111"}, {"country": "European Union", "year": "2016", "gdpPerCapita": "31164.5950379633", "gdp": "13883444699831.6", "totalPopulation": "445487730", "giniCoefficient": "0.469154556444", "incomeShareBot50": "0.196", "incomeShareMid40": "0.4503", "incomeShareTop10": "0.3537", "incomeShareTop1": "0.1119"}, {"country": "European Union", "year": "2017", "gdpPerCapita": "33008.5041400146", "gdp": "14727943783142", "totalPopulation": "446186344", "giniCoefficient": "0.46810970007", "incomeShareBot50": "0.1977", "incomeShareMid40": "0.4468", "incomeShareTop10": "0.3555", "incomeShareTop1": "0.1135"}, {"country": "European Union", "year": "2018", "gdpPerCapita": "35703.6895347268", "gdp": "15956518442929.4", "totalPopulation": "446915113", "giniCoefficient": "0.463939175993", "incomeShareBot50": "0.2", "incomeShareMid40": "0.4484", "incomeShareTop10": "0.3516", "incomeShareTop1": "0.1108"}, {"country": "European Union", "year": "2019", "gdpPerCapita": "34960.0156237147", "gdp": "15633997955351.1", "totalPopulation": "447196538", "giniCoefficient": "0.463006358315", "incomeShareBot50": "0.2008", "incomeShareMid40": "0.4477", "incomeShareTop10": "0.3515", "incomeShareTop1": "0.1118"}, {"country": "Argentina", "year": "1980", "gdpPerCapita": "2758.83481652658", "gdp": "76961923741.9479", "totalPopulation": "27896532", "giniCoefficient": "0.626312147664", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1981", "gdpPerCapita": "2776.32208825139", "gdp": "78676842366.4213", "totalPopulation": "28338514", "giniCoefficient": "0.626312148828", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1982", "gdpPerCapita": "2927.89735685135", "gdp": "84307486836.724", "totalPopulation": "28794550", "giniCoefficient": "0.626312133461", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1983", "gdpPerCapita": "3553.37750879684", "gdp": "103979106777.911", "totalPopulation": "29262049", "giniCoefficient": "0.626312103543", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1984", "gdpPerCapita": "2659.70824247007", "gdp": "79092001998.032", "totalPopulation": "29737097", "giniCoefficient": "0.626312187071", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1985", "gdpPerCapita": "2926.12648531698", "gdp": "88416668900.2596", "totalPopulation": "30216284", "giniCoefficient": "0.626312194288", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1986", "gdpPerCapita": "3613.62170927636", "gdp": "110934442762.694", "totalPopulation": "30698964", "giniCoefficient": "0.626312105405", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1987", "gdpPerCapita": "3562.87605875248", "gdp": "111106191358.197", "totalPopulation": "31184411", "giniCoefficient": "0.626312148828", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1988", "gdpPerCapita": "3985.19246874962", "gdp": "126206817196.091", "totalPopulation": "31668939", "giniCoefficient": "0.62631217345", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1989", "gdpPerCapita": "2383.86747065533", "gdp": "76636898036.4712", "totalPopulation": "32148137", "giniCoefficient": "0.626312091668", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1990", "gdpPerCapita": "4333.48337168025", "gdp": "141352368714.691", "totalPopulation": "32618648", "giniCoefficient": "0.626312161168", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1991", "gdpPerCapita": "5735.3599805848", "gdp": "189719984268.485", "totalPopulation": "33079002", "giniCoefficient": "0.626312061808", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1992", "gdpPerCapita": "6823.53883710424", "gdp": "228788617201.696", "totalPopulation": "33529320", "giniCoefficient": "0.626312197548", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1993", "gdpPerCapita": "6969.11972904571", "gdp": "236741715015.015", "totalPopulation": "33970103", "giniCoefficient": "0.626312161168", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1994", "gdpPerCapita": "7483.14033425721", "gdp": "257440000000", "totalPopulation": "34402669", "giniCoefficient": "0.626312187071", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1995", "gdpPerCapita": "7408.70866363112", "gdp": "258031750000", "totalPopulation": "34828168", "giniCoefficient": "0.626312163264", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1996", "gdpPerCapita": "7721.35410460355", "gdp": "272149750000", "totalPopulation": "35246376", "giniCoefficient": "0.626312102611", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1997", "gdpPerCapita": "8213.12512693705", "gdp": "292859000000", "totalPopulation": "35657438", "giniCoefficient": "0.626312147664", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1998", "gdpPerCapita": "8289.5075682025", "gdp": "298948250000", "totalPopulation": "36063451", "giniCoefficient": "0.626312103543", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "1999", "gdpPerCapita": "7774.73620280001", "gdp": "283523000000", "totalPopulation": "36467218", "giniCoefficient": "0.626312061808", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "2000", "gdpPerCapita": "7708.09911454041", "gdp": "284203750000", "totalPopulation": "36870796", "giniCoefficient": "0.626312065766", "incomeShareBot50": "0.1077", "incomeShareMid40": "0.4022", "incomeShareTop10": "0.49", "incomeShareTop1": "0.1795"}, {"country": "Argentina", "year": "2001", "gdpPerCapita": "7208.37311355372", "gdp": "268696750000", "totalPopulation": "37275644", "giniCoefficient": "0.612790076633", "incomeShareBot50": "0.1093", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.4694", "incomeShareTop1": "0.1502"}, {"country": "Argentina", "year": "2002", "gdpPerCapita": "2593.404563368", "gdp": "97724004251.8602", "totalPopulation": "37681743", "giniCoefficient": "0.627601513562", "incomeShareBot50": "0.1048", "incomeShareMid40": "0.4043", "incomeShareTop10": "0.491", "incomeShareTop1": "0.1693"}, {"country": "Argentina", "year": "2003", "gdpPerCapita": "3349.80630031036", "gdp": "127586973492.177", "totalPopulation": "38087866", "giniCoefficient": "0.62082583969", "incomeShareBot50": "0.1157", "incomeShareMid40": "0.3858", "incomeShareTop10": "0.4985", "incomeShareTop1": "0.2037"}, {"country": "Argentina", "year": "2004", "gdpPerCapita": "4277.72157290954", "gdp": "164657930452.787", "totalPopulation": "38491970", "giniCoefficient": "0.611033107035", "incomeShareBot50": "0.1275", "incomeShareMid40": "0.3706", "incomeShareTop10": "0.5019", "incomeShareTop1": "0.2314"}, {"country": "Argentina", "year": "2005", "gdpPerCapita": "5109.85224490403", "gdp": "198737095012.282", "totalPopulation": "38892924", "giniCoefficient": "0.569418337345", "incomeShareBot50": "0.1409", "incomeShareMid40": "0.4135", "incomeShareTop10": "0.4456", "incomeShareTop1": "0.1484"}, {"country": "Argentina", "year": "2006", "gdpPerCapita": "5919.01233837714", "gdp": "232557260817.308", "totalPopulation": "39289876", "giniCoefficient": "0.682070409665", "incomeShareBot50": "0.0981", "incomeShareMid40": "0.3225", "incomeShareTop10": "0.5794", "incomeShareTop1": "0.3648"}, {"country": "Argentina", "year": "2007", "gdpPerCapita": "7245.44685667197", "gdp": "287530508430.568", "totalPopulation": "39684303", "giniCoefficient": "0.630021201105", "incomeShareBot50": "0.1143", "incomeShareMid40": "0.3802", "incomeShareTop10": "0.5055", "incomeShareTop1": "0.2462"}, {"country": "Argentina", "year": "2008", "gdpPerCapita": "9020.87332314274", "gdp": "361558037110.419", "totalPopulation": "40080159", "giniCoefficient": "0.611428327172", "incomeShareBot50": "0.1201", "incomeShareMid40": "0.4041", "incomeShareTop10": "0.4758", "incomeShareTop1": "0.1937"}, {"country": "Argentina", "year": "2009", "gdpPerCapita": "8225.13758261645", "gdp": "332976484577.619", "totalPopulation": "40482786", "giniCoefficient": "0.667057871239", "incomeShareBot50": "0.1057", "incomeShareMid40": "0.3303", "incomeShareTop10": "0.564", "incomeShareTop1": "0.3318"}, {"country": "Argentina", "year": "2010", "gdpPerCapita": "10385.9644319555", "gdp": "423627422092.49", "totalPopulation": "40788453", "giniCoefficient": "0.56912428267", "incomeShareBot50": "0.1438", "incomeShareMid40": "0.4061", "incomeShareTop10": "0.4501", "incomeShareTop1": "0.1539"}, {"country": "Argentina", "year": "2011", "gdpPerCapita": "12848.8641969705", "gdp": "530163281574.658", "totalPopulation": "41261490", "giniCoefficient": "0.620175412798", "incomeShareBot50": "0.1261", "incomeShareMid40": "0.3591", "incomeShareTop10": "0.5148", "incomeShareTop1": "0.2453"}, {"country": "Argentina", "year": "2012", "gdpPerCapita": "13082.664325572", "gdp": "545982375701.128", "totalPopulation": "41733271", "giniCoefficient": "0.51351165784", "incomeShareBot50": "0.1617", "incomeShareMid40": "0.4655", "incomeShareTop10": "0.3728", "incomeShareTop1": "0.0835"}, {"country": "Argentina", "year": "2013", "gdpPerCapita": "13080.2547323367", "gdp": "552025140252.246", "totalPopulation": "42202935", "giniCoefficient": "0.547566952006", "incomeShareBot50": "0.1501", "incomeShareMid40": "0.4328", "incomeShareTop10": "0.4171", "incomeShareTop1": "0.1286"}, {"country": "Argentina", "year": "2014", "gdpPerCapita": "12334.7982453893", "gdp": "526319673731.638", "totalPopulation": "42669500", "giniCoefficient": "0.539989695107", "incomeShareBot50": "0.1509", "incomeShareMid40": "0.4441", "incomeShareTop10": "0.405", "incomeShareTop1": "0.1101"}, {"country": "Argentina", "year": "2015", "gdpPerCapita": "13789.060424772", "gdp": "594749285413.212", "totalPopulation": "43131966", "giniCoefficient": "0.530590830451", "incomeShareBot50": "0.1629", "incomeShareMid40": "0.4284", "incomeShareTop10": "0.4086", "incomeShareTop1": "0.1409"}, {"country": "Argentina", "year": "2016", "gdpPerCapita": "12790.2424732447", "gdp": "557531376217.967", "totalPopulation": "43590368", "giniCoefficient": "0.578975918543", "incomeShareBot50": "0.1539", "incomeShareMid40": "0.3627", "incomeShareTop10": "0.4834", "incomeShareTop1": "0.272"}, {"country": "Argentina", "year": "2017", "gdpPerCapita": "14613.041824658", "gdp": "643628665302.155", "totalPopulation": "44044811", "giniCoefficient": "0.528051204702", "incomeShareBot50": "0.1719", "incomeShareMid40": "0.4086", "incomeShareTop10": "0.4195", "incomeShareTop1": "0.1778"}, {"country": "Argentina", "year": "2018", "gdpPerCapita": "11633.4980086503", "gdp": "517626700412.885", "totalPopulation": "44494502", "giniCoefficient": "0.528051216809", "incomeShareBot50": "0.1719", "incomeShareMid40": "0.4086", "incomeShareTop10": "0.4195", "incomeShareTop1": "0.1778"}, {"country": "Argentina", "year": "2019", "gdpPerCapita": "9912.28180859863", "gdp": "445445177459.453", "totalPopulation": "44938712", "giniCoefficient": "0.528051238928", "incomeShareBot50": "0.1719", "incomeShareMid40": "0.4086", "incomeShareTop10": "0.4195", "incomeShareTop1": "0.1778"}, {"country": "Canada", "year": "1980", "gdpPerCapita": "11170.5639723393", "gdp": "273853826548.067", "totalPopulation": "24515667", "giniCoefficient": "0.497251162084", "incomeShareBot50": "0.1713", "incomeShareMid40": "0.4666", "incomeShareTop10": "0.3621", "incomeShareTop1": "0.0918"}, {"country": "Canada", "year": "1981", "gdpPerCapita": "12337.4662493804", "gdp": "306214863624.99", "totalPopulation": "24819915", "giniCoefficient": "0.487740728318", "incomeShareBot50": "0.1748", "incomeShareMid40": "0.476", "incomeShareTop10": "0.3492", "incomeShareTop1": "0.0848"}, {"country": "Canada", "year": "1982", "gdpPerCapita": "12481.8747874298", "gdp": "313506525087.136", "totalPopulation": "25116942", "giniCoefficient": "0.483888771442", "incomeShareBot50": "0.1763", "incomeShareMid40": "0.4802", "incomeShareTop10": "0.3435", "incomeShareTop1": "0.0839"}, {"country": "Canada", "year": "1983", "gdpPerCapita": "13425.1224888294", "gdp": "340547711781.889", "totalPopulation": "25366451", "giniCoefficient": "0.494250538954", "incomeShareBot50": "0.171", "incomeShareMid40": "0.475", "incomeShareTop10": "0.354", "incomeShareTop1": "0.0893"}, {"country": "Canada", "year": "1984", "gdpPerCapita": "13877.9170763469", "gdp": "355372558103.621", "totalPopulation": "25607053", "giniCoefficient": "0.489529470407", "incomeShareBot50": "0.1739", "incomeShareMid40": "0.4758", "incomeShareTop10": "0.3503", "incomeShareTop1": "0.091"}, {"country": "Canada", "year": "1985", "gdpPerCapita": "14114.8077599664", "gdp": "364756499450.751", "totalPopulation": "25842116", "giniCoefficient": "0.484804479891", "incomeShareBot50": "0.1773", "incomeShareMid40": "0.4745", "incomeShareTop10": "0.3481", "incomeShareTop1": "0.0924"}, {"country": "Canada", "year": "1986", "gdpPerCapita": "14461.0692388787", "gdp": "377437927311.983", "totalPopulation": "26100278", "giniCoefficient": "0.478880681599", "incomeShareBot50": "0.1819", "incomeShareMid40": "0.4726", "incomeShareTop10": "0.3455", "incomeShareTop1": "0.0913"}, {"country": "Canada", "year": "1987", "gdpPerCapita": "16308.9669663579", "gdp": "431316742081.448", "totalPopulation": "26446601", "giniCoefficient": "0.479700789066", "incomeShareBot50": "0.1834", "incomeShareMid40": "0.4661", "incomeShareTop10": "0.3505", "incomeShareTop1": "0.1"}, {"country": "Canada", "year": "1988", "gdpPerCapita": "18936.9641024997", "gdp": "507354351182.254", "totalPopulation": "26791747", "giniCoefficient": "0.477963823777", "incomeShareBot50": "0.1868", "incomeShareMid40": "0.4587", "incomeShareTop10": "0.3545", "incomeShareTop1": "0.1072"}, {"country": "Canada", "year": "1989", "gdpPerCapita": "20715.631483174", "gdp": "565055743243.243", "totalPopulation": "27276781", "giniCoefficient": "0.483902531539", "incomeShareBot50": "0.185", "incomeShareMid40": "0.4524", "incomeShareTop10": "0.3626", "incomeShareTop1": "0.1164"}, {"country": "Canada", "year": "1990", "gdpPerCapita": "21448.3619600057", "gdp": "593929550908.468", "totalPopulation": "27691138", "giniCoefficient": "0.463123794327", "incomeShareBot50": "0.1937", "incomeShareMid40": "0.4681", "incomeShareTop10": "0.3381", "incomeShareTop1": "0.0948"}, {"country": "Canada", "year": "1991", "gdpPerCapita": "21768.3432941828", "gdp": "610328183643.188", "totalPopulation": "28037420", "giniCoefficient": "0.468818260943", "incomeShareBot50": "0.1901", "incomeShareMid40": "0.468", "incomeShareTop10": "0.3418", "incomeShareTop1": "0.0922"}, {"country": "Canada", "year": "1992", "gdpPerCapita": "20879.8483300891", "gdp": "592387689252.916", "totalPopulation": "28371264", "giniCoefficient": "0.478139371652", "incomeShareBot50": "0.1847", "incomeShareMid40": "0.4661", "incomeShareTop10": "0.3492", "incomeShareTop1": "0.0943"}, {"country": "Canada", "year": "1993", "gdpPerCapita": "20121.1612532855", "gdp": "577170761956.438", "totalPopulation": "28684764", "giniCoefficient": "0.492767527005", "incomeShareBot50": "0.1773", "incomeShareMid40": "0.459", "incomeShareTop10": "0.3637", "incomeShareTop1": "0.1043"}, {"country": "Canada", "year": "1994", "gdpPerCapita": "19935.3814579208", "gdp": "578139279437.61", "totalPopulation": "29000663", "giniCoefficient": "0.514346496294", "incomeShareBot50": "0.166", "incomeShareMid40": "0.4471", "incomeShareTop10": "0.3869", "incomeShareTop1": "0.1085"}, {"country": "Canada", "year": "1995", "gdpPerCapita": "20613.7878829216", "gdp": "604031623433.401", "totalPopulation": "29302311", "giniCoefficient": "0.49696706147", "incomeShareBot50": "0.1738", "incomeShareMid40": "0.4613", "incomeShareTop10": "0.3649", "incomeShareTop1": "0.1054"}, {"country": "Canada", "year": "1996", "gdpPerCapita": "21227.3475315896", "gdp": "628546387972.131", "totalPopulation": "29610218", "giniCoefficient": "0.50244922386", "incomeShareBot50": "0.1716", "incomeShareMid40": "0.4566", "incomeShareTop10": "0.3718", "incomeShareTop1": "0.1118"}, {"country": "Canada", "year": "1997", "gdpPerCapita": "21901.5628548392", "gdp": "654986999855.554", "totalPopulation": "29905948", "giniCoefficient": "0.51028560228", "incomeShareBot50": "0.1678", "incomeShareMid40": "0.4523", "incomeShareTop10": "0.3798", "incomeShareTop1": "0.122"}, {"country": "Canada", "year": "1998", "gdpPerCapita": "21024.5850687045", "gdp": "634000000000", "totalPopulation": "30155173", "giniCoefficient": "0.510624222242", "incomeShareBot50": "0.1684", "incomeShareMid40": "0.4496", "incomeShareTop10": "0.3819", "incomeShareTop1": "0.1254"}, {"country": "Canada", "year": "1999", "gdpPerCapita": "22315.2466731545", "gdp": "678412196271.118", "totalPopulation": "30401286", "giniCoefficient": "0.511950943915", "incomeShareBot50": "0.1685", "incomeShareMid40": "0.4466", "incomeShareTop10": "0.3849", "incomeShareTop1": "0.1308"}, {"country": "Canada", "year": "2000", "gdpPerCapita": "24271.0020563821", "gdp": "744773415931.587", "totalPopulation": "30685730", "giniCoefficient": "0.52551227793", "incomeShareBot50": "0.1628", "incomeShareMid40": "0.4362", "incomeShareTop10": "0.4009", "incomeShareTop1": "0.1475"}, {"country": "Canada", "year": "2001", "gdpPerCapita": "23822.0601178964", "gdp": "738981792355.372", "totalPopulation": "31020902", "giniCoefficient": "0.516125431234", "incomeShareBot50": "0.1674", "incomeShareMid40": "0.4412", "incomeShareTop10": "0.3915", "incomeShareTop1": "0.1389"}, {"country": "Canada", "year": "2002", "gdpPerCapita": "24255.3385818322", "gdp": "760649334098.005", "totalPopulation": "31360079", "giniCoefficient": "0.516802876491", "incomeShareBot50": "0.1661", "incomeShareMid40": "0.4439", "incomeShareTop10": "0.39", "incomeShareTop1": "0.1349"}, {"country": "Canada", "year": "2003", "gdpPerCapita": "28300.4630963791", "gdp": "895540646634.787", "totalPopulation": "31644028", "giniCoefficient": "0.518316389873", "incomeShareBot50": "0.165", "incomeShareMid40": "0.4442", "incomeShareTop10": "0.3908", "incomeShareTop1": "0.1351"}, {"country": "Canada", "year": "2004", "gdpPerCapita": "32143.6814078562", "gdp": "1026690238278.25", "totalPopulation": "31940655", "giniCoefficient": "0.522918814692", "incomeShareBot50": "0.1641", "incomeShareMid40": "0.4377", "incomeShareTop10": "0.3983", "incomeShareTop1": "0.1443"}, {"country": "Canada", "year": "2005", "gdpPerCapita": "36382.5079164537", "gdp": "1173108598778.68", "totalPopulation": "32243753", "giniCoefficient": "0.528838921404", "incomeShareBot50": "0.1624", "incomeShareMid40": "0.4307", "incomeShareTop10": "0.407", "incomeShareTop1": "0.154"}, {"country": "Canada", "year": "2006", "gdpPerCapita": "40504.0607253203", "gdp": "1319264809590.97", "totalPopulation": "32571174", "giniCoefficient": "0.533384305458", "incomeShareBot50": "0.1614", "incomeShareMid40": "0.4239", "incomeShareTop10": "0.4147", "incomeShareTop1": "0.161"}, {"country": "Canada", "year": "2007", "gdpPerCapita": "44659.8951408034", "gdp": "1468820407783.26", "totalPopulation": "32889025", "giniCoefficient": "0.534788107898", "incomeShareBot50": "0.161", "incomeShareMid40": "0.4221", "incomeShareTop10": "0.4169", "incomeShareTop1": "0.1634"}, {"country": "Canada", "year": "2008", "gdpPerCapita": "46710.5055759013", "gdp": "1552989690721.65", "totalPopulation": "33247118", "giniCoefficient": "0.527549841695", "incomeShareBot50": "0.1634", "incomeShareMid40": "0.4295", "incomeShareTop10": "0.4072", "incomeShareTop1": "0.1509"}, {"country": "Canada", "year": "2009", "gdpPerCapita": "40876.3101540295", "gdp": "1374625142157.29", "totalPopulation": "33628895", "giniCoefficient": "0.516738396754", "incomeShareBot50": "0.1674", "incomeShareMid40": "0.4391", "incomeShareTop10": "0.3935", "incomeShareTop1": "0.1327"}, {"country": "Canada", "year": "2010", "gdpPerCapita": "47562.0834253057", "gdp": "1617343367486.26", "totalPopulation": "34004889", "giniCoefficient": "0.523360614549", "incomeShareBot50": "0.165", "incomeShareMid40": "0.4328", "incomeShareTop10": "0.4022", "incomeShareTop1": "0.1404"}, {"country": "Canada", "year": "2011", "gdpPerCapita": "52223.696112356", "gdp": "1793326630174.52", "totalPopulation": "34339328", "giniCoefficient": "0.525096508436", "incomeShareBot50": "0.164", "incomeShareMid40": "0.4324", "incomeShareTop10": "0.4036", "incomeShareTop1": "0.1412"}, {"country": "Canada", "year": "2012", "gdpPerCapita": "52669.0899632316", "gdp": "1828366481521.6", "totalPopulation": "34714222", "giniCoefficient": "0.521044949234", "incomeShareBot50": "0.1657", "incomeShareMid40": "0.4353", "incomeShareTop10": "0.399", "incomeShareTop1": "0.1348"}, {"country": "Canada", "year": "2013", "gdpPerCapita": "52635.1749580433", "gdp": "1846597421834.98", "totalPopulation": "35082954", "giniCoefficient": "0.529684270578", "incomeShareBot50": "0.162", "incomeShareMid40": "0.429", "incomeShareTop10": "0.409", "incomeShareTop1": "0.1464"}, {"country": "Canada", "year": "2014", "gdpPerCapita": "50955.9983232404", "gdp": "1805749878439.94", "totalPopulation": "35437435", "giniCoefficient": "0.531362184705", "incomeShareBot50": "0.1621", "incomeShareMid40": "0.4251", "incomeShareTop10": "0.4128", "incomeShareTop1": "0.1513"}, {"country": "Canada", "year": "2015", "gdpPerCapita": "43596.1355365546", "gdp": "1556508816217.14", "totalPopulation": "35702908", "giniCoefficient": "0.529923021309", "incomeShareBot50": "0.1639", "incomeShareMid40": "0.4229", "incomeShareTop10": "0.4132", "incomeShareTop1": "0.1576"}, {"country": "Canada", "year": "2016", "gdpPerCapita": "42315.6037056806", "gdp": "1527994741907.43", "totalPopulation": "36109487", "giniCoefficient": "0.512981634093", "incomeShareBot50": "0.171", "incomeShareMid40": "0.4349", "incomeShareTop10": "0.3941", "incomeShareTop1": "0.1334"}, {"country": "Canada", "year": "2017", "gdpPerCapita": "45129.3564395662", "gdp": "1649265644244.09", "totalPopulation": "36545295", "giniCoefficient": "0.537034804944", "incomeShareBot50": "0.1552", "incomeShareMid40": "0.4353", "incomeShareTop10": "0.4095", "incomeShareTop1": "0.1501"}, {"country": "Canada", "year": "2018", "gdpPerCapita": "46454.7433947203", "gdp": "1721853332869.63", "totalPopulation": "37065178", "giniCoefficient": "0.536366227508", "incomeShareBot50": "0.1554", "incomeShareMid40": "0.436", "incomeShareTop10": "0.4086", "incomeShareTop1": "0.1493"}, {"country": "Canada", "year": "2019", "gdpPerCapita": "46326.6726375572", "gdp": "1741576393905.98", "totalPopulation": "37593384", "giniCoefficient": "0.535167693983", "incomeShareBot50": "0.1558", "incomeShareMid40": "0.4372", "incomeShareTop10": "0.407", "incomeShareTop1": "0.1479"}, {"country": "China", "year": "1980", "gdpPerCapita": "194.804722186836", "gdp": "191149211575", "totalPopulation": "981235000", "giniCoefficient": "0.382153401788", "incomeShareBot50": "0.2498", "incomeShareMid40": "0.4713", "incomeShareTop10": "0.2789", "incomeShareTop1": "0.0657"}, {"country": "China", "year": "1981", "gdpPerCapita": "197.071474499102", "gdp": "195866382432.54", "totalPopulation": "993885000", "giniCoefficient": "0.386951159821", "incomeShareBot50": "0.2471", "incomeShareMid40": "0.4698", "incomeShareTop10": "0.2831", "incomeShareTop1": "0.0686"}, {"country": "China", "year": "1982", "gdpPerCapita": "203.334919503464", "gdp": "205089699858.779", "totalPopulation": "1008630000", "giniCoefficient": "0.394164283318", "incomeShareBot50": "0.2419", "incomeShareMid40": "0.471", "incomeShareTop10": "0.2871", "incomeShareTop1": "0.0709"}, {"country": "China", "year": "1983", "gdpPerCapita": "225.431928890812", "gdp": "230686747153.257", "totalPopulation": "1023310000", "giniCoefficient": "0.391918062741", "incomeShareBot50": "0.2445", "incomeShareMid40": "0.4675", "incomeShareTop10": "0.288", "incomeShareTop1": "0.0727"}, {"country": "China", "year": "1984", "gdpPerCapita": "250.713969046988", "gdp": "259946510957.143", "totalPopulation": "1036825000", "giniCoefficient": "0.396942034805", "incomeShareBot50": "0.2418", "incomeShareMid40": "0.4654", "incomeShareTop10": "0.2928", "incomeShareTop1": "0.0761"}, {"country": "China", "year": "1985", "gdpPerCapita": "294.45884850496", "gdp": "309488028132.653", "totalPopulation": "1051040000", "giniCoefficient": "0.40451122767", "incomeShareBot50": "0.2384", "incomeShareMid40": "0.4602", "incomeShareTop10": "0.3014", "incomeShareTop1": "0.0817"}, {"country": "China", "year": "1986", "gdpPerCapita": "281.928120911563", "gdp": "300758100107.246", "totalPopulation": "1066790000", "giniCoefficient": "0.419342474229", "incomeShareBot50": "0.2252", "incomeShareMid40": "0.4709", "incomeShareTop10": "0.3039", "incomeShareTop1": "0.0811"}, {"country": "China", "year": "1987", "gdpPerCapita": "251.811956961329", "gdp": "272972974764.574", "totalPopulation": "1084035000", "giniCoefficient": "0.423173703586", "incomeShareBot50": "0.2207", "incomeShareMid40": "0.4771", "incomeShareTop10": "0.3022", "incomeShareTop1": "0.08"}, {"country": "China", "year": "1988", "gdpPerCapita": "283.537695240524", "gdp": "312353631207.819", "totalPopulation": "1101630000", "giniCoefficient": "0.426744600448", "incomeShareBot50": "0.2188", "incomeShareMid40": "0.4756", "incomeShareTop10": "0.3056", "incomeShareTop1": "0.0813"}, {"country": "China", "year": "1989", "gdpPerCapita": "310.8819124049", "gdp": "347768051311.741", "totalPopulation": "1118650000", "giniCoefficient": "0.43577736411", "incomeShareBot50": "0.2126", "incomeShareMid40": "0.4763", "incomeShareTop10": "0.3111", "incomeShareTop1": "0.0833"}, {"country": "China", "year": "1990", "gdpPerCapita": "317.884673040928", "gdp": "360857912565.966", "totalPopulation": "1135185000", "giniCoefficient": "0.432298686919", "incomeShareBot50": "0.2146", "incomeShareMid40": "0.4769", "incomeShareTop10": "0.3085", "incomeShareTop1": "0.0821"}, {"country": "China", "year": "1991", "gdpPerCapita": "333.142145400184", "gdp": "383373318083.624", "totalPopulation": "1150780000", "giniCoefficient": "0.447816338724", "incomeShareBot50": "0.2027", "incomeShareMid40": "0.4823", "incomeShareTop10": "0.3151", "incomeShareTop1": "0.0842"}, {"country": "China", "year": "1992", "gdpPerCapita": "366.460692306116", "gdp": "426915712715.856", "totalPopulation": "1164970000", "giniCoefficient": "0.462626931713", "incomeShareBot50": "0.1939", "incomeShareMid40": "0.479", "incomeShareTop10": "0.3271", "incomeShareTop1": "0.0885"}, {"country": "China", "year": "1993", "gdpPerCapita": "377.3898394789", "gdp": "444731282435.515", "totalPopulation": "1178440000", "giniCoefficient": "0.477598666797", "incomeShareBot50": "0.1849", "incomeShareMid40": "0.4761", "incomeShareTop10": "0.3391", "incomeShareTop1": "0.0929"}, {"country": "China", "year": "1994", "gdpPerCapita": "473.492278719989", "gdp": "564324670008.238", "totalPopulation": "1191835000", "giniCoefficient": "0.483451775208", "incomeShareBot50": "0.1811", "incomeShareMid40": "0.4756", "incomeShareTop10": "0.3433", "incomeShareTop1": "0.0954"}, {"country": "China", "year": "1995", "gdpPerCapita": "609.656679205465", "gdp": "734547898224.101", "totalPopulation": "1204855000", "giniCoefficient": "0.477406271554", "incomeShareBot50": "0.1849", "incomeShareMid40": "0.4761", "incomeShareTop10": "0.339", "incomeShareTop1": "0.0938"}, {"country": "China", "year": "1996", "gdpPerCapita": "709.413755088002", "gdp": "863746717507.397", "totalPopulation": "1217550000", "giniCoefficient": "0.471341031018", "incomeShareBot50": "0.1906", "incomeShareMid40": "0.4703", "incomeShareTop10": "0.339", "incomeShareTop1": "0.0965"}, {"country": "China", "year": "1997", "gdpPerCapita": "781.744164343014", "gdp": "961603952954.233", "totalPopulation": "1230075000", "giniCoefficient": "0.470976182818", "incomeShareBot50": "0.1909", "incomeShareMid40": "0.4699", "incomeShareTop10": "0.3391", "incomeShareTop1": "0.0965"}, {"country": "China", "year": "1998", "gdpPerCapita": "828.580479299572", "gdp": "1029043097558.91", "totalPopulation": "1241935000", "giniCoefficient": "0.472029073725", "incomeShareBot50": "0.1915", "incomeShareMid40": "0.466", "incomeShareTop10": "0.3425", "incomeShareTop1": "0.0994"}, {"country": "China", "year": "1999", "gdpPerCapita": "873.287061730612", "gdp": "1093997267277.1", "totalPopulation": "1252735000", "giniCoefficient": "0.481300300361", "incomeShareBot50": "0.185", "incomeShareMid40": "0.4671", "incomeShareTop10": "0.3479", "incomeShareTop1": "0.1002"}, {"country": "China", "year": "2000", "gdpPerCapita": "959.372483635864", "gdp": "1211346869600.41", "totalPopulation": "1262645000", "giniCoefficient": "0.49796437027", "incomeShareBot50": "0.1737", "incomeShareMid40": "0.4676", "incomeShareTop10": "0.3587", "incomeShareTop1": "0.1046"}, {"country": "China", "year": "2001", "gdpPerCapita": "1053.10824300262", "gdp": "1339395718862.89", "totalPopulation": "1271850000", "giniCoefficient": "0.507249319449", "incomeShareBot50": "0.1681", "incomeShareMid40": "0.4657", "incomeShareTop10": "0.3662", "incomeShareTop1": "0.1096"}, {"country": "China", "year": "2002", "gdpPerCapita": "1148.50829043887", "gdp": "1470550015077.93", "totalPopulation": "1280400000", "giniCoefficient": "0.534569143607", "incomeShareBot50": "0.1557", "incomeShareMid40": "0.4475", "incomeShareTop10": "0.3968", "incomeShareTop1": "0.1265"}, {"country": "China", "year": "2003", "gdpPerCapita": "1288.64325183475", "gdp": "1660287965663.89", "totalPopulation": "1288400000", "giniCoefficient": "0.542811546152", "incomeShareBot50": "0.1515", "incomeShareMid40": "0.4434", "incomeShareTop10": "0.4051", "incomeShareTop1": "0.1323"}, {"country": "China", "year": "2004", "gdpPerCapita": "1508.66809788453", "gdp": "1955347004965.69", "totalPopulation": "1296075000", "giniCoefficient": "0.546003146901", "incomeShareBot50": "0.1515", "incomeShareMid40": "0.4364", "incomeShareTop10": "0.4121", "incomeShareTop1": "0.1393"}, {"country": "China", "year": "2005", "gdpPerCapita": "1753.41782926104", "gdp": "2285965892364.2", "totalPopulation": "1303720000", "giniCoefficient": "0.55773969284", "incomeShareBot50": "0.1442", "incomeShareMid40": "0.4342", "incomeShareTop10": "0.4216", "incomeShareTop1": "0.143"}, {"country": "China", "year": "2006", "gdpPerCapita": "2099.22943460734", "gdp": "2752131773358.92", "totalPopulation": "1311020000", "giniCoefficient": "0.558960636106", "incomeShareBot50": "0.1441", "incomeShareMid40": "0.4323", "incomeShareTop10": "0.4237", "incomeShareTop1": "0.1487"}, {"country": "China", "year": "2007", "gdpPerCapita": "2693.97006340427", "gdp": "3550342737009.53", "totalPopulation": "1317885000", "giniCoefficient": "0.561986559762", "incomeShareBot50": "0.1425", "incomeShareMid40": "0.4306", "incomeShareTop10": "0.4269", "incomeShareTop1": "0.1538"}, {"country": "China", "year": "2008", "gdpPerCapita": "3468.30460207977", "gdp": "4594307032667.98", "totalPopulation": "1324655000", "giniCoefficient": "0.562217732742", "incomeShareBot50": "0.1421", "incomeShareMid40": "0.431", "incomeShareTop10": "0.4269", "incomeShareTop1": "0.1529"}, {"country": "China", "year": "2009", "gdpPerCapita": "3832.23643246922", "gdp": "5101703073088.97", "totalPopulation": "1331260000", "giniCoefficient": "0.562670615834", "incomeShareBot50": "0.1414", "incomeShareMid40": "0.4324", "incomeShareTop10": "0.4263", "incomeShareTop1": "0.1552"}, {"country": "China", "year": "2010", "gdpPerCapita": "4550.45310775599", "gdp": "6087163874510.73", "totalPopulation": "1337705000", "giniCoefficient": "0.566500527262", "incomeShareBot50": "0.1383", "incomeShareMid40": "0.4334", "incomeShareTop10": "0.4283", "incomeShareTop1": "0.152"}, {"country": "China", "year": "2011", "gdpPerCapita": "5618.13226711491", "gdp": "7551500124197.17", "totalPopulation": "1344130000", "giniCoefficient": "0.564565263105", "incomeShareBot50": "0.1409", "incomeShareMid40": "0.428", "incomeShareTop10": "0.4311", "incomeShareTop1": "0.1467"}, {"country": "China", "year": "2012", "gdpPerCapita": "6316.91831760216", "gdp": "8532229986993.65", "totalPopulation": "1350695000", "giniCoefficient": "0.553076533507", "incomeShareBot50": "0.1454", "incomeShareMid40": "0.4377", "incomeShareTop10": "0.4169", "incomeShareTop1": "0.1383"}, {"country": "China", "year": "2013", "gdpPerCapita": "7050.64627124287", "gdp": "9570406235659.64", "totalPopulation": "1357380000", "giniCoefficient": "0.562073840581", "incomeShareBot50": "0.1403", "incomeShareMid40": "0.4362", "incomeShareTop10": "0.4235", "incomeShareTop1": "0.1389"}, {"country": "China", "year": "2014", "gdpPerCapita": "7678.59948587722", "gdp": "10475682920597.7", "totalPopulation": "1364270000", "giniCoefficient": "0.554612936124", "incomeShareBot50": "0.1438", "incomeShareMid40": "0.4406", "incomeShareTop10": "0.4155", "incomeShareTop1": "0.1374"}, {"country": "China", "year": "2015", "gdpPerCapita": "8066.94263493206", "gdp": "11061553079871.5", "totalPopulation": "1371220000", "giniCoefficient": "0.555457116071", "incomeShareBot50": "0.1436", "incomeShareMid40": "0.4398", "incomeShareTop10": "0.4166", "incomeShareTop1": "0.14"}, {"country": "China", "year": "2016", "gdpPerCapita": "8147.93770549385", "gdp": "11233276536744.7", "totalPopulation": "1378665000", "giniCoefficient": "0.555457008445", "incomeShareBot50": "0.1436", "incomeShareMid40": "0.4398", "incomeShareTop10": "0.4166", "incomeShareTop1": "0.14"}, {"country": "China", "year": "2017", "gdpPerCapita": "8879.43866711453", "gdp": "12310409370894.2", "totalPopulation": "1386395000", "giniCoefficient": "0.555457083358", "incomeShareBot50": "0.1436", "incomeShareMid40": "0.4398", "incomeShareTop10": "0.4166", "incomeShareTop1": "0.14"}, {"country": "China", "year": "2018", "gdpPerCapita": "9976.677137263", "gdp": "13894817549380.3", "totalPopulation": "1392730000", "giniCoefficient": "0.555457132602", "incomeShareBot50": "0.1436", "incomeShareMid40": "0.4398", "incomeShareTop10": "0.4166", "incomeShareTop1": "0.14"}, {"country": "China", "year": "2019", "gdpPerCapita": "10216.6303341031", "gdp": "14279937467431", "totalPopulation": "1397715000", "giniCoefficient": "0.555457048783", "incomeShareBot50": "0.1436", "incomeShareMid40": "0.4398", "incomeShareTop10": "0.4166", "incomeShareTop1": "0.14"}, {"country": "Brazil", "year": "1980", "gdpPerCapita": "1947.27638172523", "gdp": "235024598983.261", "totalPopulation": "120694012", "giniCoefficient": "0.64798123006", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1981", "gdpPerCapita": "2132.8833173447", "gdp": "263561088977.129", "totalPopulation": "123570327", "giniCoefficient": "0.64798126371", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1982", "gdpPerCapita": "2226.7671199705", "gdp": "281682304161.041", "totalPopulation": "126498322", "giniCoefficient": "0.647981199792", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1983", "gdpPerCapita": "1570.53979590926", "gdp": "203304515490.795", "totalPopulation": "129448815", "giniCoefficient": "0.64798119291", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1984", "gdpPerCapita": "1578.92640511028", "gdp": "209023912696.839", "totalPopulation": "132383569", "giniCoefficient": "0.647981275817", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1985", "gdpPerCapita": "1648.0820678363", "gdp": "222942790435.299", "totalPopulation": "135274083", "giniCoefficient": "0.647981239257", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1986", "gdpPerCapita": "1941.49106688531", "gdp": "268137224729.722", "totalPopulation": "138108915", "giniCoefficient": "0.647981138777", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1987", "gdpPerCapita": "2087.30754614764", "gdp": "294084112392.66", "totalPopulation": "140891606", "giniCoefficient": "0.647981165785", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1988", "gdpPerCapita": "2300.37681152012", "gdp": "330397381998.489", "totalPopulation": "143627505", "giniCoefficient": "0.64798119291", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1989", "gdpPerCapita": "2908.49613818735", "gdp": "425595310000", "totalPopulation": "146328305", "giniCoefficient": "0.647981226568", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1990", "gdpPerCapita": "3100.28042681627", "gdp": "461951782000", "totalPopulation": "149003225", "giniCoefficient": "0.647981206777", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1991", "gdpPerCapita": "3975.39019421469", "gdp": "602860000000", "totalPopulation": "151648007", "giniCoefficient": "0.647981275817", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1992", "gdpPerCapita": "2596.91984245081", "gdp": "400599250000", "totalPopulation": "154259382", "giniCoefficient": "0.647981272091", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1993", "gdpPerCapita": "2791.20898186013", "gdp": "437798577639.752", "totalPopulation": "156849086", "giniCoefficient": "0.647981177776", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1994", "gdpPerCapita": "3500.61146795399", "gdp": "558111997497.263", "totalPopulation": "159432717", "giniCoefficient": "0.647981177776", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1995", "gdpPerCapita": "4748.21573407477", "gdp": "769305386182.849", "totalPopulation": "162019889", "giniCoefficient": "0.647981212831", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1996", "gdpPerCapita": "5166.16393300655", "gdp": "850426432991.742", "totalPopulation": "164614682", "giniCoefficient": "0.647981136914", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1997", "gdpPerCapita": "5282.0086380056", "gdp": "883199625324.675", "totalPopulation": "167209046", "giniCoefficient": "0.647981239257", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1998", "gdpPerCapita": "5087.15213112718", "gdp": "863723411632.917", "totalPopulation": "169785253", "giniCoefficient": "0.64798126371", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "1999", "gdpPerCapita": "3478.37275016214", "gdp": "599388579985.673", "totalPopulation": "172318674", "giniCoefficient": "0.647981248861", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "2000", "gdpPerCapita": "3749.75327141454", "gdp": "655420645476.906", "totalPopulation": "174790339", "giniCoefficient": "0.647981139708", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "2001", "gdpPerCapita": "3156.7987713336", "gdp": "559372276081.966", "totalPopulation": "177196051", "giniCoefficient": "0.647981176961", "incomeShareBot50": "0.1124", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5453", "incomeShareTop1": "0.2449"}, {"country": "Brazil", "year": "2002", "gdpPerCapita": "2829.28314489459", "gdp": "507962487700.024", "totalPopulation": "179537523", "giniCoefficient": "0.641662794787", "incomeShareBot50": "0.1152", "incomeShareMid40": "0.3464", "incomeShareTop10": "0.5383", "incomeShareTop1": "0.229"}, {"country": "Brazil", "year": "2003", "gdpPerCapita": "3070.91052439544", "gdp": "558319920831.979", "totalPopulation": "181809244", "giniCoefficient": "0.650651936086", "incomeShareBot50": "0.112", "incomeShareMid40": "0.3384", "incomeShareTop10": "0.5496", "incomeShareTop1": "0.2445"}, {"country": "Brazil", "year": "2004", "gdpPerCapita": "3637.46242879358", "gdp": "669316654017.094", "totalPopulation": "184006479", "giniCoefficient": "0.662813226894", "incomeShareBot50": "0.1084", "incomeShareMid40": "0.3259", "incomeShareTop10": "0.5657", "incomeShareTop1": "0.2794"}, {"country": "Brazil", "year": "2005", "gdpPerCapita": "4790.43695908641", "gdp": "891630177251.068", "totalPopulation": "186127108", "giniCoefficient": "0.67352453576", "incomeShareBot50": "0.1051", "incomeShareMid40": "0.3153", "incomeShareTop10": "0.5795", "incomeShareTop1": "0.3036"}, {"country": "Brazil", "year": "2006", "gdpPerCapita": "5886.46368222667", "gdp": "1107640289615.23", "totalPopulation": "188167353", "giniCoefficient": "0.657287957187", "incomeShareBot50": "0.11", "incomeShareMid40": "0.3333", "incomeShareTop10": "0.5567", "incomeShareTop1": "0.2572"}, {"country": "Brazil", "year": "2007", "gdpPerCapita": "7348.03071626086", "gdp": "1397084349956.35", "totalPopulation": "190130445", "giniCoefficient": "0.647576033966", "incomeShareBot50": "0.1137", "incomeShareMid40": "0.3397", "incomeShareTop10": "0.5466", "incomeShareTop1": "0.2342"}, {"country": "Brazil", "year": "2008", "gdpPerCapita": "8831.02311697566", "gdp": "1695824565983.2", "totalPopulation": "192030362", "giniCoefficient": "0.655773774775", "incomeShareBot50": "0.1112", "incomeShareMid40": "0.33", "incomeShareTop10": "0.5587", "incomeShareTop1": "0.2574"}, {"country": "Brazil", "year": "2009", "gdpPerCapita": "8597.91548455152", "gdp": "1667019783585.08", "totalPopulation": "193886505", "giniCoefficient": "0.679556847988", "incomeShareBot50": "0.1036", "incomeShareMid40": "0.308", "incomeShareTop10": "0.5884", "incomeShareTop1": "0.3061"}, {"country": "Brazil", "year": "2010", "gdpPerCapita": "11286.2429009115", "gdp": "2208871646202.82", "totalPopulation": "195713637", "giniCoefficient": "0.663870211546", "incomeShareBot50": "0.1092", "incomeShareMid40": "0.3198", "incomeShareTop10": "0.571", "incomeShareTop1": "0.2706"}, {"country": "Brazil", "year": "2011", "gdpPerCapita": "13245.6120301146", "gdp": "2616200980392.16", "totalPopulation": "197514541", "giniCoefficient": "0.668116946735", "incomeShareBot50": "0.1085", "incomeShareMid40": "0.3127", "incomeShareTop10": "0.5788", "incomeShareTop1": "0.2796"}, {"country": "Brazil", "year": "2012", "gdpPerCapita": "12370.0244490002", "gdp": "2465188674415.03", "totalPopulation": "199287292", "giniCoefficient": "0.670206643021", "incomeShareBot50": "0.1092", "incomeShareMid40": "0.3101", "incomeShareTop10": "0.5807", "incomeShareTop1": "0.3016"}, {"country": "Brazil", "year": "2013", "gdpPerCapita": "12300.324821091", "gdp": "2472806919901.67", "totalPopulation": "201035904", "giniCoefficient": "0.646746462944", "incomeShareBot50": "0.1163", "incomeShareMid40": "0.3332", "incomeShareTop10": "0.5506", "incomeShareTop1": "0.2548"}, {"country": "Brazil", "year": "2014", "gdpPerCapita": "12112.5876683327", "gdp": "2455993625159.37", "totalPopulation": "202763744", "giniCoefficient": "0.658114164393", "incomeShareBot50": "0.1127", "incomeShareMid40": "0.3215", "incomeShareTop10": "0.5658", "incomeShareTop1": "0.2784"}, {"country": "Brazil", "year": "2015", "gdpPerCapita": "8814.00141787464", "gdp": "1802214373741.32", "totalPopulation": "204471759", "giniCoefficient": "0.652197671503", "incomeShareBot50": "0.1131", "incomeShareMid40": "0.3296", "incomeShareTop10": "0.5573", "incomeShareTop1": "0.2417"}, {"country": "Brazil", "year": "2016", "gdpPerCapita": "8710.09677403838", "gdp": "1795700168991.49", "totalPopulation": "206163056", "giniCoefficient": "0.654148393689", "incomeShareBot50": "0.1092", "incomeShareMid40": "0.3429", "incomeShareTop10": "0.5479", "incomeShareTop1": "0.2395"}, {"country": "Brazil", "year": "2017", "gdpPerCapita": "9928.6430632111", "gdp": "2063507864886.88", "totalPopulation": "207833825", "giniCoefficient": "0.667059823415", "incomeShareBot50": "0.1045", "incomeShareMid40": "0.332", "incomeShareTop10": "0.5636", "incomeShareTop1": "0.2623"}, {"country": "Brazil", "year": "2018", "gdpPerCapita": "9151.44525254365", "gdp": "1916947014067.55", "totalPopulation": "209469320", "giniCoefficient": "0.688537938507", "incomeShareBot50": "0.0981", "incomeShareMid40": "0.3089", "incomeShareTop10": "0.5929", "incomeShareTop1": "0.3098"}, {"country": "Brazil", "year": "2019", "gdpPerCapita": "8897.48777044292", "gdp": "1877810514260.36", "totalPopulation": "211049519", "giniCoefficient": "0.688537998927", "incomeShareBot50": "0.0981", "incomeShareMid40": "0.3089", "incomeShareTop10": "0.5929", "incomeShareTop1": "0.3098"}, {"country": "France", "year": "1980", "gdpPerCapita": "12713.3651661352", "gdp": "701288419745.421", "totalPopulation": "55161510", "giniCoefficient": "0.410423858191", "incomeShareBot50": "0.2279", "incomeShareMid40": "0.4766", "incomeShareTop10": "0.2955", "incomeShareTop1": "0.0773"}, {"country": "France", "year": "1981", "gdpPerCapita": "11104.9813384681", "gdp": "615552202776.101", "totalPopulation": "55430278", "giniCoefficient": "0.408762309754", "incomeShareBot50": "0.2282", "incomeShareMid40": "0.4791", "incomeShareTop10": "0.2927", "incomeShareTop1": "0.0768"}, {"country": "France", "year": "1982", "gdpPerCapita": "10496.9285544307", "gdp": "584877732308.614", "totalPopulation": "55718940", "giniCoefficient": "0.403683315939", "incomeShareBot50": "0.2299", "incomeShareMid40": "0.4832", "incomeShareTop10": "0.2869", "incomeShareTop1": "0.0718"}, {"country": "France", "year": "1983", "gdpPerCapita": "9993.42118219846", "gdp": "559869179791.72", "totalPopulation": "56023775", "giniCoefficient": "0.408140615052", "incomeShareBot50": "0.2259", "incomeShareMid40": "0.4864", "incomeShareTop10": "0.2877", "incomeShareTop1": "0.0705"}, {"country": "France", "year": "1984", "gdpPerCapita": "9419.69614346785", "gdp": "530683779929.445", "totalPopulation": "56337675", "giniCoefficient": "0.411052452444", "incomeShareBot50": "0.2249", "incomeShareMid40": "0.485", "incomeShareTop10": "0.2901", "incomeShareTop1": "0.0714"}, {"country": "France", "year": "1985", "gdpPerCapita": "9763.32740402965", "gdp": "553138414367.061", "totalPopulation": "56654703", "giniCoefficient": "0.414164295401", "incomeShareBot50": "0.2235", "incomeShareMid40": "0.4818", "incomeShareTop10": "0.2947", "incomeShareTop1": "0.0738"}, {"country": "France", "year": "1986", "gdpPerCapita": "13540.2463694725", "gdp": "771470783218.108", "totalPopulation": "56976126", "giniCoefficient": "0.421924355964", "incomeShareBot50": "0.2202", "incomeShareMid40": "0.4762", "incomeShareTop10": "0.3036", "incomeShareTop1": "0.0791"}, {"country": "France", "year": "1987", "gdpPerCapita": "16302.4473755662", "gdp": "934173305685.911", "totalPopulation": "57302642", "giniCoefficient": "0.427127137063", "incomeShareBot50": "0.2184", "incomeShareMid40": "0.4712", "incomeShareTop10": "0.3104", "incomeShareTop1": "0.0846"}, {"country": "France", "year": "1988", "gdpPerCapita": "17679.996689009", "gdp": "1018847043277.17", "totalPopulation": "57627106", "giniCoefficient": "0.431490889829", "incomeShareBot50": "0.2163", "incomeShareMid40": "0.4691", "incomeShareTop10": "0.3146", "incomeShareTop1": "0.086"}, {"country": "France", "year": "1989", "gdpPerCapita": "17694.3093242315", "gdp": "1025211803413.53", "totalPopulation": "57940199", "giniCoefficient": "0.436246762235", "incomeShareBot50": "0.2133", "incomeShareMid40": "0.4683", "incomeShareTop10": "0.3184", "incomeShareTop1": "0.0899"}, {"country": "France", "year": "1990", "gdpPerCapita": "21793.8355375183", "gdp": "1269179616913.63", "totalPopulation": "58235716", "giniCoefficient": "0.435860560224", "incomeShareBot50": "0.2125", "incomeShareMid40": "0.4719", "incomeShareTop10": "0.3156", "incomeShareTop1": "0.089"}, {"country": "France", "year": "1991", "gdpPerCapita": "21675.0649888267", "gdp": "1269276828275.78", "totalPopulation": "58559309", "giniCoefficient": "0.431045818735", "incomeShareBot50": "0.2165", "incomeShareMid40": "0.4709", "incomeShareTop10": "0.3126", "incomeShareTop1": "0.0885"}, {"country": "France", "year": "1992", "gdpPerCapita": "23813.7122463577", "gdp": "1401465923172.24", "totalPopulation": "58851216", "giniCoefficient": "0.429270689062", "incomeShareBot50": "0.2159", "incomeShareMid40": "0.4766", "incomeShareTop10": "0.3075", "incomeShareTop1": "0.0842"}, {"country": "France", "year": "1993", "gdpPerCapita": "22380.1077483221", "gdp": "1322815612694", "totalPopulation": "59106758", "giniCoefficient": "0.431940614997", "incomeShareBot50": "0.2131", "incomeShareMid40": "0.4782", "incomeShareTop10": "0.3087", "incomeShareTop1": "0.0863"}, {"country": "France", "year": "1994", "gdpPerCapita": "23496.5201538685", "gdp": "1393982750472.59", "totalPopulation": "59327200", "giniCoefficient": "0.435450815669", "incomeShareBot50": "0.2111", "incomeShareMid40": "0.4781", "incomeShareTop10": "0.3108", "incomeShareTop1": "0.0888"}, {"country": "France", "year": "1995", "gdpPerCapita": "26890.2176223614", "gdp": "1601094756209.75", "totalPopulation": "59541904", "giniCoefficient": "0.43534032528", "incomeShareBot50": "0.2109", "incomeShareMid40": "0.4782", "incomeShareTop10": "0.3109", "incomeShareTop1": "0.0897"}, {"country": "France", "year": "1996", "gdpPerCapita": "26871.8312674776", "gdp": "1605675086549.56", "totalPopulation": "59753095", "giniCoefficient": "0.438389439642", "incomeShareBot50": "0.2114", "incomeShareMid40": "0.4708", "incomeShareTop10": "0.3178", "incomeShareTop1": "0.0981"}, {"country": "France", "year": "1997", "gdpPerCapita": "24228.9463914211", "gdp": "1452884917959.09", "totalPopulation": "59964841", "giniCoefficient": "0.440747331775", "incomeShareBot50": "0.2104", "incomeShareMid40": "0.4694", "incomeShareTop10": "0.3202", "incomeShareTop1": "0.1017"}, {"country": "France", "year": "1998", "gdpPerCapita": "24974.2738587988", "gdp": "1503108739159.44", "totalPopulation": "60186284", "giniCoefficient": "0.443975064126", "incomeShareBot50": "0.2096", "incomeShareMid40": "0.4659", "incomeShareTop10": "0.3246", "incomeShareTop1": "0.1051"}, {"country": "France", "year": "1999", "gdpPerCapita": "24673.2030476111", "gdp": "1492647560196.04", "totalPopulation": "60496708", "giniCoefficient": "0.441638811998", "incomeShareBot50": "0.2114", "incomeShareMid40": "0.4651", "incomeShareTop10": "0.3235", "incomeShareTop1": "0.1037"}, {"country": "France", "year": "2000", "gdpPerCapita": "22364.0293943406", "gdp": "1362248940482.77", "totalPopulation": "60912500", "giniCoefficient": "0.443306461395", "incomeShareBot50": "0.2116", "incomeShareMid40": "0.4612", "incomeShareTop10": "0.3273", "incomeShareTop1": "0.1075"}, {"country": "France", "year": "2001", "gdpPerCapita": "22433.5549829528", "gdp": "1376465324384.79", "totalPopulation": "61357432", "giniCoefficient": "0.444746405917", "incomeShareBot50": "0.2115", "incomeShareMid40": "0.4583", "incomeShareTop10": "0.3302", "incomeShareTop1": "0.11"}, {"country": "France", "year": "2002", "gdpPerCapita": "24177.3355586498", "gdp": "1494286655373.61", "totalPopulation": "61805266", "giniCoefficient": "0.440890829466", "incomeShareBot50": "0.2134", "incomeShareMid40": "0.4604", "incomeShareTop10": "0.3262", "incomeShareTop1": "0.1063"}, {"country": "France", "year": "2003", "gdpPerCapita": "29568.3887998673", "gdp": "1840480812641.08", "totalPopulation": "62244880", "giniCoefficient": "0.443174477023", "incomeShareBot50": "0.2125", "incomeShareMid40": "0.4587", "incomeShareTop10": "0.3287", "incomeShareTop1": "0.1087"}, {"country": "France", "year": "2004", "gdpPerCapita": "33741.2619183406", "gdp": "2115742488204.62", "totalPopulation": "62704901", "giniCoefficient": "0.446302410855", "incomeShareBot50": "0.2112", "incomeShareMid40": "0.4566", "incomeShareTop10": "0.3322", "incomeShareTop1": "0.1122"}, {"country": "France", "year": "2005", "gdpPerCapita": "34760.1850154731", "gdp": "2196126103718.44", "totalPopulation": "63179356", "giniCoefficient": "0.444830405981", "incomeShareBot50": "0.212", "incomeShareMid40": "0.457", "incomeShareTop10": "0.331", "incomeShareTop1": "0.1106"}, {"country": "France", "year": "2006", "gdpPerCapita": "36443.6263055433", "gdp": "2318593651988.46", "totalPopulation": "63621376", "giniCoefficient": "0.442631873744", "incomeShareBot50": "0.2133", "incomeShareMid40": "0.4572", "incomeShareTop10": "0.3294", "incomeShareTop1": "0.108"}, {"country": "France", "year": "2007", "gdpPerCapita": "41508.4326882318", "gdp": "2657213249384.07", "totalPopulation": "64016227", "giniCoefficient": "0.448643029919", "incomeShareBot50": "0.211", "incomeShareMid40": "0.4521", "incomeShareTop10": "0.3369", "incomeShareTop1": "0.1134"}, {"country": "France", "year": "2008", "gdpPerCapita": "45334.117956922", "gdp": "2918382891460.38", "totalPopulation": "64374979", "giniCoefficient": "0.449218208466", "incomeShareBot50": "0.2105", "incomeShareMid40": "0.4513", "incomeShareTop10": "0.3382", "incomeShareTop1": "0.1142"}, {"country": "France", "year": "2009", "gdpPerCapita": "41575.4219609625", "gdp": "2690222283967.77", "totalPopulation": "64707035", "giniCoefficient": "0.434588489457", "incomeShareBot50": "0.2175", "incomeShareMid40": "0.4611", "incomeShareTop10": "0.3214", "incomeShareTop1": "0.0995"}, {"country": "France", "year": "2010", "gdpPerCapita": "40638.3352541414", "gdp": "2642609548930.36", "totalPopulation": "65027505", "giniCoefficient": "0.439001158803", "incomeShareBot50": "0.2151", "incomeShareMid40": "0.4592", "incomeShareTop10": "0.3257", "incomeShareTop1": "0.1058"}, {"country": "France", "year": "2011", "gdpPerCapita": "43790.7260166781", "gdp": "2861408170264.6", "totalPopulation": "65342789", "giniCoefficient": "0.441125683668", "incomeShareBot50": "0.2147", "incomeShareMid40": "0.4561", "incomeShareTop10": "0.3293", "incomeShareTop1": "0.1098"}, {"country": "France", "year": "2012", "gdpPerCapita": "40874.7003927338", "gdp": "2683825225092.63", "totalPopulation": "65659814", "giniCoefficient": "0.432358784988", "incomeShareBot50": "0.2187", "incomeShareMid40": "0.4617", "incomeShareTop10": "0.3196", "incomeShareTop1": "0.1001"}, {"country": "France", "year": "2013", "gdpPerCapita": "42592.9353850549", "gdp": "2811077725703.59", "totalPopulation": "65998685", "giniCoefficient": "0.431996311889", "incomeShareBot50": "0.2189", "incomeShareMid40": "0.4621", "incomeShareTop10": "0.319", "incomeShareTop1": "0.0988"}, {"country": "France", "year": "2014", "gdpPerCapita": "43011.2631028417", "gdp": "2852165760630.27", "totalPopulation": "66312067", "giniCoefficient": "0.431794114952", "incomeShareBot50": "0.2198", "incomeShareMid40": "0.46", "incomeShareTop10": "0.3202", "incomeShareTop1": "0.1005"}, {"country": "France", "year": "2015", "gdpPerCapita": "36638.184929157", "gdp": "2438207896251.84", "totalPopulation": "66548272", "giniCoefficient": "0.436101261311", "incomeShareBot50": "0.2153", "incomeShareMid40": "0.4643", "incomeShareTop10": "0.3205", "incomeShareTop1": "0.0986"}, {"country": "France", "year": "2016", "gdpPerCapita": "37037.3741861219", "gdp": "2471285607081.72", "totalPopulation": "66724104", "giniCoefficient": "0.435044567994", "incomeShareBot50": "0.2164", "incomeShareMid40": "0.4628", "incomeShareTop10": "0.3208", "incomeShareTop1": "0.0992"}, {"country": "France", "year": "2017", "gdpPerCapita": "38685.2584944953", "gdp": "2588740901639.81", "totalPopulation": "66918020", "giniCoefficient": "0.435325245391", "incomeShareBot50": "0.2163", "incomeShareMid40": "0.4626", "incomeShareTop10": "0.3211", "incomeShareTop1": "0.0994"}, {"country": "France", "year": "2018", "gdpPerCapita": "41526.4146584125", "gdp": "2786502569559.77", "totalPopulation": "67101930", "giniCoefficient": "0.435889662485", "incomeShareBot50": "0.2163", "incomeShareMid40": "0.4614", "incomeShareTop10": "0.3223", "incomeShareTop1": "0.1003"}, {"country": "France", "year": "2019", "gdpPerCapita": "40380.0987725432", "gdp": "2715518274227.45", "totalPopulation": "67248926", "giniCoefficient": "0.435889665744", "incomeShareBot50": "0.2163", "incomeShareMid40": "0.4614", "incomeShareTop10": "0.3223", "incomeShareTop1": "0.1003"}, {"country": "Germany", "year": "1980", "gdpPerCapita": "12138.3081034267", "gdp": "950290856466.538", "totalPopulation": "78288576", "giniCoefficient": "0.405908352227", "incomeShareBot50": "0.2313", "incomeShareMid40": "0.4812", "incomeShareTop10": "0.2875", "incomeShareTop1": "0.0996"}, {"country": "Germany", "year": "1981", "gdpPerCapita": "10209.0731153846", "gdp": "800472055387.278", "totalPopulation": "78407907", "giniCoefficient": "0.401363472695", "incomeShareBot50": "0.2339", "incomeShareMid40": "0.4797", "incomeShareTop10": "0.2864", "incomeShareTop1": "0.0974"}, {"country": "Germany", "year": "1982", "gdpPerCapita": "9913.73764159395", "gdp": "776576439106.956", "totalPopulation": "78333366", "giniCoefficient": "0.398358118465", "incomeShareBot50": "0.2357", "incomeShareMid40": "0.4797", "incomeShareTop10": "0.2846", "incomeShareTop1": "0.0951"}, {"country": "Germany", "year": "1983", "gdpPerCapita": "9864.3449403866", "gdp": "770684323247.798", "totalPopulation": "78128282", "giniCoefficient": "0.398487461387", "incomeShareBot50": "0.235", "incomeShareMid40": "0.4821", "incomeShareTop10": "0.2829", "incomeShareTop1": "0.0929"}, {"country": "Germany", "year": "1984", "gdpPerCapita": "9313.16941243118", "gdp": "725111123634.115", "totalPopulation": "77858685", "giniCoefficient": "0.397696808744", "incomeShareBot50": "0.2368", "incomeShareMid40": "0.4783", "incomeShareTop10": "0.285", "incomeShareTop1": "0.0941"}, {"country": "Germany", "year": "1985", "gdpPerCapita": "9429.56921688214", "gdp": "732534887058.198", "totalPopulation": "77684873", "giniCoefficient": "0.398714624677", "incomeShareBot50": "0.2365", "incomeShareMid40": "0.4763", "incomeShareTop10": "0.2871", "incomeShareTop1": "0.0954"}, {"country": "Germany", "year": "1986", "gdpPerCapita": "13461.8310034147", "gdp": "1046259374943.71", "totalPopulation": "77720436", "giniCoefficient": "0.40140902562", "incomeShareBot50": "0.2353", "incomeShareMid40": "0.4753", "incomeShareTop10": "0.2894", "incomeShareTop1": "0.0968"}, {"country": "Germany", "year": "1987", "gdpPerCapita": "16677.51078816", "gdp": "1298176105549.51", "totalPopulation": "77839920", "giniCoefficient": "0.409238389998", "incomeShareBot50": "0.2316", "incomeShareMid40": "0.4699", "incomeShareTop10": "0.2985", "incomeShareTop1": "0.1022"}, {"country": "Germany", "year": "1988", "gdpPerCapita": "17931.2823228876", "gdp": "1401233225303.49", "totalPopulation": "78144619", "giniCoefficient": "0.418970952019", "incomeShareBot50": "0.2268", "incomeShareMid40": "0.4638", "incomeShareTop10": "0.3094", "incomeShareTop1": "0.1082"}, {"country": "Germany", "year": "1989", "gdpPerCapita": "17764.376445833", "gdp": "1398967436804.33", "totalPopulation": "78751283", "giniCoefficient": "0.428188807776", "incomeShareBot50": "0.2221", "incomeShareMid40": "0.4585", "incomeShareTop10": "0.3194", "incomeShareTop1": "0.1139"}, {"country": "Germany", "year": "1990", "gdpPerCapita": "22303.9613266628", "gdp": "1771671206875.68", "totalPopulation": "79433029", "giniCoefficient": "0.427358865106", "incomeShareBot50": "0.2214", "incomeShareMid40": "0.4621", "incomeShareTop10": "0.3166", "incomeShareTop1": "0.1081"}, {"country": "Germany", "year": "1991", "gdpPerCapita": "23357.757725073", "gdp": "1868945197407.19", "totalPopulation": "80013896", "giniCoefficient": "0.425285157643", "incomeShareBot50": "0.2221", "incomeShareMid40": "0.4646", "incomeShareTop10": "0.3134", "incomeShareTop1": "0.1024"}, {"country": "Germany", "year": "1992", "gdpPerCapita": "26438.2303888417", "gdp": "2131571696931.75", "totalPopulation": "80624598", "giniCoefficient": "0.420447827751", "incomeShareBot50": "0.2245", "incomeShareMid40": "0.466", "incomeShareTop10": "0.3095", "incomeShareTop1": "0.0958"}, {"country": "Germany", "year": "1993", "gdpPerCapita": "25522.6295733618", "gdp": "2071323790370.28", "totalPopulation": "81156363", "giniCoefficient": "0.41308469091", "incomeShareBot50": "0.2286", "incomeShareMid40": "0.4688", "incomeShareTop10": "0.3026", "incomeShareTop1": "0.0914"}, {"country": "Germany", "year": "1994", "gdpPerCapita": "27076.60675014", "gdp": "2205074123177.05", "totalPopulation": "81438348", "giniCoefficient": "0.40989510167", "incomeShareBot50": "0.2298", "incomeShareMid40": "0.4716", "incomeShareTop10": "0.2986", "incomeShareTop1": "0.0882"}, {"country": "Germany", "year": "1995", "gdpPerCapita": "31658.3493789135", "gdp": "2585792275146.72", "totalPopulation": "81678051", "giniCoefficient": "0.408423178267", "incomeShareBot50": "0.2307", "incomeShareMid40": "0.4721", "incomeShareTop10": "0.2972", "incomeShareTop1": "0.0875"}, {"country": "Germany", "year": "1996", "gdpPerCapita": "30485.8665482279", "gdp": "2497244606186.64", "totalPopulation": "81914831", "giniCoefficient": "0.418944494433", "incomeShareBot50": "0.225", "incomeShareMid40": "0.4691", "incomeShareTop10": "0.3059", "incomeShareTop1": "0.0952"}, {"country": "Germany", "year": "1997", "gdpPerCapita": "26964.0494672673", "gdp": "2211989623279.95", "totalPopulation": "82034771", "giniCoefficient": "0.428294342091", "incomeShareBot50": "0.2198", "incomeShareMid40": "0.467", "incomeShareTop10": "0.3133", "incomeShareTop1": "0.1019"}, {"country": "Germany", "year": "1998", "gdpPerCapita": "27289.0593603191", "gdp": "2238990774702.68", "totalPopulation": "82047195", "giniCoefficient": "0.43639615367", "incomeShareBot50": "0.2157", "incomeShareMid40": "0.4639", "incomeShareTop10": "0.3204", "incomeShareTop1": "0.1086"}, {"country": "Germany", "year": "1999", "gdpPerCapita": "26725.9152182573", "gdp": "2194204133816.32", "totalPopulation": "82100243", "giniCoefficient": "0.435105482696", "incomeShareBot50": "0.2165", "incomeShareMid40": "0.4635", "incomeShareTop10": "0.32", "incomeShareTop1": "0.1054"}, {"country": "Germany", "year": "2000", "gdpPerCapita": "23635.9292203977", "gdp": "1943145384190.16", "totalPopulation": "82211508", "giniCoefficient": "0.437548399044", "incomeShareBot50": "0.2147", "incomeShareMid40": "0.4645", "incomeShareTop10": "0.3209", "incomeShareTop1": "0.1038"}, {"country": "Germany", "year": "2001", "gdpPerCapita": "23607.8828553922", "gdp": "1944107382550.34", "totalPopulation": "82349925", "giniCoefficient": "0.436853051125", "incomeShareBot50": "0.2154", "incomeShareMid40": "0.4621", "incomeShareTop10": "0.3226", "incomeShareTop1": "0.1018"}, {"country": "Germany", "year": "2002", "gdpPerCapita": "25077.7290759602", "gdp": "2068624129493.69", "totalPopulation": "82488495", "giniCoefficient": "0.441737792015", "incomeShareBot50": "0.211", "incomeShareMid40": "0.4661", "incomeShareTop10": "0.3229", "incomeShareTop1": "0.1"}, {"country": "Germany", "year": "2003", "gdpPerCapita": "30243.5765296979", "gdp": "2496128668171.56", "totalPopulation": "82534176", "giniCoefficient": "0.435395160576", "incomeShareBot50": "0.2138", "incomeShareMid40": "0.4702", "incomeShareTop10": "0.316", "incomeShareTop1": "0.0943"}, {"country": "Germany", "year": "2004", "gdpPerCapita": "34044.0536341248", "gdp": "2809187981127.39", "totalPopulation": "82516260", "giniCoefficient": "0.445289607781", "incomeShareBot50": "0.2094", "incomeShareMid40": "0.4632", "incomeShareTop10": "0.3274", "incomeShareTop1": "0.1049"}, {"country": "Germany", "year": "2005", "gdpPerCapita": "34507.3688142332", "gdp": "2845802760850.64", "totalPopulation": "82469422", "giniCoefficient": "0.467420101712", "incomeShareBot50": "0.1975", "incomeShareMid40": "0.4554", "incomeShareTop10": "0.3472", "incomeShareTop1": "0.1197"}, {"country": "Germany", "year": "2006", "gdpPerCapita": "36323.4477421822", "gdp": "2992196713084.93", "totalPopulation": "82376451", "giniCoefficient": "0.467786031067", "incomeShareBot50": "0.1991", "incomeShareMid40": "0.4489", "incomeShareTop10": "0.352", "incomeShareTop1": "0.1255"}, {"country": "Germany", "year": "2007", "gdpPerCapita": "41587.2128984264", "gdp": "3421229126745.14", "totalPopulation": "82266372", "giniCoefficient": "0.482991665317", "incomeShareBot50": "0.192", "incomeShareMid40": "0.439", "incomeShareTop10": "0.369", "incomeShareTop1": "0.1356"}, {"country": "Germany", "year": "2008", "gdpPerCapita": "45427.151677489", "gdp": "3730027830672.33", "totalPopulation": "82110097", "giniCoefficient": "0.48299526969", "incomeShareBot50": "0.1914", "incomeShareMid40": "0.4417", "incomeShareTop10": "0.367", "incomeShareTop1": "0.134"}, {"country": "Germany", "year": "2009", "gdpPerCapita": "41485.9016495139", "gdp": "3397791053070.3", "totalPopulation": "81902307", "giniCoefficient": "0.484048237477", "incomeShareBot50": "0.1916", "incomeShareMid40": "0.4369", "incomeShareTop10": "0.3715", "incomeShareTop1": "0.1293"}, {"country": "Germany", "year": "2010", "gdpPerCapita": "41531.9341978689", "gdp": "3396354075663.73", "totalPopulation": "81776930", "giniCoefficient": "0.480028562258", "incomeShareBot50": "0.1932", "incomeShareMid40": "0.4399", "incomeShareTop10": "0.3668", "incomeShareTop1": "0.1286"}, {"country": "Germany", "year": "2011", "gdpPerCapita": "46644.776027968", "gdp": "3744408602683.94", "totalPopulation": "80274983", "giniCoefficient": "0.482477776007", "incomeShareBot50": "0.191", "incomeShareMid40": "0.4413", "incomeShareTop10": "0.3676", "incomeShareTop1": "0.1276"}, {"country": "Germany", "year": "2012", "gdpPerCapita": "43858.3630551076", "gdp": "3527344944139.83", "totalPopulation": "80425823", "giniCoefficient": "0.481736054385", "incomeShareBot50": "0.19", "incomeShareMid40": "0.4471", "incomeShareTop10": "0.3629", "incomeShareTop1": "0.1257"}, {"country": "Germany", "year": "2013", "gdpPerCapita": "46285.7640688407", "gdp": "3732743446218.92", "totalPopulation": "80645605", "giniCoefficient": "0.49469477213", "incomeShareBot50": "0.1832", "incomeShareMid40": "0.4407", "incomeShareTop10": "0.376", "incomeShareTop1": "0.1305"}, {"country": "Germany", "year": "2014", "gdpPerCapita": "47959.9932737599", "gdp": "3883920155292.26", "totalPopulation": "80982500", "giniCoefficient": "0.497571510416", "incomeShareBot50": "0.1822", "incomeShareMid40": "0.4372", "incomeShareTop10": "0.3805", "incomeShareTop1": "0.1317"}, {"country": "Germany", "year": "2015", "gdpPerCapita": "41086.7296737253", "gdp": "3356235704119.75", "totalPopulation": "81686611", "giniCoefficient": "0.497308786372", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4363", "incomeShareTop10": "0.3811", "incomeShareTop1": "0.1328"}, {"country": "Germany", "year": "2016", "gdpPerCapita": "42107.5172703074", "gdp": "3467498002104.33", "totalPopulation": "82348669", "giniCoefficient": "0.495205283019", "incomeShareBot50": "0.1845", "incomeShareMid40": "0.4353", "incomeShareTop10": "0.3802", "incomeShareTop1": "0.1326"}, {"country": "Germany", "year": "2017", "gdpPerCapita": "44442.7718397577", "gdp": "3673506280844.4", "totalPopulation": "82657002", "giniCoefficient": "0.492088619951", "incomeShareBot50": "0.186", "incomeShareMid40": "0.4367", "incomeShareTop10": "0.3773", "incomeShareTop1": "0.1319"}, {"country": "Germany", "year": "2018", "gdpPerCapita": "47787.1605074447", "gdp": "3961831911429.22", "totalPopulation": "82905782", "giniCoefficient": "0.489531123003", "incomeShareBot50": "0.1872", "incomeShareMid40": "0.4381", "incomeShareTop10": "0.3747", "incomeShareTop1": "0.1299"}, {"country": "Germany", "year": "2019", "gdpPerCapita": "46467.5162023856", "gdp": "3861123558039.21", "totalPopulation": "83092962", "giniCoefficient": "0.489983433851", "incomeShareBot50": "0.187", "incomeShareMid40": "0.4378", "incomeShareTop10": "0.3751", "incomeShareTop1": "0.1303"}, {"country": "India", "year": "1980", "gdpPerCapita": "266.57785078817", "gdp": "186325345089.754", "totalPopulation": "698952837", "giniCoefficient": "0.440476655444", "incomeShareBot50": "0.2121", "incomeShareMid40": "0.4643", "incomeShareTop10": "0.3236", "incomeShareTop1": "0.0754"}, {"country": "India", "year": "1981", "gdpPerCapita": "270.470600926091", "gdp": "193490610032.1", "totalPopulation": "715384997", "giniCoefficient": "0.434788264235", "incomeShareBot50": "0.2139", "incomeShareMid40": "0.4706", "incomeShareTop10": "0.3155", "incomeShareTop1": "0.0688"}, {"country": "India", "year": "1982", "gdpPerCapita": "274.111333667661", "gdp": "200715145360.918", "totalPopulation": "732239498", "giniCoefficient": "0.430174142159", "incomeShareBot50": "0.2154", "incomeShareMid40": "0.4759", "incomeShareTop10": "0.3087", "incomeShareTop1": "0.0628"}, {"country": "India", "year": "1983", "gdpPerCapita": "291.238110137317", "gdp": "218262273410.099", "totalPopulation": "749428958", "giniCoefficient": "0.472203071904", "incomeShareBot50": "0.1983", "incomeShareMid40": "0.4402", "incomeShareTop10": "0.3615", "incomeShareTop1": "0.1057"}, {"country": "India", "year": "1984", "gdpPerCapita": "276.66795828235", "gdp": "212158234164.06", "totalPopulation": "766833411", "giniCoefficient": "0.45762717513", "incomeShareBot50": "0.204", "incomeShareMid40": "0.4536", "incomeShareTop10": "0.3424", "incomeShareTop1": "0.0912"}, {"country": "India", "year": "1985", "gdpPerCapita": "296.435150039292", "gdp": "232511877842.041", "totalPopulation": "784360012", "giniCoefficient": "0.469488574", "incomeShareBot50": "0.1992", "incomeShareMid40": "0.444", "incomeShareTop10": "0.3568", "incomeShareTop1": "0.1072"}, {"country": "India", "year": "1986", "gdpPerCapita": "310.465932763137", "gdp": "248985994044.2", "totalPopulation": "801975250", "giniCoefficient": "0.472156785646", "incomeShareBot50": "0.198", "incomeShareMid40": "0.4423", "incomeShareTop10": "0.3597", "incomeShareTop1": "0.1109"}, {"country": "India", "year": "1987", "gdpPerCapita": "340.416834519435", "gdp": "279033584092.159", "totalPopulation": "819682095", "giniCoefficient": "0.467814997269", "incomeShareBot50": "0.1996", "incomeShareMid40": "0.4467", "incomeShareTop10": "0.3537", "incomeShareTop1": "0.1059"}, {"country": "India", "year": "1988", "gdpPerCapita": "354.149248234039", "gdp": "296588994812.059", "totalPopulation": "837468938", "giniCoefficient": "0.475411502133", "incomeShareBot50": "0.1965", "incomeShareMid40": "0.4405", "incomeShareTop10": "0.363", "incomeShareTop1": "0.114"}, {"country": "India", "year": "1989", "gdpPerCapita": "346.112888485581", "gdp": "296042354986.126", "totalPopulation": "855334675", "giniCoefficient": "0.475463691247", "incomeShareBot50": "0.1965", "incomeShareMid40": "0.44", "incomeShareTop10": "0.3634", "incomeShareTop1": "0.1131"}, {"country": "India", "year": "1990", "gdpPerCapita": "367.55660889031", "gdp": "320979026419.633", "totalPopulation": "873277799", "giniCoefficient": "0.460675310843", "incomeShareBot50": "0.2027", "incomeShareMid40": "0.4532", "incomeShareTop10": "0.344", "incomeShareTop1": "0.1074"}, {"country": "India", "year": "1991", "gdpPerCapita": "303.055607722879", "gdp": "270105341879.226", "totalPopulation": "891273202", "giniCoefficient": "0.464803672203", "incomeShareBot50": "0.2011", "incomeShareMid40": "0.4488", "incomeShareTop10": "0.3502", "incomeShareTop1": "0.1044"}, {"country": "India", "year": "1992", "gdpPerCapita": "316.953927198178", "gdp": "288208430383.964", "totalPopulation": "909307018", "giniCoefficient": "0.471666856922", "incomeShareBot50": "0.1982", "incomeShareMid40": "0.4418", "incomeShareTop10": "0.3599", "incomeShareTop1": "0.1027"}, {"country": "India", "year": "1993", "gdpPerCapita": "301.159002272177", "gdp": "279296022987.919", "totalPopulation": "927403866", "giniCoefficient": "0.485257153735", "incomeShareBot50": "0.1933", "incomeShareMid40": "0.4301", "incomeShareTop10": "0.3767", "incomeShareTop1": "0.1279"}, {"country": "India", "year": "1994", "gdpPerCapita": "346.102951420647", "gdp": "327275583539.559", "totalPopulation": "945601828", "giniCoefficient": "0.496406451691", "incomeShareBot50": "0.1887", "incomeShareMid40": "0.4192", "incomeShareTop10": "0.3922", "incomeShareTop1": "0.1267"}, {"country": "India", "year": "1995", "gdpPerCapita": "373.76648078334", "gdp": "360281952716.797", "totalPopulation": "963922586", "giniCoefficient": "0.496739896311", "incomeShareBot50": "0.189", "incomeShareMid40": "0.4182", "incomeShareTop10": "0.3928", "incomeShareTop1": "0.1335"}, {"country": "India", "year": "1996", "gdpPerCapita": "399.950074728286", "gdp": "392897054348.071", "totalPopulation": "982365248", "giniCoefficient": "0.493778934258", "incomeShareBot50": "0.1905", "incomeShareMid40": "0.4201", "incomeShareTop10": "0.3894", "incomeShareTop1": "0.1356"}, {"country": "India", "year": "1997", "gdpPerCapita": "415.493797812017", "gdp": "415867753863.874", "totalPopulation": "1000900028", "giniCoefficient": "0.49986533891", "incomeShareBot50": "0.1883", "incomeShareMid40": "0.4142", "incomeShareTop10": "0.3975", "incomeShareTop1": "0.1419"}, {"country": "India", "year": "1998", "gdpPerCapita": "413.29893221522", "gdp": "421351477504.743", "totalPopulation": "1019483586", "giniCoefficient": "0.503775804797", "incomeShareBot50": "0.187", "incomeShareMid40": "0.4104", "incomeShareTop10": "0.4025", "incomeShareTop1": "0.1473"}, {"country": "India", "year": "1999", "gdpPerCapita": "441.998760444983", "gdp": "458820417337.807", "totalPopulation": "1038058154", "giniCoefficient": "0.505648398297", "incomeShareBot50": "0.1864", "incomeShareMid40": "0.4084", "incomeShareTop10": "0.4052", "incomeShareTop1": "0.1508"}, {"country": "India", "year": "2000", "gdpPerCapita": "443.314193811316", "gdp": "468394937262.37", "totalPopulation": "1056575548", "giniCoefficient": "0.508535829251", "incomeShareBot50": "0.1854", "incomeShareMid40": "0.4056", "incomeShareTop10": "0.409", "incomeShareTop1": "0.1551"}, {"country": "India", "year": "2001", "gdpPerCapita": "451.572997293746", "gdp": "485441014538.638", "totalPopulation": "1075000094", "giniCoefficient": "0.517804435202", "incomeShareBot50": "0.1814", "incomeShareMid40": "0.3987", "incomeShareTop10": "0.4199", "incomeShareTop1": "0.1629"}, {"country": "India", "year": "2002", "gdpPerCapita": "470.986786810734", "gdp": "514937948870.08", "totalPopulation": "1093317187", "giniCoefficient": "0.527211616968", "incomeShareBot50": "0.1773", "incomeShareMid40": "0.3917", "incomeShareTop10": "0.431", "incomeShareTop1": "0.171"}, {"country": "India", "year": "2003", "gdpPerCapita": "546.726613494985", "gdp": "607699285433.872", "totalPopulation": "1111523146", "giniCoefficient": "0.536750970119", "incomeShareBot50": "0.1732", "incomeShareMid40": "0.3845", "incomeShareTop10": "0.4423", "incomeShareTop1": "0.1794"}, {"country": "India", "year": "2004", "gdpPerCapita": "627.774241726543", "gdp": "709148514804.659", "totalPopulation": "1129623466", "giniCoefficient": "0.546415617264", "incomeShareBot50": "0.169", "incomeShareMid40": "0.3772", "incomeShareTop10": "0.4538", "incomeShareTop1": "0.1881"}, {"country": "India", "year": "2005", "gdpPerCapita": "714.8610153644", "gdp": "820381595512.902", "totalPopulation": "1147609924", "giniCoefficient": "0.556197564417", "incomeShareBot50": "0.1648", "incomeShareMid40": "0.3697", "incomeShareTop10": "0.4655", "incomeShareTop1": "0.1971"}, {"country": "India", "year": "2006", "gdpPerCapita": "806.753280628799", "gdp": "940259888792.141", "totalPopulation": "1165486291", "giniCoefficient": "0.565972279003", "incomeShareBot50": "0.1607", "incomeShareMid40": "0.3611", "incomeShareTop10": "0.4782", "incomeShareTop1": "0.201"}, {"country": "India", "year": "2007", "gdpPerCapita": "1028.33477194577", "gdp": "1216735441524.86", "totalPopulation": "1183209471", "giniCoefficient": "0.575955652265", "incomeShareBot50": "0.1564", "incomeShareMid40": "0.3523", "incomeShareTop10": "0.4913", "incomeShareTop1": "0.205"}, {"country": "India", "year": "2008", "gdpPerCapita": "998.522341514181", "gdp": "1198895582137.51", "totalPopulation": "1200669762", "giniCoefficient": "0.586133549821", "incomeShareBot50": "0.1521", "incomeShareMid40": "0.3432", "incomeShareTop10": "0.5046", "incomeShareTop1": "0.2088"}, {"country": "India", "year": "2009", "gdpPerCapita": "1101.96083821252", "gdp": "1341886602798.69", "totalPopulation": "1217726217", "giniCoefficient": "0.596489781174", "incomeShareBot50": "0.1477", "incomeShareMid40": "0.334", "incomeShareTop10": "0.5183", "incomeShareTop1": "0.2127"}, {"country": "India", "year": "2010", "gdpPerCapita": "1357.5637268318", "gdp": "1675615335600.56", "totalPopulation": "1234281163", "giniCoefficient": "0.607006367102", "incomeShareBot50": "0.1433", "incomeShareMid40": "0.3246", "incomeShareTop10": "0.5321", "incomeShareTop1": "0.2164"}, {"country": "India", "year": "2011", "gdpPerCapita": "1458.10406619626", "gdp": "1823049927772.05", "totalPopulation": "1250287939", "giniCoefficient": "0.620348326867", "incomeShareBot50": "0.1373", "incomeShareMid40": "0.311", "incomeShareTop10": "0.5517", "incomeShareTop1": "0.2154"}, {"country": "India", "year": "2012", "gdpPerCapita": "1443.88243476181", "gdp": "1827637859136.23", "totalPopulation": "1265780243", "giniCoefficient": "0.626372888872", "incomeShareBot50": "0.1346", "incomeShareMid40": "0.3051", "incomeShareTop10": "0.5603", "incomeShareTop1": "0.217"}, {"country": "India", "year": "2013", "gdpPerCapita": "1449.61045069632", "gdp": "1856722121394.42", "totalPopulation": "1280842119", "giniCoefficient": "0.627859134828", "incomeShareBot50": "0.1339", "incomeShareMid40": "0.3034", "incomeShareTop10": "0.5627", "incomeShareTop1": "0.22"}, {"country": "India", "year": "2014", "gdpPerCapita": "1573.88564183014", "gdp": "2039127446299.3", "totalPopulation": "1295600768", "giniCoefficient": "0.633618179546", "incomeShareBot50": "0.1313", "incomeShareMid40": "0.2974", "incomeShareTop10": "0.5713", "incomeShareTop1": "0.2173"}, {"country": "India", "year": "2015", "gdpPerCapita": "1605.60544457045", "gdp": "2103587813812.2", "totalPopulation": "1310152392", "giniCoefficient": "0.633618226881", "incomeShareBot50": "0.1313", "incomeShareMid40": "0.2974", "incomeShareTop10": "0.5713", "incomeShareTop1": "0.2173"}, {"country": "India", "year": "2016", "gdpPerCapita": "1732.55424231697", "gdp": "2294797980509.51", "totalPopulation": "1324517250", "giniCoefficient": "0.633618102363", "incomeShareBot50": "0.1313", "incomeShareMid40": "0.2974", "incomeShareTop10": "0.5713", "incomeShareTop1": "0.2173"}, {"country": "India", "year": "2017", "gdpPerCapita": "1980.66701982813", "gdp": "2651472946375.05", "totalPopulation": "1338676779", "giniCoefficient": "0.633618098172", "incomeShareBot50": "0.1313", "incomeShareMid40": "0.2974", "incomeShareTop10": "0.5713", "incomeShareTop1": "0.2173"}, {"country": "India", "year": "2018", "gdpPerCapita": "1996.91508739755", "gdp": "2701111782774.57", "totalPopulation": "1352642283", "giniCoefficient": "0.633618098172", "incomeShareBot50": "0.1313", "incomeShareMid40": "0.2974", "incomeShareTop10": "0.5713", "incomeShareTop1": "0.2173"}, {"country": "India", "year": "2019", "gdpPerCapita": "2100.75146060783", "gdp": "2870504096717.48", "totalPopulation": "1366417756", "giniCoefficient": "0.633618062083", "incomeShareBot50": "0.1313", "incomeShareMid40": "0.2974", "incomeShareTop10": "0.5713", "incomeShareTop1": "0.2173"}, {"country": "Italy", "year": "1980", "gdpPerCapita": "8456.91897443827", "gdp": "477256775943.929", "totalPopulation": "56433883", "giniCoefficient": "0.352325652231", "incomeShareBot50": "0.2615", "incomeShareMid40": "0.4931", "incomeShareTop10": "0.2455", "incomeShareTop1": "0.0512"}, {"country": "Italy", "year": "1981", "gdpPerCapita": "7622.83332844583", "gdp": "430702851303.015", "totalPopulation": "56501675", "giniCoefficient": "0.343015596868", "incomeShareBot50": "0.2663", "incomeShareMid40": "0.4978", "incomeShareTop10": "0.2359", "incomeShareTop1": "0.0465"}, {"country": "Italy", "year": "1982", "gdpPerCapita": "7556.52343693203", "gdp": "427272645669.291", "totalPopulation": "56543548", "giniCoefficient": "0.343542915055", "incomeShareBot50": "0.2651", "incomeShareMid40": "0.5007", "incomeShareTop10": "0.2342", "incomeShareTop1": "0.0456"}, {"country": "Italy", "year": "1983", "gdpPerCapita": "7832.5753867885", "gdp": "443042373788.883", "totalPopulation": "56564074", "giniCoefficient": "0.342992709963", "incomeShareBot50": "0.2648", "incomeShareMid40": "0.5021", "incomeShareTop10": "0.2332", "incomeShareTop1": "0.0451"}, {"country": "Italy", "year": "1984", "gdpPerCapita": "7739.71528361795", "gdp": "437887689001.543", "totalPopulation": "56576718", "giniCoefficient": "0.347955017993", "incomeShareBot50": "0.2618", "incomeShareMid40": "0.5007", "incomeShareTop10": "0.2376", "incomeShareTop1": "0.0475"}, {"country": "Italy", "year": "1985", "gdpPerCapita": "7990.68656551182", "gdp": "452217492140.757", "totalPopulation": "56593071", "giniCoefficient": "0.352451452674", "incomeShareBot50": "0.2594", "incomeShareMid40": "0.4984", "incomeShareTop10": "0.2422", "incomeShareTop1": "0.0505"}, {"country": "Italy", "year": "1986", "gdpPerCapita": "11315.0151767923", "gdp": "640386352773.087", "totalPopulation": "56596155", "giniCoefficient": "0.366906944206", "incomeShareBot50": "0.2497", "incomeShareMid40": "0.4974", "incomeShareTop10": "0.2529", "incomeShareTop1": "0.0576"}, {"country": "Italy", "year": "1987", "gdpPerCapita": "14234.7286380474", "gdp": "805713128174.485", "totalPopulation": "56601931", "giniCoefficient": "0.375059684117", "incomeShareBot50": "0.2444", "incomeShareMid40": "0.4967", "incomeShareTop10": "0.2589", "incomeShareTop1": "0.0589"}, {"country": "Italy", "year": "1988", "gdpPerCapita": "15744.6612635428", "gdp": "891608957155.608", "totalPopulation": "56629288", "giniCoefficient": "0.387254054606", "incomeShareBot50": "0.2372", "incomeShareMid40": "0.4938", "incomeShareTop10": "0.2689", "incomeShareTop1": "0.0624"}, {"country": "Italy", "year": "1989", "gdpPerCapita": "16386.6622120866", "gdp": "928661332204.347", "totalPopulation": "56671781", "giniCoefficient": "0.387610802245", "incomeShareBot50": "0.2381", "incomeShareMid40": "0.4907", "incomeShareTop10": "0.2712", "incomeShareTop1": "0.0635"}, {"country": "Italy", "year": "1990", "gdpPerCapita": "20825.7842228307", "gdp": "1181222653522.95", "totalPopulation": "56719240", "giniCoefficient": "0.390317351173", "incomeShareBot50": "0.2364", "incomeShareMid40": "0.4909", "incomeShareTop10": "0.2727", "incomeShareTop1": "0.0631"}, {"country": "Italy", "year": "1991", "gdpPerCapita": "21956.5297707332", "gdp": "1246220156079.29", "totalPopulation": "56758521", "giniCoefficient": "0.386444480102", "incomeShareBot50": "0.2392", "incomeShareMid40": "0.4895", "incomeShareTop10": "0.2713", "incomeShareTop1": "0.0634"}, {"country": "Italy", "year": "1992", "gdpPerCapita": "23243.4745277206", "gdp": "1320161644933.23", "totalPopulation": "56797087", "giniCoefficient": "0.394936427874", "incomeShareBot50": "0.2325", "incomeShareMid40": "0.4932", "incomeShareTop10": "0.2743", "incomeShareTop1": "0.0639"}, {"country": "Italy", "year": "1993", "gdpPerCapita": "18738.7638969132", "gdp": "1064958075550.63", "totalPopulation": "56831821", "giniCoefficient": "0.400292033604", "incomeShareBot50": "0.2286", "incomeShareMid40": "0.4931", "incomeShareTop10": "0.2784", "incomeShareTop1": "0.066"}, {"country": "Italy", "year": "1994", "gdpPerCapita": "19337.6308996383", "gdp": "1099216688280.5", "totalPopulation": "56843400", "giniCoefficient": "0.405734292744", "incomeShareBot50": "0.2255", "incomeShareMid40": "0.4918", "incomeShareTop10": "0.2827", "incomeShareTop1": "0.0687"}, {"country": "Italy", "year": "1995", "gdpPerCapita": "20664.5522701724", "gdp": "1174662070605.02", "totalPopulation": "56844303", "giniCoefficient": "0.411288588074", "incomeShareBot50": "0.224", "incomeShareMid40": "0.4844", "incomeShareTop10": "0.2915", "incomeShareTop1": "0.0744"}, {"country": "Italy", "year": "1996", "gdpPerCapita": "23081.6046757702", "gdp": "1312426527795.21", "totalPopulation": "56860281", "giniCoefficient": "0.414876396023", "incomeShareBot50": "0.2222", "incomeShareMid40": "0.4824", "incomeShareTop10": "0.2954", "incomeShareTop1": "0.0767"}, {"country": "Italy", "year": "1997", "gdpPerCapita": "21829.3458226222", "gdp": "1241879604365.62", "totalPopulation": "56890372", "giniCoefficient": "0.419898234001", "incomeShareBot50": "0.218", "incomeShareMid40": "0.4857", "incomeShareTop10": "0.2963", "incomeShareTop1": "0.0769"}, {"country": "Italy", "year": "1998", "gdpPerCapita": "22318.1373007109", "gdp": "1270052525928.4", "totalPopulation": "56906744", "giniCoefficient": "0.422736164234", "incomeShareBot50": "0.2176", "incomeShareMid40": "0.4808", "incomeShareTop10": "0.3016", "incomeShareTop1": "0.0794"}, {"country": "Italy", "year": "1999", "gdpPerCapita": "21997.6243155313", "gdp": "1252023758789.69", "totalPopulation": "56916317", "giniCoefficient": "0.422543366881", "incomeShareBot50": "0.2171", "incomeShareMid40": "0.4833", "incomeShareTop10": "0.2996", "incomeShareTop1": "0.0765"}, {"country": "Italy", "year": "2000", "gdpPerCapita": "20087.5919858794", "gdp": "1143829832319.88", "totalPopulation": "56942108", "giniCoefficient": "0.426917136543", "incomeShareBot50": "0.2167", "incomeShareMid40": "0.4751", "incomeShareTop10": "0.3082", "incomeShareTop1": "0.0818"}, {"country": "Italy", "year": "2001", "gdpPerCapita": "20483.2159949974", "gdp": "1167012796420.58", "totalPopulation": "56974100", "giniCoefficient": "0.430817566678", "incomeShareBot50": "0.2143", "incomeShareMid40": "0.4749", "incomeShareTop10": "0.3108", "incomeShareTop1": "0.0849"}, {"country": "Italy", "year": "2002", "gdpPerCapita": "22270.1441234282", "gdp": "1270712309429.7", "totalPopulation": "57059007", "giniCoefficient": "0.426579890726", "incomeShareBot50": "0.2164", "incomeShareMid40": "0.4773", "incomeShareTop10": "0.3063", "incomeShareTop1": "0.0819"}, {"country": "Italy", "year": "2003", "gdpPerCapita": "27465.6752987224", "gdp": "1574145823927.77", "totalPopulation": "57313203", "giniCoefficient": "0.425892872347", "incomeShareBot50": "0.2176", "incomeShareMid40": "0.4752", "incomeShareTop10": "0.3072", "incomeShareTop1": "0.0831"}, {"country": "Italy", "year": "2004", "gdpPerCapita": "31259.7164954309", "gdp": "1803226967966.23", "totalPopulation": "57685327", "giniCoefficient": "0.42583768699", "incomeShareBot50": "0.2174", "incomeShareMid40": "0.4757", "incomeShareTop10": "0.307", "incomeShareTop1": "0.0822"}, {"country": "Italy", "year": "2005", "gdpPerCapita": "32043.1403684119", "gdp": "1857524312896.41", "totalPopulation": "57969484", "giniCoefficient": "0.424778114067", "incomeShareBot50": "0.218", "incomeShareMid40": "0.4766", "incomeShareTop10": "0.3054", "incomeShareTop1": "0.081"}, {"country": "Italy", "year": "2006", "gdpPerCapita": "33501.6581673044", "gdp": "1947919708944.93", "totalPopulation": "58143979", "giniCoefficient": "0.426091839823", "incomeShareBot50": "0.2174", "incomeShareMid40": "0.4754", "incomeShareTop10": "0.3072", "incomeShareTop1": "0.082"}, {"country": "Italy", "year": "2007", "gdpPerCapita": "37822.6652377427", "gdp": "2210292636189.43", "totalPopulation": "58438310", "giniCoefficient": "0.428013462322", "incomeShareBot50": "0.2167", "incomeShareMid40": "0.4738", "incomeShareTop10": "0.3095", "incomeShareTop1": "0.0819"}, {"country": "Italy", "year": "2008", "gdpPerCapita": "40778.3427367209", "gdp": "2398856598798.89", "totalPopulation": "58826731", "giniCoefficient": "0.425946950577", "incomeShareBot50": "0.2173", "incomeShareMid40": "0.4766", "incomeShareTop10": "0.3061", "incomeShareTop1": "0.078"}, {"country": "Italy", "year": "2009", "gdpPerCapita": "37079.7586704546", "gdp": "2191241872742.43", "totalPopulation": "59095365", "giniCoefficient": "0.422447770434", "incomeShareBot50": "0.2188", "incomeShareMid40": "0.4788", "incomeShareTop10": "0.3024", "incomeShareTop1": "0.0752"}, {"country": "Italy", "year": "2010", "gdpPerCapita": "36000.5201179254", "gdp": "2134017843247.16", "totalPopulation": "59277417", "giniCoefficient": "0.427764949441", "incomeShareBot50": "0.2157", "incomeShareMid40": "0.4775", "incomeShareTop10": "0.3068", "incomeShareTop1": "0.0787"}, {"country": "Italy", "year": "2011", "gdpPerCapita": "38599.0622070322", "gdp": "2291991045770.29", "totalPopulation": "59379449", "giniCoefficient": "0.42802730821", "incomeShareBot50": "0.2167", "incomeShareMid40": "0.4737", "incomeShareTop10": "0.3096", "incomeShareTop1": "0.0796"}, {"country": "Italy", "year": "2012", "gdpPerCapita": "35053.5262442572", "gdp": "2087077032435.15", "totalPopulation": "59539717", "giniCoefficient": "0.43027697179", "incomeShareBot50": "0.2138", "incomeShareMid40": "0.478", "incomeShareTop10": "0.3082", "incomeShareTop1": "0.0783"}, {"country": "Italy", "year": "2013", "gdpPerCapita": "35549.9746972954", "gdp": "2141315327318.21", "totalPopulation": "60233948", "giniCoefficient": "0.427649761951", "incomeShareBot50": "0.2149", "incomeShareMid40": "0.4797", "incomeShareTop10": "0.3054", "incomeShareTop1": "0.0769"}, {"country": "Italy", "year": "2014", "gdpPerCapita": "35518.4152916749", "gdp": "2159133919743.77", "totalPopulation": "60789140", "giniCoefficient": "0.430483514903", "incomeShareBot50": "0.2128", "incomeShareMid40": "0.4807", "incomeShareTop10": "0.3065", "incomeShareTop1": "0.0782"}, {"country": "Italy", "year": "2015", "gdpPerCapita": "30230.2263021296", "gdp": "1835899237320.04", "totalPopulation": "60730582", "giniCoefficient": "0.432559795844", "incomeShareBot50": "0.2102", "incomeShareMid40": "0.4839", "incomeShareTop10": "0.3059", "incomeShareTop1": "0.0766"}, {"country": "Italy", "year": "2016", "gdpPerCapita": "30939.7142462298", "gdp": "1875797463583.87", "totalPopulation": "60627498", "giniCoefficient": "0.441164101486", "incomeShareBot50": "0.208", "incomeShareMid40": "0.4733", "incomeShareTop10": "0.3187", "incomeShareTop1": "0.0869"}, {"country": "Italy", "year": "2017", "gdpPerCapita": "32326.6742113994", "gdp": "1956950469673.29", "totalPopulation": "60536709", "giniCoefficient": "0.445544971329", "incomeShareBot50": "0.2066", "incomeShareMid40": "0.468", "incomeShareTop10": "0.3254", "incomeShareTop1": "0.0893"}, {"country": "Italy", "year": "2018", "gdpPerCapita": "34608.6756017054", "gdp": "2091117091124.1", "totalPopulation": "60421760", "giniCoefficient": "0.444597804771", "incomeShareBot50": "0.2071", "incomeShareMid40": "0.4686", "incomeShareTop10": "0.3244", "incomeShareTop1": "0.0885"}, {"country": "Italy", "year": "2019", "gdpPerCapita": "33566.7873041609", "gdp": "2004913357800", "totalPopulation": "59729081", "giniCoefficient": "0.444362496828", "incomeShareBot50": "0.2072", "incomeShareMid40": "0.4687", "incomeShareTop10": "0.3241", "incomeShareTop1": "0.0884"}, {"country": "Indonesia", "year": "1980", "gdpPerCapita": "491.579532937367", "gdp": "72482337370.3464", "totalPopulation": "147447834", "giniCoefficient": "0.501593043387", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1981", "gdpPerCapita": "566.577718470656", "gdp": "85518233450.7774", "totalPopulation": "150938222", "giniCoefficient": "0.501593095425", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1982", "gdpPerCapita": "583.669835466384", "gdp": "90158449307.2327", "totalPopulation": "154468235", "giniCoefficient": "0.501593044784", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1983", "gdpPerCapita": "512.959111131332", "gdp": "81052283404.6102", "totalPopulation": "158009248", "giniCoefficient": "0.501593079709", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1984", "gdpPerCapita": "525.33394347037", "gdp": "84853699994.0467", "totalPopulation": "161523353", "giniCoefficient": "0.501593090885", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1985", "gdpPerCapita": "516.960990192592", "gdp": "85289491750.3217", "totalPopulation": "164982452", "giniCoefficient": "0.501593054796", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1986", "gdpPerCapita": "474.859160471754", "gdp": "79954072569.8502", "totalPopulation": "168374287", "giniCoefficient": "0.501593079709", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1987", "gdpPerCapita": "442.215485329073", "gdp": "75929617576.8794", "totalPopulation": "171702756", "giniCoefficient": "0.501593110326", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1988", "gdpPerCapita": "481.781485008976", "gdp": "84300174477.2008", "totalPopulation": "174975953", "giniCoefficient": "0.501593051769", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1989", "gdpPerCapita": "530.003254537422", "gdp": "94451427898.3379", "totalPopulation": "178209147", "giniCoefficient": "0.501593044784", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1990", "gdpPerCapita": "585.076562851392", "gdp": "106140727357.032", "totalPopulation": "181413398", "giniCoefficient": "0.501593145484", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1991", "gdpPerCapita": "631.782857820316", "gdp": "116621996217.133", "totalPopulation": "184591897", "giniCoefficient": "0.501593116147", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1992", "gdpPerCapita": "681.938385611901", "gdp": "128026966579.964", "totalPopulation": "187739786", "giniCoefficient": "0.501593140594", "incomeShareBot50": "0.1826", "incomeShareMid40": "0.4212", "incomeShareTop10": "0.3963", "incomeShareTop1": "0.1049"}, {"country": "Indonesia", "year": "1993", "gdpPerCapita": "827.90526623892", "gdp": "158006700301.533", "totalPopulation": "190851184", "giniCoefficient": "0.53788755461", "incomeShareBot50": "0.1593", "incomeShareMid40": "0.4164", "incomeShareTop10": "0.4243", "incomeShareTop1": "0.1127"}, {"country": "Indonesia", "year": "1994", "gdpPerCapita": "912.203293895825", "gdp": "176892143931.505", "totalPopulation": "193917458", "giniCoefficient": "0.553254974666", "incomeShareBot50": "0.1476", "incomeShareMid40": "0.421", "incomeShareTop10": "0.4314", "incomeShareTop1": "0.1165"}, {"country": "Indonesia", "year": "1995", "gdpPerCapita": "1026.39343607504", "gdp": "202132028723.115", "totalPopulation": "196934257", "giniCoefficient": "0.568466047565", "incomeShareBot50": "0.1359", "incomeShareMid40": "0.4256", "incomeShareTop10": "0.4385", "incomeShareTop1": "0.1203"}, {"country": "Indonesia", "year": "1996", "gdpPerCapita": "1137.41010116628", "gdp": "227369679374.973", "totalPopulation": "199901231", "giniCoefficient": "0.585788796379", "incomeShareBot50": "0.1229", "incomeShareMid40": "0.4309", "incomeShareTop10": "0.4462", "incomeShareTop1": "0.1243"}, {"country": "Indonesia", "year": "1997", "gdpPerCapita": "1063.71237573753", "gdp": "215748998609.635", "totalPopulation": "202826444", "giniCoefficient": "0.548672021366", "incomeShareBot50": "0.1493", "incomeShareMid40": "0.4258", "incomeShareTop10": "0.4249", "incomeShareTop1": "0.118"}, {"country": "Indonesia", "year": "1998", "gdpPerCapita": "463.948158190899", "gdp": "95445547872.715", "totalPopulation": "205724597", "giniCoefficient": "0.513147177406", "incomeShareBot50": "0.1747", "incomeShareMid40": "0.4214", "incomeShareTop10": "0.4039", "incomeShareTop1": "0.1117"}, {"country": "Indonesia", "year": "1999", "gdpPerCapita": "671.098609676196", "gdp": "140001351215.462", "totalPopulation": "208615171", "giniCoefficient": "0.476928456053", "incomeShareBot50": "0.2006", "incomeShareMid40": "0.4168", "incomeShareTop10": "0.3825", "incomeShareTop1": "0.1053"}, {"country": "Indonesia", "year": "2000", "gdpPerCapita": "780.19020467518", "gdp": "165021012077.81", "totalPopulation": "211513822", "giniCoefficient": "0.484668631881", "incomeShareBot50": "0.1959", "incomeShareMid40": "0.4154", "incomeShareTop10": "0.3886", "incomeShareTop1": "0.1067"}, {"country": "Indonesia", "year": "2001", "gdpPerCapita": "748.257608719846", "gdp": "160446947784.909", "totalPopulation": "214427419", "giniCoefficient": "0.492394534132", "incomeShareBot50": "0.1912", "incomeShareMid40": "0.4141", "incomeShareTop10": "0.3947", "incomeShareTop1": "0.1082"}, {"country": "Indonesia", "year": "2002", "gdpPerCapita": "900.177588137897", "gdp": "195660611165.183", "totalPopulation": "217357790", "giniCoefficient": "0.500105988305", "incomeShareBot50": "0.1865", "incomeShareMid40": "0.4127", "incomeShareTop10": "0.4008", "incomeShareTop1": "0.1096"}, {"country": "Indonesia", "year": "2003", "gdpPerCapita": "1065.6485199064", "gdp": "234772463823.808", "totalPopulation": "220309473", "giniCoefficient": "0.51339546314", "incomeShareBot50": "0.1789", "incomeShareMid40": "0.4083", "incomeShareTop10": "0.4128", "incomeShareTop1": "0.1151"}, {"country": "Indonesia", "year": "2004", "gdpPerCapita": "1150.26136651088", "gdp": "256836875295.452", "totalPopulation": "223285666", "giniCoefficient": "0.526634125916", "incomeShareBot50": "0.1714", "incomeShareMid40": "0.4039", "incomeShareTop10": "0.4247", "incomeShareTop1": "0.1207"}, {"country": "Indonesia", "year": "2005", "gdpPerCapita": "1263.28733171098", "gdp": "285868618224.017", "totalPopulation": "226289468", "giniCoefficient": "0.539822121855", "incomeShareBot50": "0.1638", "incomeShareMid40": "0.3996", "incomeShareTop10": "0.4366", "incomeShareTop1": "0.1262"}, {"country": "Indonesia", "year": "2006", "gdpPerCapita": "1589.80148866142", "gdp": "364570514304.85", "totalPopulation": "229318262", "giniCoefficient": "0.540196004673", "incomeShareBot50": "0.1623", "incomeShareMid40": "0.4034", "incomeShareTop10": "0.4344", "incomeShareTop1": "0.1247"}, {"country": "Indonesia", "year": "2007", "gdpPerCapita": "1860.00281113287", "gdp": "432216737774.861", "totalPopulation": "232374239", "giniCoefficient": "0.540568787685", "incomeShareBot50": "0.1607", "incomeShareMid40": "0.4072", "incomeShareTop10": "0.4321", "incomeShareTop1": "0.1233"}, {"country": "Indonesia", "year": "2008", "gdpPerCapita": "2166.85423141608", "gdp": "510228634992.258", "totalPopulation": "235469755", "giniCoefficient": "0.5409407152", "incomeShareBot50": "0.1592", "incomeShareMid40": "0.4109", "incomeShareTop10": "0.4299", "incomeShareTop1": "0.1218"}, {"country": "Indonesia", "year": "2009", "gdpPerCapita": "2261.24730903274", "gdp": "539580085612.401", "totalPopulation": "238620554", "giniCoefficient": "0.535949336223", "incomeShareBot50": "0.1623", "incomeShareMid40": "0.412", "incomeShareTop10": "0.4257", "incomeShareTop1": "0.1178"}, {"country": "Indonesia", "year": "2010", "gdpPerCapita": "3122.36267319362", "gdp": "755094160363.071", "totalPopulation": "241834226", "giniCoefficient": "0.530943678179", "incomeShareBot50": "0.1654", "incomeShareMid40": "0.4131", "incomeShareTop10": "0.4215", "incomeShareTop1": "0.1137"}, {"country": "Indonesia", "year": "2011", "gdpPerCapita": "3643.04717619274", "gdp": "892969107923.094", "totalPopulation": "245115988", "giniCoefficient": "0.525923346236", "incomeShareBot50": "0.1686", "incomeShareMid40": "0.4142", "incomeShareTop10": "0.4172", "incomeShareTop1": "0.1097"}, {"country": "Indonesia", "year": "2012", "gdpPerCapita": "3694.35933980214", "gdp": "917869910105.749", "totalPopulation": "248451714", "giniCoefficient": "0.523852326256", "incomeShareBot50": "0.17", "incomeShareMid40": "0.4139", "incomeShareTop10": "0.416", "incomeShareTop1": "0.1103"}, {"country": "Indonesia", "year": "2013", "gdpPerCapita": "3623.92724054274", "gdp": "912524136718.018", "totalPopulation": "251805314", "giniCoefficient": "0.521781167774", "incomeShareBot50": "0.1715", "incomeShareMid40": "0.4137", "incomeShareTop10": "0.4148", "incomeShareTop1": "0.111"}, {"country": "Indonesia", "year": "2014", "gdpPerCapita": "3491.63749125449", "gdp": "890814755233.225", "totalPopulation": "255128076", "giniCoefficient": "0.519709798443", "incomeShareBot50": "0.1729", "incomeShareMid40": "0.4135", "incomeShareTop10": "0.4136", "incomeShareTop1": "0.1116"}, {"country": "Indonesia", "year": "2015", "gdpPerCapita": "3331.69511469189", "gdp": "860854235065.079", "totalPopulation": "258383257", "giniCoefficient": "0.522089925165", "incomeShareBot50": "0.1707", "incomeShareMid40": "0.415", "incomeShareTop10": "0.4143", "incomeShareTop1": "0.112"}, {"country": "Indonesia", "year": "2016", "gdpPerCapita": "3562.81633352183", "gdp": "931877364177.742", "totalPopulation": "261556386", "giniCoefficient": "0.524466154383", "incomeShareBot50": "0.1685", "incomeShareMid40": "0.4165", "incomeShareTop10": "0.415", "incomeShareTop1": "0.1123"}, {"country": "Indonesia", "year": "2017", "gdpPerCapita": "3837.57802362633", "gdp": "1015618742565.81", "totalPopulation": "264650969", "giniCoefficient": "0.528293598916", "incomeShareBot50": "0.1638", "incomeShareMid40": "0.4232", "incomeShareTop10": "0.413", "incomeShareTop1": "0.1086"}, {"country": "Indonesia", "year": "2018", "gdpPerCapita": "3893.85957814877", "gdp": "1042271531011.99", "totalPopulation": "267670549", "giniCoefficient": "0.528293616146", "incomeShareBot50": "0.1638", "incomeShareMid40": "0.4232", "incomeShareTop10": "0.413", "incomeShareTop1": "0.1086"}, {"country": "Indonesia", "year": "2019", "gdpPerCapita": "4135.20153132694", "gdp": "1119091259074.62", "totalPopulation": "270625567", "giniCoefficient": "0.528293557123", "incomeShareBot50": "0.1638", "incomeShareMid40": "0.4232", "incomeShareTop10": "0.413", "incomeShareTop1": "0.1086"}, {"country": "Japan", "year": "1980", "gdpPerCapita": "9463.35385519596", "gdp": "1105385973763.87", "totalPopulation": "116807000", "giniCoefficient": "0.452219352587", "incomeShareBot50": "0.211", "incomeShareMid40": "0.4375", "incomeShareTop10": "0.3515", "incomeShareTop1": "0.0963"}, {"country": "Japan", "year": "1981", "gdpPerCapita": "10360.1782674787", "gdp": "1218988935129.81", "totalPopulation": "117661000", "giniCoefficient": "0.448739968339", "incomeShareBot50": "0.2129", "incomeShareMid40": "0.4388", "incomeShareTop10": "0.3483", "incomeShareTop1": "0.0942"}, {"country": "Japan", "year": "1982", "gdpPerCapita": "9575.60771340783", "gdp": "1134518001884.56", "totalPopulation": "118480000", "giniCoefficient": "0.447345584233", "incomeShareBot50": "0.2138", "incomeShareMid40": "0.4385", "incomeShareTop10": "0.3476", "incomeShareTop1": "0.0938"}, {"country": "Japan", "year": "1983", "gdpPerCapita": "10421.2124356394", "gdp": "1243323592058.83", "totalPopulation": "119307000", "giniCoefficient": "0.450625654631", "incomeShareBot50": "0.2116", "incomeShareMid40": "0.4385", "incomeShareTop10": "0.3499", "incomeShareTop1": "0.0936"}, {"country": "Japan", "year": "1984", "gdpPerCapita": "10978.9198054992", "gdp": "1318381627003.76", "totalPopulation": "120083000", "giniCoefficient": "0.453280901478", "incomeShareBot50": "0.2102", "incomeShareMid40": "0.4371", "incomeShareTop10": "0.3527", "incomeShareTop1": "0.0945"}, {"country": "Japan", "year": "1985", "gdpPerCapita": "11576.6921126865", "gdp": "1398892744820.69", "totalPopulation": "120837000", "giniCoefficient": "0.459555003264", "incomeShareBot50": "0.2065", "incomeShareMid40": "0.4353", "incomeShareTop10": "0.3582", "incomeShareTop1": "0.0964"}, {"country": "Japan", "year": "1986", "gdpPerCapita": "17113.2623242419", "gdp": "2078953333673.55", "totalPopulation": "121482000", "giniCoefficient": "0.465669047266", "incomeShareBot50": "0.2038", "incomeShareMid40": "0.4304", "incomeShareTop10": "0.3657", "incomeShareTop1": "0.1012"}, {"country": "Japan", "year": "1987", "gdpPerCapita": "20748.9909244528", "gdp": "2532808573157.03", "totalPopulation": "122069000", "giniCoefficient": "0.479818277277", "incomeShareBot50": "0.198", "incomeShareMid40": "0.4181", "incomeShareTop10": "0.384", "incomeShareTop1": "0.1144"}, {"country": "Japan", "year": "1988", "gdpPerCapita": "25059.0074334621", "gdp": "3071683013178.91", "totalPopulation": "122578000", "giniCoefficient": "0.48533673645", "incomeShareBot50": "0.1951", "incomeShareMid40": "0.4148", "incomeShareTop10": "0.39", "incomeShareTop1": "0.117"}, {"country": "Japan", "year": "1989", "gdpPerCapita": "24822.7755670655", "gdp": "3054914166263.18", "totalPopulation": "123069000", "giniCoefficient": "0.492556843447", "incomeShareBot50": "0.1925", "incomeShareMid40": "0.4079", "incomeShareTop10": "0.3996", "incomeShareTop1": "0.1283"}, {"country": "Japan", "year": "1990", "gdpPerCapita": "25371.4641705246", "gdp": "3132817652848.04", "totalPopulation": "123478000", "giniCoefficient": "0.496866642839", "incomeShareBot50": "0.1915", "incomeShareMid40": "0.402", "incomeShareTop10": "0.4064", "incomeShareTop1": "0.1376"}, {"country": "Japan", "year": "1991", "gdpPerCapita": "28915.0082048082", "gdp": "3584420077100.84", "totalPopulation": "123964000", "giniCoefficient": "0.487569908353", "incomeShareBot50": "0.1958", "incomeShareMid40": "0.4084", "incomeShareTop10": "0.3958", "incomeShareTop1": "0.1291"}, {"country": "Japan", "year": "1992", "gdpPerCapita": "31414.9846370412", "gdp": "3908809463463.86", "totalPopulation": "124425000", "giniCoefficient": "0.455879614334", "incomeShareBot50": "0.2087", "incomeShareMid40": "0.4356", "incomeShareTop10": "0.3557", "incomeShareTop1": "0.0932"}, {"country": "Japan", "year": "1993", "gdpPerCapita": "35681.9639422506", "gdp": "4454143876947.21", "totalPopulation": "124829000", "giniCoefficient": "0.460901366913", "incomeShareBot50": "0.2059", "incomeShareMid40": "0.4333", "incomeShareTop10": "0.3608", "incomeShareTop1": "0.0952"}, {"country": "Japan", "year": "1994", "gdpPerCapita": "39200.4935729096", "gdp": "4907039384469.68", "totalPopulation": "125178000", "giniCoefficient": "0.46457524484", "incomeShareBot50": "0.2038", "incomeShareMid40": "0.4315", "incomeShareTop10": "0.3647", "incomeShareTop1": "0.094"}, {"country": "Japan", "year": "1995", "gdpPerCapita": "43428.9427520172", "gdp": "5449116304981.1", "totalPopulation": "125472000", "giniCoefficient": "0.472631311317", "incomeShareBot50": "0.1995", "incomeShareMid40": "0.4271", "incomeShareTop10": "0.3734", "incomeShareTop1": "0.0964"}, {"country": "Japan", "year": "1996", "gdpPerCapita": "38436.9263119118", "gdp": "4833712542207.1", "totalPopulation": "125757000", "giniCoefficient": "0.479659813802", "incomeShareBot50": "0.1959", "incomeShareMid40": "0.4233", "incomeShareTop10": "0.3808", "incomeShareTop1": "0.1007"}, {"country": "Japan", "year": "1997", "gdpPerCapita": "35021.7190917159", "gdp": "4414732843544.43", "totalPopulation": "126057000", "giniCoefficient": "0.47883099506", "incomeShareBot50": "0.1956", "incomeShareMid40": "0.4255", "incomeShareTop10": "0.3789", "incomeShareTop1": "0.0955"}, {"country": "Japan", "year": "1998", "gdpPerCapita": "31902.7670955137", "gdp": "4032509760872.94", "totalPopulation": "126400000", "giniCoefficient": "0.482325369953", "incomeShareBot50": "0.1939", "incomeShareMid40": "0.4228", "incomeShareTop10": "0.3833", "incomeShareTop1": "0.0952"}, {"country": "Japan", "year": "1999", "gdpPerCapita": "36026.5560750168", "gdp": "4562078822335.45", "totalPopulation": "126631000", "giniCoefficient": "0.487809510519", "incomeShareBot50": "0.1914", "incomeShareMid40": "0.4183", "incomeShareTop10": "0.3903", "incomeShareTop1": "0.0978"}, {"country": "Japan", "year": "2000", "gdpPerCapita": "38532.0408752935", "gdp": "4887519660744.86", "totalPopulation": "126843000", "giniCoefficient": "0.495858110479", "incomeShareBot50": "0.1876", "incomeShareMid40": "0.4125", "incomeShareTop10": "0.3999", "incomeShareTop1": "0.1025"}, {"country": "Japan", "year": "2001", "gdpPerCapita": "33846.4656414342", "gdp": "4303544259842.72", "totalPopulation": "127149000", "giniCoefficient": "0.505894183296", "incomeShareBot50": "0.1828", "incomeShareMid40": "0.4044", "incomeShareTop10": "0.4128", "incomeShareTop1": "0.1051"}, {"country": "Japan", "year": "2002", "gdpPerCapita": "32289.3505360726", "gdp": "4115116279069.77", "totalPopulation": "127445000", "giniCoefficient": "0.513497130447", "incomeShareBot50": "0.1791", "incomeShareMid40": "0.3988", "incomeShareTop10": "0.4221", "incomeShareTop1": "0.1072"}, {"country": "Japan", "year": "2003", "gdpPerCapita": "34808.3909176613", "gdp": "4445658071221.86", "totalPopulation": "127718000", "giniCoefficient": "0.518400298254", "incomeShareBot50": "0.177", "incomeShareMid40": "0.3943", "incomeShareTop10": "0.4286", "incomeShareTop1": "0.1107"}, {"country": "Japan", "year": "2004", "gdpPerCapita": "37688.7223359406", "gdp": "4815148854362.11", "totalPopulation": "127761000", "giniCoefficient": "0.525362912085", "incomeShareBot50": "0.1742", "incomeShareMid40": "0.3882", "incomeShareTop10": "0.4376", "incomeShareTop1": "0.1176"}, {"country": "Japan", "year": "2005", "gdpPerCapita": "37217.648727917", "gdp": "4755410630912.14", "totalPopulation": "127773000", "giniCoefficient": "0.526842652387", "incomeShareBot50": "0.174", "incomeShareMid40": "0.3861", "incomeShareTop10": "0.4399", "incomeShareTop1": "0.1224"}, {"country": "Japan", "year": "2006", "gdpPerCapita": "35433.988963743", "gdp": "4530377224970.4", "totalPopulation": "127854000", "giniCoefficient": "0.52831661481", "incomeShareBot50": "0.1737", "incomeShareMid40": "0.3839", "incomeShareTop10": "0.4425", "incomeShareTop1": "0.1245"}, {"country": "Japan", "year": "2007", "gdpPerCapita": "35275.2284312667", "gdp": "4515264514430.57", "totalPopulation": "128001000", "giniCoefficient": "0.529778849353", "incomeShareBot50": "0.1729", "incomeShareMid40": "0.3828", "incomeShareTop10": "0.4443", "incomeShareTop1": "0.1247"}, {"country": "Japan", "year": "2008", "gdpPerCapita": "39339.2975731826", "gdp": "5037908465114.48", "totalPopulation": "128063000", "giniCoefficient": "0.524063748064", "incomeShareBot50": "0.1754", "incomeShareMid40": "0.3873", "incomeShareTop10": "0.4373", "incomeShareTop1": "0.1193"}, {"country": "Japan", "year": "2009", "gdpPerCapita": "40855.1756354596", "gdp": "5231382674593.7", "totalPopulation": "128047000", "giniCoefficient": "0.515898541989", "incomeShareBot50": "0.1791", "incomeShareMid40": "0.3935", "incomeShareTop10": "0.4274", "incomeShareTop1": "0.1135"}, {"country": "Japan", "year": "2010", "gdpPerCapita": "44507.6763859172", "gdp": "5700098114744.41", "totalPopulation": "128070000", "giniCoefficient": "0.52002875509", "incomeShareBot50": "0.1769", "incomeShareMid40": "0.3917", "incomeShareTop10": "0.4314", "incomeShareTop1": "0.1158"}, {"country": "Japan", "year": "2011", "gdpPerCapita": "48167.9972684965", "gdp": "6157459594823.72", "totalPopulation": "127833000", "giniCoefficient": "0.519314208273", "incomeShareBot50": "0.1772", "incomeShareMid40": "0.392", "incomeShareTop10": "0.4308", "incomeShareTop1": "0.1151"}, {"country": "Japan", "year": "2012", "gdpPerCapita": "48603.4766497749", "gdp": "6203213121334.12", "totalPopulation": "127629000", "giniCoefficient": "0.519660537993", "incomeShareBot50": "0.1771", "incomeShareMid40": "0.3919", "incomeShareTop10": "0.4311", "incomeShareTop1": "0.1155"}, {"country": "Japan", "year": "2013", "gdpPerCapita": "40454.4474578903", "gdp": "5155717056270.83", "totalPopulation": "127445000", "giniCoefficient": "0.520426222404", "incomeShareBot50": "0.1767", "incomeShareMid40": "0.3916", "incomeShareTop10": "0.4317", "incomeShareTop1": "0.1163"}, {"country": "Japan", "year": "2014", "gdpPerCapita": "38109.4121125573", "gdp": "4850413536037.84", "totalPopulation": "127276000", "giniCoefficient": "0.520311500023", "incomeShareBot50": "0.1767", "incomeShareMid40": "0.3917", "incomeShareTop10": "0.4316", "incomeShareTop1": "0.1161"}, {"country": "Japan", "year": "2015", "gdpPerCapita": "34524.4698609337", "gdp": "4389475622588.97", "totalPopulation": "127141000", "giniCoefficient": "0.520718305148", "incomeShareBot50": "0.1765", "incomeShareMid40": "0.3915", "incomeShareTop10": "0.432", "incomeShareTop1": "0.1166"}, {"country": "Japan", "year": "2016", "gdpPerCapita": "38761.8181501925", "gdp": "4922538141454.62", "totalPopulation": "126994511", "giniCoefficient": "0.520425006823", "incomeShareBot50": "0.1767", "incomeShareMid40": "0.3916", "incomeShareTop10": "0.4317", "incomeShareTop1": "0.1163"}, {"country": "Japan", "year": "2017", "gdpPerCapita": "38386.5111457057", "gdp": "4866864409657.68", "totalPopulation": "126785797", "giniCoefficient": "0.520327280903", "incomeShareBot50": "0.1767", "incomeShareMid40": "0.3917", "incomeShareTop10": "0.4316", "incomeShareTop1": "0.1162"}, {"country": "Japan", "year": "2018", "gdpPerCapita": "39159.4235633952", "gdp": "4954806619995.19", "totalPopulation": "126529100", "giniCoefficient": "0.520327343664", "incomeShareBot50": "0.1767", "incomeShareMid40": "0.3917", "incomeShareTop10": "0.4316", "incomeShareTop1": "0.1162"}, {"country": "Japan", "year": "2019", "gdpPerCapita": "40113.0609702277", "gdp": "5064872875604.59", "totalPopulation": "126264931", "giniCoefficient": "0.52032728684", "incomeShareBot50": "0.1767", "incomeShareMid40": "0.3917", "incomeShareTop10": "0.4316", "incomeShareTop1": "0.1162"}, {"country": "United States", "year": "1980", "gdpPerCapita": "12574.7915062163", "gdp": "2857307000000", "totalPopulation": "227225000", "giniCoefficient": "0.470010876581", "incomeShareBot50": "0.1907", "incomeShareMid40": "0.4674", "incomeShareTop10": "0.342", "incomeShareTop1": "0.1048"}, {"country": "United States", "year": "1981", "gdpPerCapita": "13976.1097504641", "gdp": "3207042000000", "totalPopulation": "229466000", "giniCoefficient": "0.475497393529", "incomeShareBot50": "0.1873", "incomeShareMid40": "0.4663", "incomeShareTop10": "0.3464", "incomeShareTop1": "0.1069"}, {"country": "United States", "year": "1982", "gdpPerCapita": "14433.787727053", "gdp": "3343789000000", "totalPopulation": "231664000", "giniCoefficient": "0.480280004772", "incomeShareBot50": "0.1833", "incomeShareMid40": "0.4683", "incomeShareTop10": "0.3483", "incomeShareTop1": "0.1097"}, {"country": "United States", "year": "1983", "gdpPerCapita": "15543.8937174925", "gdp": "3634038000000", "totalPopulation": "233792000", "giniCoefficient": "0.490012284859", "incomeShareBot50": "0.1765", "incomeShareMid40": "0.4691", "incomeShareTop10": "0.3544", "incomeShareTop1": "0.1135"}, {"country": "United States", "year": "1984", "gdpPerCapita": "17121.2254849995", "gdp": "4037613000000", "totalPopulation": "235825000", "giniCoefficient": "0.499750278366", "incomeShareBot50": "0.1725", "incomeShareMid40": "0.4606", "incomeShareTop10": "0.3669", "incomeShareTop1": "0.1199"}, {"country": "United States", "year": "1985", "gdpPerCapita": "18236.8277265009", "gdp": "4338979000000", "totalPopulation": "237924000", "giniCoefficient": "0.500955798381", "incomeShareBot50": "0.1716", "incomeShareMid40": "0.4611", "incomeShareTop10": "0.3673", "incomeShareTop1": "0.121"}, {"country": "United States", "year": "1986", "gdpPerCapita": "19071.2271949295", "gdp": "4579631000000", "totalPopulation": "240133000", "giniCoefficient": "0.500568619839", "incomeShareBot50": "0.1706", "incomeShareMid40": "0.4651", "incomeShareTop10": "0.3643", "incomeShareTop1": "0.1176"}, {"country": "United States", "year": "1987", "gdpPerCapita": "20038.9410992658", "gdp": "4855215000000", "totalPopulation": "242289000", "giniCoefficient": "0.508069304858", "incomeShareBot50": "0.1678", "incomeShareMid40": "0.4584", "incomeShareTop10": "0.3738", "incomeShareTop1": "0.1292"}, {"country": "United States", "year": "1988", "gdpPerCapita": "21417.0119305191", "gdp": "5236438000000", "totalPopulation": "244499000", "giniCoefficient": "0.521651326183", "incomeShareBot50": "0.163", "incomeShareMid40": "0.4462", "incomeShareTop10": "0.3908", "incomeShareTop1": "0.1472"}, {"country": "United States", "year": "1989", "gdpPerCapita": "22857.1544330056", "gdp": "5641580000000", "totalPopulation": "246819000", "giniCoefficient": "0.518859379399", "incomeShareBot50": "0.1638", "incomeShareMid40": "0.4494", "incomeShareTop10": "0.3867", "incomeShareTop1": "0.1428"}, {"country": "United States", "year": "1990", "gdpPerCapita": "23888.6000088133", "gdp": "5963144000000", "totalPopulation": "249623000", "giniCoefficient": "0.519286827797", "incomeShareBot50": "0.1632", "incomeShareMid40": "0.4504", "incomeShareTop10": "0.3864", "incomeShareTop1": "0.1431"}, {"country": "United States", "year": "1991", "gdpPerCapita": "24342.2589048189", "gdp": "6158129000000", "totalPopulation": "252981000", "giniCoefficient": "0.519212741013", "incomeShareBot50": "0.1618", "incomeShareMid40": "0.454", "incomeShareTop10": "0.3843", "incomeShareTop1": "0.1359"}, {"country": "United States", "year": "1992", "gdpPerCapita": "25418.9907763319", "gdp": "6520327000000", "totalPopulation": "256514000", "giniCoefficient": "0.530703522986", "incomeShareBot50": "0.155", "incomeShareMid40": "0.4504", "incomeShareTop10": "0.3947", "incomeShareTop1": "0.1453"}, {"country": "United States", "year": "1993", "gdpPerCapita": "26387.2937338171", "gdp": "6858559000000", "totalPopulation": "259919000", "giniCoefficient": "0.527783337757", "incomeShareBot50": "0.1563", "incomeShareMid40": "0.4525", "incomeShareTop10": "0.3912", "incomeShareTop1": "0.1402"}, {"country": "United States", "year": "1994", "gdpPerCapita": "27694.853416234", "gdp": "7287236000000", "totalPopulation": "263126000", "giniCoefficient": "0.527972687348", "incomeShareBot50": "0.1559", "incomeShareMid40": "0.4524", "incomeShareTop10": "0.3917", "incomeShareTop1": "0.1387"}, {"country": "United States", "year": "1995", "gdpPerCapita": "28690.8757013347", "gdp": "7639749000000", "totalPopulation": "266278000", "giniCoefficient": "0.535864676011", "incomeShareBot50": "0.1521", "incomeShareMid40": "0.4483", "incomeShareTop10": "0.3996", "incomeShareTop1": "0.144"}, {"country": "United States", "year": "1996", "gdpPerCapita": "29967.7127181749", "gdp": "8073122000000", "totalPopulation": "269394000", "giniCoefficient": "0.5428981768", "incomeShareBot50": "0.1496", "incomeShareMid40": "0.4416", "incomeShareTop10": "0.4088", "incomeShareTop1": "0.1515"}, {"country": "United States", "year": "1997", "gdpPerCapita": "31459.1389804773", "gdp": "8577554457000", "totalPopulation": "272657000", "giniCoefficient": "0.548769393054", "incomeShareBot50": "0.1474", "incomeShareMid40": "0.4368", "incomeShareTop10": "0.4158", "incomeShareTop1": "0.1586"}, {"country": "United States", "year": "1998", "gdpPerCapita": "32853.6769523009", "gdp": "9062818202000", "totalPopulation": "275854000", "giniCoefficient": "0.550594428691", "incomeShareBot50": "0.1479", "incomeShareMid40": "0.4321", "incomeShareTop10": "0.42", "incomeShareTop1": "0.1629"}, {"country": "United States", "year": "1999", "gdpPerCapita": "34513.5615037271", "gdp": "9630664202000", "totalPopulation": "279040000", "giniCoefficient": "0.553136260797", "incomeShareBot50": "0.1471", "incomeShareMid40": "0.4298", "incomeShareTop10": "0.4231", "incomeShareTop1": "0.1666"}, {"country": "United States", "year": "2000", "gdpPerCapita": "36334.9087770589", "gdp": "10252345464000", "totalPopulation": "282162411", "giniCoefficient": "0.556784005796", "incomeShareBot50": "0.1463", "incomeShareMid40": "0.4251", "incomeShareTop10": "0.4286", "incomeShareTop1": "0.1737"}, {"country": "United States", "year": "2001", "gdpPerCapita": "37133.2428088526", "gdp": "10581821399000", "totalPopulation": "284968955", "giniCoefficient": "0.550182202752", "incomeShareBot50": "0.1488", "incomeShareMid40": "0.4311", "incomeShareTop10": "0.4201", "incomeShareTop1": "0.1658"}, {"country": "United States", "year": "2002", "gdpPerCapita": "38023.1611144021", "gdp": "10936419054000", "totalPopulation": "287625193", "giniCoefficient": "0.547358586569", "incomeShareBot50": "0.1492", "incomeShareMid40": "0.4349", "incomeShareTop10": "0.416", "incomeShareTop1": "0.1607"}, {"country": "United States", "year": "2003", "gdpPerCapita": "39496.4858751381", "gdp": "11458243878000", "totalPopulation": "290107933", "giniCoefficient": "0.549998960806", "incomeShareBot50": "0.1467", "incomeShareMid40": "0.4366", "incomeShareTop10": "0.4167", "incomeShareTop1": "0.1627"}, {"country": "United States", "year": "2004", "gdpPerCapita": "41712.8010675545", "gdp": "12213729147000", "totalPopulation": "292805298", "giniCoefficient": "0.556391283445", "incomeShareBot50": "0.144", "incomeShareMid40": "0.4318", "incomeShareTop10": "0.4242", "incomeShareTop1": "0.1695"}, {"country": "United States", "year": "2005", "gdpPerCapita": "44114.7477810544", "gdp": "13036640230000", "totalPopulation": "295516599", "giniCoefficient": "0.565451435477", "incomeShareBot50": "0.1401", "incomeShareMid40": "0.4255", "incomeShareTop10": "0.4344", "incomeShareTop1": "0.1778"}, {"country": "United States", "year": "2006", "gdpPerCapita": "46298.7314440927", "gdp": "13814611414000", "totalPopulation": "298379912", "giniCoefficient": "0.571690027066", "incomeShareBot50": "0.1379", "incomeShareMid40": "0.4198", "incomeShareTop10": "0.4423", "incomeShareTop1": "0.1837"}, {"country": "United States", "year": "2007", "gdpPerCapita": "47975.9676958038", "gdp": "14451858656000", "totalPopulation": "301231207", "giniCoefficient": "0.570228327842", "incomeShareBot50": "0.1396", "incomeShareMid40": "0.4184", "incomeShareTop10": "0.442", "incomeShareTop1": "0.1851"}, {"country": "United States", "year": "2008", "gdpPerCapita": "48382.5584490552", "gdp": "14712844084000", "totalPopulation": "304093966", "giniCoefficient": "0.56851908369", "incomeShareBot50": "0.1393", "incomeShareMid40": "0.4227", "incomeShareTop10": "0.438", "incomeShareTop1": "0.1812"}, {"country": "United States", "year": "2009", "gdpPerCapita": "47099.9804711343", "gdp": "14448933025000", "totalPopulation": "306771529", "giniCoefficient": "0.562513462649", "incomeShareBot50": "0.1388", "incomeShareMid40": "0.4353", "incomeShareTop10": "0.4259", "incomeShareTop1": "0.1672"}, {"country": "United States", "year": "2010", "gdpPerCapita": "48466.6576026922", "gdp": "14992052727000", "totalPopulation": "309327143", "giniCoefficient": "0.572674869415", "incomeShareBot50": "0.1349", "incomeShareMid40": "0.4263", "incomeShareTop10": "0.4388", "incomeShareTop1": "0.1772"}, {"country": "United States", "year": "2011", "gdpPerCapita": "49882.5581321495", "gdp": "15542581104000", "totalPopulation": "311583481", "giniCoefficient": "0.579062887558", "incomeShareBot50": "0.1316", "incomeShareMid40": "0.4237", "incomeShareTop10": "0.4447", "incomeShareTop1": "0.1822"}, {"country": "United States", "year": "2012", "gdpPerCapita": "51602.9310457907", "gdp": "16197007349000", "totalPopulation": "313877662", "giniCoefficient": "0.58644963757", "incomeShareBot50": "0.1296", "incomeShareMid40": "0.4149", "incomeShareTop10": "0.4555", "incomeShareTop1": "0.1933"}, {"country": "United States", "year": "2013", "gdpPerCapita": "53106.5367672165", "gdp": "16784849196000", "totalPopulation": "316059947", "giniCoefficient": "0.583214796073", "incomeShareBot50": "0.1305", "incomeShareMid40": "0.4189", "incomeShareTop10": "0.4506", "incomeShareTop1": "0.184"}, {"country": "United States", "year": "2014", "gdpPerCapita": "55049.9883272312", "gdp": "17527163695000", "totalPopulation": "318386329", "giniCoefficient": "0.588656058437", "incomeShareBot50": "0.1282", "incomeShareMid40": "0.4151", "incomeShareTop10": "0.4567", "incomeShareTop1": "0.1893"}, {"country": "United States", "year": "2015", "gdpPerCapita": "56863.3714957652", "gdp": "18238300569000", "totalPopulation": "320738994", "giniCoefficient": "0.58785950985", "incomeShareBot50": "0.1289", "incomeShareMid40": "0.4142", "incomeShareTop10": "0.4568", "incomeShareTop1": "0.1888"}, {"country": "United States", "year": "2016", "gdpPerCapita": "58021.4004997125", "gdp": "18745075687000", "totalPopulation": "323071755", "giniCoefficient": "0.587126771481", "incomeShareBot50": "0.1283", "incomeShareMid40": "0.4175", "incomeShareTop10": "0.4543", "incomeShareTop1": "0.1863"}, {"country": "United States", "year": "2017", "gdpPerCapita": "60109.6557260477", "gdp": "19542979183000", "totalPopulation": "325122128", "giniCoefficient": "0.581872733739", "incomeShareBot50": "0.1334", "incomeShareMid40": "0.4131", "incomeShareTop10": "0.4535", "incomeShareTop1": "0.188"}, {"country": "United States", "year": "2018", "gdpPerCapita": "63064.4184096731", "gdp": "20611860934000", "totalPopulation": "326838199", "giniCoefficient": "0.583856788121", "incomeShareBot50": "0.1326", "incomeShareMid40": "0.4111", "incomeShareTop10": "0.4563", "incomeShareTop1": "0.1896"}, {"country": "United States", "year": "2019", "gdpPerCapita": "65279.5290260953", "gdp": "21433224697000", "totalPopulation": "328329953", "giniCoefficient": "0.582543164445", "incomeShareBot50": "0.1331", "incomeShareMid40": "0.4124", "incomeShareTop10": "0.4546", "incomeShareTop1": "0.1876"}, {"country": "United Kingdom", "year": "1980", "gdpPerCapita": "10032.062080015", "gdp": "564947710899.373", "totalPopulation": "56314216", "giniCoefficient": "0.423394776089", "incomeShareBot50": "0.2179", "incomeShareMid40": "0.4824", "incomeShareTop10": "0.2998", "incomeShareTop1": "0.0821"}, {"country": "United Kingdom", "year": "1981", "gdpPerCapita": "9599.30622221965", "gdp": "540765675241.158", "totalPopulation": "56333829", "giniCoefficient": "0.423388303287", "incomeShareBot50": "0.2179", "incomeShareMid40": "0.4824", "incomeShareTop10": "0.2998", "incomeShareTop1": "0.0821"}, {"country": "United Kingdom", "year": "1982", "gdpPerCapita": "9146.07735701852", "gdp": "515048916841.37", "totalPopulation": "56313641", "giniCoefficient": "0.425171557579", "incomeShareBot50": "0.2167", "incomeShareMid40": "0.4818", "incomeShareTop10": "0.3015", "incomeShareTop1": "0.0838"}, {"country": "United Kingdom", "year": "1983", "gdpPerCapita": "8691.51881306514", "gdp": "489618008185.539", "totalPopulation": "56332848", "giniCoefficient": "0.428842417009", "incomeShareBot50": "0.2141", "incomeShareMid40": "0.4808", "incomeShareTop10": "0.3051", "incomeShareTop1": "0.0832"}, {"country": "United Kingdom", "year": "1984", "gdpPerCapita": "8179.19444064991", "gdp": "461487097632.349", "totalPopulation": "56422072", "giniCoefficient": "0.436839317488", "incomeShareBot50": "0.2096", "incomeShareMid40": "0.4786", "incomeShareTop10": "0.3117", "incomeShareTop1": "0.0857"}, {"country": "United Kingdom", "year": "1985", "gdpPerCapita": "8652.21654247593", "gdp": "489285164271.047", "totalPopulation": "56550268", "giniCoefficient": "0.440287420158", "incomeShareBot50": "0.2066", "incomeShareMid40": "0.481", "incomeShareTop10": "0.3123", "incomeShareTop1": "0.0876"}, {"country": "United Kingdom", "year": "1986", "gdpPerCapita": "10611.112210096", "gdp": "601452653180.885", "totalPopulation": "56681396", "giniCoefficient": "0.441189214514", "incomeShareBot50": "0.206", "incomeShareMid40": "0.4795", "incomeShareTop10": "0.3145", "incomeShareTop1": "0.0888"}, {"country": "United Kingdom", "year": "1987", "gdpPerCapita": "13118.586534629", "gdp": "745162608269.325", "totalPopulation": "56802050", "giniCoefficient": "0.445174500388", "incomeShareBot50": "0.2038", "incomeShareMid40": "0.4786", "incomeShareTop10": "0.3175", "incomeShareTop1": "0.0912"}, {"country": "United Kingdom", "year": "1988", "gdpPerCapita": "15987.1680775688", "gdp": "910122732123.799", "totalPopulation": "56928327", "giniCoefficient": "0.450468039776", "incomeShareBot50": "0.2014", "incomeShareMid40": "0.476", "incomeShareTop10": "0.3226", "incomeShareTop1": "0.0951"}, {"country": "United Kingdom", "year": "1989", "gdpPerCapita": "16239.2821960944", "gdp": "926884816753.927", "totalPopulation": "57076711", "giniCoefficient": "0.443683648088", "incomeShareBot50": "0.2048", "incomeShareMid40": "0.4783", "incomeShareTop10": "0.3169", "incomeShareTop1": "0.0892"}, {"country": "United Kingdom", "year": "1990", "gdpPerCapita": "19095.4669984608", "gdp": "1093169389204.55", "totalPopulation": "57247586", "giniCoefficient": "0.46370150535", "incomeShareBot50": "0.1908", "incomeShareMid40": "0.4808", "incomeShareTop10": "0.3284", "incomeShareTop1": "0.0862"}, {"country": "United Kingdom", "year": "1991", "gdpPerCapita": "19900.7266505069", "gdp": "1142797178130.51", "totalPopulation": "57424897", "giniCoefficient": "0.46300033189", "incomeShareBot50": "0.1913", "incomeShareMid40": "0.4814", "incomeShareTop10": "0.3274", "incomeShareTop1": "0.0844"}, {"country": "United Kingdom", "year": "1992", "gdpPerCapita": "20487.1707852878", "gdp": "1179659529659.53", "totalPopulation": "57580402", "giniCoefficient": "0.459781678769", "incomeShareBot50": "0.1941", "incomeShareMid40": "0.4794", "incomeShareTop10": "0.3265", "incomeShareTop1": "0.0804"}, {"country": "United Kingdom", "year": "1993", "gdpPerCapita": "18389.0195675099", "gdp": "1061388722255.55", "totalPopulation": "57718614", "giniCoefficient": "0.46847536551", "incomeShareBot50": "0.1914", "incomeShareMid40": "0.47", "incomeShareTop10": "0.3386", "incomeShareTop1": "0.0924"}, {"country": "United Kingdom", "year": "1994", "gdpPerCapita": "19709.2380983653", "gdp": "1140489745944.29", "totalPopulation": "57865745", "giniCoefficient": "0.473852691748", "incomeShareBot50": "0.1903", "incomeShareMid40": "0.4623", "incomeShareTop10": "0.3474", "incomeShareTop1": "0.1054"}, {"country": "United Kingdom", "year": "1995", "gdpPerCapita": "23123.6945627431", "gdp": "1341614328546.63", "totalPopulation": "58019030", "giniCoefficient": "0.477309341859", "incomeShareBot50": "0.187", "incomeShareMid40": "0.465", "incomeShareTop10": "0.3479", "incomeShareTop1": "0.1051"}, {"country": "United Kingdom", "year": "1996", "gdpPerCapita": "24333.2341750878", "gdp": "1415390015600.62", "totalPopulation": "58166950", "giniCoefficient": "0.48492442717", "incomeShareBot50": "0.1849", "incomeShareMid40": "0.4565", "incomeShareTop10": "0.3586", "incomeShareTop1": "0.1194"}, {"country": "United Kingdom", "year": "1997", "gdpPerCapita": "26719.5429576766", "gdp": "1558202357563.85", "totalPopulation": "58316954", "giniCoefficient": "0.47927696168", "incomeShareBot50": "0.1886", "incomeShareMid40": "0.4571", "incomeShareTop10": "0.3544", "incomeShareTop1": "0.1198"}, {"country": "United Kingdom", "year": "1998", "gdpPerCapita": "28238.9950546354", "gdp": "1651618085458.76", "totalPopulation": "58487141", "giniCoefficient": "0.481965831555", "incomeShareBot50": "0.1874", "incomeShareMid40": "0.4544", "incomeShareTop10": "0.3583", "incomeShareTop1": "0.1219"}, {"country": "United Kingdom", "year": "1999", "gdpPerCapita": "28665.7074949102", "gdp": "1682174405436.01", "totalPopulation": "58682466", "giniCoefficient": "0.489313561582", "incomeShareBot50": "0.1829", "incomeShareMid40": "0.4541", "incomeShareTop10": "0.363", "incomeShareTop1": "0.1172"}, {"country": "United Kingdom", "year": "2000", "gdpPerCapita": "28156.2674107209", "gdp": "1658193372673.63", "totalPopulation": "58892514", "giniCoefficient": "0.481418825336", "incomeShareBot50": "0.1876", "incomeShareMid40": "0.4552", "incomeShareTop10": "0.3572", "incomeShareTop1": "0.115"}, {"country": "United Kingdom", "year": "2001", "gdpPerCapita": "27717.6258101678", "gdp": "1638656974233.48", "totalPopulation": "59119673", "giniCoefficient": "0.483386127696", "incomeShareBot50": "0.1864", "incomeShareMid40": "0.4547", "incomeShareTop10": "0.359", "incomeShareTop1": "0.113"}, {"country": "United Kingdom", "year": "2002", "gdpPerCapita": "29982.6187026848", "gdp": "1780082434052.76", "totalPopulation": "59370479", "giniCoefficient": "0.488680695353", "incomeShareBot50": "0.1845", "incomeShareMid40": "0.45", "incomeShareTop10": "0.3655", "incomeShareTop1": "0.1198"}, {"country": "United Kingdom", "year": "2003", "gdpPerCapita": "34383.9479627726", "gdp": "2050919183673.47", "totalPopulation": "59647577", "giniCoefficient": "0.498406373311", "incomeShareBot50": "0.181", "incomeShareMid40": "0.441", "incomeShareTop10": "0.378", "incomeShareTop1": "0.1321"}, {"country": "United Kingdom", "year": "2004", "gdpPerCapita": "40208.8560760282", "gdp": "2412045038447.46", "totalPopulation": "59987905", "giniCoefficient": "0.493432239263", "incomeShareBot50": "0.1838", "incomeShareMid40": "0.4432", "incomeShareTop10": "0.373", "incomeShareTop1": "0.1315"}, {"country": "United Kingdom", "year": "2005", "gdpPerCapita": "41932.8773606998", "gdp": "2532796363636.36", "totalPopulation": "60401206", "giniCoefficient": "0.503085511537", "incomeShareBot50": "0.1804", "incomeShareMid40": "0.4335", "incomeShareTop10": "0.3861", "incomeShareTop1": "0.1461"}, {"country": "United Kingdom", "year": "2006", "gdpPerCapita": "44472.5742349596", "gdp": "2706014719411.22", "totalPopulation": "60846820", "giniCoefficient": "0.504761947549", "incomeShareBot50": "0.1794", "incomeShareMid40": "0.432", "incomeShareTop10": "0.3886", "incomeShareTop1": "0.1487"}, {"country": "United Kingdom", "year": "2007", "gdpPerCapita": "50444.9301546348", "gdp": "3093407362945.18", "totalPopulation": "61322463", "giniCoefficient": "0.505052193552", "incomeShareBot50": "0.1813", "incomeShareMid40": "0.4265", "incomeShareTop10": "0.3921", "incomeShareTop1": "0.1512"}, {"country": "United Kingdom", "year": "2008", "gdpPerCapita": "47267.0121770864", "gdp": "2921431985294.12", "totalPopulation": "61806995", "giniCoefficient": "0.492535755009", "incomeShareBot50": "0.1853", "incomeShareMid40": "0.4406", "incomeShareTop10": "0.3741", "incomeShareTop1": "0.1452"}, {"country": "United Kingdom", "year": "2009", "gdpPerCapita": "38736.9021994994", "gdp": "2412389780339.62", "totalPopulation": "62276270", "giniCoefficient": "0.505169398254", "incomeShareBot50": "0.1777", "incomeShareMid40": "0.4374", "incomeShareTop10": "0.3849", "incomeShareTop1": "0.1464"}, {"country": "United Kingdom", "year": "2010", "gdpPerCapita": "39536.7726806835", "gdp": "2481579504997.81", "totalPopulation": "62766365", "giniCoefficient": "0.471623692874", "incomeShareBot50": "0.1962", "incomeShareMid40": "0.4499", "incomeShareTop10": "0.3539", "incomeShareTop1": "0.1285"}, {"country": "United Kingdom", "year": "2011", "gdpPerCapita": "42047.6142522206", "gdp": "2659882040934.51", "totalPopulation": "63258810", "giniCoefficient": "0.481355147974", "incomeShareBot50": "0.1918", "incomeShareMid40": "0.4437", "incomeShareTop10": "0.3645", "incomeShareTop1": "0.1374"}, {"country": "United Kingdom", "year": "2012", "gdpPerCapita": "42449.1076656792", "gdp": "2704017284861.91", "totalPopulation": "63700215", "giniCoefficient": "0.478278078197", "incomeShareBot50": "0.1931", "incomeShareMid40": "0.4457", "incomeShareTop10": "0.3612", "incomeShareTop1": "0.13"}, {"country": "United Kingdom", "year": "2013", "gdpPerCapita": "43401.3105295842", "gdp": "2783251090198.95", "totalPopulation": "64128273", "giniCoefficient": "0.493476463241", "incomeShareBot50": "0.1865", "incomeShareMid40": "0.4339", "incomeShareTop10": "0.3796", "incomeShareTop1": "0.1372"}, {"country": "United Kingdom", "year": "2014", "gdpPerCapita": "47452.1991368626", "gdp": "3065521109394.94", "totalPopulation": "64602298", "giniCoefficient": "0.485360871991", "incomeShareBot50": "0.191", "incomeShareMid40": "0.4366", "incomeShareTop10": "0.3724", "incomeShareTop1": "0.1372"}, {"country": "United Kingdom", "year": "2015", "gdpPerCapita": "45039.2359520486", "gdp": "2932784751846.27", "totalPopulation": "65116219", "giniCoefficient": "0.47573449436", "incomeShareBot50": "0.1959", "incomeShareMid40": "0.4422", "incomeShareTop10": "0.3619", "incomeShareTop1": "0.1276"}, {"country": "United Kingdom", "year": "2016", "gdpPerCapita": "41048.3496572292", "gdp": "2693247611031.81", "totalPopulation": "65611593", "giniCoefficient": "0.47547480451", "incomeShareBot50": "0.1969", "incomeShareMid40": "0.4394", "incomeShareTop10": "0.3637", "incomeShareTop1": "0.1312"}, {"country": "United Kingdom", "year": "2017", "gdpPerCapita": "40304.7230763678", "gdp": "2662484018735.82", "totalPopulation": "66058859", "giniCoefficient": "0.473317259001", "incomeShareBot50": "0.2007", "incomeShareMid40": "0.4334", "incomeShareTop10": "0.3659", "incomeShareTop1": "0.1388"}, {"country": "United Kingdom", "year": "2018", "gdpPerCapita": "42992.8037216089", "gdp": "2857316524862.61", "totalPopulation": "66460344", "giniCoefficient": "0.465293322754", "incomeShareBot50": "0.2038", "incomeShareMid40": "0.44", "incomeShareTop10": "0.3562", "incomeShareTop1": "0.1284"}, {"country": "United Kingdom", "year": "2019", "gdpPerCapita": "42354.4146545765", "gdp": "2830813507746.87", "totalPopulation": "66836327", "giniCoefficient": "0.465990222868", "incomeShareBot50": "0.2036", "incomeShareMid40": "0.4394", "incomeShareTop10": "0.3571", "incomeShareTop1": "0.1293"}, {"country": "Turkey", "year": "1980", "gdpPerCapita": "1564.24716583282", "gdp": "68789289565.7434", "totalPopulation": "43975972", "giniCoefficient": "0.631988799", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1981", "gdpPerCapita": "1579.0737783658", "gdp": "71040020140.4436", "totalPopulation": "44988411", "giniCoefficient": "0.63198879609", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1982", "gdpPerCapita": "1402.40643545276", "gdp": "64546332580.7583", "totalPopulation": "46025411", "giniCoefficient": "0.631988741887", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1983", "gdpPerCapita": "1310.25565176093", "gdp": "61678280115.4987", "totalPopulation": "47073470", "giniCoefficient": "0.631988718837", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1984", "gdpPerCapita": "1246.82446812927", "gdp": "59989909457.8379", "totalPopulation": "48114158", "giniCoefficient": "0.631988740374", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1985", "gdpPerCapita": "1368.4016524101", "gdp": "67234948264.5987", "totalPopulation": "49133928", "giniCoefficient": "0.631988862127", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1986", "gdpPerCapita": "1510.67631088752", "gdp": "75728009962.7878", "totalPopulation": "50128548", "giniCoefficient": "0.631988795158", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1987", "gdpPerCapita": "1705.89438447268", "gdp": "87172789528.3316", "totalPopulation": "51100930", "giniCoefficient": "0.631988794227", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1988", "gdpPerCapita": "1745.3649270203", "gdp": "90852814004.9917", "totalPopulation": "52053764", "giniCoefficient": "0.631988799", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1989", "gdpPerCapita": "2021.85952967201", "gdp": "107143348667.094", "totalPopulation": "52992479", "giniCoefficient": "0.631988867017", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1990", "gdpPerCapita": "2794.35049380641", "gdp": "150676291094.21", "totalPopulation": "53921758", "giniCoefficient": "0.631988719768", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1991", "gdpPerCapita": "2735.70761464811", "gdp": "150027833333.333", "totalPopulation": "54840595", "giniCoefficient": "0.631988719768", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1992", "gdpPerCapita": "2842.36997834511", "gdp": "158459130434.783", "totalPopulation": "55748946", "giniCoefficient": "0.631988733156", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1993", "gdpPerCapita": "3180.18757651094", "gdp": "180169736363.636", "totalPopulation": "56653808", "giniCoefficient": "0.631988728616", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1994", "gdpPerCapita": "2270.33732535606", "gdp": "130690172297.297", "totalPopulation": "57564209", "giniCoefficient": "0.631988822429", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1995", "gdpPerCapita": "2897.86664012665", "gdp": "169485941048.035", "totalPopulation": "58486453", "giniCoefficient": "0.631988862274", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1996", "gdpPerCapita": "3053.94723062156", "gdp": "181475555282.555", "totalPopulation": "59423278", "giniCoefficient": "0.631988764427", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1997", "gdpPerCapita": "3144.38570309118", "gdp": "189834649111.257", "totalPopulation": "60372571", "giniCoefficient": "0.631988835848", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1998", "gdpPerCapita": "4499.73750776878", "gdp": "275967393939.394", "totalPopulation": "61329665", "giniCoefficient": "0.631988840812", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "1999", "gdpPerCapita": "4116.1705596504", "gdp": "256385525071.633", "totalPopulation": "62287391", "giniCoefficient": "0.631988793431", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "2000", "gdpPerCapita": "4337.47800296354", "gdp": "274302959053.103", "totalPopulation": "63240196", "giniCoefficient": "0.631988768758", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "2001", "gdpPerCapita": "3142.92099774582", "gdp": "201751148417.102", "totalPopulation": "64192243", "giniCoefficient": "0.631988874418", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "2002", "gdpPerCapita": "3687.95609325031", "gdp": "240253216295.117", "totalPopulation": "65145357", "giniCoefficient": "0.631988835186", "incomeShareBot50": "0.1298", "incomeShareMid40": "0.3159", "incomeShareTop10": "0.5543", "incomeShareTop1": "0.221"}, {"country": "Turkey", "year": "2003", "gdpPerCapita": "4760.1040190451", "gdp": "314592428076.487", "totalPopulation": "66089402", "giniCoefficient": "0.624612648537", "incomeShareBot50": "0.1334", "incomeShareMid40": "0.3186", "incomeShareTop10": "0.548", "incomeShareTop1": "0.2153"}, {"country": "Turkey", "year": "2004", "gdpPerCapita": "6101.63211660696", "gdp": "408876042651.701", "totalPopulation": "67010930", "giniCoefficient": "0.611043955695", "incomeShareBot50": "0.1387", "incomeShareMid40": "0.332", "incomeShareTop10": "0.5292", "incomeShareTop1": "0.2091"}, {"country": "Turkey", "year": "2005", "gdpPerCapita": "7456.2961006749", "gdp": "506308311476.63", "totalPopulation": "67903461", "giniCoefficient": "0.58874706856", "incomeShareBot50": "0.148", "incomeShareMid40": "0.3482", "incomeShareTop10": "0.5038", "incomeShareTop1": "0.1804"}, {"country": "Turkey", "year": "2006", "gdpPerCapita": "8101.85692374776", "gdp": "557057829051.453", "totalPopulation": "68756809", "giniCoefficient": "0.57726159623", "incomeShareBot50": "0.1544", "incomeShareMid40": "0.3518", "incomeShareTop10": "0.4938", "incomeShareTop1": "0.1702"}, {"country": "Turkey", "year": "2007", "gdpPerCapita": "9791.88245001167", "gdp": "681337335021.874", "totalPopulation": "69581854", "giniCoefficient": "0.570845424231", "incomeShareBot50": "0.1567", "incomeShareMid40": "0.358", "incomeShareTop10": "0.4853", "incomeShareTop1": "0.1641"}, {"country": "Turkey", "year": "2008", "gdpPerCapita": "10941.172146426", "gdp": "770462156204.38", "totalPopulation": "70418612", "giniCoefficient": "0.579461484273", "incomeShareBot50": "0.1538", "incomeShareMid40": "0.3488", "incomeShareTop10": "0.4973", "incomeShareTop1": "0.1759"}, {"country": "Turkey", "year": "2009", "gdpPerCapita": "9103.47405061243", "gdp": "649272568774.193", "totalPopulation": "71321406", "giniCoefficient": "0.595684981007", "incomeShareBot50": "0.1461", "incomeShareMid40": "0.3393", "incomeShareTop10": "0.5146", "incomeShareTop1": "0.1896"}, {"country": "Turkey", "year": "2010", "gdpPerCapita": "10742.7749787626", "gdp": "776992599946.766", "totalPopulation": "72326992", "giniCoefficient": "0.589188029477", "incomeShareBot50": "0.1508", "incomeShareMid40": "0.3394", "incomeShareTop10": "0.5099", "incomeShareTop1": "0.1936"}, {"country": "Turkey", "year": "2011", "gdpPerCapita": "11420.5554558378", "gdp": "838762755164.179", "totalPopulation": "73443254", "giniCoefficient": "0.590778037826", "incomeShareBot50": "0.1499", "incomeShareMid40": "0.338", "incomeShareTop10": "0.5121", "incomeShareTop1": "0.1865"}, {"country": "Turkey", "year": "2012", "gdpPerCapita": "11795.6334567571", "gdp": "880556375779.51", "totalPopulation": "74651046", "giniCoefficient": "0.584607499", "incomeShareBot50": "0.1538", "incomeShareMid40": "0.3381", "incomeShareTop10": "0.5081", "incomeShareTop1": "0.1853"}, {"country": "Turkey", "year": "2013", "gdpPerCapita": "12614.7816100386", "gdp": "957783020853.031", "totalPopulation": "75925454", "giniCoefficient": "0.583377130482", "incomeShareBot50": "0.1546", "incomeShareMid40": "0.3381", "incomeShareTop10": "0.5073", "incomeShareTop1": "0.1845"}, {"country": "Turkey", "year": "2014", "gdpPerCapita": "12157.9904337823", "gdp": "938952628604.067", "totalPopulation": "77229262", "giniCoefficient": "0.583362799851", "incomeShareBot50": "0.1546", "incomeShareMid40": "0.3381", "incomeShareTop10": "0.5073", "incomeShareTop1": "0.1845"}, {"country": "Turkey", "year": "2015", "gdpPerCapita": "11006.2795239649", "gdp": "864316670330.882", "totalPopulation": "78529413", "giniCoefficient": "0.583057018742", "incomeShareBot50": "0.1548", "incomeShareMid40": "0.3382", "incomeShareTop10": "0.5071", "incomeShareTop1": "0.1843"}, {"country": "Turkey", "year": "2016", "gdpPerCapita": "10894.6033779275", "gdp": "869692960365.551", "totalPopulation": "79827868", "giniCoefficient": "0.583057040789", "incomeShareBot50": "0.1548", "incomeShareMid40": "0.3382", "incomeShareTop10": "0.5071", "incomeShareTop1": "0.1843"}, {"country": "Turkey", "year": "2017", "gdpPerCapita": "10589.667724687", "gdp": "858996263095.858", "totalPopulation": "81116451", "giniCoefficient": "0.583057102152", "incomeShareBot50": "0.1548", "incomeShareMid40": "0.3382", "incomeShareTop10": "0.5071", "incomeShareTop1": "0.1843"}, {"country": "Turkey", "year": "2018", "gdpPerCapita": "9453.19617174191", "gdp": "778377023568.884", "totalPopulation": "82340090", "giniCoefficient": "0.583057053839", "incomeShareBot50": "0.1548", "incomeShareMid40": "0.3382", "incomeShareTop10": "0.5071", "incomeShareTop1": "0.1843"}, {"country": "Turkey", "year": "2019", "gdpPerCapita": "9126.59439195453", "gdp": "761428183369.171", "totalPopulation": "83429607", "giniCoefficient": "0.583057071302", "incomeShareBot50": "0.1548", "incomeShareMid40": "0.3382", "incomeShareTop10": "0.5071", "incomeShareTop1": "0.1843"}, {"country": "South Africa", "year": "1980", "gdpPerCapita": "2905.80764148555", "gdp": "82980483387.953", "totalPopulation": "28556771", "giniCoefficient": "0.589337875184", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1981", "gdpPerCapita": "2913.24255077845", "gdp": "85454420500.0266", "totalPopulation": "29333095", "giniCoefficient": "0.589337910807", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1982", "gdpPerCapita": "2601.05786122582", "gdp": "78423059789.8803", "totalPopulation": "30150448", "giniCoefficient": "0.589337828269", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1983", "gdpPerCapita": "2820.43371745368", "gdp": "87415851375.5347", "totalPopulation": "30993762", "giniCoefficient": "0.589337845149", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1984", "gdpPerCapita": "2429.02750034724", "gdp": "77344092906.7265", "totalPopulation": "31841588", "giniCoefficient": "0.589337848176", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1985", "gdpPerCapita": "1807.976467842", "gdp": "59082638803.5266", "totalPopulation": "32678876", "giniCoefficient": "0.589337858071", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1986", "gdpPerCapita": "2015.81356725988", "gdp": "67521602553.14", "totalPopulation": "33495956", "giniCoefficient": "0.589337870295", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1987", "gdpPerCapita": "2582.49467153238", "gdp": "88573697223.1721", "totalPopulation": "34297727", "giniCoefficient": "0.589337825475", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1988", "gdpPerCapita": "2711.51530047549", "gdp": "95176640968.0367", "totalPopulation": "35100905", "giniCoefficient": "0.589337825475", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1989", "gdpPerCapita": "2756.21214797863", "gdp": "99030856824.7526", "totalPopulation": "35930056", "giniCoefficient": "0.589337847012", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1990", "gdpPerCapita": "3139.9662248384", "gdp": "115552349036.929", "totalPopulation": "36800507", "giniCoefficient": "0.589337873322", "incomeShareBot50": "0.1332", "incomeShareMid40": "0.3958", "incomeShareTop10": "0.471", "incomeShareTop1": "0.1012"}, {"country": "South Africa", "year": "1991", "gdpPerCapita": "3285.9723260933", "gdp": "123943432441.241", "totalPopulation": "37718952", "giniCoefficient": "0.606874982706", "incomeShareBot50": "0.1239", "incomeShareMid40": "0.385", "incomeShareTop10": "0.4911", "incomeShareTop1": "0.1079"}, {"country": "South Africa", "year": "1992", "gdpPerCapita": "3479.08320481774", "gdp": "134545231416.55", "totalPopulation": "38672611", "giniCoefficient": "0.603681257294", "incomeShareBot50": "0.1257", "incomeShareMid40": "0.3871", "incomeShareTop10": "0.4871", "incomeShareTop1": "0.1083"}, {"country": "South Africa", "year": "1993", "gdpPerCapita": "3388.77208446662", "gdp": "134309759157.817", "totalPopulation": "39633754", "giniCoefficient": "0.582576105792", "incomeShareBot50": "0.1371", "incomeShareMid40": "0.4002", "incomeShareTop10": "0.4627", "incomeShareTop1": "0.1056"}, {"country": "South Africa", "year": "1994", "gdpPerCapita": "3445.2282810658", "gdp": "139752450152.078", "totalPopulation": "40564061", "giniCoefficient": "0.591467694378", "incomeShareBot50": "0.133", "incomeShareMid40": "0.3935", "incomeShareTop10": "0.4735", "incomeShareTop1": "0.1127"}, {"country": "South Africa", "year": "1995", "gdpPerCapita": "3751.83854053584", "gdp": "155460285076.232", "totalPopulation": "41435761", "giniCoefficient": "0.600342827018", "incomeShareBot50": "0.1289", "incomeShareMid40": "0.3867", "incomeShareTop10": "0.4844", "incomeShareTop1": "0.1199"}, {"country": "South Africa", "year": "1996", "gdpPerCapita": "3494.42385913899", "gdp": "147607982694.857", "totalPopulation": "42241007", "giniCoefficient": "0.609201549003", "incomeShareBot50": "0.1248", "incomeShareMid40": "0.38", "incomeShareTop10": "0.4952", "incomeShareTop1": "0.127"}, {"country": "South Africa", "year": "1997", "gdpPerCapita": "3549.55069948519", "gdp": "152586154513.889", "totalPopulation": "42987456", "giniCoefficient": "0.619660245199", "incomeShareBot50": "0.119", "incomeShareMid40": "0.3757", "incomeShareTop10": "0.5052", "incomeShareTop1": "0.1339"}, {"country": "South Africa", "year": "1998", "gdpPerCapita": "3154.01181553226", "gdp": "137774361015.14", "totalPopulation": "43682259", "giniCoefficient": "0.630066427156", "incomeShareBot50": "0.1133", "incomeShareMid40": "0.3716", "incomeShareTop10": "0.5152", "incomeShareTop1": "0.1407"}, {"country": "South Africa", "year": "1999", "gdpPerCapita": "3081.5613845698", "gdp": "136631966609.379", "totalPopulation": "44338551", "giniCoefficient": "0.64042061498", "incomeShareBot50": "0.1075", "incomeShareMid40": "0.3674", "incomeShareTop10": "0.5251", "incomeShareTop1": "0.1476"}, {"country": "South Africa", "year": "2000", "gdpPerCapita": "3032.43918160783", "gdp": "136361854808.496", "totalPopulation": "44967713", "giniCoefficient": "0.650722984798", "incomeShareBot50": "0.1018", "incomeShareMid40": "0.3632", "incomeShareTop10": "0.5349", "incomeShareTop1": "0.1544"}, {"country": "South Africa", "year": "2001", "gdpPerCapita": "2666.47502701186", "gdp": "121514658737.165", "totalPopulation": "45571272", "giniCoefficient": "0.656338619058", "incomeShareBot50": "0.1015", "incomeShareMid40": "0.3519", "incomeShareTop10": "0.5466", "incomeShareTop1": "0.1617"}, {"country": "South Africa", "year": "2002", "gdpPerCapita": "2502.27700465337", "gdp": "115482368343.658", "totalPopulation": "46150913", "giniCoefficient": "0.6619650924", "incomeShareBot50": "0.1012", "incomeShareMid40": "0.3405", "incomeShareTop10": "0.5584", "incomeShareTop1": "0.169"}, {"country": "South Africa", "year": "2003", "gdpPerCapita": "3751.28225102743", "gdp": "175256916996.047", "totalPopulation": "46719203", "giniCoefficient": "0.667789323614", "incomeShareBot50": "0.1005", "incomeShareMid40": "0.3287", "incomeShareTop10": "0.5708", "incomeShareTop1": "0.1723"}, {"country": "South Africa", "year": "2004", "gdpPerCapita": "4833.62751660714", "gdp": "228590027400.653", "totalPopulation": "47291610", "giniCoefficient": "0.665029303572", "incomeShareBot50": "0.1044", "incomeShareMid40": "0.322", "incomeShareTop10": "0.5735", "incomeShareTop1": "0.1743"}, {"country": "South Africa", "year": "2005", "gdpPerCapita": "5383.65721714514", "gdp": "257772710832.953", "totalPopulation": "47880595", "giniCoefficient": "0.675374485764", "incomeShareBot50": "0.1016", "incomeShareMid40": "0.3077", "incomeShareTop10": "0.5906", "incomeShareTop1": "0.1834"}, {"country": "South Africa", "year": "2006", "gdpPerCapita": "5602.01046615218", "gdp": "271638484826.109", "totalPopulation": "48489464", "giniCoefficient": "0.688433785053", "incomeShareBot50": "0.0937", "incomeShareMid40": "0.3056", "incomeShareTop10": "0.6007", "incomeShareTop1": "0.1934"}, {"country": "South Africa", "year": "2007", "gdpPerCapita": "6095.62157019026", "gdp": "299415505152.298", "totalPopulation": "49119766", "giniCoefficient": "0.708985350193", "incomeShareBot50": "0.0816", "incomeShareMid40": "0.2986", "incomeShareTop10": "0.6197", "incomeShareTop1": "0.2033"}, {"country": "South Africa", "year": "2008", "gdpPerCapita": "5760.80517151179", "gdp": "286769839732.726", "totalPopulation": "49779472", "giniCoefficient": "0.696742725864", "incomeShareBot50": "0.0874", "incomeShareMid40": "0.312", "incomeShareTop10": "0.6006", "incomeShareTop1": "0.1976"}, {"country": "South Africa", "year": "2009", "gdpPerCapita": "5862.79710791594", "gdp": "295936485832.635", "totalPopulation": "50477013", "giniCoefficient": "0.689864035961", "incomeShareBot50": "0.0899", "incomeShareMid40": "0.3171", "incomeShareTop10": "0.5929", "incomeShareTop1": "0.1858"}, {"country": "South Africa", "year": "2010", "gdpPerCapita": "7328.61519967084", "gdp": "375349442837.24", "totalPopulation": "51216967", "giniCoefficient": "0.709380431068", "incomeShareBot50": "0.0789", "incomeShareMid40": "0.3069", "incomeShareTop10": "0.6143", "incomeShareTop1": "0.1877"}, {"country": "South Africa", "year": "2011", "gdpPerCapita": "8007.47643908404", "gdp": "416418874936.304", "totalPopulation": "52003759", "giniCoefficient": "0.718634343028", "incomeShareBot50": "0.0736", "incomeShareMid40": "0.3021", "incomeShareTop10": "0.6243", "incomeShareTop1": "0.1865"}, {"country": "South Africa", "year": "2012", "gdpPerCapita": "7501.66109639676", "gdp": "396332702639.496", "totalPopulation": "52832659", "giniCoefficient": "0.745947718601", "incomeShareBot50": "0.059", "incomeShareMid40": "0.2866", "incomeShareTop10": "0.6544", "incomeShareTop1": "0.1932"}, {"country": "South Africa", "year": "2013", "gdpPerCapita": "6832.72554600295", "gdp": "366829390478.954", "totalPopulation": "53687125", "giniCoefficient": "0.74621665793", "incomeShareBot50": "0.0585", "incomeShareMid40": "0.2872", "incomeShareTop10": "0.6542", "incomeShareTop1": "0.1931"}, {"country": "South Africa", "year": "2014", "gdpPerCapita": "6433.40040236585", "gdp": "350904575292.317", "totalPopulation": "54544184", "giniCoefficient": "0.746485461744", "incomeShareBot50": "0.058", "incomeShareMid40": "0.2879", "incomeShareTop10": "0.6541", "incomeShareTop1": "0.1931"}, {"country": "South Africa", "year": "2015", "gdpPerCapita": "5734.63342207587", "gdp": "317620522794.827", "totalPopulation": "55386369", "giniCoefficient": "0.746485513904", "incomeShareBot50": "0.058", "incomeShareMid40": "0.2879", "incomeShareTop10": "0.6541", "incomeShareTop1": "0.1931"}, {"country": "South Africa", "year": "2016", "gdpPerCapita": "5272.5436481983", "gdp": "296357282715.109", "totalPopulation": "56207649", "giniCoefficient": "0.746485490854", "incomeShareBot50": "0.058", "incomeShareMid40": "0.2879", "incomeShareTop10": "0.6541", "incomeShareTop1": "0.1931"}, {"country": "South Africa", "year": "2017", "gdpPerCapita": "6131.47944960886", "gdp": "349554116683.818", "totalPopulation": "57009751", "giniCoefficient": "0.74648546175", "incomeShareBot50": "0.058", "incomeShareMid40": "0.2879", "incomeShareTop10": "0.6541", "incomeShareTop1": "0.1931"}, {"country": "South Africa", "year": "2018", "gdpPerCapita": "6372.60565499345", "gdp": "368288939768.322", "totalPopulation": "57792520", "giniCoefficient": "0.74648548969", "incomeShareBot50": "0.058", "incomeShareMid40": "0.2879", "incomeShareTop10": "0.6541", "incomeShareTop1": "0.1931"}, {"country": "South Africa", "year": "2019", "gdpPerCapita": "6001.4011214068", "gdp": "351431649241.439", "totalPopulation": "58558267", "giniCoefficient": "0.746485490854", "incomeShareBot50": "0.058", "incomeShareMid40": "0.2879", "incomeShareTop10": "0.6541", "incomeShareTop1": "0.1931"}, {"country": "Saudi Arabia", "year": "1980", "gdpPerCapita": "16977.9859320217", "gdp": "164541658298.596", "totalPopulation": "9691471", "giniCoefficient": "0.636166193785", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1981", "gdpPerCapita": "17871.9919950891", "gdp": "184291888767.191", "totalPopulation": "10311771", "giniCoefficient": "0.636166263355", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1982", "gdpPerCapita": "13944.9512846134", "gdp": "153238991868.875", "totalPopulation": "10988851", "giniCoefficient": "0.636166267546", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1983", "gdpPerCapita": "11039.2397953589", "gdp": "129171602025.147", "totalPopulation": "11701132", "giniCoefficient": "0.636166263355", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1984", "gdpPerCapita": "9632.53874648231", "gdp": "119624918956.209", "totalPopulation": "12418836", "giniCoefficient": "0.636166143307", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1985", "gdpPerCapita": "7919.65154739552", "gdp": "103897892810.979", "totalPopulation": "13118998", "giniCoefficient": "0.636166180036", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1986", "gdpPerCapita": "6304.25983754983", "gdp": "86962013010.5552", "totalPopulation": "13794167", "giniCoefficient": "0.636166151224", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1987", "gdpPerCapita": "5932.29551042726", "gdp": "85695941760.0451", "totalPopulation": "14445663", "giniCoefficient": "0.636166242109", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1988", "gdpPerCapita": "5856.38233879368", "gdp": "88256162068.9725", "totalPopulation": "15070082", "giniCoefficient": "0.636166193785", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1989", "gdpPerCapita": "6085.9564651014", "gdp": "95344352823.6969", "totalPopulation": "15666289", "giniCoefficient": "0.636166243972", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1990", "gdpPerCapita": "7246.01592028381", "gdp": "117630271802.48", "totalPopulation": "16233786", "giniCoefficient": "0.636166246009", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1991", "gdpPerCapita": "7883.2452680575", "gdp": "132223268491.322", "totalPopulation": "16772695", "giniCoefficient": "0.63616620006", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1992", "gdpPerCapita": "7932.09323262693", "gdp": "137087876662.216", "totalPopulation": "17282686", "giniCoefficient": "0.636166191911", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1993", "gdpPerCapita": "7485.54175585874", "gdp": "132967901415.22", "totalPopulation": "17763297", "giniCoefficient": "0.636166236498", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1994", "gdpPerCapita": "7421.28919382258", "gdp": "135174886488.652", "totalPopulation": "18214475", "giniCoefficient": "0.636166132655", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1995", "gdpPerCapita": "7690.57628428611", "gdp": "143343036341.789", "totalPopulation": "18638790", "giniCoefficient": "0.636166182854", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1996", "gdpPerCapita": "8335.80474237354", "gdp": "158662398744.993", "totalPopulation": "19033843", "giniCoefficient": "0.636166158208", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1997", "gdpPerCapita": "8551.67605908093", "gdp": "165963557409.88", "totalPopulation": "19407138", "giniCoefficient": "0.636166247441", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1998", "gdpPerCapita": "7419.16114403759", "gdp": "146775498080", "totalPopulation": "19783301", "giniCoefficient": "0.636166110944", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "1999", "gdpPerCapita": "8007.95819422595", "gdp": "161716960000", "totalPopulation": "20194531", "giniCoefficient": "0.636166189117", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "2000", "gdpPerCapita": "9171.33147630515", "gdp": "189514926213.333", "totalPopulation": "20663840", "giniCoefficient": "0.636166239292", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "2001", "gdpPerCapita": "8684.64576229464", "gdp": "184137469733.333", "totalPopulation": "21202646", "giniCoefficient": "0.636166184251", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "2002", "gdpPerCapita": "8695.39648348233", "gdp": "189605920240", "totalPopulation": "21805322", "giniCoefficient": "0.636166180036", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1837"}, {"country": "Saudi Arabia", "year": "2003", "gdpPerCapita": "9609.96868647714", "gdp": "215807655253.333", "totalPopulation": "22456645", "giniCoefficient": "0.635973709131", "incomeShareBot50": "0.1183", "incomeShareMid40": "0.3429", "incomeShareTop10": "0.5388", "incomeShareTop1": "0.1816"}, {"country": "Saudi Arabia", "year": "2004", "gdpPerCapita": "11185.1370411547", "gdp": "258742263040", "totalPopulation": "23132686", "giniCoefficient": "0.636111775634", "incomeShareBot50": "0.1186", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1838"}, {"country": "Saudi Arabia", "year": "2005", "gdpPerCapita": "13791.454761932", "gdp": "328459700114.755", "totalPopulation": "23816175", "giniCoefficient": "0.636196263511", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3423", "incomeShareTop10": "0.5392", "incomeShareTop1": "0.1836"}, {"country": "Saudi Arabia", "year": "2006", "gdpPerCapita": "15384.7383584183", "gdp": "376900135727.637", "totalPopulation": "24498313", "giniCoefficient": "0.636606025527", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3419", "incomeShareTop10": "0.5396", "incomeShareTop1": "0.1855"}, {"country": "Saudi Arabia", "year": "2007", "gdpPerCapita": "16516.6317804658", "gdp": "415964583055.37", "totalPopulation": "25184589", "giniCoefficient": "0.636804313657", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5398", "incomeShareTop1": "0.1862"}, {"country": "Saudi Arabia", "year": "2008", "gdpPerCapita": "20078.2600730401", "gdp": "519796738640", "totalPopulation": "25888535", "giniCoefficient": "0.636914959688", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3416", "incomeShareTop10": "0.5399", "incomeShareTop1": "0.1865"}, {"country": "Saudi Arabia", "year": "2009", "gdpPerCapita": "16113.1437100059", "gdp": "429097899280", "totalPopulation": "26630303", "giniCoefficient": "0.63675258136", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2010", "gdpPerCapita": "19262.5476010256", "gdp": "528207332640", "totalPopulation": "27421468", "giniCoefficient": "0.636752486773", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2011", "gdpPerCapita": "23745.8805777495", "gdp": "671238840106.667", "totalPopulation": "28267591", "giniCoefficient": "0.636743123095", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2012", "gdpPerCapita": "25243.6019982366", "gdp": "735974843360", "totalPopulation": "29154906", "giniCoefficient": "0.636752540369", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2013", "gdpPerCapita": "24845.1246637862", "gdp": "746647127413.333", "totalPopulation": "30052058", "giniCoefficient": "0.636752519647", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2014", "gdpPerCapita": "24464.2125570307", "gdp": "756350347333.333", "totalPopulation": "30916603", "giniCoefficient": "0.636752574259", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2015", "gdpPerCapita": "20627.9269288204", "gdp": "654269902880", "totalPopulation": "31717676", "giniCoefficient": "0.636743148474", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2016", "gdpPerCapita": "19878.7638365016", "gdp": "644935541440", "totalPopulation": "32443443", "giniCoefficient": "0.636743120302", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2017", "gdpPerCapita": "20802.4663134648", "gdp": "688586244293.333", "totalPopulation": "33101183", "giniCoefficient": "0.6367524813", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2018", "gdpPerCapita": "23337.0175494347", "gdp": "786521831573.333", "totalPopulation": "33702757", "giniCoefficient": "0.636743206281", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Saudi Arabia", "year": "2019", "gdpPerCapita": "23139.7979808237", "gdp": "792966838160", "totalPopulation": "34268529", "giniCoefficient": "0.636743138229", "incomeShareBot50": "0.1185", "incomeShareMid40": "0.3417", "incomeShareTop10": "0.5397", "incomeShareTop1": "0.186"}, {"country": "Russian Federation", "year": "1980", "gdpPerCapita": "8704.40975469", "gdp": "1210000000000", "totalPopulation": "139010000", "giniCoefficient": "0.311981673285", "incomeShareBot50": "0.2884", "incomeShareMid40": "0.4948", "incomeShareTop10": "0.2168", "incomeShareTop1": "0.0356"}, {"country": "Russian Federation", "year": "1981", "gdpPerCapita": "8646.50102543", "gdp": "1210000000000", "totalPopulation": "139941000", "giniCoefficient": "0.314886215983", "incomeShareBot50": "0.287", "incomeShareMid40": "0.4929", "incomeShareTop10": "0.22", "incomeShareTop1": "0.0377"}, {"country": "Russian Federation", "year": "1982", "gdpPerCapita": "10651.6691166", "gdp": "1500000000000", "totalPopulation": "140823000", "giniCoefficient": "0.31775061445", "incomeShareBot50": "0.2857", "incomeShareMid40": "0.4911", "incomeShareTop10": "0.2232", "incomeShareTop1": "0.0397"}, {"country": "Russian Federation", "year": "1983", "gdpPerCapita": "10588.1356411", "gdp": "1500000000000", "totalPopulation": "141668000", "giniCoefficient": "0.320575976188", "incomeShareBot50": "0.2844", "incomeShareMid40": "0.4893", "incomeShareTop10": "0.2263", "incomeShareTop1": "0.0417"}, {"country": "Russian Federation", "year": "1984", "gdpPerCapita": "10508.2489754", "gdp": "1500000000000", "totalPopulation": "142745000", "giniCoefficient": "0.323362837011", "incomeShareBot50": "0.2831", "incomeShareMid40": "0.4875", "incomeShareTop10": "0.2294", "incomeShareTop1": "0.0436"}, {"country": "Russian Federation", "year": "1985", "gdpPerCapita": "13902.5983956", "gdp": "2000000000000", "totalPopulation": "143858000", "giniCoefficient": "0.326112222405", "incomeShareBot50": "0.2818", "incomeShareMid40": "0.4858", "incomeShareTop10": "0.2324", "incomeShareTop1": "0.0456"}, {"country": "Russian Federation", "year": "1986", "gdpPerCapita": "13803.1940591", "gdp": "2000000000000", "totalPopulation": "144894000", "giniCoefficient": "0.326863965378", "incomeShareBot50": "0.2813", "incomeShareMid40": "0.486", "incomeShareTop10": "0.2327", "incomeShareTop1": "0.0471"}, {"country": "Russian Federation", "year": "1987", "gdpPerCapita": "13707.2675933", "gdp": "2000000000000", "totalPopulation": "145908000", "giniCoefficient": "0.327606952958", "incomeShareBot50": "0.2808", "incomeShareMid40": "0.4862", "incomeShareTop10": "0.233", "incomeShareTop1": "0.0486"}, {"country": "Russian Federation", "year": "1988", "gdpPerCapita": "3777.2353728423", "gdp": "554713455149.502", "totalPopulation": "146857000", "giniCoefficient": "0.328341216098", "incomeShareBot50": "0.2803", "incomeShareMid40": "0.4864", "incomeShareTop10": "0.2333", "incomeShareTop1": "0.0501"}, {"country": "Russian Federation", "year": "1989", "gdpPerCapita": "3428.76215270861", "gdp": "506500173960.269", "totalPopulation": "147721000", "giniCoefficient": "0.341719322055", "incomeShareBot50": "0.2731", "incomeShareMid40": "0.4801", "incomeShareTop10": "0.2468", "incomeShareTop1": "0.0562"}, {"country": "Russian Federation", "year": "1990", "gdpPerCapita": "3492.7103142473", "gdp": "516814274021.956", "totalPopulation": "147969407", "giniCoefficient": "0.325535882772", "incomeShareBot50": "0.2837", "incomeShareMid40": "0.4768", "incomeShareTop10": "0.2395", "incomeShareTop1": "0.0745"}, {"country": "Russian Federation", "year": "1991", "gdpPerCapita": "3490.45250498822", "gdp": "517962962962.963", "totalPopulation": "148394216", "giniCoefficient": "0.335506473975", "incomeShareBot50": "0.2791", "incomeShareMid40": "0.4709", "incomeShareTop10": "0.2501", "incomeShareTop1": "0.0852"}, {"country": "Russian Federation", "year": "1992", "gdpPerCapita": "3098.80263930177", "gdp": "460290556900.726", "totalPopulation": "148538197", "giniCoefficient": "0.435351830999", "incomeShareBot50": "0.2167", "incomeShareMid40": "0.4588", "incomeShareTop10": "0.3245", "incomeShareTop1": "0.1013"}, {"country": "Russian Federation", "year": "1993", "gdpPerCapita": "2930.67020113494", "gdp": "435083713850.837", "totalPopulation": "148458777", "giniCoefficient": "0.459436324149", "incomeShareBot50": "0.203", "incomeShareMid40": "0.4549", "incomeShareTop10": "0.3421", "incomeShareTop1": "0.1111"}, {"country": "Russian Federation", "year": "1994", "gdpPerCapita": "2662.10403424087", "gdp": "395077301248.464", "totalPopulation": "148407912", "giniCoefficient": "0.536016042772", "incomeShareBot50": "0.1555", "incomeShareMid40": "0.4421", "incomeShareTop10": "0.4023", "incomeShareTop1": "0.1205"}, {"country": "Russian Federation", "year": "1995", "gdpPerCapita": "2665.77986699982", "gdp": "395537185734.854", "totalPopulation": "148375787", "giniCoefficient": "0.561069020897", "incomeShareBot50": "0.1421", "incomeShareMid40": "0.4356", "incomeShareTop10": "0.4222", "incomeShareTop1": "0.1373"}, {"country": "Russian Federation", "year": "1996", "gdpPerCapita": "2643.92919598833", "gdp": "391724890744.498", "totalPopulation": "148160129", "giniCoefficient": "0.633458708233", "incomeShareBot50": "0.0993", "incomeShareMid40": "0.4184", "incomeShareTop10": "0.4822", "incomeShareTop1": "0.1609"}, {"country": "Russian Federation", "year": "1997", "gdpPerCapita": "2737.57202398929", "gdp": "404928954191.876", "totalPopulation": "147915361", "giniCoefficient": "0.598413952014", "incomeShareBot50": "0.1245", "incomeShareMid40": "0.4139", "incomeShareTop10": "0.4616", "incomeShareTop1": "0.1664"}, {"country": "Russian Federation", "year": "1998", "gdpPerCapita": "1834.86184283035", "gdp": "270955486862.442", "totalPopulation": "147670784", "giniCoefficient": "0.571837437023", "incomeShareBot50": "0.1432", "incomeShareMid40": "0.4112", "incomeShareTop10": "0.4456", "incomeShareTop1": "0.1679"}, {"country": "Russian Federation", "year": "1999", "gdpPerCapita": "1330.75723561155", "gdp": "195907128350.934", "totalPopulation": "147214776", "giniCoefficient": "0.591642349825", "incomeShareBot50": "0.1383", "incomeShareMid40": "0.3831", "incomeShareTop10": "0.4786", "incomeShareTop1": "0.2071"}, {"country": "Russian Federation", "year": "2000", "gdpPerCapita": "1771.59405905827", "gdp": "259710142196.943", "totalPopulation": "146596869", "giniCoefficient": "0.610815427216", "incomeShareBot50": "0.1318", "incomeShareMid40": "0.3634", "incomeShareTop10": "0.5048", "incomeShareTop1": "0.2382"}, {"country": "Russian Federation", "year": "2001", "gdpPerCapita": "2100.35251171829", "gdp": "306602070620.5", "totalPopulation": "145976482", "giniCoefficient": "0.6162809585", "incomeShareBot50": "0.1305", "incomeShareMid40": "0.3593", "incomeShareTop10": "0.5103", "incomeShareTop1": "0.2656"}, {"country": "Russian Federation", "year": "2002", "gdpPerCapita": "2377.52957748244", "gdp": "345470494417.863", "totalPopulation": "145306497", "giniCoefficient": "0.600857325823", "incomeShareBot50": "0.1354", "incomeShareMid40": "0.3733", "incomeShareTop10": "0.4914", "incomeShareTop1": "0.2583"}, {"country": "Russian Federation", "year": "2003", "gdpPerCapita": "2975.12535330125", "gdp": "430347770731.787", "totalPopulation": "144648618", "giniCoefficient": "0.603998871369", "incomeShareBot50": "0.1321", "incomeShareMid40": "0.3764", "incomeShareTop10": "0.4915", "incomeShareTop1": "0.2517"}, {"country": "Russian Federation", "year": "2004", "gdpPerCapita": "4102.36483299792", "gdp": "591016690742.798", "totalPopulation": "144067316", "giniCoefficient": "0.596239259678", "incomeShareBot50": "0.1371", "incomeShareMid40": "0.3749", "incomeShareTop10": "0.488", "incomeShareTop1": "0.2369"}, {"country": "Russian Federation", "year": "2005", "gdpPerCapita": "5323.46308263383", "gdp": "764017107992.391", "totalPopulation": "143518814", "giniCoefficient": "0.588570887002", "incomeShareBot50": "0.142", "incomeShareMid40": "0.3779", "incomeShareTop10": "0.4801", "incomeShareTop1": "0.2546"}, {"country": "Russian Federation", "year": "2006", "gdpPerCapita": "6920.18912483291", "gdp": "989930542278.695", "totalPopulation": "143049637", "giniCoefficient": "0.601512451972", "incomeShareBot50": "0.1365", "incomeShareMid40": "0.3663", "incomeShareTop10": "0.4972", "incomeShareTop1": "0.2597"}, {"country": "Russian Federation", "year": "2007", "gdpPerCapita": "9101.25504905672", "gdp": "1299705764823.62", "totalPopulation": "142805114", "giniCoefficient": "0.601479918692", "incomeShareBot50": "0.1348", "incomeShareMid40": "0.3734", "incomeShareTop10": "0.4918", "incomeShareTop1": "0.2691"}, {"country": "Russian Federation", "year": "2008", "gdpPerCapita": "11635.2729337888", "gdp": "1660846387624.78", "totalPopulation": "142742366", "giniCoefficient": "0.616071716641", "incomeShareBot50": "0.1302", "incomeShareMid40": "0.3479", "incomeShareTop10": "0.5219", "incomeShareTop1": "0.2485"}, {"country": "Russian Federation", "year": "2009", "gdpPerCapita": "8562.81327716515", "gdp": "1222644282201.86", "totalPopulation": "142785349", "giniCoefficient": "0.588716881506", "incomeShareBot50": "0.1448", "incomeShareMid40": "0.3591", "incomeShareTop10": "0.4961", "incomeShareTop1": "0.2132"}, {"country": "Russian Federation", "year": "2010", "gdpPerCapita": "10674.9957825675", "gdp": "1524917468442.01", "totalPopulation": "142849468", "giniCoefficient": "0.551350142854", "incomeShareBot50": "0.1642", "incomeShareMid40": "0.3802", "incomeShareTop10": "0.4556", "incomeShareTop1": "0.1978"}, {"country": "Russian Federation", "year": "2011", "gdpPerCapita": "14311.0843159612", "gdp": "2045925608274.37", "totalPopulation": "142960908", "giniCoefficient": "0.567491011033", "incomeShareBot50": "0.1594", "incomeShareMid40": "0.3591", "incomeShareTop10": "0.4815", "incomeShareTop1": "0.2121"}, {"country": "Russian Federation", "year": "2012", "gdpPerCapita": "15420.8745413273", "gdp": "2208295773643.15", "totalPopulation": "143201721", "giniCoefficient": "0.549046612144", "incomeShareBot50": "0.1659", "incomeShareMid40": "0.3787", "incomeShareTop10": "0.4554", "incomeShareTop1": "0.1964"}, {"country": "Russian Federation", "year": "2013", "gdpPerCapita": "15974.6446270517", "gdp": "2292473246621.08", "totalPopulation": "143506995", "giniCoefficient": "0.562676925271", "incomeShareBot50": "0.1598", "incomeShareMid40": "0.3671", "incomeShareTop10": "0.4731", "incomeShareTop1": "0.2071"}, {"country": "Russian Federation", "year": "2014", "gdpPerCapita": "14095.648742954", "gdp": "2059241965490.83", "totalPopulation": "143819667", "giniCoefficient": "0.546032670044", "incomeShareBot50": "0.1682", "incomeShareMid40": "0.3781", "incomeShareTop10": "0.4537", "incomeShareTop1": "0.1998"}, {"country": "Russian Federation", "year": "2015", "gdpPerCapita": "9313.01362484996", "gdp": "1363481063446.77", "totalPopulation": "144096870", "giniCoefficient": "0.543782234603", "incomeShareBot50": "0.1703", "incomeShareMid40": "0.3761", "incomeShareTop10": "0.4535", "incomeShareTop1": "0.1972"}, {"country": "Russian Federation", "year": "2016", "gdpPerCapita": "8704.89841329594", "gdp": "1276786979221.81", "totalPopulation": "144342397", "giniCoefficient": "0.546398820076", "incomeShareBot50": "0.1697", "incomeShareMid40": "0.3724", "incomeShareTop10": "0.4579", "incomeShareTop1": "0.2052"}, {"country": "Russian Federation", "year": "2017", "gdpPerCapita": "10720.3326583505", "gdp": "1574199387070.9", "totalPopulation": "144496739", "giniCoefficient": "0.542884472337", "incomeShareBot50": "0.1728", "incomeShareMid40": "0.3714", "incomeShareTop10": "0.4558", "incomeShareTop1": "0.2105"}, {"country": "Russian Federation", "year": "2018", "gdpPerCapita": "11287.3552780815", "gdp": "1657328865709.99", "totalPopulation": "144477859", "giniCoefficient": "0.549565455471", "incomeShareBot50": "0.1697", "incomeShareMid40": "0.3656", "incomeShareTop10": "0.4646", "incomeShareTop1": "0.2151"}, {"country": "Russian Federation", "year": "2019", "gdpPerCapita": "11497.6492498593", "gdp": "1687448525466.61", "totalPopulation": "144406261", "giniCoefficient": "0.54932241074", "incomeShareBot50": "0.1698", "incomeShareMid40": "0.3659", "incomeShareTop10": "0.4643", "incomeShareTop1": "0.2145"}, {"country": "Mexico", "year": "1980", "gdpPerCapita": "3027.37527353192", "gdp": "205139086956.522", "totalPopulation": "67761367", "giniCoefficient": "0.678135231578", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1981", "gdpPerCapita": "3803.03092550358", "gdp": "263959336734.694", "totalPopulation": "69407623", "giniCoefficient": "0.678135120052", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1982", "gdpPerCapita": "2597.98290287556", "gdp": "184609157801.418", "totalPopulation": "71058650", "giniCoefficient": "0.678135150494", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1983", "gdpPerCapita": "2147.71955854609", "gdp": "156159198584.513", "totalPopulation": "72709306", "giniCoefficient": "0.678135162602", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1984", "gdpPerCapita": "2478.21083598733", "gdp": "184261495828.367", "totalPopulation": "74352631", "giniCoefficient": "0.678135180297", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1985", "gdpPerCapita": "2569.23971350142", "gdp": "195219789801.479", "totalPopulation": "75983486", "giniCoefficient": "0.678135152357", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1986", "gdpPerCapita": "1733.91299341331", "gdp": "134550096436.744", "totalPopulation": "77599105", "giniCoefficient": "0.678135162602", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1987", "gdpPerCapita": "1862.88620439437", "gdp": "147540738281.817", "totalPopulation": "79200081", "giniCoefficient": "0.678135223429", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1988", "gdpPerCapita": "2247.98138571693", "gdp": "181611549975.804", "totalPopulation": "80788725", "giniCoefficient": "0.678135178201", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1989", "gdpPerCapita": "2687.91484499786", "gdp": "221400669713.589", "totalPopulation": "82368930", "giniCoefficient": "0.678135211089", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1990", "gdpPerCapita": "3112.26859475697", "gdp": "261253582805.945", "totalPopulation": "83943135", "giniCoefficient": "0.678135207363", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1991", "gdpPerCapita": "3661.94796500841", "gdp": "313142768453.485", "totalPopulation": "85512621", "giniCoefficient": "0.678135220868", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1992", "gdpPerCapita": "4170.62338257237", "gdp": "363157598242.27", "totalPopulation": "87075136", "giniCoefficient": "0.678135231578", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1993", "gdpPerCapita": "5650.02628596643", "gdp": "500736065605.341", "totalPopulation": "88625440", "giniCoefficient": "0.678135158644", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1994", "gdpPerCapita": "5854.41811722684", "gdp": "527813238126.278", "totalPopulation": "90156396", "giniCoefficient": "0.678135223429", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1995", "gdpPerCapita": "3928.22371141004", "gdp": "360073909243.855", "totalPopulation": "91663290", "giniCoefficient": "0.678135216677", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1996", "gdpPerCapita": "4412.11629751815", "gdp": "410975595310.156", "totalPopulation": "93147045", "giniCoefficient": "0.678135152357", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1997", "gdpPerCapita": "5289.16765276589", "gdp": "500413483109.175", "totalPopulation": "94611008", "giniCoefficient": "0.678135150494", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1998", "gdpPerCapita": "5481.18195394699", "gdp": "526502129378.284", "totalPopulation": "96056313", "giniCoefficient": "0.678135158644", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "1999", "gdpPerCapita": "6157.19304371027", "gdp": "600232874042.927", "totalPopulation": "97484823", "giniCoefficient": "0.678135216677", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "2000", "gdpPerCapita": "7157.81449985734", "gdp": "707906744574.644", "totalPopulation": "98899845", "giniCoefficient": "0.678135216677", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "2001", "gdpPerCapita": "7544.56872335784", "gdp": "756706300589.791", "totalPopulation": "100298152", "giniCoefficient": "0.678135120052", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "2002", "gdpPerCapita": "7593.1373448964", "gdp": "772106378935.377", "totalPopulation": "101684764", "giniCoefficient": "0.678135185652", "incomeShareBot50": "0.0801", "incomeShareMid40": "0.3887", "incomeShareTop10": "0.5312", "incomeShareTop1": "0.2194"}, {"country": "Mexico", "year": "2003", "gdpPerCapita": "7075.36964299974", "gdp": "729336319677.449", "totalPopulation": "103081020", "giniCoefficient": "0.677466858939", "incomeShareBot50": "0.0824", "incomeShareMid40": "0.3796", "incomeShareTop10": "0.538", "incomeShareTop1": "0.2119"}, {"country": "Mexico", "year": "2004", "gdpPerCapita": "7484.486398707", "gdp": "782240601984.76", "totalPopulation": "104514934", "giniCoefficient": "0.682040395093", "incomeShareBot50": "0.0833", "incomeShareMid40": "0.3644", "incomeShareTop10": "0.5523", "incomeShareTop1": "0.2172"}, {"country": "Mexico", "year": "2005", "gdpPerCapita": "8277.67156384567", "gdp": "877476221382.101", "totalPopulation": "106005199", "giniCoefficient": "0.68303958215", "incomeShareBot50": "0.0827", "incomeShareMid40": "0.3622", "incomeShareTop10": "0.5551", "incomeShareTop1": "0.2051"}, {"country": "Mexico", "year": "2006", "gdpPerCapita": "9068.29421839425", "gdp": "975387131716.089", "totalPopulation": "107560155", "giniCoefficient": "0.688915490173", "incomeShareBot50": "0.0807", "incomeShareMid40": "0.3544", "incomeShareTop10": "0.5648", "incomeShareTop1": "0.2051"}, {"country": "Mexico", "year": "2007", "gdpPerCapita": "9642.68051672231", "gdp": "1052696282278.87", "totalPopulation": "109170503", "giniCoefficient": "0.702309148573", "incomeShareBot50": "0.0775", "incomeShareMid40": "0.339", "incomeShareTop10": "0.5835", "incomeShareTop1": "0.2486"}, {"country": "Mexico", "year": "2008", "gdpPerCapita": "10016.5712139986", "gdp": "1109989063586.62", "totalPopulation": "110815272", "giniCoefficient": "0.715401724044", "incomeShareBot50": "0.0745", "incomeShareMid40": "0.3238", "incomeShareTop10": "0.6017", "incomeShareTop1": "0.291"}, {"country": "Mexico", "year": "2009", "gdpPerCapita": "8002.97217765844", "gdp": "900045350649.351", "totalPopulation": "112463886", "giniCoefficient": "0.714200634109", "incomeShareBot50": "0.0727", "incomeShareMid40": "0.331", "incomeShareTop10": "0.5963", "incomeShareTop1": "0.2711"}, {"country": "Mexico", "year": "2010", "gdpPerCapita": "9271.39839576997", "gdp": "1057801295584.05", "totalPopulation": "114092961", "giniCoefficient": "0.713042507101", "incomeShareBot50": "0.0708", "incomeShareMid40": "0.3383", "incomeShareTop10": "0.5909", "incomeShareTop1": "0.2506"}, {"country": "Mexico", "year": "2011", "gdpPerCapita": "10203.4212952716", "gdp": "1180489601957.61", "totalPopulation": "115695468", "giniCoefficient": "0.713163207266", "incomeShareBot50": "0.074", "incomeShareMid40": "0.3286", "incomeShareTop10": "0.5975", "incomeShareTop1": "0.2703"}, {"country": "Mexico", "year": "2012", "gdpPerCapita": "10241.727828043", "gdp": "1201089987015.45", "totalPopulation": "117274156", "giniCoefficient": "0.717772026308", "incomeShareBot50": "0.0759", "incomeShareMid40": "0.3139", "incomeShareTop10": "0.6102", "incomeShareTop1": "0.3011"}, {"country": "Mexico", "year": "2013", "gdpPerCapita": "10725.1835873796", "gdp": "1274443084716.57", "totalPopulation": "118827158", "giniCoefficient": "0.715706024621", "incomeShareBot50": "0.0748", "incomeShareMid40": "0.3219", "incomeShareTop10": "0.6032", "incomeShareTop1": "0.2858"}, {"country": "Mexico", "year": "2014", "gdpPerCapita": "10928.9160089988", "gdp": "1315351183524.54", "totalPopulation": "120355137", "giniCoefficient": "0.719336382759", "incomeShareBot50": "0.0723", "incomeShareMid40": "0.3236", "incomeShareTop10": "0.6041", "incomeShareTop1": "0.2845"}, {"country": "Mexico", "year": "2015", "gdpPerCapita": "9616.64555810607", "gdp": "1171867608197.72", "totalPopulation": "121858251", "giniCoefficient": "0.712785265754", "incomeShareBot50": "0.0757", "incomeShareMid40": "0.3262", "incomeShareTop10": "0.598", "incomeShareTop1": "0.2828"}, {"country": "Mexico", "year": "2016", "gdpPerCapita": "8744.51555912786", "gdp": "1078490651625.31", "totalPopulation": "123333379", "giniCoefficient": "0.706272282395", "incomeShareBot50": "0.0792", "incomeShareMid40": "0.3288", "incomeShareTop10": "0.592", "incomeShareTop1": "0.2811"}, {"country": "Mexico", "year": "2017", "gdpPerCapita": "9287.84958732302", "gdp": "1158913035796.37", "totalPopulation": "124777326", "giniCoefficient": "0.699759364405", "incomeShareBot50": "0.0826", "incomeShareMid40": "0.3314", "incomeShareTop10": "0.586", "incomeShareTop1": "0.2794"}, {"country": "Mexico", "year": "2018", "gdpPerCapita": "9686.51424383118", "gdp": "1222348807283.2", "totalPopulation": "126190782", "giniCoefficient": "0.697244402236", "incomeShareBot50": "0.0849", "incomeShareMid40": "0.3296", "incomeShareTop10": "0.5855", "incomeShareTop1": "0.2871"}, {"country": "Mexico", "year": "2019", "gdpPerCapita": "9946.03382879198", "gdp": "1268870527160.03", "totalPopulation": "127575529", "giniCoefficient": "0.697244464927", "incomeShareBot50": "0.0849", "incomeShareMid40": "0.3296", "incomeShareTop10": "0.5855", "incomeShareTop1": "0.2871"}, {"country": "Republic of Korea", "year": "1980", "gdpPerCapita": "1715.42945990136", "gdp": "65398646757.6511", "totalPopulation": "38123775", "giniCoefficient": "0.409688913607", "incomeShareBot50": "0.2383", "incomeShareMid40": "0.4424", "incomeShareTop10": "0.3192", "incomeShareTop1": "0.0874"}, {"country": "Republic of Korea", "year": "1981", "gdpPerCapita": "1883.4512785111", "gdp": "72933350953.7025", "totalPopulation": "38723248", "giniCoefficient": "0.416666369289", "incomeShareBot50": "0.2309", "incomeShareMid40": "0.4517", "incomeShareTop10": "0.3174", "incomeShareTop1": "0.0831"}, {"country": "Republic of Korea", "year": "1982", "gdpPerCapita": "1992.52822470637", "gdp": "78358866334.7376", "totalPopulation": "39326352", "giniCoefficient": "0.414462305752", "incomeShareBot50": "0.2349", "incomeShareMid40": "0.4424", "incomeShareTop10": "0.3227", "incomeShareTop1": "0.0841"}, {"country": "Republic of Korea", "year": "1983", "gdpPerCapita": "2198.93447182242", "gdp": "87760360941.0248", "totalPopulation": "39910403", "giniCoefficient": "0.419246872156", "incomeShareBot50": "0.2331", "incomeShareMid40": "0.4378", "incomeShareTop10": "0.3291", "incomeShareTop1": "0.0881"}, {"country": "Republic of Korea", "year": "1984", "gdpPerCapita": "2413.26392539765", "gdp": "97510235986.0046", "totalPopulation": "40405956", "giniCoefficient": "0.424656820912", "incomeShareBot50": "0.2272", "incomeShareMid40": "0.4459", "incomeShareTop10": "0.3269", "incomeShareTop1": "0.0877"}, {"country": "Republic of Korea", "year": "1985", "gdpPerCapita": "2482.39995573606", "gdp": "101296177099.377", "totalPopulation": "40805744", "giniCoefficient": "0.416368755137", "incomeShareBot50": "0.2326", "incomeShareMid40": "0.4466", "incomeShareTop10": "0.3208", "incomeShareTop1": "0.0855"}, {"country": "Republic of Korea", "year": "1986", "gdpPerCapita": "2834.90384756925", "gdp": "116836802995.065", "totalPopulation": "41213674", "giniCoefficient": "0.418349537521", "incomeShareBot50": "0.2312", "incomeShareMid40": "0.4466", "incomeShareTop10": "0.3222", "incomeShareTop1": "0.0851"}, {"country": "Republic of Korea", "year": "1987", "gdpPerCapita": "3554.59520559057", "gdp": "147948259722.577", "totalPopulation": "41621690", "giniCoefficient": "0.423446466908", "incomeShareBot50": "0.2282", "incomeShareMid40": "0.4452", "incomeShareTop10": "0.3266", "incomeShareTop1": "0.0865"}, {"country": "Republic of Korea", "year": "1988", "gdpPerCapita": "4748.62960780671", "gdp": "199590823957.237", "totalPopulation": "42031247", "giniCoefficient": "0.426761258103", "incomeShareBot50": "0.2261", "incomeShareMid40": "0.4446", "incomeShareTop10": "0.3293", "incomeShareTop1": "0.0868"}, {"country": "Republic of Korea", "year": "1989", "gdpPerCapita": "5817.02918132136", "gdp": "246927292765.02", "totalPopulation": "42449038", "giniCoefficient": "0.427659155131", "incomeShareBot50": "0.2253", "incomeShareMid40": "0.4451", "incomeShareTop10": "0.3296", "incomeShareTop1": "0.0856"}, {"country": "Republic of Korea", "year": "1990", "gdpPerCapita": "6610.0365083067", "gdp": "283367525714.932", "totalPopulation": "42869283", "giniCoefficient": "0.430473192241", "incomeShareBot50": "0.2234", "incomeShareMid40": "0.4448", "incomeShareTop10": "0.3318", "incomeShareTop1": "0.0856"}, {"country": "Republic of Korea", "year": "1991", "gdpPerCapita": "7636.98242937015", "gdp": "330648530715.211", "totalPopulation": "43295704", "giniCoefficient": "0.432094559553", "incomeShareBot50": "0.2222", "incomeShareMid40": "0.445", "incomeShareTop10": "0.3328", "incomeShareTop1": "0.0848"}, {"country": "Republic of Korea", "year": "1992", "gdpPerCapita": "8126.67038993422", "gdp": "355525267405.367", "totalPopulation": "43747962", "giniCoefficient": "0.433833627875", "incomeShareBot50": "0.2209", "incomeShareMid40": "0.4452", "incomeShareTop10": "0.3339", "incomeShareTop1": "0.0841"}, {"country": "Republic of Korea", "year": "1993", "gdpPerCapita": "8884.92831945455", "gdp": "392666101884.959", "totalPopulation": "44194628", "giniCoefficient": "0.437185660802", "incomeShareBot50": "0.2188", "incomeShareMid40": "0.4446", "incomeShareTop10": "0.3366", "incomeShareTop1": "0.0845"}, {"country": "Republic of Korea", "year": "1994", "gdpPerCapita": "10385.3361681219", "gdp": "463617399962.661", "totalPopulation": "44641540", "giniCoefficient": "0.440984070883", "incomeShareBot50": "0.2165", "incomeShareMid40": "0.4437", "incomeShareTop10": "0.3398", "incomeShareTop1": "0.0851"}, {"country": "Republic of Korea", "year": "1995", "gdpPerCapita": "12564.7781344586", "gdp": "566583427334.137", "totalPopulation": "45092991", "giniCoefficient": "0.443972500732", "incomeShareBot50": "0.2146", "incomeShareMid40": "0.4433", "incomeShareTop10": "0.3421", "incomeShareTop1": "0.0853"}, {"country": "Republic of Korea", "year": "1996", "gdpPerCapita": "13403.049586225", "gdp": "610169556840.077", "totalPopulation": "45524681", "giniCoefficient": "0.476909456418", "incomeShareBot50": "0.1927", "incomeShareMid40": "0.4406", "incomeShareTop10": "0.3667", "incomeShareTop1": "0.0873"}, {"country": "Republic of Korea", "year": "1997", "gdpPerCapita": "12398.4800276705", "gdp": "569754543829.957", "totalPopulation": "45953580", "giniCoefficient": "0.482144011728", "incomeShareBot50": "0.1903", "incomeShareMid40": "0.4364", "incomeShareTop10": "0.3733", "incomeShareTop1": "0.0898"}, {"country": "Republic of Korea", "year": "1998", "gdpPerCapita": "8281.69998157684", "gdp": "383330931042.356", "totalPopulation": "46286503", "giniCoefficient": "0.46480973027", "incomeShareBot50": "0.1975", "incomeShareMid40": "0.4518", "incomeShareTop10": "0.3506", "incomeShareTop1": "0.0765"}, {"country": "Republic of Korea", "year": "1999", "gdpPerCapita": "10672.4179334373", "gdp": "497512659612.052", "totalPopulation": "46616677", "giniCoefficient": "0.478413726853", "incomeShareBot50": "0.1914", "incomeShareMid40": "0.4414", "incomeShareTop10": "0.3672", "incomeShareTop1": "0.087"}, {"country": "Republic of Korea", "year": "2000", "gdpPerCapita": "12256.9935679503", "gdp": "576178114168.494", "totalPopulation": "47008111", "giniCoefficient": "0.483288491123", "incomeShareBot50": "0.1905", "incomeShareMid40": "0.4333", "incomeShareTop10": "0.3762", "incomeShareTop1": "0.0926"}, {"country": "Republic of Korea", "year": "2001", "gdpPerCapita": "11561.2483689073", "gdp": "547658231279.87", "totalPopulation": "47370164", "giniCoefficient": "0.487661217285", "incomeShareBot50": "0.1897", "incomeShareMid40": "0.4253", "incomeShareTop10": "0.385", "incomeShareTop1": "0.0967"}, {"country": "Republic of Korea", "year": "2002", "gdpPerCapita": "13165.0657360554", "gdp": "627246081417.004", "totalPopulation": "47644736", "giniCoefficient": "0.494082430501", "incomeShareBot50": "0.188", "incomeShareMid40": "0.4161", "incomeShareTop10": "0.3959", "incomeShareTop1": "0.1028"}, {"country": "Republic of Korea", "year": "2003", "gdpPerCapita": "14672.8574703505", "gdp": "702717332012.991", "totalPopulation": "47892330", "giniCoefficient": "0.49729405747", "incomeShareBot50": "0.1869", "incomeShareMid40": "0.4118", "incomeShareTop10": "0.4013", "incomeShareTop1": "0.1031"}, {"country": "Republic of Korea", "year": "2004", "gdpPerCapita": "16496.1200942502", "gdp": "793175007858.066", "totalPopulation": "48082519", "giniCoefficient": "0.49699638446", "incomeShareBot50": "0.1887", "incomeShareMid40": "0.4071", "incomeShareTop10": "0.4042", "incomeShareTop1": "0.1077"}, {"country": "Republic of Korea", "year": "2005", "gdpPerCapita": "19402.5026259549", "gdp": "934901071332.984", "totalPopulation": "48184561", "giniCoefficient": "0.481150962031", "incomeShareBot50": "0.1987", "incomeShareMid40": "0.4107", "incomeShareTop10": "0.3906", "incomeShareTop1": "0.1075"}, {"country": "Republic of Korea", "year": "2006", "gdpPerCapita": "21743.4774514254", "gdp": "1053216909887.56", "totalPopulation": "48438292", "giniCoefficient": "0.516999577774", "incomeShareBot50": "0.1803", "incomeShareMid40": "0.3876", "incomeShareTop10": "0.4321", "incomeShareTop1": "0.1162"}, {"country": "Republic of Korea", "year": "2007", "gdpPerCapita": "24086.4104391677", "gdp": "1172614086539.86", "totalPopulation": "48683638", "giniCoefficient": "0.523277920367", "incomeShareBot50": "0.1771", "incomeShareMid40": "0.3854", "incomeShareTop10": "0.4375", "incomeShareTop1": "0.1234"}, {"country": "Republic of Korea", "year": "2008", "gdpPerCapita": "21350.427979823", "gdp": "1047339010225.25", "totalPopulation": "49054708", "giniCoefficient": "0.527960093887", "incomeShareBot50": "0.1748", "incomeShareMid40": "0.3827", "incomeShareTop10": "0.4425", "incomeShareTop1": "0.1249"}, {"country": "Republic of Korea", "year": "2009", "gdpPerCapita": "19143.8516053025", "gdp": "943941876218.743", "totalPopulation": "49307835", "giniCoefficient": "0.524459554935", "incomeShareBot50": "0.1765", "incomeShareMid40": "0.3848", "incomeShareTop10": "0.4387", "incomeShareTop1": "0.1239"}, {"country": "Republic of Korea", "year": "2010", "gdpPerCapita": "23087.2256438476", "gdp": "1144066965324.49", "totalPopulation": "49554112", "giniCoefficient": "0.528926312618", "incomeShareBot50": "0.1745", "incomeShareMid40": "0.381", "incomeShareTop10": "0.4444", "incomeShareTop1": "0.1292"}, {"country": "Republic of Korea", "year": "2011", "gdpPerCapita": "25096.2638838239", "gdp": "1253223044718.99", "totalPopulation": "49936638", "giniCoefficient": "0.529288425627", "incomeShareBot50": "0.1745", "incomeShareMid40": "0.3804", "incomeShareTop10": "0.4451", "incomeShareTop1": "0.1314"}, {"country": "Republic of Korea", "year": "2012", "gdpPerCapita": "25466.7605170594", "gdp": "1278427634342.59", "totalPopulation": "50199853", "giniCoefficient": "0.52665627537", "incomeShareBot50": "0.1755", "incomeShareMid40": "0.3829", "incomeShareTop10": "0.4416", "incomeShareTop1": "0.1287"}, {"country": "Republic of Korea", "year": "2013", "gdpPerCapita": "27182.7343101936", "gdp": "1370795199976.18", "totalPopulation": "50428893", "giniCoefficient": "0.525291708518", "incomeShareBot50": "0.176", "incomeShareMid40": "0.3843", "incomeShareTop10": "0.4397", "incomeShareTop1": "0.1275"}, {"country": "Republic of Korea", "year": "2014", "gdpPerCapita": "29249.5752209742", "gdp": "1484318219633.63", "totalPopulation": "50746659", "giniCoefficient": "0.525794146102", "incomeShareBot50": "0.1759", "incomeShareMid40": "0.3832", "incomeShareTop10": "0.4408", "incomeShareTop1": "0.1285"}, {"country": "Republic of Korea", "year": "2015", "gdpPerCapita": "28732.2310762599", "gdp": "1465773245547.15", "totalPopulation": "51014947", "giniCoefficient": "0.528668635099", "incomeShareBot50": "0.1747", "incomeShareMid40": "0.3809", "incomeShareTop10": "0.4445", "incomeShareTop1": "0.1309"}, {"country": "Republic of Korea", "year": "2016", "gdpPerCapita": "29288.8704389833", "gdp": "1500111596236.37", "totalPopulation": "51217803", "giniCoefficient": "0.530308557919", "incomeShareBot50": "0.1738", "incomeShareMid40": "0.38", "incomeShareTop10": "0.4462", "incomeShareTop1": "0.1319"}, {"country": "Republic of Korea", "year": "2017", "gdpPerCapita": "31616.8434004683", "gdp": "1623901496835.79", "totalPopulation": "51361911", "giniCoefficient": "0.530537271064", "incomeShareBot50": "0.1737", "incomeShareMid40": "0.38", "incomeShareTop10": "0.4463", "incomeShareTop1": "0.1322"}, {"country": "Republic of Korea", "year": "2018", "gdpPerCapita": "33422.9442100836", "gdp": "1724845615629.26", "totalPopulation": "51606633", "giniCoefficient": "0.530021106094", "incomeShareBot50": "0.174", "incomeShareMid40": "0.38", "incomeShareTop10": "0.446", "incomeShareTop1": "0.1316"}, {"country": "Republic of Korea", "year": "2019", "gdpPerCapita": "31846.2182324258", "gdp": "1646739219509.89", "totalPopulation": "51709098", "giniCoefficient": "0.530021146781", "incomeShareBot50": "0.174", "incomeShareMid40": "0.38", "incomeShareTop10": "0.446", "incomeShareTop1": "0.1316"}, {"country": "World", "year": "1980", "gdpPerCapita": "2548.69942480998", "gdp": "11298291912604.7", "totalPopulation": "4432963653", "giniCoefficient": "0.737462149189", "incomeShareTop10": "0.5932", "incomeShareMid40": "0.3553", "incomeShareBot50": "0.0515", "incomeShareTop1": "0.2937"}, {"country": "World", "year": "1981", "gdpPerCapita": "2592.51106774644", "gdp": "11695242940630.8", "totalPopulation": "4511164132", "giniCoefficient": "0.73693544083", "incomeShareTop10": "0.5946", "incomeShareMid40": "0.3525", "incomeShareBot50": "0.0529", "incomeShareTop1": "0.2953"}, {"country": "World", "year": "1982", "gdpPerCapita": "2522.31908712149", "gdp": "11583465922802.5", "totalPopulation": "4592387213", "giniCoefficient": "0.728968934835", "incomeShareTop10": "0.5848", "incomeShareMid40": "0.3592", "incomeShareBot50": "0.056", "incomeShareTop1": "0.2814"}, {"country": "World", "year": "1983", "gdpPerCapita": "2527.64167465613", "gdp": "11815032021890.3", "totalPopulation": "4674330282", "giniCoefficient": "0.726384723271", "incomeShareTop10": "0.5806", "incomeShareMid40": "0.3629", "incomeShareBot50": "0.0565", "incomeShareTop1": "0.2708"}, {"country": "World", "year": "1984", "gdpPerCapita": "2576.39617129672", "gdp": "12253331660239.5", "totalPopulation": "4755996689", "giniCoefficient": "0.725078888363", "incomeShareTop10": "0.5816", "incomeShareMid40": "0.3603", "incomeShareBot50": "0.0581", "incomeShareTop1": "0.2689"}, {"country": "World", "year": "1985", "gdpPerCapita": "2660.49959798273", "gdp": "12874627755374.4", "totalPopulation": "4839176734", "giniCoefficient": "0.724053500922", "incomeShareTop10": "0.5806", "incomeShareMid40": "0.3608", "incomeShareBot50": "0.0586", "incomeShareTop1": "0.2648"}, {"country": "World", "year": "1986", "gdpPerCapita": "3089.4084998913", "gdp": "15214558127121.7", "totalPopulation": "4924747934", "giniCoefficient": "0.72670216833", "incomeShareTop10": "0.5849", "incomeShareMid40": "0.3572", "incomeShareBot50": "0.058", "incomeShareTop1": "0.2696"}, {"country": "World", "year": "1987", "gdpPerCapita": "3452.88512914643", "gdp": "17307780927729.2", "totalPopulation": "5012556248", "giniCoefficient": "0.727454055501", "incomeShareTop10": "0.588", "incomeShareMid40": "0.3535", "incomeShareBot50": "0.0585", "incomeShareTop1": "0.2738"}, {"country": "World", "year": "1988", "gdpPerCapita": "3794.67220177288", "gdp": "19357714533569.1", "totalPopulation": "5101287675", "giniCoefficient": "0.731427582174", "incomeShareTop10": "0.5933", "incomeShareMid40": "0.3493", "incomeShareBot50": "0.0574", "incomeShareTop1": "0.2803"}, {"country": "World", "year": "1989", "gdpPerCapita": "3893.67252612822", "gdp": "20208071097545.1", "totalPopulation": "5189977062", "giniCoefficient": "0.728227688491", "incomeShareTop10": "0.5887", "incomeShareMid40": "0.3533", "incomeShareBot50": "0.0581", "incomeShareTop1": "0.2686"}, {"country": "World", "year": "1990", "gdpPerCapita": "4310.95718471954", "gdp": "22762052653201.6", "totalPopulation": "5280046096", "giniCoefficient": "0.732805411957", "incomeShareTop10": "0.5972", "incomeShareMid40": "0.3449", "incomeShareBot50": "0.0578", "incomeShareTop1": "0.2781"}, {"country": "World", "year": "1991", "gdpPerCapita": "4458.17695329592", "gdp": "23932115658315.8", "totalPopulation": "5368139468", "giniCoefficient": "0.73532364453", "incomeShareTop10": "0.6015", "incomeShareMid40": "0.3411", "incomeShareBot50": "0.0574", "incomeShareTop1": "0.2868"}, {"country": "World", "year": "1992", "gdpPerCapita": "4665.44529696797", "gdp": "25438697141014.5", "totalPopulation": "5452576447", "giniCoefficient": "0.739071225763", "incomeShareTop10": "0.6116", "incomeShareMid40": "0.3309", "incomeShareBot50": "0.0575", "incomeShareTop1": "0.2918"}, {"country": "World", "year": "1993", "gdpPerCapita": "4668.68466022573", "gdp": "25854641326708.1", "totalPopulation": "5537885552", "giniCoefficient": "0.738830996567", "incomeShareTop10": "0.6135", "incomeShareMid40": "0.3284", "incomeShareBot50": "0.0581", "incomeShareTop1": "0.2909"}, {"country": "World", "year": "1994", "gdpPerCapita": "4938.69736512633", "gdp": "27765780267709.8", "totalPopulation": "5622085788", "giniCoefficient": "0.740098224364", "incomeShareTop10": "0.6168", "incomeShareMid40": "0.3249", "incomeShareBot50": "0.0583", "incomeShareTop1": "0.2879"}, {"country": "World", "year": "1995", "gdpPerCapita": "5411.83057062091", "gdp": "30883985215030.1", "totalPopulation": "5706753900", "giniCoefficient": "0.739477947396", "incomeShareTop10": "0.6187", "incomeShareMid40": "0.3215", "incomeShareBot50": "0.0599", "incomeShareTop1": "0.2913"}, {"country": "World", "year": "1996", "gdpPerCapita": "5452.34292186102", "gdp": "31567187779744.1", "totalPopulation": "5789655609", "giniCoefficient": "0.739251827356", "incomeShareTop10": "0.6193", "incomeShareMid40": "0.3202", "incomeShareBot50": "0.0605", "incomeShareTop1": "0.2877"}, {"country": "World", "year": "1997", "gdpPerCapita": "5357.63180992491", "gdp": "31461549929839.2", "totalPopulation": "5872286683", "giniCoefficient": "0.737919283696", "incomeShareTop10": "0.6194", "incomeShareMid40": "0.3189", "incomeShareBot50": "0.0618", "incomeShareTop1": "0.2883"}, {"country": "World", "year": "1998", "gdpPerCapita": "5273.85768259271", "gdp": "31400579789560.5", "totalPopulation": "5954005906", "giniCoefficient": "0.740171831692", "incomeShareTop10": "0.6234", "incomeShareMid40": "0.3151", "incomeShareBot50": "0.0615", "incomeShareTop1": "0.2896"}, {"country": "World", "year": "1999", "gdpPerCapita": "5399.42242795065", "gdp": "32582769394308.2", "totalPopulation": "6034491620", "giniCoefficient": "0.741329710537", "incomeShareTop10": "0.6258", "incomeShareMid40": "0.3127", "incomeShareBot50": "0.0614", "incomeShareTop1": "0.2911"}, {"country": "World", "year": "2000", "gdpPerCapita": "5503.67293828041", "gdp": "33651286409460.8", "totalPopulation": "6114332517", "giniCoefficient": "0.74031306904", "incomeShareTop10": "0.6244", "incomeShareMid40": "0.3142", "incomeShareBot50": "0.0614", "incomeShareTop1": "0.2894"}, {"country": "World", "year": "2001", "gdpPerCapita": "5400.21699479224", "gdp": "33447171142102.4", "totalPopulation": "6193671694", "giniCoefficient": "0.739312007849", "incomeShareTop10": "0.6231", "incomeShareMid40": "0.3153", "incomeShareBot50": "0.0616", "incomeShareTop1": "0.2889"}, {"country": "World", "year": "2002", "gdpPerCapita": "5535.82503563927", "gdp": "34724863149603.8", "totalPopulation": "6272753009", "giniCoefficient": "0.73243754384", "incomeShareTop10": "0.6126", "incomeShareMid40": "0.3245", "incomeShareBot50": "0.0629", "incomeShareTop1": "0.2734"}, {"country": "World", "year": "2003", "gdpPerCapita": "6131.68981845659", "gdp": "38947772548138.2", "totalPopulation": "6351882385", "giniCoefficient": "0.728858225161", "incomeShareTop10": "0.6076", "incomeShareMid40": "0.3288", "incomeShareBot50": "0.0636", "incomeShareTop1": "0.2648"}, {"country": "World", "year": "2004", "gdpPerCapita": "6823.09417614926", "gdp": "43883083091157.9", "totalPopulation": "6431551721", "giniCoefficient": "0.729919484232", "incomeShareTop10": "0.61", "incomeShareMid40": "0.3261", "incomeShareBot50": "0.0639", "incomeShareTop1": "0.2739"}, {"country": "World", "year": "2005", "gdpPerCapita": "7299.9215389253", "gdp": "47535251474132.3", "totalPopulation": "6511748273", "giniCoefficient": "0.731957154677", "incomeShareTop10": "0.6126", "incomeShareMid40": "0.3243", "incomeShareBot50": "0.0631", "incomeShareTop1": "0.2828"}, {"country": "World", "year": "2006", "gdpPerCapita": "7814.84289179035", "gdp": "51521184805861.8", "totalPopulation": "6592734559", "giniCoefficient": "0.732901360069", "incomeShareTop10": "0.6154", "incomeShareMid40": "0.321", "incomeShareBot50": "0.0636", "incomeShareTop1": "0.2914"}, {"country": "World", "year": "2007", "gdpPerCapita": "8698.94401848456", "gdp": "58058524328165.7", "totalPopulation": "6674203697", "giniCoefficient": "0.729897339294", "incomeShareTop10": "0.6115", "incomeShareMid40": "0.3238", "incomeShareBot50": "0.0648", "incomeShareTop1": "0.2933"}, {"country": "World", "year": "2008", "gdpPerCapita": "9428.52491548108", "gdp": "63708739202937", "totalPopulation": "6757020825", "giniCoefficient": "0.725776602089", "incomeShareTop10": "0.6076", "incomeShareMid40": "0.3257", "incomeShareBot50": "0.0666", "incomeShareTop1": "0.29"}, {"country": "World", "year": "2009", "gdpPerCapita": "8836.32820595852", "gdp": "60436722711805", "totalPopulation": "6839574233", "giniCoefficient": "0.718716520558", "incomeShareTop10": "0.5994", "incomeShareMid40": "0.3313", "incomeShareBot50": "0.0693", "incomeShareTop1": "0.2813"}, {"country": "World", "year": "2010", "gdpPerCapita": "9558.48559716731", "gdp": "66162662288516.2", "totalPopulation": "6921877071", "giniCoefficient": "0.71357570001", "incomeShareTop10": "0.5914", "incomeShareMid40": "0.3382", "incomeShareBot50": "0.0704", "incomeShareTop1": "0.2737"}, {"country": "World", "year": "2011", "gdpPerCapita": "10492.8039571662", "gdp": "73479856565982.9", "totalPopulation": "7002880914", "giniCoefficient": "0.712649584932", "incomeShareTop10": "0.591", "incomeShareMid40": "0.3378", "incomeShareBot50": "0.0712", "incomeShareTop1": "0.2753"}, {"country": "World", "year": "2012", "gdpPerCapita": "10608.9518758697", "gdp": "75172809759239.9", "totalPopulation": "7085790438", "giniCoefficient": "0.708527800244", "incomeShareTop10": "0.5858", "incomeShareMid40": "0.3415", "incomeShareBot50": "0.0727", "incomeShareTop1": "0.2732"}, {"country": "World", "year": "2013", "gdpPerCapita": "10785.9709490295", "gdp": "77331908388819.2", "totalPopulation": "7169675197", "giniCoefficient": "0.707446889066", "incomeShareTop10": "0.5842", "incomeShareMid40": "0.3428", "incomeShareBot50": "0.073", "incomeShareTop1": "0.2721"}, {"country": "World", "year": "2014", "gdpPerCapita": "10954.7362027168", "gdp": "79468864487095.5", "totalPopulation": "7254292848", "giniCoefficient": "0.702030791664", "incomeShareTop10": "0.5767", "incomeShareMid40": "0.3488", "incomeShareBot50": "0.0746", "incomeShareTop1": "0.2643"}, {"country": "World", "year": "2015", "gdpPerCapita": "10251.0990489688", "gdp": "75233601708128.7", "totalPopulation": "7339076654", "giniCoefficient": "0.697092456069", "incomeShareTop10": "0.5703", "incomeShareMid40": "0.3533", "incomeShareBot50": "0.0764", "incomeShareTop1": "0.2557"}, {"country": "World", "year": "2016", "gdpPerCapita": "10292.6001733419", "gdp": "76417252932190.9", "totalPopulation": "7424484741", "giniCoefficient": "0.688186606057", "incomeShareTop10": "0.558", "incomeShareMid40": "0.3628", "incomeShareBot50": "0.0792", "incomeShareTop1": "0.2398"}, {"country": "World", "year": "2017", "gdpPerCapita": "10829.9749382103", "gdp": "81326724569979.8", "totalPopulation": "7509410228", "giniCoefficient": "0.681807726549", "incomeShareTop10": "0.549", "incomeShareMid40": "0.37", "incomeShareBot50": "0.081", "incomeShareTop1": "0.228"}, {"country": "World", "year": "2018", "gdpPerCapita": "11372.2478185663", "gdp": "86343514250201.5", "totalPopulation": "7592475615", "giniCoefficient": "0.676197457641", "incomeShareTop10": "0.5409", "incomeShareMid40": "0.3762", "incomeShareBot50": "0.0829", "incomeShareTop1": "0.218"}, {"country": "World", "year": "2019", "gdpPerCapita": "11417.1550235316", "gdp": "87607773878148.9", "totalPopulation": "7673345391", "giniCoefficient": "0.668299595108", "incomeShareTop10": "0.5303", "incomeShareMid40": "0.3842", "incomeShareBot50": "0.0854", "incomeShareTop1": "0.2044"}]`));

export const narrativeFacts = {
  1980: {
    "World": [
      "Early 1980s recession (1980-1983)",
      "Beginning of Iran-Iraq War"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Ronald Reagan elected president",
      "Iran hostage crisis continues"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1981: {
    "World": [
      "Early 1980s recession (1980-1983)",
      "IBM Personal Computer released"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Ronald Reagan inaugurated president",
      "Iran releases 52 US hostages; hostage crisis ends after 444 days",
      "AIDS epidemic begins"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1982: {
    "World": [
      "Early 1980s recession (1980-1983)",
      "Sony releases first commercial CD Player"
    ],
    "Argentina": [
      "Falklands War lasts April to June"
    ],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [],
    "United Kingdom": [
      "Falklands War lasts April to June"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1983: {
    "World": [
      "Early 1980s recession (1980-1983)"
    ],
    "Argentina": [
      "Dictatorship ends"
    ],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "US Embassy bombed in Beirut",
      "US invades Grenada"
    ],
    "United Kingdom": [
      "Independence of Brunei"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1984: {
    "World": [],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "UK agrees to hand Hong Kong back to China by 1997"
    ],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [
      "Assassination of Indira Gandhi, India Prime Minister",
      "Bhopal disaster"
    ],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [],
    "United Kingdom": [
      "UK agrees to hand Hong Kong back to China by 1997",
      "UK Miner's strike 1984-1985"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Konstantin Chernenko becomes General Secretary of the Communist Party of the Soviet Union"
    ]
  },
  1985: {
    "World": [
      "Release of Macintosh 128K",
      "Release of Windows 1.0"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [
      "End of military leadership"
    ],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [
      "Release of Nintendo Entertainment System (NES)"
    ],
    "United States": [
      "Beginning of Iran-Contra affair"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [
      "8.0 magnitude earthquake hits Mexico City"
    ],
    "Republic of Korea": [],
    "Russian Federation": [
      "Mikhail Gorbachev becomes General Secretary of the Communist Party of the Soviet Union"
    ]
  },
  1986: {
    "World": [
      "Challenger disaster"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Chernobyl disaster"
    ]
  },
  1987: {
    "World": [
      "World population reaches 5 billion",
      "Black Monday stock market crash occurs"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [
      "Radiation accident occurs in Goiania"
    ],
    "Canada": [],
    "China": [
      "Huawei founded"
    ],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1988: {
    "World": [
      "End of the Iran-Iraq War"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "George H.W. Bush elected president"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Perestroika political movement begins"
    ]
  },
  1989: {
    "World": [
      "Exxon Valdez spills 10.8 million gallons of crude oil",
      "Berlin Wall falls",
      "Revolutions of 1989 and collapse of Soviet Bloc begin; eventually leads to the end of the Cold War"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [
      "First direct Presidential election in Brazil since 1960"
    ],
    "Canada": [],
    "China": [
      "Tiananmen Square Massacre"
    ],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [
      "Akihito becomes Emperor of Japan"
    ],
    "United States": [
      "George H.W. Bush inaugurated president",
      "US invades Panama"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Soviet war in Afghanistan ends"
    ]
  },
  1990: {
    "World": [
      "End of dictatorship of Augusto Pinochet in Chile",
      "Launch of Hubble Space Telescope",
      "German Reunification",
      "End of Contra War",
      "Intergovernmental Panel on Climate change releases first assessment linking CO2 increases to rising global temperatures"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [
      "Fernando Collor begins term as the first democratically elected President of Brazil since 1964"
    ],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [
      "Germany reunifies"
    ],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1991: {
    "World": [
      "Gulf War ends"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "Sino-Soviet Border Agreement signed"
    ],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [
      "Rajiv Gandhi assassinated"
    ],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "US withdrawals, ending the Gulf War"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Boris Yeltsin becomes the first President of Russia",
      "Official dissolution of the Soviet Union and independence of 15 former Soviet republics",
      "Sino-Soviet Border Agreement signed"
    ]
  },
  1992: {
    "World": [],
    "Argentina": [],
    "Australia": [],
    "Brazil": [
      "Fernando Collor resigns due to controversy, Itamar Franco takes office as President of Brazil"
    ],
    "Canada": [],
    "China": [],
    "European Union": [
      "Maastricht Treaty creates teh European Union"
    ],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "LA riots over the acquittal of those involved in the beating of Rodney King"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [
      "South Korea admitted to the UN after the end of its dictatorship"
    ],
    "Russian Federation": []
  },
  1993: {
    "World": [],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Bill Clinton is inaugurated President of United States",
      "1993 World Trade Center bombing",
      "Waco siege results in 86 deaths"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1994: {
    "World": [
      "North American Free Trade Agreement (NAFTA) established",
      "Rwandan genocide",
      "Amazon founded by Jeff Bezos"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [
      "Plano Real introduces teh new real currency in Brazil"
    ],
    "Canada": [
      "Canada joins NAFTA"
    ],
    "China": [
      "Construction begins on the Three Gorges Dam"
    ],
    "European Union": [],
    "France": [
      "Channel tunnel opens to the UK"
    ],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [
      "Playstation released in Japan"
    ],
    "United States": [
      "US joins NAFTA",
      "Paulau gains independence from US"
    ],
    "United Kingdom": [
      "Channel tunnel opens to France"
    ],
    "Turkey": [],
    "South Africa": [
      "End of Apartheid",
      "Nelson Mandela elected president"
    ],
    "Saudi Arabia": [],
    "Mexico": [
      "Mexico joins NAFTA",
      "Mexican Peso crisis"
    ],
    "Republic of Korea": [],
    "Russian Federation": [
      "First Chechen War begins"
    ]
  },
  1995: {
    "World": [
      "World Trade Organization founded"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "Third Taiwan Strait Crisis begins"
    ],
    "European Union": [
      "Austria, Finland, and Sweden join the EU"
    ],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [
      "Great Hanshin earthquake strikes Japan",
      "Tokyo subway sarin attack"
    ],
    "United States": [
      "Playstation released in US"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1996: {
    "World": [
      "First Congo War begins",
      "Dictatorship ends in Taiwan"
    ],
    "Argentina": [],
    "Australia": [
      "Port Arthur massacre leads to stricter gun regulations in Australia"
    ],
    "Brazil": [],
    "Canada": [],
    "China": [
      "Third Taiwan Strait Crisis ends"
    ],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [
      "Release of Nintendo64",
      "Release of DVD"
    ],
    "United States": [],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1997: {
    "World": [
      "Princess Diana killed in a car accident in Paris",
      "Release of Titanic",
      "Sound barrier broken on land",
      "Bank of Thailand floats the baht, triggering the Asian financial crisis",
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "China receives sovereignty over Hong Kong from the UK"
    ],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [],
    "United Kingdom": [
      "Tony Blair becomes Prime Minister",
      "UK transfers sovereignty over Hong Kong to China"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  1998: {
    "World": [
      "Google founded"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [
      "Riots in Indonesia; results in the resignation of President Suharto and independence of East Timor"
    ],
    "Japan": [
      "Nintendo releases Game Boy Color",
      "Sega releases Dreamcast"
    ],
    "United States": [
      "Impeachment of Bill Clinton begins as a result of the Clinton-Lewinsky scandal"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "1998 Russian financial crisis"
    ]
  },
  1999: {
    "World": [
      "World population reaches 6 billion"
    ],
    "Argentina": [
      "Argentine economic crisis begins"
    ],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [
      "Euro introduced to enter circulation in 2002"
    ],
    "France": [],
    "Germany": [],
    "India": [
      "Fourth Indo-Pakistani War"
    ],
    "Italy": [],
    "Indonesia": [
      "East Timorese Crisis"
    ],
    "Japan": [],
    "United States": [
      "Colombine HS massacre",
      "John F Kennedy Jr. plane crash"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Second Chechen War begins",
      "Russian apartment bombings",
      "Vladimir Putin becomes President of Russia"
    ]
  },
  2000: {
    "World": [
      "Y2K does not cause the world to end",
      "The Millennium Summit is held to discuss the role of the UN moving forward",
      "First long-term residents arrive on International Space Station"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [
      "Air France Flight 4590 crashes into a hotel in Gonesse"
    ],
    "Germany": [],
    "India": [
      "India becomes second country to reach 1 billion people"
    ],
    "Italy": [],
    "Indonesia": [],
    "Japan": [
      "Playstation 2 released"
    ],
    "United States": [
      "al-Qaeda suicide bombs the USS Cole",
      "George W. Bush is elected President after recount in Florida",
      "Dot-com bubble bursts"
    ],
    "United Kingdom": [
      "UK launches Operation Palliser; ends the Sierra Leone Civil War"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [
      "2000 Inter-Korean Summit"
    ],
    "Russian Federation": []
  },
  2001: {
    "World": [
      "9/11 attacks",
      "First iPod introduced",
      "Wikipedia launched"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "China joins as member of the World Trade Organization"
    ],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [
      "An earthquake strikes in Gujarat, India causing more than 20,000 deaths"
    ],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "George W. Bush inaugurated as President",
      "September 11th al-Qaeda crashes two planes into the twin towers of the World Trade Center; 2,996 die in the attacks",
      "US invades Afghanistan",
      "Enron files for Chapter 11 bankruptcy"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2002: {
    "World": [
      "African Union founded",
      "Switzerland joins United Nations",
      "International Criminal Court established",
      "Steve Fossett becomes the first person to fly solo around the world"
    ],
    "Argentina": [
      "Argentine economic crisis ends"
    ],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "Hu Jintao elected as General Secretary of the Communist Party of China"
    ],
    "European Union": [
      "The Euro enters circulation"
    ],
    "France": [],
    "Germany": [],
    "India": [
      "2002 Gujarat riots"
    ],
    "Italy": [],
    "Indonesia": [
      "2002 Bali bombings",
      "East Timor officially gains independence"
    ],
    "Japan": [],
    "United States": [
      "Guantanamo Bay detention camp established"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [
      "African Union founded with Johannesburg as a major political center"
    ],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2003: {
    "World": [
      "US invades Iraq",
      "Space Shuttle Columbia disaster",
      "Human Genome Project completed",
      "Final flight of the SST Concorde"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "US invades Iraq and ousts Saddam Hussein"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2004: {
    "World": [
      "NATO and the EU incorporate most of the former Easter Bloc",
      "Facebook founded",
      "Union of South American Nations formed",
      "Spirit and Opportunity land on Mars"
    ],
    "Argentina": [
      "Argentina joins Union of South American Nations"
    ],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [
      "EU incorporate most of the former Easter Bloc"
    ],
    "France": [],
    "Germany": [],
    "India": [
      "Boxing Day Tsunami"
    ],
    "Italy": [],
    "Indonesia": [
      "Boxing Day Tsunami"
    ],
    "Japan": [],
    "United States": [
      "Second Battle of Fallujah occurs, deadliest American battle since Vietnam"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Beslan terrorist attack"
    ]
  },
  2005: {
    "World": [
      "Kyoto protocol comes into effect",
      "YouTube is founded",
      "2005 World Summit"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [
      "Angela Merkel becomes Germany's first female Chancellor"
    ],
    "India": [
      "Floods in Maharashtra",
      "Earthquake in Kashmir"
    ],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Hurricane Katrina hits US"
    ],
    "United Kingdom": [
      "Irish Republican Army ends its military campaign in Northern Ireland",
      "7/7 attacks on London Underground"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2006: {
    "World": [
      "Independence of Montenegro",
      "Google acquires YouTube",
      "Execution of Saddam Hussein",
      "Twitter is launched"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [
      "Mumbai bombings"
    ],
    "Italy": [],
    "Indonesia": [],
    "Japan": [
      "Nintendo launches Wii"
    ],
    "United States": [],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2007: {
    "World": [
      "Spike in food prices and subprime lending crisis help trigger global recession",
      "Introduction of iPhone"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Virginia Tech shooting"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2008: {
    "World": [
      "Great Recession begins; stock markets plummet around the world",
      "Work completed on Large Hadron Collider"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Barack Obama elected President"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Dmitry Medvedev becomes President",
      "2008 South Ossetia war"
    ]
  },
  2009: {
    "World": [
      "Bitcoin is launched",
      "2009 swine flue pandemic begins"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [
      "Treaty of Lisbon ratified"
    ],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Barack Obama inaugurated President, first African-American president"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Second Chechen War ends"
    ]
  },
  2010: {
    "World": [
      "Arab Spring starts",
      "iPad is introduced"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [
      "Dilma Rousseff elected first female president of Brazil"
    ],
    "Canada": [],
    "China": [],
    "European Union": [
      "Threat of Greece defaulting on debts triggers European sovereign debt crisis and Republic of Ireland's financial crisis"
    ],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Largest oil spill in history occurs in Gulf of Mexico"
    ],
    "United Kingdom": [
      "David Cameron becomes Prime Minister"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "2010 Moscow Metro bombings"
    ]
  },
  2011: {
    "World": [
      "World population reaches 7 billion",
      "Occupy movement inspires worldwide protests"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "World's longest bridge, Danyang-Kunshan Grand Bridge, opens in China"
    ],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [
      "Magnitude 9 earthquake in Japan triggers a tsunami and meltdown of the Fukushima Nuclear Power Plant"
    ],
    "United States": [
      "Osama bin Laden killed by US Navy SEALs",
      "Iraq War ends"
    ],
    "United Kingdom": [
      "London Riots"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2012: {
    "World": [
      "Higgs boson discovered",
      "UN Climate Change Conference agrees to extend the Kyoto Protocol until 2020",
      "Curiosity finds evidence of water on Mars"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "Xi Jinping elected as General Secretary of the Communist Party of China"
    ],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [
      "Costa Concordia disaster"
    ],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Sandy Hook shooting",
      "2012 Aurora, CO shooting",
      "Barack Obama wins second term as President",
      "Killing of Trayvon Martin"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Vladimir Putin is elected president for the third time"
    ]
  },
  2013: {
    "World": [],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [
      "Croatia joins EU"
    ],
    "France": [
      "French military intervenes in Northern Mali conflict"
    ],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Snowden releases classified documents concerning mass surveillance by the NSA"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [
      "Death and state funeral of Nelson Mandela"
    ],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Chelyabinsk meteor strikes Russia"
    ]
  },
  2014: {
    "World": [
      "Worst Ebola epidemic in history occurs",
      "Malaysia Airlines Flight 370 disappears",
      "ISIS begins offensive in northern Iraq leading to intervention by US-led coalition"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [
      "Brazilian financial crisis begins 2014-2017"
    ],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [
      "Narendra Modi is elected as the Prime Minister of India"
    ],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Police shooting of Michael Brown leads to violent unrest in Ferguson, MO"
    ],
    "United Kingdom": [
      "Scotland votes to remain in UK"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": [
      "Russia annexes Crimea",
      "2014 Russian financial crisis"
    ]
  },
  2015: {
    "World": [
      "195 nations agree to lower carbon emissions",
      "Liquid water is found on Mars",
      "Volkswagen emissions scandal"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "Heads of China and Taiwan meet for the first time",
      "China announces end of One-child policy after 35 years"
    ],
    "European Union": [],
    "France": [
      "Series of terrorist attacks occur in Paris"
    ],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "US and Cuba resume diplomatic relations",
      "Gay marriage legalised in US by Supreme Court"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2016: {
    "World": [
      "UN lifts sanctions from Iran as it dismantled its nuclear program",
      "Paris Agreement signed by 195 nations to fight global warming, goes into effect",
      "Panama Papers, a leak of legal documents, reveals information on 214,888 offshore companies",
      "Pokemon Go released"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [
      "Brussels bombings"
    ],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Donald Trump elected President",
      "Orlando nightclub shooting"
    ],
    "United Kingdom": [
      "UK votes to leave the European Union; David Cameron resigns as a result",
      "Theresa May becomes Prime Minister"
    ],
    "Turkey": [
      "Ataturk Airport massacre"
    ],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [
      "El Chapo recaptured following his escape from prison"
    ],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2017: {
    "World": [
      "Women's march takes place the day after the inauguration of Donald Trump",
      "Allegations of sexual abuse against film producer Harvey Weinstein lead to \"Me Too\" movement"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [],
    "European Union": [],
    "France": [],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Donald Trump inaugurated President",
      "Charlottesville \"Unite the Right\" rally takes place, resulting in the death of one counter-protester",
      "Las Vegas mass shooting at music festival",
      "Sutherland Springs Church shooting",
      "Solar eclipse passes through contiguous United States"
    ],
    "United Kingdom": [
      "Terrorist bombing at Ariana Grande concert in Manchester"
    ],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [
      "Two earthquakes strike Mexico"
    ],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2018: {
    "World": [
      "March for Our Lives occurs worldwide in response to Parkland shooting"
    ],
    "Argentina": [],
    "Australia": [],
    "Brazil": [],
    "Canada": [],
    "China": [
      "National People's COngress votes to abolish presidential term limits, allowing Xi Jinping to rule for life"
    ],
    "European Union": [],
    "France": [
      "Yellow vests movement becomes France's largest sustained period of civil unrest since 1968"
    ],
    "Germany": [],
    "India": [],
    "Italy": [],
    "Indonesia": [
      "Sunda strait tsunami",
      "2018 Sulawesi earthquake and tsunami"
    ],
    "Japan": [],
    "United States": [
      "Parkland shooting occurs"
    ],
    "United Kingdom": [],
    "Turkey": [
      "Turkey invades northern Syria"
    ],
    "South Africa": [],
    "Saudi Arabia": [
      "Jamal Khashoggi assassinated inside Saudi consulate in Istanbul, triggers diplomatic crisis",
      "Saudi Arabia allows women to drive"
    ],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
  2019: {
    "World": [
      "Christchurch mosque shootings kills 51",
      "COVID-19 pandemic begins"
    ],
    "Argentina": [],
    "Australia": [
      "Australia experiences the worst brush fires in its history"
    ],
    "Brazil": [
      "Wildfires spike in Brazil"
    ],
    "Canada": [],
    "China": [
      "Protests begin in Hong Kong over extradition bill",
      "COVID-19 pandemic begins in Wuhan, China"
    ],
    "European Union": [],
    "France": [
      "Fire engulfs Notre-Dame Cathedral in Paris"
    ],
    "Germany": [],
    "India": [
      "India revokes special status of Jammu and Kashmir"
    ],
    "Italy": [],
    "Indonesia": [],
    "Japan": [],
    "United States": [
      "Donald Trump is impeached by the House of Representatives for abuse of power and obstruction of Congress"
    ],
    "United Kingdom": [],
    "Turkey": [],
    "South Africa": [],
    "Saudi Arabia": [],
    "Mexico": [],
    "Republic of Korea": [],
    "Russian Federation": []
  },
}
