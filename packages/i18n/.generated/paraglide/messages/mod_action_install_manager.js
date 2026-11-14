/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Action_Install_ManagerInputs */

const en_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install with SotF Mods Manager`)
};

const es_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar con SotF Mods Manager`)
};

const de_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit SotF Mods Manager installieren`)
};

const fr_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer avec SotF Mods Manager`)
};

const it_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa con SotF Mods Manager`)
};

const nl_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeren met SotF Mods Manager`)
};

const pl_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj przez SotF Mods Manager`)
};

const pt_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar com o SotF Mods Manager`)
};

const ru_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установить через SotF Mods Manager`)
};

const sv_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera med SotF Mods Manager`)
};

const tr_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager ile kur`)
};

const zh_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用 SotF Mods Manager 安装`)
};

const ja_mod_action_install_manager = /** @type {(inputs: Mod_Action_Install_ManagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager でインストール`)
};

/**
* | output |
* | --- |
* | "Install with SotF Mods Manager" |
*
* @param {Mod_Action_Install_ManagerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_action_install_manager = /** @type {((inputs?: Mod_Action_Install_ManagerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Action_Install_ManagerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_action_install_manager(inputs)
	if (locale === "de") return de_mod_action_install_manager(inputs)
	if (locale === "fr") return fr_mod_action_install_manager(inputs)
	if (locale === "it") return it_mod_action_install_manager(inputs)
	if (locale === "nl") return nl_mod_action_install_manager(inputs)
	if (locale === "pl") return pl_mod_action_install_manager(inputs)
	if (locale === "pt") return pt_mod_action_install_manager(inputs)
	if (locale === "ru") return ru_mod_action_install_manager(inputs)
	if (locale === "sv") return sv_mod_action_install_manager(inputs)
	if (locale === "tr") return tr_mod_action_install_manager(inputs)
	if (locale === "zh") return zh_mod_action_install_manager(inputs)
	if (locale === "ja") return ja_mod_action_install_manager(inputs)
	return en_mod_action_install_manager(inputs)
});
