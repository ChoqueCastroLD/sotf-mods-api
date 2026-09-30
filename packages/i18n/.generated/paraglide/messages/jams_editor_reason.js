/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_ReasonInputs */

const en_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason (internal)`)
};

const es_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo (interno)`)
};

const de_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grund (intern)`)
};

const fr_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motif (interne)`)
};

const it_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo (interno)`)
};

const nl_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reden (intern)`)
};

const pl_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powód (wewnętrzny)`)
};

const pt_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Motivo (interno)`)
};

const ru_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Причина (внутренняя)`)
};

const sv_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orsak (intern)`)
};

const tr_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerekçe (dahili)`)
};

const zh_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原因（内部）`)
};

const ja_jams_editor_reason = /** @type {(inputs: Jams_Editor_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由（内部用）`)
};

/**
* | output |
* | --- |
* | "Reason (internal)" |
*
* @param {Jams_Editor_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_reason = /** @type {((inputs?: Jams_Editor_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_reason(inputs)
	if (locale === "de") return de_jams_editor_reason(inputs)
	if (locale === "fr") return fr_jams_editor_reason(inputs)
	if (locale === "it") return it_jams_editor_reason(inputs)
	if (locale === "nl") return nl_jams_editor_reason(inputs)
	if (locale === "pl") return pl_jams_editor_reason(inputs)
	if (locale === "pt") return pt_jams_editor_reason(inputs)
	if (locale === "ru") return ru_jams_editor_reason(inputs)
	if (locale === "sv") return sv_jams_editor_reason(inputs)
	if (locale === "tr") return tr_jams_editor_reason(inputs)
	if (locale === "zh") return zh_jams_editor_reason(inputs)
	if (locale === "ja") return ja_jams_editor_reason(inputs)
	return en_jams_editor_reason(inputs)
});
