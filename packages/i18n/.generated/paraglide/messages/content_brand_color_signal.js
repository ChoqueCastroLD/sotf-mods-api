/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Color_SignalInputs */

const en_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal (live, info)`)
};

const es_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Señal (en vivo, información)`)
};

const de_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal (live, Info)`)
};

const fr_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal (en direct, info)`)
};

const it_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnale (dal vivo, info)`)
};

const nl_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal (live, info)`)
};

const pl_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sygnał (na żywo, informacje)`)
};

const pt_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinal (ao vivo, informação)`)
};

const ru_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигнал (онлайн, информация)`)
};

const sv_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal (live, info)`)
};

const tr_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal (canlı, bilgi)`)
};

const zh_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号（实时、信息）`)
};

const ja_content_brand_color_signal = /** @type {(inputs: Content_Brand_Color_SignalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal（ライブ、情報）`)
};

/**
* | output |
* | --- |
* | "Signal (live, info)" |
*
* @param {Content_Brand_Color_SignalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_color_signal = /** @type {((inputs?: Content_Brand_Color_SignalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Color_SignalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_color_signal(inputs)
	if (locale === "de") return de_content_brand_color_signal(inputs)
	if (locale === "fr") return fr_content_brand_color_signal(inputs)
	if (locale === "it") return it_content_brand_color_signal(inputs)
	if (locale === "nl") return nl_content_brand_color_signal(inputs)
	if (locale === "pl") return pl_content_brand_color_signal(inputs)
	if (locale === "pt") return pt_content_brand_color_signal(inputs)
	if (locale === "ru") return ru_content_brand_color_signal(inputs)
	if (locale === "sv") return sv_content_brand_color_signal(inputs)
	if (locale === "tr") return tr_content_brand_color_signal(inputs)
	if (locale === "zh") return zh_content_brand_color_signal(inputs)
	if (locale === "ja") return ja_content_brand_color_signal(inputs)
	return en_content_brand_color_signal(inputs)
});
