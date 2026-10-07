/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ percent: NonNullable<unknown> }} Basecamp_Kpi_Delta_DownInputs */

const en_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Down ${i?.percent} on the previous period`)
};

const es_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} menos que el periodo anterior`)
};

const de_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} weniger als im Vorzeitraum`)
};

const fr_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En baisse de ${i?.percent} par rapport à la période précédente`)
};

const it_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`In calo del ${i?.percent} rispetto al periodo precedente`)
};

const nl_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} minder dan de vorige periode`)
};

const pl_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O ${i?.percent} mniej niż w poprzednim okresie`)
};

const pt_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Queda de ${i?.percent} em relação ao período anterior`)
};

const ru_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`На ${i?.percent} меньше, чем в прошлом периоде`)
};

const sv_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} lägre än föregående period`)
};

const tr_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Önceki döneme göre ${i?.percent} düşüş`)
};

const zh_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`比上一周期减少 ${i?.percent}`)
};

const ja_basecamp_kpi_delta_down = /** @type {(inputs: Basecamp_Kpi_Delta_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`前の期間より ${i?.percent} 減少`)
};

/**
* | output |
* | --- |
* | "Down {percent} on the previous period" |
*
* @param {Basecamp_Kpi_Delta_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_delta_down = /** @type {((inputs: Basecamp_Kpi_Delta_DownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Delta_DownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_delta_down(inputs)
	if (locale === "de") return de_basecamp_kpi_delta_down(inputs)
	if (locale === "fr") return fr_basecamp_kpi_delta_down(inputs)
	if (locale === "it") return it_basecamp_kpi_delta_down(inputs)
	if (locale === "nl") return nl_basecamp_kpi_delta_down(inputs)
	if (locale === "pl") return pl_basecamp_kpi_delta_down(inputs)
	if (locale === "pt") return pt_basecamp_kpi_delta_down(inputs)
	if (locale === "ru") return ru_basecamp_kpi_delta_down(inputs)
	if (locale === "sv") return sv_basecamp_kpi_delta_down(inputs)
	if (locale === "tr") return tr_basecamp_kpi_delta_down(inputs)
	if (locale === "zh") return zh_basecamp_kpi_delta_down(inputs)
	if (locale === "ja") return ja_basecamp_kpi_delta_down(inputs)
	return en_basecamp_kpi_delta_down(inputs)
});
