/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Version_Download_OffInputs */

const en_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not available`)
};

const es_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No disponible`)
};

const de_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht verfügbar`)
};

const fr_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indisponible`)
};

const it_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non disponibile`)
};

const nl_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet beschikbaar`)
};

const pl_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niedostępne`)
};

const pt_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indisponível`)
};

const ru_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недоступно`)
};

const sv_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte tillgänglig`)
};

const tr_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanılamıyor`)
};

const zh_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不可用`)
};

const ja_mod_version_download_off = /** @type {(inputs: Mod_Version_Download_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`利用不可`)
};

/**
* | output |
* | --- |
* | "Not available" |
*
* @param {Mod_Version_Download_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_version_download_off = /** @type {((inputs?: Mod_Version_Download_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_Download_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_version_download_off(inputs)
	if (locale === "de") return de_mod_version_download_off(inputs)
	if (locale === "fr") return fr_mod_version_download_off(inputs)
	if (locale === "it") return it_mod_version_download_off(inputs)
	if (locale === "nl") return nl_mod_version_download_off(inputs)
	if (locale === "pl") return pl_mod_version_download_off(inputs)
	if (locale === "pt") return pt_mod_version_download_off(inputs)
	if (locale === "ru") return ru_mod_version_download_off(inputs)
	if (locale === "sv") return sv_mod_version_download_off(inputs)
	if (locale === "tr") return tr_mod_version_download_off(inputs)
	if (locale === "zh") return zh_mod_version_download_off(inputs)
	if (locale === "ja") return ja_mod_version_download_off(inputs)
	return en_mod_version_download_off(inputs)
});
