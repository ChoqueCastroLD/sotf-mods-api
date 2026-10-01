/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_Done_TitleInputs */

const en_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every entry rated`)
};

const es_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo valorado`)
};

const de_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles bewertet`)
};

const fr_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout est noté`)
};

const it_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto valutato`)
};

const nl_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles beoordeeld`)
};

const pl_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko ocenione`)
};

const pt_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo avaliado`)
};

const ru_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё оценено`)
};

const sv_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt betygsatt`)
};

const tr_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hepsi puanlandı`)
};

const zh_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部评分完成`)
};

const ja_jams_booth_done_title = /** @type {(inputs: Jams_Booth_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて評価しました`)
};

/**
* | output |
* | --- |
* | "Every entry rated" |
*
* @param {Jams_Booth_Done_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_done_title = /** @type {((inputs?: Jams_Booth_Done_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_Done_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_done_title(inputs)
	if (locale === "de") return de_jams_booth_done_title(inputs)
	if (locale === "fr") return fr_jams_booth_done_title(inputs)
	if (locale === "it") return it_jams_booth_done_title(inputs)
	if (locale === "nl") return nl_jams_booth_done_title(inputs)
	if (locale === "pl") return pl_jams_booth_done_title(inputs)
	if (locale === "pt") return pt_jams_booth_done_title(inputs)
	if (locale === "ru") return ru_jams_booth_done_title(inputs)
	if (locale === "sv") return sv_jams_booth_done_title(inputs)
	if (locale === "tr") return tr_jams_booth_done_title(inputs)
	if (locale === "zh") return zh_jams_booth_done_title(inputs)
	if (locale === "ja") return ja_jams_booth_done_title(inputs)
	return en_jams_booth_done_title(inputs)
});
