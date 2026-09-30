/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Link_YoutubeInputs */

const en_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const es_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const de_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const fr_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const it_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const nl_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const pl_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const pt_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const ru_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const sv_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const tr_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const zh_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const ja_upload_link_youtube = /** @type {(inputs: Upload_Link_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

/**
* | output |
* | --- |
* | "YouTube" |
*
* @param {Upload_Link_YoutubeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_link_youtube = /** @type {((inputs?: Upload_Link_YoutubeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Link_YoutubeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_link_youtube(inputs)
	if (locale === "de") return de_upload_link_youtube(inputs)
	if (locale === "fr") return fr_upload_link_youtube(inputs)
	if (locale === "it") return it_upload_link_youtube(inputs)
	if (locale === "nl") return nl_upload_link_youtube(inputs)
	if (locale === "pl") return pl_upload_link_youtube(inputs)
	if (locale === "pt") return pt_upload_link_youtube(inputs)
	if (locale === "ru") return ru_upload_link_youtube(inputs)
	if (locale === "sv") return sv_upload_link_youtube(inputs)
	if (locale === "tr") return tr_upload_link_youtube(inputs)
	if (locale === "zh") return zh_upload_link_youtube(inputs)
	if (locale === "ja") return ja_upload_link_youtube(inputs)
	return en_upload_link_youtube(inputs)
});
