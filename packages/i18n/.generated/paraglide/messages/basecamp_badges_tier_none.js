/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ downloads: NonNullable<unknown> }} Basecamp_Badges_Tier_NoneInputs */

const en_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.downloads} lifetime downloads: the first tier starts at 1,000.`)
};

const es_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.downloads} descargas en total: el primer rango empieza en 1000.`)
};

const de_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.downloads} Downloads insgesamt: die erste Stufe beginnt bei 1.000.`)
};

const fr_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.downloads} téléchargements au total : le premier rang commence à 1 000.`)
};

const it_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.downloads} download in totale: il primo livello parte da 1.000.`)
};

const nl_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.downloads} downloads in totaal: het eerste niveau begint bij 1.000.`)
};

const pl_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Łącznie pobrań: ${i?.downloads}; pierwszy poziom zaczyna się od 1000.`)
};

const pt_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.downloads} downloads no total: o primeiro nível começa em 1.000.`)
};

const ru_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Всего загрузок: ${i?.downloads}; первый ранг начинается с 1000.`)
};

const sv_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.downloads} nedladdningar totalt: den första nivån börjar vid 1 000.`)
};

const tr_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toplam ${i?.downloads} indirme: ilk seviye 1.000'de başlar.`)
};

const zh_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`累计 ${i?.downloads} 次下载：第一个等级从 1000 次开始。`)
};

const ja_basecamp_badges_tier_none = /** @type {(inputs: Basecamp_Badges_Tier_NoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`累計 ${i?.downloads} ダウンロード：最初のティアは 1,000 から始まります。`)
};

/**
* | output |
* | --- |
* | "{downloads} lifetime downloads: the first tier starts at 1,000." |
*
* @param {Basecamp_Badges_Tier_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_tier_none = /** @type {((inputs: Basecamp_Badges_Tier_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Tier_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_tier_none(inputs)
	if (locale === "de") return de_basecamp_badges_tier_none(inputs)
	if (locale === "fr") return fr_basecamp_badges_tier_none(inputs)
	if (locale === "it") return it_basecamp_badges_tier_none(inputs)
	if (locale === "nl") return nl_basecamp_badges_tier_none(inputs)
	if (locale === "pl") return pl_basecamp_badges_tier_none(inputs)
	if (locale === "pt") return pt_basecamp_badges_tier_none(inputs)
	if (locale === "ru") return ru_basecamp_badges_tier_none(inputs)
	if (locale === "sv") return sv_basecamp_badges_tier_none(inputs)
	if (locale === "tr") return tr_basecamp_badges_tier_none(inputs)
	if (locale === "zh") return zh_basecamp_badges_tier_none(inputs)
	if (locale === "ja") return ja_basecamp_badges_tier_none(inputs)
	return en_basecamp_badges_tier_none(inputs)
});
