/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Kit_Popover_CreateInputs */

const en_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a Kit`)
};

const es_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear un Kit`)
};

const de_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit erstellen`)
};

const fr_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer un Kit`)
};

const it_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un Kit`)
};

const nl_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit maken`)
};

const pl_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz Zestaw`)
};

const pt_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar um Kit`)
};

const ru_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать набор`)
};

const sv_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa ett Kit`)
};

const tr_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit oluştur`)
};

const zh_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建套件`)
};

const ja_builds_kit_popover_create = /** @type {(inputs: Builds_Kit_Popover_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを作成`)
};

/**
* | output |
* | --- |
* | "Create a Kit" |
*
* @param {Builds_Kit_Popover_CreateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_kit_popover_create = /** @type {((inputs?: Builds_Kit_Popover_CreateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Kit_Popover_CreateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_kit_popover_create(inputs)
	if (locale === "de") return de_builds_kit_popover_create(inputs)
	if (locale === "fr") return fr_builds_kit_popover_create(inputs)
	if (locale === "it") return it_builds_kit_popover_create(inputs)
	if (locale === "nl") return nl_builds_kit_popover_create(inputs)
	if (locale === "pl") return pl_builds_kit_popover_create(inputs)
	if (locale === "pt") return pt_builds_kit_popover_create(inputs)
	if (locale === "ru") return ru_builds_kit_popover_create(inputs)
	if (locale === "sv") return sv_builds_kit_popover_create(inputs)
	if (locale === "tr") return tr_builds_kit_popover_create(inputs)
	if (locale === "zh") return zh_builds_kit_popover_create(inputs)
	if (locale === "ja") return ja_builds_kit_popover_create(inputs)
	return en_builds_kit_popover_create(inputs)
});
