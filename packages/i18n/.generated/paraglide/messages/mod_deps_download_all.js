/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Deps_Download_AllInputs */

const en_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download all`)
};

const es_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargar todo`)
};

const de_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle herunterladen`)
};

const fr_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout télécharger`)
};

const it_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scarica tutto`)
};

const nl_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles downloaden`)
};

const pl_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobierz wszystko`)
};

const pt_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baixar tudo`)
};

const ru_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачать всё`)
};

const sv_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda ner allt`)
};

const tr_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümünü indir`)
};

const zh_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部下载`)
};

const ja_mod_deps_download_all = /** @type {(inputs: Mod_Deps_Download_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてダウンロード`)
};

/**
* | output |
* | --- |
* | "Download all" |
*
* @param {Mod_Deps_Download_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_deps_download_all = /** @type {((inputs?: Mod_Deps_Download_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Deps_Download_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_deps_download_all(inputs)
	if (locale === "de") return de_mod_deps_download_all(inputs)
	if (locale === "fr") return fr_mod_deps_download_all(inputs)
	if (locale === "it") return it_mod_deps_download_all(inputs)
	if (locale === "nl") return nl_mod_deps_download_all(inputs)
	if (locale === "pl") return pl_mod_deps_download_all(inputs)
	if (locale === "pt") return pt_mod_deps_download_all(inputs)
	if (locale === "ru") return ru_mod_deps_download_all(inputs)
	if (locale === "sv") return sv_mod_deps_download_all(inputs)
	if (locale === "tr") return tr_mod_deps_download_all(inputs)
	if (locale === "zh") return zh_mod_deps_download_all(inputs)
	if (locale === "ja") return ja_mod_deps_download_all(inputs)
	return en_mod_deps_download_all(inputs)
});
