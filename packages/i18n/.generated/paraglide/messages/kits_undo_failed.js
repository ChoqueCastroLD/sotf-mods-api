/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Undo_FailedInputs */

const en_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t undo.`)
};

const es_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido deshacer.`)
};

const de_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rückgängig machen fehlgeschlagen.`)
};

const fr_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’annuler.`)
};

const it_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile annullare.`)
};

const nl_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ongedaan maken mislukt.`)
};

const pl_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się cofnąć.`)
};

const pt_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível desfazer.`)
};

const ru_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось отменить.`)
};

const sv_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att ångra.`)
};

const tr_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri alınamadı.`)
};

const zh_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销失败。`)
};

const ja_kits_undo_failed = /** @type {(inputs: Kits_Undo_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元に戻せませんでした。`)
};

/**
* | output |
* | --- |
* | "Couldn’t undo." |
*
* @param {Kits_Undo_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_undo_failed = /** @type {((inputs?: Kits_Undo_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Undo_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_undo_failed(inputs)
	if (locale === "de") return de_kits_undo_failed(inputs)
	if (locale === "fr") return fr_kits_undo_failed(inputs)
	if (locale === "it") return it_kits_undo_failed(inputs)
	if (locale === "nl") return nl_kits_undo_failed(inputs)
	if (locale === "pl") return pl_kits_undo_failed(inputs)
	if (locale === "pt") return pt_kits_undo_failed(inputs)
	if (locale === "ru") return ru_kits_undo_failed(inputs)
	if (locale === "sv") return sv_kits_undo_failed(inputs)
	if (locale === "tr") return tr_kits_undo_failed(inputs)
	if (locale === "zh") return zh_kits_undo_failed(inputs)
	if (locale === "ja") return ja_kits_undo_failed(inputs)
	return en_kits_undo_failed(inputs)
});
