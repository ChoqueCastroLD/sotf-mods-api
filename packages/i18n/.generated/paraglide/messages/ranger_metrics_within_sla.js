/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ hours: NonNullable<unknown> }} Ranger_Metrics_Within_SlaInputs */

const en_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Decided within ${i?.hours} h`)
};

const es_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Decididos en menos de ${i?.hours} h`)
};

const de_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Innerhalb von ${i?.hours} h entschieden`)
};

const fr_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Décidés en moins de ${i?.hours} h`)
};

const it_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Decisi entro ${i?.hours} h`)
};

const nl_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Binnen ${i?.hours} u beslist`)
};

const pl_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rozpatrzone w ${i?.hours} h`)
};

const pt_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Decididos em até ${i?.hours} h`)
};

const ru_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Решено за ${i?.hours} ч`)
};

const sv_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beslutade inom ${i?.hours} h`)
};

const tr_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.hours} saat içinde karar verilen`)
};

const zh_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.hours} 小时内处理`)
};

const ja_ranger_metrics_within_sla = /** @type {(inputs: Ranger_Metrics_Within_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.hours} 時間以内に判断`)
};

/**
* | output |
* | --- |
* | "Decided within {hours} h" |
*
* @param {Ranger_Metrics_Within_SlaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_metrics_within_sla = /** @type {((inputs: Ranger_Metrics_Within_SlaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Metrics_Within_SlaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_metrics_within_sla(inputs)
	if (locale === "de") return de_ranger_metrics_within_sla(inputs)
	if (locale === "fr") return fr_ranger_metrics_within_sla(inputs)
	if (locale === "it") return it_ranger_metrics_within_sla(inputs)
	if (locale === "nl") return nl_ranger_metrics_within_sla(inputs)
	if (locale === "pl") return pl_ranger_metrics_within_sla(inputs)
	if (locale === "pt") return pt_ranger_metrics_within_sla(inputs)
	if (locale === "ru") return ru_ranger_metrics_within_sla(inputs)
	if (locale === "sv") return sv_ranger_metrics_within_sla(inputs)
	if (locale === "tr") return tr_ranger_metrics_within_sla(inputs)
	if (locale === "zh") return zh_ranger_metrics_within_sla(inputs)
	if (locale === "ja") return ja_ranger_metrics_within_sla(inputs)
	return en_ranger_metrics_within_sla(inputs)
});
