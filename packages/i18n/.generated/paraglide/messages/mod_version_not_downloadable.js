/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Version_Not_DownloadableInputs */

const en_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This version can’t be downloaded.`)
};

const es_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versión no se puede descargar.`)
};

const de_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Version kann nicht heruntergeladen werden.`)
};

const fr_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette version ne peut pas être téléchargée.`)
};

const it_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa versione non si può scaricare.`)
};

const nl_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze versie kan niet worden gedownload.`)
};

const pl_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tej wersji nie można pobrać.`)
};

const pt_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta versão não pode ser baixada.`)
};

const ru_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эту версию нельзя скачать.`)
};

const sv_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här versionen kan inte laddas ner.`)
};

const tr_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sürüm indirilemez.`)
};

const zh_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此版本无法下载。`)
};

const ja_mod_version_not_downloadable = /** @type {(inputs: Mod_Version_Not_DownloadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このバージョンはダウンロードできません。`)
};

/**
* | output |
* | --- |
* | "This version can’t be downloaded." |
*
* @param {Mod_Version_Not_DownloadableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_version_not_downloadable = /** @type {((inputs?: Mod_Version_Not_DownloadableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_Not_DownloadableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_version_not_downloadable(inputs)
	if (locale === "de") return de_mod_version_not_downloadable(inputs)
	if (locale === "fr") return fr_mod_version_not_downloadable(inputs)
	if (locale === "it") return it_mod_version_not_downloadable(inputs)
	if (locale === "nl") return nl_mod_version_not_downloadable(inputs)
	if (locale === "pl") return pl_mod_version_not_downloadable(inputs)
	if (locale === "pt") return pt_mod_version_not_downloadable(inputs)
	if (locale === "ru") return ru_mod_version_not_downloadable(inputs)
	if (locale === "sv") return sv_mod_version_not_downloadable(inputs)
	if (locale === "tr") return tr_mod_version_not_downloadable(inputs)
	if (locale === "zh") return zh_mod_version_not_downloadable(inputs)
	if (locale === "ja") return ja_mod_version_not_downloadable(inputs)
	return en_mod_version_not_downloadable(inputs)
});
