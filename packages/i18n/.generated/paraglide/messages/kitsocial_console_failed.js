/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Console_FailedInputs */

const en_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This follow could not be updated.`)
};

const es_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo actualizar este seguimiento.`)
};

const de_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Follow konnte nicht aktualisiert werden.`)
};

const fr_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour ce suivi.`)
};

const it_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare questo follow.`)
};

const nl_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze volgstatus kon niet worden bijgewerkt.`)
};

const pl_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować tego obserwowania.`)
};

const pt_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar este seguimento.`)
};

const ru_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить эту подписку.`)
};

const sv_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här följningen kunde inte uppdateras.`)
};

const tr_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu takip güncellenemedi.`)
};

const zh_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更新此关注。`)
};

const ja_kitsocial_console_failed = /** @type {(inputs: Kitsocial_Console_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このフォローを更新できませんでした。`)
};

/**
* | output |
* | --- |
* | "This follow could not be updated." |
*
* @param {Kitsocial_Console_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_failed = /** @type {((inputs?: Kitsocial_Console_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_failed(inputs)
	if (locale === "de") return de_kitsocial_console_failed(inputs)
	if (locale === "fr") return fr_kitsocial_console_failed(inputs)
	if (locale === "it") return it_kitsocial_console_failed(inputs)
	if (locale === "nl") return nl_kitsocial_console_failed(inputs)
	if (locale === "pl") return pl_kitsocial_console_failed(inputs)
	if (locale === "pt") return pt_kitsocial_console_failed(inputs)
	if (locale === "ru") return ru_kitsocial_console_failed(inputs)
	if (locale === "sv") return sv_kitsocial_console_failed(inputs)
	if (locale === "tr") return tr_kitsocial_console_failed(inputs)
	if (locale === "zh") return zh_kitsocial_console_failed(inputs)
	if (locale === "ja") return ja_kitsocial_console_failed(inputs)
	return en_kitsocial_console_failed(inputs)
});
