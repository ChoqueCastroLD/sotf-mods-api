/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Channel_ReleaseInputs */

const en_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stable`)
};

const es_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estable`)
};

const de_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stabil`)
};

const fr_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stable`)
};

const it_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stabile`)
};

const nl_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stabiel`)
};

const pl_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stabilny`)
};

const pt_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estável`)
};

const ru_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Стабильный`)
};

const sv_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stabil`)
};

const tr_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kararlı`)
};

const zh_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`稳定版`)
};

const ja_upload_channel_release = /** @type {(inputs: Upload_Channel_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安定版`)
};

/**
* | output |
* | --- |
* | "Stable" |
*
* @param {Upload_Channel_ReleaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_channel_release = /** @type {((inputs?: Upload_Channel_ReleaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Channel_ReleaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_channel_release(inputs)
	if (locale === "de") return de_upload_channel_release(inputs)
	if (locale === "fr") return fr_upload_channel_release(inputs)
	if (locale === "it") return it_upload_channel_release(inputs)
	if (locale === "nl") return nl_upload_channel_release(inputs)
	if (locale === "pl") return pl_upload_channel_release(inputs)
	if (locale === "pt") return pt_upload_channel_release(inputs)
	if (locale === "ru") return ru_upload_channel_release(inputs)
	if (locale === "sv") return sv_upload_channel_release(inputs)
	if (locale === "tr") return tr_upload_channel_release(inputs)
	if (locale === "zh") return zh_upload_channel_release(inputs)
	if (locale === "ja") return ja_upload_channel_release(inputs)
	return en_upload_channel_release(inputs)
});
