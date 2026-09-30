/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Mods_New_Version_NamedInputs */

const en_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`New version of ${i?.name}`)
};

const es_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nueva versión de ${i?.name}`)
};

const de_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neue Version von ${i?.name}`)
};

const fr_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nouvelle version de ${i?.name}`)
};

const it_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nuova versione di ${i?.name}`)
};

const nl_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nieuwe versie van ${i?.name}`)
};

const pl_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nowa wersja: ${i?.name}`)
};

const pt_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nova versão de ${i?.name}`)
};

const ru_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Новая версия ${i?.name}`)
};

const sv_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ny version av ${i?.name}`)
};

const tr_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için yeni sürüm`)
};

const zh_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的新版本`)
};

const ja_basecamp_mods_new_version_named = /** @type {(inputs: Basecamp_Mods_New_Version_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の新しいバージョン`)
};

/**
* | output |
* | --- |
* | "New version of {name}" |
*
* @param {Basecamp_Mods_New_Version_NamedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_new_version_named = /** @type {((inputs: Basecamp_Mods_New_Version_NamedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_New_Version_NamedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_new_version_named(inputs)
	if (locale === "de") return de_basecamp_mods_new_version_named(inputs)
	if (locale === "fr") return fr_basecamp_mods_new_version_named(inputs)
	if (locale === "it") return it_basecamp_mods_new_version_named(inputs)
	if (locale === "nl") return nl_basecamp_mods_new_version_named(inputs)
	if (locale === "pl") return pl_basecamp_mods_new_version_named(inputs)
	if (locale === "pt") return pt_basecamp_mods_new_version_named(inputs)
	if (locale === "ru") return ru_basecamp_mods_new_version_named(inputs)
	if (locale === "sv") return sv_basecamp_mods_new_version_named(inputs)
	if (locale === "tr") return tr_basecamp_mods_new_version_named(inputs)
	if (locale === "zh") return zh_basecamp_mods_new_version_named(inputs)
	if (locale === "ja") return ja_basecamp_mods_new_version_named(inputs)
	return en_basecamp_mods_new_version_named(inputs)
});
