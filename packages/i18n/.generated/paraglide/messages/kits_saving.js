/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_SavingInputs */

const en_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving…`)
};

const es_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardando…`)
};

const de_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird gespeichert …`)
};

const fr_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrement…`)
};

const it_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvataggio…`)
};

const nl_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opslaan…`)
};

const pl_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisywanie…`)
};

const pt_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvando…`)
};

const ru_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранение…`)
};

const sv_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sparar …`)
};

const tr_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydediliyor…`)
};

const zh_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在保存…`)
};

const ja_kits_saving = /** @type {(inputs: Kits_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中…`)
};

/**
* | output |
* | --- |
* | "Saving…" |
*
* @param {Kits_SavingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_saving = /** @type {((inputs?: Kits_SavingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_SavingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_saving(inputs)
	if (locale === "de") return de_kits_saving(inputs)
	if (locale === "fr") return fr_kits_saving(inputs)
	if (locale === "it") return it_kits_saving(inputs)
	if (locale === "nl") return nl_kits_saving(inputs)
	if (locale === "pl") return pl_kits_saving(inputs)
	if (locale === "pt") return pt_kits_saving(inputs)
	if (locale === "ru") return ru_kits_saving(inputs)
	if (locale === "sv") return sv_kits_saving(inputs)
	if (locale === "tr") return tr_kits_saving(inputs)
	if (locale === "zh") return zh_kits_saving(inputs)
	if (locale === "ja") return ja_kits_saving(inputs)
	return en_kits_saving(inputs)
});
