/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Install_Full_GuideInputs */

const en_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Full install guide`)
};

const es_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guía de instalación completa`)
};

const de_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vollständige Installationsanleitung`)
};

const fr_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guide d’installation complet`)
};

const it_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guida all’installazione completa`)
};

const nl_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volledige installatiegids`)
};

const pl_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pełny poradnik instalacji`)
};

const pt_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guia de instalação completo`)
};

const ru_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полное руководство по установке`)
};

const sv_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fullständig installationsguide`)
};

const tr_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tam kurulum rehberi`)
};

const zh_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完整安装指南`)
};

const ja_mod_install_full_guide = /** @type {(inputs: Mod_Install_Full_GuideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`導入ガイドを見る`)
};

/**
* | output |
* | --- |
* | "Full install guide" |
*
* @param {Mod_Install_Full_GuideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_full_guide = /** @type {((inputs?: Mod_Install_Full_GuideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Full_GuideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_full_guide(inputs)
	if (locale === "de") return de_mod_install_full_guide(inputs)
	if (locale === "fr") return fr_mod_install_full_guide(inputs)
	if (locale === "it") return it_mod_install_full_guide(inputs)
	if (locale === "nl") return nl_mod_install_full_guide(inputs)
	if (locale === "pl") return pl_mod_install_full_guide(inputs)
	if (locale === "pt") return pt_mod_install_full_guide(inputs)
	if (locale === "ru") return ru_mod_install_full_guide(inputs)
	if (locale === "sv") return sv_mod_install_full_guide(inputs)
	if (locale === "tr") return tr_mod_install_full_guide(inputs)
	if (locale === "zh") return zh_mod_install_full_guide(inputs)
	if (locale === "ja") return ja_mod_install_full_guide(inputs)
	return en_mod_install_full_guide(inputs)
});
