/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Incompatible_SavedInputs */

const en_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incompatible mods saved.`)
};

const es_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods incompatibles guardados.`)
};

const de_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkompatible Mods gespeichert.`)
};

const fr_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods incompatibles enregistrés.`)
};

const it_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod incompatibili salvati.`)
};

const nl_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incompatibele mods opgeslagen.`)
};

const pl_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano niezgodne mody.`)
};

const pt_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods incompatíveis salvos.`)
};

const ru_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Несовместимые моды сохранены.`)
};

const sv_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkompatibla moddar sparade.`)
};

const tr_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumsuz modlar kaydedildi.`)
};

const zh_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已保存不兼容的模组。`)
};

const ja_basecamp_compat_incompatible_saved = /** @type {(inputs: Basecamp_Compat_Incompatible_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性のないModを保存しました。`)
};

/**
* | output |
* | --- |
* | "Incompatible mods saved." |
*
* @param {Basecamp_Compat_Incompatible_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_saved = /** @type {((inputs?: Basecamp_Compat_Incompatible_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_saved(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_saved(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_saved(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_saved(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_saved(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_saved(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_saved(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_saved(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_saved(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_saved(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_saved(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_saved(inputs)
	return en_basecamp_compat_incompatible_saved(inputs)
});
