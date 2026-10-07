/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kpi_Delta_FlatInputs */

const en_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No change on the previous period`)
};

const es_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin cambios respecto al periodo anterior`)
};

const de_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unverändert zum Vorzeitraum`)
};

const fr_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stable par rapport à la période précédente`)
};

const it_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invariato rispetto al periodo precedente`)
};

const nl_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongewijzigd ten opzichte van de vorige periode`)
};

const pl_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez zmian względem poprzedniego okresu`)
};

const pt_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem alteração em relação ao período anterior`)
};

const ru_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без изменений по сравнению с прошлым периодом`)
};

const sv_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oförändrat sedan föregående period`)
};

const tr_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki döneme göre değişiklik yok`)
};

const zh_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与上一周期持平`)
};

const ja_basecamp_kpi_delta_flat = /** @type {(inputs: Basecamp_Kpi_Delta_FlatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前の期間から変化なし`)
};

/**
* | output |
* | --- |
* | "No change on the previous period" |
*
* @param {Basecamp_Kpi_Delta_FlatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_delta_flat = /** @type {((inputs?: Basecamp_Kpi_Delta_FlatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Delta_FlatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_delta_flat(inputs)
	if (locale === "de") return de_basecamp_kpi_delta_flat(inputs)
	if (locale === "fr") return fr_basecamp_kpi_delta_flat(inputs)
	if (locale === "it") return it_basecamp_kpi_delta_flat(inputs)
	if (locale === "nl") return nl_basecamp_kpi_delta_flat(inputs)
	if (locale === "pl") return pl_basecamp_kpi_delta_flat(inputs)
	if (locale === "pt") return pt_basecamp_kpi_delta_flat(inputs)
	if (locale === "ru") return ru_basecamp_kpi_delta_flat(inputs)
	if (locale === "sv") return sv_basecamp_kpi_delta_flat(inputs)
	if (locale === "tr") return tr_basecamp_kpi_delta_flat(inputs)
	if (locale === "zh") return zh_basecamp_kpi_delta_flat(inputs)
	if (locale === "ja") return ja_basecamp_kpi_delta_flat(inputs)
	return en_basecamp_kpi_delta_flat(inputs)
});
