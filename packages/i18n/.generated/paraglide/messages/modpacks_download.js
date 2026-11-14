/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_DownloadInputs */

const en_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download modpack`)
};

const es_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar modpack`)
};

const de_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack herunterladen`)
};

const fr_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger le modpack`)
};

const it_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica modpack`)
};

const nl_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpack downloaden`)
};

const pl_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz modpack`)
};

const pt_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar modpack`)
};

const ru_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать модпак`)
};

const sv_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner modpaket`)
};

const tr_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketini indir`)
};

const zh_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载整合包`)
};

const ja_modpacks_download = /** @type {(inputs: Modpacks_DownloadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックをダウンロード`)
};

/**
* | output |
* | --- |
* | "Download modpack" |
*
* @param {Modpacks_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_download = /** @type {((inputs?: Modpacks_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_download(inputs)
	if (locale === "de") return de_modpacks_download(inputs)
	if (locale === "fr") return fr_modpacks_download(inputs)
	if (locale === "it") return it_modpacks_download(inputs)
	if (locale === "nl") return nl_modpacks_download(inputs)
	if (locale === "pl") return pl_modpacks_download(inputs)
	if (locale === "pt") return pt_modpacks_download(inputs)
	if (locale === "ru") return ru_modpacks_download(inputs)
	if (locale === "sv") return sv_modpacks_download(inputs)
	if (locale === "tr") return tr_modpacks_download(inputs)
	if (locale === "zh") return zh_modpacks_download(inputs)
	if (locale === "ja") return ja_modpacks_download(inputs)
	return en_modpacks_download(inputs)
});
