/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_GuidInputs */

const en_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint GUID`)
};

const es_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID del plano`)
};

const de_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bauplan-GUID`)
};

const fr_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID du plan`)
};

const it_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID del progetto`)
};

const nl_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID van de bouwtekening`)
};

const pl_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID planu`)
};

const pt_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID da planta`)
};

const ru_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID чертежа`)
};

const sv_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritningens GUID`)
};

const tr_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan GUID’i`)
};

const zh_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`蓝图 GUID`)
};

const ja_builds_spec_guid = /** @type {(inputs: Builds_Spec_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設計図の GUID`)
};

/**
* | output |
* | --- |
* | "Blueprint GUID" |
*
* @param {Builds_Spec_GuidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_guid = /** @type {((inputs?: Builds_Spec_GuidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_GuidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_guid(inputs)
	if (locale === "de") return de_builds_spec_guid(inputs)
	if (locale === "fr") return fr_builds_spec_guid(inputs)
	if (locale === "it") return it_builds_spec_guid(inputs)
	if (locale === "nl") return nl_builds_spec_guid(inputs)
	if (locale === "pl") return pl_builds_spec_guid(inputs)
	if (locale === "pt") return pt_builds_spec_guid(inputs)
	if (locale === "ru") return ru_builds_spec_guid(inputs)
	if (locale === "sv") return sv_builds_spec_guid(inputs)
	if (locale === "tr") return tr_builds_spec_guid(inputs)
	if (locale === "zh") return zh_builds_spec_guid(inputs)
	if (locale === "ja") return ja_builds_spec_guid(inputs)
	return en_builds_spec_guid(inputs)
});
