/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Decided_RejectInputs */

const en_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rejected: ${i?.title}`)
};

const es_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rechazado: ${i?.title}`)
};

const de_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abgelehnt: ${i?.title}`)
};

const fr_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Refusé : ${i?.title}`)
};

const it_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rifiutato: ${i?.title}`)
};

const nl_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afgewezen: ${i?.title}`)
};

const pl_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odrzucono: ${i?.title}`)
};

const pt_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rejeitado: ${i?.title}`)
};

const ru_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отклонено: ${i?.title}`)
};

const sv_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Avvisad: ${i?.title}`)
};

const tr_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reddedildi: ${i?.title}`)
};

const zh_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已拒绝：${i?.title}`)
};

const ja_ranger_decided_reject = /** @type {(inputs: Ranger_Decided_RejectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`却下しました：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Rejected: {title}" |
*
* @param {Ranger_Decided_RejectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decided_reject = /** @type {((inputs: Ranger_Decided_RejectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_RejectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decided_reject(inputs)
	if (locale === "de") return de_ranger_decided_reject(inputs)
	if (locale === "fr") return fr_ranger_decided_reject(inputs)
	if (locale === "it") return it_ranger_decided_reject(inputs)
	if (locale === "nl") return nl_ranger_decided_reject(inputs)
	if (locale === "pl") return pl_ranger_decided_reject(inputs)
	if (locale === "pt") return pt_ranger_decided_reject(inputs)
	if (locale === "ru") return ru_ranger_decided_reject(inputs)
	if (locale === "sv") return sv_ranger_decided_reject(inputs)
	if (locale === "tr") return tr_ranger_decided_reject(inputs)
	if (locale === "zh") return zh_ranger_decided_reject(inputs)
	if (locale === "ja") return ja_ranger_decided_reject(inputs)
	return en_ranger_decided_reject(inputs)
});
