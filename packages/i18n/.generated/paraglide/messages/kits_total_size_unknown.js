/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Total_Size_UnknownInputs */

const en_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total size not measured yet`)
};

const es_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamaño total aún sin medir`)
};

const de_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesamtgröße noch nicht gemessen`)
};

const fr_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taille totale pas encore mesurée`)
};

const it_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensione totale non ancora misurata`)
};

const nl_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totale grootte nog niet gemeten`)
};

const pl_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łączny rozmiar nie został jeszcze zmierzony`)
};

const pt_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamanho total ainda não medido`)
};

const ru_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общий размер ещё не измерен`)
};

const sv_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Total storlek inte uppmätt än`)
};

const tr_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toplam boyut henüz ölçülmedi`)
};

const zh_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`总大小尚未统计`)
};

const ja_kits_total_size_unknown = /** @type {(inputs: Kits_Total_Size_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`合計サイズはまだ計測されていません`)
};

/**
* | output |
* | --- |
* | "Total size not measured yet" |
*
* @param {Kits_Total_Size_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_total_size_unknown = /** @type {((inputs?: Kits_Total_Size_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Total_Size_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_total_size_unknown(inputs)
	if (locale === "de") return de_kits_total_size_unknown(inputs)
	if (locale === "fr") return fr_kits_total_size_unknown(inputs)
	if (locale === "it") return it_kits_total_size_unknown(inputs)
	if (locale === "nl") return nl_kits_total_size_unknown(inputs)
	if (locale === "pl") return pl_kits_total_size_unknown(inputs)
	if (locale === "pt") return pt_kits_total_size_unknown(inputs)
	if (locale === "ru") return ru_kits_total_size_unknown(inputs)
	if (locale === "sv") return sv_kits_total_size_unknown(inputs)
	if (locale === "tr") return tr_kits_total_size_unknown(inputs)
	if (locale === "zh") return zh_kits_total_size_unknown(inputs)
	if (locale === "ja") return ja_kits_total_size_unknown(inputs)
	return en_kits_total_size_unknown(inputs)
});
