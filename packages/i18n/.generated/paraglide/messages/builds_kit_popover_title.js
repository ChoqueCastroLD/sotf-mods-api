/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Kit_Popover_TitleInputs */

const en_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add to a Kit`)
};

const es_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir a un Kit`)
};

const de_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu einem Kit hinzufügen`)
};

const fr_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter à un Kit`)
};

const it_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi a un Kit`)
};

const nl_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aan een Kit toevoegen`)
};

const pl_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj do Zestawu`)
};

const pt_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar a um Kit`)
};

const ru_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить в набор`)
};

const sv_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till i ett Kit`)
};

const tr_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir Kit’e ekle`)
};

const zh_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加到套件`)
};

const ja_builds_kit_popover_title = /** @type {(inputs: Builds_Kit_Popover_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットに追加`)
};

/**
* | output |
* | --- |
* | "Add to a Kit" |
*
* @param {Builds_Kit_Popover_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_kit_popover_title = /** @type {((inputs?: Builds_Kit_Popover_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Kit_Popover_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_kit_popover_title(inputs)
	if (locale === "de") return de_builds_kit_popover_title(inputs)
	if (locale === "fr") return fr_builds_kit_popover_title(inputs)
	if (locale === "it") return it_builds_kit_popover_title(inputs)
	if (locale === "nl") return nl_builds_kit_popover_title(inputs)
	if (locale === "pl") return pl_builds_kit_popover_title(inputs)
	if (locale === "pt") return pt_builds_kit_popover_title(inputs)
	if (locale === "ru") return ru_builds_kit_popover_title(inputs)
	if (locale === "sv") return sv_builds_kit_popover_title(inputs)
	if (locale === "tr") return tr_builds_kit_popover_title(inputs)
	if (locale === "zh") return zh_builds_kit_popover_title(inputs)
	if (locale === "ja") return ja_builds_kit_popover_title(inputs)
	return en_builds_kit_popover_title(inputs)
});
