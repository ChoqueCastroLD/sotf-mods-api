/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Ranger_Sla_DueInputs */

const en_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · due soon`)
};

const es_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · a punto de vencer`)
};

const de_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · Frist läuft bald ab`)
};

const fr_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · échéance proche`)
};

const it_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · in scadenza`)
};

const nl_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · verloopt bijna`)
};

const pl_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · wkrótce upłynie termin`)
};

const pt_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · vencendo em breve`)
};

const ru_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · скоро истечёт срок`)
};

const sv_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · förfaller snart`)
};

const tr_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · süresi dolmak üzere`)
};

const zh_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · 即将到期`)
};

const ja_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · 期限間近`)
};

/**
* | output |
* | --- |
* | "{time} · due soon" |
*
* @param {Ranger_Sla_DueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sla_due = /** @type {((inputs: Ranger_Sla_DueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sla_DueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sla_due(inputs)
	if (locale === "de") return de_ranger_sla_due(inputs)
	if (locale === "fr") return fr_ranger_sla_due(inputs)
	if (locale === "it") return it_ranger_sla_due(inputs)
	if (locale === "nl") return nl_ranger_sla_due(inputs)
	if (locale === "pl") return pl_ranger_sla_due(inputs)
	if (locale === "pt") return pt_ranger_sla_due(inputs)
	if (locale === "ru") return ru_ranger_sla_due(inputs)
	if (locale === "sv") return sv_ranger_sla_due(inputs)
	if (locale === "tr") return tr_ranger_sla_due(inputs)
	if (locale === "zh") return zh_ranger_sla_due(inputs)
	if (locale === "ja") return ja_ranger_sla_due(inputs)
	return en_ranger_sla_due(inputs)
});
