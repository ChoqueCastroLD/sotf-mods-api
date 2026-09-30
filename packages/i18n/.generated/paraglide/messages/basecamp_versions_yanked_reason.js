/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reason: NonNullable<unknown> }} Basecamp_Versions_Yanked_ReasonInputs */

const en_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yanked: ${i?.reason}`)
};

const es_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirada: ${i?.reason}`)
};

const de_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zurückgezogen: ${i?.reason}`)
};

const fr_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirée : ${i?.reason}`)
};

const it_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ritirata: ${i?.reason}`)
};

const nl_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingetrokken: ${i?.reason}`)
};

const pl_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wycofana: ${i?.reason}`)
};

const pt_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirada: ${i?.reason}`)
};

const ru_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отозвана: ${i?.reason}`)
};

const sv_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tillbakadragen: ${i?.reason}`)
};

const tr_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geri çekildi: ${i?.reason}`)
};

const zh_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已撤回：${i?.reason}`)
};

const ja_basecamp_versions_yanked_reason = /** @type {(inputs: Basecamp_Versions_Yanked_ReasonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`取り下げ：${i?.reason}`)
};

/**
* | output |
* | --- |
* | "Yanked: {reason}" |
*
* @param {Basecamp_Versions_Yanked_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_yanked_reason = /** @type {((inputs: Basecamp_Versions_Yanked_ReasonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yanked_ReasonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_yanked_reason(inputs)
	if (locale === "de") return de_basecamp_versions_yanked_reason(inputs)
	if (locale === "fr") return fr_basecamp_versions_yanked_reason(inputs)
	if (locale === "it") return it_basecamp_versions_yanked_reason(inputs)
	if (locale === "nl") return nl_basecamp_versions_yanked_reason(inputs)
	if (locale === "pl") return pl_basecamp_versions_yanked_reason(inputs)
	if (locale === "pt") return pt_basecamp_versions_yanked_reason(inputs)
	if (locale === "ru") return ru_basecamp_versions_yanked_reason(inputs)
	if (locale === "sv") return sv_basecamp_versions_yanked_reason(inputs)
	if (locale === "tr") return tr_basecamp_versions_yanked_reason(inputs)
	if (locale === "zh") return zh_basecamp_versions_yanked_reason(inputs)
	if (locale === "ja") return ja_basecamp_versions_yanked_reason(inputs)
	return en_basecamp_versions_yanked_reason(inputs)
});
