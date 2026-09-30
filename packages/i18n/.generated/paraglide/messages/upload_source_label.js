/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Source_LabelInputs */

const en_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Source code`)
};

const es_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código fuente`)
};

const de_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quellcode`)
};

const fr_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code source`)
};

const it_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Codice sorgente`)
};

const nl_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broncode`)
};

const pl_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kod źródłowy`)
};

const pt_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Código-fonte`)
};

const ru_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исходный код`)
};

const sv_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Källkod`)
};

const tr_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynak kod`)
};

const zh_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`源代码`)
};

const ja_upload_source_label = /** @type {(inputs: Upload_Source_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソースコード`)
};

/**
* | output |
* | --- |
* | "Source code" |
*
* @param {Upload_Source_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_source_label = /** @type {((inputs?: Upload_Source_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Source_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_source_label(inputs)
	if (locale === "de") return de_upload_source_label(inputs)
	if (locale === "fr") return fr_upload_source_label(inputs)
	if (locale === "it") return it_upload_source_label(inputs)
	if (locale === "nl") return nl_upload_source_label(inputs)
	if (locale === "pl") return pl_upload_source_label(inputs)
	if (locale === "pt") return pt_upload_source_label(inputs)
	if (locale === "ru") return ru_upload_source_label(inputs)
	if (locale === "sv") return sv_upload_source_label(inputs)
	if (locale === "tr") return tr_upload_source_label(inputs)
	if (locale === "zh") return zh_upload_source_label(inputs)
	if (locale === "ja") return ja_upload_source_label(inputs)
	return en_upload_source_label(inputs)
});
