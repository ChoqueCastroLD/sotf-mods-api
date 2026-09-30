/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Quality_MetInputs */

const en_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`done`)
};

const es_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`hecho`)
};

const de_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`erledigt`)
};

const fr_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`fait`)
};

const it_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`fatto`)
};

const nl_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`klaar`)
};

const pl_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`gotowe`)
};

const pt_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`feito`)
};

const ru_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`готово`)
};

const sv_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`klart`)
};

const tr_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`tamam`)
};

const zh_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已完成`)
};

const ja_upload_quality_met = /** @type {(inputs: Upload_Quality_MetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完了`)
};

/**
* | output |
* | --- |
* | "done" |
*
* @param {Upload_Quality_MetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_quality_met = /** @type {((inputs?: Upload_Quality_MetInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Quality_MetInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_quality_met(inputs)
	if (locale === "de") return de_upload_quality_met(inputs)
	if (locale === "fr") return fr_upload_quality_met(inputs)
	if (locale === "it") return it_upload_quality_met(inputs)
	if (locale === "nl") return nl_upload_quality_met(inputs)
	if (locale === "pl") return pl_upload_quality_met(inputs)
	if (locale === "pt") return pt_upload_quality_met(inputs)
	if (locale === "ru") return ru_upload_quality_met(inputs)
	if (locale === "sv") return sv_upload_quality_met(inputs)
	if (locale === "tr") return tr_upload_quality_met(inputs)
	if (locale === "zh") return zh_upload_quality_met(inputs)
	if (locale === "ja") return ja_upload_quality_met(inputs)
	return en_upload_quality_met(inputs)
});
