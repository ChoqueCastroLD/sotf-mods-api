/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Booth_SavingInputs */

const en_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving…`)
};

const es_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardando…`)
};

const de_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichern …`)
};

const fr_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrement…`)
};

const it_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvataggio…`)
};

const nl_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opslaan…`)
};

const pl_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisywanie…`)
};

const pt_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvando…`)
};

const ru_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранение…`)
};

const sv_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparar …`)
};

const tr_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydediliyor…`)
};

const zh_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在保存…`)
};

const ja_jams_booth_saving = /** @type {(inputs: Jams_Booth_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中…`)
};

/**
* | output |
* | --- |
* | "Saving…" |
*
* @param {Jams_Booth_SavingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_booth_saving = /** @type {((inputs?: Jams_Booth_SavingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Booth_SavingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_booth_saving(inputs)
	if (locale === "de") return de_jams_booth_saving(inputs)
	if (locale === "fr") return fr_jams_booth_saving(inputs)
	if (locale === "it") return it_jams_booth_saving(inputs)
	if (locale === "nl") return nl_jams_booth_saving(inputs)
	if (locale === "pl") return pl_jams_booth_saving(inputs)
	if (locale === "pt") return pt_jams_booth_saving(inputs)
	if (locale === "ru") return ru_jams_booth_saving(inputs)
	if (locale === "sv") return sv_jams_booth_saving(inputs)
	if (locale === "tr") return tr_jams_booth_saving(inputs)
	if (locale === "zh") return zh_jams_booth_saving(inputs)
	if (locale === "ja") return ja_jams_booth_saving(inputs)
	return en_jams_booth_saving(inputs)
});
