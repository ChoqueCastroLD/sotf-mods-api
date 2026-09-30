/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Cover_LabelInputs */

const en_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover`)
};

const es_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portada`)
};

const de_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild`)
};

const fr_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couverture`)
};

const it_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copertina`)
};

const nl_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag`)
};

const pl_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okładka`)
};

const pt_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capa`)
};

const ru_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обложка`)
};

const sv_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag`)
};

const tr_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak`)
};

const zh_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面`)
};

const ja_upload_cover_label = /** @type {(inputs: Upload_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバー`)
};

/**
* | output |
* | --- |
* | "Cover" |
*
* @param {Upload_Cover_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_cover_label = /** @type {((inputs?: Upload_Cover_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Cover_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_cover_label(inputs)
	if (locale === "de") return de_upload_cover_label(inputs)
	if (locale === "fr") return fr_upload_cover_label(inputs)
	if (locale === "it") return it_upload_cover_label(inputs)
	if (locale === "nl") return nl_upload_cover_label(inputs)
	if (locale === "pl") return pl_upload_cover_label(inputs)
	if (locale === "pt") return pt_upload_cover_label(inputs)
	if (locale === "ru") return ru_upload_cover_label(inputs)
	if (locale === "sv") return sv_upload_cover_label(inputs)
	if (locale === "tr") return tr_upload_cover_label(inputs)
	if (locale === "zh") return zh_upload_cover_label(inputs)
	if (locale === "ja") return ja_upload_cover_label(inputs)
	return en_upload_cover_label(inputs)
});
