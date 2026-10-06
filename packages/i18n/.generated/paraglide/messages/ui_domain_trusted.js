/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_TrustedInputs */

const en_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trusted`)
};

const es_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confianza`)
};

const de_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrauenswürdig`)
};

const fr_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confiance`)
};

const it_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affidabile`)
};

const nl_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwd`)
};

const pl_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaufany`)
};

const pt_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confiável`)
};

const ru_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный`)
};

const sv_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrodd`)
};

const tr_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenilir`)
};

const zh_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信任`)
};

const ja_ui_domain_trusted = /** @type {(inputs: Ui_Domain_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼済み`)
};

/**
* | output |
* | --- |
* | "Trusted" |
*
* @param {Ui_Domain_TrustedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_trusted = /** @type {((inputs?: Ui_Domain_TrustedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_TrustedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_trusted(inputs)
	if (locale === "de") return de_ui_domain_trusted(inputs)
	if (locale === "fr") return fr_ui_domain_trusted(inputs)
	if (locale === "it") return it_ui_domain_trusted(inputs)
	if (locale === "nl") return nl_ui_domain_trusted(inputs)
	if (locale === "pl") return pl_ui_domain_trusted(inputs)
	if (locale === "pt") return pt_ui_domain_trusted(inputs)
	if (locale === "ru") return ru_ui_domain_trusted(inputs)
	if (locale === "sv") return sv_ui_domain_trusted(inputs)
	if (locale === "tr") return tr_ui_domain_trusted(inputs)
	if (locale === "zh") return zh_ui_domain_trusted(inputs)
	if (locale === "ja") return ja_ui_domain_trusted(inputs)
	return en_ui_domain_trusted(inputs)
});
