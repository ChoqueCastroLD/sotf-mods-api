/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_TitleInputs */

const en_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to install this mod`)
};

const es_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo instalar este mod`)
};

const de_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So installierst du diesen Mod`)
};

const fr_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment installer ce mod`)
};

const it_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come installare questa mod`)
};

const nl_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo installeer je deze mod`)
};

const pl_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak zainstalować ten mod`)
};

const pt_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como instalar este mod`)
};

const ru_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как установить этот мод`)
};

const sv_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så installerar du moden`)
};

const tr_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod nasıl kurulur`)
};

const zh_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如何安装此模组`)
};

const ja_mod_install_title = /** @type {(inputs: Mod_Install_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD の導入方法`)
};

/**
* | output |
* | --- |
* | "How to install this mod" |
*
* @param {Mod_Install_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_title = /** @type {((inputs?: Mod_Install_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_title(inputs)
	if (locale === "de") return de_mod_install_title(inputs)
	if (locale === "fr") return fr_mod_install_title(inputs)
	if (locale === "it") return it_mod_install_title(inputs)
	if (locale === "nl") return nl_mod_install_title(inputs)
	if (locale === "pl") return pl_mod_install_title(inputs)
	if (locale === "pt") return pt_mod_install_title(inputs)
	if (locale === "ru") return ru_mod_install_title(inputs)
	if (locale === "sv") return sv_mod_install_title(inputs)
	if (locale === "tr") return tr_mod_install_title(inputs)
	if (locale === "zh") return zh_mod_install_title(inputs)
	if (locale === "ja") return ja_mod_install_title(inputs)
	return en_mod_install_title(inputs)
});
