/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_ReasonInputs */

const en_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note from the rangers`)
};

const es_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota de los guardabosques`)
};

const de_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinweis der Ranger`)
};

const fr_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note des rangers`)
};

const it_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota dei ranger`)
};

const nl_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opmerking van de rangers`)
};

const pl_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uwaga od strażników`)
};

const pt_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota dos guardas`)
};

const ru_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметка рейнджеров`)
};

const sv_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckning från rangers`)
};

const tr_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucuların notu`)
};

const zh_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员备注`)
};

const ja_basecamp_settings_reason = /** @type {(inputs: Basecamp_Settings_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーからのメモ`)
};

/**
* | output |
* | --- |
* | "Note from the rangers" |
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
