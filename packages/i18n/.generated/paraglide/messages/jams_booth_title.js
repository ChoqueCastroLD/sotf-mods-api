/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_TitleInputs */

const en_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voting`)
};

const es_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votación`)
};

const de_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstimmung`)
};

const fr_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote`)
};

const it_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votazione`)
};

const nl_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemmen`)
};

const pl_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Głosowanie`)
};

const pt_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votação`)
};

const ru_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Голосование`)
};

const sv_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstning`)
};

const tr_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oylama`)
};

const zh_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票`)
};

const ja_jams_booth_title = /** @type {(inputs: Jams_Booth_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票`)
};

/**
* | output |
* | --- |
* | "Voting" |
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
