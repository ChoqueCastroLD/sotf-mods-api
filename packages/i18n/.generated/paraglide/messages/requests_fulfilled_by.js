/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Requests_Fulfilled_ByInputs */

const en_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fulfilled with ${i?.mod}`)
};

const es_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cumplida con ${i?.mod}`)
};

const de_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Erfüllt mit ${i?.mod}`)
};

const fr_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réalisée avec ${i?.mod}`)
};

const it_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Realizzata con ${i?.mod}`)
};

const nl_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vervuld met ${i?.mod}`)
};

const pl_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zrealizowane przez ${i?.mod}`)
};

const pt_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atendido com ${i?.mod}`)
};

const ru_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Выполнено модом ${i?.mod}`)
};

const sv_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppfyllt med ${i?.mod}`)
};

const tr_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ile tamamlandı`)
};

const zh_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已由 ${i?.mod} 完成`)
};

const ja_requests_fulfilled_by = /** @type {(inputs: Requests_Fulfilled_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} で達成`)
};

/**
* | output |
* | --- |
* | "Fulfilled with {mod}" |
*
* @param {Requests_Fulfilled_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_fulfilled_by = /** @type {((inputs: Requests_Fulfilled_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Fulfilled_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_fulfilled_by(inputs)
	if (locale === "de") return de_requests_fulfilled_by(inputs)
	if (locale === "fr") return fr_requests_fulfilled_by(inputs)
	if (locale === "it") return it_requests_fulfilled_by(inputs)
	if (locale === "nl") return nl_requests_fulfilled_by(inputs)
	if (locale === "pl") return pl_requests_fulfilled_by(inputs)
	if (locale === "pt") return pt_requests_fulfilled_by(inputs)
	if (locale === "ru") return ru_requests_fulfilled_by(inputs)
	if (locale === "sv") return sv_requests_fulfilled_by(inputs)
	if (locale === "tr") return tr_requests_fulfilled_by(inputs)
	if (locale === "zh") return zh_requests_fulfilled_by(inputs)
	if (locale === "ja") return ja_requests_fulfilled_by(inputs)
	return en_requests_fulfilled_by(inputs)
});
