/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Versions_Latest_OnlyInputs */

const en_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The creator allows downloads of the latest version only.`)
};

const es_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El creador solo permite descargar la última versión.`)
};

const de_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Ersteller erlaubt nur den Download der neuesten Version.`)
};

const fr_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le créateur autorise uniquement le téléchargement de la dernière version.`)
};

const it_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il creatore consente di scaricare solo l'ultima versione.`)
};

const nl_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De maker staat alleen downloads van de nieuwste versie toe.`)
};

const pl_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca pozwala pobierać tylko najnowszą wersję.`)
};

const pt_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O criador permite baixar apenas a versão mais recente.`)
};

const ru_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор разрешает скачивать только последнюю версию.`)
};

const sv_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparen tillåter bara nedladdning av den senaste versionen.`)
};

const tr_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı yalnızca en son sürümün indirilmesine izin veriyor.`)
};

const zh_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者只允许下载最新版本。`)
};

const ja_mod_versions_latest_only = /** @type {(inputs: Mod_Versions_Latest_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者は最新バージョンのダウンロードのみを許可しています。`)
};

/**
* | output |
* | --- |
* | "The creator allows downloads of the latest version only." |
*
* @param {Mod_Versions_Latest_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_versions_latest_only = /** @type {((inputs?: Mod_Versions_Latest_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_Latest_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_versions_latest_only(inputs)
	if (locale === "de") return de_mod_versions_latest_only(inputs)
	if (locale === "fr") return fr_mod_versions_latest_only(inputs)
	if (locale === "it") return it_mod_versions_latest_only(inputs)
	if (locale === "nl") return nl_mod_versions_latest_only(inputs)
	if (locale === "pl") return pl_mod_versions_latest_only(inputs)
	if (locale === "pt") return pt_mod_versions_latest_only(inputs)
	if (locale === "ru") return ru_mod_versions_latest_only(inputs)
	if (locale === "sv") return sv_mod_versions_latest_only(inputs)
	if (locale === "tr") return tr_mod_versions_latest_only(inputs)
	if (locale === "zh") return zh_mod_versions_latest_only(inputs)
	if (locale === "ja") return ja_mod_versions_latest_only(inputs)
	return en_mod_versions_latest_only(inputs)
});
