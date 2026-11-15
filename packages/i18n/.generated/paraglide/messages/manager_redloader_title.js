/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Redloader_TitleInputs */

const en_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const es_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const de_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const fr_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const it_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const nl_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const pl_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const pt_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const ru_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const sv_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const tr_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const zh_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const ja_manager_redloader_title = /** @type {(inputs: Manager_Redloader_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

/**
* | output |
* | --- |
* | "RedLoader" |
*
* @param {Manager_Redloader_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_redloader_title = /** @type {((inputs?: Manager_Redloader_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Redloader_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_redloader_title(inputs)
	if (locale === "de") return de_manager_redloader_title(inputs)
	if (locale === "fr") return fr_manager_redloader_title(inputs)
	if (locale === "it") return it_manager_redloader_title(inputs)
	if (locale === "nl") return nl_manager_redloader_title(inputs)
	if (locale === "pl") return pl_manager_redloader_title(inputs)
	if (locale === "pt") return pt_manager_redloader_title(inputs)
	if (locale === "ru") return ru_manager_redloader_title(inputs)
	if (locale === "sv") return sv_manager_redloader_title(inputs)
	if (locale === "tr") return tr_manager_redloader_title(inputs)
	if (locale === "zh") return zh_manager_redloader_title(inputs)
	if (locale === "ja") return ja_manager_redloader_title(inputs)
	return en_manager_redloader_title(inputs)
});
