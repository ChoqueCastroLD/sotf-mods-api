/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_Add_KitInputs */

const en_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add to kit`)
};

const es_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir a un kit`)
};

const de_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zu Kit hinzufügen`)
};

const fr_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter à un kit`)
};

const it_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi a un kit`)
};

const nl_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aan kit toevoegen`)
};

const pl_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj do zestawu`)
};

const pt_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar a um kit`)
};

const ru_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить в набор`)
};

const sv_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till i kit`)
};

const tr_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit'e ekle`)
};

const zh_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加到套件`)
};

const ja_cmdk_act_add_kit = /** @type {(inputs: Cmdk_Act_Add_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットに追加`)
};

/**
* | output |
* | --- |
* | "Add to kit" |
*
* @param {Cmdk_Act_Add_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_add_kit = /** @type {((inputs?: Cmdk_Act_Add_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_Add_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_add_kit(inputs)
	if (locale === "de") return de_cmdk_act_add_kit(inputs)
	if (locale === "fr") return fr_cmdk_act_add_kit(inputs)
	if (locale === "it") return it_cmdk_act_add_kit(inputs)
	if (locale === "nl") return nl_cmdk_act_add_kit(inputs)
	if (locale === "pl") return pl_cmdk_act_add_kit(inputs)
	if (locale === "pt") return pt_cmdk_act_add_kit(inputs)
	if (locale === "ru") return ru_cmdk_act_add_kit(inputs)
	if (locale === "sv") return sv_cmdk_act_add_kit(inputs)
	if (locale === "tr") return tr_cmdk_act_add_kit(inputs)
	if (locale === "zh") return zh_cmdk_act_add_kit(inputs)
	if (locale === "ja") return ja_cmdk_act_add_kit(inputs)
	return en_cmdk_act_add_kit(inputs)
});
