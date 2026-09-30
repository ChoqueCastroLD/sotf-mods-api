/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Not_Found_InstallInputs */

const en_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to install mods`)
};

const es_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo instalar mods`)
};

const de_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So installierst du Mods`)
};

const fr_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment installer des mods`)
};

const it_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come installare le mod`)
};

const nl_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo installeer je mods`)
};

const pl_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak instalować mody`)
};

const pt_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como instalar mods`)
};

const ru_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как установить моды`)
};

const sv_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så installerar du moddar`)
};

const tr_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod nasıl kurulur`)
};

const zh_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如何安装模组`)
};

const ja_errors_not_found_install = /** @type {(inputs: Errors_Not_Found_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD の導入方法`)
};

/**
* | output |
* | --- |
* | "How to install mods" |
*
* @param {Errors_Not_Found_InstallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_not_found_install = /** @type {((inputs?: Errors_Not_Found_InstallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Not_Found_InstallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_not_found_install(inputs)
	if (locale === "de") return de_errors_not_found_install(inputs)
	if (locale === "fr") return fr_errors_not_found_install(inputs)
	if (locale === "it") return it_errors_not_found_install(inputs)
	if (locale === "nl") return nl_errors_not_found_install(inputs)
	if (locale === "pl") return pl_errors_not_found_install(inputs)
	if (locale === "pt") return pt_errors_not_found_install(inputs)
	if (locale === "ru") return ru_errors_not_found_install(inputs)
	if (locale === "sv") return sv_errors_not_found_install(inputs)
	if (locale === "tr") return tr_errors_not_found_install(inputs)
	if (locale === "zh") return zh_errors_not_found_install(inputs)
	if (locale === "ja") return ja_errors_not_found_install(inputs)
	return en_errors_not_found_install(inputs)
});
