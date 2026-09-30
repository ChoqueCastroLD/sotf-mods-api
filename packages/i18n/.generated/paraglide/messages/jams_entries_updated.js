/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_UpdatedInputs */

const en_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entry updated.`)
};

const es_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participación actualizada.`)
};

const de_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beitrag aktualisiert.`)
};

const fr_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participation mise à jour.`)
};

const it_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizione aggiornata.`)
};

const nl_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzending bijgewerkt.`)
};

const pl_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie zaktualizowane.`)
};

const pt_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrição atualizada.`)
};

const ru_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работа обновлена.`)
};

const sv_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidraget uppdaterat.`)
};

const tr_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru güncellendi.`)
};

const zh_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品已更新。`)
};

const ja_jams_entries_updated = /** @type {(inputs: Jams_Entries_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品を更新しました。`)
};

/**
* | output |
* | --- |
* | "Entry updated." |
*
* @param {Jams_Entries_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_updated = /** @type {((inputs?: Jams_Entries_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_updated(inputs)
	if (locale === "de") return de_jams_entries_updated(inputs)
	if (locale === "fr") return fr_jams_entries_updated(inputs)
	if (locale === "it") return it_jams_entries_updated(inputs)
	if (locale === "nl") return nl_jams_entries_updated(inputs)
	if (locale === "pl") return pl_jams_entries_updated(inputs)
	if (locale === "pt") return pt_jams_entries_updated(inputs)
	if (locale === "ru") return ru_jams_entries_updated(inputs)
	if (locale === "sv") return sv_jams_entries_updated(inputs)
	if (locale === "tr") return tr_jams_entries_updated(inputs)
	if (locale === "zh") return zh_jams_entries_updated(inputs)
	if (locale === "ja") return ja_jams_entries_updated(inputs)
	return en_jams_entries_updated(inputs)
});
