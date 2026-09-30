/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Channel_LabelInputs */

const en_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel`)
};

const es_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const de_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanal`)
};

const fr_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const it_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canale`)
};

const nl_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanaal`)
};

const pl_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanał`)
};

const pt_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const ru_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Канал`)
};

const sv_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanal`)
};

const tr_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanal`)
};

const zh_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`渠道`)
};

const ja_upload_channel_label = /** @type {(inputs: Upload_Channel_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネル`)
};

/**
* | output |
* | --- |
* | "Channel" |
*
* @param {Upload_Channel_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_channel_label = /** @type {((inputs?: Upload_Channel_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Channel_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_channel_label(inputs)
	if (locale === "de") return de_upload_channel_label(inputs)
	if (locale === "fr") return fr_upload_channel_label(inputs)
	if (locale === "it") return it_upload_channel_label(inputs)
	if (locale === "nl") return nl_upload_channel_label(inputs)
	if (locale === "pl") return pl_upload_channel_label(inputs)
	if (locale === "pt") return pt_upload_channel_label(inputs)
	if (locale === "ru") return ru_upload_channel_label(inputs)
	if (locale === "sv") return sv_upload_channel_label(inputs)
	if (locale === "tr") return tr_upload_channel_label(inputs)
	if (locale === "zh") return zh_upload_channel_label(inputs)
	if (locale === "ja") return ja_upload_channel_label(inputs)
	return en_upload_channel_label(inputs)
});
