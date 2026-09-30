/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Gone_ReadoutInputs */

const en_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trail closed · Removed for good`)
};

const es_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sendero cerrado · Retirado para siempre`)
};

const de_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pfad gesperrt · Endgültig entfernt`)
};

const fr_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sentier fermé · Retiré pour de bon`)
};

const it_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sentiero chiuso · Rimosso per sempre`)
};

const nl_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pad afgesloten · Definitief verwijderd`)
};

const pl_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szlak zamknięty · Usunięto na dobre`)
};

const pt_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trilha fechada · Removido de vez`)
};

const ru_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тропа закрыта · Удалено навсегда`)
};

const sv_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leden stängd · Borttaget för gott`)
};

const tr_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patika kapalı · Kalıcı olarak kaldırıldı`)
};

const zh_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小径已封闭 · 已永久移除`)
};

const ja_errors_gone_readout = /** @type {(inputs: Errors_Gone_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通行止め · 完全に削除済み`)
};

/**
* | output |
* | --- |
* | "Trail closed · Removed for good" |
*
* @param {Errors_Gone_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_gone_readout = /** @type {((inputs?: Errors_Gone_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Gone_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_gone_readout(inputs)
	if (locale === "de") return de_errors_gone_readout(inputs)
	if (locale === "fr") return fr_errors_gone_readout(inputs)
	if (locale === "it") return it_errors_gone_readout(inputs)
	if (locale === "nl") return nl_errors_gone_readout(inputs)
	if (locale === "pl") return pl_errors_gone_readout(inputs)
	if (locale === "pt") return pt_errors_gone_readout(inputs)
	if (locale === "ru") return ru_errors_gone_readout(inputs)
	if (locale === "sv") return sv_errors_gone_readout(inputs)
	if (locale === "tr") return tr_errors_gone_readout(inputs)
	if (locale === "zh") return zh_errors_gone_readout(inputs)
	if (locale === "ja") return ja_errors_gone_readout(inputs)
	return en_errors_gone_readout(inputs)
});
