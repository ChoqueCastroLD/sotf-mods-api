/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_FailedInputs */

const en_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't update the entry`)
};

const es_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo actualizar la participación`)
};

const de_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beitrag konnte nicht aktualisiert werden`)
};

const fr_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour la participation`)
};

const it_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare l'iscrizione`)
};

const nl_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De inzending kon niet worden bijgewerkt`)
};

const pl_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować zgłoszenia`)
};

const pt_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar a inscrição`)
};

const ru_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить работу`)
};

const sv_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte uppdatera bidraget`)
};

const tr_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru güncellenemedi`)
};

const zh_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更新作品`)
};

const ja_jams_entries_failed = /** @type {(inputs: Jams_Entries_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品を更新できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't update the entry" |
*
* @param {Jams_Entries_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_failed = /** @type {((inputs?: Jams_Entries_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_failed(inputs)
	if (locale === "de") return de_jams_entries_failed(inputs)
	if (locale === "fr") return fr_jams_entries_failed(inputs)
	if (locale === "it") return it_jams_entries_failed(inputs)
	if (locale === "nl") return nl_jams_entries_failed(inputs)
	if (locale === "pl") return pl_jams_entries_failed(inputs)
	if (locale === "pt") return pt_jams_entries_failed(inputs)
	if (locale === "ru") return ru_jams_entries_failed(inputs)
	if (locale === "sv") return sv_jams_entries_failed(inputs)
	if (locale === "tr") return tr_jams_entries_failed(inputs)
	if (locale === "zh") return zh_jams_entries_failed(inputs)
	if (locale === "ja") return ja_jams_entries_failed(inputs)
	return en_jams_entries_failed(inputs)
});
