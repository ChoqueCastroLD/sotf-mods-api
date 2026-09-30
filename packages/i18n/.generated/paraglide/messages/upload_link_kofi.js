/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Link_KofiInputs */

const en_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const es_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const de_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const fr_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const it_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const nl_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const pl_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const pt_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const ru_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const sv_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const tr_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const zh_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

const ja_upload_link_kofi = /** @type {(inputs: Upload_Link_KofiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ko-fi`)
};

/**
* | output |
* | --- |
* | "Ko-fi" |
*
* @param {Upload_Link_KofiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_link_kofi = /** @type {((inputs?: Upload_Link_KofiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Link_KofiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_link_kofi(inputs)
	if (locale === "de") return de_upload_link_kofi(inputs)
	if (locale === "fr") return fr_upload_link_kofi(inputs)
	if (locale === "it") return it_upload_link_kofi(inputs)
	if (locale === "nl") return nl_upload_link_kofi(inputs)
	if (locale === "pl") return pl_upload_link_kofi(inputs)
	if (locale === "pt") return pt_upload_link_kofi(inputs)
	if (locale === "ru") return ru_upload_link_kofi(inputs)
	if (locale === "sv") return sv_upload_link_kofi(inputs)
	if (locale === "tr") return tr_upload_link_kofi(inputs)
	if (locale === "zh") return zh_upload_link_kofi(inputs)
	if (locale === "ja") return ja_upload_link_kofi(inputs)
	return en_upload_link_kofi(inputs)
});
