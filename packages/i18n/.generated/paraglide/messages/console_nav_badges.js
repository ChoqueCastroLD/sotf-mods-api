/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_BadgesInputs */

const en_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const es_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias`)
};

const de_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abzeichen`)
};

const fr_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const it_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi`)
};

const nl_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges`)
};

const pl_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki`)
};

const pt_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias`)
};

const ru_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки`)
};

const sv_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken`)
};

const tr_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler`)
};

const zh_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`徽章`)
};

const ja_console_nav_badges = /** @type {(inputs: Console_Nav_BadgesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジ`)
};

/**
* | output |
* | --- |
* | "Badges" |
*
* @param {Console_Nav_BadgesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_badges = /** @type {((inputs?: Console_Nav_BadgesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_BadgesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_badges(inputs)
	if (locale === "de") return de_console_nav_badges(inputs)
	if (locale === "fr") return fr_console_nav_badges(inputs)
	if (locale === "it") return it_console_nav_badges(inputs)
	if (locale === "nl") return nl_console_nav_badges(inputs)
	if (locale === "pl") return pl_console_nav_badges(inputs)
	if (locale === "pt") return pt_console_nav_badges(inputs)
	if (locale === "ru") return ru_console_nav_badges(inputs)
	if (locale === "sv") return sv_console_nav_badges(inputs)
	if (locale === "tr") return tr_console_nav_badges(inputs)
	if (locale === "zh") return zh_console_nav_badges(inputs)
	if (locale === "ja") return ja_console_nav_badges(inputs)
	return en_console_nav_badges(inputs)
});
