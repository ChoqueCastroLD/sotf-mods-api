/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Delete_FailedInputs */

const en_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not delete the log.`)
};

const es_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo borrar el log.`)
};

const de_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Log konnte nicht gelöscht werden.`)
};

const fr_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de supprimer le log.`)
};

const it_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile eliminare il log.`)
};

const nl_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De log kon niet worden verwijderd.`)
};

const pl_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się usunąć logu.`)
};

const pt_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível apagar o log.`)
};

const ru_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось удалить лог.`)
};

const sv_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loggen kunde inte raderas.`)
};

const tr_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log silinemedi.`)
};

const zh_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法删除日志。`)
};

const ja_logs_delete_failed = /** @type {(inputs: Logs_Delete_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを削除できませんでした。`)
};

/**
* | output |
* | --- |
* | "Could not delete the log." |
*
* @param {Logs_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_delete_failed = /** @type {((inputs?: Logs_Delete_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Delete_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_delete_failed(inputs)
	if (locale === "de") return de_logs_delete_failed(inputs)
	if (locale === "fr") return fr_logs_delete_failed(inputs)
	if (locale === "it") return it_logs_delete_failed(inputs)
	if (locale === "nl") return nl_logs_delete_failed(inputs)
	if (locale === "pl") return pl_logs_delete_failed(inputs)
	if (locale === "pt") return pt_logs_delete_failed(inputs)
	if (locale === "ru") return ru_logs_delete_failed(inputs)
	if (locale === "sv") return sv_logs_delete_failed(inputs)
	if (locale === "tr") return tr_logs_delete_failed(inputs)
	if (locale === "zh") return zh_logs_delete_failed(inputs)
	if (locale === "ja") return ja_logs_delete_failed(inputs)
	return en_logs_delete_failed(inputs)
});
