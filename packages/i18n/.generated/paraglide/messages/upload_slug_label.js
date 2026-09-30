/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Slug_LabelInputs */

const en_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Address`)
};

const es_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dirección`)
};

const de_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse`)
};

const fr_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse`)
};

const it_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indirizzo`)
};

const nl_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const pl_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const pt_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endereço`)
};

const ru_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес`)
};

const sv_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adress`)
};

const tr_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres`)
};

const zh_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地址`)
};

const ja_upload_slug_label = /** @type {(inputs: Upload_Slug_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレス`)
};

/**
* | output |
* | --- |
* | "Address" |
*
* @param {Upload_Slug_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_slug_label = /** @type {((inputs?: Upload_Slug_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Slug_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_slug_label(inputs)
	if (locale === "de") return de_upload_slug_label(inputs)
	if (locale === "fr") return fr_upload_slug_label(inputs)
	if (locale === "it") return it_upload_slug_label(inputs)
	if (locale === "nl") return nl_upload_slug_label(inputs)
	if (locale === "pl") return pl_upload_slug_label(inputs)
	if (locale === "pt") return pt_upload_slug_label(inputs)
	if (locale === "ru") return ru_upload_slug_label(inputs)
	if (locale === "sv") return sv_upload_slug_label(inputs)
	if (locale === "tr") return tr_upload_slug_label(inputs)
	if (locale === "zh") return zh_upload_slug_label(inputs)
	if (locale === "ja") return ja_upload_slug_label(inputs)
	return en_upload_slug_label(inputs)
});
