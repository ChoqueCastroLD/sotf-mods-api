/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_Go_ModsInputs */

const en_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_shell_cmdk_go_mods = /** @type {(inputs: Shell_Cmdk_Go_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Shell_Cmdk_Go_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_go_mods = /** @type {((inputs?: Shell_Cmdk_Go_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Go_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_go_mods(inputs)
	if (locale === "de") return de_shell_cmdk_go_mods(inputs)
	if (locale === "fr") return fr_shell_cmdk_go_mods(inputs)
	if (locale === "it") return it_shell_cmdk_go_mods(inputs)
	if (locale === "nl") return nl_shell_cmdk_go_mods(inputs)
	if (locale === "pl") return pl_shell_cmdk_go_mods(inputs)
	if (locale === "pt") return pt_shell_cmdk_go_mods(inputs)
	if (locale === "ru") return ru_shell_cmdk_go_mods(inputs)
	if (locale === "sv") return sv_shell_cmdk_go_mods(inputs)
	if (locale === "tr") return tr_shell_cmdk_go_mods(inputs)
	if (locale === "zh") return zh_shell_cmdk_go_mods(inputs)
	if (locale === "ja") return ja_shell_cmdk_go_mods(inputs)
	return en_shell_cmdk_go_mods(inputs)
});
