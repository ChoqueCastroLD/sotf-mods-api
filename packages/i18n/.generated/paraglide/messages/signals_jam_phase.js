/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ phase: NonNullable<unknown>, jam: NonNullable<unknown> }} Signals_Jam_PhaseInputs */

const en_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam announced: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`Submissions are open in ${i?.jam}`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`Voting is open in ${i?.jam}`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`Results are out for ${i?.jam}`);
	return /** @type {LocalizedString} */ (`${i?.jam} has an update`)
	
};

const es_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam anunciada: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`Ya se pueden enviar entradas a ${i?.jam}`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`La votación de ${i?.jam} está abierta`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`Ya están los resultados de ${i?.jam}`);
	return /** @type {LocalizedString} */ (`${i?.jam} tiene novedades`)
	
};

const de_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam angekündigt: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`Einreichungen für ${i?.jam} sind geöffnet`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`Die Abstimmung bei ${i?.jam} läuft`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`Die Ergebnisse von ${i?.jam} sind da`);
	return /** @type {LocalizedString} */ (`Neuigkeiten zu ${i?.jam}`)
	
};

const fr_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam annoncée : ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`Les participations à ${i?.jam} sont ouvertes`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`Le vote de ${i?.jam} est ouvert`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`Les résultats de ${i?.jam} sont publiés`);
	return /** @type {LocalizedString} */ (`${i?.jam} a du nouveau`)
	
};

const it_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam annunciata: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`Le iscrizioni a ${i?.jam} sono aperte`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`Le votazioni di ${i?.jam} sono aperte`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`Ci sono i risultati di ${i?.jam}`);
	return /** @type {LocalizedString} */ (`Novità per ${i?.jam}`)
	
};

const nl_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam aangekondigd: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`Inzendingen voor ${i?.jam} zijn geopend`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`Stemmen voor ${i?.jam} is geopend`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`De resultaten van ${i?.jam} zijn er`);
	return /** @type {LocalizedString} */ (`Nieuws over ${i?.jam}`)
	
};

const pl_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Ogłoszono Mod Jam: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`Zgłoszenia do ${i?.jam} są otwarte`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`Głosowanie w ${i?.jam} trwa`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`Są wyniki ${i?.jam}`);
	return /** @type {LocalizedString} */ (`Nowości w ${i?.jam}`)
	
};

const pt_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam anunciada: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`As inscrições em ${i?.jam} estão abertas`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`A votação de ${i?.jam} está aberta`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`Os resultados de ${i?.jam} saíram`);
	return /** @type {LocalizedString} */ (`Novidades em ${i?.jam}`)
	
};

const ru_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Анонсирован Mod Jam: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`Открыт приём работ на ${i?.jam}`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`Открыто голосование в ${i?.jam}`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`Опубликованы результаты ${i?.jam}`);
	return /** @type {LocalizedString} */ (`Новости ${i?.jam}`)
	
};

const sv_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam aviserad: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`Bidrag till ${i?.jam} är öppna`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`Röstningen i ${i?.jam} är öppen`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`Resultaten för ${i?.jam} är ute`);
	return /** @type {LocalizedString} */ (`Nyheter om ${i?.jam}`)
	
};

const tr_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam duyuruldu: ${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`${i?.jam} için katılımlar açıldı`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`${i?.jam} için oylama açıldı`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`${i?.jam} sonuçları açıklandı`);
	return /** @type {LocalizedString} */ (`${i?.jam} ile ilgili yenilik var`)
	
};

const zh_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam 已公布：${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`${i?.jam} 已开放投稿`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`${i?.jam} 已开放投票`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`${i?.jam} 的结果已公布`);
	return /** @type {LocalizedString} */ (`${i?.jam} 有新动态`)
	
};

const ja_signals_jam_phase = /** @type {(inputs: Signals_Jam_PhaseInputs) => LocalizedString} */ (i) => {
	if (i?.phase === "announced") return /** @type {LocalizedString} */ (`Mod Jam 告知：${i?.jam}`);
	if (i?.phase === "submissions") return /** @type {LocalizedString} */ (`${i?.jam} のエントリー受付が始まりました`);
	if (i?.phase === "voting") return /** @type {LocalizedString} */ (`${i?.jam} の投票が始まりました`);
	if (i?.phase === "results") return /** @type {LocalizedString} */ (`${i?.jam} の結果が発表されました`);
	return /** @type {LocalizedString} */ (`${i?.jam} に更新があります`)
	
};

/**
* | phase | output |
* | --- | --- |
* | "announced" | "Mod Jam announced: {jam}" |
* | "submissions" | "Submissions are open in {jam}" |
* | "voting" | "Voting is open in {jam}" |
* | "results" | "Results are out for {jam}" |
* | * | "{jam} has an update" |
*
* @param {Signals_Jam_PhaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_jam_phase = /** @type {((inputs: Signals_Jam_PhaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Jam_PhaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_jam_phase(inputs)
	if (locale === "de") return de_signals_jam_phase(inputs)
	if (locale === "fr") return fr_signals_jam_phase(inputs)
	if (locale === "it") return it_signals_jam_phase(inputs)
	if (locale === "nl") return nl_signals_jam_phase(inputs)
	if (locale === "pl") return pl_signals_jam_phase(inputs)
	if (locale === "pt") return pt_signals_jam_phase(inputs)
	if (locale === "ru") return ru_signals_jam_phase(inputs)
	if (locale === "sv") return sv_signals_jam_phase(inputs)
	if (locale === "tr") return tr_signals_jam_phase(inputs)
	if (locale === "zh") return zh_signals_jam_phase(inputs)
	if (locale === "ja") return ja_signals_jam_phase(inputs)
	return en_signals_jam_phase(inputs)
});
