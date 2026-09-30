/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Step_Loader_LinkInputs */

const en_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to install RedLoader`)
};

const es_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo instalar RedLoader`)
};

const de_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So installierst du RedLoader`)
};

const fr_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment installer RedLoader`)
};

const it_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come installare RedLoader`)
};

const nl_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo installeer je RedLoader`)
};

const pl_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak zainstalować RedLoader`)
};

const pt_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como instalar o RedLoader`)
};

const ru_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как установить RedLoader`)
};

const sv_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så installerar du RedLoader`)
};

const tr_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader nasıl kurulur`)
};

const zh_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如何安装 RedLoader`)
};

const ja_mod_install_step_loader_link = /** @type {(inputs: Mod_Install_Step_Loader_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader の導入方法`)
};

/**
* | output |
* | --- |
* | "How to install RedLoader" |
*
* @param {Mod_Install_Step_Loader_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_loader_link = /** @type {((inputs?: Mod_Install_Step_Loader_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Loader_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_loader_link(inputs)
	if (locale === "de") return de_mod_install_step_loader_link(inputs)
	if (locale === "fr") return fr_mod_install_step_loader_link(inputs)
	if (locale === "it") return it_mod_install_step_loader_link(inputs)
	if (locale === "nl") return nl_mod_install_step_loader_link(inputs)
	if (locale === "pl") return pl_mod_install_step_loader_link(inputs)
	if (locale === "pt") return pt_mod_install_step_loader_link(inputs)
	if (locale === "ru") return ru_mod_install_step_loader_link(inputs)
	if (locale === "sv") return sv_mod_install_step_loader_link(inputs)
	if (locale === "tr") return tr_mod_install_step_loader_link(inputs)
	if (locale === "zh") return zh_mod_install_step_loader_link(inputs)
	if (locale === "ja") return ja_mod_install_step_loader_link(inputs)
	return en_mod_install_step_loader_link(inputs)
});
