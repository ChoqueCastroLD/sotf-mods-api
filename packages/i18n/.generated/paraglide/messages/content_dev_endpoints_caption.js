/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ domain: NonNullable<unknown> }} Content_Dev_Endpoints_CaptionInputs */

const en_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Public endpoints: ${i?.domain}`)
};

const es_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Endpoints públicos: ${i?.domain}`)
};

const de_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Öffentliche Endpunkte: ${i?.domain}`)
};

const fr_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Endpoints publics : ${i?.domain}`)
};

const it_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Endpoint pubblici: ${i?.domain}`)
};

const nl_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Openbare endpoints: ${i?.domain}`)
};

const pl_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publiczne endpointy: ${i?.domain}`)
};

const pt_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Endpoints públicos: ${i?.domain}`)
};

const ru_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Публичные эндпоинты: ${i?.domain}`)
};

const sv_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Publika slutpunkter: ${i?.domain}`)
};

const tr_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Herkese açık uç noktalar: ${i?.domain}`)
};

const zh_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`公开接口：${i?.domain}`)
};

const ja_content_dev_endpoints_caption = /** @type {(inputs: Content_Dev_Endpoints_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`公開エンドポイント：${i?.domain}`)
};

/**
* | output |
* | --- |
* | "Public endpoints: {domain}" |
*
* @param {Content_Dev_Endpoints_CaptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_endpoints_caption = /** @type {((inputs: Content_Dev_Endpoints_CaptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Endpoints_CaptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_endpoints_caption(inputs)
	if (locale === "de") return de_content_dev_endpoints_caption(inputs)
	if (locale === "fr") return fr_content_dev_endpoints_caption(inputs)
	if (locale === "it") return it_content_dev_endpoints_caption(inputs)
	if (locale === "nl") return nl_content_dev_endpoints_caption(inputs)
	if (locale === "pl") return pl_content_dev_endpoints_caption(inputs)
	if (locale === "pt") return pt_content_dev_endpoints_caption(inputs)
	if (locale === "ru") return ru_content_dev_endpoints_caption(inputs)
	if (locale === "sv") return sv_content_dev_endpoints_caption(inputs)
	if (locale === "tr") return tr_content_dev_endpoints_caption(inputs)
	if (locale === "zh") return zh_content_dev_endpoints_caption(inputs)
	if (locale === "ja") return ja_content_dev_endpoints_caption(inputs)
	return en_content_dev_endpoints_caption(inputs)
});
