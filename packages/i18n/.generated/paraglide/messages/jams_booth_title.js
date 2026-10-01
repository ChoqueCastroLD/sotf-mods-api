/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_TitleInputs */

const en_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voting booth`)
};

const es_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabina de votación`)
};

const de_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wahlkabine`)
};

const fr_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isoloir`)
};

const it_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabina di voto`)
};

const nl_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemhokje`)
};

const pl_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kabina do głosowania`)
};

const pt_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cabine de votação`)
};

const ru_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кабина для голосования`)
};

const sv_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valbås`)
};

const tr_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oy kabini`)
};

const zh_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票亭`)
};

const ja_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票ブース`)
};

/**
* | output |
* | --- |
* | "Voting booth" |
*
* @param {Jams_Booth_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_title = /** @type {((inputs?: Jams_Booth_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_title(inputs)
	if (locale === "de") return de_jams_booth_title(inputs)
	if (locale === "fr") return fr_jams_booth_title(inputs)
	if (locale === "it") return it_jams_booth_title(inputs)
	if (locale === "nl") return nl_jams_booth_title(inputs)
	if (locale === "pl") return pl_jams_booth_title(inputs)
	if (locale === "pt") return pt_jams_booth_title(inputs)
	if (locale === "ru") return ru_jams_booth_title(inputs)
	if (locale === "sv") return sv_jams_booth_title(inputs)
	if (locale === "tr") return tr_jams_booth_title(inputs)
	if (locale === "zh") return zh_jams_booth_title(inputs)
	if (locale === "ja") return ja_jams_booth_title(inputs)
	return en_jams_booth_title(inputs)
});
