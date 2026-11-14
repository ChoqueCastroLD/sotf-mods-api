/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Empty_TitleInputs */

const en_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No modpacks yet`)
};

const es_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay modpacks`)
};

const de_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Modpacks`)
};

const fr_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun modpack pour l’instant`)
};

const it_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun modpack`)
};

const nl_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen modpacks`)
};

const pl_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma jeszcze modpacków`)
};

const pt_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há modpacks`)
};

const ru_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модпаков пока нет`)
};

const sv_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga modpaket än`)
};

const tr_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz mod paketi yok`)
};

const zh_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有整合包`)
};

const ja_modpacks_empty_title = /** @type {(inputs: Modpacks_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックはまだありません`)
};

/**
* | output |
* | --- |
* | "No modpacks yet" |
*
* @param {Modpacks_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_empty_title = /** @type {((inputs?: Modpacks_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_empty_title(inputs)
	if (locale === "de") return de_modpacks_empty_title(inputs)
	if (locale === "fr") return fr_modpacks_empty_title(inputs)
	if (locale === "it") return it_modpacks_empty_title(inputs)
	if (locale === "nl") return nl_modpacks_empty_title(inputs)
	if (locale === "pl") return pl_modpacks_empty_title(inputs)
	if (locale === "pt") return pt_modpacks_empty_title(inputs)
	if (locale === "ru") return ru_modpacks_empty_title(inputs)
	if (locale === "sv") return sv_modpacks_empty_title(inputs)
	if (locale === "tr") return tr_modpacks_empty_title(inputs)
	if (locale === "zh") return zh_modpacks_empty_title(inputs)
	if (locale === "ja") return ja_modpacks_empty_title(inputs)
	return en_modpacks_empty_title(inputs)
});
