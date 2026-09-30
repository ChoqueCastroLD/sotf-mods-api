/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Status_AdoptedInputs */

const en_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In progress`)
};

const es_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En curso`)
};

const de_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Arbeit`)
};

const fr_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours`)
};

const it_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In corso`)
};

const nl_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In behandeling`)
};

const pl_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W toku`)
};

const pt_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em andamento`)
};

const ru_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В работе`)
};

const sv_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pågår`)
};

const tr_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devam ediyor`)
};

const zh_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进行中`)
};

const ja_requests_status_adopted = /** @type {(inputs: Requests_Status_AdoptedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応中`)
};

/**
* | output |
* | --- |
* | "In progress" |
*
* @param {Requests_Status_AdoptedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_status_adopted = /** @type {((inputs?: Requests_Status_AdoptedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Status_AdoptedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_status_adopted(inputs)
	if (locale === "de") return de_requests_status_adopted(inputs)
	if (locale === "fr") return fr_requests_status_adopted(inputs)
	if (locale === "it") return it_requests_status_adopted(inputs)
	if (locale === "nl") return nl_requests_status_adopted(inputs)
	if (locale === "pl") return pl_requests_status_adopted(inputs)
	if (locale === "pt") return pt_requests_status_adopted(inputs)
	if (locale === "ru") return ru_requests_status_adopted(inputs)
	if (locale === "sv") return sv_requests_status_adopted(inputs)
	if (locale === "tr") return tr_requests_status_adopted(inputs)
	if (locale === "zh") return zh_requests_status_adopted(inputs)
	if (locale === "ja") return ja_requests_status_adopted(inputs)
	return en_requests_status_adopted(inputs)
});
