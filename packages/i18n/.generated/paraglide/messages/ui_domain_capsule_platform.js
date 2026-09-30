/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Capsule_PlatformInputs */

const en_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const es_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const de_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const fr_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plateforme`)
};

const it_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Piattaforma`)
};

const nl_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const pl_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platforma`)
};

const pt_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plataforma`)
};

const ru_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Платформа`)
};

const sv_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plattform`)
};

const tr_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platform`)
};

const zh_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`平台`)
};

const ja_ui_domain_capsule_platform = /** @type {(inputs: Ui_Domain_Capsule_PlatformInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プラットフォーム`)
};

/**
* | output |
* | --- |
* | "Platform" |
*
* @param {Ui_Domain_Capsule_PlatformInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_capsule_platform = /** @type {((inputs?: Ui_Domain_Capsule_PlatformInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Capsule_PlatformInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_capsule_platform(inputs)
	if (locale === "de") return de_ui_domain_capsule_platform(inputs)
	if (locale === "fr") return fr_ui_domain_capsule_platform(inputs)
	if (locale === "it") return it_ui_domain_capsule_platform(inputs)
	if (locale === "nl") return nl_ui_domain_capsule_platform(inputs)
	if (locale === "pl") return pl_ui_domain_capsule_platform(inputs)
	if (locale === "pt") return pt_ui_domain_capsule_platform(inputs)
	if (locale === "ru") return ru_ui_domain_capsule_platform(inputs)
	if (locale === "sv") return sv_ui_domain_capsule_platform(inputs)
	if (locale === "tr") return tr_ui_domain_capsule_platform(inputs)
	if (locale === "zh") return zh_ui_domain_capsule_platform(inputs)
	if (locale === "ja") return ja_ui_domain_capsule_platform(inputs)
	return en_ui_domain_capsule_platform(inputs)
});
