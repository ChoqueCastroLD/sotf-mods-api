/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Ranger_Sla_OverdueInputs */

const en_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · overdue`)
};

const es_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · vencido`)
};

const de_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · überfällig`)
};

const fr_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · en retard`)
};

const it_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · scaduto`)
};

const nl_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · verlopen`)
};

const pl_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · po terminie`)
};

const pt_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · atrasado`)
};

const ru_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · просрочено`)
};

const sv_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · försenat`)
};

const tr_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · gecikti`)
};

const zh_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · 已逾期`)
};

const ja_ranger_sla_overdue = /** @type {(inputs: Ranger_Sla_OverdueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} · 期限超過`)
};

/**
* | output |
* | --- |
* | "{time} · overdue" |
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
