/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Ranger_Sla_DueInputs */

const en_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA due soon`)
};

const es_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA a punto de vencer`)
};

const de_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA läuft bald ab`)
};

const fr_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA bientôt dépassé`)
};

const it_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA in scadenza`)
};

const nl_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA verloopt bijna`)
};

const pl_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA wkrótce minie`)
};

const pt_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA vencendo`)
};

const ru_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA скоро истечёт`)
};

const sv_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA löper snart ut`)
};

const tr_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA dolmak üzere`)
};

const zh_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA 即将到期`)
};

const ja_ranger_sla_due = /** @type {(inputs: Ranger_Sla_DueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA 期限間近`)
};

/**
* | output |
* | --- |
* | "{time} · SLA due soon" |
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
