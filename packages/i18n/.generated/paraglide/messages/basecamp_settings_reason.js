/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_ReasonInputs */

const en_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note from moderation`)
};

const es_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota de moderación`)
};

const de_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinweis der Moderation`)
};

const fr_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note de la modération`)
};

const it_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota della moderazione`)
};

const nl_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opmerking van moderatie`)
};

const pl_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uwaga od moderacji`)
};

const pt_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota da moderação`)
};

const ru_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметка модерации`)
};

const sv_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckning från modereringen`)
};

const tr_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon notu`)
};

const zh_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核备注`)
};

const ja_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーションからのメモ`)
};

/**
* | output |
* | --- |
* | "Note from moderation" |
*
* @param {Basecamp_Settings_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_reason = /** @type {((inputs?: Basecamp_Settings_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_reason(inputs)
	if (locale === "de") return de_basecamp_settings_reason(inputs)
	if (locale === "fr") return fr_basecamp_settings_reason(inputs)
	if (locale === "it") return it_basecamp_settings_reason(inputs)
	if (locale === "nl") return nl_basecamp_settings_reason(inputs)
	if (locale === "pl") return pl_basecamp_settings_reason(inputs)
	if (locale === "pt") return pt_basecamp_settings_reason(inputs)
	if (locale === "ru") return ru_basecamp_settings_reason(inputs)
	if (locale === "sv") return sv_basecamp_settings_reason(inputs)
	if (locale === "tr") return tr_basecamp_settings_reason(inputs)
	if (locale === "zh") return zh_basecamp_settings_reason(inputs)
	if (locale === "ja") return ja_basecamp_settings_reason(inputs)
	return en_basecamp_settings_reason(inputs)
});
