/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ revision: NonNullable<unknown> }} Kits_SavedInputs */

const en_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saved · rev ${i?.revision}`)
};

const es_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Guardado · rev. ${i?.revision}`)
};

const de_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gespeichert · Rev. ${i?.revision}`)
};

const fr_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enregistré · rév. ${i?.revision}`)
};

const it_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Salvato · rev. ${i?.revision}`)
};

const nl_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opgeslagen · rev. ${i?.revision}`)
};

const pl_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zapisano · wer. ${i?.revision}`)
};

const pt_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Salvo · rev. ${i?.revision}`)
};

const ru_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сохранено · ред. ${i?.revision}`)
};

const sv_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sparat · rev. ${i?.revision}`)
};

const tr_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kaydedildi · rev. ${i?.revision}`)
};

const zh_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已保存 · 第 ${i?.revision} 版`)
};

const ja_kits_saved = /** @type {(inputs: Kits_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`保存済み · rev. ${i?.revision}`)
};

/**
* | output |
* | --- |
* | "Saved · rev {revision}" |
*
* @param {Kits_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_saved = /** @type {((inputs: Kits_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_saved(inputs)
	if (locale === "de") return de_kits_saved(inputs)
	if (locale === "fr") return fr_kits_saved(inputs)
	if (locale === "it") return it_kits_saved(inputs)
	if (locale === "nl") return nl_kits_saved(inputs)
	if (locale === "pl") return pl_kits_saved(inputs)
	if (locale === "pt") return pt_kits_saved(inputs)
	if (locale === "ru") return ru_kits_saved(inputs)
	if (locale === "sv") return sv_kits_saved(inputs)
	if (locale === "tr") return tr_kits_saved(inputs)
	if (locale === "zh") return zh_kits_saved(inputs)
	if (locale === "ja") return ja_kits_saved(inputs)
	return en_kits_saved(inputs)
});
