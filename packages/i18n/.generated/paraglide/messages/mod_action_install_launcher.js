/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Action_Install_LauncherInputs */

const en_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install with launcher`)
};

const es_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar con el launcher`)
};

const de_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit Launcher installieren`)
};

const fr_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer avec le launcher`)
};

const it_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa con il launcher`)
};

const nl_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeren met launcher`)
};

const pl_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstaluj launcherem`)
};

const pt_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalar com o launcher`)
};

const ru_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установить через лаунчер`)
};

const sv_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera med launchern`)
};

const tr_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlatıcıyla kur`)
};

const zh_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用启动器安装`)
};

const ja_mod_action_install_launcher = /** @type {(inputs: Mod_Action_Install_LauncherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ランチャーでインストール`)
};

/**
* | output |
* | --- |
* | "Install with launcher" |
*
* @param {Mod_Action_Install_LauncherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_action_install_launcher = /** @type {((inputs?: Mod_Action_Install_LauncherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Action_Install_LauncherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_action_install_launcher(inputs)
	if (locale === "de") return de_mod_action_install_launcher(inputs)
	if (locale === "fr") return fr_mod_action_install_launcher(inputs)
	if (locale === "it") return it_mod_action_install_launcher(inputs)
	if (locale === "nl") return nl_mod_action_install_launcher(inputs)
	if (locale === "pl") return pl_mod_action_install_launcher(inputs)
	if (locale === "pt") return pt_mod_action_install_launcher(inputs)
	if (locale === "ru") return ru_mod_action_install_launcher(inputs)
	if (locale === "sv") return sv_mod_action_install_launcher(inputs)
	if (locale === "tr") return tr_mod_action_install_launcher(inputs)
	if (locale === "zh") return zh_mod_action_install_launcher(inputs)
	if (locale === "ja") return ja_mod_action_install_launcher(inputs)
	return en_mod_action_install_launcher(inputs)
});
