/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_DraftsInputs */

const en_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drafts`)
};

const es_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borradores`)
};

const de_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwürfe`)
};

const fr_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brouillons`)
};

const it_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozze`)
};

const nl_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concepten`)
};

const pl_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szkice`)
};

const pt_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rascunhos`)
};

const ru_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновики`)
};

const sv_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utkast`)
};

const tr_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslaklar`)
};

const zh_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿`)
};

const ja_console_nav_drafts = /** @type {(inputs: Console_Nav_DraftsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書き`)
};

/**
* | output |
* | --- |
* | "Drafts" |
*
* @param {Console_Nav_DraftsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_drafts = /** @type {((inputs?: Console_Nav_DraftsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_DraftsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_drafts(inputs)
	if (locale === "de") return de_console_nav_drafts(inputs)
	if (locale === "fr") return fr_console_nav_drafts(inputs)
	if (locale === "it") return it_console_nav_drafts(inputs)
	if (locale === "nl") return nl_console_nav_drafts(inputs)
	if (locale === "pl") return pl_console_nav_drafts(inputs)
	if (locale === "pt") return pt_console_nav_drafts(inputs)
	if (locale === "ru") return ru_console_nav_drafts(inputs)
	if (locale === "sv") return sv_console_nav_drafts(inputs)
	if (locale === "tr") return tr_console_nav_drafts(inputs)
	if (locale === "zh") return zh_console_nav_drafts(inputs)
	if (locale === "ja") return ja_console_nav_drafts(inputs)
	return en_console_nav_drafts(inputs)
});
