/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Download_Done_LabelInputs */

const en_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloaded ✓`)
};

const es_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargado ✓`)
};

const de_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heruntergeladen ✓`)
};

const fr_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargé ✓`)
};

const it_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scaricata ✓`)
};

const nl_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gedownload ✓`)
};

const pl_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrano ✓`)
};

const pt_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixado ✓`)
};

const ru_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачано ✓`)
};

const sv_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdad ✓`)
};

const tr_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirildi ✓`)
};

const zh_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已下载 ✓`)
};

const ja_mod_download_done_label = /** @type {(inputs: Mod_Download_Done_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード済み ✓`)
};

/**
* | output |
* | --- |
* | "Downloaded ✓" |
*
* @param {Mod_Download_Done_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_download_done_label = /** @type {((inputs?: Mod_Download_Done_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Download_Done_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_download_done_label(inputs)
	if (locale === "de") return de_mod_download_done_label(inputs)
	if (locale === "fr") return fr_mod_download_done_label(inputs)
	if (locale === "it") return it_mod_download_done_label(inputs)
	if (locale === "nl") return nl_mod_download_done_label(inputs)
	if (locale === "pl") return pl_mod_download_done_label(inputs)
	if (locale === "pt") return pt_mod_download_done_label(inputs)
	if (locale === "ru") return ru_mod_download_done_label(inputs)
	if (locale === "sv") return sv_mod_download_done_label(inputs)
	if (locale === "tr") return tr_mod_download_done_label(inputs)
	if (locale === "zh") return zh_mod_download_done_label(inputs)
	if (locale === "ja") return ja_mod_download_done_label(inputs)
	return en_mod_download_done_label(inputs)
});
