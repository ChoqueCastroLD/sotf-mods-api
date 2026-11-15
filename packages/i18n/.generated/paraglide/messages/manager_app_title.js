/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_App_TitleInputs */

const en_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`With SotF Mods Manager`)
};

const es_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con SotF Mods Manager`)
};

const de_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit SotF Mods Manager`)
};

const fr_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avec SotF Mods Manager`)
};

const it_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Con SotF Mods Manager`)
};

const nl_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Met SotF Mods Manager`)
};

const pl_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Z SotF Mods Manager`)
};

const pt_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Com o SotF Mods Manager`)
};

const ru_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С SotF Mods Manager`)
};

const sv_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Med SotF Mods Manager`)
};

const tr_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager ile`)
};

const zh_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用 SotF Mods Manager`)
};

const ja_manager_app_title = /** @type {(inputs: Manager_App_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager の場合`)
};

/**
* | output |
* | --- |
* | "With SotF Mods Manager" |
*
* @param {Manager_App_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_app_title = /** @type {((inputs?: Manager_App_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_App_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_app_title(inputs)
	if (locale === "de") return de_manager_app_title(inputs)
	if (locale === "fr") return fr_manager_app_title(inputs)
	if (locale === "it") return it_manager_app_title(inputs)
	if (locale === "nl") return nl_manager_app_title(inputs)
	if (locale === "pl") return pl_manager_app_title(inputs)
	if (locale === "pt") return pt_manager_app_title(inputs)
	if (locale === "ru") return ru_manager_app_title(inputs)
	if (locale === "sv") return sv_manager_app_title(inputs)
	if (locale === "tr") return tr_manager_app_title(inputs)
	if (locale === "zh") return zh_manager_app_title(inputs)
	if (locale === "ja") return ja_manager_app_title(inputs)
	return en_manager_app_title(inputs)
});
