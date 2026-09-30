/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Build_GuidInputs */

const en_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blueprint id`)
};

const es_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id del plano`)
};

const de_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bauplan-ID`)
};

const fr_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id du plan`)
};

const it_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id del progetto`)
};

const nl_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouwtekening-id`)
};

const pl_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identyfikator planu`)
};

const pt_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id da planta`)
};

const ru_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Id чертежа`)
};

const sv_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritnings-id`)
};

const tr_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plan kimliği`)
};

const zh_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`蓝图 ID`)
};

const ja_upload_build_guid = /** @type {(inputs: Upload_Build_GuidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設計図ID`)
};

/**
* | output |
* | --- |
* | "Blueprint id" |
*
* @param {Upload_Build_GuidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_build_guid = /** @type {((inputs?: Upload_Build_GuidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Build_GuidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_build_guid(inputs)
	if (locale === "de") return de_upload_build_guid(inputs)
	if (locale === "fr") return fr_upload_build_guid(inputs)
	if (locale === "it") return it_upload_build_guid(inputs)
	if (locale === "nl") return nl_upload_build_guid(inputs)
	if (locale === "pl") return pl_upload_build_guid(inputs)
	if (locale === "pt") return pt_upload_build_guid(inputs)
	if (locale === "ru") return ru_upload_build_guid(inputs)
	if (locale === "sv") return sv_upload_build_guid(inputs)
	if (locale === "tr") return tr_upload_build_guid(inputs)
	if (locale === "zh") return zh_upload_build_guid(inputs)
	if (locale === "ja") return ja_upload_build_guid(inputs)
	return en_upload_build_guid(inputs)
});
