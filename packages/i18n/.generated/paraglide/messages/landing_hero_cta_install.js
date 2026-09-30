/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Hero_Cta_InstallInputs */

const en_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to install (3 min)`)
};

const es_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo instalar (3 min)`)
};

const de_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So installierst du (3 Min.)`)
};

const fr_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment installer (3 min)`)
};

const it_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come installare (3 min)`)
};

const nl_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo installeer je (3 min)`)
};

const pl_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak zainstalować (3 min)`)
};

const pt_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como instalar (3 min)`)
};

const ru_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как установить (3 мин)`)
};

const sv_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så installerar du (3 min)`)
};

const tr_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasıl kurulur (3 dk)`)
};

const zh_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装方法（3 分钟）`)
};

const ja_landing_hero_cta_install = /** @type {(inputs: Landing_Hero_Cta_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インストール方法（3分）`)
};

/**
* | output |
* | --- |
* | "How to install (3 min)" |
*
* @param {Landing_Hero_Cta_InstallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hero_cta_install = /** @type {((inputs?: Landing_Hero_Cta_InstallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hero_Cta_InstallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hero_cta_install(inputs)
	if (locale === "de") return de_landing_hero_cta_install(inputs)
	if (locale === "fr") return fr_landing_hero_cta_install(inputs)
	if (locale === "it") return it_landing_hero_cta_install(inputs)
	if (locale === "nl") return nl_landing_hero_cta_install(inputs)
	if (locale === "pl") return pl_landing_hero_cta_install(inputs)
	if (locale === "pt") return pt_landing_hero_cta_install(inputs)
	if (locale === "ru") return ru_landing_hero_cta_install(inputs)
	if (locale === "sv") return sv_landing_hero_cta_install(inputs)
	if (locale === "tr") return tr_landing_hero_cta_install(inputs)
	if (locale === "zh") return zh_landing_hero_cta_install(inputs)
	if (locale === "ja") return ja_landing_hero_cta_install(inputs)
	return en_landing_hero_cta_install(inputs)
});
