/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_Download_AllInputs */

const en_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download all`)
};

const es_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar todo`)
};

const de_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles herunterladen`)
};

const fr_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout télécharger`)
};

const it_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica tutto`)
};

const nl_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles downloaden`)
};

const pl_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz wszystko`)
};

const pt_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Transferir tudo`)
};

const ru_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать всё`)
};

const sv_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner allt`)
};

const tr_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hepsini indir`)
};

const zh_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部下载`)
};

const ja_bundles_download_all = /** @type {(inputs: Bundles_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてダウンロード`)
};

/**
* | output |
* | --- |
* | "Download all" |
*
* @param {Bundles_Download_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_download_all = /** @type {((inputs?: Bundles_Download_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_Download_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_download_all(inputs)
	if (locale === "de") return de_bundles_download_all(inputs)
	if (locale === "fr") return fr_bundles_download_all(inputs)
	if (locale === "it") return it_bundles_download_all(inputs)
	if (locale === "nl") return nl_bundles_download_all(inputs)
	if (locale === "pl") return pl_bundles_download_all(inputs)
	if (locale === "pt") return pt_bundles_download_all(inputs)
	if (locale === "ru") return ru_bundles_download_all(inputs)
	if (locale === "sv") return sv_bundles_download_all(inputs)
	if (locale === "tr") return tr_bundles_download_all(inputs)
	if (locale === "zh") return zh_bundles_download_all(inputs)
	if (locale === "ja") return ja_bundles_download_all(inputs)
	return en_bundles_download_all(inputs)
});
