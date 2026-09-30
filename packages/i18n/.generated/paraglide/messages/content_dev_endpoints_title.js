/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Endpoints_TitleInputs */

const en_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public read endpoints`)
};

const es_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endpoints públicos de lectura`)
};

const de_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffentliche Lese-Endpunkte`)
};

const fr_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endpoints publics en lecture`)
};

const it_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endpoint pubblici in lettura`)
};

const nl_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openbare lees-endpoints`)
};

const pl_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiczne endpointy do odczytu`)
};

const pt_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endpoints públicos de leitura`)
};

const ru_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публичные эндпоинты для чтения`)
};

const sv_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publika lässlutpunkter`)
};

const tr_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık okuma uç noktaları`)
};

const zh_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开只读接口`)
};

const ja_content_dev_endpoints_title = /** @type {(inputs: Content_Dev_Endpoints_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開読み取りエンドポイント`)
};

/**
* | output |
* | --- |
* | "Public read endpoints" |
*
* @param {Content_Dev_Endpoints_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_endpoints_title = /** @type {((inputs?: Content_Dev_Endpoints_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Endpoints_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_endpoints_title(inputs)
	if (locale === "de") return de_content_dev_endpoints_title(inputs)
	if (locale === "fr") return fr_content_dev_endpoints_title(inputs)
	if (locale === "it") return it_content_dev_endpoints_title(inputs)
	if (locale === "nl") return nl_content_dev_endpoints_title(inputs)
	if (locale === "pl") return pl_content_dev_endpoints_title(inputs)
	if (locale === "pt") return pt_content_dev_endpoints_title(inputs)
	if (locale === "ru") return ru_content_dev_endpoints_title(inputs)
	if (locale === "sv") return sv_content_dev_endpoints_title(inputs)
	if (locale === "tr") return tr_content_dev_endpoints_title(inputs)
	if (locale === "zh") return zh_content_dev_endpoints_title(inputs)
	if (locale === "ja") return ja_content_dev_endpoints_title(inputs)
	return en_content_dev_endpoints_title(inputs)
});
