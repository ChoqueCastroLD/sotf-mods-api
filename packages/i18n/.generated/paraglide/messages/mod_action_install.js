/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Action_InstallInputs */

const en_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install`)
};

const es_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar`)
};

const de_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installieren`)
};

const fr_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer`)
};

const it_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa`)
};

const nl_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeren`)
};

const pl_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instaluj`)
};

const pt_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar`)
};

const ru_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установка`)
};

const sv_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera`)
};

const tr_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kur`)
};

const zh_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装`)
};

const ja_mod_action_install = /** @type {(inputs: Mod_Action_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`導入方法`)
};

/**
* | output |
* | --- |
* | "Install" |
*
* @param {Mod_Action_InstallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_action_install = /** @type {((inputs?: Mod_Action_InstallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Action_InstallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_action_install(inputs)
	if (locale === "de") return de_mod_action_install(inputs)
	if (locale === "fr") return fr_mod_action_install(inputs)
	if (locale === "it") return it_mod_action_install(inputs)
	if (locale === "nl") return nl_mod_action_install(inputs)
	if (locale === "pl") return pl_mod_action_install(inputs)
	if (locale === "pt") return pt_mod_action_install(inputs)
	if (locale === "ru") return ru_mod_action_install(inputs)
	if (locale === "sv") return sv_mod_action_install(inputs)
	if (locale === "tr") return tr_mod_action_install(inputs)
	if (locale === "zh") return zh_mod_action_install(inputs)
	if (locale === "ja") return ja_mod_action_install(inputs)
	return en_mod_action_install(inputs)
});
