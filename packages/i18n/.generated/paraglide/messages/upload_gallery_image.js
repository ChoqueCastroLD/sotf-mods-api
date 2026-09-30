/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ n: NonNullable<unknown> }} Upload_Gallery_ImageInputs */

const en_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Screenshot ${i?.n}`)
};

const es_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Captura ${i?.n}`)
};

const de_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Screenshot ${i?.n}`)
};

const fr_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Capture ${i?.n}`)
};

const it_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Screenshot ${i?.n}`)
};

const nl_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Screenshot ${i?.n}`)
};

const pl_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zrzut ekranu ${i?.n}`)
};

const pt_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Captura ${i?.n}`)
};

const ru_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скриншот ${i?.n}`)
};

const sv_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skärmbild ${i?.n}`)
};

const tr_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ekran görüntüsü ${i?.n}`)
};

const zh_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`截图 ${i?.n}`)
};

const ja_upload_gallery_image = /** @type {(inputs: Upload_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`スクリーンショット ${i?.n}`)
};

/**
* | output |
* | --- |
* | "Screenshot {n}" |
*
* @param {Upload_Gallery_ImageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_image = /** @type {((inputs: Upload_Gallery_ImageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_ImageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_image(inputs)
	if (locale === "de") return de_upload_gallery_image(inputs)
	if (locale === "fr") return fr_upload_gallery_image(inputs)
	if (locale === "it") return it_upload_gallery_image(inputs)
	if (locale === "nl") return nl_upload_gallery_image(inputs)
	if (locale === "pl") return pl_upload_gallery_image(inputs)
	if (locale === "pt") return pt_upload_gallery_image(inputs)
	if (locale === "ru") return ru_upload_gallery_image(inputs)
	if (locale === "sv") return sv_upload_gallery_image(inputs)
	if (locale === "tr") return tr_upload_gallery_image(inputs)
	if (locale === "zh") return zh_upload_gallery_image(inputs)
	if (locale === "ja") return ja_upload_gallery_image(inputs)
	return en_upload_gallery_image(inputs)
});
