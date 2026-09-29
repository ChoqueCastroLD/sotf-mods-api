/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_PrivacyInputs */

const en_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy`)
};

const es_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacidad`)
};

const de_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datenschutz`)
};

const fr_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confidentialité`)
};

const it_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy`)
};

const nl_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacy`)
};

const pl_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prywatność`)
};

const pt_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Privacidade`)
};

const ru_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Конфиденциальность`)
};

const sv_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Integritet`)
};

const tr_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizlilik`)
};

const zh_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐私`)
};

const ja_common_footer_privacy = /** @type {(inputs: Common_Footer_PrivacyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プライバシー`)
};

/**
* | output |
* | --- |
* | "Privacy" |
*
* @param {Common_Footer_PrivacyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_privacy = /** @type {((inputs?: Common_Footer_PrivacyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_PrivacyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_privacy(inputs)
	if (locale === "de") return de_common_footer_privacy(inputs)
	if (locale === "fr") return fr_common_footer_privacy(inputs)
	if (locale === "it") return it_common_footer_privacy(inputs)
	if (locale === "nl") return nl_common_footer_privacy(inputs)
	if (locale === "pl") return pl_common_footer_privacy(inputs)
	if (locale === "pt") return pt_common_footer_privacy(inputs)
	if (locale === "ru") return ru_common_footer_privacy(inputs)
	if (locale === "sv") return sv_common_footer_privacy(inputs)
	if (locale === "tr") return tr_common_footer_privacy(inputs)
	if (locale === "zh") return zh_common_footer_privacy(inputs)
	if (locale === "ja") return ja_common_footer_privacy(inputs)
	return en_common_footer_privacy(inputs)
});
