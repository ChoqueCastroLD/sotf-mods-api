/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Compat_UntestedInputs */

const en_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not verified`)
};

const es_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin verificar`)
};

const de_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht bestätigt`)
};

const fr_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non vérifié`)
};

const it_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non verificato`)
};

const nl_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet bevestigd`)
};

const pl_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezweryfikowany`)
};

const pt_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não verificado`)
};

const ru_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не проверено`)
};

const sv_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte verifierad`)
};

const tr_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmadı`)
};

const zh_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未验证`)
};

const ja_ui_domain_compat_untested = /** @type {(inputs: Ui_Domain_Compat_UntestedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未確認`)
};

/**
* | output |
* | --- |
* | "Not verified" |
*
* @param {Ui_Domain_Compat_UntestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_compat_untested = /** @type {((inputs?: Ui_Domain_Compat_UntestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Compat_UntestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_compat_untested(inputs)
	if (locale === "de") return de_ui_domain_compat_untested(inputs)
	if (locale === "fr") return fr_ui_domain_compat_untested(inputs)
	if (locale === "it") return it_ui_domain_compat_untested(inputs)
	if (locale === "nl") return nl_ui_domain_compat_untested(inputs)
	if (locale === "pl") return pl_ui_domain_compat_untested(inputs)
	if (locale === "pt") return pt_ui_domain_compat_untested(inputs)
	if (locale === "ru") return ru_ui_domain_compat_untested(inputs)
	if (locale === "sv") return sv_ui_domain_compat_untested(inputs)
	if (locale === "tr") return tr_ui_domain_compat_untested(inputs)
	if (locale === "zh") return zh_ui_domain_compat_untested(inputs)
	if (locale === "ja") return ja_ui_domain_compat_untested(inputs)
	return en_ui_domain_compat_untested(inputs)
});
