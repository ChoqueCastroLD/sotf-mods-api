/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_SavedInputs */

const en_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saved`)
};

const es_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardado`)
};

const de_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gespeichert`)
};

const fr_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistré`)
};

const it_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvato`)
};

const nl_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgeslagen`)
};

const pl_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano`)
};

const pt_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvo`)
};

const ru_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранено`)
};

const sv_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparat`)
};

const tr_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedildi`)
};

const zh_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已保存`)
};

const ja_jams_booth_saved = /** @type {(inputs: Jams_Booth_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存しました`)
};

/**
* | output |
* | --- |
* | "Saved" |
*
* @param {Jams_Booth_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_saved = /** @type {((inputs?: Jams_Booth_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_saved(inputs)
	if (locale === "de") return de_jams_booth_saved(inputs)
	if (locale === "fr") return fr_jams_booth_saved(inputs)
	if (locale === "it") return it_jams_booth_saved(inputs)
	if (locale === "nl") return nl_jams_booth_saved(inputs)
	if (locale === "pl") return pl_jams_booth_saved(inputs)
	if (locale === "pt") return pt_jams_booth_saved(inputs)
	if (locale === "ru") return ru_jams_booth_saved(inputs)
	if (locale === "sv") return sv_jams_booth_saved(inputs)
	if (locale === "tr") return tr_jams_booth_saved(inputs)
	if (locale === "zh") return zh_jams_booth_saved(inputs)
	if (locale === "ja") return ja_jams_booth_saved(inputs)
	return en_jams_booth_saved(inputs)
});
