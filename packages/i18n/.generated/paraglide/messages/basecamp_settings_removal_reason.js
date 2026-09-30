/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Removal_ReasonInputs */

const en_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason`)
};

const es_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const de_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grund`)
};

const fr_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif`)
};

const it_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const nl_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reden`)
};

const pl_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powód`)
};

const pt_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo`)
};

const ru_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причина`)
};

const sv_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orsak`)
};

const tr_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neden`)
};

const zh_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因`)
};

const ja_basecamp_settings_removal_reason = /** @type {(inputs: Basecamp_Settings_Removal_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由`)
};

/**
* | output |
* | --- |
* | "Reason" |
*
* @param {Basecamp_Settings_Removal_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_removal_reason = /** @type {((inputs?: Basecamp_Settings_Removal_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Removal_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_removal_reason(inputs)
	if (locale === "de") return de_basecamp_settings_removal_reason(inputs)
	if (locale === "fr") return fr_basecamp_settings_removal_reason(inputs)
	if (locale === "it") return it_basecamp_settings_removal_reason(inputs)
	if (locale === "nl") return nl_basecamp_settings_removal_reason(inputs)
	if (locale === "pl") return pl_basecamp_settings_removal_reason(inputs)
	if (locale === "pt") return pt_basecamp_settings_removal_reason(inputs)
	if (locale === "ru") return ru_basecamp_settings_removal_reason(inputs)
	if (locale === "sv") return sv_basecamp_settings_removal_reason(inputs)
	if (locale === "tr") return tr_basecamp_settings_removal_reason(inputs)
	if (locale === "zh") return zh_basecamp_settings_removal_reason(inputs)
	if (locale === "ja") return ja_basecamp_settings_removal_reason(inputs)
	return en_basecamp_settings_removal_reason(inputs)
});
