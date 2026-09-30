/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Channel_BetaInputs */

const en_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const es_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const de_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const fr_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bêta`)
};

const it_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const nl_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bèta`)
};

const pl_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const pt_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const ru_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Бета`)
};

const sv_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const tr_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta`)
};

const zh_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试版`)
};

const ja_upload_channel_beta = /** @type {(inputs: Upload_Channel_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベータ`)
};

/**
* | output |
* | --- |
* | "Beta" |
*
* @param {Upload_Channel_BetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_channel_beta = /** @type {((inputs?: Upload_Channel_BetaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Channel_BetaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_channel_beta(inputs)
	if (locale === "de") return de_upload_channel_beta(inputs)
	if (locale === "fr") return fr_upload_channel_beta(inputs)
	if (locale === "it") return it_upload_channel_beta(inputs)
	if (locale === "nl") return nl_upload_channel_beta(inputs)
	if (locale === "pl") return pl_upload_channel_beta(inputs)
	if (locale === "pt") return pt_upload_channel_beta(inputs)
	if (locale === "ru") return ru_upload_channel_beta(inputs)
	if (locale === "sv") return sv_upload_channel_beta(inputs)
	if (locale === "tr") return tr_upload_channel_beta(inputs)
	if (locale === "zh") return zh_upload_channel_beta(inputs)
	if (locale === "ja") return ja_upload_channel_beta(inputs)
	return en_upload_channel_beta(inputs)
});
