/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, threshold: NonNullable<unknown> }} Signals_MilestoneInputs */

const en_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("en", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} passed ${threshold__number} downloads`)
};

const es_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("es", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} ha superado las ${threshold__number} descargas`)
};

const de_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("de", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} hat ${threshold__number} Downloads überschritten`)
};

const fr_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("fr", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} a dépassé les ${threshold__number} téléchargements`)
};

const it_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("it", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} ha superato ${threshold__number} download`)
};

const nl_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("nl", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} is de ${threshold__number} downloads gepasseerd`)
};

const pl_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("pl", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} przekroczył ${threshold__number} pobrań`)
};

const pt_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("pt", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} passou de ${threshold__number} downloads`)
};

const ru_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("ru", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} преодолел отметку в ${threshold__number} загрузок`)
};

const sv_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("sv", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} har passerat ${threshold__number} nedladdningar`)
};

const tr_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("tr", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod}, ${threshold__number} indirmeyi geçti`)
};

const zh_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("zh", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} 的下载量突破了 ${threshold__number}`)
};

const ja_signals_milestone = /** @type {(inputs: Signals_MilestoneInputs) => LocalizedString} */ (i) => {
	const threshold__number = registry.number("ja", i?.threshold, {});return /** @type {LocalizedString} */ (`${i?.mod} のダウンロード数が ${threshold__number} を突破しました`)
};

/**
* | output |
* | --- |
* | "{mod} passed {threshold__number} downloads" |
*
* @param {Signals_MilestoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_milestone = /** @type {((inputs: Signals_MilestoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_MilestoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_milestone(inputs)
	if (locale === "de") return de_signals_milestone(inputs)
	if (locale === "fr") return fr_signals_milestone(inputs)
	if (locale === "it") return it_signals_milestone(inputs)
	if (locale === "nl") return nl_signals_milestone(inputs)
	if (locale === "pl") return pl_signals_milestone(inputs)
	if (locale === "pt") return pt_signals_milestone(inputs)
	if (locale === "ru") return ru_signals_milestone(inputs)
	if (locale === "sv") return sv_signals_milestone(inputs)
	if (locale === "tr") return tr_signals_milestone(inputs)
	if (locale === "zh") return zh_signals_milestone(inputs)
	if (locale === "ja") return ja_signals_milestone(inputs)
	return en_signals_milestone(inputs)
});
