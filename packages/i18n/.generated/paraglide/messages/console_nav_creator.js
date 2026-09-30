/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_CreatorInputs */

const en_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const es_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador`)
};

const de_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const fr_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur`)
};

const it_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore`)
};

const nl_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker`)
};

const pl_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca`)
};

const pt_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador`)
};

const ru_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı`)
};

const zh_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_console_nav_creator = /** @type {(inputs: Console_Nav_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター`)
};

/**
* | output |
* | --- |
* | "Creator" |
*
* @param {Console_Nav_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_creator = /** @type {((inputs?: Console_Nav_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_creator(inputs)
	if (locale === "de") return de_console_nav_creator(inputs)
	if (locale === "fr") return fr_console_nav_creator(inputs)
	if (locale === "it") return it_console_nav_creator(inputs)
	if (locale === "nl") return nl_console_nav_creator(inputs)
	if (locale === "pl") return pl_console_nav_creator(inputs)
	if (locale === "pt") return pt_console_nav_creator(inputs)
	if (locale === "ru") return ru_console_nav_creator(inputs)
	if (locale === "sv") return sv_console_nav_creator(inputs)
	if (locale === "tr") return tr_console_nav_creator(inputs)
	if (locale === "zh") return zh_console_nav_creator(inputs)
	if (locale === "ja") return ja_console_nav_creator(inputs)
	return en_console_nav_creator(inputs)
});
