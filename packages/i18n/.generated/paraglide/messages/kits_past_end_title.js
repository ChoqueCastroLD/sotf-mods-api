/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Past_End_TitleInputs */

const en_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Past the last page`)
};

const es_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más allá de la última página`)
};

const de_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinter der letzten Seite`)
};

const fr_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Au-delà de la dernière page`)
};

const it_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oltre l’ultima pagina`)
};

const nl_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voorbij de laatste pagina`)
};

const pl_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poza ostatnią stroną`)
};

const pt_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Além da última página`)
};

const ru_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дальше последней страницы`)
};

const sv_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Efter sista sidan`)
};

const tr_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son sayfanın ötesi`)
};

const zh_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已超出最后一页`)
};

const ja_kits_past_end_title = /** @type {(inputs: Kits_Past_End_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最後のページより先です`)
};

/**
* | output |
* | --- |
* | "Past the last page" |
*
* @param {Kits_Past_End_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_past_end_title = /** @type {((inputs?: Kits_Past_End_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Past_End_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_past_end_title(inputs)
	if (locale === "de") return de_kits_past_end_title(inputs)
	if (locale === "fr") return fr_kits_past_end_title(inputs)
	if (locale === "it") return it_kits_past_end_title(inputs)
	if (locale === "nl") return nl_kits_past_end_title(inputs)
	if (locale === "pl") return pl_kits_past_end_title(inputs)
	if (locale === "pt") return pt_kits_past_end_title(inputs)
	if (locale === "ru") return ru_kits_past_end_title(inputs)
	if (locale === "sv") return sv_kits_past_end_title(inputs)
	if (locale === "tr") return tr_kits_past_end_title(inputs)
	if (locale === "zh") return zh_kits_past_end_title(inputs)
	if (locale === "ja") return ja_kits_past_end_title(inputs)
	return en_kits_past_end_title(inputs)
});
