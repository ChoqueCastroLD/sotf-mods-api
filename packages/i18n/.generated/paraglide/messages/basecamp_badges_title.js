/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Badges_TitleInputs */

const en_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const es_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias`)
};

const de_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abzeichen`)
};

const fr_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const it_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi`)
};

const nl_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const pl_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki`)
};

const pt_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias`)
};

const ru_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки`)
};

const sv_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken`)
};

const tr_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler`)
};

const zh_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`徽章`)
};

const ja_basecamp_badges_title = /** @type {(inputs: Basecamp_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジ`)
};

/**
* | output |
* | --- |
* | "Badges" |
*
* @param {Basecamp_Badges_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_title = /** @type {((inputs?: Basecamp_Badges_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_title(inputs)
	if (locale === "de") return de_basecamp_badges_title(inputs)
	if (locale === "fr") return fr_basecamp_badges_title(inputs)
	if (locale === "it") return it_basecamp_badges_title(inputs)
	if (locale === "nl") return nl_basecamp_badges_title(inputs)
	if (locale === "pl") return pl_basecamp_badges_title(inputs)
	if (locale === "pt") return pt_basecamp_badges_title(inputs)
	if (locale === "ru") return ru_basecamp_badges_title(inputs)
	if (locale === "sv") return sv_basecamp_badges_title(inputs)
	if (locale === "tr") return tr_basecamp_badges_title(inputs)
	if (locale === "zh") return zh_basecamp_badges_title(inputs)
	if (locale === "ja") return ja_basecamp_badges_title(inputs)
	return en_basecamp_badges_title(inputs)
});
