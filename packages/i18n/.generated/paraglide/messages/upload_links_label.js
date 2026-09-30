/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Links_LabelInputs */

const en_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support links`)
};

const es_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enlaces de apoyo`)
};

const de_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterstützungslinks`)
};

const fr_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liens de soutien`)
};

const it_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link di supporto`)
};

const nl_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steunlinks`)
};

const pl_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linki wsparcia`)
};

const pt_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links de apoio`)
};

const ru_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки для поддержки`)
};

const sv_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stödlänkar`)
};

const tr_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destek bağlantıları`)
};

const zh_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持链接`)
};

const ja_upload_links_label = /** @type {(inputs: Upload_Links_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支援リンク`)
};

/**
* | output |
* | --- |
* | "Support links" |
*
* @param {Upload_Links_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_links_label = /** @type {((inputs?: Upload_Links_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Links_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_links_label(inputs)
	if (locale === "de") return de_upload_links_label(inputs)
	if (locale === "fr") return fr_upload_links_label(inputs)
	if (locale === "it") return it_upload_links_label(inputs)
	if (locale === "nl") return nl_upload_links_label(inputs)
	if (locale === "pl") return pl_upload_links_label(inputs)
	if (locale === "pt") return pt_upload_links_label(inputs)
	if (locale === "ru") return ru_upload_links_label(inputs)
	if (locale === "sv") return sv_upload_links_label(inputs)
	if (locale === "tr") return tr_upload_links_label(inputs)
	if (locale === "zh") return zh_upload_links_label(inputs)
	if (locale === "ja") return ja_upload_links_label(inputs)
	return en_upload_links_label(inputs)
});
