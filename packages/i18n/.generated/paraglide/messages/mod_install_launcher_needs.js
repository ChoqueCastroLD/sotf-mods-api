/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Launcher_NeedsInputs */

const en_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Needs SotF Mods Manager`)
};

const es_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requiere SotF Mods Manager`)
};

const de_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Benötigt SotF Mods Manager`)
};

const fr_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nécessite SotF Mods Manager`)
};

const it_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richiede SotF Mods Manager`)
};

const nl_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vereist SotF Mods Manager`)
};

const pl_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymaga SotF Mods Manager`)
};

const pt_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requer o SotF Mods Manager`)
};

const ru_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужен SotF Mods Manager`)
};

const sv_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kräver SotF Mods Manager`)
};

const tr_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager gerekir`)
};

const zh_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要 SotF Mods Manager`)
};

const ja_mod_install_launcher_needs = /** @type {(inputs: Mod_Install_Launcher_NeedsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager が必要です`)
};

/**
* | output |
* | --- |
* | "Needs SotF Mods Manager" |
*
* @param {Mod_Install_Launcher_NeedsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_launcher_needs = /** @type {((inputs?: Mod_Install_Launcher_NeedsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Launcher_NeedsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_launcher_needs(inputs)
	if (locale === "de") return de_mod_install_launcher_needs(inputs)
	if (locale === "fr") return fr_mod_install_launcher_needs(inputs)
	if (locale === "it") return it_mod_install_launcher_needs(inputs)
	if (locale === "nl") return nl_mod_install_launcher_needs(inputs)
	if (locale === "pl") return pl_mod_install_launcher_needs(inputs)
	if (locale === "pt") return pt_mod_install_launcher_needs(inputs)
	if (locale === "ru") return ru_mod_install_launcher_needs(inputs)
	if (locale === "sv") return sv_mod_install_launcher_needs(inputs)
	if (locale === "tr") return tr_mod_install_launcher_needs(inputs)
	if (locale === "zh") return zh_mod_install_launcher_needs(inputs)
	if (locale === "ja") return ja_mod_install_launcher_needs(inputs)
	return en_mod_install_launcher_needs(inputs)
});
