/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Force_FailedInputs */

const en_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't change the phase`)
};

const es_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cambiar la fase`)
};

const de_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Phase konnte nicht geändert werden`)
};

const fr_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de changer la phase`)
};

const it_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile cambiare la fase`)
};

const nl_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De fase kon niet worden gewijzigd`)
};

const pl_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić fazy`)
};

const pt_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível mudar a fase`)
};

const ru_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сменить фазу`)
};

const sv_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte ändra fasen`)
};

const tr_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşama değiştirilemedi`)
};

const zh_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法切换阶段`)
};

const ja_jams_editor_force_failed = /** @type {(inputs: Jams_Editor_Force_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フェーズを変更できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't change the phase" |
*
* @param {Jams_Editor_Force_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_force_failed = /** @type {((inputs?: Jams_Editor_Force_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Force_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_force_failed(inputs)
	if (locale === "de") return de_jams_editor_force_failed(inputs)
	if (locale === "fr") return fr_jams_editor_force_failed(inputs)
	if (locale === "it") return it_jams_editor_force_failed(inputs)
	if (locale === "nl") return nl_jams_editor_force_failed(inputs)
	if (locale === "pl") return pl_jams_editor_force_failed(inputs)
	if (locale === "pt") return pt_jams_editor_force_failed(inputs)
	if (locale === "ru") return ru_jams_editor_force_failed(inputs)
	if (locale === "sv") return sv_jams_editor_force_failed(inputs)
	if (locale === "tr") return tr_jams_editor_force_failed(inputs)
	if (locale === "zh") return zh_jams_editor_force_failed(inputs)
	if (locale === "ja") return ja_jams_editor_force_failed(inputs)
	return en_jams_editor_force_failed(inputs)
});
