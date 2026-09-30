/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Save_FailedInputs */

const en_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't save the jam`)
};

const es_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar el jam`)
};

const de_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam konnte nicht gespeichert werden`)
};

const fr_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d'enregistrer le jam`)
};

const it_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare il jam`)
};

const nl_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De jam kon niet worden opgeslagen`)
};

const pl_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać jamu`)
};

const pt_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar o jam`)
};

const ru_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить джем`)
};

const sv_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte spara jammen`)
};

const tr_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam kaydedilemedi`)
};

const zh_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存 Jam`)
};

const ja_jams_editor_save_failed = /** @type {(inputs: Jams_Editor_Save_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムを保存できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't save the jam" |
*
* @param {Jams_Editor_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_save_failed = /** @type {((inputs?: Jams_Editor_Save_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Save_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_save_failed(inputs)
	if (locale === "de") return de_jams_editor_save_failed(inputs)
	if (locale === "fr") return fr_jams_editor_save_failed(inputs)
	if (locale === "it") return it_jams_editor_save_failed(inputs)
	if (locale === "nl") return nl_jams_editor_save_failed(inputs)
	if (locale === "pl") return pl_jams_editor_save_failed(inputs)
	if (locale === "pt") return pt_jams_editor_save_failed(inputs)
	if (locale === "ru") return ru_jams_editor_save_failed(inputs)
	if (locale === "sv") return sv_jams_editor_save_failed(inputs)
	if (locale === "tr") return tr_jams_editor_save_failed(inputs)
	if (locale === "zh") return zh_jams_editor_save_failed(inputs)
	if (locale === "ja") return ja_jams_editor_save_failed(inputs)
	return en_jams_editor_save_failed(inputs)
});
