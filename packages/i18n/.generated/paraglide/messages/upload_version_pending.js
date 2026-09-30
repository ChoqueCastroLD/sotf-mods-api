/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Version_PendingInputs */

const en_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose the file first: the version is read from it.`)
};

const es_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige primero el archivo: la versión se lee de él.`)
};

const de_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle zuerst die Datei: Die Version wird daraus gelesen.`)
};

const fr_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez d’abord le fichier : la version y est lue.`)
};

const it_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli prima il file: la versione viene letta da lì.`)
};

const nl_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies eerst het bestand: de versie wordt eruit gelezen.`)
};

const pl_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw wybierz plik: wersja zostanie z niego odczytana.`)
};

const pt_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha o arquivo primeiro: a versão é lida dele.`)
};

const ru_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала выберите файл: версия считывается из него.`)
};

const sv_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj filen först: versionen läses från den.`)
};

const tr_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce dosyayı seç: sürüm oradan okunur.`)
};

const zh_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先选择文件：版本号会从中读取。`)
};

const ja_upload_version_pending = /** @type {(inputs: Upload_Version_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先にファイルを選んでください。バージョンはファイルから読み取ります。`)
};

/**
* | output |
* | --- |
* | "Choose the file first: the version is read from it." |
*
* @param {Upload_Version_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_version_pending = /** @type {((inputs?: Upload_Version_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Version_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_version_pending(inputs)
	if (locale === "de") return de_upload_version_pending(inputs)
	if (locale === "fr") return fr_upload_version_pending(inputs)
	if (locale === "it") return it_upload_version_pending(inputs)
	if (locale === "nl") return nl_upload_version_pending(inputs)
	if (locale === "pl") return pl_upload_version_pending(inputs)
	if (locale === "pt") return pt_upload_version_pending(inputs)
	if (locale === "ru") return ru_upload_version_pending(inputs)
	if (locale === "sv") return sv_upload_version_pending(inputs)
	if (locale === "tr") return tr_upload_version_pending(inputs)
	if (locale === "zh") return zh_upload_version_pending(inputs)
	if (locale === "ja") return ja_upload_version_pending(inputs)
	return en_upload_version_pending(inputs)
});
