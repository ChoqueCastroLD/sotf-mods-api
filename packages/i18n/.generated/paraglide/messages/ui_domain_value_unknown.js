/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Value_UnknownInputs */

const en_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown`)
};

const es_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconocido`)
};

const de_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unbekannt`)
};

const fr_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inconnu`)
};

const it_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sconosciuto`)
};

const nl_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onbekend`)
};

const pl_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieznany`)
};

const pt_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desconhecido`)
};

const ru_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неизвестно`)
};

const sv_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okänd`)
};

const tr_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilinmiyor`)
};

const zh_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知`)
};

const ja_ui_domain_value_unknown = /** @type {(inputs: Ui_Domain_Value_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不明`)
};

/**
* | output |
* | --- |
* | "Unknown" |
*
* @param {Ui_Domain_Value_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_value_unknown = /** @type {((inputs?: Ui_Domain_Value_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Value_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_value_unknown(inputs)
	if (locale === "de") return de_ui_domain_value_unknown(inputs)
	if (locale === "fr") return fr_ui_domain_value_unknown(inputs)
	if (locale === "it") return it_ui_domain_value_unknown(inputs)
	if (locale === "nl") return nl_ui_domain_value_unknown(inputs)
	if (locale === "pl") return pl_ui_domain_value_unknown(inputs)
	if (locale === "pt") return pt_ui_domain_value_unknown(inputs)
	if (locale === "ru") return ru_ui_domain_value_unknown(inputs)
	if (locale === "sv") return sv_ui_domain_value_unknown(inputs)
	if (locale === "tr") return tr_ui_domain_value_unknown(inputs)
	if (locale === "zh") return zh_ui_domain_value_unknown(inputs)
	if (locale === "ja") return ja_ui_domain_value_unknown(inputs)
	return en_ui_domain_value_unknown(inputs)
});
