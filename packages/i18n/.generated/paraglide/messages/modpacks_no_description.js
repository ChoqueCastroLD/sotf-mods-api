/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_No_DescriptionInputs */

const en_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No description.`)
};

const es_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin descripción.`)
};

const de_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Beschreibung.`)
};

const fr_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune description.`)
};

const it_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna descrizione.`)
};

const nl_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen beschrijving.`)
};

const pl_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak opisu.`)
};

const pt_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem descrição.`)
};

const ru_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет описания.`)
};

const sv_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen beskrivning.`)
};

const tr_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama yok.`)
};

const zh_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无简介。`)
};

const ja_modpacks_no_description = /** @type {(inputs: Modpacks_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明はありません。`)
};

/**
* | output |
* | --- |
* | "No description." |
*
* @param {Modpacks_No_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_no_description = /** @type {((inputs?: Modpacks_No_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_No_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_no_description(inputs)
	if (locale === "de") return de_modpacks_no_description(inputs)
	if (locale === "fr") return fr_modpacks_no_description(inputs)
	if (locale === "it") return it_modpacks_no_description(inputs)
	if (locale === "nl") return nl_modpacks_no_description(inputs)
	if (locale === "pl") return pl_modpacks_no_description(inputs)
	if (locale === "pt") return pt_modpacks_no_description(inputs)
	if (locale === "ru") return ru_modpacks_no_description(inputs)
	if (locale === "sv") return sv_modpacks_no_description(inputs)
	if (locale === "tr") return tr_modpacks_no_description(inputs)
	if (locale === "zh") return zh_modpacks_no_description(inputs)
	if (locale === "ja") return ja_modpacks_no_description(inputs)
	return en_modpacks_no_description(inputs)
});
