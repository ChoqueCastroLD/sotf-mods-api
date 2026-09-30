/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Fulfill_SubmitInputs */

const en_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark as fulfilled`)
};

const es_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como cumplida`)
};

const de_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als erfüllt markieren`)
};

const fr_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer comme réalisée`)
};

const it_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come realizzata`)
};

const nl_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeer als vervuld`)
};

const pl_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako zrealizowane`)
};

const pt_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como atendido`)
};

const ru_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить выполненным`)
};

const sv_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som uppfylld`)
};

const tr_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamamlandı olarak işaretle`)
};

const zh_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为已完成`)
};

const ja_requests_fulfill_submit = /** @type {(inputs: Requests_Fulfill_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`達成済みにする`)
};

/**
* | output |
* | --- |
* | "Mark as fulfilled" |
*
* @param {Requests_Fulfill_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_fulfill_submit = /** @type {((inputs?: Requests_Fulfill_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Fulfill_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_fulfill_submit(inputs)
	if (locale === "de") return de_requests_fulfill_submit(inputs)
	if (locale === "fr") return fr_requests_fulfill_submit(inputs)
	if (locale === "it") return it_requests_fulfill_submit(inputs)
	if (locale === "nl") return nl_requests_fulfill_submit(inputs)
	if (locale === "pl") return pl_requests_fulfill_submit(inputs)
	if (locale === "pt") return pt_requests_fulfill_submit(inputs)
	if (locale === "ru") return ru_requests_fulfill_submit(inputs)
	if (locale === "sv") return sv_requests_fulfill_submit(inputs)
	if (locale === "tr") return tr_requests_fulfill_submit(inputs)
	if (locale === "zh") return zh_requests_fulfill_submit(inputs)
	if (locale === "ja") return ja_requests_fulfill_submit(inputs)
	return en_requests_fulfill_submit(inputs)
});
