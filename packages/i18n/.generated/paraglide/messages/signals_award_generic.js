/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Signals_Award_GenericInputs */

const en_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} won an award`)
};

const es_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ha ganado un premio`)
};

const de_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} hat eine Auszeichnung gewonnen`)
};

const fr_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} a remporté une distinction`)
};

const it_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ha vinto un premio`)
};

const nl_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} heeft een prijs gewonnen`)
};

const pl_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} zdobył nagrodę`)
};

const pt_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ganhou um prêmio`)
};

const ru_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} получил награду`)
};

const sv_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} har vunnit ett pris`)
};

const tr_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} bir ödül kazandı`)
};

const zh_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 获得了奖项`)
};

const ja_signals_award_generic = /** @type {(inputs: Signals_Award_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} が賞を獲得しました`)
};

/**
* | output |
* | --- |
* | "{mod} won an award" |
*
* @param {Signals_Award_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_award_generic = /** @type {((inputs: Signals_Award_GenericInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Award_GenericInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_award_generic(inputs)
	if (locale === "de") return de_signals_award_generic(inputs)
	if (locale === "fr") return fr_signals_award_generic(inputs)
	if (locale === "it") return it_signals_award_generic(inputs)
	if (locale === "nl") return nl_signals_award_generic(inputs)
	if (locale === "pl") return pl_signals_award_generic(inputs)
	if (locale === "pt") return pt_signals_award_generic(inputs)
	if (locale === "ru") return ru_signals_award_generic(inputs)
	if (locale === "sv") return sv_signals_award_generic(inputs)
	if (locale === "tr") return tr_signals_award_generic(inputs)
	if (locale === "zh") return zh_signals_award_generic(inputs)
	if (locale === "ja") return ja_signals_award_generic(inputs)
	return en_signals_award_generic(inputs)
});
