/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Action_Request_RemovalInputs */

const en_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request removal`)
};

const es_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir la retirada`)
};

const de_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernung beantragen`)
};

const fr_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander le retrait`)
};

const it_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi la rimozione`)
};

const nl_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijdering aanvragen`)
};

const pl_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproś o usunięcie`)
};

const pt_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir a remoção`)
};

const ru_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросить удаление`)
};

const sv_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begär borttagning`)
};

const tr_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldırılmasını iste`)
};

const zh_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`申请下架`)
};

const ja_basecamp_action_request_removal = /** @type {(inputs: Basecamp_Action_Request_RemovalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除を依頼`)
};

/**
* | output |
* | --- |
* | "Request removal" |
*
* @param {Basecamp_Action_Request_RemovalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_action_request_removal = /** @type {((inputs?: Basecamp_Action_Request_RemovalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Action_Request_RemovalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_action_request_removal(inputs)
	if (locale === "de") return de_basecamp_action_request_removal(inputs)
	if (locale === "fr") return fr_basecamp_action_request_removal(inputs)
	if (locale === "it") return it_basecamp_action_request_removal(inputs)
	if (locale === "nl") return nl_basecamp_action_request_removal(inputs)
	if (locale === "pl") return pl_basecamp_action_request_removal(inputs)
	if (locale === "pt") return pt_basecamp_action_request_removal(inputs)
	if (locale === "ru") return ru_basecamp_action_request_removal(inputs)
	if (locale === "sv") return sv_basecamp_action_request_removal(inputs)
	if (locale === "tr") return tr_basecamp_action_request_removal(inputs)
	if (locale === "zh") return zh_basecamp_action_request_removal(inputs)
	if (locale === "ja") return ja_basecamp_action_request_removal(inputs)
	return en_basecamp_action_request_removal(inputs)
});
