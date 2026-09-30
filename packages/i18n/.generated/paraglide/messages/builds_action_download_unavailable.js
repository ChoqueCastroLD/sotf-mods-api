/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Action_Download_UnavailableInputs */

const en_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No file to download yet`)
};

const es_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay archivo para descargar`)
};

const de_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Datei zum Herunterladen`)
};

const fr_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun fichier à télécharger pour l’instant`)
};

const it_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun file da scaricare`)
};

const nl_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen bestand om te downloaden`)
};

const pl_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak pliku do pobrania`)
};

const pt_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há arquivo para baixar`)
};

const ru_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файла для скачивания пока нет`)
};

const sv_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen fil att ladda ner ännu`)
};

const tr_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz indirilecek dosya yok`)
};

const zh_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时没有可下载的文件`)
};

const ja_builds_action_download_unavailable = /** @type {(inputs: Builds_Action_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードできるファイルはまだありません`)
};

/**
* | output |
* | --- |
* | "No file to download yet" |
*
* @param {Builds_Action_Download_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_action_download_unavailable = /** @type {((inputs?: Builds_Action_Download_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Action_Download_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_action_download_unavailable(inputs)
	if (locale === "de") return de_builds_action_download_unavailable(inputs)
	if (locale === "fr") return fr_builds_action_download_unavailable(inputs)
	if (locale === "it") return it_builds_action_download_unavailable(inputs)
	if (locale === "nl") return nl_builds_action_download_unavailable(inputs)
	if (locale === "pl") return pl_builds_action_download_unavailable(inputs)
	if (locale === "pt") return pt_builds_action_download_unavailable(inputs)
	if (locale === "ru") return ru_builds_action_download_unavailable(inputs)
	if (locale === "sv") return sv_builds_action_download_unavailable(inputs)
	if (locale === "tr") return tr_builds_action_download_unavailable(inputs)
	if (locale === "zh") return zh_builds_action_download_unavailable(inputs)
	if (locale === "ja") return ja_builds_action_download_unavailable(inputs)
	return en_builds_action_download_unavailable(inputs)
});
