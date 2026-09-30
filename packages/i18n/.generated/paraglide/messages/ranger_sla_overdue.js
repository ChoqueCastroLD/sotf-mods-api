/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Ranger_Sla_OverdueInputs */

const en_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · over SLA`)
};

const es_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA vencido`)
};

const de_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA überschritten`)
};

const fr_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA dépassé`)
};

const it_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA superato`)
};

const nl_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA verlopen`)
};

const pl_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA przekroczone`)
};

const pt_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA vencido`)
};

const ru_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA нарушен`)
};

const sv_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA överskridet`)
};

const tr_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA aşıldı`)
};

const zh_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · 已超出 SLA`)
};

const ja_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · SLA 超過`)
};

/**
* | output |
* | --- |
* | "{time} · over SLA" |
*
* @param {Ranger_Sla_OverdueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sla_overdue = /** @type {((inputs: Ranger_Sla_OverdueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sla_OverdueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sla_overdue(inputs)
	if (locale === "de") return de_ranger_sla_overdue(inputs)
	if (locale === "fr") return fr_ranger_sla_overdue(inputs)
	if (locale === "it") return it_ranger_sla_overdue(inputs)
	if (locale === "nl") return nl_ranger_sla_overdue(inputs)
	if (locale === "pl") return pl_ranger_sla_overdue(inputs)
	if (locale === "pt") return pt_ranger_sla_overdue(inputs)
	if (locale === "ru") return ru_ranger_sla_overdue(inputs)
	if (locale === "sv") return sv_ranger_sla_overdue(inputs)
	if (locale === "tr") return tr_ranger_sla_overdue(inputs)
	if (locale === "zh") return zh_ranger_sla_overdue(inputs)
	if (locale === "ja") return ja_ranger_sla_overdue(inputs)
	return en_ranger_sla_overdue(inputs)
});
