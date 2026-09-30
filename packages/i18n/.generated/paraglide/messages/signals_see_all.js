/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_See_AllInputs */

const en_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See all signals`)
};

const es_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todas las señales`)
};

const de_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Signale ansehen`)
};

const fr_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir tous les signaux`)
};

const it_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi tutti i segnali`)
};

const nl_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle signalen bekijken`)
};

const pl_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz wszystkie sygnały`)
};

const pt_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todos os sinais`)
};

const ru_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все сигналы`)
};

const sv_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alla signaler`)
};

const tr_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm sinyalleri gör`)
};

const zh_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看全部信号`)
};

const ja_signals_see_all = /** @type {(inputs: Signals_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのシグナルを見る`)
};

/**
* | output |
* | --- |
* | "See all signals" |
*
* @param {Signals_See_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_see_all = /** @type {((inputs?: Signals_See_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_See_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_see_all(inputs)
	if (locale === "de") return de_signals_see_all(inputs)
	if (locale === "fr") return fr_signals_see_all(inputs)
	if (locale === "it") return it_signals_see_all(inputs)
	if (locale === "nl") return nl_signals_see_all(inputs)
	if (locale === "pl") return pl_signals_see_all(inputs)
	if (locale === "pt") return pt_signals_see_all(inputs)
	if (locale === "ru") return ru_signals_see_all(inputs)
	if (locale === "sv") return sv_signals_see_all(inputs)
	if (locale === "tr") return tr_signals_see_all(inputs)
	if (locale === "zh") return zh_signals_see_all(inputs)
	if (locale === "ja") return ja_signals_see_all(inputs)
	return en_signals_see_all(inputs)
});
