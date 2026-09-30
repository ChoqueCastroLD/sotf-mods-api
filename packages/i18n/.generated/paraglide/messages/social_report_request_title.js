/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_Request_TitleInputs */

const en_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report this request`)
};

const es_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar esta petición`)
};

const de_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Wunsch melden`)
};

const fr_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler cette demande`)
};

const it_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala questa richiesta`)
};

const nl_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit verzoek melden`)
};

const pl_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś tę prośbę`)
};

const pt_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar este pedido`)
};

const ru_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться на этот запрос`)
};

const sv_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera det här önskemålet`)
};

const tr_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu isteği bildir`)
};

const zh_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报此请求`)
};

const ja_social_report_request_title = /** @type {(inputs: Social_Report_Request_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリクエストを通報`)
};

/**
* | output |
* | --- |
* | "Report this request" |
*
* @param {Social_Report_Request_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_request_title = /** @type {((inputs?: Social_Report_Request_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_Request_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_request_title(inputs)
	if (locale === "de") return de_social_report_request_title(inputs)
	if (locale === "fr") return fr_social_report_request_title(inputs)
	if (locale === "it") return it_social_report_request_title(inputs)
	if (locale === "nl") return nl_social_report_request_title(inputs)
	if (locale === "pl") return pl_social_report_request_title(inputs)
	if (locale === "pt") return pt_social_report_request_title(inputs)
	if (locale === "ru") return ru_social_report_request_title(inputs)
	if (locale === "sv") return sv_social_report_request_title(inputs)
	if (locale === "tr") return tr_social_report_request_title(inputs)
	if (locale === "zh") return zh_social_report_request_title(inputs)
	if (locale === "ja") return ja_social_report_request_title(inputs)
	return en_social_report_request_title(inputs)
});
