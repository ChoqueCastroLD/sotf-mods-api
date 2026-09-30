/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_ReopenInputs */

const en_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reopen request`)
};

const es_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reabrir petición`)
};

const de_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunsch wieder öffnen`)
};

const fr_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rouvrir la demande`)
};

const it_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riapri la richiesta`)
};

const nl_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoek heropenen`)
};

const pl_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz prośbę ponownie`)
};

const pt_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reabrir pedido`)
};

const ru_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть запрос снова`)
};

const sv_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna önskemålet igen`)
};

const tr_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İsteği yeniden aç`)
};

const zh_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新开放请求`)
};

const ja_requests_reopen = /** @type {(inputs: Requests_ReopenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを再開`)
};

/**
* | output |
* | --- |
* | "Reopen request" |
*
* @param {Requests_ReopenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_reopen = /** @type {((inputs?: Requests_ReopenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_ReopenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_reopen(inputs)
	if (locale === "de") return de_requests_reopen(inputs)
	if (locale === "fr") return fr_requests_reopen(inputs)
	if (locale === "it") return it_requests_reopen(inputs)
	if (locale === "nl") return nl_requests_reopen(inputs)
	if (locale === "pl") return pl_requests_reopen(inputs)
	if (locale === "pt") return pt_requests_reopen(inputs)
	if (locale === "ru") return ru_requests_reopen(inputs)
	if (locale === "sv") return sv_requests_reopen(inputs)
	if (locale === "tr") return tr_requests_reopen(inputs)
	if (locale === "zh") return zh_requests_reopen(inputs)
	if (locale === "ja") return ja_requests_reopen(inputs)
	return en_requests_reopen(inputs)
});
