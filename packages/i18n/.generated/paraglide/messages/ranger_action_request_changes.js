/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Action_Request_ChangesInputs */

const en_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request changes`)
};

const es_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir cambios`)
};

const de_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen anfordern`)
};

const fr_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander des modifications`)
};

const it_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi modifiche`)
};

const nl_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen vragen`)
};

const pl_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproś o zmiany`)
};

const pt_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir alterações`)
};

const ru_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросить изменения`)
};

const sv_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begär ändringar`)
};

const tr_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik iste`)
};

const zh_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要求修改`)
};

const ja_ranger_action_request_changes = /** @type {(inputs: Ranger_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正を依頼`)
};

/**
* | output |
* | --- |
* | "Request changes" |
*
* @param {Ranger_Action_Request_ChangesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_action_request_changes = /** @type {((inputs?: Ranger_Action_Request_ChangesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Action_Request_ChangesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_action_request_changes(inputs)
	if (locale === "de") return de_ranger_action_request_changes(inputs)
	if (locale === "fr") return fr_ranger_action_request_changes(inputs)
	if (locale === "it") return it_ranger_action_request_changes(inputs)
	if (locale === "nl") return nl_ranger_action_request_changes(inputs)
	if (locale === "pl") return pl_ranger_action_request_changes(inputs)
	if (locale === "pt") return pt_ranger_action_request_changes(inputs)
	if (locale === "ru") return ru_ranger_action_request_changes(inputs)
	if (locale === "sv") return sv_ranger_action_request_changes(inputs)
	if (locale === "tr") return tr_ranger_action_request_changes(inputs)
	if (locale === "zh") return zh_ranger_action_request_changes(inputs)
	if (locale === "ja") return ja_ranger_action_request_changes(inputs)
	return en_ranger_action_request_changes(inputs)
});
