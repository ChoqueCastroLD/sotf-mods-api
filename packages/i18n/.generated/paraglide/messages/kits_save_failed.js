/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Save_FailedInputs */

const en_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not saved.`)
};

const es_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha guardado.`)
};

const de_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gespeichert.`)
};

const fr_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non enregistré.`)
};

const it_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non salvato.`)
};

const nl_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet opgeslagen.`)
};

const pl_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie zapisano.`)
};

const pt_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não salvo.`)
};

const ru_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не сохранено.`)
};

const sv_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte sparat.`)
};

const tr_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydedilmedi.`)
};

const zh_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未保存。`)
};

const ja_kits_save_failed = /** @type {(inputs: Kits_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存されていません。`)
};

/**
* | output |
* | --- |
* | "Not saved." |
*
* @param {Kits_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_save_failed = /** @type {((inputs?: Kits_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_save_failed(inputs)
	if (locale === "de") return de_kits_save_failed(inputs)
	if (locale === "fr") return fr_kits_save_failed(inputs)
	if (locale === "it") return it_kits_save_failed(inputs)
	if (locale === "nl") return nl_kits_save_failed(inputs)
	if (locale === "pl") return pl_kits_save_failed(inputs)
	if (locale === "pt") return pt_kits_save_failed(inputs)
	if (locale === "ru") return ru_kits_save_failed(inputs)
	if (locale === "sv") return sv_kits_save_failed(inputs)
	if (locale === "tr") return tr_kits_save_failed(inputs)
	if (locale === "zh") return zh_kits_save_failed(inputs)
	if (locale === "ja") return ja_kits_save_failed(inputs)
	return en_kits_save_failed(inputs)
});
