/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Dedicated_YesInputs */

const en_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supported`)
};

const es_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatible`)
};

const de_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterstützt`)
};

const fr_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pris en charge`)
};

const it_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supportato`)
};

const nl_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ondersteund`)
};

const pl_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obsługiwany`)
};

const pt_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatível`)
};

const ru_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поддерживается`)
};

const sv_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stöds`)
};

const tr_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destekleniyor`)
};

const zh_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持`)
};

const ja_ui_domain_dedicated_yes = /** @type {(inputs: Ui_Domain_Dedicated_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応`)
};

/**
* | output |
* | --- |
* | "Supported" |
*
* @param {Ui_Domain_Dedicated_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dedicated_yes = /** @type {((inputs?: Ui_Domain_Dedicated_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dedicated_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dedicated_yes(inputs)
	if (locale === "de") return de_ui_domain_dedicated_yes(inputs)
	if (locale === "fr") return fr_ui_domain_dedicated_yes(inputs)
	if (locale === "it") return it_ui_domain_dedicated_yes(inputs)
	if (locale === "nl") return nl_ui_domain_dedicated_yes(inputs)
	if (locale === "pl") return pl_ui_domain_dedicated_yes(inputs)
	if (locale === "pt") return pt_ui_domain_dedicated_yes(inputs)
	if (locale === "ru") return ru_ui_domain_dedicated_yes(inputs)
	if (locale === "sv") return sv_ui_domain_dedicated_yes(inputs)
	if (locale === "tr") return tr_ui_domain_dedicated_yes(inputs)
	if (locale === "zh") return zh_ui_domain_dedicated_yes(inputs)
	if (locale === "ja") return ja_ui_domain_dedicated_yes(inputs)
	return en_ui_domain_dedicated_yes(inputs)
});
