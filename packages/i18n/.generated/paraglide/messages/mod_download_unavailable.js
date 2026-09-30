/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Download_UnavailableInputs */

const en_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No downloadable file right now.`)
};

const es_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora mismo no hay ningún archivo para descargar.`)
};

const de_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerade gibt es keine herunterladbare Datei.`)
};

const fr_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun fichier téléchargeable pour le moment.`)
};

const it_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento non c’è un file scaricabile.`)
};

const nl_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is nu geen downloadbaar bestand.`)
};

const pl_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obecnie nie ma pliku do pobrania.`)
};

const pt_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum arquivo disponível para download agora.`)
};

const ru_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас нет файла для загрузки.`)
};

const sv_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det finns ingen fil att ladda ner just nu.`)
};

const tr_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu anda indirilebilir bir dosya yok.`)
};

const zh_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前没有可下载的文件。`)
};

const ja_mod_download_unavailable = /** @type {(inputs: Mod_Download_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在ダウンロードできるファイルはありません。`)
};

/**
* | output |
* | --- |
* | "No downloadable file right now." |
*
* @param {Mod_Download_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_download_unavailable = /** @type {((inputs?: Mod_Download_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Download_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_download_unavailable(inputs)
	if (locale === "de") return de_mod_download_unavailable(inputs)
	if (locale === "fr") return fr_mod_download_unavailable(inputs)
	if (locale === "it") return it_mod_download_unavailable(inputs)
	if (locale === "nl") return nl_mod_download_unavailable(inputs)
	if (locale === "pl") return pl_mod_download_unavailable(inputs)
	if (locale === "pt") return pt_mod_download_unavailable(inputs)
	if (locale === "ru") return ru_mod_download_unavailable(inputs)
	if (locale === "sv") return sv_mod_download_unavailable(inputs)
	if (locale === "tr") return tr_mod_download_unavailable(inputs)
	if (locale === "zh") return zh_mod_download_unavailable(inputs)
	if (locale === "ja") return ja_mod_download_unavailable(inputs)
	return en_mod_download_unavailable(inputs)
});
