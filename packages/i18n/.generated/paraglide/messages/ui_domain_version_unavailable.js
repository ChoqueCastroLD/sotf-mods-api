/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Version_UnavailableInputs */

const en_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File unavailable`)
};

const es_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivo no disponible`)
};

const de_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Datei nicht verfügbar`)
};

const fr_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichier indisponible`)
};

const it_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File non disponibile`)
};

const nl_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestand niet beschikbaar`)
};

const pl_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik niedostępny`)
};

const pt_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivo indisponível`)
};

const ru_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл недоступен`)
};

const sv_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är inte tillgänglig`)
};

const tr_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya kullanılamıyor`)
};

const zh_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件不可用`)
};

const ja_ui_domain_version_unavailable = /** @type {(inputs: Ui_Domain_Version_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを利用できません`)
};

/**
* | output |
* | --- |
* | "File unavailable" |
*
* @param {Ui_Domain_Version_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_version_unavailable = /** @type {((inputs?: Ui_Domain_Version_UnavailableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Version_UnavailableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_version_unavailable(inputs)
	if (locale === "de") return de_ui_domain_version_unavailable(inputs)
	if (locale === "fr") return fr_ui_domain_version_unavailable(inputs)
	if (locale === "it") return it_ui_domain_version_unavailable(inputs)
	if (locale === "nl") return nl_ui_domain_version_unavailable(inputs)
	if (locale === "pl") return pl_ui_domain_version_unavailable(inputs)
	if (locale === "pt") return pt_ui_domain_version_unavailable(inputs)
	if (locale === "ru") return ru_ui_domain_version_unavailable(inputs)
	if (locale === "sv") return sv_ui_domain_version_unavailable(inputs)
	if (locale === "tr") return tr_ui_domain_version_unavailable(inputs)
	if (locale === "zh") return zh_ui_domain_version_unavailable(inputs)
	if (locale === "ja") return ja_ui_domain_version_unavailable(inputs)
	return en_ui_domain_version_unavailable(inputs)
});
