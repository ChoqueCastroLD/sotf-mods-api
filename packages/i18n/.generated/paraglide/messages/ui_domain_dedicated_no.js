/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dedicated_NoInputs */

const en_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not supported`)
};

const es_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No compatible`)
};

const de_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht unterstützt`)
};

const fr_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non pris en charge`)
};

const it_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non supportato`)
};

const nl_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet ondersteund`)
};

const pl_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieobsługiwany`)
};

const pt_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não compatível`)
};

const ru_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не поддерживается`)
};

const sv_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stöds inte`)
};

const tr_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desteklenmiyor`)
};

const zh_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不支持`)
};

const ja_ui_domain_dedicated_no = /** @type {(inputs: Ui_Domain_Dedicated_NoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非対応`)
};

/**
* | output |
* | --- |
* | "Not supported" |
*
* @param {Ui_Domain_Dedicated_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dedicated_no = /** @type {((inputs?: Ui_Domain_Dedicated_NoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dedicated_NoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dedicated_no(inputs)
	if (locale === "de") return de_ui_domain_dedicated_no(inputs)
	if (locale === "fr") return fr_ui_domain_dedicated_no(inputs)
	if (locale === "it") return it_ui_domain_dedicated_no(inputs)
	if (locale === "nl") return nl_ui_domain_dedicated_no(inputs)
	if (locale === "pl") return pl_ui_domain_dedicated_no(inputs)
	if (locale === "pt") return pt_ui_domain_dedicated_no(inputs)
	if (locale === "ru") return ru_ui_domain_dedicated_no(inputs)
	if (locale === "sv") return sv_ui_domain_dedicated_no(inputs)
	if (locale === "tr") return tr_ui_domain_dedicated_no(inputs)
	if (locale === "zh") return zh_ui_domain_dedicated_no(inputs)
	if (locale === "ja") return ja_ui_domain_dedicated_no(inputs)
	return en_ui_domain_dedicated_no(inputs)
});
