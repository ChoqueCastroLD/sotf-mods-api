/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reason: NonNullable<unknown> }} Basecamp_Mods_ReasonInputs */

const en_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reason: ${i?.reason}`)
};

const es_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motivo: ${i?.reason}`)
};

const de_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grund: ${i?.reason}`)
};

const fr_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motif : ${i?.reason}`)
};

const it_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motivo: ${i?.reason}`)
};

const nl_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reden: ${i?.reason}`)
};

const pl_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Powód: ${i?.reason}`)
};

const pt_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Motivo: ${i?.reason}`)
};

const ru_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Причина: ${i?.reason}`)
};

const sv_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Orsak: ${i?.reason}`)
};

const tr_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neden: ${i?.reason}`)
};

const zh_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`原因：${i?.reason}`)
};

const ja_basecamp_mods_reason = /** @type {(inputs: Basecamp_Mods_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`理由：${i?.reason}`)
};

/**
* | output |
* | --- |
* | "Reason: {reason}" |
*
* @param {Basecamp_Mods_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_reason = /** @type {((inputs: Basecamp_Mods_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_reason(inputs)
	if (locale === "de") return de_basecamp_mods_reason(inputs)
	if (locale === "fr") return fr_basecamp_mods_reason(inputs)
	if (locale === "it") return it_basecamp_mods_reason(inputs)
	if (locale === "nl") return nl_basecamp_mods_reason(inputs)
	if (locale === "pl") return pl_basecamp_mods_reason(inputs)
	if (locale === "pt") return pt_basecamp_mods_reason(inputs)
	if (locale === "ru") return ru_basecamp_mods_reason(inputs)
	if (locale === "sv") return sv_basecamp_mods_reason(inputs)
	if (locale === "tr") return tr_basecamp_mods_reason(inputs)
	if (locale === "zh") return zh_basecamp_mods_reason(inputs)
	if (locale === "ja") return ja_basecamp_mods_reason(inputs)
	return en_basecamp_mods_reason(inputs)
});
