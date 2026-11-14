/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Incompatible_FailedInputs */

const en_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not save the incompatible mods.`)
};

const es_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron guardar los mods incompatibles.`)
};

const de_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkompatible Mods konnten nicht gespeichert werden.`)
};

const fr_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’enregistrer les mods incompatibles.`)
};

const it_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare i mod incompatibili.`)
};

const nl_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de incompatibele mods niet opslaan.`)
};

const pl_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać niezgodnych modów.`)
};

const pt_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar os mods incompatíveis.`)
};

const ru_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить несовместимые моды.`)
};

const sv_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att spara de inkompatibla moddarna.`)
};

const tr_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumsuz modlar kaydedilemedi.`)
};

const zh_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存不兼容的模组。`)
};

const ja_basecamp_compat_incompatible_failed = /** @type {(inputs: Basecamp_Compat_Incompatible_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性のないModを保存できませんでした。`)
};

/**
* | output |
* | --- |
* | "Could not save the incompatible mods." |
*
* @param {Basecamp_Compat_Incompatible_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_failed = /** @type {((inputs?: Basecamp_Compat_Incompatible_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_failed(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_failed(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_failed(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_failed(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_failed(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_failed(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_failed(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_failed(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_failed(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_failed(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_failed(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_failed(inputs)
	return en_basecamp_compat_incompatible_failed(inputs)
});
