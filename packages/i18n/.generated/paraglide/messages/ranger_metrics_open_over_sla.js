/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ hours: NonNullable<unknown> }} Ranger_Metrics_Open_Over_SlaInputs */

const en_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Review lanes over ${i?.hours} h`)
};

const es_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Colas de revisión con más de ${i?.hours} h`)
};

const de_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prüfspuren über ${i?.hours} h`)
};

const fr_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Files de revue au-delà de ${i?.hours} h`)
};

const it_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Code di revisione oltre ${i?.hours} h`)
};

const nl_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beoordelingsbanen boven ${i?.hours} u`)
};

const pl_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kolejki weryfikacji ponad ${i?.hours} h`)
};

const pt_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filas de revisão acima de ${i?.hours} h`)
};

const ru_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В очередях проверки дольше ${i?.hours} ч`)
};

const sv_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Granskningsköer över ${i?.hours} h`)
};

const tr_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.hours} saati aşan inceleme kuyrukları`)
};

const zh_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`审核队列中超过 ${i?.hours} 小时`)
};

const ja_ranger_metrics_open_over_sla = /** @type {(inputs: Ranger_Metrics_Open_Over_SlaInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.hours} 時間超の審査待ち`)
};

/**
* | output |
* | --- |
* | "Review lanes over {hours} h" |
*
* @param {Ranger_Metrics_Open_Over_SlaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_metrics_open_over_sla = /** @type {((inputs: Ranger_Metrics_Open_Over_SlaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Metrics_Open_Over_SlaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_metrics_open_over_sla(inputs)
	if (locale === "de") return de_ranger_metrics_open_over_sla(inputs)
	if (locale === "fr") return fr_ranger_metrics_open_over_sla(inputs)
	if (locale === "it") return it_ranger_metrics_open_over_sla(inputs)
	if (locale === "nl") return nl_ranger_metrics_open_over_sla(inputs)
	if (locale === "pl") return pl_ranger_metrics_open_over_sla(inputs)
	if (locale === "pt") return pt_ranger_metrics_open_over_sla(inputs)
	if (locale === "ru") return ru_ranger_metrics_open_over_sla(inputs)
	if (locale === "sv") return sv_ranger_metrics_open_over_sla(inputs)
	if (locale === "tr") return tr_ranger_metrics_open_over_sla(inputs)
	if (locale === "zh") return zh_ranger_metrics_open_over_sla(inputs)
	if (locale === "ja") return ja_ranger_metrics_open_over_sla(inputs)
	return en_ranger_metrics_open_over_sla(inputs)
});
