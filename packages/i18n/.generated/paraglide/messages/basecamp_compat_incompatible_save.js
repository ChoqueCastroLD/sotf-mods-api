/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Incompatible_SaveInputs */

const en_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save incompatible mods`)
};

const es_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar mods incompatibles`)
};

const de_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkompatible Mods speichern`)
};

const fr_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer les mods incompatibles`)
};

const it_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva mod incompatibili`)
};

const nl_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incompatibele mods opslaan`)
};

const pl_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz niezgodne mody`)
};

const pt_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar mods incompatíveis`)
};

const ru_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить несовместимые моды`)
};

const sv_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara inkompatibla moddar`)
};

const tr_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumsuz modları kaydet`)
};

const zh_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存不兼容的模组`)
};

const ja_basecamp_compat_incompatible_save = /** @type {(inputs: Basecamp_Compat_Incompatible_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性のないModを保存`)
};

/**
* | output |
* | --- |
* | "Save incompatible mods" |
*
* @param {Basecamp_Compat_Incompatible_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_save = /** @type {((inputs?: Basecamp_Compat_Incompatible_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_save(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_save(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_save(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_save(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_save(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_save(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_save(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_save(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_save(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_save(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_save(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_save(inputs)
	return en_basecamp_compat_incompatible_save(inputs)
});
