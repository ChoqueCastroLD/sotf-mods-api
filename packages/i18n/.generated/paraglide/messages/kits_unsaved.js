/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_UnsavedInputs */

const en_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsaved changes`)
};

const es_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambios sin guardar`)
};

const de_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ungespeicherte Änderungen`)
};

const fr_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifications non enregistrées`)
};

const it_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifiche non salvate`)
};

const nl_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet-opgeslagen wijzigingen`)
};

const pl_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niezapisane zmiany`)
};

const pt_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterações não salvas`)
};

const ru_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Несохранённые изменения`)
};

const sv_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Osparade ändringar`)
};

const tr_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilmemiş değişiklikler`)
};

const zh_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有未保存的更改`)
};

const ja_kits_unsaved = /** @type {(inputs: Kits_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存の変更`)
};

/**
* | output |
* | --- |
* | "Unsaved changes" |
*
* @param {Kits_UnsavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_unsaved = /** @type {((inputs?: Kits_UnsavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_UnsavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_unsaved(inputs)
	if (locale === "de") return de_kits_unsaved(inputs)
	if (locale === "fr") return fr_kits_unsaved(inputs)
	if (locale === "it") return it_kits_unsaved(inputs)
	if (locale === "nl") return nl_kits_unsaved(inputs)
	if (locale === "pl") return pl_kits_unsaved(inputs)
	if (locale === "pt") return pt_kits_unsaved(inputs)
	if (locale === "ru") return ru_kits_unsaved(inputs)
	if (locale === "sv") return sv_kits_unsaved(inputs)
	if (locale === "tr") return tr_kits_unsaved(inputs)
	if (locale === "zh") return zh_kits_unsaved(inputs)
	if (locale === "ja") return ja_kits_unsaved(inputs)
	return en_kits_unsaved(inputs)
});
