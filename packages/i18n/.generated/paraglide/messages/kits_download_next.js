/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Download_NextInputs */

const en_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download next`)
};

const es_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar el siguiente`)
};

const de_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nächste herunterladen`)
};

const fr_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Télécharger le suivant`)
};

const it_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica il successivo`)
};

const nl_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende downloaden`)
};

const pl_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz następny`)
};

const pt_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar o próximo`)
};

const ru_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать следующий`)
};

const sv_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner nästa`)
};

const tr_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıradakini indir`)
};

const zh_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载下一个`)
};

const ja_kits_download_next = /** @type {(inputs: Kits_Download_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次をダウンロード`)
};

/**
* | output |
* | --- |
* | "Download next" |
*
* @param {Kits_Download_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_download_next = /** @type {((inputs?: Kits_Download_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Download_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_download_next(inputs)
	if (locale === "de") return de_kits_download_next(inputs)
	if (locale === "fr") return fr_kits_download_next(inputs)
	if (locale === "it") return it_kits_download_next(inputs)
	if (locale === "nl") return nl_kits_download_next(inputs)
	if (locale === "pl") return pl_kits_download_next(inputs)
	if (locale === "pt") return pt_kits_download_next(inputs)
	if (locale === "ru") return ru_kits_download_next(inputs)
	if (locale === "sv") return sv_kits_download_next(inputs)
	if (locale === "tr") return tr_kits_download_next(inputs)
	if (locale === "zh") return zh_kits_download_next(inputs)
	if (locale === "ja") return ja_kits_download_next(inputs)
	return en_kits_download_next(inputs)
});
