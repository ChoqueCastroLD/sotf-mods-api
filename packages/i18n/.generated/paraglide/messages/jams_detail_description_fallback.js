/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Jams_Detail_Description_FallbackInputs */

const en_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: a Sons of the Forest Mod Jam. See the theme, the entries and the results.`)
};

const es_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: un Mod Jam de Sons of the Forest. Consulta el tema, las participaciones y los resultados.`)
};

const de_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: eine Sons-of-the-Forest-Mod-Jam. Sieh dir Thema, Beiträge und Ergebnisse an.`)
};

const fr_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} : un Mod Jam Sons of the Forest. Découvrez le thème, les participations et les résultats.`)
};

const it_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: un Mod Jam di Sons of the Forest. Scopri tema, iscrizioni e risultati.`)
};

const nl_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: een Sons of the Forest Mod Jam. Bekijk het thema, de inzendingen en de resultaten.`)
};

const pl_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: Mod Jam do Sons of the Forest. Zobacz temat, zgłoszenia i wyniki.`)
};

const pt_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: um Mod Jam de Sons of the Forest. Veja o tema, as inscrições e os resultados.`)
};

const ru_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: мод-джем Sons of the Forest. Тема, работы и результаты.`)
};

const sv_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: en Sons of the Forest Mod Jam. Se tema, bidrag och resultat.`)
};

const tr_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}: bir Sons of the Forest Mod Jam'i. Temayı, başvuruları ve sonuçları görün.`)
};

const zh_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}：《Sons of the Forest》Mod Jam。查看主题、参赛作品和结果。`)
};

const ja_jams_detail_description_fallback = /** @type {(inputs: Jams_Detail_Description_FallbackInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title}：Sons of the Forest の Mod ジャム。テーマ、作品、結果をご覧ください。`)
};

/**
* | output |
* | --- |
* | "{title}: a Sons of the Forest Mod Jam. See the theme, the entries and the results." |
*
* @param {Jams_Detail_Description_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_detail_description_fallback = /** @type {((inputs: Jams_Detail_Description_FallbackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Detail_Description_FallbackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_detail_description_fallback(inputs)
	if (locale === "de") return de_jams_detail_description_fallback(inputs)
	if (locale === "fr") return fr_jams_detail_description_fallback(inputs)
	if (locale === "it") return it_jams_detail_description_fallback(inputs)
	if (locale === "nl") return nl_jams_detail_description_fallback(inputs)
	if (locale === "pl") return pl_jams_detail_description_fallback(inputs)
	if (locale === "pt") return pt_jams_detail_description_fallback(inputs)
	if (locale === "ru") return ru_jams_detail_description_fallback(inputs)
	if (locale === "sv") return sv_jams_detail_description_fallback(inputs)
	if (locale === "tr") return tr_jams_detail_description_fallback(inputs)
	if (locale === "zh") return zh_jams_detail_description_fallback(inputs)
	if (locale === "ja") return ja_jams_detail_description_fallback(inputs)
	return en_jams_detail_description_fallback(inputs)
});
