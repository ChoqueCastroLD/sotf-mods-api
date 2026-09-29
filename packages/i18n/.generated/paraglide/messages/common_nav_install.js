/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_InstallInputs */

const en_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install`)
};

const es_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar`)
};

const de_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installieren`)
};

const fr_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer`)
};

const it_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa`)
};

const nl_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeren`)
};

const pl_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalacja`)
};

const pt_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar`)
};

const ru_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установка`)
};

const sv_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera`)
};

const tr_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulum`)
};

const zh_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装`)
};

const ja_common_nav_install = /** @type {(inputs: Common_Nav_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストール`)
};

/**
* | output |
* | --- |
* | "Install" |
*
* @param {Common_Nav_InstallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_install = /** @type {((inputs?: Common_Nav_InstallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_InstallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_install(inputs)
	if (locale === "de") return de_common_nav_install(inputs)
	if (locale === "fr") return fr_common_nav_install(inputs)
	if (locale === "it") return it_common_nav_install(inputs)
	if (locale === "nl") return nl_common_nav_install(inputs)
	if (locale === "pl") return pl_common_nav_install(inputs)
	if (locale === "pt") return pt_common_nav_install(inputs)
	if (locale === "ru") return ru_common_nav_install(inputs)
	if (locale === "sv") return sv_common_nav_install(inputs)
	if (locale === "tr") return tr_common_nav_install(inputs)
	if (locale === "zh") return zh_common_nav_install(inputs)
	if (locale === "ja") return ja_common_nav_install(inputs)
	return en_common_nav_install(inputs)
});
