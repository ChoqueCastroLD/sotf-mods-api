/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Err_ArchiveInputs */

const en_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not read that archive.`)
};

const es_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo leer ese archivo comprimido.`)
};

const de_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Archiv konnte nicht gelesen werden.`)
};

const fr_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de lire cette archive.`)
};

const it_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile leggere questo archivio.`)
};

const nl_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit archief kon niet worden gelezen.`)
};

const pl_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się odczytać tego archiwum.`)
};

const pt_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível ler esse arquivo.`)
};

const ru_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось прочитать этот архив.`)
};

const sv_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arkivet gick inte att läsa.`)
};

const tr_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu arşiv okunamadı.`)
};

const zh_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法读取该压缩包。`)
};

const ja_logs_err_archive = /** @type {(inputs: Logs_Err_ArchiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアーカイブを読み取れませんでした。`)
};

/**
* | output |
* | --- |
* | "Could not read that archive." |
*
* @param {Logs_Err_ArchiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_archive = /** @type {((inputs?: Logs_Err_ArchiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_ArchiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_archive(inputs)
	if (locale === "de") return de_logs_err_archive(inputs)
	if (locale === "fr") return fr_logs_err_archive(inputs)
	if (locale === "it") return it_logs_err_archive(inputs)
	if (locale === "nl") return nl_logs_err_archive(inputs)
	if (locale === "pl") return pl_logs_err_archive(inputs)
	if (locale === "pt") return pt_logs_err_archive(inputs)
	if (locale === "ru") return ru_logs_err_archive(inputs)
	if (locale === "sv") return sv_logs_err_archive(inputs)
	if (locale === "tr") return tr_logs_err_archive(inputs)
	if (locale === "zh") return zh_logs_err_archive(inputs)
	if (locale === "ja") return ja_logs_err_archive(inputs)
	return en_logs_err_archive(inputs)
});
