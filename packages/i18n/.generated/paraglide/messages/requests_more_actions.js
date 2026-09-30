/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_More_ActionsInputs */

const en_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request actions`)
};

const es_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acciones de la petición`)
};

const de_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktionen zum Wunsch`)
};

const fr_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions de la demande`)
};

const it_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Azioni della richiesta`)
};

const nl_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acties voor het verzoek`)
};

const pl_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działania dla prośby`)
};

const pt_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ações do pedido`)
};

const ru_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Действия с запросом`)
};

const sv_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärder för önskemålet`)
};

const tr_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek eylemleri`)
};

const zh_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求操作`)
};

const ja_requests_more_actions = /** @type {(inputs: Requests_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストの操作`)
};

/**
* | output |
* | --- |
* | "Request actions" |
*
* @param {Requests_More_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_more_actions = /** @type {((inputs?: Requests_More_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_More_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_more_actions(inputs)
	if (locale === "de") return de_requests_more_actions(inputs)
	if (locale === "fr") return fr_requests_more_actions(inputs)
	if (locale === "it") return it_requests_more_actions(inputs)
	if (locale === "nl") return nl_requests_more_actions(inputs)
	if (locale === "pl") return pl_requests_more_actions(inputs)
	if (locale === "pt") return pt_requests_more_actions(inputs)
	if (locale === "ru") return ru_requests_more_actions(inputs)
	if (locale === "sv") return sv_requests_more_actions(inputs)
	if (locale === "tr") return tr_requests_more_actions(inputs)
	if (locale === "zh") return zh_requests_more_actions(inputs)
	if (locale === "ja") return ja_requests_more_actions(inputs)
	return en_requests_more_actions(inputs)
});
