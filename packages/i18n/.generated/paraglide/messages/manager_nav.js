/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_NavInputs */

const en_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const es_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const de_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const fr_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const it_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const nl_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const pl_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const pt_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const ru_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const sv_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const tr_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const zh_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

const ja_manager_nav = /** @type {(inputs: Manager_NavInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ModManager`)
};

/**
* | output |
* | --- |
* | "ModManager" |
*
* @param {Manager_NavInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_nav = /** @type {((inputs?: Manager_NavInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_NavInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_nav(inputs)
	if (locale === "de") return de_manager_nav(inputs)
	if (locale === "fr") return fr_manager_nav(inputs)
	if (locale === "it") return it_manager_nav(inputs)
	if (locale === "nl") return nl_manager_nav(inputs)
	if (locale === "pl") return pl_manager_nav(inputs)
	if (locale === "pt") return pt_manager_nav(inputs)
	if (locale === "ru") return ru_manager_nav(inputs)
	if (locale === "sv") return sv_manager_nav(inputs)
	if (locale === "tr") return tr_manager_nav(inputs)
	if (locale === "zh") return zh_manager_nav(inputs)
	if (locale === "ja") return ja_manager_nav(inputs)
	return en_manager_nav(inputs)
});
