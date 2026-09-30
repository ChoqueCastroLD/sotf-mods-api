/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ start: NonNullable<unknown> }} Landing_Motw_PeriodInputs */

const en_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Week of ${i?.start}`)
};

const es_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Semana del ${i?.start}`)
};

const de_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Woche ab ${i?.start}`)
};

const fr_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Semaine du ${i?.start}`)
};

const it_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Settimana del ${i?.start}`)
};

const nl_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Week van ${i?.start}`)
};

const pl_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tydzień od ${i?.start}`)
};

const pt_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Semana de ${i?.start}`)
};

const ru_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Неделя с ${i?.start}`)
};

const sv_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Veckan från ${i?.start}`)
};

const tr_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} haftası`)
};

const zh_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} 当周`)
};

const ja_landing_motw_period = /** @type {(inputs: Landing_Motw_PeriodInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} の週`)
};

/**
* | output |
* | --- |
* | "Week of {start}" |
*
* @param {Landing_Motw_PeriodInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_motw_period = /** @type {((inputs: Landing_Motw_PeriodInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Motw_PeriodInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_motw_period(inputs)
	if (locale === "de") return de_landing_motw_period(inputs)
	if (locale === "fr") return fr_landing_motw_period(inputs)
	if (locale === "it") return it_landing_motw_period(inputs)
	if (locale === "nl") return nl_landing_motw_period(inputs)
	if (locale === "pl") return pl_landing_motw_period(inputs)
	if (locale === "pt") return pt_landing_motw_period(inputs)
	if (locale === "ru") return ru_landing_motw_period(inputs)
	if (locale === "sv") return sv_landing_motw_period(inputs)
	if (locale === "tr") return tr_landing_motw_period(inputs)
	if (locale === "zh") return zh_landing_motw_period(inputs)
	if (locale === "ja") return ja_landing_motw_period(inputs)
	return en_landing_motw_period(inputs)
});
