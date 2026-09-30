/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Gallery_Alt_PlaceholderInputs */

const en_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What does it show?`)
};

const es_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Qué muestra?`)
};

const de_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was ist zu sehen?`)
};

const fr_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que montre-t-elle ?`)
};

const it_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa mostra?`)
};

const nl_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat is er te zien?`)
};

const pl_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co przedstawia?`)
};

const pt_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que ela mostra?`)
};

const ru_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что на нём?`)
};

const sv_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad visar den?`)
};

const tr_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne gösteriyor?`)
};

const zh_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图中显示了什么？`)
};

const ja_upload_gallery_alt_placeholder = /** @type {(inputs: Upload_Gallery_Alt_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`何が写っていますか？`)
};

/**
* | output |
* | --- |
* | "What does it show?" |
*
* @param {Upload_Gallery_Alt_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_gallery_alt_placeholder = /** @type {((inputs?: Upload_Gallery_Alt_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Gallery_Alt_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_gallery_alt_placeholder(inputs)
	if (locale === "de") return de_upload_gallery_alt_placeholder(inputs)
	if (locale === "fr") return fr_upload_gallery_alt_placeholder(inputs)
	if (locale === "it") return it_upload_gallery_alt_placeholder(inputs)
	if (locale === "nl") return nl_upload_gallery_alt_placeholder(inputs)
	if (locale === "pl") return pl_upload_gallery_alt_placeholder(inputs)
	if (locale === "pt") return pt_upload_gallery_alt_placeholder(inputs)
	if (locale === "ru") return ru_upload_gallery_alt_placeholder(inputs)
	if (locale === "sv") return sv_upload_gallery_alt_placeholder(inputs)
	if (locale === "tr") return tr_upload_gallery_alt_placeholder(inputs)
	if (locale === "zh") return zh_upload_gallery_alt_placeholder(inputs)
	if (locale === "ja") return ja_upload_gallery_alt_placeholder(inputs)
	return en_upload_gallery_alt_placeholder(inputs)
});
