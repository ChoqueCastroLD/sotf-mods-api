/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Decided_Request_ChangesInputs */

const en_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changes requested: ${i?.title}`)
};

const es_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cambios pedidos: ${i?.title}`)
};

const de_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Änderungen angefordert: ${i?.title}`)
};

const fr_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifications demandées : ${i?.title}`)
};

const it_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifiche richieste: ${i?.title}`)
};

const nl_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wijzigingen gevraagd: ${i?.title}`)
};

const pl_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Poproszono o zmiany: ${i?.title}`)
};

const pt_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alterações pedidas: ${i?.title}`)
};

const ru_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Запрошены изменения: ${i?.title}`)
};

const sv_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ändringar begärda: ${i?.title}`)
};

const tr_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Değişiklik istendi: ${i?.title}`)
};

const zh_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已要求修改：${i?.title}`)
};

const ja_ranger_decided_request_changes = /** @type {(inputs: Ranger_Decided_Request_ChangesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`修正を依頼しました：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Changes requested: {title}" |
*
* @param {Ranger_Decided_Request_ChangesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decided_request_changes = /** @type {((inputs: Ranger_Decided_Request_ChangesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_Request_ChangesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decided_request_changes(inputs)
	if (locale === "de") return de_ranger_decided_request_changes(inputs)
	if (locale === "fr") return fr_ranger_decided_request_changes(inputs)
	if (locale === "it") return it_ranger_decided_request_changes(inputs)
	if (locale === "nl") return nl_ranger_decided_request_changes(inputs)
	if (locale === "pl") return pl_ranger_decided_request_changes(inputs)
	if (locale === "pt") return pt_ranger_decided_request_changes(inputs)
	if (locale === "ru") return ru_ranger_decided_request_changes(inputs)
	if (locale === "sv") return sv_ranger_decided_request_changes(inputs)
	if (locale === "tr") return tr_ranger_decided_request_changes(inputs)
	if (locale === "zh") return zh_ranger_decided_request_changes(inputs)
	if (locale === "ja") return ja_ranger_decided_request_changes(inputs)
	return en_ranger_decided_request_changes(inputs)
});
